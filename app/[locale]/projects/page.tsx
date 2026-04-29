import type { Metadata } from 'next';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTASection } from '@/components/home/CTASection';
import { ProjectsGallery } from '@/components/projects/ProjectsGallery';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Projects | D3 Digital Data Dimensions',
    description:
      'View D3 project installations across Bahrain and the GCC — queue management systems, time attendance deployments, digital signage, and enterprise IT solutions.',
  };
}

export default function ProjectsPage() {
  return (
    <>
      <section
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
                  fontWeight: 800,
                  letterSpacing: -1.5,
                  lineHeight: 1.08,
                  color: 'var(--heading)',
                  marginBottom: 18,
                }}
              >
                Projects
              </h1>
              <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.75, fontWeight: 300, maxWidth: 680 }}>
                A portfolio of D3 installations across Bahrain and the GCC — including queue management, time attendance, and enterprise IT deployments.
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

