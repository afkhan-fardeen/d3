import { BLOG_POSTS } from '@/lib/data';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { ArrowIcon } from '@/components/shared/Button';
import { CTASection } from '@/components/home/CTASection';
import { Link } from '@/i18n/navigation';

export async function generateMetadata() {
  return {
    title: 'Blog & Resources | D3',
    description: 'Industry insights, product updates and best practices for enterprise IT from the D3 team — Bahrain and the GCC.',
  };
}

export default function BlogListPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <SectionEyebrow>Resources</SectionEyebrow>
          <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 24, maxWidth: 700 }}>
            Insights & <em style={{ fontStyle: 'normal', color: 'var(--heading)' }}>guides</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--body)', lineHeight: 1.75, fontWeight: 300, maxWidth: 600 }}>
            Industry insights, product updates and best practices from the D3 team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }} className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i % 2 * 80}>
                <Link href={`/blog/${post.slug}` as Parameters<typeof Link>[0]['href']} style={{
                  display: 'block',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 20, padding: '32px 28px', textDecoration: 'none',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                  className="blog-card"
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4, background: 'var(--bg-surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{tag}</span>
                    ))}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font)', fontSize: 20, fontWeight: 700, color: 'var(--heading)', letterSpacing: -0.3, lineHeight: 1.3, marginBottom: 14 }}>{post.title}</h2>
                  <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7, marginBottom: 24 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>
                      Read more <ArrowIcon size={13} />
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-card:hover { transform: translateY(-5px); box-shadow: 0 12px 48px rgba(0,0,0,0.08); }
          @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr !important; } }
          .section-container { padding: 0 60px; }
          @media (max-width: 600px) { .section-container { padding: 0 20px !important; } }
        `}</style>
      </section>

      <CTASection />
    </>
  );
}
