import { z } from 'zod';

/**
 * Tipos comuns usados em todo o projeto
 */

// === CONTATO ===
export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

// === REDES SOCIAIS ===
export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  github?: string;
}

// === CONFIGURAÇÃO DE SITE ===
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone?: string;
    whatsapp?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country?: string;
    };
  };
  social?: SocialLinks;
}

// === NAVEGAÇÃO ===
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// === IMAGEM ===
export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// === CTA (Call to Action) ===
export interface CTA {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}
