import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AlongamentosEscritorioPage({ params }: Props) {
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
          <h1>5 Alongamentos de Yôga Para Quem Trabalha Sentado</h1>
          <p className="blog-post-reading-time">7 min de leitura</p>
        </div>
      </header>

      <div className="blog-post-image">
        <Image
          src="/images/blog/asana escritorio.jpeg"
          alt="Alongamentos de Yôga no escritório"
          width={1200}
          height={600}
        />
      </div>

      <div className="blog-post-content">
        <p className="blog-post-lead">
          Dor nas costas? Pescoço travado? Esses 5 movimentos simples podem ser feitos
          na cadeira do escritório, sem precisar de tapete ou espaço.
        </p>

        <h2>1. Rotação de Pescoço (Greeva Sanchalana)</h2>
        <p>
          Sente-se ereto na cadeira. Inspire e gire o pescoço suavemente para a direita,
          expire e volte ao centro. Repita para a esquerda. Faça 5 rotações completas
          em cada direção.
        </p>
        <p>
          <strong>Benefício:</strong> Alivia tensão no pescoço e ombros, comum após
          horas olhando para a tela.
        </p>

        <h2>2. Torção Sentada (Ardha Matsyendrasana)</h2>
        <p>
          Sente-se de lado na cadeira, com o pé direito no chão. Gire o tronco para
          a direita, segurando o encosto da cadeira. Mantenha por 5 respirações.
          Repita para o outro lado.
        </p>
        <p>
          <strong>Benefício:</strong> Massageia órgãos internos e alivia tensão na
          coluna lombar.
        </p>

        <h2>3. Flexão para Frente (Uttanasana Sentada)</h2>
        <p>
          Sente-se na beirada da cadeira. Inspire e alongue a coluna. Expire e dobre
          o tronco para frente, deixando os braços pendurados. Mantenha por 5 respirações.
        </p>
        <p>
          <strong>Benefício:</strong> Estira toda a cadeia posterior (costas, glúteos,
          pernas) e acalma o sistema nervoso.
        </p>

        <h2>4. Abertura de Peito (Urdhva Hastasana Sentada)</h2>
        <p>
          Sente-se ereto. Entrelace os dedos atrás da cabeça. Abra o peito, puxando
          os cotovelos para trás. Mantenha por 5 respirações profundas.
        </p>
        <p>
          <strong>Benefício:</strong> Combate a postura curvada da frente do computador
          e abre o peito.
        </p>

        <h2>5. Respiração Consciente (Pranayama)</h2>
        <p>
          Feche os olhos. Inspire contando até 4, segure por 4, expire por 4, segure
          por 4. Repita 10 ciclos.
        </p>
        <p>
          <strong>Benefício:</strong> Ativa o sistema parassimpático, reduzindo estresse
          e ansiedade.
        </p>

        <div className="blog-post-quote">
          <p>"5 minutos de prática podem transformar seu dia inteiro."</p>
        </div>

        <h2>Quando Fazer?</h2>
        <p>
          Ideal fazer a cada 2 horas de trabalho. Se não conseguir, pelo menos faça
          uma vez pela manhã e outra à tarde. A consistência é mais importante que
          a duração.
        </p>

        <div className="blog-post-cta">
          <p>
            Quer aprender mais técnicas? Agende uma aula e desenvolva uma prática
            personalizada para seu dia a dia.
          </p>
          <Link href="/contato">Agendar Aula</Link>
        </div>
      </div>
    </article>
  );
}
