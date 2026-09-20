import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeSection } from '@/components/home/MarqueeSection';
import { TrustLogosSection } from '@/components/home/TrustLogosSection';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { WhySection } from '@/components/home/WhySection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '',
    title: 'D3: Digital Data Dimensions | Enterprise IT Solutions Bahrain',
    description: 'D3 delivers enterprise time attendance, HRMS, queue management and digital signage solutions for the GCC. 500+ clients. Built in Bahrain since 2010.',
  });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <TrustLogosSection />
      <SolutionsSection />
      <WhySection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
