import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TatuadorDisciplinaYogaPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <article className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-accent hover:underline font-semibold mb-4 inline-block"
          >
            ← Voltar ao Blog
          </Link>
          <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Qualidade de Vida
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            O Que Um Tatuador Aprendeu Sobre Disciplina no Yôga
          </h1>
          <p className="text-text-muted">10 min de leitura</p>
        </div>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/blog/tatuagem+yoga.jpeg"
            alt="Tatuagem e Yôga - Disciplina e autoconhecimento"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            Minha jornada de 8 anos tatuando para 5 anos instruindo. O que mudou? Tudo. E nada.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Do Caos da Agulha à Quietude do Asana
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Durante 8 anos, trabalhei como tatuador profissional, especializado em estilo
            oriental/japonês. Meu corpo inteiro virou uma tela. Arte, expressão, identidade.
            Mas também: longas horas em pé, tensão no pescoço, estresse constante.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Enquanto tatuava, continuei praticando Yôga. A filosofia começou a fazer cada
            vez mais sentido. Samkhya, Tantra, a ideia de liberdade, de usar a mente como
            ferramenta, não como prisão.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            O Que a Tatuagem Me Ensinou Sobre Disciplina
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Tatuar exige disciplina. Você precisa aparecer todo dia, mesmo quando não está
            inspirado. Precisa manter a qualidade, mesmo quando está cansado. Precisa focar,
            mesmo quando há distrações.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            O Yôga me ensinou que essa disciplina não precisa ser rígida ou repressiva.
            Pode ser uma disciplina consciente, baseada em autoconhecimento, não em
            obrigação.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            A Transição
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Chegou um momento em que tatuar já não fazia mais sentido. Eu queria transmitir
            o que estava vivendo: essa melhora na qualidade de vida, essa energia constante,
            essa clareza mental.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Em 2021, fiz a transição de carreira. Virei instrutor de Yôga. Hoje sou Nível 3
            pela Humana, o nível mais alto de certificação.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            O Que Mudou? Tudo. E Nada.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Mudei de profissão, mas a essência permaneceu a mesma: disciplina, dedicação,
            busca por excelência. A diferença é que agora ensino algo que transforma vidas,
            não apenas cria arte na pele.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            As tatuagens que tenho no corpo não são apenas decoração. São lembretes da minha
            jornada. Do caos à quietude. Da agulha ao asana. Da arte externa à transformação
            interna.
          </p>

          <div className="bg-bg-secondary p-6 rounded-xl border-l-4 border-accent my-8">
            <p className="font-display italic text-xl text-text">
              "Disciplina não é sobre seguir regras. É sobre criar estrutura para que a
              liberdade possa florescer."
            </p>
          </div>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            A Lição Principal
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            O que aprendi nessa jornada é que disciplina e liberdade não são opostos. São
            complementares. A disciplina do Yôga me deu a liberdade de escolher uma vida
            mais alinhada com meus valores. A disciplina da tatuagem me ensinou a importância
            da consistência.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-secondary mb-4">
              Quer entender como desenvolver uma disciplina consciente através do Yôga?
              Agende uma aula e vamos conversar sobre sua jornada.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Agendar Aula
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

