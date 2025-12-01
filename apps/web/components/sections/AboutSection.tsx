import { siteConfig } from '@/site.config';

/**
 * AboutSection mostra a história e valores da empresa
 */
export function AboutSection() {
  const about = siteConfig.about;

  return (

    <section id="sobre" className="sobre">
      <div className="sobre-container">
        <h2 className="section-title">Do Caos à Quietude</h2>
        <p className="section-subtitle">A jornada de transformação através da prática</p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2013</div>
            <h3 className="timeline-title">O Primeiro Contato</h3>
            <p className="timeline-text">
              Aos 15 anos, por indicação da mãe, experimentei a primeira aula de Yôga.
              Senti mais energia, disposição e rendimento no skate. Foi quando percebi:
              isso funciona de verdade.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2013-2021</div>
            <h3 className="timeline-title">Tatuador & Praticante</h3>
            <p className="timeline-text">
              Durante 8 anos, trabalhei como tatuador profissional (estilo oriental/japonês)
              enquanto praticava Yôga. A filosofia começou a fazer cada vez mais sentido.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2021</div>
            <h3 className="timeline-title">Instrutor de Yôga</h3>
            <p className="timeline-text">
              Transição de carreira. Queria transmitir o que estava vivendo: melhora na
              qualidade de vida, clareza mental, energia constante. Hoje sou Nível 3 pela Humana.
            </p>
          </div>
        </div>

        <div className="stats">
          {about.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">
                {stat.value}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

