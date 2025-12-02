# Como Resolver o 404 nas Páginas de Depoimento

## 🔍 Problema
As páginas `/pt/depoimento` e `/pt/admin/qrcode` estão retornando 404.

## ✅ Solução

### 1. Fazer Deploy no Vercel

As páginas foram criadas, mas o Vercel precisa fazer um novo build para reconhecê-las.

**Opção A: Deploy Automático (se estiver conectado ao GitHub)**
- Faça commit e push das alterações
- O Vercel fará deploy automaticamente

**Opção B: Deploy Manual**
1. Acesse o dashboard do Vercel
2. Vá em "Deployments"
3. Clique em "Redeploy" no último deployment
4. Ou faça um novo commit vazio para forçar rebuild

### 2. Verificar Build Local (Opcional)

Para testar localmente antes de fazer deploy:

```bash
cd apps/web
npm run build
npm run start
```

Depois acesse:
- `http://localhost:3000/pt/depoimento`
- `http://localhost:3000/pt/admin/qrcode`

### 3. Verificar Estrutura de Arquivos

Certifique-se de que os arquivos existem:

```
apps/web/app/[locale]/
├── depoimento/
│   └── page.tsx          ✅ Criado
└── admin/
    └── qrcode/
        └── page.tsx      ✅ Criado
```

### 4. Verificar Logs do Vercel

Se ainda der 404 após o deploy:

1. Acesse o dashboard do Vercel
2. Vá em "Deployments" → Selecione o deployment
3. Clique em "View Function Logs"
4. Procure por erros relacionados a:
   - `TestimonialForm`
   - `QRCodeGenerator`
   - `depoimento`
   - `qrcode`

## 🚀 Comandos Rápidos

```bash
# 1. Verificar se os arquivos existem
ls apps/web/app/\[locale\]/depoimento/page.tsx
ls apps/web/app/\[locale\]/admin/qrcode/page.tsx

# 2. Build local para testar
cd apps/web
npm run build

# 3. Se build passar, fazer commit
git add .
git commit -m "feat: adiciona páginas de depoimento e QR code"
git push
```

## 📝 Checklist

- [ ] Arquivos criados corretamente
- [ ] `generateStaticParams` adicionado nas páginas
- [ ] Componentes exportados corretamente
- [ ] Build local funciona
- [ ] Deploy no Vercel feito
- [ ] Páginas acessíveis após deploy

## 🔗 URLs Esperadas

Após o deploy, as URLs devem funcionar:

- **Depoimento**: `https://site-luciano-yoga-web.vercel.app/pt/depoimento`
- **QR Code**: `https://site-luciano-yoga-web.vercel.app/pt/admin/qrcode`

## ⚠️ Nota Importante

Se você fez alterações recentemente e ainda não fez commit/push, o Vercel não tem as novas páginas. Faça commit e push para que o Vercel faça o rebuild automático.

