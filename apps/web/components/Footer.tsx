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
    <>
      <footer className="bg-[#0F2537] text-white/70 py-16 w-full">
        <div className="w-full px-4 sm:px-8">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <p className="text-center text-base m-0 leading-tight w-full" style={{ textAlign: 'center' }}>
              © 2025 Luciano Giorgetta | Instrutor de Yôga | Porto Alegre, RS
            </p>
            <p className="text-center text-sm italic m-0 leading-tight w-full" style={{ textAlign: 'center' }}>
              Yôga para corpos reais, filosofia para mentes livres.
            </p>
          </div>
        </div>
      </footer>

      <div className="bg-black py-4 px-8 text-center">
        <a
          href="https://uzzai.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline font-sans text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-[#D4AF37]"
        >
          FEITO COM MUITO AMOR E PRÁNA POR Uzz.Ai 💚
        </a>
      </div>
    </>
  );
}

