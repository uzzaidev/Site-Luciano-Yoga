import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { TestimonialForm } from '@/components/TestimonialForm';
import { locales } from '@/i18n';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

// Metadata com noindex para esconder da busca
export const metadata: Metadata = {
  title: 'Deixe seu Depoimento | Luciano Giorgetta',
  description: 'Compartilhe sua experiência com as aulas de Yôga',
  robots: {
    index: false,
    follow: false,
  },
};

// Gerar parâmetros estáticos para todos os locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function DepoimentoPage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Cabeçalho da página */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold text-[#1a1a1a] mb-4">
            Deixe seu Depoimento
          </h1>
          <p className="text-lg text-gray-600">
            Sua experiência é importante! Compartilhe como o Yôga tem impactado sua vida.
          </p>
        </div>

        {/* Aviso sobre privacidade do nome */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r">
          <p className="text-sm text-blue-800">
            <strong>Privacidade:</strong> Seu nome será exibido apenas com as iniciais. 
            Por exemplo, se você se chamar "Luciano Giorgetta", aparecerá como "Luciano G." no site.
          </p>
        </div>

        {/* Formulário de depoimento */}
        <TestimonialForm />
      </div>
    </div>
  );
}

