import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About D3 | Digital Data Dimensions',
    description:
      'Learn about D3 — Digital Data Dimensions, Bahrain-based enterprise IT solutions provider serving the GCC since 2010.',
  };
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

const VALUES = [
  {
    icon: <TargetIcon />,
    title: 'Client-First Always',
    desc: "Our clients' outcomes define our success. Every product decision starts with the question: does this solve a real problem?",
  },
  {
    icon: <EyeIcon />,
    title: 'Transparency',
    desc: 'No hidden fees, no vendor lock-in. We believe honest relationships build better partnerships.',
  },
  {
    icon: <HeartIcon />,
    title: 'Regional Pride',
    desc: 'Built in Bahrain, designed for the Gulf. We are proud to serve the region that shaped us.',
  },
];

const TIMELINE = [
  {
    year: '2010',
    title: 'D3 Founded',
    desc: 'D3 was established in Manama, Bahrain, with a focus on time attendance and HR solutions for local enterprises.',
  },
  {
    year: '2013',
    title: 'Queue Management Launch',
    desc: 'Launched our first government-grade queue management system, deployed at Bahrain ministries.',
  },
  {
    year: '2015',
    title: 'RFID & Digital Signage',
    desc: 'Expanded our portfolio to include RFID asset tracking and LED digital signage solutions.',
  },
  {
    year: '2018',
    title: 'TimeTech Platform',
    desc: 'Released TimeTech — our flagship, fully cloud-based workforce intelligence platform.',
  },
  {
    year: '2021',
    title: 'GCC Expansion',
    desc: 'Grew operations to serve clients across Saudi Arabia, UAE, Kuwait, Oman and Qatar.',
  },
  {
    year: '2024',
    title: '500+ Clients',
    desc: 'Reached a milestone of 500+ active enterprise clients across 10+ countries.',
  },
];

const TEAM = [
  { name: 'Faris Al-Hassan', role: 'Chief Executive Officer', initials: 'FA' },
  { name: 'Sara Mahmood', role: 'Head of Product & Technology', initials: 'SM' },
  { name: 'Khalid Al-Rashidi', role: 'Head of Sales — GCC', initials: 'KR' },
  { name: 'Nadia Yousef', role: 'Head of Customer Success', initials: 'NY' },
];

export default function AboutPage() {
  return (
    <>
      <section style={{ paddingBlock: 'clamp(80px, 10vh, 130px)', paddingInline: 0, background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-mesh" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealOnScroll>
            <div style={{ maxWidth: 700 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  paddingBlock: 6,
                  paddingInline: 14,
                  borderRadius: 100,
                  marginBottom: 28,
                }}
              >
                About D3
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font)',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 5vw, 68px)',
                  lineHeight: 1.06,
                  letterSpacing: -2,
                  color: 'var(--heading)',
                  marginBottom: 24,
                }}
              >
                Built in Bahrain.
                <br />
                <span style={{ color: 'var(--heading)' }}>Trusted globally.</span>
              </h1>
              <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>
                D3 was founded in 2010 with one purpose: to give enterprises in the Middle East access to world-class IT solutions that solve real operational problems.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ gap: 8 }}>
                  Request a Demo <ArrowIcon />
                </Link>
                <Link href="/case-studies" className="btn btn-ghost">
                  View Case Studies
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
              { val: '8', label: 'Product solutions' },
            ].map((stat) => (
              <RevealOnScroll key={stat.label}>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      fontWeight: 800,
                      color: 'var(--heading)',
                      letterSpacing: -1,
                      marginBottom: 6,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    <span style={{ color: 'var(--heading)' }}>{stat.val}</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
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
                    fontWeight: 800,
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
                    D3 — Digital Data Dimensions — was founded in 2010 to provide enterprise IT solutions to small, medium and large businesses across the Middle East and Europe.
                  </p>
                  <p>
                    Our mission has always been to build long-term professional partnerships, not just sell software. Our team brings decades of combined expertise in enterprise IT and business operations.
                  </p>
                </div>

                <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['24/7 dedicated support', 'Full ERP integration capability', 'GCC labour law compliance built-in'].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--body)' }}>
                      <span
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: 'rgba(22,163,74,0.12)',
                          border: '1px solid rgba(22,163,74,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#16a34a',
                          flexShrink: 0,
                        }}
                      >
                        <CheckIcon />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3' }}>
                <PlaceholderImage alt="D3 team at work" width={600} height={450} label="Team / Office photo" style={{ borderRadius: 24 }} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="eyebrow eyebrow-center">Our Values</div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                What drives us every day
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="values-grid">
            {VALUES.map((val, i) => (
              <RevealOnScroll key={val.title} delay={i * 80}>
                <div className="card card-lift card-accent" style={{ padding: '36px 28px' }}>
                  <div className="icon-wrap icon-wrap-md" style={{ marginBottom: 20 }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 10 }}>{val.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{val.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="eyebrow eyebrow-center">Our Journey</div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                15 years of excellence
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            <div style={{ position: 'absolute', insetInlineStart: 30, top: 0, bottom: 0, width: 2, background: 'var(--border)', zIndex: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {TIMELINE.map((item, i) => (
                <RevealOnScroll key={item.year} delay={i * 60}>
                  <div style={{ display: 'flex', gap: 28, position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        flexShrink: 0,
                        borderRadius: '50%',
                        background: i === 0 || i === TIMELINE.length - 1 ? 'var(--heading)' : 'var(--card)',
                        border: `2px solid ${i === 0 || i === TIMELINE.length - 1 ? 'var(--heading)' : 'var(--border)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 800,
                        color: i === 0 || i === TIMELINE.length - 1 ? '#fff' : 'var(--heading)',
                        boxShadow: i === 0 || i === TIMELINE.length - 1 ? '0 4px 20px var(--cta-glow)' : 'none',
                        letterSpacing: -0.5,
                      }}
                    >
                      {item.year}
                    </div>
                    <div style={{ paddingTop: 14 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--heading)', marginBottom: 6 }}>{item.title}</div>
                      <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <div className="eyebrow eyebrow-center">Our Team</div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                The people behind D3
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="team-grid">
            {TEAM.map((member, i) => (
              <RevealOnScroll key={member.name} delay={i * 60}>
                <div className="card card-lift" style={{ padding: '28px 20px', textAlign: 'center' }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'var(--bg-highlight)',
                      border: '3px solid var(--border)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      fontWeight: 700,
                      color: 'var(--muted)',
                      letterSpacing: -0.5,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--heading)', marginBottom: 4 }}>{member.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>{member.role}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
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
                <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: -0.5 }}>Ready to get started?</div>
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
        .values-grid { grid-template-columns: repeat(3, 1fr); }
        .team-grid { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 1024px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
