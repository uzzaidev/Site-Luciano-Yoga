import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
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
      <section className="hero-interno">
        <h1>Minha História</h1>
        <p>Do caos da agulha à quietude do asana. Uma jornada de transformação real.</p>
      </section>

      <div className="sobre-content">
        {/* Seção 1: Adolescente */}
        <div className="story-section">
          <div className="story-text">
            <h2>2013: <span className="accent">O Primeiro Contato</span></h2>
            <p>
              Eu tinha 15 anos quando minha mãe insistiu para eu experimentar uma aula de Yôga.
              Confesso que fui sem muita empolgação. Mas na primeira aula, algo mudou.
            </p>
            <p>
              Senti mais energia, mais disposição. Meu rendimento no skate melhorou.
              Comecei a dormir melhor, a me sentir mais feliz no dia a dia.
            </p>
            <blockquote>
              "Foi quando percebi: isso funciona de verdade. Não é papo furado."
            </blockquote>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic relative overflow-hidden">
            <Image
              src="/images/luciano-sem-fundo-1.png"
              alt="Luciano jovem praticando"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* Seção 2: Tatuador */}
        <div className="story-section">
          <div className="story-text">
            <h2>2013-2021: <span className="accent">Tatuador & Praticante</span></h2>
            <p>
              Durante 8 anos, trabalhei como tatuador profissional. Meu estilo era oriental/japonês.
              Meu corpo inteiro virou uma tela. Arte, expressão, identidade.
            </p>
            <p>
              Mas enquanto tatuava, continuei praticando Yôga. A filosofia começou a fazer cada vez mais sentido.
              Samkhya, Tantra, a ideia de liberdade, de usar a mente como ferramenta, não como prisão.
            </p>
            <p>
              Chegou um momento em que tatuar já não fazia mais sentido. Eu queria transmitir o que estava
              vivendo:
              essa melhora na qualidade de vida, essa energia constante, essa clareza mental.
            </p>
          </div>
          <div className="story-visual">
            <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic relative overflow-hidden w-full h-full">
              <Image
                src="/images/luciano-3-sem-fundo.png"
                alt="Luciano tatuador"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        {/* Seção 3: Instrutor */}
        <div className="story-section">
          <div className="story-text">
            <h2>2021-Hoje: <span className="accent">Instrutor de Yôga</span></h2>
            <p>
              Em 2021, fiz a transição de carreira. Virei instrutor de Yôga.
              Hoje sou Nível 3 pela Humana, o nível mais alto de certificação.
            </p>
            <p>
              Ministro aulas particulares, em grupo, workshops de filosofia.
              Já atendi mais de 200 alunos, dei mais de 1000 práticas.
            </p>
            <blockquote>
              "Meu diferencial? Consigo transmitir filosofia complexa de forma acessível.
              Sem misticismo vazio. Para pessoas reais, com vidas reais."
            </blockquote>
            <p>
              Não sou um guru inalcançável. Sou alguém que já trilhou o caminho e agora ensina o mapa.
            </p>
          </div>
          <div className="story-visual">
            <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[300px] flex items-center justify-center text-gray-500 italic relative overflow-hidden w-full h-full">
              <Image
                src="/images/Luciano_2_sem_fundo.png"
                alt="Luciano instruindo / em asana"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <section className="valores">
        <div className="valores-container">
          <h2>O Que Me Move</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <h3>Autenticidade</h3>
              <p>
                Não finjo ser quem não sou. Sou tatuado, gosto de skate, tenho uma história real.
                Yôga não é sobre perfeição, é sobre transformação.
              </p>
            </div>

            <div className="valor-card">
              <h3>Filosofia Acessível</h3>
              <p>
                Samkhya e Tantra são profundos, mas não precisam ser complicados.
                Traduzo conceitos complexos para uma linguagem que faz sentido.
              </p>
            </div>

            <div className="valor-card">
              <h3>Liberdade</h3>
              <p>
                Yôga é sobre liberdade, não repressão. Sobre usar a mente como ferramenta,
                não ser dominado por ela. Sobre viver com energia e clareza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="certificacoes">
        <div className="certificacoes-container">
          <h2>Formação & Certificações</h2>
          <div className="cert-list">
            <div className="cert-item">
              <strong>Nível 3</strong>
              <p>Humana (Certificação Máxima)</p>
            </div>
            <div className="cert-item">
              <strong>13 anos</strong>
              <p>de Prática Contínua</p>
            </div>
            <div className="cert-item">
              <strong>+20 cursos</strong>
              <p>de Filosofia & Técnica</p>
            </div>
            <div className="cert-item">
              <strong>4 Prana Weekends</strong>
              <p>Retiros na Praia do Rosa</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

