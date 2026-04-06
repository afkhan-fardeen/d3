import { notFound } from 'next/navigation';
import { INDUSTRIES, SOLUTIONS, CASE_STUDIES } from '@/lib/data';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';
import { CTASection } from '@/components/home/CTASection';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

const INDUSTRY_SOLUTIONS: Record<string, string[]> = {
  government: ['time-attendance-system', 'hr-payroll-software', 'queue-management-system', 'access-control-system'],
  healthcare: ['time-attendance-system', 'queue-management-system', 'access-control-system', 'rfid-asset-tracking'],
  banking: ['time-attendance-system', 'hr-payroll-software', 'access-control-system', 'queue-management-system'],
  retail: ['erp-retail-management', 'digital-signage', 'rfid-asset-tracking', 'time-attendance-system'],
  logistics: ['rfid-asset-tracking', 'time-attendance-system', 'access-control-system', 'erp-retail-management'],
};

const INDUSTRY_CASE_STUDIES: Record<string, string[]> = {
  government: ['ministry-of-interior-attendance', 'bahrain-airport-cctv'],
  healthcare: ['gulf-air-queue-management'],
  banking: ['bank-of-bahrain-kuwait-hrms'],
  retail: ['jawad-business-erp'],
  logistics: ['alba-rfid-assets'],
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) return { title: 'Industry Not Found' };
  return {
    title: `${ind.title} IT Solutions Bahrain | D3`,
    description: `D3 provides enterprise IT solutions for the ${ind.title} sector — ${ind.desc}`,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) notFound();

  const relatedSolSlugs = INDUSTRY_SOLUTIONS[slug] || [];
  const relatedSolutions = relatedSolSlugs.map((s) => SOLUTIONS.find((sol) => sol.slug === s)).filter(Boolean) as typeof SOLUTIONS;

  const relatedCsSlugs = INDUSTRY_CASE_STUDIES[slug] || [];
  const relatedCaseStudies = relatedCsSlugs.map((s) => CASE_STUDIES.find((cs) => cs.slug === s)).filter(Boolean) as typeof CASE_STUDIES;

  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <SectionEyebrow>Industry</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24, maxWidth: 700 }}>
            Enterprise IT Solutions for <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>{ind.title}</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, fontWeight: 300, maxWidth: 600, marginBottom: 40 }}>
            {ind.desc} — D3 has been delivering purpose-built solutions for the {ind.title.toLowerCase()} sector across the GCC since 2010.
          </p>
          <Button href="/contact" variant="primary"><ArrowIcon />Request a Demo</Button>
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <SectionEyebrow>Industry Challenges</SectionEyebrow>
          <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.15, color: 'var(--heading)', marginBottom: 48 }}>
            What keeps {ind.title.toLowerCase()} leaders up at night
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="challenges-grid">
            {ind.challenges.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 80}>
                <div style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '28px 24px',
                  borderTop: '3px solid var(--border)',
                }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--muted)', marginBottom: 16, fontVariantNumeric: 'tabular-nums' }}>0{i + 1}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--heading)', marginBottom: 10 }}>{c.title}</div>
                  <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65 }}>{c.desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .challenges-grid { grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 900px) { .challenges-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .challenges-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Solutions */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <SectionEyebrow>Recommended Solutions</SectionEyebrow>
          <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.15, color: 'var(--heading)', marginBottom: 48 }}>
            How D3 solves your challenges
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="ind-sol-grid">
            {relatedSolutions.map((sol, i) => (
              <RevealOnScroll key={sol.slug} delay={i * 60}>
                <Link href={`/solutions/${sol.slug}` as Parameters<typeof Link>[0]['href']} style={{
                  display: 'block',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '28px 24px',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                  className="ind-sol-card"
                >
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 10 }}>{sol.title}</div>
                  <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, marginBottom: 16 }}>{sol.desc}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {sol.tags.slice(0, 3).map((tag) => (
                      <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4, background: 'var(--bg-surface)', color: 'var(--muted)' }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>
                    Learn more <ArrowIcon size={13} />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .ind-sol-grid { grid-template-columns: 1fr 1fr; }
          .ind-sol-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.07); }
          @media (max-width: 700px) { .ind-sol-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
            <SectionEyebrow>Case Studies</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.15, color: 'var(--heading)', marginBottom: 48 }}>
              Proven results in {ind.title.toLowerCase()}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: relatedCaseStudies.length === 1 ? '1fr' : '1fr 1fr', gap: 20, maxWidth: relatedCaseStudies.length === 1 ? 600 : '100%' }}>
              {relatedCaseStudies.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}` as Parameters<typeof Link>[0]['href']} style={{
                  display: 'block',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '28px 24px', textDecoration: 'none',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{cs.clientType}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--heading)', marginBottom: 12 }}>{cs.clientName}</div>
                  <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.65, marginBottom: 16 }}>{cs.result}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>
                    Read case study <ArrowIcon size={13} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Industries */}
      <section style={{ padding: '60px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Other industries we serve</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {otherIndustries.map((oi) => (
              <Link key={oi.slug} href={`/industries/${oi.slug}` as Parameters<typeof Link>[0]['href']} style={{
                padding: '10px 20px', background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 100, fontSize: 13, fontWeight: 600, color: 'var(--body)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}>
                {oi.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
