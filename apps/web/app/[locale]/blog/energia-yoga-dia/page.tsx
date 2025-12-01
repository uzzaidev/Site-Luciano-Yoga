import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function EnergiaYogaDiaPage({ params }: Props) {
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
            Energia Que Não Acaba: Como o Yôga Transforma Seu Dia
          </h1>
          <p className="text-text-muted">6 min de leitura</p>
        </div>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/blog/como-ter-mais-energia.jpg"
            alt="Energia e vitalidade através do Yôga"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            Não é mágica. É fisiologia. Entenda como a prática regular aumenta sua
            disposição e clareza mental.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            O Que Acontece no Seu Corpo
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Quando você pratica Yôga regularmente, seu corpo passa por transformações
            fisiológicas reais:
          </p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
            <li><strong>Circulação melhorada:</strong> Asanas aumentam o fluxo sanguíneo, levando mais oxigênio para o cérebro</li>
            <li><strong>Sistema nervoso equilibrado:</strong> Pranayama ativa o sistema parassimpático, reduzindo cortisol</li>
            <li><strong>Músculos fortalecidos:</strong> Posturas isométricas constroem força funcional</li>
            <li><strong>Flexibilidade aumentada:</strong> Menos tensão = menos gasto de energia</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            A Experiência dos Meus Alunos
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Um dos depoimentos que mais ouço é: "Depois que comecei a praticar, consigo
            fazer uma quantidade enorme de coisas e a energia parece que nunca acaba."
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Isso não é exagero. Quando você pratica Yôga, você está literalmente
            otimizando seu corpo para funcionar melhor. Menos estresse, mais energia
            disponível.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Como Começar
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Você não precisa praticar 2 horas por dia para sentir os benefícios.
            Mesmo 20 minutos diários já fazem diferença:
          </p>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-6">
            <li>5 minutos de respiração consciente (Pranayama)</li>
            <li>10 minutos de asanas (posturas) básicas</li>
            <li>5 minutos de relaxamento (Savasana)</li>
          </ol>

          <div className="bg-bg-secondary p-6 rounded-xl border-l-4 border-accent my-8">
            <p className="font-display italic text-xl text-text">
              "Energia que não acaba não é sobre nunca se cansar. É sobre se recuperar rápido e ter disposição constante."
            </p>
          </div>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Resultados em 30 Dias
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Alunos que praticam regularmente por um mês relatam: mais disposição ao
            acordar, menos cansaço no final do dia, melhor qualidade do sono e mais
            clareza mental para tomar decisões.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-secondary mb-4">
              Quer experimentar essa transformação? Agende uma aula experimental e
              descubra como o Yôga pode aumentar sua energia.
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

