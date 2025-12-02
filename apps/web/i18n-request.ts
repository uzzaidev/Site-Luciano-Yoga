// Configuração do next-intl para Server Components
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the request locale
  let locale = await requestLocale;

  // Validate and fallback to default locale if invalid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'pt';
  }

  // Load messages for the locale
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale,
    messages,
    timeZone: 'America/Sao_Paulo',
    now: new Date(),
  };
});
