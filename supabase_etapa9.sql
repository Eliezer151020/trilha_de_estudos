-- ETAPA 9: executar UMA VEZ no SQL Editor do mesmo projeto
-- Conserva suas quatro tabelas e acrescenta um campo JSON para armazenar
-- o plano editável completo na tabela rotinas, sob proteção da RLS já criada.
ALTER TABLE public.rotinas
  ADD COLUMN IF NOT EXISTS estado jsonb;

-- Evita dois documentos 'plano-integral' por conta.
CREATE UNIQUE INDEX IF NOT EXISTS uq_rotinas_plano_integral_usuario
  ON public.rotinas (usuario_id)
  WHERE tipo = 'plano-integral';

-- Verifica que RLS continua ativa.
ALTER TABLE public.rotinas ENABLE ROW LEVEL SECURITY;

-- As políticas usuario_rotinas criadas na Etapa 5 continuam necessárias.
-- Esta etapa não cria políticas abertas nem permite acesso anônimo.
