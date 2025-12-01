import Link from 'next/link';
import { Button } from '@template/ui';
import { siteConfig } from '@/site.config';

/**
 * ServicesSection mostra os serviços definidos em siteConfig.services.
 * Cada card exibe ícone, título, descrição, benefícios e CTA.
 *
 * @example
 * <ServicesSection />
 */
export function ServicesSection() {
  const services = siteConfig.services;

  if (!services.length) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Serviços
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
            {siteConfig.identity.tagline || 'Mostre seus principais serviços aqui.'}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between gap-5 rounded-2xl border border-border/60 bg-bg p-6 shadow-sm"
            >
              <div>
                <span className="text-3xl">{service.icon || '🔧'}</span>
                <h3 className="mt-3 text-2xl font-semibold text-text">
                  {service.title || 'Serviço sem título'}
                </h3>
                <p className="mt-2 text-text-secondary">{service.description || 'Descreva o que este serviço resolve.'}</p>
                {service.features.length > 0 && (
                  <ul className="mt-4 space-y-1 text-sm text-text-secondary">
                    {service.features.map((feature, index) => (
                      <li key={index}>• {feature || 'Benefício pendente'}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="md">
                  <Link href={service.link || '/contato'}>
                    {service.ctaText || 'Saiba mais'}
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

