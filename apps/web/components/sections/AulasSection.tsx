import Link from 'next/link';
import { Button } from '@template/ui';
import { siteConfig } from '@/site.config';

/**
 * AulasSection mostra os tipos de aulas disponíveis
 */
export function AulasSection() {
  const services = siteConfig.services;

  return (

    <section id="aulas" className="aulas">
      <div className="aulas-container">
        <h2 className="section-title">
          Aulas & Serviços
        </h2>
        <p className="section-subtitle">
          Encontre o formato que funciona para você
        </p>

        <div className="aulas-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="aula-card"
            >
              <div className="aula-icon">
                {service.icon}
              </div>
              <h3>
                {service.title}
              </h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

