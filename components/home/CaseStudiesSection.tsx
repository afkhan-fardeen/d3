import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';
import { CASE_STUDIES } from '@/lib/data';

const TYPE_COLORS: Record<string, string> = {
  Government: '#003580',
  Banking: '#1E3A5F',
  Aviation: '#1A3A4A',
  Private: '#2D4A22',
  Healthcare: '#4A1A2A',
  Retail: '#3A2A0A',
  Logistics: '#1A3A3A',
  Industrial: '#2A2A1A',
};

export function CaseStudiesSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <SectionEyebrow>Case Studies</SectionEyebrow>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, color: 'var(--heading)', marginBottom: 0 }}>
                Real results for real <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>clients</em>
              </h2>
            </div>
            <Button href="/case-studies" variant="ghost">View all case studies</Button>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="cs-grid">
          {CASE_STUDIES.map((cs, i) => (
            <RevealOnScroll key={cs.slug} delay={i % 3 * 80}>
              <a
                href={`/case-studies/${cs.slug}`}
                style={{
                  display: 'block',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '28px 24px',
                  textDecoration: 'none',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                className="cs-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6,
                    background: `${TYPE_COLORS[cs.clientType] || '#003580'}22`,
                    color: TYPE_COLORS[cs.clientType] || '#003580',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                  }}>{cs.clientType}</span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 12 }}>{cs.clientName}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Challenge</div>
                <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, marginBottom: 20 }}>{cs.problem}</div>
                <div style={{ padding: '12px 16px', background: 'var(--bg-surface)', borderRadius: 10, border: '1px solid var(--border)', marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Outcome</div>
                  <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.5 }}>{cs.result}</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--heading)' }}>
                  Read case study <ArrowIcon size={13} />
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .cs-grid { grid-template-columns: repeat(3, 1fr); }
        .cs-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        @media (max-width: 1100px) { .cs-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 700px) { .cs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
