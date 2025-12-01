# 🎯 Template Skeleton - Base Reutilizável

> **Propósito:** Estrutura base universal para criar novos sites de clientes rapidamente

## 📖 O Que É Este Template?

Este é um **esqueleto minimalista** que contém APENAS componentes e estruturas **universalmente reutilizáveis**, sem nenhum dado específico da UZZAI ou de qualquer cliente.

### ✅ O Que ESTÁ Incluído

- Componentes 100% parametrizáveis (Button, Card, Input, etc.)
- Sistema de design tokens (estrutura de cores/fontes)
- Estrutura de pastas organizada
- Configurações TypeScript/Tailwind prontas
- Helpers e utilitários genéricos
- Documentação de uso

### ❌ O Que NÃO Está Incluído

- Dados hardcoded de qualquer empresa
- Conteúdo específico (textos, imagens)
- Decisões estratégicas (cores, serviços, estrutura de navegação)
- Integrações específicas

---

## 🚀 Como Usar

### 1. Copie Este Skeleton

```bash
# Crie pasta para novo cliente
cp -r template-skeleton ../novo-cliente-site

cd ../novo-cliente-site
```

### 2. Instale Dependências

```bash
pnpm install
```

### 3. Configure Dados do Cliente

Siga o arquivo **DECISOES-CLIENTE.md** para coletar informações.

### 4. Preencha Configuração

Edite **site.config.ts** com dados coletados.

### 5. Rode o Projeto

```bash
pnpm dev
```

---

## 📁 Estrutura

```
template-skeleton/
├── README.md                   # Este arquivo
├── GUIA-USO-SKELETON.md       # Guia detalhado de uso
├── DECISOES-CLIENTE.md        # Checklist do que coletar do cliente
│
├── packages/                   # Componentes reutilizáveis
│   ├── ui/                    # Componentes visuais 100% parametrizáveis
│   ├── design-tokens/         # Sistema de cores/fontes (estrutura)
│   └── core/                  # Tipos TypeScript genéricos
│
├── apps/
│   └── web/                   # App Next.js base
│       ├── app/               # Estrutura de rotas mínima
│       ├── components/        # Componentes específicos do app (vazios)
│       ├── lib/               # Utilitários genéricos
│       ├── public/            # Pasta de assets (estrutura vazia)
│       └── site.config.template.ts  # Template de configuração
│
└── docs/                      # Documentação copiada
    ├── COMO-USAR.md
    └── BOAS-PRATICAS.md
```

---

## 🎨 Filosofia do Skeleton

### Regra de Ouro
**"Se precisa de decisão do cliente, NÃO está no skeleton"**

### Exemplos

#### ✅ Incluído (Universal)
- `<Button variant="primary">` → Aceita qualquer variante
- Sistema de cores via CSS variables → Estrutura pronta, valores vazios
- Estrutura de pastas `public/images/` → Organização, sem imagens
- TypeScript config → Configurações genéricas

#### ❌ Não Incluído (Específico)
- Cores hardcoded (#1ABC9C) → Cliente define
- Textos de navegação → Cliente define
- Logo, imagens → Cliente fornece
- Número de serviços → Cliente decide

---

## 📚 Documentação

Leia na ordem:

1. **GUIA-USO-SKELETON.md** → Como transformar skeleton em site
2. **DECISOES-CLIENTE.md** → O que perguntar ao cliente
3. **docs/BOAS-PRATICAS.md** → Padrões de código

---

## 🔄 Atualizações

Este skeleton é atualizado conforme:
- Novos componentes 100% parametrizáveis são criados
- Melhorias em estrutura/organização
- Feedback de uso em projetos reais

**Versão:** 1.0.0
**Última atualização:** Janeiro 2025
