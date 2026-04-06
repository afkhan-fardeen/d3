import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Link } from '@/i18n/navigation';
import { SOLUTIONS } from '@/lib/data';

/* ── Placeholder images — SVG scenes per solution ── */
const PLACEHOLDERS: Record<string, React.ReactNode> = {
  'timetech-application': (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" fill="var(--bg-highlight)"/>
      <rect x="30" y="30" width="120" height="140" rx="12" fill="var(--card)" stroke="var(--border)"/>
      <rect x="46" y="52" width="88" height="8" rx="4" fill="var(--border)"/>
      <rect x="46" y="68" width="60" height="6" rx="3" fill="var(--bg-surface)"/>
      <rect x="46" y="88" width="88" height="40" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
      <circle cx="62" cy="108" r="10" fill="var(--nav)" opacity=".15"/>
      <rect x="78" y="102" width="44" height="6" rx="3" fill="var(--border)"/>
      <rect x="78" y="112" width="30" height="5" rx="2" fill="var(--bg-highlight)"/>
      <rect x="46" y="138" width="40" height="20" rx="10" fill="var(--nav)" opacity=".8"/>
      <rect x="94" y="138" width="40" height="20" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
      <rect x="180" y="24" width="150" height="72" rx="10" fill="var(--card)" stroke="var(--border)"/>
      <rect x="194" y="38" width="60" height="7" rx="3" fill="var(--border)"/>
      <rect x="194" y="52" width="40" height="6" rx="3" fill="var(--bg-surface)"/>
      <rect x="194" y="66" width="122" height="18" rx="4" fill="var(--bg-surface)"/>
      <rect x="180" y="108" width="68" height="68" rx="10" fill="var(--card)" stroke="var(--border)"/>
      <text x="214" y="150" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--heading)" opacity=".7">98%</text>
      <rect x="258" y="108" width="72" height="68" rx="10" fill="var(--card)" stroke="var(--border)"/>
      <rect x="268" y="122" width="52" height="5" rx="2" fill="var(--border)"/>
      <rect x="268" y="132" width="35" height="5" rx="2" fill="var(--bg-surface)"/>
      <rect x="268" y="142" width="52" height="24" rx="4" fill="var(--bg-highlight)"/>
    </svg>
  ),
  'time-attendance-system': (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" fill="var(--bg-highlight)"/>
      <rect x="40" y="28" width="280" height="144" rx="14" fill="var(--card)" stroke="var(--border)"/>
      <rect x="56" y="46" width="100" height="8" rx="4" fill="var(--border)"/>
      <rect x="56" y="62" width="65" height="6" rx="3" fill="var(--bg-surface)"/>
      <rect x="56" y="82" width="248" height="1" fill="var(--border)"/>
      {[0,1,2,3].map(r => (
        <g key={r}>
          <circle cx="72" cy={104 + r * 22} r="10" fill="var(--bg-surface)" stroke="var(--border)"/>
          <rect x="90" y={99 + r * 22} width="70" height="5" rx="2" fill="var(--border)"/>
          <rect x="90" y={108 + r * 22} width="45" height="4" rx="2" fill="var(--bg-highlight)"/>
          <rect x="242" y={101 + r * 22} width="46" height="14" rx="7" fill={r < 3 ? 'rgba(22,163,74,0.12)' : 'var(--bg-surface)'} stroke={r < 3 ? 'rgba(22,163,74,0.2)' : 'var(--border)'}/>
          <rect x="252" y={105 + r * 22} width="26" height="5" rx="2" fill={r < 3 ? 'rgba(22,163,74,0.5)' : 'var(--border)'}/>
        </g>
      ))}
    </svg>
  ),
  'queue-management-system': (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" fill="var(--bg-highlight)"/>
      {/* Kiosk */}
      <rect x="130" y="20" width="100" height="160" rx="14" fill="var(--card)" stroke="var(--border)"/>
      <rect x="144" y="36" width="72" height="96" rx="8" fill="var(--bg-surface)"/>
      <text x="180" y="88" textAnchor="middle" fontSize="28" fontWeight="800" fill="var(--heading)" opacity=".6">A-047</text>
      <rect x="154" y="98" width="52" height="22" rx="11" fill="var(--nav)" opacity=".8"/>
      <rect x="152" y="145" width="56" height="8" rx="4" fill="var(--border)"/>
      <rect x="160" y="160" width="40" height="6" rx="3" fill="var(--bg-highlight)"/>
      {/* Counter display */}
      <rect x="30" y="60" width="86" height="54" rx="10" fill="var(--card)" stroke="var(--border)"/>
      <rect x="40" y="72" width="40" height="5" rx="2" fill="var(--border)"/>
      <text x="73" y="105" textAnchor="end" fontSize="20" fontWeight="800" fill="var(--heading)" opacity=".65">3</text>
      <rect x="242" y="60" width="86" height="54" rx="10" fill="var(--card)" stroke="var(--border)"/>
      <rect x="252" y="72" width="40" height="5" rx="2" fill="var(--border)"/>
      <text x="315" y="105" textAnchor="end" fontSize="20" fontWeight="800" fill="var(--heading)" opacity=".65">11</text>
    </svg>
  ),
  'digital-signage': (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" fill="var(--bg-highlight)"/>
      <rect x="30" y="28" width="220" height="130" rx="12" fill="var(--heading)" opacity=".88"/>
      <rect x="42" y="40" width="196" height="106" rx="6" fill="var(--bg-surface)" opacity=".08"/>
      <rect x="52" y="52" width="90" height="7" rx="3" fill="white" opacity=".5"/>
      <rect x="52" y="65" width="60" height="6" rx="3" fill="white" opacity=".3"/>
      <rect x="52" y="82" width="176" height="50" rx="6" fill="white" opacity=".06"/>
      <rect x="62" y="92" width="80" height="6" rx="3" fill="white" opacity=".4"/>
      <rect x="62" y="104" width="56" height="5" rx="2" fill="white" opacity=".25"/>
      <rect x="52" y="115" width="50" height="18" rx="9" fill="var(--nav)" opacity=".8"/>
      <rect x="140" y="166" width="20" height="8" rx="2" fill="var(--border)"/>
      <rect x="100" y="174" width="100" height="4" rx="2" fill="var(--border)"/>
      {/* Vertical signage */}
      <rect x="270" y="36" width="60" height="110" rx="10" fill="var(--card)" stroke="var(--border)"/>
      <rect x="278" y="48" width="44" height="76" rx="6" fill="var(--bg-highlight)"/>
      <rect x="284" y="60" width="32" height="5" rx="2" fill="var(--border)"/>
      <rect x="284" y="70" width="22" height="4" rx="2" fill="var(--bg-surface)"/>
      <rect x="290" y="130" width="20" height="6" rx="3" fill="var(--border)"/>
    </svg>
  ),
  'rfid-asset-tracking': (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" fill="var(--bg-highlight)"/>
      <rect x="30" y="24" width="180" height="152" rx="14" fill="var(--card)" stroke="var(--border)"/>
      <rect x="46" y="40" width="80" height="7" rx="3" fill="var(--border)"/>
      <rect x="46" y="55" width="148" height="1" fill="var(--border)"/>
      {[0,1,2,3,4].map(r => (
        <g key={r}>
          <rect x="46" y={65 + r * 24} width="8" height="8" rx="2" fill={r < 4 ? 'rgba(22,163,74,0.4)' : '#f59e0b'} opacity=".8"/>
          <rect x="62" y={66 + r * 24} width="60" height="5" rx="2" fill="var(--border)"/>
          <rect x="62" y={75 + r * 24} width="38" height="4" rx="2" fill="var(--bg-surface)"/>
          <rect x="136" y={65 + r * 24} width="40" height="12" rx="6" fill="var(--bg-surface)" stroke="var(--border)"/>
        </g>
      ))}
      {/* RFID tag */}
      <rect x="228" y="28" width="102" height="64" rx="12" fill="var(--card)" stroke="var(--border)"/>
      <rect x="240" y="40" width="40" height="6" rx="3" fill="var(--border)"/>
      <rect x="240" y="52" width="28" height="5" rx="2" fill="var(--bg-surface)"/>
      <rect x="240" y="64" width="78" height="18" rx="5" fill="var(--bg-highlight)"/>
      {/* Signal rings */}
      <circle cx="290" cy="130" r="16" fill="none" stroke="var(--nav)" strokeWidth="1.5" opacity=".3"/>
      <circle cx="290" cy="130" r="28" fill="none" stroke="var(--nav)" strokeWidth="1" opacity=".2"/>
      <circle cx="290" cy="130" r="40" fill="none" stroke="var(--nav)" strokeWidth="1" opacity=".1"/>
      <circle cx="290" cy="130" r="8" fill="var(--nav)" opacity=".6"/>
    </svg>
  ),
  'access-control-system': (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" fill="var(--bg-highlight)"/>
      {/* Camera */}
      <rect x="40" y="40" width="120" height="80" rx="12" fill="var(--card)" stroke="var(--border)"/>
      <circle cx="100" cy="80" r="22" fill="var(--bg-highlight)" stroke="var(--border)"/>
      <circle cx="100" cy="80" r="14" fill="var(--heading)" opacity=".15"/>
      <circle cx="100" cy="80" r="7" fill="var(--heading)" opacity=".4"/>
      <rect x="122" y="72" width="24" height="16" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
      <rect x="56" y="136" width="88" height="6" rx="3" fill="var(--border)"/>
      {/* Access panel */}
      <rect x="188" y="28" width="132" height="144" rx="14" fill="var(--card)" stroke="var(--border)"/>
      <rect x="202" y="44" width="104" height="7" rx="3" fill="var(--border)"/>
      <circle cx="254" cy="88" r="24" fill="rgba(22,163,74,0.1)" stroke="rgba(22,163,74,0.25)"/>
      <path d="M244 88l8 8 14-14" stroke="rgba(22,163,74,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="210" y="124" width="88" height="12" rx="6" fill="var(--bg-surface)"/>
      <rect x="210" y="144" width="88" height="12" rx="6" fill="var(--bg-highlight)"/>
    </svg>
  ),
  'erp-retail-management': (
    <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="200" fill="var(--bg-highlight)"/>
      {/* Dashboard */}
      <rect x="30" y="24" width="300" height="152" rx="14" fill="var(--card)" stroke="var(--border)"/>
      <rect x="46" y="40" width="268" height="1" fill="var(--border)"/>
      <rect x="46" y="52" width="80" height="7" rx="3" fill="var(--border)"/>
      {/* 4 metric boxes */}
      {[0,1,2,3].map(c => (
        <g key={c}>
          <rect x={46 + c * 68} y={70} width="58" height="46" rx="8" fill="var(--bg-surface)" stroke="var(--border)"/>
          <rect x={54 + c * 68} y={80} width="32" height="5" rx="2" fill="var(--border)"/>
          <rect x={54 + c * 68} y={94} width="22" height="12" rx="4" fill={c === 0 ? 'var(--nav)' : 'var(--bg-highlight)'} opacity={c === 0 ? '.7' : '1'}/>
        </g>
      ))}
      {/* Bar chart */}
      <rect x="46" y="128" width="268" height="36" rx="6" fill="var(--bg-surface)"/>
      {[40,65,52,80,72,58,90,68].map((h, i) => (
        <rect key={i} x={56 + i * 30} y={152 - h * 0.26} width="20" height={h * 0.26} rx="3" fill={i === 6 ? 'var(--nav)' : 'var(--border)'} opacity=".7"/>
      ))}
    </svg>
  ),
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
              <SectionEyebrow center>What We Offer</SectionEyebrow>
            </div>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: -1.2, lineHeight: 1.1, color: 'var(--heading)', marginBottom: 16 }}>
              Enterprise solutions for<br />every operational need
            </h2>
            <p style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
              From workforce management and queue systems to RFID tracking, digital signage and ERP — D3 delivers end-to-end technology for GCC enterprises.
            </p>
          </div>
        </RevealOnScroll>

        <div className="sol-grid">
          {SOLUTIONS.map((sol, i) => (
            <RevealOnScroll key={sol.slug} delay={i * 50}>
              <SolutionCard sol={sol} />
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style>{`
        .sol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) { .sol-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px)  { .sol-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function SolutionCard({ sol }: { sol: (typeof SOLUTIONS)[0] }) {
  return (
    <a
      href={`/solutions/${sol.slug}`}
      className="sol-card"
      style={{ textDecoration: 'none' }}
    >
      {/* Placeholder image area */}
      <div className="sol-img">
        {PLACEHOLDERS[sol.slug] ?? (
          <svg viewBox="0 0 360 200" fill="none"><rect width="360" height="200" fill="var(--bg-highlight)"/></svg>
        )}
      </div>

      {/* Card body */}
      <div className="sol-body">
        <div className="sol-num">{sol.num}</div>
        <h3 className="sol-title">{sol.title}</h3>
        <p className="sol-desc">{sol.desc}</p>

        <div className="sol-tags">
          {sol.tags.slice(0, 3).map(tag => (
            <span key={tag} className="sol-tag">{tag}</span>
          ))}
        </div>

        <div className="sol-link">
          Learn more <ArrowIcon />
        </div>
      </div>

      <style>{`
        .sol-card {
          display: flex;
          flex-direction: column;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .sol-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(0,33,71,0.09);
          border-color: var(--muted);
        }
        .sol-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: var(--bg-highlight);
          flex-shrink: 0;
        }
        .sol-img svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .sol-body {
          padding: 24px 26px 26px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .sol-num {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .sol-title {
          font-family: var(--font);
          font-size: 17px;
          font-weight: 700;
          color: var(--heading);
          letter-spacing: -0.3px;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .sol-desc {
          font-size: 13px;
          color: var(--body);
          line-height: 1.68;
          margin-bottom: 18px;
          flex: 1;
        }
        .sol-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .sol-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--muted);
          letter-spacing: 0.02em;
        }
        .sol-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--muted);
          transition: color 0.2s;
        }
        .sol-card:hover .sol-link { color: var(--heading); }
      `}</style>
    </a>
  );
}
