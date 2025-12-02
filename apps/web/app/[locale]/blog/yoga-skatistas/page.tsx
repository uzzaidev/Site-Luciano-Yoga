import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function YogaSkatistasPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <div className="blog-post-meta">
          <Link href="/blog" className="blog-post-back">
            ← Voltar ao Blog
          </Link>
          <span className="blog-post-category">Prática</span>
          <h1>Yôga Para Skatistas: Mobilidade e Prevenção de Lesões</h1>
          <p className="blog-post-reading-time">6 min de leitura</p>
        </div>
      </header>

      <div className="blog-post-image">
        <Image
          src="/images/blog/skatetista praticando.jpeg"
          alt="Yôga para skatistas"
          width={1200}
          height={600}
        />
      </div>

      <div className="blog-post-content">
        <p className="blog-post-lead">
          Skate exige mobilidade, equilíbrio e recuperação rápida. Veja como o Yôga
          potencializa sua performance.
        </p>

        <h2>Minha História com Skate e Yôga</h2>
        <p>
          Comecei a praticar Yôga aos 15 anos, por indicação da minha mãe. Na época,
          eu era skatista e não via muito sentido na prática. Mas depois da primeira
          aula, percebi que meu rendimento no skate melhorou significativamente.
        </p>
        <p>
          Mais energia, mais disposição, menos lesões. Foi quando entendi que Yôga
          não é só para pessoas flexíveis. É para atletas que querem melhorar.
        </p>

        <h2>Benefícios Específicos para Skatistas</h2>
        <ul>
          <li><strong>Mobilidade de quadril:</strong> Essencial para manobras e aterrissagens</li>
          <li><strong>Equilíbrio:</strong> Asanas de equilíbrio melhoram propriocepção</li>
          <li><strong>Força funcional:</strong> Posturas isométricas fortalecem músculos estabilizadores</li>
          <li><strong>Recuperação:</strong> Pranayama e relaxamento aceleram a recuperação muscular</li>
          <li><strong>Prevenção de lesões:</strong> Alongamento e fortalecimento protegem articulações</li>
        </ul>

        <h2>Sequência Específica para Skatistas</h2>
        <p>
          Se você é skatista, foque nestas áreas:
        </p>
        <ol>
          <li><strong>Aquecimento:</strong> 5 minutos de respiração e movimentos suaves</li>
          <li><strong>Mobilidade de quadril:</strong> Posturas como Pigeon Pose e Lizard Pose</li>
          <li><strong>Equilíbrio:</strong> Tree Pose e Warrior 3 para melhorar propriocepção</li>
          <li><strong>Força:</strong> Plank, Chaturanga e Warrior poses para fortalecer core</li>
          <li><strong>Alongamento:</strong> Alongar pernas, costas e ombros após a prática</li>
          <li><strong>Relaxamento:</strong> 5 minutos de Savasana para recuperação</li>
        </ol>

        <div className="blog-post-quote">
          <p>"Yôga não vai te tornar menos skatista. Vai te tornar um skatista melhor."</p>
        </div>

        <h2>Quando Praticar</h2>
        <p>
          Ideal praticar Yôga nos dias de descanso do skate ou após sessões intensas.
          A prática ajuda na recuperação e previne lesões. Mesmo 20 minutos já fazem
          diferença.
        </p>

        <div className="blog-post-cta">
          <p>
            Quer uma sequência personalizada para seu estilo de skate? Agende uma
            aula e vamos criar uma prática específica para você.
          </p>
          <Link href="/contato">Agendar Aula</Link>
        </div>
      </div>
    </article>
  );
}
