import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function YogaSkatistasPage({ params }: Props) {
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
            Prática
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
            Yôga Para Skatistas: Mobilidade e Prevenção de Lesões
          </h1>
          <p className="text-text-muted">6 min de leitura</p>
        </div>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/blog/skatetista praticando.jpeg"
            alt="Yôga para skatistas"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            Skate exige mobilidade, equilíbrio e recuperação rápida. Veja como o Yôga
            potencializa sua performance.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Minha História com Skate e Yôga
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Comecei a praticar Yôga aos 15 anos, por indicação da minha mãe. Na época,
            eu era skatista e não via muito sentido na prática. Mas depois da primeira
            aula, percebi que meu rendimento no skate melhorou significativamente.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Mais energia, mais disposição, menos lesões. Foi quando entendi que Yôga
            não é só para pessoas flexíveis. É para atletas que querem melhorar.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Benefícios Específicos para Skatistas
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
            <li><strong>Mobilidade de quadril:</strong> Essencial para manobras e aterrissagens</li>
            <li><strong>Equilíbrio:</strong> Asanas de equilíbrio melhoram propriocepção</li>
            <li><strong>Força funcional:</strong> Posturas isométricas fortalecem músculos estabilizadores</li>
            <li><strong>Recuperação:</strong> Pranayama e relaxamento aceleram a recuperação muscular</li>
            <li><strong>Prevenção de lesões:</strong> Alongamento e fortalecimento protegem articulações</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Sequência Específica para Skatistas
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Se você é skatista, foque nestas áreas:
          </p>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-6">
            <li><strong>Aquecimento:</strong> 5 minutos de respiração e movimentos suaves</li>
            <li><strong>Mobilidade de quadril:</strong> Posturas como Pigeon Pose e Lizard Pose</li>
            <li><strong>Equilíbrio:</strong> Tree Pose e Warrior 3 para melhorar propriocepção</li>
            <li><strong>Força:</strong> Plank, Chaturanga e Warrior poses para fortalecer core</li>
            <li><strong>Alongamento:</strong> Alongar pernas, costas e ombros após a prática</li>
            <li><strong>Relaxamento:</strong> 5 minutos de Savasana para recuperação</li>
          </ol>

          <div className="bg-bg-secondary p-6 rounded-xl border-l-4 border-accent my-8">
            <p className="font-display italic text-xl text-text">
              "Yôga não vai te tornar menos skatista. Vai te tornar um skatista melhor."
            </p>
          </div>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Quando Praticar
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Ideal praticar Yôga nos dias de descanso do skate ou após sessões intensas.
            A prática ajuda na recuperação e previne lesões. Mesmo 20 minutos já fazem
            diferença.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-secondary mb-4">
              Quer uma sequência personalizada para seu estilo de skate? Agende uma
              aula e vamos criar uma prática específica para você.
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

