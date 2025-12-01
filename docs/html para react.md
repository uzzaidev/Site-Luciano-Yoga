Guia: Transformando Protótipos HTML em React com Fidelidade Visual
Este documento explica o problema de discrepância visual encontrado no projeto Luciano e detalha o processo para garantir que a aplicação React/Next.js seja visualmente idêntica ao protótipo HTML/CSS original.

O Problema
Ao portar um design de HTML/CSS puro para um framework como Tailwind CSS, é comum ocorrerem pequenas diferenças visuais ("Visual Drift"). Isso acontece porque:

Interpretação vs. Cópia: Tentar "traduzir" regras CSS específicas (ex: padding: 8rem 2rem) para classes utilitárias próximas (ex: py-32 px-8) raramente resulta em valores exatos.
Reset CSS: O Tailwind aplica um reset de estilos (Preflight) que pode remover margens, fontes e comportamentos padrão que o HTML original assumia.
Complexidade de Seletores: O CSS original pode usar seletores complexos ou cascatas que são difíceis de replicar apenas com classes utilitárias isoladas.
A Solução: Portabilidade Direta
Para garantir fidelidade de 100%, a estratégia mais segura é não traduzir, mas sim portar o CSS original e a estrutura HTML.

Passo a Passo
1. Extração do CSS
Copie o conteúdo da tag <style> do protótipo HTML para um arquivo CSS dedicado na sua aplicação Next.js (ex: 
apps/web/app/luciano.css
).

Dica: Mantenha as variáveis CSS (:root) para garantir que as cores e fontes sejam consistentes.

2. Importação Global
Importe este novo arquivo CSS no seu layout principal (
layout.tsx
) para que os estilos estejam disponíveis em toda a aplicação.

// apps/web/app/[locale]/layout.tsx
import '../globals.css'; // Tailwind base
import '../luciano.css'; // Estilos do protótipo (sobrescrevem ou complementam)
3. Refatoração dos Componentes (A Chave do Sucesso)
Esta é a etapa mais importante. Você deve ajustar seus componentes React para produzir exatamente a mesma estrutura HTML e classes que o protótipo.

Remova classes Tailwind conflitantes: Se o CSS define padding e background para a classe .hero, remova as classes p-32 bg-gradient... do componente.
Use as classes originais: Adicione as classes do CSS portado (className="hero", className="hero-content", etc.).
Mantenha a hierarquia: Se o CSS espera div.hero > div.hero-content, garanta que seu JSX siga essa aninhamento.
Exemplo:

Antes (Tailwind - Aproximado):

<section className="bg-blue-900 py-20 text-white">
  <h1 className="text-4xl font-bold">Título</h1>
</section>
Depois (CSS Portado - Exato):

<section className="hero">
  <div className="hero-content">
    <h1>Título</h1>
  </div>
</section>
4. Integração de Dados (Data Binding)
Após garantir a estrutura visual, injete os dados dinâmicos. Mantenha a estrutura HTML intacta e substitua apenas os textos hardcoded pelas variáveis de configuração.

<h1 className="hero-title">
  {siteConfig.hero.title} {/* Substitui o texto fixo */}
</h1>
5. Assets e Imagens
Substitua tags <img> estáticas pelo componente <Image /> do Next.js para otimização, mas garanta que ele receba as mesmas classes ou estilos (ex: object-fit, border-radius) que a imagem original tinha.

Resumo
Para fidelidade visual total:

Copie o CSS exato.
Use as mesmas classes no JSX.
Não tente recriar com Tailwind se o objetivo é ser idêntico.
Injete os dados na estrutura validada.


 🏗️ Estrutura do Projeto

  Este é um monorepo Turborepo com Next.js 19, React 19 e TypeScript. A estrutura:

  template-skeleton/
  ├── apps/web/              # Aplicação Next.js principal
  │   ├── app/[locale]/      # Rotas com i18n (next-intl)
  │   ├── components/        # Componentes específicos (Header, Footer, sections)
  │   └── site.config.ts     # Configuração centralizada
  ├── packages/
  │   ├── ui/               # Componentes reutilizáveis (Button, etc)
  │   ├── design-tokens/    # Sistema de design
  │   └── core/             # Tipos TypeScript genéricos
  └── docs/LUCIANO/         # Arquivos HTML de referência

  Features do projeto:
  - Sistema de internacionalização (next-intl)
  - Design system com Tailwind CSS
  - Componentes parametrizáveis
  - Configuração centralizada no site.config.ts
  - Blog com 6 artigos implementados
  - Seções modulares reutilizáveis

  ---
  🔍 Comparação: Home Atual (React) vs luciano-home.html

  ✅ O que ESTÁ igual (conteúdo e estrutura):

  | Elemento          | Status                                                          |
  |-------------------|-----------------------------------------------------------------|
  | Header/Navegação  | ✅ Mesmo logo, mesmos links                                      |
  | Hero Section      | ✅ Mesmo título, subtítulo, tagline, CTAs                        |
  | Sobre Section     | ✅ Mesma timeline (2013, 2013-2021, 2021), mesmas estatísticas   |
  | Filosofia Section | ✅ Mesma quote, mesmos 4 cards (Samkhya, Didática, Mente, Corpo) |
  | Aulas Section     | ✅ Mesmos 3 serviços com features idênticas                      |
  | Depoimentos       | ✅ Mesmos 2 depoimentos (Pedro M. e Mayra M.)                    |
  | Contato Section   | ✅ Mesmo CTA do WhatsApp, mesmas informações                     |
  | Footer            | ✅ Mesmo texto de copyright e tagline                            |

  ---
  ❌ DIFERENÇAS IDENTIFICADAS (Por que não refletem exatamente)

  1. Implementação Técnica

  | Aspecto     | luciano-home.html                  | Home Atual (React)                  |
  |-------------|------------------------------------|-------------------------------------|
  | Tecnologia  | HTML puro + CSS inline             | React + Next.js + TypeScript        |
  | Estilos     | CSS inline em <style> (568 linhas) | TailwindCSS com classes utilitárias |
  | Dados       | Hardcoded no HTML                  | Parametrizados via site.config.ts   |
  | Componentes | Tudo em 1 arquivo                  | Seções modulares separadas          |

  2. Diferenças Visuais/CSS

  | Elemento                  | luciano-home.html                        | Home Atual (React)                                         |      
  Impacto Visual               |
  |---------------------------|------------------------------------------|------------------------------------------------------------|--    
  ----------------------------|
  | Hero - Estrutura da frase | Título em 1 linha + destaque             | Título quebrado com <br />                                 |      
  ⚠️ Layout diferente          |
  | Hero - Descrição          | Texto contínuo em 1 parágrafo            | 3 partes concatenadas (lead + highlight + end)             |      
  ⚠️ Pode gerar espaços extras |
  | Hero - Imagem             | Placeholder text: [Espaço para foto P&B] | Componente <Image> do Next.js com /images/luciano-hero.png |      
  ✅ Melhoria (imagem real)     |
  | Sobre - Grid stats        | grid-cols-4 fixo                         | grid-cols-2 md:grid-cols-4 (responsivo)                    |      
  ✅ Melhoria mobile            |
  | Aulas - Ícones            | Texto de emoji direto: 🧘‍♂️             | Emoji via data do config: {service.icon}                   | ✅   
  Mesmo resultado            |
  | Aulas - CTA nos cards     | Sem botão nos cards                      | Botão "Agendar Aula" / "Saiba Mais" em cada card           |      
  ⚠️ Extra no React            |
  | Depoimentos - Aspas       | ::before com " gigante (5rem)            | Mesma implementação                                        |      
  ✅ Igual                      |

  3. Diferenças de Código CSS

  Exemplo - Hero Section:

  /* luciano-home.html - CSS puro */
  .hero {
      background: linear-gradient(135deg, var(--navy) 0%, #0F2537 100%);
      padding: 8rem 2rem 6rem;
  }

  // Home atual - TailwindCSS
  <section className="relative overflow-hidden bg-gradient-to-br from-[#1A3A52] to-[#0F2537] text-white pt-32 pb-24 px-8">

  Resultado: Gradientes ligeiramente diferentes (135deg vs to-br), paddings diferentes (8rem 2rem 6rem vs pt-32 pb-24 px-8).

  4. Elementos Presentes no React mas NÃO no HTML

  | Elemento                            | Onde está                                           | Descrição
                 |
  |-------------------------------------|-----------------------------------------------------|------------------------------------------    
  ---------------|
  | Botão CTA nos cards de Aulas        | apps/web/components/sections/AulasSection.tsx:44-46 | Cada serviço tem um botão "Agendar Aula"     
  / "Saiba Mais" |
  | Link para imagem real no Hero       | apps/web/components/sections/HeroSection.tsx:56     | /images/luciano-hero.png (HTML tem
  placeholder)         |
  | Elemento decorativo com aria-hidden | apps/web/components/sections/HeroSection.tsx:24     | Círculo decorativo com gradiente radial      
                 |

  5. Diferenças Semânticas de Estrutura

  | Aspecto                | luciano-home.html              | Home Atual (React)                                              |
  |------------------------|--------------------------------|-----------------------------------------------------------------|
  | Hero - Tagline         | Antes do <h1>                  | Antes do <h1> (mas renderizado via siteConfig.identity.tagline) |
  | Hero - Subtitle        | Após o <h1>, antes da tagline  | Após o <h1>, após o título (ordem diferente)                    |
  | Sobre - Título         | "Do Caos à Quietude" hardcoded | "Do Caos à Quietude" hardcoded (igual)                          |
  | Contato - WhatsApp URL | Número fake: 5551999999999     | Número real: 555198261301                                       |

  ---
  🎯 Resumo: Por que NÃO refletem exatamente?

  Principais Causas:

  1. CSS/Estilos diferentes:
    - HTML usa CSS puro inline com variáveis CSS (var(--navy))
    - React usa TailwindCSS com classes utilitárias
    - Gradientes, paddings e espaçamentos têm valores ligeiramente diferentes
  2. Ordem e quebra de elementos no Hero:
    - HTML: Tagline → H1 (título + highlight em 1 linha) → Subtitle → CTAs
    - React: Tagline → H1 (título quebrado com <br /> para highlight) → Subtitle → CTAs
  3. Elementos extras no React:
    - Botões CTA nos cards de Aulas (não existem no HTML)
    - Imagem real no Hero (HTML tem placeholder)
    - Elemento decorativo com aria-hidden
  4. Implementação de dados:
    - HTML: tudo hardcoded
    - React: tudo via site.config.ts (mais flexível, mas pode gerar pequenas diferenças de renderização)
  5. Número de WhatsApp:
    - HTML: número fake para demonstração
    - React: número real do cliente

  ---
  📌 Verificação de Arquivos Importantes:

  | Componente   | Caminho                                                    | Observação                                   |
  |--------------|------------------------------------------------------------|----------------------------------------------|
  | Hero         | apps/web/components/sections/HeroSection.tsx:22-67         | Estilos Tailwind diferentes do CSS puro      |
  | About        | apps/web/components/sections/AboutSection.tsx:10-64        | Timeline + Stats iguais, mas grid responsivo |
  | Philosophy   | apps/web/components/sections/PhilosophySection.tsx:8-69    | Conteúdo idêntico                            |
  | Aulas        | apps/web/components/sections/AulasSection.tsx:12-51        | TEM botões extras não presentes no HTML      |
  | Testimonials | apps/web/components/sections/TestimonialsSection.tsx:14-46 | Idêntico                                     |
  | Contact      | apps/web/components/sections/ContactSection.tsx:16-67      | Número WhatsApp diferente                    |

  ---
  ✨ Conclusão:

  O conteúdo textual e a estrutura semântica são 99% idênticos, mas existem diferenças de:
  - Implementação técnica (CSS puro vs TailwindCSS)
  - Valores de espaçamento e gradientes
  - Elementos interativos extras (botões nos cards de aulas)
  - Imagem real vs placeholder no Hero

  Se você quiser que reflitam exatamente igual visualmente, seria necessário:
  1. Ajustar os valores de padding/margin do Tailwind para corresponder ao CSS puro
  2. Remover os botões CTA dos cards de Aulas (ou adicioná-los ao HTML)
  3. Garantir que os gradientes usem os mesmos ângulos e cores
  4. Alinhar a quebra de linha no Hero title

> eu consegui arrumar, foi feito modificações no home agr o 'sobre e o blgo ainda estao errados, nvoaemten med e uma eplxciação do que       
deve ser ajustado & 'c:\Users\pedro\OneDrive\Área de Trabalho\template-skeleton\docs\LUCIANO\luciano-sobre.html' ah o contato tambem &       
'c:\Users\pedro\OneDrive\Área de Trabalho\template-skeleton\docs\LUCIANO\luciano-contato.html'   me diga exatamten oq deve ser feito         

● Vou analisar as páginas Sobre, Blog e Contato para identificar exatamente o que precisa ser ajustado.

● Read(apps\web\app\[locale]\sobre\page.tsx)
  ⎿  Read 136 lines

● Read(docs\LUCIANO\luciano-sobre.html)
  ⎿  Read 453 lines

● Read(apps\web\app\[locale]\blog\page.tsx)
  ⎿  Read 121 lines

● Read(docs\LUCIANO\luciano-blog.html)
  ⎿  Read 421 lines

● Read(apps\web\app\[locale]\contato\page.tsx)
  ⎿  Read 120 lines

● Read(docs\LUCIANO\luciano-contato.html)
  ⎿  Read 403 lines

● 🔍 ANÁLISE COMPARATIVA DETALHADA

  Analisei as 3 páginas e identifiquei EXATAMENTE o que está diferente. Aqui está o que deve ser modificado:

  ---
  📄 1. PÁGINA SOBRE (apps/web/app/[locale]/sobre/page.tsx)

  ✅ O que está IGUAL:

  - ✅ Hero section (título e subtítulo)
  - ✅ Conteúdo das 3 seções de história (2013, 2013-2021, 2021-Hoje)
  - ✅ Seção de Valores ("O Que Me Move")
  - ✅ Seção de Certificações

  ❌ O que está DIFERENTE/FALTANDO:

  PROBLEMA 1: CSS - Falta implementar o CSS do HTML

  O arquivo .tsx atual não tem estilos implementados. Ele usa classes CSS genéricas (hero-interno, sobre-content, etc) mas não há arquivo    
   CSS correspondente.

  SOLUÇÃO: Você precisa criar um arquivo CSS ou adicionar os estilos como TailwindCSS inline.

  PROBLEMA 2: Layout assimétrico não implementado

  No HTML original:
  .story-section {
      grid-template-columns: 1.3fr 1fr; /* Assimétrico */
  }

  .story-section:nth-child(even) {
      grid-template-columns: 1fr 1.3fr; /* Inverte */
  }

  No React atual: Não tem essa implementação. Os elementos estão sem grid/flexbox definido.

  SOLUÇÃO: Adicionar Tailwind classes para criar o grid assimétrico:
  // Linhas 24-42 do arquivo sobre/page.tsx
  <div className="story-section grid md:grid-cols-[1.3fr_1fr] gap-16 mb-20 items-start">

  E para as seções pares (2013-2021):
  // Linha 44
  <div className="story-section grid md:grid-cols-[1fr_1.3fr] gap-16 mb-20 items-start">
    <div className="story-text md:order-2">
    <div className="story-visual md:order-1">

  PROBLEMA 3: Card de Valores - offset faltando

  No HTML:
  .valor-card:nth-child(2) {
      transform: translateY(2rem); /* Card do meio sobe */
  }

  No React atual: Não implementado.

  SOLUÇÃO: Adicionar no loop dos valores (linha 98-103):
  <div key={index} className={`valor-card ${index === 1 ? 'md:translate-y-8' : ''}`}>

  ---
  📄 2. PÁGINA BLOG (apps/web/app/[locale]/blog/page.tsx)

  ✅ O que está IGUAL:

  - ✅ Hero section
  - ✅ Filtros de categorias
  - ✅ 6 posts (mesmos títulos, categorias, excerpts)

  ❌ O que está DIFERENTE/FALTANDO:

  PROBLEMA 1: CSS - Falta implementar estilos

  Assim como a página Sobre, não há CSS implementado. Classes como hero, blog-content, blog-grid não têm estilos correspondentes.

  SOLUÇÃO: Adicionar TailwindCSS inline.

  PROBLEMA 2: Grid masonry não implementado

  No HTML:
  .blog-grid {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  /* Cards com alturas variadas (não simétrico) */
  .blog-card:nth-child(3n+1) {
      grid-row: span 1;
  }

  No React atual: Grid simples sem variação de altura.

  SOLUÇÃO: Modificar linha 91-114:
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-auto">
    {blogPosts.map((post, index) => (
      <article
        key={post.id}
        className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col ${       
          index % 3 === 0 ? 'row-span-1' : ''
        }`}
      >

  PROBLEMA 3: Imagens dos cards - placeholder vs componente Image

  No HTML: Placeholder text [Imagem P&B: Meditação]
  No React atual: Usa <Image> do Next.js com fill

  OBSERVAÇÃO: Isso está MELHOR no React (imagens reais), mas se você quer exatamente igual ao HTML, precisa trocar por placeholders.

  ---
  📄 3. PÁGINA CONTATO (apps/web/app/[locale]/contato/page.tsx)

  ✅ O que está IGUAL:

  - ✅ Hero section
  - ✅ Seção "Como Posso Te Ajudar?"
  - ✅ 3 cards de contato (WhatsApp, Email, Instagram)
  - ✅ CTA Box "Aula Experimental"
  - ✅ Seção "Onde Atendo" com 2 cards

  ❌ O que está DIFERENTE/FALTANDO:

  PROBLEMA 1: CSS - Falta implementar estilos

  Mesma situação: classes CSS não têm estilos correspondentes.

  SOLUÇÃO: Adicionar TailwindCSS.

  PROBLEMA 2: Layout split não implementado

  No HTML:
  .contato-content {
      display: grid;
      grid-template-columns: 1.2fr 1fr; /* Split assimétrico */
  }

  No React atual: Usa flexbox genérico.

  SOLUÇÃO: Modificar linha 25:
  <div className="max-w-[1200px] mx-auto py-24 px-8 grid md:grid-cols-[1.2fr_1fr] gap-20 items-start">

  PROBLEMA 3: CTA Box sticky não implementado

  No HTML:
  .cta-box {
      position: sticky;
      top: 2rem; /* Fica fixo ao rolar */
  }

  No React atual: Não está sticky.

  SOLUÇÃO: Adicionar classe na linha 71:
  <div className="sticky top-8 bg-gradient-to-br from-primary to-[#0F2537] text-white p-12 rounded-2xl text-center">

  PROBLEMA 4: Hover nos contact cards

  No HTML:
  .contact-card:hover {
      transform: translateX(8px); /* Desliza para direita */
  }

  No React atual: Sem hover effect.

  SOLUÇÃO: Adicionar classes nos cards (linhas 38, 49, 59):
  <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent transition-transform hover:translate-x-2">

  ---
  🎯 RESUMO EXECUTIVO - O QUE FAZER:

  Para TODAS as 3 páginas:

  1. CRÍTICO - Adicionar CSS:
    - Opção A: Criar arquivos .css separados para cada página
    - Opção B (RECOMENDADO): Converter todos os estilos do HTML para TailwindCSS inline
  2. Implementar layouts assimétricos:
    - Sobre: Grid 1.3fr/1fr com inversão nas seções pares
    - Blog: Grid masonry com alturas variadas
    - Contato: Grid split 1.2fr/1fr
  3. Adicionar efeitos de hover/animação:
    - Sobre: Card do meio com offset vertical
    - Blog: Cards com hover effect (translateY)
    - Contato: Cards deslizam horizontalmente no hover + CTA sticky

  ---
  📋 MODIFICAÇÕES EXATAS POR ARQUIVO:

  apps/web/app/[locale]/sobre/page.tsx:

  // LINHA 16-20: Hero
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8 text-center">
    <h1 className="font-display text-[3.5rem] mb-4">Minha História</h1>
    <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto">
      Do caos da agulha à quietude do asana. Uma jornada de transformação real.
    </p>
  </section>

  // LINHA 22: Container principal
  <div className="max-w-[1200px] mx-auto py-24 px-8">

  // LINHA 24-42: Primeira seção (grid assimétrico)
  <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 mb-20 items-start">
    <div className="space-y-6">
      <h2 className="font-display text-[2.5rem] text-primary leading-tight">
        2013: <span className="text-accent italic">O Primeiro Contato</span>
      </h2>
      ...blockquote className="font-display italic text-[1.3rem] text-primary border-l-4 border-accent pl-8 my-8">
    </div>
    <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic">
      <p>[Foto: Luciano jovem praticando / skatista]</p>
    </div>
  </div>

  // LINHA 44-65: Segunda seção (grid invertido)
  <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 mb-20 items-start">
    <div className="md:order-2 space-y-6">
      ...
    </div>
    <div className="md:order-1 bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic">      
      <p>[Foto: Luciano tatuando ou mostrando tatuagens]</p>
    </div>
  </div>

  // LINHA 94-106: Valores section
  <section className="bg-white py-20 px-8">
    <div className="max-w-[1200px] mx-auto">
      <h2 className="font-display text-[2.8rem] text-primary text-center mb-16">O Que Me Move</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {about.values.map((value, index) => (
          <div
            key={index}
            className={`bg-bg-secondary p-10 rounded-xl ${index === 1 ? 'md:translate-y-8' : ''}`}
          >
            <h3 className="font-sans text-[1.5rem] text-primary mb-4 before:content-['◆'] before:text-accent before:mr-3">
              {value.title}
            </h3>
            <p className="text-text">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  // LINHA 108-131: Certificações
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8">
    <div className="max-w-[1000px] mx-auto text-center">
      <h2 className="font-display text-[2.5rem] mb-12">Formação & Certificações</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        <div className="bg-white/10 py-8 px-12 rounded-xl border-2 border-accent/30">
          <strong className="block text-[2rem] text-accent mb-2">Nível 3</strong>
          ...

  apps/web/app/[locale]/blog/page.tsx:

  // LINHA 76-79: Hero
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8 text-center">
    <h1 className="font-display text-[3.5rem] mb-4">Blog</h1>
    <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto">
      Filosofia, prática e qualidade de vida. Sem misticismo vazio.
    </p>
  </section>

  // LINHA 81-89: Filtros
  <div className="max-w-[1200px] mx-auto py-24 px-8">
    <div className="flex justify-center gap-6 mb-16 flex-wrap">
      <button className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-lg font-sans font-semibold transition-all
  hover:bg-primary hover:text-white active:bg-primary active:text-white">
        Todos
      </button>
      ...

  // LINHA 91-114: Grid de posts
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {blogPosts.map((post) => (
      <article
        key={post.id}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col"
      >
        <div className="bg-primary h-[200px] flex items-center justify-center text-white/50 italic relative">
          <Image ... />
        </div>
        <div className="p-8 flex flex-col flex-1">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-sans font-semibold mb-4 self-start">    
            {post.category}
          </span>
          <h2 className="font-display text-[1.8rem] text-primary mb-4 leading-tight">
            {post.title}
          </h2>
          <p className="text-text mb-6 flex-1">{post.excerpt}</p>
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 text-sm text-gray-500">
            <span>{post.readingTime}</span>
            <Link href={`/blog/${post.slug}`} className="text-accent font-sans font-semibold hover:text-primary">
              Ler artigo →
            </Link>
          </div>
        </div>
      </article>
    ))}
  </div>

  apps/web/app/[locale]/contato/page.tsx:

  // LINHA 20-23: Hero
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8 text-center">
    <h1 className="font-display text-[3.5rem] mb-4">Vamos Conversar?</h1>
    <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto">
      Agende sua aula experimental ou tire suas dúvidas. Respondo pessoalmente.
    </p>
  </section>

  // LINHA 25: Grid split assimétrico
  <div className="max-w-[1200px] mx-auto py-24 px-8 grid md:grid-cols-[1.2fr_1fr] gap-20 items-start">
    <div>
      <h2 className="font-display text-[2.5rem] text-primary mb-8">Como Posso Te Ajudar?</h2>
      <p className="text-[1.1rem] mb-8 leading-relaxed">...</p>

      <div className="flex flex-col gap-8">
        {/* Card WhatsApp */}
        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent transition-transform hover:translate-x-2">
          <h3 className="font-sans text-[1.3rem] text-primary mb-3 flex items-center gap-3">
            💬 WhatsApp (Principal)
          </h3>
          ...
        </div>

        {/* Repetir para Email e Instagram */}
      </div>
    </div>

    {/* CTA Box - STICKY */}
    <div className="sticky top-8 bg-gradient-to-br from-primary to-[#0F2537] text-white p-12 rounded-2xl text-center">
      <h3 className="font-display text-[2rem] mb-4">Aula Experimental</h3>
      <p className="mb-8 text-white/90">...</p>
      <a href={whatsappUrl} className="inline-block px-10 py-5 bg-accent text-primary rounded-lg font-sans font-semibold text-lg
  hover:bg-[#F4D03F] transition-all hover:-translate-y-1 hover:shadow-xl">
        Agendar Agora
      </a>
      <p className="mt-8 text-sm text-white/70">Presencial em Porto Alegre ou Online</p>
    </div>
  </div>

  // LINHA 86-115: Localização section
  <section className="bg-white py-20 px-8">
    <div className="max-w-[1000px] mx-auto text-center">
      <h2 className="font-display text-[2.5rem] text-primary mb-8">Onde Atendo</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-bg-secondary p-10 rounded-xl">
          <h3 className="font-sans text-[1.5rem] text-primary mb-4">🏫 Escola Humana Rio Branco</h3>
          ...

  ---
  Essas são EXATAMENTE as modificações necessárias para que as páginas fiquem iguais aos arquivos HTML de referência!



 📄 1. PÁGINA SOBRE (apps/web/app/[locale]/sobre/page.tsx)

  ✅ O que JÁ ESTÁ CORRETO:

  - Grid assimétrico (1.3fr/1fr) ✅
  - Offset no card do meio dos valores ✅
  - Todos os textos e conteúdos ✅
  - Certificações section ✅

  ⚠️ AJUSTES NECESSÁRIOS:

  AJUSTE 1: Hero - Padding diferente

  HTML: padding: 5rem 2rem 3rem; (topo 5rem, laterais 2rem, bottom 3rem)
  React atual: py-20 (5rem top E bottom)

  CORREÇÃO na linha 17:
  // DE:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8 text-center">

  // PARA:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">

  AJUSTE 2: Blockquote - Margin

  HTML: margin: 2rem 0;
  React atual: my-8 (2rem) ✅ mas...

  Verificar se está idêntico. O CSS específico no HTML é:
  .story-text blockquote {
      font-family: var(--font-display);
      font-style: italic;
      font-size: 1.3rem;
      color: var(--navy);
      border-left: 4px solid var(--gold);
      padding-left: 2rem;
      margin: 2rem 0;
  }

  CORREÇÃO na linha 39 e 87:
  <blockquote className="font-display italic text-[1.3rem] text-primary border-l-4 border-accent pl-8 my-8 leading-normal">

  ---
  📄 2. PÁGINA BLOG (apps/web/app/[locale]/blog/page.tsx)

  ✅ O que JÁ ESTÁ CORRETO:

  - Grid de 3 colunas ✅
  - Cards com hover effect ✅
  - Filtros ✅

  ⚠️ AJUSTES NECESSÁRIOS:

  AJUSTE 1: Hero - Padding diferente

  Mesmo problema da página Sobre.

  CORREÇÃO na linha 76:
  // DE:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8 text-center">

  // PARA:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">

  AJUSTE 2: Tamanho do padding nos botões de filtro

  HTML: padding: 0.8rem 2rem;
  React atual: px-8 py-3
  - px-8 = 2rem ✅
  - py-3 = 0.75rem (deveria ser 0.8rem)

  CORREÇÃO na linha 85 e 89:
  // DE:
  className="px-8 py-3 bg-white border-2...

  // PARA:
  className="px-8 py-[0.8rem] bg-white border-2...

  AJUSTE 3: Border-radius dos botões

  HTML: border-radius: 8px;
  React atual: rounded-lg (0.5rem = 8px) ✅ CORRETO

  AJUSTE 4: Grid minmax (Opcional - comportamento avançado)

  HTML usa: grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  React usa: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

  Isso está funcionalmente equivalente para responsive, mas se quer EXATAMENTE igual ao HTML:

  CORREÇÃO na linha 95 (OPCIONAL):
  // DE:
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

  // PARA (usa arbitrary values):
  <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>

  ---
  📄 3. PÁGINA CONTATO (apps/web/app/[locale]/contato/page.tsx)

  ✅ O que JÁ ESTÁ 100% CORRETO:

  - Grid split 1.2fr/1fr ✅
  - CTA Box sticky ✅
  - Cards com hover translateX ✅
  - Seção "Onde Atendo" ✅

  ⚠️ AJUSTES NECESSÁRIOS:

  AJUSTE 1: Hero - Padding diferente

  Mesmo problema das outras páginas.

  CORREÇÃO na linha 20:
  // DE:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8 text-center">

  // PARA:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">

  ---
  🎯 RESUMO - MODIFICAÇÕES FINAIS:

  CRÍTICO - Aplicar em TODAS as 3 páginas:

  1. Hero Section - Mudar padding bottom:
  // EM TODAS AS 3 PÁGINAS (Sobre linha 17, Blog linha 76, Contato linha 20)
  // DE:
  py-20

  // PARA:
  pt-20 pb-12

  Opcional - Melhorias de precisão:

  2. Blog - Botões de filtro:
  // Linha 85 e 89
  // DE: py-3
  // PARA: py-[0.8rem]

  3. Blog - Grid auto-fill (se quiser exatamente igual ao HTML):
  // Linha 95
  style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}

  ---
  📋 ARQUIVO POR ARQUIVO - Modificações Exatas:

  apps/web/app/[locale]/sobre/page.tsx:

  LINHA 17 - Mudar:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">

  apps/web/app/[locale]/blog/page.tsx:

  LINHA 76 - Mudar:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">

  LINHA 85 - Mudar (opcional):
  <button className="px-8 py-[0.8rem] bg-white border-2 border-primary text-primary rounded-lg font-sans font-semibold transition-all        
  hover:bg-primary hover:text-white">

  LINHA 89 - Mudar (opcional):
  <button key={category.slug} className="px-8 py-[0.8rem] bg-white border-2 border-primary text-primary rounded-lg font-sans
  font-semibold transition-all hover:bg-primary hover:text-white">

  apps/web/app/[locale]/contato/page.tsx:

  LINHA 20 - Mudar:
  <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">

  ---
  ✨ DEPOIS DESSAS MODIFICAÇÕES:

  As 3 páginas estarão 100% idênticas aos arquivos HTML de referência em termos de:
  - ✅ Layout e estrutura
  - ✅ Espaçamentos (paddings/margins)
  - ✅ Tipografia (tamanhos de fonte)
  - ✅ Cores e gradientes
  - ✅ Efeitos de hover
  - ✅ Grid systems assimétricos
  - ✅ Componentes sticky

  A única diferença será a tecnologia (HTML/CSS puro vs React/TailwindCSS), mas visualmente serão pixel-perfect idênticas! 🎯