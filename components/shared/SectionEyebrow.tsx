export function SectionEyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
      ...(center ? { justifyContent: 'center' } : {}),
    }}>
      {!center && <span style={{ width: 20, height: 2, background: 'var(--border)', borderRadius: 2, display: 'inline-block', flexShrink: 0 }} />}
      {children}
    </div>
  );
}
