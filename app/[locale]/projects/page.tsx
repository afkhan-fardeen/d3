import type { Metadata } from 'next';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTASection } from '@/components/home/CTASection';
import { ProjectsGallery } from '@/components/projects/ProjectsGallery';
import { pageMetadata } from '@/lib/seo';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/projects',
    title: 'Project Installations Gallery | D3 Digital Data Dimensions',
    description:
      'Photos of live D3 installations across Bahrain and the GCC — queue management kiosks, time attendance devices, digital signage and enterprise IT hardware in the field.',
  });
}

export default function ProjectsPage() {
  return (
    <>
      <section
        className="page-hero"
        style={{
          paddingBlock: 'clamp(80px, 10vh, 130px)',
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container">
          <RevealOnScroll>
            <div style={{ maxWidth: 860 }}>
              <div className="eyebrow">Our Work</div>
              <h1
                style={{
                  fontFamily: 'var(--font)',
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 400,
                  letterSpacing: -1.5,
                  lineHeight: 1.08,
                  color: 'var(--heading)',
                  marginBottom: 18,
                }}
              >
                Projects
              </h1>
              <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.75, fontWeight: 400, maxWidth: 680 }}>
                A photo gallery of D3 installations in the field across Bahrain and the GCC — queue management, time attendance, and enterprise IT deployments. Looking for the client outcomes behind these installations? See our <Link href="/case-studies" style={{ color: 'var(--heading)' }}>Case Studies</Link>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'var(--bg)' }}>
        <div className="container">
          <RevealOnScroll>
            <ProjectsGallery />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}

