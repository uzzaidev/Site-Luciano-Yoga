import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@template/ui';
import { siteConfig } from '@/site.config';

/**
 * HeroSection mostra o destaque inicial utilizando os dados de siteConfig.hero.
 * Foca em texto forte e dois CTAs para acelerar a personalização.
 *
 * @example
 * <HeroSection />
 */
export function HeroSection() {
  const hero = siteConfig.hero;
  const descriptionParts = [
    hero.description.lead,
    hero.description.highlight,
    hero.description.end,
  ].filter(Boolean);

  return (
    <section id="inicio" className="hero">
      {/* Elemento decorativo sutil */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="font-display">
            {hero.title}
            <span className="highlight">{hero.subtitle}</span>
          </h1>
          {descriptionParts.length > 0 && (
            <p className="subtitle">
              {descriptionParts.join(' ')}
            </p>
          )}
          <p className="tagline">
            "{siteConfig.identity.tagline}"
          </p>
          <div className="cta-group">
            <Link href={hero.cta.primary.href} className="btn btn-primary">
              {hero.cta.primary.text}
            </Link>
            {hero.cta.secondary.href && hero.cta.secondary.text && (
              <Link href={hero.cta.secondary.href} className="btn btn-secondary">
                {hero.cta.secondary.text}
              </Link>
            )}
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/images/luciano-hero.png"
            alt="Luciano Giorgetta - Instrutor de Yôga"
            width={500}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

