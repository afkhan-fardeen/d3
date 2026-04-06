import { CASE_STUDIES, SOLUTIONS } from '@/lib/data';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';
import { CTASection } from '@/components/home/CTASection';
import { Link } from '@/i18n/navigation';

export async function generateMetadata() {
  return {
    title: 'Case Studies | D3',
    description: 'See how D3 has transformed operations for 500+ organisations across the GCC — government, banking, healthcare, retail and logistics.',
  };
}

export default function CaseStudiesListPage() {
  const types = [...new Set(CASE_STUDIES.map((cs) => cs.clientType))];

  return (
    <>
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <SectionEyebrow>Case Studies</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24, maxWidth: 700 }}>
            Real results for real <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>clients</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, fontWeight: 300, maxWidth: 600 }}>
            See how D3 has transformed workforce management, queues, security and operations for organisations across the GCC.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="cs-list-grid">
            {CASE_STUDIES.map((cs, i) => (
              <RevealOnScroll key={cs.slug} delay={i % 3 * 80}>
                <Link href={`/case-studies/${cs.slug}` as Parameters<typeof Link>[0]['href']} style={{
                  display: 'block',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 20, padding: '32px 28px', textDecoration: 'none',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                  className="cs-list-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6,
                      background: 'var(--bg-surface)', color: 'var(--muted)',
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>{cs.clientType}</span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--heading)', marginBottom: 16 }}>{cs.clientName}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Challenge</div>
                  <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, marginBottom: 20 }}>{cs.problem}</div>
                  <div style={{ padding: '14px 16px', background: 'var(--bg-surface)', borderRadius: 10, border: '1px solid var(--border)', marginBottom: 24 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Result</div>
                    <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.5 }}>{cs.result}</div>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>
                    Read full case study <ArrowIcon size={13} />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .cs-list-grid { grid-template-columns: repeat(3, 1fr); }
          .cs-list-card:hover { transform: translateY(-5px); box-shadow: 0 12px 48px rgba(0,0,0,0.08); }
          @media (max-width: 1100px) { .cs-list-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 700px) { .cs-list-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTASection />
    </>
  );
}
