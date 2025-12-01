import { unstable_setRequestLocale } from 'next-intl/server';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function SobrePage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const about = siteConfig.about;

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">
        <h1 className="font-display text-[3.5rem] mb-4">Minha História</h1>
        <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto">
          Do caos da agulha à quietude do asana. Uma jornada de transformação real.
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto py-24 px-8">
        {/* Seção 1: Adolescente */}
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 mb-20 items-start">
          <div className="space-y-6">
            <h2 className="font-display text-[2.5rem] text-primary leading-tight">
              2013: <span className="text-accent italic">O Primeiro Contato</span>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Eu tinha 15 anos quando minha mãe insistiu para eu experimentar uma aula de Yôga.
              Confesso que fui sem muita empolgação. Mas na primeira aula, algo mudou.
            </p>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Senti mais energia, mais disposição. Meu rendimento no skate melhorou.
              Comecei a dormir melhor, a me sentir mais feliz no dia a dia.
            </p>
            <blockquote className="font-display italic text-[1.3rem] text-primary border-l-4 border-accent pl-8 my-8 leading-normal">
              "Foi quando percebi: isso funciona de verdade. Não é papo furado."
            </blockquote>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic">
            <p>[Foto: Luciano jovem praticando / skatista]</p>
          </div>
        </div>

        {/* Seção 2: Tatuador */}
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 mb-20 items-start">
          <div className="md:order-2 space-y-6">
            <h2 className="font-display text-[2.5rem] text-primary leading-tight">
              2013-2021: <span className="text-accent italic">Tatuador & Praticante</span>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Durante 8 anos, trabalhei como tatuador profissional. Meu estilo era oriental/japonês.
              Meu corpo inteiro virou uma tela. Arte, expressão, identidade.
            </p>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Mas enquanto tatuava, continuei praticando Yôga. A filosofia começou a fazer cada vez mais sentido.
              Samkhya, Tantra, a ideia de liberdade, de usar a mente como ferramenta, não como prisão.
            </p>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Chegou um momento em que tatuar já não fazia mais sentido. Eu queria transmitir o que estava
              vivendo:
              essa melhora na qualidade de vida, essa energia constante, essa clareza mental.
            </p>
          </div>
          <div className="md:order-1 bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic">
            <p>[Foto: Luciano tatuando ou mostrando tatuagens]</p>
          </div>
        </div>

        {/* Seção 3: Instrutor */}
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 mb-20 items-start">
          <div className="space-y-6">
            <h2 className="font-display text-[2.5rem] text-primary leading-tight">
              2021-Hoje: <span className="text-accent italic">Instrutor de Yôga</span>
            </h2>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Em 2021, fiz a transição de carreira. Virei instrutor de Yôga.
              Hoje sou Nível 3 pela Humana, o nível mais alto de certificação.
            </p>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Ministro aulas particulares, em grupo, workshops de filosofia.
              Já atendi mais de 200 alunos, dei mais de 1000 práticas.
            </p>
            <blockquote className="font-display italic text-[1.3rem] text-primary border-l-4 border-accent pl-8 my-8 leading-normal">
              "Meu diferencial? Consigo transmitir filosofia complexa de forma acessível.
              Sem misticismo vazio. Para pessoas reais, com vidas reais."
            </blockquote>
            <p className="text-[1.1rem] leading-relaxed text-text-secondary">
              Não sou um guru inalcançável. Sou alguém que já trilhou o caminho e agora ensina o mapa.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic">
            <p>[Foto: Luciano instruindo / em asana]</p>
          </div>
        </div>
      </div>

      {/* Valores */}
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

      {/* Certificações */}
      <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white py-20 px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-display text-[2.5rem] mb-12">Formação & Certificações</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            <div className="bg-white/10 py-8 px-12 rounded-xl border-2 border-accent/30">
              <strong className="block text-[2rem] text-accent mb-2">Nível 3</strong>
              <p>Humana (Certificação Máxima)</p>
            </div>
            <div className="bg-white/10 py-8 px-12 rounded-xl border-2 border-accent/30">
              <strong className="block text-[2rem] text-accent mb-2">13 anos</strong>
              <p>de Prática Contínua</p>
            </div>
            <div className="bg-white/10 py-8 px-12 rounded-xl border-2 border-accent/30">
              <strong className="block text-[2rem] text-accent mb-2">+20 cursos</strong>
              <p>de Filosofia & Técnica</p>
            </div>
            <div className="bg-white/10 py-8 px-12 rounded-xl border-2 border-accent/30">
              <strong className="block text-[2rem] text-accent mb-2">4 Prana Weekends</strong>
              <p>Retiros na Praia do Rosa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

