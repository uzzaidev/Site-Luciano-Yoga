import Link from 'next/link';
import { siteConfig } from '@/site.config';

/**
 * Footer da página com contatos oficiais e redes sociais.
 * Mantém o mesmo conjunto de dados usado pelo Header e pelo siteConfig.
 */
export function Footer() {
  const contact = siteConfig.contact;
  const socials = Object.entries(siteConfig.social).filter(
    ([, value]) => typeof value === 'string' && value.trim().length > 0,
  );

  return (
    <footer className="bg-[#0F2537] text-white/70">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 px-4 py-12 sm:px-8 text-center">
        <p className="text-base">
          © {new Date().getFullYear()} {siteConfig.identity.name || 'Template Skeleton'} | Instrutor de Yôga | Porto Alegre, RS
        </p>
        <p className="text-sm italic">
          {siteConfig.identity.tagline}
        </p>
      </div>
    </footer>
  );
}

