import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';

const WHY_ITEMS = [
  {
    num: '01',
    title: 'GCC-first Design',
    text: 'Built for the Gulf — Arabic support, local labour law compliance and GCC regulatory standards built in from day one.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
  {
    num: '02',
    title: '100% Customisable',
    text: 'Fully configurable platforms that integrate with any third-party ERP or existing system — no vendor lock-in, ever.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  },
  {
    num: '03',
    title: 'Cloud & On-Premise',
    text: 'Cloud (AWS), on-server or hybrid — D3 solutions flex to your infrastructure and security requirements without compromise.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    num: '04',
    title: 'Full-Lifecycle Support',
    text: 'From consultancy and implementation to ongoing support — one relationship, one contact, complete peace of mind.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  },
];

export function WhySection() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <SectionEyebrow center>Why D3</SectionEyebrow>
            </div>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, color: 'var(--heading)', marginBottom: 18 }}>
              The D3 <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>difference</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--body)', fontWeight: 300, lineHeight: 1.75, maxWidth: 500, margin: '0 auto' }}>
              We don&apos;t just deliver technology — we deliver outcomes. Here&apos;s what separates us from every other IT vendor in the region.
            </p>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="why-grid">
          {WHY_ITEMS.map((item, i) => (
            <RevealOnScroll key={item.num} delay={i * 80}>
              <div style={{
                padding: '32px 26px', border: '1px solid var(--border)',
                borderRadius: 20, position: 'relative', overflow: 'hidden',
                background: 'var(--card)',
                transition: 'all 0.3s',
              }}
                className="why-card"
              >
                <div className="icon-wrap icon-wrap-md" style={{ marginBottom: 20 }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 8 }}>{item.num}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--heading)', letterSpacing: -0.3, marginBottom: 10 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{item.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .why-grid { grid-template-columns: repeat(4, 1fr); }
        .why-card::before { content:''; position:absolute; top:0; left:0; width:100%; height:2px; background:var(--heading); transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
        .why-card:hover { transform: translateY(-4px); box-shadow: 0 10px 40px rgba(0,0,0,0.07); border-color: var(--border) !important; }
        .why-card:hover::before { transform: scaleX(1); }
        @media (max-width: 1100px) { .why-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
