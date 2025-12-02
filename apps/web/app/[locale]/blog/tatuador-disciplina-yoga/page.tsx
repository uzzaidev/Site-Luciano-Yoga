import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TatuadorDisciplinaYogaPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <div className="blog-post-meta">
          <Link href="/blog" className="blog-post-back">
            ← Voltar ao Blog
          </Link>
          <span className="blog-post-category">Qualidade de Vida</span>
          <h1>O Que Um Tatuador Aprendeu Sobre Disciplina no Yôga</h1>
          <p className="blog-post-reading-time">10 min de leitura</p>
        </div>
      </header>

      <div className="blog-post-image">
        <Image
          src="/images/blog/tatuagem+yoga.jpeg"
          alt="Tatuagem e Yôga - Disciplina e autoconhecimento"
          width={1200}
          height={600}
        />
      </div>

      <div className="blog-post-content">
        <p className="blog-post-lead">
          Minha jornada de 8 anos tatuando para 5 anos instruindo. O que mudou? Tudo. E nada.
        </p>

        <h2>Do Caos da Agulha à Quietude do Asana</h2>
        <p>
          Durante 8 anos, trabalhei como tatuador profissional, especializado em estilo
          oriental/japonês. Meu corpo inteiro virou uma tela. Arte, expressão, identidade.
          Mas também: longas horas em pé, tensão no pescoço, estresse constante.
        </p>
        <p>
          Enquanto tatuava, continuei praticando Yôga. A filosofia começou a fazer cada
          vez mais sentido. Samkhya, Tantra, a ideia de liberdade, de usar a mente como
          ferramenta, não como prisão.
        </p>

        <h2>O Que a Tatuagem Me Ensinou Sobre Disciplina</h2>
        <p>
          Tatuar exige disciplina. Você precisa aparecer todo dia, mesmo quando não está
          inspirado. Precisa manter a qualidade, mesmo quando está cansado. Precisa focar,
          mesmo quando há distrações.
        </p>
        <p>
          O Yôga me ensinou que essa disciplina não precisa ser rígida ou repressiva.
          Pode ser uma disciplina consciente, baseada em autoconhecimento, não em
          obrigação.
        </p>

        <h2>A Transição</h2>
        <p>
          Chegou um momento em que tatuar já não fazia mais sentido. Eu queria transmitir
          o que estava vivendo: essa melhora na qualidade de vida, essa energia constante,
          essa clareza mental.
        </p>
        <p>
          Em 2021, fiz a transição de carreira. Virei instrutor de Yôga. Hoje sou Nível 3
          pela Humana, o nível mais alto de certificação.
        </p>

        <h2>O Que Mudou? Tudo. E Nada.</h2>
        <p>
          Mudei de profissão, mas a essência permaneceu a mesma: disciplina, dedicação,
          busca por excelência. A diferença é que agora ensino algo que transforma vidas,
          não apenas cria arte na pele.
        </p>
        <p>
          As tatuagens que tenho no corpo não são apenas decoração. São lembretes da minha
          jornada. Do caos à quietude. Da agulha ao asana. Da arte externa à transformação
          interna.
        </p>

        <div className="blog-post-quote">
          <p>"Disciplina não é sobre seguir regras. É sobre criar estrutura para que a liberdade possa florescer."</p>
        </div>

        <h2>A Lição Principal</h2>
        <p>
          O que aprendi nessa jornada é que disciplina e liberdade não são opostos. São
          complementares. A disciplina do Yôga me deu a liberdade de escolher uma vida
          mais alinhada com meus valores. A disciplina da tatuagem me ensinou a importância
          da consistência.
        </p>

        <div className="blog-post-cta">
          <p>
            Quer entender como desenvolver uma disciplina consciente através do Yôga?
            Agende uma aula e vamos conversar sobre sua jornada.
          </p>
          <Link href="/contato">Agendar Aula</Link>
        </div>
      </div>
    </article>
  );
}
