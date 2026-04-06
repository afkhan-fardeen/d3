import { notFound } from 'next/navigation';
import { CASE_STUDIES, SOLUTIONS } from '@/lib/data';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';
import { CTASection } from '@/components/home/CTASection';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

const CS_SOLUTIONS: Record<string, string> = {
  'ministry-of-interior-attendance': 'time-attendance-system',
  'bank-of-bahrain-kuwait-hrms': 'hr-payroll-software',
  'gulf-air-queue-management': 'queue-management-system',
  'bahrain-airport-cctv': 'access-control-system',
  'alba-rfid-assets': 'rfid-asset-tracking',
  'jawad-business-erp': 'erp-retail-management',
};

const CS_SOLUTIONS_DETAIL: Record<string, string> = {
  'ministry-of-interior-attendance': 'TimeTech with biometric terminals, integrated LMRA reporting and a centralised HR dashboard deployed across all 12 Ministry locations in under 6 weeks.',
  'bank-of-bahrain-kuwait-hrms': 'Full TimeTech HRMS deployment with employee self-service portal, payroll engine, WPS compliance and a native mobile app for all staff levels.',
  'gulf-air-queue-management': 'D3 Queue Management System with touchscreen kiosks at check-in counters, WhatsApp virtual queuing, customer satisfaction surveys and a live operations dashboard.',
  'bahrain-airport-cctv': 'Enterprise IP CCTV system covering all terminals and cargo facilities, integrated with biometric access control at 400+ checkpoints managed from a central security operations centre.',
  'alba-rfid-assets': 'RFID asset tracking system covering 15,000+ assets across the ALBA complex, with handheld scanners, fixed readers at key locations and integration with the existing ERP system.',
  'jawad-business-erp': 'Unified ERP platform with real-time inventory sync, electronic shelf labels at all locations, loyalty programme management and a custom analytics dashboard for management.',
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return { title: 'Case Study Not Found' };
  return {
    title: `${cs.clientName} Case Study | D3`,
    description: `How D3 helped ${cs.clientName} — ${cs.result}`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const relatedSolSlug = CS_SOLUTIONS[slug];
  const relatedSol = SOLUTIONS.find((s) => s.slug === relatedSolSlug);
  const solutionDetail = CS_SOLUTIONS_DETAIL[slug] || '';
  const otherCaseStudies = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            <Link href="/case-studies" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', fontWeight: 500 }}>← Case Studies</Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontSize: 13, color: 'var(--body)', fontWeight: 500 }}>{cs.clientName}</span>
          </div>
          <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--muted)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>{cs.clientType}</span>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 0, maxWidth: 700 }}>
            {cs.clientName}
          </h1>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: '#1A1A2E', padding: '32px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)', display: 'flex', gap: 60, flexWrap: 'wrap' }} className="section-container">
          {cs.result.split('.').filter(Boolean).map((r, i) => (
            <div key={i} style={{ color: '#fff' }}>
              <div style={{ fontSize: 13, fontWeight: 300, opacity: 0.8, letterSpacing: '0.04em' }}>{r.trim()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80, alignItems: 'start' }} className="cs-detail-grid">
            <div>
              {/* Challenge */}
              <div style={{ marginBottom: 48 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>The Challenge</div>
                <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--heading)', marginBottom: 20 }}>What {cs.clientName} needed to solve</h2>
                <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, fontWeight: 300 }}>{cs.problem}</p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: 48 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>The D3 Solution</div>
                <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--heading)', marginBottom: 20 }}>How we solved it</h2>
                <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.8, fontWeight: 300 }}>{solutionDetail}</p>
              </div>

              {/* Result */}
              <div style={{ background: 'var(--bg-highlight)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px 28px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--nav)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>The Result</div>
                <p style={{ fontSize: 16, color: 'var(--heading)', lineHeight: 1.8, fontWeight: 400 }}>{cs.result}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '28px 24px', position: 'sticky', top: 100 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Project Details</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Client</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--heading)' }}>{cs.clientName}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Sector</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--heading)' }}>{cs.clientType}</div>
                  </div>
                  {relatedSol && (
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Solution</div>
                      <Link href={`/solutions/${relatedSol.slug}` as Parameters<typeof Link>[0]['href']} style={{ fontSize: 14, fontWeight: 600, color: 'var(--heading)', textDecoration: 'none' }}>
                        {relatedSol.title}
                      </Link>
                    </div>
                  )}
                </div>
                <div style={{ marginTop: 28 }}>
                  <Button href="/contact" variant="primary" fullWidth>
                    <ArrowIcon />Request a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .cs-detail-grid { grid-template-columns: 2fr 1fr; }
          @media (max-width: 900px) { .cs-detail-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* More case studies */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 32 }}>More case studies</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="more-cs-grid">
            {otherCaseStudies.map((ocs) => (
              <Link key={ocs.slug} href={`/case-studies/${ocs.slug}` as Parameters<typeof Link>[0]['href']} style={{
                display: 'block', background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 14, padding: '20px', textDecoration: 'none',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 6 }}>{ocs.clientType}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--heading)', marginBottom: 6 }}>{ocs.clientName}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>Read →</div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .more-cs-grid { grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 900px) { .more-cs-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .more-cs-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTASection />
    </>
  );
}
