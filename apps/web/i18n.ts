// Constantes e tipos compartilhados (podem ser usados em client components)
export const locales = ['pt', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  pt: '🇧🇷 Português',
  en: '🇺🇸 English',
  es: '🇪🇸 Español',
};

export const defaultLocale: Locale = 'pt';
