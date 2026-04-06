'use client';

const LOGOS = [
  { name: 'Ministry of Interior', abbr: 'MOI', sector: 'Gov' },
  { name: 'Ministry of Works', abbr: 'MOW', sector: 'Gov' },
  { name: 'Bahrain Airport Co.', abbr: 'BAC', sector: 'Aviation' },
  { name: 'Ministry of Health', abbr: 'MOH', sector: 'Gov' },
  { name: 'ALBA', abbr: 'ALBA', sector: 'Industry' },
  { name: 'Gulf Air', abbr: 'GFA', sector: 'Aviation' },
  { name: 'Batelco', abbr: 'BTC', sector: 'Telecom' },
  { name: 'Nass Corporation', abbr: 'NSS', sector: 'Industry' },
  { name: 'Jawad Business Group', abbr: 'JBG', sector: 'Retail' },
  { name: 'GFH Financial Group', abbr: 'GFH', sector: 'Finance' },
  { name: 'Bank of Bahrain & Kuwait', abbr: 'BBK', sector: 'Banking' },
  { name: 'National Bank of Bahrain', abbr: 'NBB', sector: 'Banking' },
  { name: 'Ithmaar Bank', abbr: 'ITH', sector: 'Banking' },
  { name: 'Ibn Al Nafees Hospital', abbr: 'IAN', sector: 'Health' },
  { name: 'Al Moayyed Group', abbr: 'AMG', sector: 'Industry' },
  { name: 'Bahrain Petroleum Co.', abbr: 'BAPCO', sector: 'Energy' },
];

const SECTOR_COLORS: Record<string, { bg: string; text: string }> = {
  Gov:      { bg: 'rgba(0,33,71,0.09)',   text: '#002147' },
  Banking:  { bg: 'rgba(0,53,128,0.09)',  text: '#003580' },
  Industry: { bg: 'rgba(30,42,69,0.09)',  text: '#1E2A45' },
  Finance:  { bg: 'rgba(0,53,128,0.08)',  text: '#003580' },
  Aviation: { bg: 'rgba(0,33,71,0.09)',   text: '#002147' },
  Telecom:  { bg: 'rgba(30,42,69,0.09)',  text: '#1E2A45' },
  Retail:   { bg: 'rgba(0,33,71,0.08)',   text: '#002147' },
  Health:   { bg: 'rgba(0,53,128,0.08)',  text: '#003580' },
  Energy:   { bg: 'rgba(14,40,80,0.09)',  text: '#0e2850' },
};

function LogoCard({ logo }: { logo: (typeof LOGOS)[0] }) {
  const col = SECTOR_COLORS[logo.sector] || SECTOR_COLORS.Gov;
  return (
    <div className="tl-card">
      <div className="tl-abbr" style={{ background: col.bg, color: col.text }}>
        {logo.abbr}
      </div>
      <div className="tl-name">{logo.name}</div>
    </div>
  );
}

/* Duplicate logos for seamless infinite scroll */
const TRACK = [...LOGOS, ...LOGOS];

export function TrustLogosSection() {
  return (
    <section className="tl-section">
      <div className="container">
        <p className="tl-label">Trusted by leading organisations across the region</p>
      </div>

      <div className="tl-slider" aria-label="Client logos">
        <div className="tl-track" aria-hidden="true">
          {TRACK.map((logo, i) => (
            <LogoCard key={`${logo.abbr}-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      <style>{`
        .tl-section {
          background: var(--bg-surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 44px 0;
          overflow: hidden;
        }
        .tl-label {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 32px;
        }
        .tl-slider {
          position: relative;
          width: 100%;
          overflow: hidden;
          /* fade edges */
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .tl-track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: tl-scroll 38s linear infinite;
        }
        .tl-slider:hover .tl-track { animation-play-state: paused; }
        @keyframes tl-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tl-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px 16px;
          flex-shrink: 0;
          min-width: 170px;
          transition: border-color 0.2s;
          cursor: default;
        }
        .tl-card:hover { border-color: var(--muted); }
        .tl-abbr {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-align: center;
          flex-shrink: 0;
          line-height: 1.1;
        }
        .tl-name {
          font-size: 12px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 110px;
        }
        @media (prefers-reduced-motion: reduce) {
          .tl-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
