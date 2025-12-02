import Link from 'next/link';
import { Button } from '@template/ui';
import { siteConfig } from '@/site.config';

/**
 * ContactSection apresenta formas de contato e CTA para o visitante falar com o cliente.
 *
 * @example
 * <ContactSection />
 */
export function ContactSection() {
  const contact = siteConfig.contact;
  const whatsappUrl = `https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent(contact.phone.whatsappMessage)}`;

  return (

    <section id="contato" className="contato">
      <div className="contato-container">
        <h2>Vamos Conversar?</h2>
        <p>
          Agende sua aula experimental ou tire suas dúvidas.
          Respondo pessoalmente no WhatsApp.
        </p>

        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
          💬 Falar com Luciano no WhatsApp
        </Link>

        <div className="contato-info">
          {contact.email.primary && (
            <div className="contato-item">
              <strong>📧 E-mail</strong>
              <Link href={`mailto:${contact.email.primary}`} className="contato-cta">
                {contact.email.primary}
              </Link>
            </div>
          )}
          {contact.address.hasPhysicalAddress && (
            <div className="contato-item">
              <strong>📍 Localização</strong>
              <p>{contact.address.city}, {contact.address.state}</p>
            </div>
          )}
          {siteConfig.social.instagram && (
            <div className="contato-item">
              <strong>📱 Instagram</strong>
              <Link href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="contato-cta">
                @lucianogiorgetta
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

