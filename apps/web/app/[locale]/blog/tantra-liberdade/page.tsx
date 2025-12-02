import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TantraLiberdadePage({ params }: Props) {
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
          <h1>Tantra Não é o Que Você Pensa: Liberdade, Não Repressão</h1>
          <p className="blog-post-reading-time">8 min de leitura</p>
        </div>
      </header>

      <div className="blog-post-image">
        <Image
          src="/images/blog/livros antigos.jpg"
          alt="Filosofia Tantra e Samkhya"
          width={1200}
          height={600}
        />
      </div>

      <div className="blog-post-content">
        <p className="blog-post-lead">
          Tantra foi distorcido no Ocidente. Conheça a visão original: uma filosofia
          de liberdade e autoconhecimento.
        </p>

        <h2>O Que Tantra Realmente É</h2>
        <p>
          Tantra, na sua origem, não tem nada a ver com o que foi popularizado no
          Ocidente. É uma filosofia profunda que trabalha com a ideia de expansão,
          não repressão.
        </p>
        <p>
          Enquanto outras tradições pregam a renúncia e a negação dos desejos, Tantra
          ensina a trabalhar com eles de forma consciente. Não é sobre reprimir, é sobre
          transformar e transcender.
        </p>

        <h2>Liberdade vs. Repressão</h2>
        <p>
          A grande diferença do Tantra é que ele não vê o mundo material como algo
          a ser rejeitado. Ele vê como uma ferramenta para autoconhecimento. Você não
          precisa negar seus desejos ou emoções. Você precisa entendê-los.
        </p>
        <p>
          Essa abordagem é libertadora. Em vez de lutar contra sua natureza, você
          trabalha com ela. Isso cria uma base muito mais sólida para o crescimento
          espiritual.
        </p>

        <h2>Como Isso Se Aplica na Prática</h2>
        <p>No Yôga que ensino, aplico princípios do Tantra de forma prática:</p>
        <ul>
          <li><strong>Aceitação:</strong> Aceitar seu corpo, suas limitações e seus desejos como parte do processo</li>
          <li><strong>Transformação:</strong> Usar a prática para transformar energia, não para reprimi-la</li>
          <li><strong>Consciência:</strong> Desenvolver consciência sobre seus padrões, não julgá-los</li>
          <li><strong>Liberdade:</strong> Criar espaço para escolhas conscientes, não seguir regras cegamente</li>
        </ul>

        <div className="blog-post-quote">
          <p>"Tantra não é sobre fazer o que você quer. É sobre entender o que você quer e por quê."</p>
        </div>

        <h2>Por Que Isso Importa</h2>
        <p>
          Quando você pratica Yôga com uma base de Tantra, você não está tentando
          se tornar outra pessoa. Você está se tornando mais você mesmo. Mais autêntico,
          mais consciente, mais livre.
        </p>

        <div className="blog-post-cta">
          <p>
            Quer entender melhor como a filosofia Tantra pode transformar sua prática?
            Agende uma aula e vamos conversar.
          </p>
          <Link href="/contato">Agendar Aula</Link>
        </div>
      </div>
    </article>
  );
}
