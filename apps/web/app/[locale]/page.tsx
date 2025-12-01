import { unstable_setRequestLocale } from 'next-intl/server';
import {
  ContactSection,
  HeroSection,
  AboutSection,
  PhilosophySection,
  AulasSection,
  TestimonialsSection,
} from '@/components/sections';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  // Garante que o locale esteja disponível para hooks de tradução
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <AulasSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
