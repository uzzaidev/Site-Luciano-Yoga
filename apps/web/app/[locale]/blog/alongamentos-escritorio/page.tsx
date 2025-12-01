import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/site.config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AlongamentosEscritorioPage({ params }: Props) {
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
            5 Alongamentos de Yôga Para Quem Trabalha Sentado
          </h1>
          <p className="text-text-muted">7 min de leitura</p>
        </div>

        <div className="mb-8 rounded-xl overflow-hidden">
          <Image
            src="/images/blog/asana escritorio.jpeg"
            alt="Alongamentos de Yôga no escritório"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            Dor nas costas? Pescoço travado? Esses 5 movimentos simples podem ser feitos
            na cadeira do escritório, sem precisar de tapete ou espaço.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            1. Rotação de Pescoço (Greeva Sanchalana)
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Sente-se ereto na cadeira. Inspire e gire o pescoço suavemente para a direita,
            expire e volte ao centro. Repita para a esquerda. Faça 5 rotações completas
            em cada direção.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong>Benefício:</strong> Alivia tensão no pescoço e ombros, comum após
            horas olhando para a tela.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            2. Torção Sentada (Ardha Matsyendrasana)
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Sente-se de lado na cadeira, com o pé direito no chão. Gire o tronco para
            a direita, segurando o encosto da cadeira. Mantenha por 5 respirações.
            Repita para o outro lado.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong>Benefício:</strong> Massageia órgãos internos e alivia tensão na
            coluna lombar.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            3. Flexão para Frente (Uttanasana Sentada)
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Sente-se na beirada da cadeira. Inspire e alongue a coluna. Expire e dobre
            o tronco para frente, deixando os braços pendurados. Mantenha por 5 respirações.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong>Benefício:</strong> Estira toda a cadeia posterior (costas, glúteos,
            pernas) e acalma o sistema nervoso.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            4. Abertura de Peito (Urdhva Hastasana Sentada)
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Sente-se ereto. Entrelace os dedos atrás da cabeça. Abra o peito, puxando
            os cotovelos para trás. Mantenha por 5 respirações profundas.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong>Benefício:</strong> Combate a postura curvada da frente do computador
            e abre o peito.
          </p>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            5. Respiração Consciente (Pranayama)
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Feche os olhos. Inspire contando até 4, segure por 4, expire por 4, segure
            por 4. Repita 10 ciclos.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            <strong>Benefício:</strong> Ativa o sistema parassimpático, reduzindo estresse
            e ansiedade.
          </p>

          <div className="bg-bg-secondary p-6 rounded-xl border-l-4 border-accent my-8">
            <p className="font-display italic text-xl text-text">
              "5 minutos de prática podem transformar seu dia inteiro."
            </p>
          </div>

          <h2 className="font-display text-3xl font-bold text-text mt-8 mb-4">
            Quando Fazer?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Ideal fazer a cada 2 horas de trabalho. Se não conseguir, pelo menos faça
            uma vez pela manhã e outra à tarde. A consistência é mais importante que
            a duração.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-secondary mb-4">
              Quer aprender mais técnicas? Agende uma aula e desenvolva uma prática
              personalizada para seu dia a dia.
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

