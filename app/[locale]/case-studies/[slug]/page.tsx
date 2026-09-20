import { notFound } from 'next/navigation';
import { CASE_STUDIES, SOLUTIONS } from '@/lib/data';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';
import { CTASection } from '@/components/home/CTASection';
import { Link } from '@/i18n/navigation';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return { title: { absolute: 'Case Study Not Found | D3' } };
  return pageMetadata({
    locale,
    path: `/case-studies/${slug}`,
    title: `${cs.clientName} | D3 Client Case Studies`,
    description: `D3 delivered: ${cs.solution.slice(0, 120)}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const otherProjects = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            <Link href="/case-studies" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', fontWeight: 400 }}>← Client Projects</Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ fontSize: 13, color: 'var(--body)', fontWeight: 400 }}>{cs.clientName}</span>
          </div>
          <span style={{
            display: 'inline-block', fontSize: 10, fontWeight: 400, padding: '3px 12px',
            borderRadius: 100, background: 'var(--bg-surface)', border: '1px solid var(--border)',
            color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20,
          }}>{cs.clientType}</span>
          <h1 style={{
            fontFamily: 'var(--font)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 300,
            letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 0, maxWidth: 700,
          }}>
            {cs.clientName}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80, alignItems: 'start' }} className="cs-detail-grid">

            {/* Main panel */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 400, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                What we delivered
              </div>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '32px 28px',
              }}>
                <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.85, fontWeight: 400, margin: 0 }}>
                  {cs.solution}
                </p>
              </div>

              <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
                <Button href="/contact" variant="primary"><ArrowIcon />Request a Demo</Button>
                <Button href="/case-studies" variant="ghost">All Client Projects</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '24px 20px', position: 'sticky', top: 100,
              }}>
                <div style={{ fontSize: 11, fontWeight: 400, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Project Details</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Client</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: 'var(--heading)' }}>{cs.clientName}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Sector</div>
                    <div style={{ fontSize: 14, fontWeight: 400, color: 'var(--heading)' }}>{cs.sector ?? cs.clientType}</div>
                  </div>
                </div>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                  <Button href="/contact" variant="primary" fullWidth>
                    <ArrowIcon />Talk to us
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

      {/* More projects */}
      {otherProjects.length > 0 && (
        <section style={{ padding: '60px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
            <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>More projects</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="more-cs-grid">
              {otherProjects.map((ocs) => (
                <Link key={ocs.slug} href={`/case-studies/${ocs.slug}` as Parameters<typeof Link>[0]['href']} style={{
                  display: 'block', background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '18px 20px', textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 400, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{ocs.clientType}</div>
                  <div style={{ fontSize: 15, fontWeight: 400, color: 'var(--heading)', marginBottom: 6 }}>{ocs.clientName}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>View project →</div>
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
      )}

      <CTASection />
    </>
  );
}
