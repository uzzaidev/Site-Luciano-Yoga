import { siteConfig } from '@/site.config';

/**
 * StatsSection destaca métricas da empresa definidas em siteConfig.about.stats.
 *
 * @example
 * <StatsSection />
 */
export function StatsSection() {
  const stats = siteConfig.about.stats.filter((stat) => stat.value && stat.label);

  if (!stats.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-border/60 bg-bg px-6 py-10 shadow-sm sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">
            Resultados
          </p>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Números que comprovam o trabalho
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border/50 bg-bg-secondary/60 p-4 text-center">
              <p className="text-3xl font-bold text-text">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

