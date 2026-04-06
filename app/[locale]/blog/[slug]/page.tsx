import { notFound } from 'next/navigation';
import { BLOG_POSTS, SOLUTIONS } from '@/lib/data';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { ArrowIcon } from '@/components/shared/Button';
import { CTASection } from '@/components/home/CTASection';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

const BLOG_RELATED_SOLUTIONS: Record<string, string[]> = {
  'top-5-benefits-biometric-attendance': ['time-attendance-system', 'timetech-application'],
  'queue-management-government-sector': ['queue-management-system'],
  'rfid-asset-tracking-manufacturing': ['rfid-asset-tracking'],
  'choosing-hr-software-bahrain': ['hr-payroll-software', 'timetech-application'],
};

const BLOG_FULL_CONTENT: Record<string, string[]> = {
  'top-5-benefits-biometric-attendance': [
    'Biometric attendance systems have become the gold standard for workforce management across the GCC. Unlike traditional punch cards or PIN-based systems, biometric solutions use unique physical characteristics — fingerprints, facial features or iris patterns — to verify identity. This eliminates buddy punching entirely.',
    '1. Elimination of Time Theft: Studies show that traditional attendance methods allow up to 8% of payroll to be lost to time theft. With biometric verification, every clock-in is authentic, saving organisations significant payroll costs.',
    '2. LMRA Compliance: Bahrain\'s Labour Market Regulatory Authority (LMRA) requires accurate employee records. Biometric systems provide tamper-proof timestamps that satisfy audit requirements.',
    '3. Real-Time Visibility: Managers see live attendance across all locations on a single dashboard — no more waiting for end-of-day reports or manually consolidating data from multiple sites.',
    '4. Payroll Accuracy: Automated integration between attendance data and payroll eliminates manual entry errors. Many D3 clients report reducing payroll processing time by 60-70% after implementation.',
    '5. Employee Accountability: When employees know that their attendance is accurately tracked, punctuality improves. D3 clients typically see a 15-20% reduction in late arrivals within the first month of deployment.',
  ],
  'queue-management-government-sector': [
    'Queue management has become a strategic priority for Bahrain\'s government sector. Long wait times at ministries and service centres damage citizen satisfaction and create a negative perception of public services.',
    'The rise of smart queue systems — particularly those integrating with WhatsApp — has fundamentally changed how government organisations approach service delivery. Citizens can now join virtual queues from their mobile phones before leaving home.',
    'At the Ministry of Interior, D3\'s Queue Management System reduced average wait times from 45 minutes to under 12 minutes. The system\'s live analytics dashboard allows managers to deploy counter staff in real time based on queue demand.',
    'The WhatsApp virtual queue feature has been particularly transformative. Citizens receive automated updates when their turn approaches, eliminating the need to sit in a waiting area. For ministries serving thousands of visitors daily, this represents a significant improvement in service quality.',
    'Looking ahead, AI-powered queue prediction will allow ministries to anticipate peak periods and pre-allocate resources. D3 is already piloting these capabilities with select government clients.',
  ],
  'rfid-asset-tracking-manufacturing': [
    'For large manufacturing and industrial organisations, asset tracking is not just an operational convenience — it\'s a financial imperative. ALBA, one of the world\'s largest aluminium smelters, was losing an estimated BHD 120,000 annually to asset loss and misplacement before implementing D3\'s RFID tracking system.',
    'RFID (Radio Frequency Identification) technology allows assets to be tracked automatically without line-of-sight scanning. This is critical in industrial environments where manual barcode scanning is impractical.',
    'Implementation requires three key components: RFID tags attached to each asset, handheld readers for mobile scanning and cycle counts, and fixed readers at key choke points — entrances, loading bays and storage areas.',
    'The software layer is equally important. D3\'s asset management platform provides a real-time dashboard showing asset locations, maintenance schedules, depreciation values and audit compliance status.',
    'For companies considering RFID implementation, the key success factors are: tagging standards (UHF vs HF), read range requirements, integration with existing ERP systems, and change management for staff who will be using the handheld scanners.',
  ],
  'choosing-hr-software-bahrain': [
    'Choosing the right HR software for a Bahrain-based business involves considerations that go beyond typical global evaluations. Local compliance, Arabic language support and GCC payroll regulations are non-negotiable requirements that many international platforms fail to address adequately.',
    'LMRA Integration: Any HR system deployed in Bahrain must be able to generate reports compliant with the Labour Market Regulatory Authority\'s requirements. This includes accurate headcount by nationality, contract type and department.',
    'WPS Compliance: The Wage Protection System (WPS) requires employers to submit salary transfer files in a specific format. Your HR software should generate these files automatically, eliminating the risk of non-compliance penalties.',
    'Arabic Language Support: For GCC businesses, full Arabic-language interfaces are essential — not just for Arabic-speaking employees, but for government audit submissions and official documents.',
    'GOSI Calculation: The General Organisation for Social Insurance (GOSI) deductions must be calculated automatically based on employee nationality and salary structure. Errors in GOSI calculations are a common source of compliance penalties.',
    'Cloud vs On-Premise: Many government and banking clients in Bahrain require on-premise deployment for data sovereignty reasons. Ensure your chosen vendor supports this deployment model.',
    'D3\'s TimeTech HR module was built specifically for the GCC market, addressing all of these requirements from day one. It includes pre-built integrations with Bahraini government portals and supports Arabic-English bilingual operation throughout.',
  ],
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | D3 Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedSolSlugs = BLOG_RELATED_SOLUTIONS[slug] || [];
  const relatedSolutions = relatedSolSlugs.map((s) => SOLUTIONS.find((sol) => sol.slug === s)).filter(Boolean) as typeof SOLUTIONS;
  const content = BLOG_FULL_CONTENT[slug] || [post.excerpt];
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', textDecoration: 'none', fontWeight: 500, marginBottom: 24 }}>← Back to Blog</Link>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {post.tags.map((tag) => (
              <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: 'var(--bg-surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{tag}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, color: 'var(--heading)', marginBottom: 20, maxWidth: 800 }}>
            {post.title}
          </h1>
          <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · D3 Team
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80, alignItems: 'start' }} className="blog-detail-grid">
            <article>
              <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, marginBottom: 32, fontStyle: 'italic' }}>{post.excerpt}</p>
              {content.map((para, i) => (
                <p key={i} style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.85, marginBottom: 24, fontWeight: 300 }}>{para}</p>
              ))}

              {relatedSolutions.length > 0 && (
                <div style={{ marginTop: 48, padding: '28px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--heading)', marginBottom: 16 }}>Related Solutions</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {relatedSolutions.map((sol) => (
                      <Link key={sol.slug} href={`/solutions/${sol.slug}` as Parameters<typeof Link>[0]['href']} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '12px 16px', background: 'var(--card)', border: '1px solid var(--border)',
                        borderRadius: 10, textDecoration: 'none', transition: 'all 0.2s',
                      }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--heading)' }}>{sol.title}</span>
                        <ArrowIcon size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px', marginBottom: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--heading)', marginBottom: 16 }}>More Articles</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {otherPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}` as Parameters<typeof Link>[0]['href']} style={{ textDecoration: 'none' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--heading)', lineHeight: 1.4, marginBottom: 4 }}>{p.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>{new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ background: '#1A1A2E', borderRadius: 16, padding: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,53,128,0.15) 0%, transparent 70%)' }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Ready to see it in action?</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Request a live demo with our team.</div>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'var(--cta)', color: '#fff', padding: '10px 18px',
                  borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: 'none',
                }}>
                  Request Demo <ArrowIcon size={12} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
        <style>{`
          .blog-detail-grid { grid-template-columns: 2fr 1fr; }
          @media (max-width: 900px) { .blog-detail-grid { grid-template-columns: 1fr !important; } }
          .section-container { padding: 0 60px; }
          @media (max-width: 600px) { .section-container { padding: 0 20px !important; } }
        `}</style>
      </section>

      <CTASection />
    </>
  );
}
