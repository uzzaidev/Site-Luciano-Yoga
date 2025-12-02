# Guia de Uso - Sistema de Depoimentos

Este documento explica como usar o sistema de depoimentos com QR code implementado no site.

## 📋 Visão Geral

O sistema permite que pessoas escaneiem um QR code e sejam direcionadas para uma página escondida do site, onde podem deixar um depoimento sobre o Luciano. O depoimento é enviado por email e pode incluir uma foto opcional.

## 🎯 Funcionalidades

1. **Página Escondida**: `/depoimento` - não aparece em buscas (noindex)
2. **Formulário Completo**: Nome, depoimento e foto opcional
3. **Privacidade**: Nome exibido apenas com iniciais (ex: "Luciano G." ao invés de "Luciano Giorgetta")
4. **Upload de Foto**: Formato circular, estilo WhatsApp (opcional)
5. **Envio por Email**: Depoimentos são enviados para o email configurado
6. **QR Code**: Gerador de QR code para facilitar acesso

## 🚀 Como Usar

### 1. Acessar a Página de Depoimentos

A página está disponível em:
- **URL**: `https://seu-site.com/depoimento`
- **Local**: `apps/web/app/[locale]/depoimento/page.tsx`

### 2. Gerar o QR Code

Para gerar o QR code:

1. Acesse: `https://seu-site.com/admin/qrcode`
2. O QR code será gerado automaticamente
3. Você pode:
   - Salvar a imagem (botão direito → "Salvar imagem como...")
   - Imprimir a página
   - Usar em materiais físicos (cartões, flyers, etc.)

### 3. Configurar Email (Resend)

Para receber os depoimentos por email:

1. Crie uma conta no [Resend](https://resend.com)
2. Obtenha sua API key
3. Adicione no arquivo `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

4. Configure o domínio verificado no Resend (para usar seu próprio email como remetente)

**Nota**: Se não configurar o Resend, os depoimentos ainda serão processados, mas apenas logados no console (útil para desenvolvimento).

### 4. Personalizar Email de Destino

O email de destino está configurado em `apps/web/site.config.ts`:

```typescript
contactForm: {
  recipient: "luciano@giorgetta.com.br", // Altere aqui
  // ...
}
```

## 📝 Estrutura dos Arquivos

```
apps/web/
├── app/
│   ├── [locale]/
│   │   ├── depoimento/
│   │   │   └── page.tsx          # Página de depoimentos
│   │   └── admin/
│   │       └── qrcode/
│   │           └── page.tsx      # Página para gerar QR code
│   └── api/
│       └── testimonials/
│           └── route.ts         # API route para processar depoimentos
└── components/
    ├── TestimonialForm.tsx      # Componente do formulário
    └── QRCodeGenerator.tsx      # Componente gerador de QR code
```

## 🔧 Personalização

### Alterar Formato do Nome

O formato do nome está na função `formatNameForDisplay` em `TestimonialForm.tsx`:

```typescript
const formatNameForDisplay = (fullName: string): string => {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  
  const firstName = parts[0];
  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  return `${firstName} ${lastInitial}.`;
};
```

### Alterar Tamanho Máximo da Foto

No `TestimonialForm.tsx`, linha ~60:

```typescript
if (file.size > 5 * 1024 * 1024) { // 5MB
  // Altere o valor aqui
}
```

### Salvar Depoimentos em Banco de Dados

No arquivo `apps/web/app/api/testimonials/route.ts`, há um TODO comentado onde você pode adicionar código para salvar em banco de dados:

```typescript
// TODO: Salvar em banco de dados (opcional)
// await prisma.testimonial.create({
//   data: {
//     name: displayName,
//     fullName: name,
//     text: testimonial,
//     photoUrl: photoUrl,
//     status: 'pending',
//   },
// });
```

## 🧪 Testar o Sistema

1. **Testar o formulário**:
   - Acesse `/depoimento`
   - Preencha nome e depoimento
   - Teste upload de foto (opcional)
   - Envie o formulário

2. **Verificar email**:
   - Verifique se o email foi recebido (se Resend configurado)
   - Ou verifique o console do servidor (em desenvolvimento)

3. **Testar QR code**:
   - Acesse `/admin/qrcode`
   - Escaneie o QR code com seu celular
   - Deve direcionar para `/depoimento`

## 📱 Como Usar o QR Code

1. **Imprimir**: Imprima o QR code em cartões, flyers ou materiais promocionais
2. **Digital**: Compartilhe a imagem do QR code em redes sociais, email, etc.
3. **Físico**: Coloque em locais estratégicos (estúdio, eventos, etc.)

## 🔒 Segurança e Privacidade

- ✅ Página não indexada (noindex) - não aparece em buscas
- ✅ Nome exibido apenas com iniciais
- ✅ Validação de arquivos (apenas imagens, tamanho máximo)
- ✅ Validação de campos obrigatórios
- ✅ Tratamento de erros

## 🐛 Troubleshooting

### Email não está sendo enviado

1. Verifique se `RESEND_API_KEY` está configurada no `.env.local`
2. Verifique se o domínio está verificado no Resend
3. Verifique os logs do servidor para erros

### QR code não aparece

1. Verifique se a URL está correta
2. Verifique a conexão com a internet (usa API externa)
3. Tente recarregar a página

### Foto não está sendo enviada

1. Verifique o tamanho da foto (máx. 5MB)
2. Verifique o formato (apenas imagens: JPG, PNG, GIF)
3. Verifique os logs do console do navegador

## 📞 Suporte

Para dúvidas ou problemas, consulte:
- Documentação do Resend: https://resend.com/docs
- Documentação do Next.js: https://nextjs.org/docs

---

**Última atualização**: 2024

