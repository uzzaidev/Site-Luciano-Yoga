import { siteConfig } from '@/site.config';

/**
 * PhilosophySection mostra a filosofia Samkhya/Tantra de forma acessível
 */
export function PhilosophySection() {
  return (

    <section id="filosofia" className="filosofia">
      <div className="filosofia-container">
        <h2 className="section-title">
          Filosofia Acessível
        </h2>

        <div className="filosofia-quote">
          "Não sou um guru inalcançável. Sou alguém que já trilhou o caminho e agora ensina o mapa."
        </div>

        <div className="filosofia-grid">
          <div className="filosofia-card">
            <h3>
              Samkhya & Tantra
            </h3>
            <p>
              Trabalho com a linhagem Samkhya Tantra: naturalista, não místico,
              focado em liberdade e autoconhecimento. Nada de dogmas ou repressão.
            </p>
          </div>

          <div className="filosofia-card">
            <h3>
              Didática Clara
            </h3>
            <p>
              Consigo transmitir conceitos complexos de forma acessível.
              Filosofia profunda, mas sem complicação. Para pessoas reais, com vidas reais.
            </p>
          </div>

          <div className="filosofia-card">
            <h3>
              Mente como Ferramenta
            </h3>
            <p>
              O objetivo não é esvaziar a mente, mas aprender a usá-la.
              Que ela não te domine, mas que você a use para o que importa.
            </p>
          </div>

          <div className="filosofia-card">
            <h3>
              Corpo & Energia
            </h3>
            <p>
              Yôga não é só alongamento. É trabalhar corpo, mente e energia de forma integrada.
              Resultado: mais disposição, clareza e qualidade de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

