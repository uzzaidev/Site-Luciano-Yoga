import { unstable_setRequestLocale } from 'next-intl/server';
import { siteConfig } from '@/site.config';
import { ContactForm } from '@/components/ContactForm';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ContatoPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const contact = siteConfig.contact;
  const whatsappUrl = `https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent(contact.phone.whatsappMessage)}`;

  return (
    <>
      <section className="hero-interno">
        <h1>Vamos Conversar?</h1>
        <p>Agende sua aula experimental ou tire suas dúvidas. Respondo pessoalmente.</p>
      </section>

      <div className="contato-content">
        <div className="contato-info">
          <h2>Como Posso Te Ajudar?</h2>
          <p>
            Se você está buscando mais energia, clareza mental, ou simplesmente quer entender
            como o Yôga pode transformar sua qualidade de vida, estou aqui para conversar.
          </p>
          <p>
            Atendo em Porto Alegre (presencial) e online. Aulas particulares, em grupo,
            ou workshops de filosofia. Escolha o formato que funciona para você.
          </p>

          <div className="contact-methods">
            <div className="contact-card">
              <h3>💬 WhatsApp (Principal)</h3>
              <p>
                Essa é a forma mais rápida de falar comigo.
                Respondo pessoalmente, sem robôs.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Abrir WhatsApp →
              </a>
            </div>

            <div className="contact-card">
              <h3>📧 E-mail</h3>
              <p>
                Para propostas de parcerias, Yôga corporativo ou dúvidas mais detalhadas.
              </p>
              <a href={`mailto:${contact.email.primary}`}>
                {contact.email.primary}
              </a>
            </div>

            <div className="contact-card">
              <h3>📱 Instagram</h3>
              <p>
                Acompanhe dicas de prática, filosofia e bastidores das aulas.
              </p>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                @lucianogiorgetta →
              </a>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h3>Aula Experimental</h3>
          <p>
            Experimente uma aula sem compromisso.
            Vamos conversar sobre seus objetivos e ver se faz sentido para você.
          </p>
          <a href={whatsappUrl} className="btn btn-primary">
            Agendar Agora
          </a>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Presencial em Porto Alegre ou Online
          </p>
        </div>
      </div>

      <section className="localizacao">
        <div className="localizacao-container">
          <h2>Onde Atendo</h2>
          <div className="local-grid">
            <div className="local-card">
              <h3>🏫 Escola Umana Rio Branco</h3>
              <p>
                <strong>Endereço:</strong> Rua Ramiro Barcelos, 1800<br />
                Porto Alegre, RS
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Horários:</strong> Segunda a Sexta<br />
                (Consultar horários disponíveis)
              </p>
            </div>

            <div className="local-card">
              <h3>🏠 Aulas Particulares</h3>
              <p>
                <strong>Presencial:</strong> Vou até você em Porto Alegre<br />
                (Bairros: Moinhos, Bom Fim, Petrópolis, etc.)
              </p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Online:</strong> De qualquer lugar<br />
                (Zoom, Google Meet)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F2537] mb-4">
              Envie Sua Mensagem
            </h2>
            <p className="text-gray-600">
              Preencha o formulário abaixo e entrarei em contato em breve.
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

