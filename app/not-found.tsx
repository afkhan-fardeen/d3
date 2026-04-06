'use client';

import Link from 'next/link';

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

const QUICK_LINKS = [
  { label: 'TimeTech Platform', href: '/en/solutions/timetech-application' },
  { label: 'Queue Management', href: '/en/solutions/queue-management-system' },
  { label: 'Request a Demo', href: '/en/contact' },
  { label: 'Case Studies', href: '/en/case-studies' },
];

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingInline: 'clamp(20px, 5vw, 60px)',
      paddingBlock: 80,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font)',
      textAlign: 'center',
    }}>
      {/* Mesh bg */}
      <div className="hero-mesh" aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 580 }}>
        {/* Large 404 */}
        <div style={{
          fontSize: 'clamp(100px, 20vw, 200px)',
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: -8,
          marginBottom: 32,
          userSelect: 'none',
          background: 'linear-gradient(135deg, var(--heading) 0%, var(--border) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          404
        </div>

        {/* Orange dot */}
        <div style={{
          width: 48, height: 48,
          borderRadius: '50%',
          background: 'var(--cta)',
          margin: '0 auto 28px',
          boxShadow: '0 0 32px var(--cta-glow)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>

        <h1 style={{
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: 800,
          color: 'var(--heading)',
          letterSpacing: -0.5,
          marginBottom: 14,
        }}>
          Page not found
        </h1>
        <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.7, marginBottom: 40, maxWidth: 420, margin: '0 auto 40px' }}>
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
        </p>

        {/* Primary action */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <Link
            href="/en"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--cta)', color: '#fff',
              padding: '12px 24px', borderRadius: 8,
              fontSize: 14, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 20px var(--cta-glow)',
              transition: 'background 0.2s, transform 0.15s',
            }}
            className="btn-404-primary"
          >
            <HomeIcon />
            Back to home
          </Link>
          <Link
            href="/en/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--bg-surface)', color: 'var(--body)',
              padding: '12px 24px', borderRadius: 8,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              border: '1px solid var(--border)',
              transition: 'all 0.2s',
            }}
            className="btn-404-ghost"
          >
            Contact us
          </Link>
        </div>

        {/* Quick links */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '24px 28px',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
            Popular pages
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 12px', borderRadius: 8, textDecoration: 'none',
                  fontSize: 14, fontWeight: 500, color: 'var(--body)',
                  transition: 'background 0.15s, color 0.15s',
                }}
                className="quick-link"
              >
                {link.label}
                <span style={{ color: 'var(--muted)', display: 'flex' }}><ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .btn-404-primary:hover { background: var(--cta-hover) !important; transform: translateY(-2px); }
        .btn-404-ghost:hover { color: var(--heading) !important; border-color: var(--muted) !important; }
        .quick-link:hover { background: var(--bg-highlight) !important; color: var(--heading) !important; }
      `}</style>
    </div>
  );
}
