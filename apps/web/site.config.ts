/**
 * CONFIGURAÇÃO CENTRAL DO SITE - Luciano Giorgetta
 * Instrutor de Yôga em Porto Alegre
 */

export const siteConfig = {
  // ===========================================
  // 1. IDENTIDADE DA EMPRESA
  // ===========================================

  identity: {
    name: "Luciano Giorgetta",
    legalName: "Luciano Giorgetta",
    taxId: "",
    tagline: "Yôga para corpos reais, filosofia para mentes livres.",
    description: "Yôga e filosofia para quem busca qualidade de vida real, não promessas místicas. Aulas particulares e em grupo em Porto Alegre.",
    foundedYear: 2021,
    anniversary: "01-01",
  },

  // ===========================================
  // 2. URLS E DOMÍNIOS
  // ===========================================

  urls: {
    production: "https://lucianogiorgetta.com.br",
    staging: "",
    basePath: "/",
  },

  // ===========================================
  // 3. CONTATO
  // ===========================================

  contact: {
    email: {
      primary: "luciano@giorgetta.com.br",
      secondary: "",
    },
    phone: {
      primary: "+55 51 9826-1301",
      whatsapp: "555198261301",
      whatsappMessage: "Olá Luciano! Vim pelo site e gostaria de agendar uma aula experimental!",
    },
    address: {
      hasPhysicalAddress: true,
      street: "Rua Ramiro Barcelos, 1800",
      complement: "Escola Umana Rio Branco",
      neighborhood: "",
      city: "Porto Alegre",
      state: "RS",
      zipCode: "",
      country: "Brasil",
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    businessHours: {
      days: "Segunda a Sexta",
      hours: "Consultar horários disponíveis",
      timezone: "America/Sao_Paulo",
    },
  },

  // ===========================================
  // 4. REDES SOCIAIS
  // ===========================================

  social: {
    instagram: "https://instagram.com/lucianogiorgetta",
    linkedin: "",
    facebook: "",
    youtube: "",
    tiktok: "",
    twitter: "",
    github: "",
  },

  // ===========================================
  // 5. NAVEGAÇÃO
  // ===========================================

  navigation: {
    main: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" },
      { label: "Aulas", href: "/#aulas" },
      { label: "Filosofia", href: "/#filosofia" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
    cta: {
      text: "Agendar Aula Experimental",
      href: "/contato",
    },
    footer: {
      solutions: [
        { label: "Aulas Particulares", href: "/#aulas" },
        { label: "Aulas em Grupo", href: "/#aulas" },
        { label: "Workshops de Filosofia", href: "/#aulas" },
      ],
      company: [
        { label: "Sobre", href: "/sobre" },
        { label: "Filosofia", href: "/#filosofia" },
        { label: "Blog", href: "/blog" },
      ],
      legal: [],
    },
  },

  // ===========================================
  // 6. HERO (SEÇÃO PRINCIPAL DA HOME)
  // ===========================================

  hero: {
    title: "Energia que não acaba.",
    subtitle: "Clareza que transforma.",
    description: {
      lead: "Yôga e filosofia para quem busca",
      highlight: "qualidade de vida real",
      end: ", não promessas místicas.",
    },
    cta: {
      primary: {
        text: "Agendar Aula Experimental",
        href: "/contato",
      },
      secondary: {
        text: "Conhecer a Filosofia",
        href: "/#filosofia",
      },
    },
    video: {
      enabled: false,
      src: "/videos/hero.mp4",
      poster: "/images/hero-bg.jpg",
    },
  },

  // ===========================================
  // 7. SOBRE A EMPRESA
  // ===========================================

  about: {
    story: [
      "Aos 15 anos, por indicação da mãe, experimentei a primeira aula de Yôga. Senti mais energia, disposição e rendimento no skate. Foi quando percebi: isso funciona de verdade.",
      "Durante 8 anos, trabalhei como tatuador profissional (estilo oriental/japonês) enquanto praticava Yôga. A filosofia começou a fazer cada vez mais sentido.",
      "Em 2021, fiz a transição de carreira. Virei instrutor de Yôga. Hoje sou Nível 3 pela Humana, o nível mais alto de certificação. Ministro aulas particulares, em grupo, workshops de filosofia. Já atendi mais de 200 alunos, dei mais de 1000 práticas.",
    ],
    mission: "Transmitir o que estou vivendo: melhora na qualidade de vida, clareza mental, energia constante. Para pessoas reais, com vidas reais.",
    vision: "Ser referência em Yôga acessível, quebrando estereótipos e mostrando que a prática é para todos.",
    values: [
      {
        title: "AUTENTICIDADE",
        description: "Não finjo ser quem não sou. Sou tatuado, gosto de skate, tenho uma história real. Yôga não é sobre perfeição, é sobre transformação.",
        icon: "User",
      },
      {
        title: "FILOSOFIA ACESSÍVEL",
        description: "Samkhya e Tantra são profundos, mas não precisam ser complicados. Traduzo conceitos complexos para uma linguagem que faz sentido.",
        icon: "Book",
      },
      {
        title: "LIBERDADE",
        description: "Yôga é sobre liberdade, não repressão. Sobre usar a mente como ferramenta, não ser dominado por ela. Sobre viver com energia e clareza.",
        icon: "Zap",
      },
    ],
    stats: [
      { value: "13", label: "Anos de Prática" },
      { value: "5", label: "Anos como Instrutor" },
      { value: "200+", label: "Alunos Atendidos" },
      { value: "1000+", label: "Práticas Ministradas" },
    ],
  },

  // ===========================================
  // 8. SERVIÇOS/PRODUTOS
  // ===========================================

  services: [
    {
      id: "aulas-particulares",
      icon: "🧘‍♂️",
      title: "Aulas Particulares",
      description: "Presencial ou online. Evolua no seu ritmo, sem comparações.",
      features: [
        "Atendimento personalizado",
        "Horários flexíveis",
        "Foco nos seus objetivos",
        "Porto Alegre ou online",
      ],
      link: "/contato",
      ctaText: "Agendar Aula",
    },
    {
      id: "aulas-grupo",
      icon: "👥",
      title: "Aulas em Grupo",
      description: "Na Escola Umana Rio Branco (Ramiro 1800).",
      features: [
        "Segunda a sexta",
        "Turmas regulares",
        "Ambiente acolhedor",
        "Comunidade de praticantes",
      ],
      link: "/contato",
      ctaText: "Saiba Mais",
    },
    {
      id: "workshops-filosofia",
      icon: "📚",
      title: "Workshops de Filosofia",
      description: "Aprofunde-se em mitologia, Samkhya e Tantra.",
      features: [
        "Temas filosóficos",
        "Linguagem acessível",
        "Aplicação prática",
        "Cursos futuros online",
      ],
      link: "/contato",
      ctaText: "Ver Workshops",
    },
  ],

  // ===========================================
  // 9. EQUIPE
  // ===========================================

  team: {
    enabled: false,
    members: [],
  },

  // ===========================================
  // 10. PROJETOS/CASES
  // ===========================================

  projects: {
    enabled: false,
    items: [],
  },

  // ===========================================
  // 11. DEPOIMENTOS
  // ===========================================

  testimonials: {
    enabled: true,
    items: [
      {
        name: "Pedro M.",
        role: "Praticante",
        company: "",
        text: "Depois que comecei a praticar com o Luciano, me sinto mais disposto. Consigo fazer uma quantidade enorme de coisas e a energia parece que nunca acaba. Tenho certeza que tem totalmente a ver com a prática.",
        avatar: "",
        rating: 5,
      },
      {
        name: "Mayra M.",
        role: "Aluna",
        company: "Escola Umana",
        text: "O Luciano tem um dom para explicar filosofia de um jeito que faz sentido. Não é aquele papo esotérico que a gente não entende. É prático, é real, e funciona no dia a dia.",
        avatar: "",
        rating: 5,
      },
    ],
  },

  // ===========================================
  // 12. FAQ (PERGUNTAS FREQUENTES)
  // ===========================================

  faq: {
    enabled: false,
    items: [],
  },

  // ===========================================
  // 13. BLOG
  // ===========================================

  blog: {
    enabled: true,
    postsPerPage: 9,
    categories: [
      { slug: "filosofia", name: "Filosofia" },
      { slug: "pratica", name: "Prática" },
      { slug: "qualidade-de-vida", name: "Qualidade de Vida" },
    ],
  },

  // ===========================================
  // 14. FORMULÁRIO DE CONTATO
  // ===========================================

  contactForm: {
    recipient: "luciano@giorgetta.com.br",
    fields: {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true },
      phone: { enabled: true, required: false },
      company: { enabled: false, required: false },
      subject: { enabled: false, required: false },
      message: { enabled: true, required: true },
    },
    dropdowns: {
      source: {
        enabled: false,
        options: [],
      },
      service: {
        enabled: false,
        options: [],
      },
    },
    messages: {
      success: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      error: "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por WhatsApp.",
    },
  },

  // ===========================================
  // 15. INTEGRAÇÕES
  // ===========================================

  integrations: {
    googleAnalytics: {
      enabled: false,
      measurementId: "",
    },
    googleTagManager: {
      enabled: false,
      containerId: "",
    },
    facebookPixel: {
      enabled: false,
      pixelId: "",
    },
    chat: {
      enabled: false,
      provider: "",
      widgetId: "",
    },
    calendly: {
      enabled: false,
      url: "",
    },
  },

  // ===========================================
  // 16. SEO E METADATA
  // ===========================================

  seo: {
    keywords: [
      "yôga porto alegre",
      "instrutor de yôga",
      "aulas de yôga particulares",
      "filosofia samkhya",
      "filosofia tantra",
      "yôga para iniciantes",
      "qualidade de vida",
    ],
    author: "Luciano Giorgetta",
    openGraph: {
      image: "/images/og-image.jpg",
      type: "website",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      site: "",
      creator: "",
    },
  },

  // ===========================================
  // 17. IDIOMAS (i18n)
  // ===========================================

  i18n: {
    defaultLocale: "pt",
    locales: ["pt"],
    localeNames: {
      pt: "Português",
    },
  },

  // ===========================================
  // 18. FEATURES/FUNCIONALIDADES
  // ===========================================

  features: {
    newsletter: {
      enabled: false,
      provider: "",
    },
    darkMode: {
      enabled: false,
      defaultTheme: "light",
    },
    pwa: {
      enabled: false,
    },
    cookieConsent: {
      enabled: true,
    },
  },
};

export type SiteConfig = typeof siteConfig;
