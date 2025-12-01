import { siteConfig } from '@/site.config';

/**
 * TestimonialsSection mostra depoimentos de clientes
 */
export function TestimonialsSection() {
  const testimonials = siteConfig.testimonials;

  if (!testimonials.enabled || !testimonials.items.length) {
    return null;
  }

  return (

    <section className="depoimentos">
      <div className="depoimentos-container">
        <h2 className="section-title">
          O Que Meus Alunos Dizem
        </h2>
        <p className="section-subtitle">
          Transformações reais, de pessoas reais
        </p>

        <div className="depoimentos-grid">
          {testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="depoimento-card"
            >
              <p className="depoimento-text">
                "{testimonial.text}"
              </p>
              <p className="depoimento-author">
                — {testimonial.name}
                {testimonial.role && `, ${testimonial.role}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

