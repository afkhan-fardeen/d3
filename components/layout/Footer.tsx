'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1A1A2E"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const SOCIALS = [
  { label: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
  { label: 'Twitter / X', icon: <TwitterIcon />, href: '#' },
  { label: 'Facebook', icon: <FacebookIcon />, href: '#' },
  { label: 'YouTube', icon: <YouTubeIcon />, href: '#' },
];

export function Footer() {
  const t = useTranslations('footer');

  const solutions = [
    { label: 'Time Attendance', href: '/solutions/time-attendance-system' },
    { label: 'HRMS & Payroll', href: '/solutions/timetech-application' },
    { label: 'Queue Management', href: '/solutions/queue-management-system' },
    { label: 'Digital Signage', href: '/solutions/digital-signage' },
    { label: 'RFID Tracking', href: '/solutions/rfid-asset-tracking' },
    { label: 'Access Control', href: '/solutions/access-control-system' },
    { label: 'ERP', href: '/solutions/erp-retail-management' },
  ];

  const company = [
    { label: t('about'), href: '/about' },
    { label: t('ourClients'), href: '/clients' },
    { label: t('partners'), href: '/partners' },
    { label: t('news'), href: '/blog' },
    { label: t('consultancy'), href: '/contact' },
  ];

  const contactItems = [
    { icon: <MapPinIcon />, value: 'Umm Al Hassam, Bahrain' },
    { icon: <PhoneIcon />, value: '+973 1333 3445', href: 'tel:+97313333445' },
    { icon: <MailIcon />, value: 'info@dthree.co', href: 'mailto:info@dthree.co' },
  ];

  return (
    <footer style={{ background: '#1A1A2E', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 0 36px' }}>
      <div className="footer-inner">

        {/* Top grid */}
        <div className="footer-grid">

          {/* Brand col */}
          <div className="footer-brand">
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 16 }}>
              <img src="/d3logo.png" alt="D3 Digital Data Dimensions" style={{ height: 48, width: 'auto', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, maxWidth: 240, fontWeight: 300, marginBottom: 20 }}>
              {t('tagline')}
            </p>
            {/* Contact inline */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {contactItems.map((item) => (
                <li key={item.value} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0, display: 'flex' }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 400 }}>{item.value}</a>
                  ) : (
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="footer-heading">{t('solutions')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link href={s.href as Parameters<typeof Link>[0]['href']} className="footer-link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">{t('company')}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href as Parameters<typeof Link>[0]['href']} className="footer-link">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA col */}
          <div className="footer-cta-col">
            <h4 className="footer-heading">Get Started</h4>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: 20 }}>
              Ready to transform your workforce management? Talk to our team today.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--cta)', color: '#fff',
              padding: '11px 22px', borderRadius: 100,
              fontSize: 13, fontWeight: 700, textDecoration: 'none',
              letterSpacing: '0.02em', transition: 'background 0.2s, transform 0.2s',
              whiteSpace: 'nowrap',
            }}>
              Request Demo →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} <strong style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>D3 — Digital Data Dimensions.</strong> All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            {SOCIALS.map((soc) => (
              <a key={soc.label} href={soc.href} aria-label={soc.label} style={{
                width: 34, height: 34,
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.4)',
                transition: 'border-color 0.2s, color 0.2s',
              }}>
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 80px);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
          align-items: start;
        }
        .footer-heading {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 18px;
          font-family: var(--font);
        }
        .footer-link {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          font-weight: 400;
          transition: color 0.2s;
          display: inline-block;
        }
        .footer-link:hover { color: rgba(255,255,255,0.75); }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .footer-inner { padding: 0 20px; }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px 24px;
          }
          .footer-brand { grid-column: 1 / -1; }
          .footer-cta-col { grid-column: 1 / -1; }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
        }

        @media (max-width: 380px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
