/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 *
 * Este arquivo centraliza TODOS os dados do cliente em um único lugar.
 *
 * INSTRUÇÕES:
 * 1. Copie este arquivo para `site.config.ts`
 * 2. Preencha com dados coletados na reunião (use DECISOES-CLIENTE.md)
 * 3. Remova os comentários //TODO após preencher
 * 4. Importe em componentes: `import { siteConfig } from '@/site.config'`
 *
 * IMPORTANTE:
 * - Mantenha todos os campos, mesmo que vazios
 * - Use arrays vazios [] se não houver dados ainda
 * - Strings vazias "" para textos pendentes
 * - Para campos opcionais, use `undefined` ou comente a linha
 */

export const siteConfig = {
  // ===========================================
  // 1. IDENTIDADE DA EMPRESA
  // ===========================================

  identity: {
    /** Nome fantasia/comercial da empresa */
    name: "", // TODO: Ex: "ACME Consultoria"

    /** Razão social (se diferente do nome fantasia) */
    legalName: "", // TODO: Ex: "ACME Consultoria LTDA" ou deixe igual ao name

    /** CNPJ/CPF */
    taxId: "", // TODO: Ex: "12.345.678/0001-90"

    /** Slogan ou frase que representa a empresa */
    tagline: "", // TODO: Ex: "Transformando Ideias em Realidade"

    /** Descrição curta para SEO (150-160 caracteres) */
    description: "", // TODO: Ex: "Consultoria especializada em transformação digital..."

    /** Ano de fundação */
    foundedYear: 2020, // TODO: Ex: 2020

    /** Aniversário (formato MM-DD) */
    anniversary: "01-15", // TODO: Ex: "01-15" para 15 de Janeiro
  },

  // ===========================================
  // 2. URLS E DOMÍNIOS
  // ===========================================

  urls: {
    /** URL principal do site (produção) */
    production: "", // TODO: Ex: "https://acme.com.br"

    /** URL de staging/homologação (opcional) */
    staging: "", // TODO: Ex: "https://staging.acme.com.br" ou ""

    /** Base path (deixe "/" na maioria dos casos) */
    basePath: "/",
  },

  // ===========================================
  // 3. CONTATO
  // ===========================================

  contact: {
    /** Email principal de contato */
    email: {
      primary: "", // TODO: Ex: "contato@acme.com.br"
      secondary: "", // TODO: Ex: "vendas@acme.com.br" ou ""
    },

    /** Telefones */
    phone: {
      /** Telefone principal (formato: +55 48 99999-9999) */
      primary: "", // TODO: Ex: "+55 48 99999-9999"

      /** WhatsApp (apenas números, com DDI e DDD) */
      whatsapp: "", // TODO: Ex: "5548999999999" (sem espaços, hífens ou parênteses)

      /** Mensagem inicial do WhatsApp (opcional) */
      whatsappMessage: "Olá! Vim pelo site e gostaria de mais informações.", // TODO: Customize ou deixe padrão
    },

    /** Endereço físico */
    address: {
      /** Tem endereço físico? */
      hasPhysicalAddress: false, // TODO: true se tiver escritório/loja, false se for remoto

      /** Logradouro completo */
      street: "", // TODO: Ex: "Rua das Flores, 123"

      /** Complemento */
      complement: "", // TODO: Ex: "Sala 456" ou ""

      /** Bairro */
      neighborhood: "", // TODO: Ex: "Centro"

      /** Cidade */
      city: "", // TODO: Ex: "Florianópolis"

      /** Estado (sigla) */
      state: "", // TODO: Ex: "SC"

      /** CEP (formato: 88000-000) */
      zipCode: "", // TODO: Ex: "88000-000"

      /** País */
      country: "Brasil",

      /** Coordenadas para Google Maps (opcional) */
      coordinates: {
        lat: 0, // TODO: Ex: -27.5954
        lng: 0, // TODO: Ex: -48.5480
      },
    },

    /** Horário de atendimento */
    businessHours: {
      /** Dias de funcionamento */
      days: "Segunda a Sexta", // TODO: Ex: "Segunda a Sexta", "Segunda a Sábado"

      /** Horário */
      hours: "9h às 18h", // TODO: Ex: "9h às 18h", "24 horas"

      /** Fuso horário */
      timezone: "America/Sao_Paulo",
    },
  },

  // ===========================================
  // 4. REDES SOCIAIS
  // ===========================================

  social: {
    /** Instagram */
    instagram: "", // TODO: Ex: "https://instagram.com/acme" ou ""

    /** LinkedIn (página da empresa, não perfil pessoal) */
    linkedin: "", // TODO: Ex: "https://linkedin.com/company/acme" ou ""

    /** Facebook */
    facebook: "", // TODO: Ex: "https://facebook.com/acme" ou ""

    /** YouTube */
    youtube: "", // TODO: Ex: "https://youtube.com/@acme" ou ""

    /** TikTok */
    tiktok: "", // TODO: Ex: "https://tiktok.com/@acme" ou ""

    /** Twitter/X */
    twitter: "", // TODO: Ex: "https://twitter.com/acme" ou ""

    /** GitHub (se aplicável) */
    github: "", // TODO: Ex: "https://github.com/acme" ou ""
  },

  // ===========================================
  // 5. NAVEGAÇÃO
  // ===========================================

  navigation: {
    /** Links principais do menu (máximo 6 recomendado) */
    main: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" }, // TODO: Customize labels
      { label: "Serviços", href: "/servicos" },
      { label: "Contato", href: "/contato" },
      // TODO: Adicione mais links se necessário:
      // { label: "Portfólio", href: "/projetos" },
      // { label: "Blog", href: "/blog" },
    ],

    /** CTA (Call-to-Action) do header */
    cta: {
      /** Texto do botão */
      text: "Falar com Vendas", // TODO: Ex: "Agendar Demo", "Solicitar Orçamento"

      /** Destino do clique */
      href: "/contato", // TODO: Ex: "/contato", WhatsApp link, Calendly, etc.
    },

    /** Links do footer (organizados por coluna) */
    footer: {
      /** Coluna 1: Soluções/Serviços */
      solutions: [
        // TODO: Adicione links de serviços:
        // { label: "Consultoria", href: "/servicos/consultoria" },
        // { label: "Desenvolvimento", href: "/servicos/desenvolvimento" },
      ],

      /** Coluna 2: Empresa */
      company: [
        { label: "Sobre", href: "/sobre" },
        { label: "Equipe", href: "/sobre#equipe" },
        // TODO: Adicione mais:
        // { label: "Carreira", href: "/carreira" },
        // { label: "Blog", href: "/blog" },
      ],

      /** Coluna 3: Legal */
      legal: [
        // TODO: Adicione se tiver:
        // { label: "Termos de Uso", href: "/legal/termos" },
        // { label: "Privacidade", href: "/legal/privacidade" },
      ],
    },
  },

  // ===========================================
  // 6. HERO (SEÇÃO PRINCIPAL DA HOME)
  // ===========================================

  hero: {
    /** Título principal (frase de impacto) */
    title: "", // TODO: Ex: "Transforme Seu Negócio com IA"

    /** Subtítulo (complemento) */
    subtitle: "", // TODO: Ex: "Soluções Inteligentes para Empresas do Futuro"

    /** Descrição adicional (opcional, 2-3 linhas) */
    description: {
      lead: "", // TODO: Ex: "Ajudamos empresas a"
      highlight: "", // TODO: Ex: "automatizar processos"
      end: "", // TODO: Ex: "e aumentar produtividade em até 300%."
    },

    /** CTAs do hero */
    cta: {
      primary: {
        text: "Agendar Consultoria", // TODO: Ex: "Começar Agora", "Agendar Demo"
        href: "/contato",
      },
      secondary: {
        text: "Ver Cases", // TODO: Ex: "Saiba Mais", "Ver Portfólio" ou deixe undefined
        href: "/projetos",
      },
    },

    /** Vídeo do hero (opcional) */
    video: {
      /** Tem vídeo? */
      enabled: false, // TODO: true se tiver vídeo

      /** URL do vídeo (MP4, max 50MB) */
      src: "/videos/hero.mp4", // TODO: Ex: "/videos/hero.mp4"

      /** Poster/fallback (imagem estática) */
      poster: "/images/hero-bg.jpg", // TODO: Ex: "/images/hero-bg.jpg"
    },
  },

  // ===========================================
  // 7. SOBRE A EMPRESA
  // ===========================================

  about: {
    /** História da empresa (2-3 parágrafos) */
    story: [
      "", // TODO: Parágrafo 1: Como começou
      "", // TODO: Parágrafo 2: Evolução/crescimento
      "", // TODO: Parágrafo 3: Atualidade/futuro
    ],

    /** Missão */
    mission: "", // TODO: Ex: "Nossa missão é democratizar o acesso à tecnologia..."

    /** Visão */
    vision: "", // TODO: Ex: "Ser referência em inovação até 2030..."

    /** Valores (3-6 valores) */
    values: [
      {
        title: "INOVAÇÃO", // TODO: Customize
        description: "Buscamos sempre novas soluções", // TODO: Customize
        icon: "Zap", // TODO: Lucide icon name ou emoji
      },
      {
        title: "QUALIDADE",
        description: "Excelência em tudo que fazemos",
        icon: "Award",
      },
      {
        title: "TRANSPARÊNCIA",
        description: "Comunicação clara e honesta",
        icon: "Eye",
      },
      // TODO: Adicione mais valores:
      // { title: "AGILIDADE", description: "...", icon: "Zap" },
    ],

    /** Estatísticas/Números */
    stats: [
      // TODO: Adicione números de impacto:
      // { value: "500+", label: "Clientes Atendidos" },
      // { value: "10", label: "Anos de Mercado" },
      // { value: "98%", label: "Satisfação" },
    ],
  },

  // ===========================================
  // 8. SERVIÇOS/PRODUTOS
  // ===========================================

  services: [
    {
      id: "servico-1", // TODO: ID único (slug-friendly)
      icon: "🚀", // TODO: Emoji ou Lucide icon name
      title: "", // TODO: Ex: "Consultoria em IA"
      description: "", // TODO: Descrição curta (2-3 linhas)
      features: [
        "", // TODO: Benefício 1
        "", // TODO: Benefício 2
        "", // TODO: Benefício 3
        "", // TODO: Benefício 4
      ],
      link: "/servicos/servico-1", // TODO: Link para página individual (se houver)
      ctaText: "Saiba Mais", // TODO: Texto do botão
    },
    {
      id: "servico-2",
      icon: "💡",
      title: "",
      description: "",
      features: ["", "", "", ""],
      link: "/servicos/servico-2",
      ctaText: "Saiba Mais",
    },
    {
      id: "servico-3",
      icon: "🛠️",
      title: "",
      description: "",
      features: ["", "", "", ""],
      link: "/servicos/servico-3",
      ctaText: "Saiba Mais",
    },
    // TODO: Adicione mais serviços (recomendado: 3-6)
  ],

  // ===========================================
  // 9. EQUIPE
  // ===========================================

  team: {
    /** Mostrar seção de equipe? */
    enabled: false, // TODO: true se quiser mostrar equipe

    /** Membros da equipe */
    members: [
      {
        name: "", // TODO: Ex: "João Silva"
        role: "", // TODO: Ex: "CEO & Fundador"
        bio: "", // TODO: Biografia curta (2-3 linhas)
        normalImage: "/images/team/joao-normal.jpg", // TODO: Foto profissional
        hobbyImage: "/images/team/joao-hobby.jpg", // TODO: Foto descontraída (opcional)
        social: {
          linkedin: "", // TODO: Ex: "https://linkedin.com/in/joaosilva"
          instagram: "", // TODO: Opcional
          twitter: "", // TODO: Opcional
          github: "", // TODO: Opcional
        },
      },
      // TODO: Adicione mais membros:
      // {
      //   name: "Maria Souza",
      //   role: "CTO",
      //   bio: "...",
      //   ...
      // },
    ],
  },

  // ===========================================
  // 10. PROJETOS/CASES
  // ===========================================

  projects: {
    /** Mostrar seção de projetos? */
    enabled: false, // TODO: true se tiver cases para mostrar

    /** Cases/Projetos */
    items: [
      {
        id: "projeto-1", // TODO: ID único
        title: "", // TODO: Ex: "Sistema de Automação - ACME Corp"
        client: "", // TODO: Nome do cliente (se puder divulgar) ou ""
        description: "", // TODO: Descrição (3-4 linhas)
        results: "", // TODO: Ex: "Aumento de 50% em produtividade"
        technologies: [], // TODO: Ex: ["Next.js", "TypeScript", "AI"]
        image: "/images/projects/projeto-1.jpg", // TODO: Screenshot/imagem do projeto
        link: "/projetos/projeto-1", // TODO: Link para case detalhado (opcional)
      },
      // TODO: Adicione mais projetos
    ],
  },

  // ===========================================
  // 11. DEPOIMENTOS
  // ===========================================

  testimonials: {
    /** Mostrar seção de depoimentos? */
    enabled: false, // TODO: true se tiver depoimentos

    /** Depoimentos de clientes */
    items: [
      {
        name: "", // TODO: Ex: "Carlos Oliveira"
        role: "", // TODO: Ex: "CEO"
        company: "", // TODO: Ex: "XPTO Ltda"
        text: "", // TODO: Depoimento (1-2 frases)
        avatar: "/images/testimonials/carlos.jpg", // TODO: Foto (opcional)
        rating: 5, // TODO: Nota de 1 a 5
      },
      // TODO: Adicione mais depoimentos (recomendado: 3-6)
    ],
  },

  // ===========================================
  // 12. FAQ (PERGUNTAS FREQUENTES)
  // ===========================================

  faq: {
    /** Mostrar seção de FAQ? */
    enabled: false, // TODO: true se quiser FAQ

    /** Perguntas e respostas */
    items: [
      {
        id: "faq-1",
        question: "", // TODO: Ex: "Quais serviços vocês oferecem?"
        answer: "", // TODO: Resposta (pode usar markdown)
      },
      // TODO: Adicione mais perguntas (recomendado: 5-10)
    ],
  },

  // ===========================================
  // 13. BLOG
  // ===========================================

  blog: {
    /** Tem blog? */
    enabled: false, // TODO: true se quiser blog

    /** Configurações do blog */
    postsPerPage: 9,
    categories: [
      // TODO: Adicione categorias:
      // { slug: "tecnologia", name: "Tecnologia" },
      // { slug: "negocios", name: "Negócios" },
    ],
  },

  // ===========================================
  // 14. FORMULÁRIO DE CONTATO
  // ===========================================

  contactForm: {
    /** Email para onde enviar os contatos */
    recipient: "", // TODO: Ex: "contato@acme.com.br" (pode ser diferente do email principal)

    /** Campos do formulário */
    fields: {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true },
      phone: { enabled: false, required: false }, // TODO: true se quiser coletar telefone
      company: { enabled: false, required: false }, // TODO: true para B2B
      subject: { enabled: false, required: false },
      message: { enabled: true, required: true },
    },

    /** Opções de dropdown (se houver) */
    dropdowns: {
      /** Como conheceu a empresa? */
      source: {
        enabled: false, // TODO: true se quiser perguntar
        options: [
          // "Google",
          // "Indicação",
          // "Redes Sociais",
          // "Outro",
        ],
      },

      /** Serviço de interesse */
      service: {
        enabled: false, // TODO: true se quiser perguntar
        options: [
          // "Consultoria",
          // "Desenvolvimento",
          // "Suporte",
        ],
      },
    },

    /** Mensagens personalizadas */
    messages: {
      success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      error: "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por WhatsApp.",
    },
  },

  // ===========================================
  // 15. INTEGRAÇÕES
  // ===========================================

  integrations: {
    /** Google Analytics */
    googleAnalytics: {
      enabled: false, // TODO: true se tiver
      measurementId: "", // TODO: Ex: "G-XXXXXXXXXX"
    },

    /** Google Tag Manager */
    googleTagManager: {
      enabled: false, // TODO: true se tiver
      containerId: "", // TODO: Ex: "GTM-XXXXXXX"
    },

    /** Facebook Pixel */
    facebookPixel: {
      enabled: false, // TODO: true se tiver
      pixelId: "", // TODO: Ex: "123456789012345"
    },

    /** Chat online (Tawk.to, Zendesk, etc.) */
    chat: {
      enabled: false, // TODO: true se quiser chat
      provider: "", // TODO: Ex: "tawk.to", "zendesk", "intercom"
      widgetId: "", // TODO: ID do widget
    },

    /** Calendly (agendamento) */
    calendly: {
      enabled: false, // TODO: true se usar Calendly
      url: "", // TODO: Ex: "https://calendly.com/seu-usuario"
    },
  },

  // ===========================================
  // 16. SEO E METADATA
  // ===========================================

  seo: {
    /** Palavras-chave principais (5-10) */
    keywords: [
      "", // TODO: Ex: "consultoria em IA"
      "", // TODO: Ex: "transformação digital"
      "", // TODO: Ex: "automação de processos"
    ],

    /** Autor/Proprietário */
    author: "", // TODO: Ex: "ACME Consultoria"

    /** Open Graph (redes sociais) */
    openGraph: {
      /** Imagem de preview (1200x630px) */
      image: "/images/og-image.jpg", // TODO: Criar e adicionar

      /** Tipo de site */
      type: "website",

      /** Locale */
      locale: "pt_BR",
    },

    /** Twitter Card */
    twitter: {
      card: "summary_large_image",
      site: "", // TODO: Ex: "@acme" (se tiver Twitter)
      creator: "", // TODO: Ex: "@joaosilva"
    },
  },

  // ===========================================
  // 17. IDIOMAS (i18n)
  // ===========================================

  i18n: {
    /** Idioma padrão */
    defaultLocale: "pt", // TODO: "pt", "en", "es", etc.

    /** Idiomas disponíveis */
    locales: ["pt"], // TODO: Ex: ["pt", "en", "es"]

    /** Nomes dos idiomas */
    localeNames: {
      pt: "Português",
      // en: "English",
      // es: "Español",
    },
  },

  // ===========================================
  // 18. FEATURES/FUNCIONALIDADES
  // ===========================================

  features: {
    /** Newsletter */
    newsletter: {
      enabled: false, // TODO: true se quiser newsletter
      provider: "", // TODO: Ex: "mailchimp", "sendgrid"
    },

    /** Modo escuro */
    darkMode: {
      enabled: false, // TODO: true se quiser dark mode
      defaultTheme: "light", // "light" ou "dark"
    },

    /** PWA (Progressive Web App) */
    pwa: {
      enabled: false, // TODO: true se quiser PWA
    },

    /** Cookies */
    cookieConsent: {
      enabled: true, // TODO: true para LGPD compliance
    },
  },
};

// ===========================================
// TIPOS TYPESCRIPT (NÃO EDITAR)
// ===========================================

export type SiteConfig = typeof siteConfig;
