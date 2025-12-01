# 📚 Índice do Template Skeleton

> **Navegação rápida:** Encontre tudo que precisa em segundos

---

## 🚀 INÍCIO RÁPIDO (5 minutos)

**Primeira vez aqui?** Siga esta ordem:

1. **[README.md](README.md)** (3 min)
   - O que é o skeleton
   - Visão geral
   - Estrutura básica

2. **[FILOSOFIA-SKELETON.md](FILOSOFIA-SKELETON.md)** (5 min)
   - Por que o skeleton existe
   - Diferença para template-universal
   - Quando usar cada um

3. **Pronto!** Agora escolha seu caminho abaixo ↓

---

## 📖 GUIAS POR OBJETIVO

### 🎯 "Quero Criar um Site para Cliente Novo"

**Caminho completo:** 4-6 horas de trabalho

```
1. COLETAR (1h)
   └─> DECISOES-CLIENTE.md - Checklist de reunião

2. CONFIGURAR (30min)
   └─> GUIA-USO-SKELETON.md - Seção "Fase 3"
   └─> Preencher site.config.ts

3. CUSTOMIZAR (2-3h)
   └─> GUIA-USO-SKELETON.md - Seção "Fase 4"
   └─> COMPONENTES-DISPONIVEIS.md - Componentes prontos

4. VALIDAR (1h)
   └─> GUIA-USO-SKELETON.md - Seção "Fase 5"

5. DEPLOY (30min)
   └─> GUIA-USO-SKELETON.md - Seção "Fase 6"
```

### 🧩 "Quero Ver Quais Componentes Estão Prontos"

```
└─> COMPONENTES-DISPONIVEIS.md
    ├─> Componentes primitivos (Button, Card, etc)
    ├─> Componentes especializados (FlipBox, ModernHero, etc)
    ├─> Seções de página (TeamSection, BlogListSection)
    └─> Utilitários e helpers
```

### 🤝 "Vou Ter Reunião com Cliente Amanhã"

```
└─> DECISOES-CLIENTE.md
    ├─> Imprima ou abra em tela secundária
    ├─> Siga os 13 blocos em ordem
    ├─> Marque ✅ conforme coleta
    └─> Envie email de follow-up (template incluído)
```

### ⚙️ "Preciso Configurar o Projeto"

```
└─> site.config.template.ts
    ├─> Copie para site.config.ts
    ├─> Preencha com dados do cliente
    ├─> Remova comentários //TODO
    └─> Use em componentes via import
```

### 🆘 "Estou com Dúvida sobre Como Usar"

```
└─> GUIA-USO-SKELETON.md
    ├─> Tutorial completo passo a passo
    ├─> 7 fases detalhadas
    ├─> Exemplos de código
    └─> Troubleshooting
```

---

## 📁 ESTRUTURA DE ARQUIVOS

### Documentação (Você está aqui)

```
template-skeleton/
├── README.md                      # 📖 Visão geral
├── INDEX.md                       # 📚 Este arquivo (índice)
├── FILOSOFIA-SKELETON.md          # 🎯 Por que o skeleton existe
├── GUIA-USO-SKELETON.md           # 📘 Tutorial completo (4-6h de trabalho)
├── DECISOES-CLIENTE.md            # 📋 Checklist de reunião
├── COMPONENTES-DISPONIVEIS.md     # 🧩 Catálogo de componentes
└── site.config.template.ts        # ⚙️ Template de configuração
```

### Configuração

```
template-skeleton/
├── package.json                   # Dependências raiz
├── pnpm-workspace.yaml            # Config monorepo
├── turbo.json                     # Config Turborepo
├── .gitignore                     # Arquivos ignorados
└── .env.example                   # Exemplo de variáveis de ambiente
```

### Código (A ser criado durante uso)

```
template-skeleton/
├── packages/                      # Componentes reutilizáveis
│   ├── ui/                       # Componentes visuais
│   ├── design-tokens/            # Sistema de cores/fontes
│   └── core/                     # Tipos TypeScript
│
└── apps/
    └── web/                      # App Next.js
        ├── app/                  # Rotas
        ├── components/           # Componentes específicos
        ├── lib/                  # Utilitários
        ├── public/               # Assets
        └── site.config.ts        # Configuração do cliente
```

---

## 🗺️ MAPA DE NAVEGAÇÃO

### Por Fase do Projeto

| Fase | O Que Fazer | Onde Está |
|------|-------------|-----------|
| **Preparação** | Entender skeleton | README.md, FILOSOFIA-SKELETON.md |
| **Reunião** | Coletar dados | DECISOES-CLIENTE.md |
| **Setup** | Copiar e configurar | GUIA-USO-SKELETON.md (Fase 1-2) |
| **Configuração** | Preencher dados | site.config.template.ts |
| **Desenvolvimento** | Montar páginas | COMPONENTES-DISPONIVEIS.md |
| **Customização** | Cores, logo, assets | GUIA-USO-SKELETON.md (Fase 4) |
| **Validação** | Testes, checklist | GUIA-USO-SKELETON.md (Fase 5) |
| **Deploy** | Publicar site | GUIA-USO-SKELETON.md (Fase 6) |
| **Entrega** | Documentar e entregar | GUIA-USO-SKELETON.md (Fase 7) |

### Por Tipo de Dúvida

| Dúvida | Resposta Em |
|--------|-------------|
| "O que é o skeleton?" | README.md |
| "Por que não usar template-universal direto?" | FILOSOFIA-SKELETON.md |
| "Como criar site de cliente?" | GUIA-USO-SKELETON.md |
| "O que perguntar ao cliente?" | DECISOES-CLIENTE.md |
| "Quais componentes posso usar?" | COMPONENTES-DISPONIVEIS.md |
| "Como centralizar dados?" | site.config.template.ts |
| "Diferença entre universal e skeleton?" | FILOSOFIA-SKELETON.md |

---

## ⏱️ ESTIMATIVAS DE TEMPO

### Leitura da Documentação

| Documento | Tempo | Quando Ler |
|-----------|-------|------------|
| README.md | 3 min | Sempre (overview) |
| FILOSOFIA-SKELETON.md | 5 min | Primeira vez |
| GUIA-USO-SKELETON.md | 15 min | Antes de iniciar projeto |
| DECISOES-CLIENTE.md | 10 min | Antes de reunião |
| COMPONENTES-DISPONIVEIS.md | 10 min | Durante desenvolvimento |
| site.config.template.ts | 5 min | Ao preencher config |

**Total:** ~50 minutos de leitura para dominar completamente

### Execução de Projeto

| Fase | Tempo | Documento |
|------|-------|-----------|
| Reunião com cliente | 1h | DECISOES-CLIENTE.md |
| Setup inicial | 30min | GUIA-USO-SKELETON.md |
| Configuração | 30min | site.config.template.ts |
| Customização visual | 2-3h | GUIA-USO-SKELETON.md |
| Validação | 1h | GUIA-USO-SKELETON.md |
| Deploy | 30min | GUIA-USO-SKELETON.md |

**Total:** 5-6 horas (vs 8-10h sem skeleton)

---

## 🎓 TRILHA DE APRENDIZADO

### Nível 1: Iniciante (Dia 1)

```
1. ✅ Ler README.md
2. ✅ Ler FILOSOFIA-SKELETON.md
3. ✅ Explorar COMPONENTES-DISPONIVEIS.md
4. ✅ Rodar `pnpm dev` para ver estrutura
```

### Nível 2: Intermediário (Dia 2-3)

```
1. ✅ Ler GUIA-USO-SKELETON.md completamente
2. ✅ Preencher site.config.template.ts de exemplo
3. ✅ Testar componentes individuais
4. ✅ Criar página de teste
```

### Nível 3: Avançado (Semana 1)

```
1. ✅ Completar projeto de cliente real
2. ✅ Usar DECISOES-CLIENTE.md em reunião
3. ✅ Deploy completo
4. ✅ Documentar customizações
```

### Nível 4: Expert (Mês 1)

```
1. ✅ Entregar 3+ projetos usando skeleton
2. ✅ Contribuir melhorias
3. ✅ Criar componentes novos parametrizáveis
4. ✅ Otimizar workflow pessoal
```

---

## 🔗 LINKS EXTERNOS ÚTEIS

### Ferramentas Recomendadas

- **Otimização de Imagens:** https://squoosh.app/
- **Gerador de Favicon:** https://realfavicongenerator.net/
- **Paletas de Cores:** https://coolors.co/
- **Contraste de Cores:** https://webaim.org/resources/contrastchecker/
- **Google Fonts:** https://fonts.google.com/

### Documentação Oficial

- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Radix UI:** https://www.radix-ui.com/

---

## 📞 SUPORTE E COMUNIDADE

### Problemas Comuns

**Consulte primeiro:**
1. GUIA-USO-SKELETON.md (seção "Problemas Comuns")
2. template-universal/docs/06-REFERENCIA/03-TROUBLESHOOTING.md

### Contribuir

Encontrou bug ou tem sugestão?
1. Documente o problema
2. Sugira solução (se souber)
3. Compartilhe com a equipe

---

## ✅ CHECKLIST RÁPIDO

### Antes de Iniciar Novo Projeto

- [ ] Li README.md
- [ ] Entendi diferença universal vs skeleton
- [ ] Tenho DECISOES-CLIENTE.md impresso/aberto
- [ ] Agendei reunião com cliente
- [ ] Criei pasta ~/Clientes/[NomeCliente]/

### Durante Desenvolvimento

- [ ] Copiei skeleton para novo projeto
- [ ] Preenchi site.config.ts
- [ ] Configurei .env.local
- [ ] Adicionei assets otimizados
- [ ] Testei em mobile/tablet/desktop
- [ ] Build local passou

### Antes de Entregar

- [ ] Validei todos os links
- [ ] Confirmei contatos corretos
- [ ] Lighthouse score > 85
- [ ] Criei documentação de handoff
- [ ] Cliente aprovou

---

## 🎯 RESUMO DE 30 SEGUNDOS

```
template-skeleton = Base universal para novos sites

PASSOS:
1. Reunião → DECISOES-CLIENTE.md
2. Copiar skeleton
3. Preencher site.config.ts
4. Adicionar assets
5. Customizar cores
6. Build & Deploy

TEMPO: 4-6 horas (vs 8-10h sem skeleton)

RESULTADO: Site profissional, sem dados esquecidos
```

---

## 🚀 PRÓXIMOS PASSOS

**Escolha seu caminho:**

### → Se é sua primeira vez
Leia: README.md → FILOSOFIA-SKELETON.md

### → Se vai criar site de cliente
Leia: GUIA-USO-SKELETON.md

### → Se vai ter reunião com cliente
Leia: DECISOES-CLIENTE.md

### → Se está desenvolvendo agora
Consulte: COMPONENTES-DISPONIVEIS.md

---

**Boa sorte com seu projeto!** 🎉

Se tiver dúvidas, revise a documentação ou consulte template-universal para referências.
