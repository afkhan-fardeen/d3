import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { LeadForm } from '@/components/forms/LeadForm';

export async function generateMetadata() {
  return {
    title: 'Contact Us | D3',
    description: 'Get in touch with D3 to request a demo, ask about our solutions or get a proposal. We\'ll respond within 24 hours.',
  };
}

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const ZapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export default function ContactPage() {
  const contacts = [
    { icon: <MapPinIcon />, label: 'Address', value: '22, Bldg 1033, Road 3925, Umm Al Hassam 339, Bahrain' },
    { icon: <PhoneIcon />, label: 'Phone', value: '+973 1333 3445', href: 'tel:+97313333445' },
    { icon: <MailIcon />, label: 'Email', value: 'info@dthree.co', href: 'mailto:info@dthree.co' },
    { icon: <WhatsAppIcon />, label: 'WhatsApp', value: '+973 1333 3445', href: 'https://wa.me/97313333445' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <SectionEyebrow>Contact Us</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24, maxWidth: 700 }}>
            Let&apos;s talk about your <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>project</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, fontWeight: 300, maxWidth: 500 }}>
            Fill in your details and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80, alignItems: 'start' }} className="contact-grid">
            {/* Form */}
            <div>
              <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, letterSpacing: -0.5, color: 'var(--heading)', marginBottom: 32 }}>
                Request a Demo or Consultation
              </h2>
              <LeadForm />
            </div>

            {/* Contact info */}
            <div>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '32px 28px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font)', fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 24 }}>Get in touch</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {contacts.map((c) => (
                    <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: 'var(--bg-highlight)', border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--heading)', flexShrink: 0,
                      }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{c.label}</div>
                        {c.href ? (
                          <a href={c.href} style={{ fontSize: 14, color: 'var(--body)', fontWeight: 500, textDecoration: 'none' }}>{c.value}</a>
                        ) : (
                          <div style={{ fontSize: 14, color: 'var(--body)', fontWeight: 500 }}>{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#1A1A2E', borderRadius: 20, padding: '28px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,53,128,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>
                  <ClockIcon />Office hours
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 6 }}>Sunday — Thursday</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>8:00 AM — 5:00 PM (AST)</div>
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>
                    <ZapIcon /> Typical response: &lt;4 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .contact-grid { grid-template-columns: 2fr 1fr; }
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          .section-container { padding: 0 clamp(24px, 5vw, 80px); }
          @media (max-width: 600px) { .section-container { padding: 0 14px !important; } }
        `}</style>
      </section>
    </>
  );
}
