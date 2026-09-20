import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: '/sitemap',
    title: 'Sitemap | D3 Digital Data Dimensions',
    description: 'Complete sitemap for D3 — Digital Data Dimensions website.',
  });
}

const SITEMAP = [
  {
    section: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About D3', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    section: 'Solutions',
    links: [
      { label: 'Time Attendance — Enterprise', href: '/solutions/time-attendance-enterprise' },
      { label: 'Time Attendance — Standard', href: '/solutions/time-attendance-system' },
      { label: 'TimeTech Application', href: '/solutions/timetech-application' },
      { label: 'HRMS', href: '/solutions/hr-payroll-software' },
      { label: 'Visitor Management System', href: '/solutions/visitor-management' },
      { label: 'Queue Management System', href: '/solutions/queue-management-system' },
      { label: 'Digital Signage & Displays', href: '/solutions/digital-signage' },
      { label: 'RFID & Asset Tracking', href: '/solutions/rfid-asset-tracking' },
      { label: 'IP CCTV & Access Control', href: '/solutions/access-control-system' },
      { label: 'ERP & Retail Management', href: '/solutions/erp-retail-management' },
      { label: 'IT Consultancy', href: '/solutions/consultancy' },
    ],
  },
  {
    section: 'Company',
    links: [
      { label: 'Our Clients', href: '/clients' },
      { label: 'Partners', href: '/partners' },
      { label: 'Projects', href: '/projects' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'News & Credentials', href: '/news' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    section: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="page-hero" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <SectionEyebrow>Navigation</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24 }}>
            Sitemap
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 40 }}>
            {SITEMAP.map((group) => (
              <div key={group.section}>
                <h2 style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>{group.section}</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href as Parameters<typeof Link>[0]['href']}
                        style={{ fontSize: 14, color: 'var(--body)', textDecoration: 'none', fontWeight: 400, transition: 'color 0.15s' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
