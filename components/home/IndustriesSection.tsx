import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';
import { INDUSTRIES } from '@/lib/data';

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  building: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>,
  heart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  'credit-card': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  'shopping-bag': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  truck: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <SectionEyebrow center>Industries</SectionEyebrow>
            </div>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, color: 'var(--heading)', marginBottom: 18 }}>
              Built for your <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>industry</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--body)', fontWeight: 300, lineHeight: 1.75, maxWidth: 500, margin: '0 auto' }}>
              D3 solutions are deployed across government, banking, healthcare, retail and logistics — with local compliance built in.
            </p>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <RevealOnScroll key={ind.slug} delay={i * 60}>
              <a
                href={`/industries/${ind.slug}`}
                style={{
                  display: 'block',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '28px 20px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                }}
                className="ind-card"
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--bg-highlight)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--nav)' }}>
                  {INDUSTRY_ICONS[ind.icon]}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--heading)', marginBottom: 8 }}>{ind.title}</div>
                <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.6 }}>{ind.desc}</div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .ind-grid { grid-template-columns: repeat(5, 1fr); }
        .ind-card:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(0,0,0,0.07); border-color: var(--heading) !important; }
        @media (max-width: 1100px) { .ind-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 700px) { .ind-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 450px) { .ind-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
