import Link from 'next/link';
import { siteConfig } from '@/site.config';

interface HeaderProps {
  className?: string;
}

/**
 * Header apresenta o nome da marca, navegação principal e CTA.
 * Use o siteConfig para evitar dados hardcoded.
 */
export function Header({ className = '' }: HeaderProps) {

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          Luciano <span>Giorgetta</span>
        </Link>

        <ul className="nav-links">
          {siteConfig.navigation.main.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={siteConfig.hero.cta.primary.href} className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
          {siteConfig.hero.cta.primary.text}
        </Link>
      </nav>
    </header>
  );
}
