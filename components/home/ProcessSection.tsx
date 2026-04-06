import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: 'We analyse your requirements, existing systems and compliance needs in a structured scoping session.' },
  { num: '02', title: 'Solution Design', desc: 'Custom configuration planning, ERP integration mapping and project timeline sign-off.' },
  { num: '03', title: 'Implementation', desc: 'Rapid deployment with full testing, staff training, data migration and go-live support.' },
  { num: '04', title: 'Ongoing Support', desc: 'Dedicated account manager, SLA-backed helpdesk and continuous platform updates.' },
];

export function ProcessSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <SectionEyebrow center>How we work</SectionEyebrow>
            </div>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, color: 'var(--heading)', marginBottom: 0 }}>
              From consultation to <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>go-live</em>
            </h2>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }} className="process-grid">
          {/* Connector line */}
          <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'var(--border)', zIndex: 0 }} className="process-line" />

          {PROCESS_STEPS.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i * 100}>
              <div style={{ padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--heading)' : 'var(--card)',
                  border: `2px solid ${i === 0 ? 'var(--heading)' : 'var(--border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 28px',
                  fontSize: 18, fontWeight: 800,
                  color: i === 0 ? '#fff' : 'var(--heading)',
                  boxShadow: i === 0 ? '0 4px 20px rgba(0,33,71,0.15)' : 'none',
                  transition: 'all 0.3s',
                }}>
                  {step.num}
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--heading)', marginBottom: 12 }}>{step.title}</div>
                <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 600px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
