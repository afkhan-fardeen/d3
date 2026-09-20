import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/privacy-policy',
    title: 'Privacy Policy | D3 Digital Data Dimensions',
    description: 'D3 Privacy Policy — how we collect, use and protect your personal information.',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: 'var(--muted)' }}>Last updated: January 2024</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontSize: 15, color: 'var(--body)', lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 400, color: 'var(--heading)', marginBottom: 12 }}>1. Introduction</h2>
              <p>D3 — Digital Data Dimensions (&quot;D3&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use and protect information when you use our website or services.</p>
            </div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 400, color: 'var(--heading)', marginBottom: 12 }}>2. Information We Collect</h2>
              <p>We may collect personal information that you provide to us when you submit enquiries, request a demo, or contact us — including your name, email address, phone number and company name. We also collect standard web analytics data (page views, browser type, referring URLs).</p>
            </div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 400, color: 'var(--heading)', marginBottom: 12 }}>3. How We Use Your Information</h2>
              <p>We use your information to respond to enquiries, provide requested services, send relevant communications about our products and services, and improve our website. We do not sell your personal information to third parties.</p>
            </div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 400, color: 'var(--heading)', marginBottom: 12 }}>4. Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction.</p>
            </div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 400, color: 'var(--heading)', marginBottom: 12 }}>5. Contact Us</h2>
              <p>For questions about this Privacy Policy, please contact us at <a href="mailto:info@dthree.co" style={{ color: 'var(--heading)', fontWeight: 400 }}>info@dthree.co</a> or write to us at: 22, Bldg 1033, Road 3925, Umm Al Hassam 339, Bahrain.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
