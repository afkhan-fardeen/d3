import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Link } from '@/i18n/navigation';
import { CTASection } from '@/components/home/CTASection';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Technology Partners | D3',
    description: "D3's technology partners — strategic alliances with leading global IT companies.",
  };
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function HandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  );
}
function CpuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="6" height="6" />
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}
function CloudIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

const PARTNERS = [
  {
    name: 'Microsoft',
    category: 'Cloud & Software',
    logo: null,
    desc: 'Certified Microsoft partner for Azure cloud deployments, Office 365 integration and enterprise software licensing.',
    type: 'Technology Alliance',
  },
  {
    name: 'HikVision',
    category: 'CCTV & Security',
    logo: null,
    desc: 'Official HikVision distributor and integrator for enterprise-grade IP cameras, NVR systems and access control.',
    type: 'Distributor',
  },
  {
    name: 'ZKTeco',
    category: 'Biometrics',
    logo: null,
    desc: 'Authorised ZKTeco partner for fingerprint, face and RFID biometric terminals across the GCC.',
    type: 'Technology Alliance',
  },
  {
    name: 'Cisco',
    category: 'Networking',
    logo: null,
    desc: 'Cisco network infrastructure for enterprise deployments — from core switches to wireless access points.',
    type: 'Technology Alliance',
  },
  {
    name: 'Samsung',
    category: 'Digital Signage',
    logo: null,
    desc: 'Samsung SMART Signage platform partner for indoor and outdoor LED display solutions.',
    type: 'Distributor',
  },
  {
    name: 'AWS',
    category: 'Cloud Hosting',
    logo: null,
    desc: 'Amazon Web Services partner for cloud-hosted TimeTech deployments with Middle East region availability.',
    type: 'Technology Alliance',
  },
];

const PARTNERSHIP_BENEFITS = [
  'Revenue sharing on qualified referrals',
  'Access to D3 product training and certification',
  'Co-marketing opportunities across GCC',
  'Dedicated partner success manager',
  'Priority technical support for joint clients',
  'Early access to new product features',
];

export default function PartnersPage() {
  return (
    <>
      <section style={{ paddingBlock: 'clamp(80px, 10vh, 130px)', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-mesh" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealOnScroll>
            <div style={{ maxWidth: 680 }}>
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
                Partners
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font)',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  lineHeight: 1.06,
                  letterSpacing: -2,
                  color: 'var(--heading)',
                  marginBottom: 24,
                }}
              >
                Strategic technology
                <br />
                <span style={{ color: 'var(--heading)' }}>alliances</span>
              </h1>
              <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, maxWidth: 520 }}>
                D3 works with leading global technology companies to deliver best-in-class integrated solutions to our clients.
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
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, letterSpacing: -1, color: 'var(--heading)', marginTop: 8 }}>
                Our technology alliances
              </h2>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="partners-grid">
            {PARTNERS.map((partner, i) => (
              <RevealOnScroll key={partner.name} delay={(i % 3) * 80}>
                <div className="card card-lift card-accent" style={{ padding: '32px 28px' }}>
                  <div style={{ marginBottom: 20 }}>
                    <PlaceholderImage
                      alt={`${partner.name} logo`}
                      width={160}
                      height={60}
                      label={partner.name}
                      style={{ borderRadius: 8, maxWidth: 160, height: 60 }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        background: 'var(--bg-surface)',
                        color: 'var(--muted)',
                        padding: '3px 10px',
                        borderRadius: 100,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {partner.type}
                    </span>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {partner.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 8 }}>{partner.name}</h3>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{partner.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="partner-cta-grid">
            <RevealOnScroll>
              <div>
                <div className="eyebrow">Become a Partner</div>
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
                  Interested in a partnership?
                </h2>
                <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.75, marginBottom: 28 }}>
                  We&apos;re always looking for technology partners, consultancies and resellers to expand our reach across the GCC and beyond.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                  {PARTNERSHIP_BENEFITS.map((benefit) => (
                    <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--body)' }}>
                      <span
                        style={{
                          width: 22,
                          height: 22,
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
                      {benefit}
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn btn-primary" style={{ gap: 8 }}>
                  Get in touch <ArrowIcon />
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: <HandshakeIcon />, title: 'Referral Partners', desc: 'Refer clients to D3 and earn commissions on successful deployments.' },
                  { icon: <CpuIcon />, title: 'Technology Integrators', desc: 'Build on top of D3 platforms with our open API and integration kit.' },
                  { icon: <CloudIcon />, title: 'Reseller Partners', desc: 'License and resell D3 products with full support from our team.' },
                ].map((type) => (
                  <div key={type.title} className="card" style={{ padding: '24px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div className="icon-wrap icon-wrap-md" style={{ flexShrink: 0 }}>
                      {type.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--heading)', marginBottom: 6 }}>{type.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.65 }}>{type.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .partners-grid { grid-template-columns: repeat(3, 1fr); }
        .partner-cta-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 1024px) {
          .partners-grid { grid-template-columns: 1fr 1fr !important; }
          .partner-cta-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          .partners-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
