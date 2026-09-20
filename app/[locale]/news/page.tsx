import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { CTASection } from '@/components/home/CTASection';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/news',
    title: 'News & Credentials | D3 Digital Data Dimensions',
    description: 'D3 accreditation certificates and appreciation letters — official recognition from government and enterprise clients across Bahrain and the GCC.',
  });
}

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const ViewIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CertificateIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const LetterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const CERTIFICATES = [
  {
    title: 'HRMS Accreditation Certificate',
    desc: 'Official accreditation certificate for D3\'s HRMS (Human Resource Management System) solution.',
    path: '/assets/certificate/Accredite_certificate_HRMS.pdf',
  },
  {
    title: 'Queue Management System Accreditation Certificate',
    desc: 'Official accreditation certificate for D3\'s Queue Management System (QMS) solution.',
    path: '/assets/certificate/Accredite_certificate_QMS.pdf',
  },
];

const APPRECIATION_LETTERS = [
  {
    title: 'Labour Market Regulatory Authority (LMRA)',
    desc: 'Appreciation letter from the Labour Market Regulatory Authority, Bahrain — recognising D3\'s contribution to workforce management technology.',
    path: '/assets/AppreciationLetter/LMRA.pdf',
  },
  {
    title: 'Survey & Land Registration Bureau (SLRB)',
    desc: 'Appreciation letter from the Survey & Land Registration Bureau, Bahrain — recognising D3\'s IT solutions and services.',
    path: '/assets/AppreciationLetter/SLRB.pdf',
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <SectionEyebrow>News & Credentials</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24, maxWidth: 700 }}>
            Accreditations &amp; <em style={{ fontStyle: 'normal', color: 'var(--cta)' }}>Recognition</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, fontWeight: 400, maxWidth: 560 }}>
            Official accreditation certificates and appreciation letters from government and enterprise clients — recognition of D3&apos;s commitment to quality and excellence since 2010.
          </p>
        </div>
      </section>

      {/* Certificates */}
      <section style={{ padding: '80px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <RevealOnScroll>
            <SectionEyebrow>Certificates</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, letterSpacing: -0.8, color: 'var(--heading)', marginBottom: 40 }}>
              Accreditation Certificates
            </h2>
          </RevealOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {CERTIFICATES.map((cert, i) => (
              <RevealOnScroll key={cert.title} delay={i * 80}>
                <div style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 20, padding: '32px 28px',
                  display: 'flex', flexDirection: 'column', gap: 16, height: '100%',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'var(--bg-highlight)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--cta)',
                  }}>
                    <CertificateIcon />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 400, color: 'var(--heading)', marginBottom: 8, lineHeight: 1.4 }}>{cert.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{cert.desc}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a
                      href={cert.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '9px 16px', borderRadius: 100,
                        background: 'var(--cta)', color: '#fff',
                        fontSize: 13, fontWeight: 400, textDecoration: 'none',
                        letterSpacing: '0.02em', transition: 'opacity 0.2s',
                      }}
                    >
                      <ViewIcon /> View
                    </a>
                    <a
                      href={cert.path}
                      download
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '9px 16px', borderRadius: 100,
                        border: '1.5px solid var(--border)', background: 'transparent',
                        color: 'var(--body)',
                        fontSize: 13, fontWeight: 400, textDecoration: 'none',
                        letterSpacing: '0.02em', transition: 'border-color 0.2s',
                      }}
                    >
                      <DownloadIcon /> Download
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Appreciation Letters */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <RevealOnScroll>
            <SectionEyebrow>Letters</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, letterSpacing: -0.8, color: 'var(--heading)', marginBottom: 40 }}>
              Appreciation Letters
            </h2>
          </RevealOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {APPRECIATION_LETTERS.map((letter, i) => (
              <RevealOnScroll key={letter.title} delay={i * 80}>
                <div style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 20, padding: '32px 28px',
                  display: 'flex', flexDirection: 'column', gap: 16, height: '100%',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'var(--bg-highlight)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--heading)',
                  }}>
                    <LetterIcon />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 400, color: 'var(--heading)', marginBottom: 8, lineHeight: 1.4 }}>{letter.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{letter.desc}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a
                      href={letter.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '9px 16px', borderRadius: 100,
                        background: 'var(--cta)', color: '#fff',
                        fontSize: 13, fontWeight: 400, textDecoration: 'none',
                        letterSpacing: '0.02em', transition: 'opacity 0.2s',
                      }}
                    >
                      <ViewIcon /> View
                    </a>
                    <a
                      href={letter.path}
                      download
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        padding: '9px 16px', borderRadius: 100,
                        border: '1.5px solid var(--border)', background: 'transparent',
                        color: 'var(--body)',
                        fontSize: 13, fontWeight: 400, textDecoration: 'none',
                        letterSpacing: '0.02em', transition: 'border-color 0.2s',
                      }}
                    >
                      <DownloadIcon /> Download
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
