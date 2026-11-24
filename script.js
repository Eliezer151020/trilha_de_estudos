const levels = [
  {
    "title": "Fundamentos",
    "subtitle": "Entenda como computadores, programas e sistemas funcionam.",
    "groups": [
      {
        "title": "Lógica e algoritmos",
        "topics": [
          {
            "title": "Lógica de programação",
            "legacyId": "l0-t0"
          },
          {
            "title": "Algoritmos",
            "legacyId": "l0-t1"
          },
          {
            "title": "Tipos de dados, variáveis e operadores",
            "legacyId": "l0-t12"
          },
          {
            "title": "Condicionais, laços e funções",
            "legacyId": "l0-t13"
          },
          {
            "title": "Escopo, parâmetros e modularização",
            "legacyId": "l0-t14"
          },
          {
            "title": "Recursão e resolução de problemas",
            "legacyId": "l0-t15"
          },
          {
            "title": "Resolução de problemas por decomposição",
            "legacyId": null
          },
          {
            "title": "Pseudocódigo e fluxogramas",
            "legacyId": null
          },
          {
            "title": "Variáveis, tipos de dados e operadores",
            "legacyId": null
          }
        ]
      },
      {
        "title": "Estruturas de dados e eficiência",
        "topics": [
          {
            "title": "Estruturas de dados",
            "legacyId": "l0-t2"
          },
          {
            "title": "Big O",
            "legacyId": "l0-t3"
          },
          {
            "title": "Busca, ordenação e análise de algoritmos",
            "legacyId": "l0-t19"
          }
        ]
      },
      {
        "title": "Matemática discreta",
        "topics": [
          {
            "title": "Matemática discreta: lógica e conjuntos",
            "legacyId": "l0-t17"
          },
          {
            "title": "Matemática discreta: relações e grafos",
            "legacyId": "l0-t18"
          }
        ]
      },
      {
        "title": "Paradigmas e design",
        "topics": [
          {
            "title": "Paradigmas: procedural, OOP e funcional",
            "legacyId": "l0-t16"
          },
          {
            "title": "Abstração, coesão e acoplamento",
            "legacyId": "l0-t22"
          }
        ]
      },
      {
        "title": "Computadores e memória",
        "topics": [
          {
            "title": "Sistemas operacionais",
            "legacyId": "l0-t4"
          },
          {
            "title": "Memória: stack, heap e referências",
            "legacyId": "l0-t20"
          },
          {
            "title": "Processos, threads e concorrência",
            "legacyId": "l0-t21"
          },
          {
            "title": "Arquitetura e organização de computadores",
            "legacyId": "l0-t23"
          }
        ]
      },
      {
        "title": "Linux e terminal",
        "topics": [
          {
            "title": "Linux básico",
            "legacyId": "l0-t5"
          },
          {
            "title": "Terminal / Bash",
            "legacyId": "l0-t6"
          }
        ]
      },
      {
        "title": "Redes",
        "topics": [
          {
            "title": "Redes básicas",
            "legacyId": "l0-t7"
          }
        ]
      },
      {
        "title": "Requisitos e modelagem",
        "topics": [
          {
            "title": "Engenharia de requisitos",
            "legacyId": "l0-t8"
          },
          {
            "title": "UML",
            "legacyId": "l0-t9"
          }
        ]
      },
      {
        "title": "Git e GitHub",
        "topics": [
          {
            "title": "Git",
            "legacyId": "l0-t10"
          },
          {
            "title": "GitHub",
            "legacyId": "l0-t11"
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento Web",
    "subtitle": "Construa interfaces modernas e aplicações web.",
    "groups": [
      {
        "title": "HTML",
        "topics": [
          {
            "title": "HTML5",
            "legacyId": "l1-t0"
          }
        ]
      },
      {
        "title": "CSS",
        "topics": [
          {
            "title": "CSS3",
            "legacyId": "l1-t1"
          }
        ]
      },
      {
        "title": "JavaScript",
        "topics": [
          {
            "title": "JavaScript ES6+",
            "legacyId": "l1-t2"
          },
          {
            "title": "DOM",
            "legacyId": "l1-t3"
          },
          {
            "title": "Async/Await",
            "legacyId": "l1-t4"
          },
          {
            "title": "Fetch API",
            "legacyId": "l1-t5"
          }
        ]
      },
      {
        "title": "TypeScript",
        "topics": [
          {
            "title": "TypeScript",
            "legacyId": "l1-t6"
          }
        ]
      },
      {
        "title": "React",
        "topics": [
          {
            "title": "React",
            "legacyId": "l1-t7"
          }
        ]
      },
      {
        "title": "Next.js",
        "topics": [
          {
            "title": "Next.js",
            "legacyId": "l1-t8"
          }
        ]
      }
    ]
  },
  {
    "title": "Banco + Backend",
    "subtitle": "Construa aplicações completas com persistência e APIs.",
    "groups": [
      {
        "title": "SQL e modelagem",
        "topics": [
          {
            "title": "SQL",
            "legacyId": "l2-t0"
          },
          {
            "title": "Modelagem de dados",
            "legacyId": "l2-t2"
          },
          {
            "title": "Índices",
            "legacyId": "l2-t18"
          },
          {
            "title": "Transactions",
            "legacyId": "l2-t19"
          }
        ]
      },
      {
        "title": "MySQL",
        "topics": [
          {
            "title": "MySQL",
            "legacyId": "l2-t1"
          }
        ]
      },
      {
        "title": "PHP",
        "topics": [
          {
            "title": "PHP",
            "legacyId": "l2-t3"
          },
          {
            "title": "PHP moderno",
            "legacyId": "l2-t4"
          },
          {
            "title": "Formulários GET/POST",
            "legacyId": "l2-t5"
          },
          {
            "title": "PHP + MySQL",
            "legacyId": "l2-t6"
          },
          {
            "title": "PDO",
            "legacyId": "l2-t7"
          },
          {
            "title": "Prepared Statements",
            "legacyId": "l2-t8"
          },
          {
            "title": "CRUD",
            "legacyId": "l2-t9"
          },
          {
            "title": "Validação de dados",
            "legacyId": "l2-t10"
          },
          {
            "title": "Upload de arquivos",
            "legacyId": "l2-t11"
          },
          {
            "title": "Cadastro de usuários",
            "legacyId": "l2-t12"
          },
          {
            "title": "Login / Logout",
            "legacyId": "l2-t13"
          },
          {
            "title": "POO",
            "legacyId": "l2-t14"
          },
          {
            "title": "Composer",
            "legacyId": "l2-t15"
          }
        ]
      },
      {
        "title": "Java",
        "topics": [
          {
            "title": "Java: sintaxe, tipos e controle de fluxo",
            "legacyId": "l2-t30"
          },
          {
            "title": "Java: métodos, classes e encapsulamento",
            "legacyId": "l2-t31"
          },
          {
            "title": "Java: interfaces, herança e polimorfismo",
            "legacyId": "l2-t32"
          },
          {
            "title": "Java: coleções, generics e streams",
            "legacyId": "l2-t33"
          },
          {
            "title": "Java: exceções e tratamento de erros",
            "legacyId": "l2-t34"
          },
          {
            "title": "Java: JDBC e conexão com MySQL",
            "legacyId": "l2-t35"
          },
          {
            "title": "Java: Maven ou Gradle",
            "legacyId": "l2-t36"
          },
          {
            "title": "Java: Spring Boot",
            "legacyId": "l2-t37"
          },
          {
            "title": "Java: APIs REST com Spring Web",
            "legacyId": "l2-t38"
          },
          {
            "title": "Java: JPA e Hibernate",
            "legacyId": "l2-t39"
          },
          {
            "title": "Java: validação e tratamento de erros em APIs",
            "legacyId": "l2-t40"
          },
          {
            "title": "Java: Spring Security",
            "legacyId": "l2-t41"
          },
          {
            "title": "Java: testes com JUnit e Mockito",
            "legacyId": "l2-t42"
          },
          {
            "title": "Java: integração, deploy e documentação da API",
            "legacyId": "l2-t43"
          }
        ]
      },
      {
        "title": "Laravel",
        "topics": [
          {
            "title": "Laravel",
            "legacyId": "l2-t16"
          }
        ]
      },
      {
        "title": "PostgreSQL",
        "topics": [
          {
            "title": "PostgreSQL",
            "legacyId": "l2-t17"
          }
        ]
      },
      {
        "title": "Redis",
        "topics": [
          {
            "title": "Redis",
            "legacyId": "l2-t20"
          }
        ]
      },
      {
        "title": "MongoDB",
        "topics": [
          {
            "title": "MongoDB",
            "legacyId": "l2-t21"
          }
        ]
      },
      {
        "title": "Python",
        "topics": [
          {
            "title": "Python",
            "legacyId": "l2-t22"
          }
        ]
      },
      {
        "title": "FastAPI",
        "topics": [
          {
            "title": "FastAPI",
            "legacyId": "l2-t23"
          }
        ]
      },
      {
        "title": "Node.js",
        "topics": [
          {
            "title": "Node.js",
            "legacyId": "l2-t24"
          }
        ]
      },
      {
        "title": "APIs e integração",
        "topics": [
          {
            "title": "APIs REST",
            "legacyId": "l2-t25"
          },
          {
            "title": "OpenAPI / Swagger",
            "legacyId": "l2-t26"
          },
          {
            "title": "WebSockets",
            "legacyId": "l2-t27"
          },
          {
            "title": "Webhooks",
            "legacyId": "l2-t28"
          },
          {
            "title": "GraphQL",
            "legacyId": "l2-t29"
          }
        ]
      }
    ]
  },
  {
    "title": "Segurança + Testes",
    "subtitle": "Aprenda a criar aplicações confiáveis e seguras.",
    "groups": [
      {
        "title": "Protocolos web",
        "topics": [
          {
            "title": "HTTP",
            "legacyId": "l3-t0"
          },
          {
            "title": "HTTPS",
            "legacyId": "l3-t1"
          },
          {
            "title": "TLS/SSL",
            "legacyId": "l3-t2"
          }
        ]
      },
      {
        "title": "Autenticação e autorização",
        "topics": [
          {
            "title": "Authentication",
            "legacyId": "l3-t3"
          },
          {
            "title": "Authorization",
            "legacyId": "l3-t4"
          },
          {
            "title": "Sessions / Cookies",
            "legacyId": "l3-t5"
          },
          {
            "title": "Hash de senhas",
            "legacyId": "l3-t6"
          },
          {
            "title": "Controle de permissões",
            "legacyId": "l3-t7"
          },
          {
            "title": "JWT",
            "legacyId": "l3-t11"
          },
          {
            "title": "OAuth 2.0",
            "legacyId": "l3-t12"
          },
          {
            "title": "OpenID Connect",
            "legacyId": "l3-t13"
          }
        ]
      },
      {
        "title": "Segurança de aplicações",
        "topics": [
          {
            "title": "SQL Injection",
            "legacyId": "l3-t8"
          },
          {
            "title": "XSS",
            "legacyId": "l3-t9"
          },
          {
            "title": "CSRF",
            "legacyId": "l3-t10"
          },
          {
            "title": "OWASP",
            "legacyId": "l3-t14"
          },
          {
            "title": "Segurança de APIs",
            "legacyId": "l3-t15"
          }
        ]
      },
      {
        "title": "Testes de software",
        "topics": [
          {
            "title": "Testes unitários",
            "legacyId": "l3-t16"
          },
          {
            "title": "Testes de integração",
            "legacyId": "l3-t17"
          },
          {
            "title": "Testes E2E",
            "legacyId": "l3-t18"
          },
          {
            "title": "TDD",
            "legacyId": "l3-t19"
          }
        ]
      },
      {
        "title": "Qualidade e depuração",
        "topics": [
          {
            "title": "Code Review",
            "legacyId": "l3-t20"
          },
          {
            "title": "Debugging",
            "legacyId": "l3-t21"
          }
        ]
      }
    ]
  },
  {
    "title": "Engenharia de Software",
    "subtitle": "Passe de código que funciona para sistemas manuteníveis e escaláveis.",
    "groups": [
      {
        "title": "Orientação a objetos",
        "topics": [
          {
            "title": "POO",
            "legacyId": "l4-t0"
          }
        ]
      },
      {
        "title": "Princípios de projeto",
        "topics": [
          {
            "title": "SOLID",
            "legacyId": "l4-t1"
          },
          {
            "title": "Clean Code",
            "legacyId": "l4-t2"
          }
        ]
      },
      {
        "title": "Padrões de projeto",
        "topics": [
          {
            "title": "Design Patterns",
            "legacyId": "l4-t3"
          }
        ]
      },
      {
        "title": "Arquitetura de software",
        "topics": [
          {
            "title": "Clean Architecture",
            "legacyId": "l4-t4"
          },
          {
            "title": "DDD",
            "legacyId": "l4-t5"
          },
          {
            "title": "Event-Driven Architecture",
            "legacyId": "l4-t6"
          },
          {
            "title": "Sistemas distribuídos",
            "legacyId": "l4-t7"
          },
          {
            "title": "Microsserviços",
            "legacyId": "l4-t8"
          }
        ]
      }
    ]
  },
  {
    "title": "DevOps + Cloud",
    "subtitle": "Automatize, implante e opere suas aplicações.",
    "groups": [
      {
        "title": "Linux e Bash",
        "topics": [
          {
            "title": "Linux",
            "legacyId": "l5-t0"
          },
          {
            "title": "Bash",
            "legacyId": "l5-t1"
          }
        ]
      },
      {
        "title": "Servidor e deploy",
        "topics": [
          {
            "title": "Nginx",
            "legacyId": "l5-t2"
          },
          {
            "title": "Deploy",
            "legacyId": "l5-t3"
          },
          {
            "title": "Domínio e DNS",
            "legacyId": "l5-t4"
          },
          {
            "title": "Variáveis de ambiente (.env)",
            "legacyId": "l5-t5"
          },
          {
            "title": "Banco de dados em produção",
            "legacyId": "l5-t6"
          },
          {
            "title": "Backup",
            "legacyId": "l5-t7"
          }
        ]
      },
      {
        "title": "Docker",
        "topics": [
          {
            "title": "Docker",
            "legacyId": "l5-t8"
          },
          {
            "title": "Docker Compose",
            "legacyId": "l5-t9"
          }
        ]
      },
      {
        "title": "CI/CD",
        "topics": [
          {
            "title": "CI/CD",
            "legacyId": "l5-t10"
          },
          {
            "title": "GitHub Actions",
            "legacyId": "l5-t11"
          }
        ]
      },
      {
        "title": "Cloud e AWS",
        "topics": [
          {
            "title": "Cloud",
            "legacyId": "l5-t12"
          },
          {
            "title": "AWS",
            "legacyId": "l5-t13"
          },
          {
            "title": "EC2",
            "legacyId": "l5-t14"
          },
          {
            "title": "S3",
            "legacyId": "l5-t15"
          },
          {
            "title": "RDS",
            "legacyId": "l5-t16"
          },
          {
            "title": "IAM",
            "legacyId": "l5-t17"
          },
          {
            "title": "VPC",
            "legacyId": "l5-t18"
          }
        ]
      },
      {
        "title": "Monitoramento",
        "topics": [
          {
            "title": "Monitoramento",
            "legacyId": "l5-t19"
          }
        ]
      },
      {
        "title": "Kubernetes",
        "topics": [
          {
            "title": "Kubernetes",
            "legacyId": "l5-t20"
          }
        ]
      }
    ]
  },
  {
    "title": "Sistemas Avançados",
    "subtitle": "Entenda aplicações de grande escala.",
    "groups": [
      {
        "title": "Sistemas distribuídos",
        "topics": [
          {
            "title": "Sistemas distribuídos",
            "legacyId": "l6-t0"
          }
        ]
      },
      {
        "title": "Escalabilidade",
        "topics": [
          {
            "title": "Escalabilidade",
            "legacyId": "l6-t1"
          },
          {
            "title": "Alta disponibilidade",
            "legacyId": "l6-t2"
          },
          {
            "title": "Load Balancing",
            "legacyId": "l6-t3"
          },
          {
            "title": "Cache",
            "legacyId": "l6-t4"
          }
        ]
      },
      {
        "title": "Filas e mensageria",
        "topics": [
          {
            "title": "Filas",
            "legacyId": "l6-t5"
          },
          {
            "title": "Mensageria",
            "legacyId": "l6-t6"
          }
        ]
      },
      {
        "title": "RabbitMQ",
        "topics": [
          {
            "title": "RabbitMQ",
            "legacyId": "l6-t7"
          }
        ]
      },
      {
        "title": "Kafka",
        "topics": [
          {
            "title": "Kafka",
            "legacyId": "l6-t8"
          }
        ]
      },
      {
        "title": "Arquitetura orientada a eventos",
        "topics": [
          {
            "title": "Event-Driven Systems",
            "legacyId": "l6-t9"
          }
        ]
      },
      {
        "title": "Microsserviços",
        "topics": [
          {
            "title": "Microsserviços",
            "legacyId": "l6-t10"
          }
        ]
      },
      {
        "title": "Observabilidade",
        "topics": [
          {
            "title": "Observabilidade",
            "legacyId": "l6-t11"
          },
          {
            "title": "Logs",
            "legacyId": "l6-t12"
          },
          {
            "title": "Métricas",
            "legacyId": "l6-t13"
          },
          {
            "title": "Tracing",
            "legacyId": "l6-t14"
          }
        ]
      }
    ]
  },
  {
    "title": "Inteligência Artificial",
    "subtitle": "Construa aplicações modernas que utilizam IA.",
    "groups": [
      {
        "title": "Python para IA",
        "topics": [
          {
            "title": "Python para IA",
            "legacyId": "l7-t0"
          }
        ]
      },
      {
        "title": "Fundamentos de IA",
        "topics": [
          {
            "title": "Fundamentos de IA",
            "legacyId": "l7-t1"
          }
        ]
      },
      {
        "title": "Modelos de linguagem",
        "topics": [
          {
            "title": "LLMs",
            "legacyId": "l7-t2"
          },
          {
            "title": "APIs de IA",
            "legacyId": "l7-t3"
          },
          {
            "title": "Prompt Engineering",
            "legacyId": "l7-t4"
          }
        ]
      },
      {
        "title": "RAG e busca semântica",
        "topics": [
          {
            "title": "Embeddings",
            "legacyId": "l7-t5"
          },
          {
            "title": "Vector Databases",
            "legacyId": "l7-t6"
          },
          {
            "title": "RAG",
            "legacyId": "l7-t7"
          }
        ]
      },
      {
        "title": "Agentes de IA",
        "topics": [
          {
            "title": "Function Calling",
            "legacyId": "l7-t8"
          },
          {
            "title": "AI Agents",
            "legacyId": "l7-t9"
          },
          {
            "title": "MCP",
            "legacyId": "l7-t10"
          }
        ]
      },
      {
        "title": "IA integrada ao back-end",
        "topics": [
          {
            "title": "IA integrada ao backend",
            "legacyId": "l7-t11"
          }
        ]
      }
    ]
  }
];

const projects = [
  [
    "01",
    "Gerenciador de tarefas",
    "Fundamentos",
    [
      "HTML, CSS e JavaScript",
      "DOM e eventos",
      "Git/GitHub"
    ]
  ],

  [
    "02",
    "Dashboard administrativo",
    "Front-end",
    [
      "TypeScript",
      "React",
      "Gráficos e filtros"
    ]
  ],

  [
    "03",
    "Sistema de vendas",
    "Banco + Backend",
    [
      "Laravel",
      "PostgreSQL",
      "CRUD e relacionamentos"
    ]
  ],

  [
    "04",
    "Loja virtual completa",
    "Full Stack",
    [
      "React / Next.js",
      "API",
      "Carrinho e pedidos"
    ]
  ],

  [
    "05",
    "Guia Digital de Serviços",
    "Segurança + Testes",
    [
      "Autenticação",
      "Permissões",
      "Testes e API"
    ]
  ],

  [
    "06",
    "ERP para pequenos negócios",
    "Engenharia",
    [
      "SOLID",
      "Clean Architecture",
      "DDD"
    ]
  ],

  [
    "07",
    "ERP containerizado",
    "DevOps",
    [
      "Docker",
      "Nginx",
      "CI/CD"
    ]
  ],

  [
    "08",
    "Plataforma SaaS",
    "Cloud",
    [
      "Multi-tenancy",
      "AWS",
      "Monitoramento"
    ]
  ],

  [
    "09",
    "Sistema de delivery",
    "Sistemas distribuídos",
    [
      "Redis",
      "RabbitMQ",
      "WebSockets"
    ]
  ],

  [
    "10",
    "Plataforma de conhecimento com IA",
    "RAG",
    [
      "Embeddings",
      "Vector Database",
      "LLM"
    ]
  ],

  [
    "11",
    "Agente de IA",
    "Agentes",
    [
      "Function Calling",
      "APIs",
      "MCP"
    ]
  ],

  [
    "12",
    "SaaS com IA",
    "Projeto final",
    [
      "Full Stack",
      "Cloud",
      "IA + RAG + agentes"
    ]
  ],
  [
    "13",
    "API de produtos em Java",
    "Back-end Java",
    [
      "Java e Spring Boot",
      "MySQL + JPA / Hibernate",
      "API REST, autenticação e testes"
    ]
  ]
];
// A trilha original enviada pelo usuário permanece disponível dentro de Trilha Full Stack.
const STORAGE_KEY="meu-plano-estudos-v1";
const makeId=()=>"id-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,9);
function node(title,children=[],opts={}){return {id:makeId(),title,children,done:false,minutes:opts.minutes??null,time:opts.time??"",note:opts.note??""};}
function originalRoadmap(){
  const stages=levels.map(level=>node(level.title,level.groups.map(g=>node(g.title,g.topics.map(t=>node(t.title)),{note:""})),{note:level.subtitle}));
  const samples=projects.map(p=>node(p[1],p[3].map(k=>node(k)),{note:p[2]}));
  return [...stages,node("Projetos sugeridos da trilha original",samples,{note:"Os 13 projetos presentes na trilha que você enviou."})];
}
const mod=(title,minutes,children=[],category="main",note="")=>({id:makeId(),title,minutes,time:"",note,done:false,children,category});
function defaults(){return {wake:"06:00",wakeNote:"Despertar / café",night:"22:00",nightNote:"Inglês",modules:[
 mod("Engenharia",120,[node("Fundamentos da Engenharia de Software",[node("Requisitos e análise"),node("Modelagem de sistemas"),node("Arquitetura de software"),node("Qualidade e manutenção"),node("Testes de software")])],"main","Estudos da faculdade e fundamentos da área"),
 mod("Trilha Full Stack",180,originalRoadmap(),"main","Trilha completa do site original: 8 níveis e 13 projetos, todos expansíveis e editáveis"),
 mod("Curso PHP",60,[node("Aulas do curso",[node("Assistir à próxima aula"),node("Praticar o conteúdo")])]),
 mod("Livro PHP e MySQL",60,[node("Leitura e exercícios",[node("Ler o próximo capítulo"),node("Resolver exemplos e exercícios")])]),
 mod("Laravel",60,[node("Laravel na prática",[node("Rotas e controllers"),node("Blade, validação e formulários"),node("Eloquent e migrations"),node("Autenticação")])]),
 mod("Segurança",60,[node("Segurança web",[node("Validação de entrada"),node("SQL Injection"),node("XSS e CSRF"),node("Sessões, senhas e permissões")])]),
 mod("Inglês",60,[node("Prática diária",[node("Vocabulário de tecnologia"),node("Leitura e escuta"),node("Conversação e revisão")])]),
 mod("Java",120,[node("Fundamentos de Java",[node("Sintaxe, variáveis e controle de fluxo"),node("Métodos e classes"),node("POO e interfaces"),node("Coleções e generics"),node("Exceções")]),node("Back-end Java",[node("Maven"),node("Spring Boot"),node("API REST"),node("JPA/Hibernate"),node("Testes com JUnit")])]),
 mod("Projeto ERP",90,[node("Desenvolvimento do ERP",[node("Módulo de estoque: entradas e saídas"),node("Histórico de movimentações"),node("Alertas e validações")])]),
 mod("Projeto Full Stack",90,[node("Projeto prático",[node("Planejar funcionalidades"),node("Desenvolver interface"),node("Criar API e banco"),node("Testar e publicar")])]),
 mod("Folga",null,[node("Excel",[],{time:"09:00",minutes:60}),node("WordPress",[],{time:"10:00",minutes:60}),node("Almoço",[],{time:"11:00",minutes:60,note:"Intervalo"}),node("Word",[],{time:"12:00",minutes:60}),node("Hardware",[],{time:"13:00",minutes:60}),node("Elétrica",[],{time:"14:00",minutes:60})],"extra","Atividades sugeridas para os dias de folga"),
 mod("Para estudar depois",null,[node("SEO"),node("Marketing Digital"),node("Automação de Marketing"),node("Como anunciar na Internet")],"extra","Assuntos para aprender futuramente")
]};}
function load(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));if(saved&&Array.isArray(saved.modules))return saved;}catch(e){}return defaults();}
let data=load(),filter="all",editing=null;
const $=sel=>document.querySelector(sel);
const esc=str=>String(str??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function save(){
  try {
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
    if (window.studyOnline?.save) window.studyOnline.save(data);
    else $("#saveStatus").textContent="● Cópia local (sem sincronização)";
  } catch(e) { $("#saveStatus").textContent="⚠ Não foi possível salvar no navegador"; }
}
function formatMinutes(v){if(v===null||v===undefined||v==="")return "Sem duração";const n=Number(v);return n%60===0?`${n/60}h`:`${Math.floor(n/60)}h${String(n%60).padStart(2,"0")}`;}
function findNode(id,nodes=data.modules,parent=null){for(const n of nodes){if(n.id===id)return {n,parent};if(n.children?.length){const found=findNode(id,n.children,n);if(found)return found;}}return null;}
function allLeaves(nodes){return nodes.flatMap(n=>n.children?.length?allLeaves(n.children):n.group?[]:[n]);}
function leafMarkup(n){const shown=filter==="all"||(filter==="done"?n.done:!n.done);return `<div class="leaf ${n.done?"done":""} ${shown?"":"filter-hidden"}" data-id="${esc(n.id)}"><input type="checkbox" aria-label="Concluir ${esc(n.title)}" data-action="check" data-id="${esc(n.id)}" ${n.done?"checked":""}><div class="leaf-main"><strong>${esc(n.title)}</strong>${n.time||n.minutes!==null?`<small>${n.time?esc(n.time)+" · ":""}${n.minutes!==null?formatMinutes(n.minutes):""}</small>`:""}${n.note?`<small>${esc(n.note)}</small>`:""}</div><div class="leaf-actions"><button class="icon-btn" data-action="edit" data-id="${esc(n.id)}" title="Editar">✎</button><button class="icon-btn" data-action="delete" data-id="${esc(n.id)}" title="Excluir">×</button></div></div>`;}
function treeMarkup(n,depth=0){if(!n.children?.length&&!n.group)return leafMarkup(n);const leaves=allLeaves([n]),finished=leaves.filter(x=>x.done).length;return `<details class="node" data-id="${esc(n.id)}" ${openNodes.has(n.id)?"open":""}><summary><span class="node-label">${esc(n.title)} <span class="muted">(${finished}/${leaves.length})</span></span><span class="chev">⌄</span></summary><div class="node-body">${n.note?`<p class="note">${esc(n.note)}</p>`:""}<div class="actions"><button class="mini" data-action="add" data-id="${esc(n.id)}">＋ Adicionar assunto</button><button class="mini" data-action="addGroup" data-id="${esc(n.id)}">＋ Criar subgrupo</button><button class="mini" data-action="edit" data-id="${esc(n.id)}">✎ Editar</button><button class="mini danger" data-action="delete" data-id="${esc(n.id)}">Excluir</button></div>${n.children.map(child=>treeMarkup(child,depth+1)).join("")}</div></details>`;}
const openNodes=new Set(),openModules=new Set([data.modules.find(m=>m.title==="Trilha Full Stack")?.id]);
function moduleMarkup(m,i){const leaves=allLeaves(m.children),done=leaves.filter(n=>n.done).length;return `<details class="module" data-module="${esc(m.id)}" ${openModules.has(m.id)?"open":""}><summary><span class="module-mark">${String(i+1).padStart(2,"0")}</span><span class="module-info"><h3>${esc(m.title)}</h3><p>${m.minutes!==null?formatMinutes(m.minutes)+" planejadas · ":""}${leaves.length?`${done}/${leaves.length} conteúdos concluídos`:"Sem conteúdos"}${m.time?" · "+esc(m.time):""}</p></span><span class="chev">⌄</span></summary><div class="module-body">${m.note?`<p class="module-desc">${esc(m.note)}</p>`:""}<div class="actions"><button class="mini" data-action="add" data-id="${esc(m.id)}">＋ Adicionar assunto</button><button class="mini" data-action="addGroup" data-id="${esc(m.id)}">＋ Criar subgrupo</button><button class="mini" data-action="edit" data-id="${esc(m.id)}">✎ Editar módulo</button><button class="mini" data-action="move" data-id="${esc(m.id)}">⇄ Mover seção</button><button class="mini danger" data-action="delete" data-id="${esc(m.id)}">Excluir</button></div><div class="nodes">${m.children.length?m.children.map(n=>treeMarkup(n)).join(""):'<p class="empty">Nenhum assunto ainda. Adicione o primeiro.</p>'}</div></div></details>`;}
function updateStats(){const leaves=allLeaves(data.modules.flatMap(m=>m.children));const done=leaves.filter(n=>n.done).length;const total=leaves.length;const mins=data.modules.filter(m=>m.category==="main").reduce((a,m)=>a+(Number(m.minutes)||0),0);$("#moduleCount").textContent=data.modules.length;$("#completedCount").textContent=done;$("#pendingCount").textContent=total-done;$("#dailyHours").textContent=formatMinutes(mins);const percent=total?Math.round(done/total*100):0;$("#progressLabel").textContent=percent+"%";$("#progressFill").style.width=percent+"%";}
function render(){const main=data.modules.filter(m=>m.category==="main"),extra=data.modules.filter(m=>m.category==="extra");$("#mainModules").innerHTML=main.map((m,i)=>moduleMarkup(m,i)).join("");$("#extraModules").innerHTML=extra.map((m,i)=>moduleMarkup(m,i+main.length)).join("");$("#routine").innerHTML=`<span class="pill">☀️ <strong>${esc(data.wake)}</strong> ${esc(data.wakeNote)}</span><span>→</span><span>Blocos de estudo personalizáveis</span><span>→</span><span class="pill">🌙 <strong>${esc(data.night)}</strong> ${esc(data.nightNote)}</span>`;updateStats();}
function editor(type,id=null,asGroup=false){editing={type,id,asGroup};$("#editForm").reset();const hit=id?findNode(id):null;let n=type==="edit"?hit?.n:null;$("#editKind").textContent=type==="edit"?"PERSONALIZAR":type==="module"?"NOVO MÓDULO":"NOVO CONTEÚDO";$("#editTitle").textContent=type==="edit"?"Editar item":type==="module"?"Criar módulo":asGroup?"Criar subgrupo":"Adicionar assunto";$("#fieldTitle").value=n?.title??"";$("#fieldMinutes").value=n?.minutes??"";$("#fieldTime").value=n?.time??"";$("#fieldNote").value=n?.note??"";$("#editor").showModal();$("#fieldTitle").focus();}
function preserveOpen(){document.querySelectorAll(".module").forEach(el=>el.open?openModules.add(el.dataset.module):openModules.delete(el.dataset.module));document.querySelectorAll("details.node").forEach(el=>el.open?openNodes.add(el.dataset.id):openNodes.delete(el.dataset.id));}
function removeNode(id){let hit=findNode(id);if(!hit)return;if(hit.parent){hit.parent.children=hit.parent.children.filter(n=>n.id!==id);}else data.modules=data.modules.filter(n=>n.id!==id);}
document.addEventListener("toggle",e=>{const t=e.target;if(t.matches?.("details.module")){t.open?openModules.add(t.dataset.module):openModules.delete(t.dataset.module);}if(t.matches?.("details.node")){t.open?openNodes.add(t.dataset.id):openNodes.delete(t.dataset.id);}},true);
document.addEventListener("click",e=>{const b=e.target.closest("button[data-action]");if(!b)return;const {action,id}=b.dataset;const hit=findNode(id);if(!hit)return;e.preventDefault();if(action==="edit")editor("edit",id);if(action==="add"||action==="addGroup"){openNodes.add(id);openModules.add(id);editor("add",id,action==="addGroup");}if(action==="delete"){if(confirm(`Excluir "${hit.n.title}" e todos os assuntos dentro dele?`)){preserveOpen();removeNode(id);save();render();}}if(action==="move"){preserveOpen();hit.n.category=hit.n.category==="main"?"extra":"main";save();render();}});
document.addEventListener("change",e=>{if(e.target.matches('input[data-action="check"]')){const h=findNode(e.target.dataset.id);if(h){h.n.done=e.target.checked;preserveOpen();save();render();}}});
$("#editForm").addEventListener("submit",e=>{e.preventDefault();const title=$("#fieldTitle").value.trim();if(!title)return;const raw=$("#fieldMinutes").value,minutes=raw===""?null:Number(raw),time=$("#fieldTime").value,note=$("#fieldNote").value.trim();preserveOpen();if(editing.type==="edit"){const hit=findNode(editing.id);if(hit)Object.assign(hit.n,{title,minutes,time,note});}else if(editing.type==="module"){const m=mod(title,minutes,[],"main",note);m.time=time;data.modules.push(m);openModules.add(m.id);}else if(editing.type==="add"){const parent=findNode(editing.id)?.n;if(parent){const n=node(title,[],{minutes,time,note});n.group=!!editing.asGroup;parent.children.push(n);if(n.group)openNodes.add(n.id);openNodes.add(parent.id);openModules.add(parent.id);}}save();$("#editor").close();render();});
$("#newModule").addEventListener("click",()=>editor("module"));$("#closeDialog").addEventListener("click",()=>$("#editor").close());$("#cancelDialog").addEventListener("click",()=>$("#editor").close());
$("#filter").addEventListener("change",e=>{filter=e.target.value;document.querySelectorAll(".leaf").forEach(el=>{const hit=findNode(el.dataset.id);const show=filter==="all"||(filter==="done"?hit?.n.done:!hit?.n.done);el.classList.toggle("filter-hidden",!show);});if(filter!=="all"){document.querySelectorAll("details.module,details.node").forEach(el=>el.open=true);}});
$("#editWake").addEventListener("click",()=>{const wake=prompt("Horário de despertar (HH:MM)",data.wake);if(wake===null)return;const wakeNote=prompt("Atividade ao despertar",data.wakeNote);if(wakeNote===null)return;const night=prompt("Horário noturno (HH:MM)",data.night);if(night===null)return;const nightNote=prompt("Atividade noturna",data.nightNote);if(nightNote===null)return;if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(wake)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(night)){alert("Use o formato HH:MM, por exemplo 06:00.");return;}Object.assign(data,{wake,wakeNote,night,nightNote});save();render();});
$("#exportBtn").addEventListener("click",()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="backup-plano-estudos.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
$("#importFile").addEventListener("change",async e=>{const f=e.target.files?.[0];if(!f)return;try{const candidate=JSON.parse(await f.text());if(!candidate||!Array.isArray(candidate.modules)||!candidate.modules.every(m=>typeof m.title==="string"&&Array.isArray(m.children)))throw Error("Arquivo inválido");if(!confirm("Importar backup e substituir seu plano atual?"))return;data=candidate;openNodes.clear();openModules.clear();save();render();}catch(err){alert("Não foi possível importar este arquivo JSON.");}finally{e.target.value="";}});
render();
