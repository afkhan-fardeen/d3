import { ClientsTabs } from '@/components/clients/ClientsTabs';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { CTASection } from '@/components/home/CTASection';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/clients',
    title: 'Our Clients | D3',
    description: '500+ clients across the GCC trust D3, from government ministries and leading enterprises to retail chains, hospitals and industrial organisations.',
  });
}

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-container">
          <SectionEyebrow>Our Clients</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24, maxWidth: 700 }}>
            500+ organisations trust <em style={{ fontStyle: 'normal', color: 'var(--cta)' }}>D3</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, fontWeight: 400, maxWidth: 600 }}>
            From government ministries to retailers, hospitals and industrial organisations across the GCC and beyond. Building long-term partnerships since 2010.
          </p>
        </div>
      </section>

      <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '40px 0' }}>
        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }} className="section-container">
          {[
            { num: '500+', label: 'Total Clients' },
            { num: '15+', label: 'Years of Trust' },
            { num: '10+', label: 'Countries' },
            { num: '99.9%', label: 'Client Retention' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 36, fontWeight: 400, color: 'var(--heading)', letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>
                <span style={{ color: 'var(--cta)' }}>{s.num}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ClientsTabs />

      <style>{`
        .section-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(24px, 5vw, 80px);
        }
        .clients-tabs-wrap {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(24px, 5vw, 80px);
        }
        @media (max-width: 600px) {
          .section-container,
          .clients-tabs-wrap {
            padding: 0 20px !important;
          }
        }
      `}</style>

      <CTASection />
    </>
  );
}
