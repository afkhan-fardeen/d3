import { Link } from '@/i18n/navigation';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'orange' | 'outline-white';
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
}

const styles: Record<string, React.CSSProperties> = {
  primary: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'var(--cta)', color: '#fff', padding: '13px 28px',
    borderRadius: 100, fontSize: 14, fontWeight: 700,
    textDecoration: 'none', letterSpacing: '0.02em',
    border: 'none', cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
  },
  ghost: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    color: '#fff', padding: '13px 28px',
    borderRadius: 100, fontSize: 14, fontWeight: 700,
    textDecoration: 'none', border: 'none',
    background: 'var(--heading)', cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)', letterSpacing: '0.02em',
  },
  orange: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    background: 'var(--cta)', color: '#fff', padding: '14px 32px',
    borderRadius: 100, fontSize: 14, fontWeight: 700,
    textDecoration: 'none', letterSpacing: '0.03em',
    border: 'none', cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)', whiteSpace: 'nowrap',
  },
  'outline-white': {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: 'transparent', color: 'rgba(255,255,255,0.75)', padding: '13px 28px',
    borderRadius: 100, fontSize: 14, fontWeight: 500,
    textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.2)',
    cursor: 'pointer', transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)', whiteSpace: 'nowrap', letterSpacing: '0.02em',
  },
};

export function Button({ href, onClick, variant = 'primary', children, type = 'button', disabled, fullWidth }: ButtonProps) {
  const s = { ...styles[variant], ...(fullWidth ? { width: '100%', justifyContent: 'center' } : {}) };
  if (href) {
    return (
      <Link href={href as Parameters<typeof Link>[0]['href']} style={s}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={{ ...s, opacity: disabled ? 0.6 : 1 }}>
      {children}
    </button>
  );
}

export function ArrowIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
