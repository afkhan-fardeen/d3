import Image from 'next/image';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/about',
    title: 'About D3 | Digital Data Dimensions',
    description:
      'Learn about D3 (Digital Data Dimensions), Bahrain-based enterprise IT solutions provider serving the GCC since 2010.',
  });
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" stroke="currentColor" fill="none" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke="currentColor"
      />
    </svg>
  );
}

const MVV = [
  {
    imgSrc: '/images/about/mission.png',
    title: 'Mission',
    desc: 'To help customers achieve their business objectives by providing innovative and best-in-class IT solutions and services. To be the No.1 solution provider with the best after-sales support.',
  },
  {
    imgSrc: '/images/about/vision.png',
    title: 'Vision',
    desc: 'To be recognised as a top company for providing IT solutions.',
  },
  {
    imgSrc: '/images/about/values.png',
    title: 'Values',
    desc: 'Leading change, integrity, respect for the individual, excellence, learning and sharing.',
  },
];

const EXPERTISE = [
  'Time Attendance & HRMS solutions for GCC enterprises',
  'Queue Management Systems for government and enterprise',
  'RFID asset and document tracking',
  'Digital Signage and LED display systems',
  'IP CCTV surveillance and Access Control',
  'ERP and Retail Management systems',
  'IT Consultancy and outsourced staffing',
  'Operations across Middle East and Europe',
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBlock: 'clamp(80px, 10vh, 130px)', paddingInline: 0, background: 'var(--bg)' }}>
        <div className="hero-mesh" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealOnScroll>
            <div style={{ maxWidth: 700 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--bg-surface)', border: '1px solid var(--border)',
                color: 'var(--muted)', fontSize: 11, fontWeight: 400,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                paddingBlock: 6, paddingInline: 14, borderRadius: 100, marginBottom: 28,
              }}>
                About D3
              </div>
              <h1 style={{
                fontFamily: 'var(--font)', fontWeight: 400,
                fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.06,
                letterSpacing: -2, color: 'var(--heading)', marginBottom: 24,
              }}>
                Built in Bahrain.<br />
                <span style={{ color: 'var(--heading)' }}>Trusted globally.</span>
              </h1>
              <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
                D3 was founded in 2010 with one purpose: to give enterprises in the Middle East access to world-class IT solutions that solve real operational problems.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ gap: 8 }}>
                  Request a Demo <ArrowIcon />
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Get in touch
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', paddingBlock: 48 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(40px, 8vw, 100px)', flexWrap: 'wrap' }}>
            {[
              { val: '15+', label: 'Years of experience' },
              { val: '500+', label: 'Enterprise clients' },
              { val: '10+', label: 'Countries served' },
            ].map((stat) => (
              <RevealOnScroll key={stat.label}>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      fontWeight: 400,
                      color: 'var(--heading)',
                      letterSpacing: -1,
                      marginBottom: 6,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    <span style={{ color: 'var(--heading)' }}>{stat.val}</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-story-grid">
            <RevealOnScroll>
              <div>
                <div className="eyebrow">Our Story</div>
                <h2
                  style={{
                    fontFamily: 'var(--font)',
                    fontSize: 'clamp(26px, 3vw, 42px)',
                    fontWeight: 400,
                    letterSpacing: -1,
                    color: 'var(--heading)',
                    marginBottom: 20,
                    lineHeight: 1.15,
                  }}
                >
                  A partnership, not just a vendor.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--body)', fontSize: 15, lineHeight: 1.75 }}>
                  <p>
                    D3 (Digital Data Dimensions) was founded in 2010 to provide enterprise IT solutions to small, medium and large businesses across the Middle East and Europe.
                  </p>
                  <p>
                    Our mission has always been to build long-term professional partnerships, not just sell software. Our team brings decades of combined expertise in enterprise IT and business operations.
                  </p>
                </div>

              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div style={{
                borderRadius: 24, background: 'var(--bg-surface)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 'clamp(48px, 8vw, 96px)',
                aspectRatio: '4/3',
              }}>
                <Image
                  src="/d3logo.png"
                  alt="D3 Digital Data Dimensions"
                  width={320}
                  height={200}
                  style={{ width: '80%', maxWidth: 320, height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="eyebrow eyebrow-center">Mission · Vision · Values</div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                What drives us every day
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="values-grid">
            {MVV.map((val, i) => (
              <RevealOnScroll key={val.title} delay={i * 80}>
                <div className="card card-lift card-accent" style={{ padding: '40px 32px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                    <Image
                      src={val.imgSrc}
                      alt={val.title}
                      width={108}
                      height={108}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 400, color: 'var(--heading)', marginBottom: 12 }}>{val.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.75, fontWeight: 400 }}>{val.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="eyebrow eyebrow-center">Our Journey</div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                15+ years of excellence
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <div style={{ maxWidth: 700, margin: '0 auto', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 24, padding: 'clamp(32px, 5vw, 56px)', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
                {[
                  { year: '2010', label: 'Founded in Manama, Bahrain' },
                  { year: '15+', label: 'Years serving the GCC' },
                  { year: '500+', label: 'Enterprise clients' },
                  { year: '10+', label: 'Countries served' },
                ].map((item) => (
                  <div key={item.year} style={{ textAlign: 'center', minWidth: 120 }}>
                    <div style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: 'var(--cta)', letterSpacing: -1, lineHeight: 1 }}>{item.year}</div>
                    <div style={{ fontSize: 13, color: 'var(--body)', marginTop: 6, fontWeight: 400, lineHeight: 1.4 }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.75, marginTop: 32, maxWidth: 500, margin: '32px auto 0' }}>
                Founded 2010 in Bahrain · 15+ years serving the GCC · 500+ enterprise clients · Operations in Middle East and Europe.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="eyebrow eyebrow-center">Our Expertise</div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                Why work with D3
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14, maxWidth: 960, margin: '0 auto' }}>
              {EXPERTISE.map((item) => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '14px 18px',
                  fontSize: 14, fontWeight: 400, color: 'var(--body)',
                }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(22,163,74,0.12)', border: '1px solid rgba(22,163,74,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#16a34a',
                  }}>
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ background: '#1A1A2E', borderRadius: 24, padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 300,
                  height: 300,
                  background: 'radial-gradient(circle, rgba(0,33,71,0.06) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 28, fontWeight: 400, color: '#fff', marginBottom: 12, letterSpacing: -0.5 }}>Ready to get started?</div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 28, maxWidth: 420, margin: '0 auto 28px' }}>
                  Talk to our team and discover how D3 can transform your enterprise operations.
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-primary" style={{ gap: 8 }}>
                    Request a Demo <ArrowIcon />
                  </Link>
                  <Link href="/clients" className="btn btn-outline-white">
                    Meet our clients
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <style>{`
        .about-story-grid { grid-template-columns: 1fr 1fr; }
        .values-grid { grid-template-columns: repeat(3, 1fr); align-items: stretch; }
        .values-grid > * { height: 100%; }

        @media (max-width: 1024px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .values-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
