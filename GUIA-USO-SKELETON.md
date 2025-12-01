# 📖 Guia Completo de Uso do Template Skeleton

> **Objetivo:** Transformar o skeleton em um site funcional para o cliente em 4-6 horas

---

## 🎯 Visão Geral do Processo

```
1. COLETAR (1h)
   └─> Reunião com cliente + DECISOES-CLIENTE.md

2. CONFIGURAR (30min)
   └─> Preencher site.config.ts com dados coletados

3. CUSTOMIZAR (2-3h)
   └─> Cores, logo, conteúdo das páginas

4. VALIDAR (1h)
   └─> Testar tudo, corrigir bugs

5. DEPLOY (30min)
   └─> Build + hospedagem
```

**Total:** 5-6 horas para site completo

---

## FASE 1: Preparação (Antes de Começar)

### 1.1 Copiar Skeleton para Novo Projeto

```bash
# Volte para a pasta pai
cd ..

# Copie o skeleton
cp -r template-universal/template-skeleton ./cliente-[nome]-site

# Entre na nova pasta
cd cliente-[nome]-site

# Inicialize git
git init
git add .
git commit -m "chore: setup inicial a partir do template skeleton"
```

### 1.2 Renomear Projeto

Edite `package.json`:

```json
{
  "name": "cliente-xyz-site",
  "version": "0.1.0",
  "description": "Site institucional [Nome do Cliente]"
}
```

### 1.3 Instalar Dependências

```bash
pnpm install
```

### 1.4 Verificar Estrutura

```bash
pnpm dev
# Deve abrir em http://localhost:3000
# Página vazia/mínima = skeleton funcionando!
```

---

## FASE 2: Coleta de Informações do Cliente (1h)

### 2.1 Agende Reunião

Use o arquivo **DECISOES-CLIENTE.md** como roteiro.

**Prepare antes:**
- [ ] Documento compartilhado (Google Docs) para anotar
- [ ] Pasta para receber assets: `~/Clientes/[NomeCliente]/assets/`
- [ ] Exemplos de sites para mostrar

### 2.2 Durante a Reunião

Siga o checklist em **DECISOES-CLIENTE.md** e colete:

✅ **Identidade**
- Nome da empresa
- Slogan
- Cores (códigos HEX)
- Logo (solicitar em alta resolução)

✅ **Conteúdo**
- Textos do Hero (título + subtítulo)
- Lista de serviços (3-6)
- Sobre a empresa (história, valores)
- Equipe (nomes, cargos, fotos)

✅ **Contato**
- Email, telefone, WhatsApp
- Endereço (se tiver)
- Redes sociais

✅ **Técnico**
- Domínio (se já tiver)
- Integrações necessárias (Google Analytics, etc.)

### 2.3 Após a Reunião

Solicite materiais pendentes por email:

```
Assunto: [Cliente] - Materiais para o Site

Olá [Nome],

Para iniciar o desenvolvimento, preciso que envie:

URGENTE:
- Logo em alta resolução (PNG transparente ou SVG)
- Cores da marca (códigos HEX: #XXXXXX)

ATÉ [DATA]:
- Fotos da equipe (800x800px mínimo)
- Fotos de projetos/cases

OPCIONAL:
- Vídeo para hero (max 50MB)
- Manual de identidade visual

Envie para [seu-email] ou Google Drive.

Abraço!
```

---

## FASE 3: Configuração Base (30min)

### 3.1 Preencher site.config.ts

Copie o template:

```bash
cp site.config.template.ts site.config.ts
```

Preencha com dados coletados:

```typescript
// site.config.ts

export const siteConfig = {
  // IDENTIDADE
  name: "Nome da Empresa Cliente",
  tagline: "Slogan ou frase de efeito",
  description: "Descrição curta (150-160 chars para SEO)",

  // URLs
  url: "https://clientesite.com.br",

  // CONTATO
  contact: {
    email: "contato@cliente.com.br",
    phone: "+55 48 99999-9999",
    whatsapp: "+5548999999999", // Sem espaços
    address: {
      street: "Rua Exemplo, 123",
      city: "Florianópolis",
      state: "SC",
      zip: "88000-000"
    }
  },

  // REDES SOCIAIS
  social: {
    instagram: "https://instagram.com/cliente",
    linkedin: "https://linkedin.com/company/cliente",
    // facebook, youtube, etc.
  },

  // NAVEGAÇÃO
  navigation: {
    main: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" },
      { label: "Serviços", href: "/servicos" },
      { label: "Contato", href: "/contato" },
    ],
    cta: {
      text: "Falar com Vendas",
      href: "/contato"
    }
  },

  // HERO
  hero: {
    title: "Transforme Seu Negócio",
    subtitle: "Com Soluções Inteligentes",
    description: "Texto mais longo explicando o diferencial...",
    ctaPrimary: {
      text: "Agendar Consultoria",
      href: "/contato"
    },
    ctaSecondary: {
      text: "Ver Cases",
      href: "/projetos"
    }
  },

  // SERVIÇOS
  services: [
    {
      id: "servico-1",
      icon: "🚀",
      title: "Nome do Serviço 1",
      description: "Descrição curta...",
      features: [
        "Benefício 1",
        "Benefício 2",
        "Benefício 3"
      ],
      link: "/servicos/servico-1"
    },
    // ... mais serviços
  ],

  // EQUIPE (opcional)
  team: [
    {
      name: "João Silva",
      role: "CEO & Fundador",
      bio: "Biografia curta...",
      normalImage: "/images/team/joao-normal.jpg",
      hobbyImage: "/images/team/joao-hobby.jpg",
      social: {
        linkedin: "https://linkedin.com/in/joao"
      }
    },
    // ... mais membros
  ]
};
```

### 3.2 Configurar Variáveis de Ambiente

Copie o exemplo:

```bash
cp .env.example .env.local
```

Edite `.env.local`:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Resend (Email)
RESEND_API_KEY="re_xxxxxxxxxxxxx"

# Outras integrações conforme necessário
```

---

## FASE 4: Customização Visual (2-3h)

### 4.1 Cores da Marca (15min)

Edite `packages/design-tokens/src/themes.ts`:

```css
:root {
  /* CORES DO CLIENTE */
  --primitive-primary-500: #0066FF;    /* Cor primária */
  --primitive-secondary-500: #00D9FF;  /* Cor secundária */
  --primitive-accent-500: #FFD700;     /* Cor de destaque */

  /* Mapeamento semântico (não mexer) */
  --color-primary: var(--primitive-primary-500);
  --color-secondary: var(--primitive-secondary-500);
  --color-accent: var(--primitive-accent-500);
}
```

**Teste:** As cores devem mudar automaticamente em todo o site.

### 4.2 Logo (20min)

#### Opção A: Imagem (PNG/WebP)

1. Otimize o logo:
   ```bash
   # Se for PNG grande, converta para WebP
   # Use https://squoosh.app/
   ```

2. Copie para `apps/web/public/images/`:
   ```bash
   cp ~/Clientes/Cliente/logo.webp apps/web/public/images/logo.webp
   ```

3. Crie componente:
   ```tsx
   // apps/web/components/ClientLogo.tsx
   import Image from 'next/image';

   export function ClientLogo({ className }: { className?: string }) {
     return (
       <Image
         src="/images/logo.webp"
         alt="Logo Nome Cliente"
         width={200}
         height={60}
         className={className}
         priority
       />
     );
   }
   ```

#### Opção B: SVG (Recomendado)

```tsx
// apps/web/components/ClientLogo.tsx
export function ClientLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className}>
      {/* Cole o conteúdo do SVG aqui */}
    </svg>
  );
}
```

### 4.3 Favicon (10min)

Substitua os favicons em `apps/web/public/`:

```bash
# Gere favicons em https://realfavicongenerator.net/
# Baixe e substitua:
- favicon.ico
- icon.png (180x180)
- apple-icon.png (180x180)
```

### 4.4 Assets do Cliente (30min)

Organize assets por tipo:

```bash
apps/web/public/images/
├── logo.webp              # Logo principal
├── hero-bg.jpg            # Background do hero (1920x1080, max 500KB)
├── team/                  # Fotos da equipe
│   ├── joao-normal.jpg    # 800x800px, max 150KB
│   └── joao-hobby.jpg
├── services/              # Ícones/imagens de serviços
│   └── servico-1.jpg
└── projects/              # Cases/projetos
    └── projeto-1.jpg      # 1200x800px, max 200KB
```

**IMPORTANTE:** Otimize TODAS as imagens antes de adicionar!

### 4.5 Conteúdo das Páginas (1-2h)

#### Home (`apps/web/app/[locale]/page.tsx`)

Use dados do `siteConfig`:

```tsx
import { siteConfig } from '@/site.config';
import { ModernHero } from '@template/ui';

export default function Home() {
  return (
    <main>
      <ModernHero
        title={siteConfig.hero.title}
        subtitle={siteConfig.hero.subtitle}
        videoSrc="/videos/hero.mp4" // Se tiver
        posterSrc="/images/hero-bg.jpg"
        ctaContent={{
          primaryText: siteConfig.hero.ctaPrimary.text,
          primaryHref: siteConfig.hero.ctaPrimary.href,
          secondaryText: siteConfig.hero.ctaSecondary.text,
          secondaryHref: siteConfig.hero.ctaSecondary.href,
        }}
      />

      <ServicesSection services={siteConfig.services} />

      <AboutSection />

      <ContactSection />
    </main>
  );
}
```

#### Sobre (`apps/web/app/[locale]/sobre/page.tsx`)

```tsx
import { TeamSection } from '@template/ui/sections';
import { siteConfig } from '@/site.config';

export default function AboutPage() {
  return (
    <main>
      <HeroSection
        title="Sobre Nós"
        subtitle={siteConfig.description}
      />

      <AboutSection />

      {siteConfig.team.length > 0 && (
        <TeamSection members={siteConfig.team} />
      )}
    </main>
  );
}
```

#### Outras páginas

Siga o mesmo padrão: Use componentes do skeleton + dados do `siteConfig`.

---

## FASE 5: Validação (1h)

### 5.1 Checklist Técnico

- [ ] **Build local OK**
  ```bash
  pnpm build
  # Deve completar sem erros
  ```

- [ ] **Todos os links funcionam**
  - [ ] Header → navegação
  - [ ] Footer → contatos e redes sociais
  - [ ] CTAs → destinos corretos

- [ ] **Contatos corretos**
  - [ ] Email abre cliente de email
  - [ ] WhatsApp abre conversa
  - [ ] Telefone formatado corretamente
  - [ ] Endereço exibido (se tiver)

- [ ] **Formulário de contato**
  - [ ] Validação funciona
  - [ ] Email é enviado
  - [ ] Mensagem de sucesso aparece

### 5.2 Checklist Visual

- [ ] **Cores aplicadas**
  - [ ] Primária nos botões/links
  - [ ] Secundária em elementos de destaque
  - [ ] Contraste legível

- [ ] **Logo aparece**
  - [ ] Header (desktop e mobile)
  - [ ] Footer
  - [ ] Favicon na aba do navegador

- [ ] **Responsividade**
  - [ ] Desktop (1920px) ✓
  - [ ] Tablet (768px) ✓
  - [ ] Mobile (375px) ✓
  - [ ] Menu mobile abre/fecha

### 5.3 Checklist de Conteúdo

- [ ] **Sem placeholders**
  - Busque: "Lorem Ipsum", "UZZAI", "TODO", "[CLIENTE]"

- [ ] **Textos revisados**
  - Sem erros de português
  - Acentuação correta

- [ ] **Imagens otimizadas**
  - Cada imagem < 200KB
  - Alt text descritivo

### 5.4 Lighthouse Score

```bash
# Abra Chrome DevTools → Lighthouse
# Execute audit

# Meta:
# Performance: > 85
# Accessibility: > 90
# Best Practices: > 90
# SEO: > 90
```

Se score baixo, otimize:
- Comprima imagens maiores
- Adicione lazy loading onde necessário
- Corrija alt text faltando

---

## FASE 6: Deploy (30min)

### 6.1 Preparar para Produção

```bash
# Build final
pnpm build

# Teste produção local
pnpm start
# Acesse http://localhost:3000
# Teste navegação completa
```

### 6.2 Opções de Hospedagem

#### Opção A: Vercel (Recomendado)

```bash
# Instale Vercel CLI
pnpm add -g vercel

# Deploy
vercel

# Siga prompts:
# - Link to existing project? No
# - Project name? cliente-xyz-site
# - Directory? ./
```

**Vantagens:**
- Deploy em 2 minutos
- HTTPS automático
- CDN global
- Preview branches

#### Opção B: Hostinger (FTP)

```bash
# Build
pnpm build

# Arquivos estão em apps/web/out/
# Use FileZilla ou similar para upload via FTP
```

#### Opção C: Outras (AWS, Google Cloud, etc.)

Consulte documentação específica.

### 6.3 Configurar Domínio

1. **Se domínio já existe:**
   - Configure DNS para apontar para servidor
   - Aguarde propagação (até 48h)

2. **Se precisa registrar:**
   - Registre em Registro.br, GoDaddy, etc.
   - Configure DNS

### 6.4 Configurar SSL

- **Vercel:** Automático
- **Hostinger:** Ative no painel
- **Outros:** Certifique-se de ter HTTPS ativado

---

## FASE 7: Entrega ao Cliente (30min)

### 7.1 Criar Documentação de Handoff

Crie `HANDOFF-[CLIENTE].md`:

```markdown
# Handoff - Site [Nome Cliente]

## 🌐 Acesso ao Site

- **URL:** https://clientesite.com.br
- **Status:** ✅ No ar desde [data]

## 🔑 Credenciais

### Hospedagem
- Provedor: [Vercel/Hostinger/etc]
- Login: [email]
- Senha: [fornecida separadamente]

### Email (Resend)
- API Key: [re_xxxxx]
- Emails chegam em: contato@cliente.com.br

### Analytics
- Google Analytics ID: G-XXXXXXXXXX
- Acesso: [console.cloud.google.com](url)

## 📝 Como Editar

### Textos
Editar arquivo `site.config.ts` e fazer novo deploy.

### Imagens
Substituir em `apps/web/public/images/` e fazer deploy.

### Cores
Editar `packages/design-tokens/src/themes.ts`.

## 📞 Suporte

- Email: [seu-email]
- WhatsApp: [seu-número]
- Prazo de suporte: 30 dias a partir da entrega

## 📊 Métricas

**Lighthouse Score:**
- Performance: XX/100
- Accessibility: XX/100
- SEO: XX/100

**Estatísticas Iniciais:**
- Tamanho total: XX MB
- Tempo de carregamento: X.Xs
- Número de páginas: X
```

### 7.2 Treinar Cliente (Se Necessário)

Grave vídeo ou faça call mostrando:
- Como navegar no painel de hospedagem
- Como acessar Google Analytics
- Onde editar conteúdo (se for manutenível)

### 7.3 Coletar Feedback

Após 1 semana no ar:
- Pergunte se está tudo OK
- Colete feedback de visitantes
- Ajuste conforme necessário

---

## 🎯 Resumo do Fluxo

```
ANTES: template-skeleton (vazio, genérico)

[1h] COLETAR → Reunião com cliente
↓
[30min] CONFIGURAR → Preencher site.config.ts
↓
[2-3h] CUSTOMIZAR → Cores, logo, conteúdo
↓
[1h] VALIDAR → Testes, Lighthouse
↓
[30min] DEPLOY → Vercel/Hostinger
↓
[30min] ENTREGAR → Documentação, treino

DEPOIS: Site completo no ar (5-6h total)
```

---

## 💡 Dicas Finais

### Use IA para Acelerar

```
"Preencha o array de serviços em site.config.ts com os seguintes serviços:
1. Consultoria em IA - Ajudamos empresas a implementar IA
2. Desenvolvimento Web - Sites modernos e rápidos
3. Automação - ..."
```

### Organize por Cliente

```bash
# Crie branch por cliente
git checkout -b client/nome-cliente

# Ou tag
git tag v1.0-cliente-xyz
```

### Documente Customizações

Crie `CUSTOMIZACOES.md`:

```markdown
# Customizações - Cliente XYZ

## Cores
- Primária: #0066FF
- Secundária: #00D9FF

## Arquivos Editados
- site.config.ts (tudo)
- themes.ts (linhas 5-10, cores)
- Header.tsx (linha 85, CTA text)

## Observações
- Cliente pediu menu com 5 itens (normal é 4)
- Cores escolhidas têm contraste aprovado (4.8:1)
```

---

## ⚠️ Problemas Comuns

### Build falha com "Module not found"

```bash
# Limpe cache
rm -rf .next node_modules
pnpm install
pnpm build
```

### Imagens não aparecem

- Verifique caminho (`/images/` não `images/`)
- Confirme que imagem existe em `public/`
- Teste com imagem de exemplo primeiro

### Cores não mudam

- Limpe cache do browser (Ctrl+Shift+R)
- Verifique se editou `themes.ts` correto
- Confirme que classes Tailwind usam variáveis CSS

### Deploy Vercel falha

- Verifique se `pnpm build` passa local
- Confirme variáveis de ambiente configuradas
- Veja logs detalhados no dashboard

---

**Pronto!** Você transformou o skeleton em um site profissional. 🎉

**Próximo cliente:** Repita o processo (vai ficar cada vez mais rápido!)
