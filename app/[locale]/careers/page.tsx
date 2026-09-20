import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTASection } from '@/components/home/CTASection';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/careers',
    title: 'Careers | D3 Digital Data Dimensions',
    description: 'Join the D3 team — IT solutions provider serving GCC enterprises since 2010. View open positions and career opportunities in Bahrain and the GCC.',
  });
}

const ROLES = [
  { title: 'System Administrator', type: 'Full-time', location: 'Bahrain' },
  { title: 'Database Administrator', type: 'Full-time', location: 'Bahrain' },
  { title: 'Software Engineer', type: 'Full-time', location: 'Bahrain' },
  { title: 'Network Engineer (CISCO)', type: 'Full-time', location: 'Bahrain' },
  { title: 'IT Sales Executive', type: 'Full-time', location: 'Bahrain / GCC' },
  { title: 'Technical Support Engineer', type: 'Full-time', location: 'Bahrain' },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <SectionEyebrow>Careers</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24, maxWidth: 700 }}>
            Join <em style={{ fontStyle: 'normal', color: 'var(--cta)' }}>D3</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, fontWeight: 400, maxWidth: 560 }}>
            We are always looking for talented IT professionals to join our team. D3 has been serving GCC enterprises since 2010 — come build with us.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <RevealOnScroll>
            <SectionEyebrow>Open Positions</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, letterSpacing: -0.8, color: 'var(--heading)', marginBottom: 36 }}>
              Current opportunities
            </h2>
          </RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {ROLES.map((role, i) => (
              <RevealOnScroll key={role.title} delay={i * 40}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '20px 28px', flexWrap: 'wrap', gap: 12,
                }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 400, color: 'var(--heading)', marginBottom: 4 }}>{role.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{role.type} · {role.location}</div>
                  </div>
                  <a href="mailto:info@dthree.co?subject=Career Application" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '9px 18px', borderRadius: 100,
                    background: 'var(--cta)', color: '#fff',
                    fontSize: 13, fontWeight: 400, textDecoration: 'none',
                  }}>
                    Apply Now
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={200}>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 32, lineHeight: 1.7 }}>
              Don&apos;t see a suitable role? Send your CV to <a href="mailto:info@dthree.co" style={{ color: 'var(--heading)', fontWeight: 400 }}>info@dthree.co</a> and we&apos;ll keep it on file.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
