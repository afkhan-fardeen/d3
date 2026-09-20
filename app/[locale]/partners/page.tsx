import Image from 'next/image';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTASection } from '@/components/home/CTASection';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/partners',
    title: 'Technology Partners | D3',
    description: "D3's technology partners — strategic alliances with leading global IT companies.",
  });
}

const PARTNERS: { name: string; logoSrc: string; logoWidth?: number; logoHeight?: number }[] = [
  { name: 'ACT Qatar',    logoSrc: '/images/partners/act-qatar.jpg' },
  { name: 'TimeTech',     logoSrc: '/images/partners/timetech.png', logoWidth: 400, logoHeight: 100 },
  { name: 'Synel',        logoSrc: '/images/partners/synel.jpg' },
  { name: 'iM',           logoSrc: '/images/partners/im.jpg' },
  { name: 'Nord',         logoSrc: '/images/partners/nord.jpg' },
  { name: 'DataLogic',    logoSrc: '/images/partners/datalogic.jpg' },
  { name: 'Etisalcom',    logoSrc: '/images/partners/etisalcom.jpg' },
  { name: 'Remedi',       logoSrc: '/images/partners/remedi.png' },
];

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBlock: 'clamp(80px, 10vh, 130px)', background: 'var(--bg)' }}>
        <div className="hero-mesh" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealOnScroll>
            <div style={{ maxWidth: 680 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--bg-surface)', border: '1px solid var(--border)',
                color: 'var(--muted)', fontSize: 11, fontWeight: 400,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                paddingBlock: 6, paddingInline: 14, borderRadius: 100, marginBottom: 28,
              }}>
                Partners
              </div>
              <h1 style={{
                fontFamily: 'var(--font)', fontWeight: 400,
                fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.06,
                letterSpacing: -2, color: 'var(--heading)', marginBottom: 24,
              }}>
                Our technology<br />
                <span style={{ color: 'var(--heading)' }}>partners</span>
              </h1>
              <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, maxWidth: 520 }}>
                D3 works with leading technology companies to deliver best-in-class integrated solutions to our clients across Bahrain and the GCC.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="eyebrow eyebrow-center">Technology Partners</div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                Our partners
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="partners-grid">
            {PARTNERS.map((partner, i) => (
              <RevealOnScroll key={partner.name} delay={(i % 4) * 60}>
                <div className="card card-lift" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: '100%', height: 80,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--bg)', borderRadius: 8, border: '1px solid var(--border)',
                    overflow: 'hidden',
                  }}>
                      <Image
                      src={partner.logoSrc}
                      alt={`${partner.name} logo`}
                      width={partner.logoWidth ?? 180}
                      height={partner.logoHeight ?? 60}
                      style={{ maxHeight: 60, width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 400, color: 'var(--heading)', textAlign: 'center', margin: 0 }}>{partner.name}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .partners-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 1024px) { .partners-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
        @media (max-width: 700px) { .partners-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 400px) { .partners-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
