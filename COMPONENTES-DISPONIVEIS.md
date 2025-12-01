# 🧩 Componentes Disponíveis no Template Skeleton

> **Referência rápida:** Componentes 100% parametrizáveis prontos para usar

---

## 📖 Como Usar Este Guia

Este arquivo lista APENAS componentes que estão **100% parametrizáveis** via props, sem conteúdo hardcoded.

### Legenda de Status

- ✅ **Verde** = Pronto para usar, totalmente customizável via props
- 🔧 **Ferramentas** = Utilitários e helpers

---

## 🧩 COMPONENTES PRIMITIVOS (UI Básicos)

### ✅ Button

**O que é:** Botão reutilizável com 4 variantes e 3 tamanhos

**Localização:** `packages/ui/src/components/Button.tsx`

**Uso:**
```tsx
import { Button } from '@template/ui';

<Button variant="primary" size="lg">
  Falar com Vendas
</Button>

<Button variant="outline" href="/contato">
  Entre em Contato
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `href`: string (opcional, converte em Link)
- `onClick`: () => void (opcional)
- `disabled`: boolean

---

### ✅ Card

**O que é:** Container modular para conteúdo (composição)

**Localização:** `packages/ui/src/components/Card.tsx`

**Uso:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@template/ui';

<Card>
  <CardHeader>
    <CardTitle>Desenvolvimento Web</CardTitle>
    <CardDescription>Sites modernos</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Criamos sites com Next.js...</p>
  </CardContent>
  <CardFooter>
    <Button>Saiba Mais</Button>
  </CardFooter>
</Card>
```

**Componentes:**
- `Card` - Container principal
- `CardHeader` - Cabeçalho
- `CardTitle` - Título
- `CardDescription` - Descrição
- `CardContent` - Conteúdo principal
- `CardFooter` - Rodapé

---

### ✅ Badge

**O que é:** Tag/Label colorida

**Localização:** `packages/ui/src/components/Badge.tsx`

**Uso:**
```tsx
import { Badge } from '@template/ui';

<Badge variant="success">Novo</Badge>
<Badge variant="warning">Em Breve</Badge>
```

**Props:**
- `variant`: 'default' | 'success' | 'warning' | 'error'

---

### ✅ Input

**O que é:** Campo de entrada de texto

**Localização:** `packages/ui/src/components/Input.tsx`

**Uso:**
```tsx
import { Input, Label } from '@template/ui';

<div>
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="seu@email.com"
    required
  />
</div>
```

**Props:** Aceita todas as props nativas de `<input>`

---

### ✅ Dialog

**O que é:** Modal/Diálogo acessível (baseado em Radix UI)

**Localização:** `packages/ui/src/components/Dialog.tsx`

**Uso:**
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@template/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do Modal</DialogTitle>
    </DialogHeader>
    <p>Conteúdo...</p>
  </DialogContent>
</Dialog>
```

---

### ✅ Accordion

**O que é:** Accordion/Collapse acessível

**Localização:** `packages/ui/src/components/Accordion.tsx`

**Uso:**
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@template/ui';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>O que é Next.js?</AccordionTrigger>
    <AccordionContent>
      Next.js é um framework React...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### ✅ Tabs

**O que é:** Abas/Tabs para organizar conteúdo

**Localização:** `packages/ui/src/components/Tabs.tsx`

**Uso:**
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@template/ui';

<Tabs defaultValue="web">
  <TabsList>
    <TabsTrigger value="web">Web</TabsTrigger>
    <TabsTrigger value="mobile">Mobile</TabsTrigger>
  </TabsList>
  <TabsContent value="web">
    Conteúdo web...
  </TabsContent>
  <TabsContent value="mobile">
    Conteúdo mobile...
  </TabsContent>
</Tabs>
```

---

## 🎨 COMPONENTES ESPECIALIZADOS

### ✅ FlipBox

**O que é:** Card com animação de flip 3D ao hover

**Localização:** `packages/ui/src/components/FlipBox.tsx`

**Uso:**
```tsx
import { FlipBox } from '@template/ui';

<FlipBox
  frontContent={
    <div>
      <h3>Desenvolvimento Web</h3>
      <p>Hover para ver mais</p>
    </div>
  }
  backContent={
    <div>
      <p>Criamos sites com Next.js...</p>
      <Button>Saiba Mais</Button>
    </div>
  }
/>
```

---

### ✅ EmojiIcon

**O que é:** Wrapper acessível para emojis

**Localização:** `packages/ui/src/components/EmojiIcon.tsx`

**Uso:**
```tsx
import { EmojiIcon } from '@template/ui';

<EmojiIcon emoji="🚀" aria-label="Foguete" className="text-4xl" />
```

**Por que usar:** Emojis precisam de `aria-label` para acessibilidade

---

### ✅ LazySection

**O que é:** Wrapper para lazy loading de seções pesadas

**Localização:** `packages/ui/src/components/LazySection.tsx`

**Uso:**
```tsx
import { LazySection } from '@template/ui';

<LazySection fallback={<div>Carregando...</div>}>
  <HeavyComponent />
</LazySection>
```

**Quando usar:** Seções com muitas imagens, vídeos ou componentes pesados

---

## 📄 SEÇÕES DE PÁGINA (100% Parametrizáveis)

### ✅ ModernHero

**O que é:** Hero moderno com vídeo background, animações e CTAs

**Localização:** `packages/ui/src/components/ModernHero.tsx`

**Uso:**
```tsx
import { ModernHero } from '@template/ui';

<ModernHero
  title="Transforme Seu Negócio"
  subtitle="Com Tecnologia Inteligente"
  videoSrc="/videos/hero.mp4"
  posterSrc="/images/hero-poster.jpg"
  heroContent={{
    descriptionLead: "Desenvolvemos soluções",
    descriptionHighlight: "que automatizam processos",
    descriptionEnd: "e aumentam eficiência."
  }}
  ctaContent={{
    primaryText: "Agendar Consultoria",
    primaryHref: "/contato",
    secondaryText: "Ver Cases",
    secondaryHref: "/projetos"
  }}
/>
```

**Recursos:**
- Vídeo background com fallback para imagem
- Animação word-by-word no texto
- Respeita `prefers-reduced-motion`
- Responsivo (mobile-first)
- Dois CTAs customizáveis

---

### ✅ HeroSection

**O que é:** Hero simples com título, subtítulo e gradiente

**Localização:** `packages/ui/src/sections/HeroSection.tsx`

**Uso:**
```tsx
import { HeroSection } from '@template/ui/sections';

<HeroSection
  title="Bem-vindo ao Nosso Site"
  subtitle="Soluções inovadoras"
  variant="gradient"
/>
```

**Limitações:** Mais simples que ModernHero, use ModernHero para mais flexibilidade

---

### ✅ TeamSection

**O que é:** Seção de equipe com cards animados

**Localização:** `packages/ui/src/sections/TeamSection.tsx`

**Uso:**
```tsx
import { TeamSection } from '@template/ui/sections';

const teamMembers = [
  {
    name: 'João Silva',
    role: 'CEO & Founder',
    normalImage: '/images/team/joao-normal.jpg',
    hobbyImage: '/images/team/joao-hobby.jpg',
    bio: 'Desenvolvedor full-stack...',
    social: {
      linkedin: 'https://linkedin.com/in/joaosilva',
      github: 'https://github.com/joaosilva'
    }
  },
];

<TeamSection members={teamMembers} />
```

**Recursos:**
- Hover para trocar imagem (normal ↔ hobby)
- Links para redes sociais
- Bio expandível

---

### ✅ BlogListSection

**O que é:** Grid de posts de blog

**Localização:** `packages/ui/src/sections/BlogListSection.tsx`

**Uso:**
```tsx
import { BlogListSection } from '@template/ui/sections';
import { getAllPosts } from '@/data/blog';

const posts = getAllPosts();

<BlogListSection posts={posts} />
```

**Props:**
```typescript
posts: Array<{
  slug: string;
  title: string;
  excerpt: string;
  author: { name: string; avatar: string; };
  publishedAt: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
}>
```

---

### ✅ TestimonialsSection

**O que é:** Seção de depoimentos de clientes

**Localização:** `packages/ui/src/sections/TestimonialsSection.tsx`

**Uso:**
```tsx
import { TestimonialsSection } from '@template/ui/sections';

const testimonials = [
  {
    name: 'Carlos Oliveira',
    role: 'CEO',
    company: 'XPTO Ltda',
    text: 'Excelente trabalho, superou expectativas!',
    avatar: '/images/testimonials/carlos.jpg',
    rating: 5
  },
];

<TestimonialsSection testimonials={testimonials} />
```

---

## 🔧 UTILITÁRIOS E HELPERS

### 🔧 cn() - Class Name Utility

**O que é:** Helper para concatenar classes Tailwind condicionalmente

**Localização:** `apps/web/lib/utils.ts`

**Uso:**
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  'another-class'
)}>
  Conteúdo
</div>
```

---

### 🔧 buildCanonicalPath

**O que é:** Helper para gerar canonical URLs corretas

**Localização:** `apps/web/lib/seo.ts`

**Uso:**
```tsx
import { buildCanonicalPath } from '@/lib/seo';

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const canonical = buildCanonicalPath(locale, '/sobre');

  return {
    title: 'Sobre Nós',
    alternates: { canonical },
  };
}
```

---

### 🔧 buildPageMetadata

**O que é:** Helper completo para metadata de página

**Localização:** `apps/web/lib/seo.ts`

**Uso:**
```tsx
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return buildPageMetadata(locale, '/sobre', {
    title: 'Sobre Nós | Empresa',
    description: 'Conheça nossa história...',
  });
}
```

---

## ⚠️ COMPONENTES QUE REQUEREM CUSTOMIZAÇÃO

Os componentes abaixo **NÃO estão no skeleton** porque contêm dados hardcoded que precisam ser editados manualmente para cada cliente:

### ❌ Header
- **Problema:** Links de navegação fixos no código
- **Solução:** Editar manualmente ou aguardar versão parametrizável

### ❌ Footer
- **Problema:** Todos os links, emails e dados de contato hardcoded
- **Solução:** Editar manualmente

### ❌ AboutSection
- **Problema:** Valores, missão e visão fixos no código
- **Solução:** Criar versão customizada por cliente

### ❌ ServicesPortfolioSection
- **Problema:** 5 serviços hardcoded
- **Solução:** Criar versão customizada com dados do `siteConfig`

### ❌ ProjectsSection
- **Problema:** Projetos fixos no código
- **Solução:** Criar versão customizada

### ❌ FAQSection
- **Problema:** 6 FAQs hardcoded
- **Solução:** Criar versão customizada

### ❌ ContactSection
- **Problema:** Emails e telefones hardcoded
- **Solução:** Criar versão que lê do `siteConfig`

---

## 📊 MATRIZ DE COMPONENTES

| Componente | Status | Customizável | Onde Usar |
|------------|--------|--------------|-----------|
| Button | ✅ 100% | Via props | Qualquer lugar |
| Card | ✅ 100% | Via props | Seções, cards |
| Badge | ✅ 100% | Via props | Tags, labels |
| Input | ✅ 100% | Via props | Formulários |
| Dialog | ✅ 100% | Via props | Modais |
| Accordion | ✅ 100% | Via props | FAQ, dropdowns |
| Tabs | ✅ 100% | Via props | Organizar conteúdo |
| FlipBox | ✅ 100% | Via props | Serviços, features |
| ModernHero | ✅ 95% | Via props | Home (hero) |
| TeamSection | ✅ 90% | Via props | Página Sobre |
| BlogListSection | ✅ 90% | Via props | Página Blog |
| TestimonialsSection | ✅ 90% | Via props | Depoimentos |
| **Header** | ❌ 20% | Edição manual | Navegação |
| **Footer** | ❌ 30% | Edição manual | Rodapé |
| **AboutSection** | ❌ 0% | Edição manual | Sobre |
| **ServicesSection** | ❌ 0% | Edição manual | Serviços |
| **FAQSection** | ❌ 0% | Edição manual | FAQ |
| **ContactSection** | ⚠️ 50% | Parcialmente | Contato |

---

## 💡 Como Usar Componentes Hardcoded

Para componentes que ainda não são 100% parametrizáveis:

### Opção 1: Copiar e Customizar

```bash
# Copie o componente para seu projeto
cp template-universal/packages/ui/src/sections/AboutSection.tsx \
   apps/web/components/sections/AboutSection.tsx

# Edite com dados do cliente
# Use como componente local
```

### Opção 2: Criar Versão Parametrizável

```tsx
// Crie uma versão que aceita props do siteConfig
import { siteConfig } from '@/site.config';

export function AboutSection() {
  return (
    <section>
      <h2>Sobre {siteConfig.identity.name}</h2>
      <p>{siteConfig.about.mission}</p>
      {/* ... usa dados do config */}
    </section>
  );
}
```

---

## 🔍 Encontrar Componentes

### Por Funcionalidade

- **Botões:** Button
- **Containers:** Card
- **Formulários:** Input, Label
- **Navegação:** Tabs, Accordion
- **Interação:** Dialog, Accordion
- **Visual:** Badge, FlipBox, EmojiIcon
- **Seções:** ModernHero, TeamSection, BlogListSection

### Por Caso de Uso

- **Landing Page:** ModernHero, ServicesSection, TestimonialsSection
- **Página Sobre:** TeamSection, AboutSection
- **Blog:** BlogListSection
- **FAQ:** Accordion, FAQSection
- **Contato:** Input, Label, ContactSection

---

## 📚 Referência Completa

Para exemplos detalhados de cada componente, consulte:
- **Catálogo completo:** `docs/02-COMPONENTES/01-CATALOGO-COMPLETO.md` (no template-universal)
- **Boas práticas:** `docs/05-BOAS-PRATICAS/01-O-QUE-FAZER.md`

---

**Pronto!** Você conhece todos os componentes prontos para uso. 🎉

**Próximo passo:** Use `site.config.ts` para centralizar dados e componentes para montar páginas!
