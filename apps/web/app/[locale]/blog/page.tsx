import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

// Posts do blog com imagens reais
const blogPosts = [
  {
    id: '1',
    title: 'Como a Filosofia do Yôga Ajuda a Controlar a Ansiedade',
    category: 'Filosofia',
    excerpt: 'Samkhya ensina que a mente é uma ferramenta, não um tirano. Aprenda a usar sua mente a seu favor, não contra você.',
    readingTime: '5 min de leitura',
    slug: 'filosofia-yoga-ansiedade',
    image: '/images/blog/meditação.jpeg',
  },
  {
    id: '2',
    title: '5 Alongamentos de Yôga Para Quem Trabalha Sentado',
    category: 'Prática',
    excerpt: 'Dor nas costas? Pescoço travado? Esses 5 movimentos simples podem ser feitos na cadeira do escritório.',
    readingTime: '7 min de leitura',
    slug: 'alongamentos-escritorio',
    image: '/images/blog/asana escritorio.jpeg',
  },
  {
    id: '3',
    title: 'Energia Que Não Acaba: Como o Yôga Transforma Seu Dia',
    category: 'Qualidade de Vida',
    excerpt: 'Não é mágica. É fisiologia. Entenda como a prática regular aumenta sua disposição e clareza mental.',
    readingTime: '6 min de leitura',
    slug: 'energia-yoga-dia',
    image: '/images/blog/como-ter-mais-energia.jpg',
  },
  {
    id: '4',
    title: 'Tantra Não é o Que Você Pensa: Liberdade, Não Repressão',
    category: 'Filosofia',
    excerpt: 'Tantra foi distorcido no Ocidente. Conheça a visão original: uma filosofia de liberdade e autoconhecimento.',
    readingTime: '8 min de leitura',
    slug: 'tantra-liberdade',
    image: '/images/blog/livros antigos.jpg',
  },
  {
    id: '5',
    title: 'Yôga Para Skatistas: Mobilidade e Prevenção de Lesões',
    category: 'Prática',
    excerpt: 'Skate exige mobilidade, equilíbrio e recuperação rápida. Veja como o Yôga potencializa sua performance.',
    readingTime: '6 min de leitura',
    slug: 'yoga-skatistas',
    image: '/images/blog/skatetista praticando.jpeg',
  },
  {
    id: '6',
    title: 'O Que Um Tatuador Aprendeu Sobre Disciplina no Yôga',
    category: 'Qualidade de Vida',
    excerpt: 'Minha jornada de 8 anos tatuando para 5 anos instruindo. O que mudou? Tudo. E nada.',
    readingTime: '10 min de leitura',
    slug: 'tatuador-disciplina-yoga',
    image: '/images/blog/tatuagem+yoga.jpeg',
  },
];

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <>
      <section className="hero-interno">
        <h1>Blog</h1>
        <p>Filosofia, prática e qualidade de vida. Sem misticismo vazio.</p>
      </section>

      <div className="blog-content">
        <div className="filters">
          <button className="filter-btn active">Todos</button>
          {siteConfig.blog.categories.map((category) => (
            <button key={category.slug} className="filter-btn">
              {category.name}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="blog-card-content">
                <span className="blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.readingTime}</span>
                  <Link href={`/blog/${post.slug}`} className="read-more">
                    Ler artigo →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

