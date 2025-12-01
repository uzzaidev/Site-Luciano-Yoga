import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function FilosofiaYogaAnsiedadePage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <article className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-accent hover:underline font-semibold mb-4 inline-block"
          >
            ← Voltar ao Blog
          </Link>
          <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Filosofia
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Como a Filosofia do Yôga Ajuda a Controlar a Ansiedade
          </h1>
          <p className="text-text-muted">5 min de leitura</p>
        </div>

        {/* Imagem */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/blog/meditação.jpeg"
            alt="Meditação e controle da ansiedade"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            Samkhya ensina que a mente é uma ferramenta, não um tirano.
            Aprenda a usar sua mente a seu favor, não contra você.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            A Mente como Ferramenta
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Uma das principais lições da filosofia Samkhya é entender que a mente não é você.
            Ela é uma ferramenta que você pode aprender a usar. Quando você está ansioso, sua
            mente está trabalhando contra você, criando cenários catastróficos e aumentando
            o estresse.
          </p>

          <p className="text-text-secondary leading-relaxed mb-4">
            O Yôga ensina técnicas práticas para observar seus pensamentos sem se identificar
            com eles. Você não é seus pensamentos ansiosos. Você é quem observa esses pensamentos.
            Essa distância é libertadora.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Práticas que Funcionam
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Durante minhas aulas, trabalho com técnicas específicas para ansiedade:
          </p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
            <li>Respiração consciente (Pranayama) para acalmar o sistema nervoso</li>
            <li>Meditação para observar pensamentos sem julgamento</li>
            <li>Asanas que ativam o sistema parassimpático</li>
            <li>Filosofia aplicada para entender a origem da ansiedade</li>
          </ul>

          <p className="text-text-secondary leading-relaxed mb-6">
            Não é mágica. É fisiologia e autoconhecimento trabalhando juntos.
          </p>

          <div className="bg-bg-secondary p-6 rounded-xl border-l-4 border-accent my-8">
            <p className="font-display italic text-xl text-text">
              "A ansiedade é a mente tentando controlar o futuro. O Yôga ensina a viver o presente."
            </p>
          </div>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Resultados Reais
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Alunos que praticam regularmente relatam redução significativa na ansiedade,
            melhor qualidade do sono e mais clareza mental. A prática constante cria
            uma base sólida para lidar com os desafios do dia a dia.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-secondary mb-4">
              Quer experimentar? Agende uma aula experimental e veja como a filosofia
              do Yôga pode transformar sua relação com a ansiedade.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Agendar Aula Experimental
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

