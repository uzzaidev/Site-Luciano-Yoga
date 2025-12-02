import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function FilosofiaYogaAnsiedadePage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <div className="blog-post-meta">
          <Link href="/blog" className="blog-post-back">
            ← Voltar ao Blog
          </Link>
          <span className="blog-post-category">Filosofia</span>
          <h1>Como a Filosofia do Yôga Ajuda a Controlar a Ansiedade</h1>
          <p className="blog-post-reading-time">5 min de leitura</p>
        </div>
      </header>

      <div className="blog-post-image">
        <Image
          src="/images/blog/meditação.jpeg"
          alt="Meditação e controle da ansiedade"
          width={1200}
          height={600}
        />
      </div>

      <div className="blog-post-content">
        <p className="blog-post-lead">
          Samkhya ensina que a mente é uma ferramenta, não um tirano.
          Aprenda a usar sua mente a seu favor, não contra você.
        </p>

        <h2>A Mente como Ferramenta</h2>
        <p>
          Uma das principais lições da filosofia Samkhya é entender que a mente não é você.
          Ela é uma ferramenta que você pode aprender a usar. Quando você está ansioso, sua
          mente está trabalhando contra você, criando cenários catastróficos e aumentando
          o estresse.
        </p>
        <p>
          O Yôga ensina técnicas práticas para observar seus pensamentos sem se identificar
          com eles. Você não é seus pensamentos ansiosos. Você é quem observa esses pensamentos.
          Essa distância é libertadora.
        </p>

        <h2>Práticas que Funcionam</h2>
        <p>Durante minhas aulas, trabalho com técnicas específicas para ansiedade:</p>
        <ul>
          <li>Respiração consciente (Pranayama) para acalmar o sistema nervoso</li>
          <li>Meditação para observar pensamentos sem julgamento</li>
          <li>Asanas que ativam o sistema parassimpático</li>
          <li>Filosofia aplicada para entender a origem da ansiedade</li>
        </ul>
        <p>Não é mágica. É fisiologia e autoconhecimento trabalhando juntos.</p>

        <div className="blog-post-quote">
          <p>"A ansiedade é a mente tentando controlar o futuro. O Yôga ensina a viver o presente."</p>
        </div>

        <h2>Resultados Reais</h2>
        <p>
          Alunos que praticam regularmente relatam redução significativa na ansiedade,
          melhor qualidade do sono e mais clareza mental. A prática constante cria
          uma base sólida para lidar com os desafios do dia a dia.
        </p>

        <div className="blog-post-cta">
          <p>
            Quer experimentar? Agende uma aula experimental e veja como a filosofia
            do Yôga pode transformar sua relação com a ansiedade.
          </p>
          <Link href="/contato">Agendar Aula Experimental</Link>
        </div>
      </div>
    </article>
  );
}
