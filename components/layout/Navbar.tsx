'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { ThemeToggle } from './ThemeToggle';

/* ── ICONS ── */
const ClockSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const UsersSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const MonitorSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
const LayersSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
const ShieldSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const BriefcaseSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
const BuildingSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const HeartSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const CreditSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
const BagSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const TruckSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const InfoSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const FileTextSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
const HandshakeSVG = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>;
const ChevronDownSVG = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const ChevronRightSVG = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const MenuSVG = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const CloseSVG = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const GlobeSVG = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const ArrowSVG = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

/* ── DATA ── */

/* TimeTech platform has grouped sub-items */
const TIMETECH_ITEMS = [
  {
    group: 'Time Attendance',
    items: [
      { slug: 'time-attendance-system', label: 'Standard', desc: 'Cloud biometric attendance for SMEs' },
      { slug: 'timetech-application', label: 'Enterprise', desc: 'Multi-site, multi-company, auto-shift' },
    ],
  },
  {
    group: 'HR & Payroll',
    items: [
      { slug: 'hr-payroll-software', label: 'Standard', desc: 'Core payroll, leave & WPS export' },
      { slug: 'timetech-application', label: 'Enterprise', desc: 'Full HRMS, appraisal & recruitment' },
    ],
  },
  {
    group: 'Visitor Management',
    items: [
      { slug: 'timetech-application', label: 'Visitor Management', desc: 'Reception kiosk, appointments & access cards' },
    ],
  },
];

const SOLUTIONS = [
  { slug: 'timetech-application', label: 'TimeTech Platform', desc: 'Complete workforce intelligence suite' },
  { slug: 'queue-management-system', label: 'Queue Management', desc: 'WhatsApp virtual queuing & kiosk' },
  { slug: 'rfid-asset-tracking', label: 'RFID & Asset Tracking', desc: 'Real-time asset visibility' },
  { slug: 'access-control-system', label: 'Access Control & CCTV', desc: 'IP surveillance & biometric doors' },
  { slug: 'digital-signage', label: 'Digital Signage', desc: 'LED & managed display networks' },
  { slug: 'erp-retail-management', label: 'ERP & Retail', desc: 'Inventory, POS & ESL management' },
];

const INDUSTRIES = [
  { slug: 'government', label: 'Government', icon: <BuildingSVG /> },
  { slug: 'healthcare', label: 'Healthcare', icon: <HeartSVG /> },
  { slug: 'banking', label: 'Banking & Finance', icon: <CreditSVG /> },
  { slug: 'retail', label: 'Retail', icon: <BagSVG /> },
  { slug: 'logistics', label: 'Logistics', icon: <TruckSVG /> },
];

const COMPANY = [
  { href: '/about', label: 'About D3', desc: 'Our story and mission', icon: <InfoSVG /> },
  { href: '/clients', label: 'Clients', desc: '500+ organisations', icon: <UsersSVG /> },
  { href: '/case-studies', label: 'Case Studies', desc: 'Real-world results', icon: <FileTextSVG /> },
  { href: '/partners', label: 'Partners', desc: 'Technology alliances', icon: <HandshakeSVG /> },
  { href: '/blog', label: 'Blog', desc: 'Industry insights', icon: <FileTextSVG /> },
];

type MenuKey = 'solutions' | 'industries' | 'company' | null;

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
export function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const otherLocale = locale === 'en' ? 'ar' : 'en';

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close mobile on route change */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const openMenu = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 100);
  }, []);

  const toggleMobile = useCallback((key: string) => {
    setMobileSection(prev => prev === key ? null : key);
  }, []);

  return (
    <div suppressHydrationWarning aria-hidden={false}>
      {/* ── DESKTOP NAV ── */}
      <nav
        suppressHydrationWarning
        className={`d3-nav${scrolled ? ' d3-nav--scrolled' : ''}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="d3-nav-logo" aria-label="D3 Digital Data Dimensions — Home">
          <img src="/d3logo.png" alt="D3 Digital Data Dimensions" className="d3-logo-img" />
        </Link>

        {/* Desktop links */}
        <ul className="d3-nav-links" role="menubar">
          {[
            { key: 'solutions' as MenuKey, label: 'Solutions' },
            { key: 'industries' as MenuKey, label: 'Industries' },
            { key: 'company' as MenuKey, label: 'Company' },
          ].map(({ key, label }) => (
            <li key={key} role="none" style={{ position: 'relative' }}
              onMouseEnter={() => openMenu(key)}
              onMouseLeave={closeMenu}
            >
              <button
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeMenu === key}
                className="d3-nav-btn"
                onClick={() => setActiveMenu(activeMenu === key ? null : key)}
              >
                {label}
                <span className={`d3-chevron${activeMenu === key ? ' d3-chevron--open' : ''}`}><ChevronDownSVG /></span>
              </button>

              {/* Dropdown */}
              <div
                className={`d3-dropdown${activeMenu === key ? ' d3-dropdown--open' : ''}`}
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={closeMenu}
                role="menu"
              >
                {key === 'solutions' && (
                  <div style={{ display: 'flex', gap: 0, width: 680 }}>
                    {/* Left: TimeTech grouped */}
                    <div style={{ width: 300, borderRight: '1px solid var(--border)', padding: '14px 8px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', padding: '4px 10px', marginBottom: 6 }}>
                        TimeTech Platform
                      </div>
                      {TIMETECH_ITEMS.map(group => (
                        <div key={group.group} style={{ marginBottom: 8 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', padding: '4px 10px 2px', letterSpacing: '0.06em' }}>
                            {group.group}
                          </div>
                          {group.items.map(item => (
                            <Link
                              key={`${group.group}-${item.label}`}
                              href={`/solutions/${item.slug}` as Parameters<typeof Link>[0]['href']}
                              role="menuitem"
                              onClick={() => setActiveMenu(null)}
                              className="d3-dd-item"
                            >
                              <span>
                                <span className="d3-dd-label">{item.label}</span>
                                <span className="d3-dd-desc">{item.desc}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    {/* Right: Other solutions */}
                    <div style={{ flex: 1, padding: '14px 8px' }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', padding: '4px 10px', marginBottom: 6 }}>
                        Other Solutions
                      </div>
                      {SOLUTIONS.map(s => (
                        <Link key={s.slug} href={`/solutions/${s.slug}` as Parameters<typeof Link>[0]['href']} role="menuitem"
                          onClick={() => setActiveMenu(null)}
                          className="d3-dd-item"
                        >
                          <span>
                            <span className="d3-dd-label">{s.label}</span>
                            <span className="d3-dd-desc">{s.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {key === 'industries' && (
                  <div style={{ padding: '12px 8px', width: 200 }}>
                    {INDUSTRIES.map(ind => (
                      <Link key={ind.slug} href={`/industries/${ind.slug}` as Parameters<typeof Link>[0]['href']} role="menuitem"
                        onClick={() => setActiveMenu(null)}
                        className="d3-dd-item d3-dd-item--row"
                      >
                        <span className="d3-dd-label">{ind.label}</span>
                        <span style={{ marginLeft: 'auto', opacity: 0.3 }}><ChevronRightSVG /></span>
                      </Link>
                    ))}
                  </div>
                )}
                {key === 'company' && (
                  <div style={{ padding: '12px 8px', width: 240 }}>
                    {COMPANY.map(c => (
                      <Link key={c.href} href={c.href as Parameters<typeof Link>[0]['href']} role="menuitem"
                        onClick={() => setActiveMenu(null)}
                        className="d3-dd-item"
                      >
                        <span>
                          <span className="d3-dd-label">{c.label}</span>
                          <span className="d3-dd-desc">{c.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
          <li role="none">
            <Link href="/contact" className="d3-nav-link" role="menuitem">Contact</Link>
          </li>
        </ul>

        {/* Right actions */}
        <div className="d3-nav-actions">
          <ThemeToggle />
          <Link href={pathname as Parameters<typeof Link>[0]['href']} locale={otherLocale} className="d3-lang-btn">
            <GlobeSVG />{otherLocale.toUpperCase()}
          </Link>
          <Link href="/contact" className="d3-cta-btn">Request Demo</Link>
          <button
            className="d3-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <MenuSVG />
          </button>
        </div>
      </nav>

      {/* ── MOBILE FULLSCREEN OVERLAY ── */}
      <div
        suppressHydrationWarning
        className={`d3-mobile-overlay${mobileOpen ? ' d3-mobile-overlay--open' : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="d3-mob-header">
          <Link href="/" className="d3-nav-logo" onClick={() => setMobileOpen(false)} aria-label="D3 — Home">
            <img src="/d3logo.png" alt="D3" className="d3-logo-img d3-logo-img--sm" />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ThemeToggle />
            <button
              className="d3-mob-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <CloseSVG />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="d3-mob-body">
          {/* Solutions accordion */}
          <MobSection
            label="Solutions"
            open={mobileSection === 'solutions'}
            onToggle={() => toggleMobile('solutions')}
          >
            {/* TimeTech grouped */}
            {TIMETECH_ITEMS.map(group => (
              <div key={group.group}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '8px 14px 2px' }}>{group.group}</div>
                {group.items.map(item => (
                  <Link key={`${group.group}-${item.label}`} href={`/solutions/${item.slug}` as Parameters<typeof Link>[0]['href']}
                    onClick={() => setMobileOpen(false)} className="d3-mob-link"
                    style={{ paddingLeft: 20 }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <div style={{ height: 1, background: 'var(--border)', margin: '8px 14px' }} />
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 14px 2px' }}>Other Solutions</div>
            {SOLUTIONS.map(s => (
              <Link key={s.slug} href={`/solutions/${s.slug}` as Parameters<typeof Link>[0]['href']}
                onClick={() => setMobileOpen(false)} className="d3-mob-link"
              >
                {s.label}
              </Link>
            ))}
          </MobSection>

          {/* Industries accordion */}
          <MobSection
            label="Industries"
            open={mobileSection === 'industries'}
            onToggle={() => toggleMobile('industries')}
          >
            {INDUSTRIES.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}` as Parameters<typeof Link>[0]['href']}
                onClick={() => setMobileOpen(false)} className="d3-mob-link"
              >
                {ind.label}
              </Link>
            ))}
          </MobSection>

          {/* Company accordion */}
          <MobSection
            label="Company"
            open={mobileSection === 'company'}
            onToggle={() => toggleMobile('company')}
          >
            {COMPANY.map(c => (
              <Link key={c.href} href={c.href as Parameters<typeof Link>[0]['href']}
                onClick={() => setMobileOpen(false)} className="d3-mob-link"
              >
                {c.label}
              </Link>
            ))}
          </MobSection>

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="d3-mob-plain-link">
            Contact
          </Link>
        </div>

        {/* Footer */}
        <div className="d3-mob-footer">
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="d3-mob-cta">
            Request a Demo <ArrowSVG />
          </Link>
          <Link
            href={pathname as Parameters<typeof Link>[0]['href']}
            locale={otherLocale}
            onClick={() => setMobileOpen(false)}
            className="d3-mob-lang"
          >
            <GlobeSVG />
            {otherLocale === 'ar' ? 'العربية' : 'English'}
          </Link>
        </div>
      </div>

      <style>{`
        /* ── NAV BASE ── */
        .d3-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(16px, 4vw, 80px);
          background: color-mix(in srgb, var(--bg) 85%, transparent);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid transparent;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .d3-nav--scrolled {
          background: color-mix(in srgb, var(--bg) 97%, transparent);
          border-bottom-color: var(--border);
          box-shadow: 0 1px 12px rgba(0,0,0,0.06);
        }

        /* ── LOGO ── */
        .d3-nav-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0;
        }
        .d3-logo-img {
          height: 48px; width: auto; display: block;
          filter: none;
        }
        .d3-logo-img--sm { height: 40px; }
        [data-theme="dark"] .d3-logo-img {
          filter: brightness(1.1) drop-shadow(0 0 1px rgba(255,255,255,0.05));
        }

        /* ── DESKTOP LINKS ── */
        .d3-nav-links {
          display: flex; align-items: center; gap: 2px;
          list-style: none; margin: 0; padding: 0;
        }
        .d3-nav-btn {
          display: flex; align-items: center; gap: 4px;
          background: none; border: none; cursor: pointer;
          font-family: var(--font); font-size: 13px; font-weight: 500;
          color: var(--body); padding: 8px 12px; border-radius: 6px;
          transition: color 0.15s, background 0.15s; white-space: nowrap;
          min-height: 44px;
        }
        .d3-nav-btn:hover { color: var(--heading); background: var(--bg-surface); }
        .d3-chevron { display: flex; transition: transform 0.2s; }
        .d3-chevron--open { transform: rotate(180deg); }
        .d3-nav-link {
          font-size: 13px; font-weight: 500; color: var(--body);
          text-decoration: none; padding: 8px 12px; border-radius: 6px;
          transition: color 0.15s, background 0.15s; display: block;
          min-height: 44px; display: flex; align-items: center;
        }
        .d3-nav-link:hover { color: var(--heading); background: var(--bg-surface); }

        /* ── DROPDOWN ── */
        .d3-dropdown {
          position: absolute; top: calc(100% + 6px); left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 16px; box-shadow: var(--shadow-lg);
          z-index: 200; pointer-events: none;
          opacity: 0; transition: opacity 0.18s, transform 0.18s;
        }
        .d3-dropdown--open {
          opacity: 1; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .d3-dd-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 10px 12px; border-radius: 10px;
          text-decoration: none; transition: background 0.12s;
        }
        .d3-dd-item:hover { background: var(--bg-surface); }
        .d3-dd-item--featured { background: var(--bg-highlight); }
        .d3-dd-item--row { align-items: center; }
        .d3-dd-icon {
          width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
          background: var(--bg-surface); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted);
        }
        .d3-dd-item--featured .d3-dd-icon { background: var(--cta-light); border-color: rgba(255,107,43,0.2); color: var(--cta); }
        .d3-dd-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600; color: var(--heading);
          line-height: 1.3;
        }
        .d3-dd-desc {
          display: block; font-size: 11px; color: var(--muted);
          font-weight: 400; margin-top: 2px;
        }
        /* flagship badge removed */

        /* ── RIGHT ACTIONS ── */
        .d3-nav-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .d3-lang-btn {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.04em;
          color: var(--muted); text-decoration: none;
          padding: 7px 13px; border: 1px solid var(--border); border-radius: 100px;
          transition: color 0.2s, border-color 0.2s;
        }
        .d3-lang-btn:hover { color: var(--heading); border-color: var(--muted); }
        .d3-cta-btn {
          background: var(--cta); color: #fff;
          padding: 9px 20px; border-radius: 100px;
          font-size: 13px; font-weight: 700; text-decoration: none;
          letter-spacing: 0.02em; white-space: nowrap;
          transition: background 0.2s, transform 0.2s;
          min-height: 40px;
          display: flex; align-items: center;
        }
        .d3-cta-btn:hover {
          background: var(--cta-hover);
          transform: translateY(-1px);
        }
        .d3-hamburger {
          display: none;
          background: none; border: none; border-radius: 8px;
          padding: 8px; cursor: pointer; color: var(--body);
          min-height: 48px; min-width: 48px;
          align-items: center; justify-content: center;
        }

        /* ── RESPONSIVE: HIDE DESKTOP, SHOW HAMBURGER ── */
        @media (max-width: 1024px) {
          .d3-nav-links { display: none !important; }
          .d3-lang-btn { display: none !important; }
          .d3-cta-btn { display: none !important; }
          .d3-hamburger { display: flex !important; }
          .d3-logo-sub { display: none; }
        }

        /* ── MOBILE FULLSCREEN OVERLAY ── */
        .d3-mobile-overlay {
          position: fixed; inset: 0; z-index: 1100;
          background: var(--bg);
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
          overflow: hidden;
        }
        .d3-mobile-overlay--open {
          transform: translateX(0);
        }
        [dir="rtl"] .d3-mobile-overlay {
          transform: translateX(-100%);
        }
        [dir="rtl"] .d3-mobile-overlay--open {
          transform: translateX(0);
        }

        .d3-mob-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px; border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        .d3-mob-close {
          background: none; border: none;
          border-radius: 50%; padding: 10px; cursor: pointer; color: var(--body);
          min-height: 44px; min-width: 44px;
          display: flex; align-items: center; justify-content: center;
        }
        .d3-mob-body {
          flex: 1; overflow-y: auto; padding: 12px 16px;
          display: flex; flex-direction: column; gap: 2px;
          -webkit-overflow-scrolling: touch;
        }
        .d3-mob-footer {
          padding: 16px; border-top: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 10px;
          flex-shrink: 0;
        }
        .d3-mob-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--cta); color: #fff;
          padding: 15px 20px; border-radius: 100px;
          font-size: 15px; font-weight: 700; text-decoration: none;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 20px rgba(255,107,43,0.35);
        }
        .d3-mob-lang {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 13px; font-weight: 600; color: var(--muted);
          text-decoration: none; padding: 10px;
          border: 1px solid var(--border); border-radius: 100px;
        }
        .d3-mob-plain-link {
          display: flex; align-items: center;
          padding: 14px 14px; border-radius: 10px;
          font-size: 15px; font-weight: 600; color: var(--body);
          text-decoration: none;
          border-top: 1px solid var(--border); margin-top: 4px;
        }
        .d3-mob-plain-link:active { background: var(--bg-surface); }

        /* ── ACCORDION ── */
        .d3-mob-acc-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 14px 14px; background: none; border: none; cursor: pointer;
          font-family: var(--font); font-size: 15px; font-weight: 600;
          color: var(--heading); border-radius: 10px; min-height: 52px;
          -webkit-tap-highlight-color: transparent;
        }
        .d3-mob-acc-btn:active { background: var(--bg-surface); }
        .d3-mob-acc-chevron { display: flex; transition: transform 0.25s; color: var(--muted); }
        .d3-mob-acc-chevron--open { transform: rotate(180deg); }
        .d3-mob-acc-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
          padding-left: 8px;
        }
        .d3-mob-acc-body--open { max-height: 600px; }
        .d3-mob-link {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 14px; border-radius: 8px;
          font-size: 14px; font-weight: 500; color: var(--body);
          text-decoration: none; margin-bottom: 2px;
          -webkit-tap-highlight-color: transparent;
        }
        .d3-mob-link:active { background: var(--bg-surface); }
        .d3-mob-link-icon {
          width: 28px; height: 28px; border-radius: 6px; flex-shrink: 0;
          background: var(--bg-surface); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted);
        }
      `}</style>
    </div>
  );
}

/* ── MOBILE ACCORDION SECTION ── */
function MobSection({ label, open, onToggle, children }: {
  label: string; open: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="d3-mob-acc-btn"
      >
        {label}
        <span className={`d3-mob-acc-chevron${open ? ' d3-mob-acc-chevron--open' : ''}`}>
          <ChevronDownSVG />
        </span>
      </button>
      <div className={`d3-mob-acc-body${open ? ' d3-mob-acc-body--open' : ''}`}>
        <div style={{ paddingBottom: 8 }}>{children}</div>
      </div>
    </div>
  );
}
