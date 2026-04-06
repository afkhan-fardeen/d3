export function MarqueeSection() {
  const items = [
    'Time Attendance', 'HRMS & Payroll', 'Queue Management', 'Digital Signage',
    'RFID Tracking', 'IP CCTV', 'Access Control', 'ERP Solutions',
    'Visitor Management', 'Inventory Management', 'Electronic Shelf Labels', 'Consultancy',
  ];

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-surface)',
      overflow: 'hidden',
      padding: '20px 0',
    }}>
      <div style={{
        display: 'flex', gap: 56,
        animation: 'marqueeScroll 30s linear infinite',
        width: 'max-content',
      }}
        className="marquee-track"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap',
          }}>
            {item}
            <span style={{ width: 4, height: 4, background: 'var(--border)', borderRadius: '50%', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
