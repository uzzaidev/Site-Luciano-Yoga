import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TantraLiberdadePage({ params }: Props) {
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
            Filosofia
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Tantra Não é o Que Você Pensa: Liberdade, Não Repressão
          </h1>
          <p className="text-text-muted">8 min de leitura</p>
        </div>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/blog/livros antigos.jpg"
            alt="Filosofia Tantra e Samkhya"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            Tantra foi distorcido no Ocidente. Conheça a visão original: uma filosofia
            de liberdade e autoconhecimento.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            O Que Tantra Realmente É
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Tantra, na sua origem, não tem nada a ver com o que foi popularizado no
            Ocidente. É uma filosofia profunda que trabalha com a ideia de expansão,
            não repressão.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Enquanto outras tradições pregam a renúncia e a negação dos desejos, Tantra
            ensina a trabalhar com eles de forma consciente. Não é sobre reprimir, é sobre
            transformar e transcender.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Liberdade vs. Repressão
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            A grande diferença do Tantra é que ele não vê o mundo material como algo
            a ser rejeitado. Ele vê como uma ferramenta para autoconhecimento. Você não
            precisa negar seus desejos ou emoções. Você precisa entendê-los.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Essa abordagem é libertadora. Em vez de lutar contra sua natureza, você
            trabalha com ela. Isso cria uma base muito mais sólida para o crescimento
            espiritual.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Como Isso Se Aplica na Prática
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            No Yôga que ensino, aplico princípios do Tantra de forma prática:
          </p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
            <li><strong>Aceitação:</strong> Aceitar seu corpo, suas limitações e seus desejos como parte do processo</li>
            <li><strong>Transformação:</strong> Usar a prática para transformar energia, não para reprimi-la</li>
            <li><strong>Consciência:</strong> Desenvolver consciência sobre seus padrões, não julgá-los</li>
            <li><strong>Liberdade:</strong> Criar espaço para escolhas conscientes, não seguir regras cegamente</li>
          </ul>

          <div className="bg-bg-secondary p-6 rounded-xl border-l-4 border-accent my-8">
            <p className="font-display italic text-xl text-text">
              "Tantra não é sobre fazer o que você quer. É sobre entender o que você quer e por quê."
            </p>
          </div>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Por Que Isso Importa
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Quando você pratica Yôga com uma base de Tantra, você não está tentando
            se tornar outra pessoa. Você está se tornando mais você mesmo. Mais autêntico,
            mais consciente, mais livre.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-secondary mb-4">
              Quer entender melhor como a filosofia Tantra pode transformar sua prática?
              Agende uma aula e vamos conversar.
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

