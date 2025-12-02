import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function EnergiaYogaDiaPage({ params }: Props) {
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
          <h1>Energia Que Não Acaba: Como o Yôga Transforma Seu Dia</h1>
          <p className="blog-post-reading-time">6 min de leitura</p>
        </div>
      </header>

      <div className="blog-post-image">
        <Image
          src="/images/blog/como-ter-mais-energia.jpg"
          alt="Energia e vitalidade através do Yôga"
          width={1200}
          height={600}
        />
      </div>

      <div className="blog-post-content">
        <p className="blog-post-lead">
          Não é mágica. É fisiologia. Entenda como a prática regular aumenta sua
          disposição e clareza mental.
        </p>

        <h2>O Que Acontece no Seu Corpo</h2>
        <p>
          Quando você pratica Yôga regularmente, seu corpo passa por transformações
          fisiológicas reais:
        </p>
        <ul>
          <li><strong>Circulação melhorada:</strong> Asanas aumentam o fluxo sanguíneo, levando mais oxigênio para o cérebro</li>
          <li><strong>Sistema nervoso equilibrado:</strong> Pranayama ativa o sistema parassimpático, reduzindo cortisol</li>
          <li><strong>Músculos fortalecidos:</strong> Posturas isométricas constroem força funcional</li>
          <li><strong>Flexibilidade aumentada:</strong> Menos tensão = menos gasto de energia</li>
        </ul>

        <h2>A Experiência dos Meus Alunos</h2>
        <p>
          Um dos depoimentos que mais ouço é: "Depois que comecei a praticar, consigo
          fazer uma quantidade enorme de coisas e a energia parece que nunca acaba."
        </p>
        <p>
          Isso não é exagero. Quando você pratica Yôga, você está literalmente
          otimizando seu corpo para funcionar melhor. Menos estresse, mais energia
          disponível.
        </p>

        <h2>Como Começar</h2>
        <p>
          Você não precisa praticar 2 horas por dia para sentir os benefícios.
          Mesmo 20 minutos diários já fazem diferença:
        </p>
        <ol>
          <li>5 minutos de respiração consciente (Pranayama)</li>
          <li>10 minutos de asanas (posturas) básicas</li>
          <li>5 minutos de relaxamento (Savasana)</li>
        </ol>

        <div className="blog-post-quote">
          <p>"Energia que não acaba não é sobre nunca se cansar. É sobre se recuperar rápido e ter disposição constante."</p>
        </div>

        <h2>Resultados em 30 Dias</h2>
        <p>
          Alunos que praticam regularmente por um mês relatam: mais disposição ao
          acordar, menos cansaço no final do dia, melhor qualidade do sono e mais
          clareza mental para tomar decisões.
        </p>

        <div className="blog-post-cta">
          <p>
            Quer experimentar essa transformação? Agende uma aula experimental e
            descubra como o Yôga pode aumentar sua energia.
          </p>
          <Link href="/contato">Agendar Aula Experimental</Link>
        </div>
      </div>
    </article>
  );
}
