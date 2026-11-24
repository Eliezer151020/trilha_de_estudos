/* Sincronização Supabase — snapshot JSON do plano na tabela rotinas.
   Os dados locais existentes são preservados e podem ser importados para a nuvem.
   Sem credenciais secretas no cliente. */
(() => {
  'use strict';
  const cfg = window.STUDY_SUPABASE_CONFIG;
  const status = document.getElementById('saveStatus');
  const dialog = document.getElementById('authDialog');
  const feedback = document.getElementById('authFeedback');
  const setStatus = text => { status.textContent = text; };
  const showMessage = text => { feedback.textContent = text; };
  const localKey = 'meu-plano-estudos-v1';
  const pendingKey = userId => `plano-supabase-pendente:${userId}`;
  const ownerKey = 'meu-plano-estudos-ultimo-usuario';
  const isConfigured = Boolean(cfg?.url && /^sb_publishable_/.test(cfg?.publishableKey || ''));
  const client = isConfigured && window.supabase?.createClient
    ? window.supabase.createClient(cfg.url, cfg.publishableKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      }) : null;
  let user = null, recordId = null, activeUserId = null;
  let version = 0, syncedVersion = 0, busy = false, timer = null, isLoading = false;
  let mode = 'login';

  function showAuth() {
    dialog.showModal();
    updateAccountUI();
    if (!client) showMessage('Primeiro configure a chave publicável no arquivo config.js.');
  }
  function updateAccountUI() {
    const signed = Boolean(user);
    document.getElementById('authHeading').textContent = signed ? 'Minha conta' : (mode === 'login' ? 'Entrar' : 'Criar conta');
    document.getElementById('authHelp').textContent = signed
      ? 'Seu plano está vinculado à conta abaixo.'
      : 'Use o mesmo e-mail e senha no computador e no celular.';
    document.getElementById('authEmail').parentElement.hidden = signed;
    document.getElementById('authPassword').parentElement.hidden = signed;
    document.getElementById('authSubmit').hidden = signed;
    document.getElementById('toggleAuth').hidden = signed;
    document.getElementById('resetPassword').hidden = signed;
    document.getElementById('accountActions').hidden = !signed;
    document.getElementById('accountEmail').textContent = signed ? user.email : '';
    document.getElementById('authSubmit').textContent = mode === 'login' ? 'Entrar' : 'Criar conta';
    document.getElementById('toggleAuth').textContent = mode === 'login' ? 'Criar conta' : 'Já tenho conta';
  }

  async function cloudRequest(payload, id) {
    if (id) {
      const { data: updated, error } = await client.from('rotinas')
        .update({ estado: payload })
        .eq('id', id).eq('usuario_id', user.id)
        .select('id').single();
      if (error) throw error;
      if (!updated) throw Error('O registro não foi encontrado.');
      return id;
    }
    const { data: created, error } = await client.from('rotinas')
      .insert({ usuario_id:user.id, titulo:'Meu Plano de Estudos', tipo:'plano-integral', estado:payload })
      .select('id').single();
    if (error) throw error;
    return created.id;
  }
  function markPending() {
    if (user) localStorage.setItem(pendingKey(user.id), '1');
  }
  async function flush() {
    if (!client || !user || !recordId || busy || isLoading || version <= syncedVersion) return;
    if (!navigator.onLine) { setStatus('● Sem conexão — cópia local pendente'); return; }
    busy = true;
    try {
      while (user && recordId && version > syncedVersion) {
        const thisUser = user.id, thisRecord = recordId;
        const currentVersion = version;
        const snapshot = JSON.parse(JSON.stringify(data));
        setStatus('● Salvando online…');
        const {error, data: result} = await client.from('rotinas')
          .update({estado:snapshot}).eq('id',thisRecord).eq('usuario_id',thisUser)
          .select('id');
        if (error) throw error;
        if (!result?.length) throw Error('Sem permissão para atualizar. Verifique as políticas RLS.');
        if (user?.id !== thisUser) return;
        syncedVersion = currentVersion;
      }
      if (user && version === syncedVersion) {
        localStorage.removeItem(pendingKey(user.id));
        setStatus('● Sincronizado na nuvem');
      }
    } catch (error) {
      setStatus('⚠ Salvo localmente — sincronização pendente');
      console.error('Erro ao sincronizar:', error);
    } finally { busy = false; }
  }
  window.studyOnline = {
    save() {
      if (!user || !recordId || isLoading) {
        setStatus('● Cópia local — entre na conta para sincronizar');
        return;
      }
      version++;
      markPending();
      setStatus('● Alterações pendentes');
      clearTimeout(timer);
      timer = setTimeout(flush, 650);
    }
  };

  async function loadAccount(nextUser) {
    if (!nextUser || !client) return;
    if (activeUserId === nextUser.id && recordId) return;
    clearTimeout(timer); user = nextUser; activeUserId = nextUser.id;
    isLoading = true; recordId = null; version = syncedVersion = 0;
    updateAccountUI();
    setStatus('● Carregando dados online…');
    try {
      const {data: row,error} = await client.from('rotinas')
        .select('id,estado').eq('usuario_id',nextUser.id)
        .eq('tipo','plano-integral').maybeSingle();
      if (error) throw error;
      const previousOwner = localStorage.getItem(ownerKey);
      const hadLocal = localStorage.getItem(localKey) !== null;
      // Se outra conta usou este navegador, nunca envie automaticamente os dados dela.
      if (previousOwner && previousOwner !== nextUser.id) {
        data = defaults();
        localStorage.removeItem(localKey);
      }
      const localPending = localStorage.getItem(pendingKey(nextUser.id)) === '1';
      if (row?.estado?.modules && Array.isArray(row.estado.modules)) {
        recordId = row.id;
        const differs = hadLocal && (!previousOwner || previousOwner === nextUser.id) && JSON.stringify(data) !== JSON.stringify(row.estado);
        // A nuvem é a fonte principal: só oferecemos substituir quando houve edição offline pendente.
        // Para importar um plano antigo, use o botão 'Importar backup' após entrar na conta.
        const importLocal = differs && localPending && confirm(
          'Existem edições locais ainda não sincronizadas.\n\nOK: enviar a cópia local ao Supabase.\nCancelar: usar a versão online. Faça backup se tiver dúvidas.'
        );
        if (!importLocal) {
          data = row.estado;
          localStorage.setItem(localKey, JSON.stringify(data));
          localStorage.setItem(ownerKey, nextUser.id);
          localStorage.removeItem(pendingKey(nextUser.id));
          openModules.clear(); openNodes.clear();
          render();
          setStatus('● Sincronizado na nuvem');
        } else {
          version++;
          markPending();
        }
      } else if (row?.id) {
        recordId = row.id;
        version++;
        markPending();
      } else {
        // Primeiro login: migra a cópia local existente, ou o plano padrão.
        recordId = await cloudRequest(JSON.parse(JSON.stringify(data)), null);
        localStorage.setItem(localKey,JSON.stringify(data));
        localStorage.setItem(ownerKey,nextUser.id);
        setStatus('● Plano inicial salvo na nuvem');
      }
    } catch (error) {
      console.error('Não foi possível carregar plano:',error);
      setStatus('⚠ Falha ao carregar — não edite antes de corrigir');
      alert('Falha ao carregar seu plano no Supabase: '+error.message+'\n\nConfirme que executou o arquivo supabase_etapa9.sql e ativou Data API/RLS.');
    } finally {
      if (recordId) localStorage.setItem(ownerKey,nextUser.id);
      isLoading = false;
      if (version > syncedVersion) await flush();
    }
  }
  document.getElementById('accountBtn').addEventListener('click',showAuth);
  document.getElementById('closeAuth').addEventListener('click',()=>dialog.close());
  document.getElementById('toggleAuth').addEventListener('click',()=>{
    mode = mode === 'login' ? 'signup' : 'login'; showMessage('');updateAccountUI();
  });
  document.getElementById('authForm').addEventListener('submit',async event=>{
    event.preventDefault();
    if (!client) {showMessage('Configure primeiro a chave publicável em config.js.');return;}
    const email=document.getElementById('authEmail').value.trim();
    const password=document.getElementById('authPassword').value;
    const button=document.getElementById('authSubmit');
    button.disabled=true;showMessage('Processando…');
    try {
      if (mode==='signup') {
        const {data:result,error}=await client.auth.signUp({email,password,options:{emailRedirectTo:location.origin+location.pathname}});
        if (error)throw error;
        showMessage(result.session?'Conta criada!':'Verifique sua caixa de e-mail e confirme o cadastro. Depois entre no site.');
        if (result.session) {dialog.close();await loadAccount(result.user);}
      } else {
        const {data:result,error}=await client.auth.signInWithPassword({email,password});
        if(error)throw error;
        dialog.close();await loadAccount(result.user);
      }
    }catch(error){showMessage('Erro: '+error.message);}finally{button.disabled=false;}
  });
  document.getElementById('resetPassword').addEventListener('click',async()=>{
    if (!client) return;
    const email=document.getElementById('authEmail').value.trim();
    if(!email){showMessage('Digite seu e-mail antes de recuperar a senha.');return;}
    const {error}=await client.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});
    showMessage(error ? error.message : 'Se o endereço estiver cadastrado, você receberá um e-mail de recuperação.');
  });
  document.getElementById('logoutBtn').addEventListener('click',async()=>{
    if(!client)return;
    if(version>syncedVersion && !confirm('Há alterações ainda não sincronizadas. Sair mesmo assim?'))return;
    const {error}=await client.auth.signOut();
    if(error){showMessage(error.message);return;}
    clearTimeout(timer); user=null;recordId=null;activeUserId=null;version=syncedVersion=0;
    localStorage.removeItem(localKey);
    localStorage.removeItem(ownerKey);
    data=defaults();openModules.clear();openNodes.clear();render();
    setStatus('● Conta desconectada');showMessage('Você saiu da conta.');updateAccountUI();
  });
  window.addEventListener('online',()=>{if(user && version>syncedVersion)flush();});

  (async()=>{
    if(!client){setStatus('⚠ Configure config.js para conectar ao Supabase');showAuth();return;}
    const {data:sessionResult,error}=await client.auth.getSession();
    if(error){setStatus('⚠ Erro de autenticação');showAuth();return;}
    if(sessionResult.session?.user){await loadAccount(sessionResult.session.user);}
    else {setStatus('● Faça login para sincronizar');showAuth();}
    client.auth.onAuthStateChange((event,session)=>{
      if(event==='SIGNED_IN' && session?.user && activeUserId!==session.user.id){
        // Não aguardar chamadas de banco dentro do callback de autenticação.
        setTimeout(()=>loadAccount(session.user),0);
      }
    });
  })();
})();
