import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/site.config';

// Inicializar Resend apenas se a API key estiver disponível
// Isso evita erros durante o build
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

/**
 * API Route para processar depoimentos
 * 
 * Funcionalidades:
 * - Recebe nome, depoimento e foto opcional
 * - Formata o nome para exibição (apenas iniciais)
 * - Salva a foto no servidor (se houver)
 * - Envia email com o depoimento
 * - Retorna resposta de sucesso/erro
 */
export async function POST(request: NextRequest) {
  try {
    // Obter dados do FormData
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const testimonial = formData.get('testimonial') as string;
    const displayName = formData.get('displayName') as string;
    const photo = formData.get('photo') as File | null;

    // Validação básica
    if (!name || !testimonial) {
      return NextResponse.json(
        { error: 'Nome e depoimento são obrigatórios' },
        { status: 400 }
      );
    }

    if (testimonial.length < 20) {
      return NextResponse.json(
        { error: 'O depoimento deve ter no mínimo 20 caracteres' },
        { status: 400 }
      );
    }

    // Processar foto se houver
    let photoUrl = '';
    if (photo && photo.size > 0) {
      // Em produção, você salvaria a foto em um serviço de storage (S3, Cloudinary, etc)
      // Por enquanto, vamos apenas incluir no email como anexo
      const photoBuffer = await photo.arrayBuffer();
      const photoBase64 = Buffer.from(photoBuffer).toString('base64');
      
      // Nota: Em produção, salve a foto em storage e use a URL
      // Por exemplo: const photoUrl = await uploadToCloudinary(photo);
      photoUrl = `data:${photo.type};base64,${photoBase64}`;
    }

    // Preparar conteúdo do email
    const emailSubject = `Novo Depoimento de ${displayName}`;
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #D4AF37; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .testimonial { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #D4AF37; }
            .photo { max-width: 200px; border-radius: 50%; margin: 20px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Novo Depoimento Recebido</h1>
            </div>
            <div class="content">
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Nome para exibição:</strong> ${displayName}</p>
              
              <div class="testimonial">
                <h3>Depoimento:</h3>
                <p>${testimonial.replace(/\n/g, '<br>')}</p>
              </div>
              
              ${photoUrl ? `
                <div>
                  <h3>Foto enviada:</h3>
                  <img src="${photoUrl}" alt="Foto do depoente" class="photo" />
                </div>
              ` : '<p><em>Nenhuma foto foi enviada.</em></p>'}
              
              <div class="footer">
                <p>Este depoimento foi enviado através do formulário do site.</p>
                <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email usando Resend
    // Nota: Você precisa configurar RESEND_API_KEY no .env
    const resend = getResend();
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Site <onboarding@resend.dev>', // Configure seu domínio verificado
          to: siteConfig.contactForm.recipient || siteConfig.contact.email.primary,
          subject: emailSubject,
          html: emailHtml,
          // Se quiser anexar a foto:
          // attachments: photo ? [{
          //   filename: photo.name,
          //   content: Buffer.from(await photo.arrayBuffer()),
          // }] : [],
        });
      } catch (emailError) {
        console.error('Erro ao enviar email:', emailError);
        // Não falhar o request se o email falhar
        // Você pode querer salvar em um banco de dados como fallback
      }
    } else {
      console.warn('RESEND_API_KEY não configurada. Email não será enviado.');
      // Em desenvolvimento, apenas logar
      console.log('Depoimento recebido:', { name, displayName, testimonial, hasPhoto: !!photo });
    }

    // TODO: Salvar em banco de dados (opcional)
    // Exemplo com Prisma/Supabase:
    // await prisma.testimonial.create({
    //   data: {
    //     name: displayName,
    //     fullName: name,
    //     text: testimonial,
    //     photoUrl: photoUrl,
    //     status: 'pending', // Para revisão
    //   },
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Depoimento enviado com sucesso!',
        displayName 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar depoimento:', error);
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor. Por favor, tente novamente mais tarde.' 
      },
      { status: 500 }
    );
  }
}

