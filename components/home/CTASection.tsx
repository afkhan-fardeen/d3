import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { Button, ArrowIcon } from '@/components/shared/Button';

export function CTASection() {
  return (
    <section className="section-pad-sm" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{
            background: '#1A1A2E',
            borderRadius: 28,
            padding: 'clamp(32px, 6vw, 72px) clamp(24px, 6vw, 80px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 48,
            position: 'relative',
            overflow: 'hidden',
          }}
            className="cta-inner"
          >
            {/* Glow effects */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,33,71,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -100, left: '30%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,43,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Get started today</div>
              <div style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.12, color: '#fff', marginBottom: 14 }}>
                Ready to <em style={{ fontStyle: 'normal', color: 'var(--cta)' }}>transform</em><br />your operations?
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', fontWeight: 300, maxWidth: 400, lineHeight: 1.7 }}>
                Schedule a live demo and see how D3 can streamline your workforce, queues and infrastructure from day one.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1, flexShrink: 0 }}>
              <Button href="/contact" variant="orange">
                <ArrowIcon />
                Request a Demo
              </Button>
              <Button href="/contact" variant="outline-white">
                Get in touch
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        .cta-inner { flex-direction: row; }
        @media (max-width: 900px) {
          .cta-inner { flex-direction: column !important; padding: 48px 32px !important; }
        }
        @media (max-width: 600px) {
          .cta-inner { padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  );
}
