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
      <section className="bg-gradient-to-br from-primary to-[#0F2537] text-white pt-20 pb-12 px-8 text-center">
        <h1 className="font-display text-[3.5rem] mb-4">Blog</h1>
        <p className="text-[1.3rem] text-white/90 max-w-[700px] mx-auto">
          Filosofia, prática e qualidade de vida. Sem misticismo vazio.
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto py-24 px-8">
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          <button className="px-8 py-[0.8rem] bg-white border-2 border-primary text-primary rounded-lg font-sans font-semibold transition-all hover:bg-primary hover:text-white active:bg-primary active:text-white">
            Todos
          </button>
          {siteConfig.blog.categories.map((category) => (
            <button key={category.slug} className="px-8 py-[0.8rem] bg-white border-2 border-primary text-primary rounded-lg font-sans font-semibold transition-all hover:bg-primary hover:text-white active:bg-primary active:text-white">
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col"
            >
              <div className="bg-primary h-[200px] flex items-center justify-center text-white/50 italic relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-sans font-semibold mb-4 self-start">
                  {post.category}
                </span>
                <h2 className="font-display text-[1.8rem] text-primary mb-4 leading-tight">
                  {post.title}
                </h2>
                <p className="text-text mb-6 flex-1">{post.excerpt}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 text-sm text-gray-500">
                  <span>{post.readingTime}</span>
                  <Link href={`/blog/${post.slug}`} className="text-accent font-sans font-semibold hover:text-primary">
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

