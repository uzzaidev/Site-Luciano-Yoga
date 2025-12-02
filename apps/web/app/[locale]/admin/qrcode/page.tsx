import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { QRCodeGenerator } from '@/components/QRCodeGenerator';
import { locales } from '@/i18n';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

// Página administrativa também escondida
export const metadata: Metadata = {
  title: 'QR Code Depoimentos | Admin',
  description: 'Gerar QR code para página de depoimentos',
  robots: {
    index: false,
    follow: false,
  },
};

// Gerar parâmetros estáticos para todos os locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function QRCodePage({ params }: Props) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <QRCodeGenerator />
      </div>
    </div>
  );
}

