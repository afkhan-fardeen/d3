import { getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeSection } from '@/components/home/MarqueeSection';
import { TrustLogosSection } from '@/components/home/TrustLogosSection';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { TimeTechSection } from '@/components/home/TimeTechSection';
import { WhySection } from '@/components/home/WhySection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'D3 — Digital Data Dimensions | Enterprise IT Solutions Bahrain',
    description: 'D3 delivers enterprise time attendance, HRMS, queue management and digital signage solutions for the GCC. 500+ clients. Built in Bahrain since 2010.',
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', ar: '/ar' },
    },
    openGraph: {
      title: 'D3 — Digital Data Dimensions',
      description: 'Enterprise IT solutions for the GCC — time attendance, HR, queue management, digital signage, RFID and more.',
      locale,
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <TrustLogosSection />
      <SolutionsSection />
      <TimeTechSection />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
