import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@template/ui';
import { siteConfig } from '@/site.config';

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
      <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">
        <h1 className="font-display text-[3.5rem] mb-4">Vamos Conversar?</h1>
        <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto">
          Agende sua aula experimental ou tire suas dúvidas. Respondo pessoalmente.
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto py-24 px-8 grid md:grid-cols-[1.2fr_1fr] gap-20 items-start">
        <div>
          <h2 className="font-display text-[2.5rem] text-primary mb-8">Como Posso Te Ajudar?</h2>
          <p className="text-[1.1rem] mb-8 leading-relaxed">
            Se você está buscando mais energia, clareza mental, ou simplesmente quer entender
            como o Yôga pode transformar sua qualidade de vida, estou aqui para conversar.
          </p>
          <p className="text-[1.1rem] mb-8 leading-relaxed">
            Atendo em Porto Alegre (presencial) e online. Aulas particulares, em grupo,
            ou workshops de filosofia. Escolha o formato que funciona para você.
          </p>

          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent transition-transform hover:translate-x-2">
              <h3 className="font-sans text-[1.3rem] text-primary mb-3 flex items-center gap-3">
                💬 WhatsApp (Principal)
              </h3>
              <p className="text-text-secondary mb-3">
                Essa é a forma mais rápida de falar comigo.
                Respondo pessoalmente, sem robôs.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                Abrir WhatsApp →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent transition-transform hover:translate-x-2">
              <h3 className="font-sans text-[1.3rem] text-primary mb-3 flex items-center gap-3">
                📧 E-mail
              </h3>
              <p className="text-text-secondary mb-3">
                Para propostas de parcerias, Yôga corporativo ou dúvidas mais detalhadas.
              </p>
              <a href={`mailto:${contact.email.primary}`} className="text-accent font-semibold hover:underline">
                {contact.email.primary}
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent transition-transform hover:translate-x-2">
              <h3 className="font-sans text-[1.3rem] text-primary mb-3 flex items-center gap-3">
                📱 Instagram
              </h3>
              <p className="text-text-secondary mb-3">
                Acompanhe dicas de prática, filosofia e bastidores das aulas.
              </p>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                @lucianogiorgetta →
              </a>
            </div>
          </div>
        </div>

        <div className="sticky top-8 bg-gradient-to-br from-primary to-[#0F2537] text-white p-12 rounded-2xl text-center">
          <h3 className="font-display text-[2rem] mb-4">Aula Experimental</h3>
          <p className="mb-8 text-white/90">
            Experimente uma aula sem compromisso.
            Vamos conversar sobre seus objetivos e ver se faz sentido para você.
          </p>
          <a href={whatsappUrl} className="inline-block px-10 py-5 bg-accent text-primary rounded-lg font-sans font-semibold text-lg hover:bg-[#F4D03F] transition-all hover:-translate-y-1 hover:shadow-xl">
            Agendar Agora
          </a>
          <p className="mt-8 text-sm text-white/70">
            Presencial em Porto Alegre ou Online
          </p>
        </div>
      </div>

      <section className="bg-white py-20 px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-display text-[2.5rem] text-primary mb-8">Onde Atendo</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-bg-secondary p-10 rounded-xl">
              <h3 className="font-sans text-[1.5rem] text-primary mb-4">🏫 Escola Humana Rio Branco</h3>
              <p className="text-text-secondary mb-4">
                <strong>Endereço:</strong> Rua Ramiro Barcelos, 1800<br />
                Porto Alegre, RS
              </p>
              <p className="text-text-secondary" style={{ marginTop: '1rem' }}>
                <strong>Horários:</strong> Segunda a Sexta<br />
                (Consultar horários disponíveis)
              </p>
            </div>

            <div className="bg-bg-secondary p-10 rounded-xl">
              <h3 className="font-sans text-[1.5rem] text-primary mb-4">🏠 Aulas Particulares</h3>
              <p className="text-text-secondary mb-4">
                <strong>Presencial:</strong> Vou até você em Porto Alegre<br />
                (Bairros: Moinhos, Bom Fim, Petrópolis, etc.)
              </p>
              <p className="text-text-secondary" style={{ marginTop: '1rem' }}>
                <strong>Online:</strong> De qualquer lugar<br />
                (Zoom, Google Meet)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

