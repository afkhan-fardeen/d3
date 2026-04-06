import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="22" height="14" rx="2"/><path d="M16 2H8a2 2 0 0 0-2 2v2h12V4a2 2 0 0 0-2-2z"/>
      <circle cx="17" cy="13" r="1"/>
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.5 7.5H22l-6.5 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 1.5 9.5H9.5z"/>
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
function SmartphoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );
}
function BarChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  );
}

const MODULES = [
  { key: 'attendance', label: 'Time Attendance', icon: <ClockIcon />, desc: 'Biometric, face and card-based punch with real-time dashboards.' },
  { key: 'hr', label: 'HR & Payroll', icon: <WalletIcon />, desc: 'Full payroll engine, leave management, appraisals and WPS compliance.' },
  { key: 'visitor', label: 'Visitor Management', icon: <BadgeIcon />, desc: 'Reception kiosk, pre-registration and badge printing.' },
  { key: 'selfService', label: 'Self-Service Portal', icon: <UserIcon />, desc: 'Employee portal for leave requests, payslips and HR updates.' },
  { key: 'mobile', label: 'Mobile App', icon: <SmartphoneIcon />, desc: 'iOS & Android app for remote punch, approvals and HR on the go.' },
  { key: 'analytics', label: 'Analytics', icon: <BarChartIcon />, desc: 'Real-time dashboards and exportable reports for management.' },
];

export function TimeTechSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{ maxWidth: 700, marginBottom: 60 }}>
            <SectionEyebrow>TimeTech Application</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, color: 'var(--heading)', marginBottom: 18 }}>
              Complete workforce management<br />powered by <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>TimeTech</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--body)', fontWeight: 400, lineHeight: 1.75 }}>
              Time attendance, HR & payroll, visitor management, mobile self-service and real-time analytics — all in one unified application built for the GCC.
            </p>
          </div>
        </RevealOnScroll>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }} className="timetech-grid">
          {MODULES.map((mod, i) => (
            <RevealOnScroll key={mod.key} delay={i * 50}>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '28px 24px',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
                className="timetech-card"
              >
                <div className="icon-wrap icon-wrap-md" style={{ marginBottom: 16 }}>
                  {mod.icon}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--heading)', marginBottom: 8 }}>{mod.label}</div>
                <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.6 }}>{mod.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button href="/solutions/timetech-application" variant="primary">
              <ArrowIcon />
              Request TimeTech Demo
            </Button>
            <Button href="/solutions/timetech-application" variant="ghost">
              View all features
            </Button>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        .timetech-grid { grid-template-columns: repeat(3, 1fr); }
        .timetech-card:hover { transform: translateY(-4px); border-color: var(--heading) !important; }
        @media (max-width: 900px) { .timetech-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .timetech-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
