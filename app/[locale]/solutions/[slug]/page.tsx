import { notFound } from 'next/navigation';
import { SOLUTIONS, CASE_STUDIES, INDUSTRIES } from '@/lib/data';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { Button, ArrowIcon } from '@/components/shared/Button';
import { CTASection } from '@/components/home/CTASection';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const SOLUTION_DETAILS: Record<string, {
  seoKeyword: string;
  tagline: string;
  features: { title: string; desc: string }[];
  highlights: string[];
  industries: string[];
  caseStudySlug: string;
}> = {
  'timetech-application': {
    seoKeyword: 'TimeTech time attendance HRMS Bahrain GCC',
    tagline: 'A complete cloud workforce platform — attendance, HR, payroll, visitor management and mobile self-service, purpose-built for GCC enterprises.',
    highlights: ['LMRA & WPS Compliant', 'Multi-company & multi-site', 'iOS & Android mobile app', 'Arabic & English interface', 'Auto shift picking', 'Geo-fenced mobile attendance'],
    features: [
      { title: 'Biometric Time Attendance', desc: 'Fingerprint, face recognition and card-based terminals with real-time processing — no manual intervention needed.' },
      { title: 'Auto Shift & Work Rules', desc: 'N-number of shifts with auto picking, flexi rules, Ramadan shift support, grace periods and OT segregation.' },
      { title: 'HRMS & Payroll', desc: 'Multi-company, multi-currency WPS payroll with GOSI, LMRA integration, leave management and bank transfer formats.' },
      { title: 'Employee Self-Service Portal', desc: 'Web and mobile portal for leave requests, payslip access, overtime requests and notice board.' },
      { title: 'Mobile App (iOS/Android)', desc: 'Geo-fenced mobile attendance, selfie punch, QR code clock-in, leave/overtime requests and real-time notifications.' },
      { title: 'Visitor Management', desc: 'Reception kiosk with appointment forms, access card issuance, door assignment and comprehensive visitor reports.' },
      { title: 'Appraisal & Recruitment', desc: 'KPI-based performance evaluation, manpower planning, job profiles and recruitment workflow management.' },
      { title: 'Multi-Company & ERP Integration', desc: 'Manage multiple legal entities, cost centres and departments — native connectors for SAP, Oracle and custom APIs.' },
    ],
    industries: ['government', 'healthcare', 'banking', 'retail', 'logistics'],
    caseStudySlug: 'ministry-of-interior-attendance',
  },
  'time-attendance-system': {
    seoKeyword: 'time attendance system Bahrain GCC biometric',
    tagline: 'Cloud-based biometric attendance across unlimited locations — with real-time dashboards, auto-shift picking, overtime management and LMRA-compliant payroll export.',
    highlights: ['Fingerprint & face recognition', 'LMRA compliant reports', 'Real-time dashboard', 'Auto shift picking', 'Email alerts for absences', 'Overtime approval workflow'],
    features: [
      { title: 'Multi-Modal Biometric', desc: 'Fingerprint, facial recognition, smart card and PIN — all supported on one integrated terminal.' },
      { title: 'Auto Shift Picking', desc: 'System automatically picks the correct shift per employee — no manual rostering required.' },
      { title: 'Real-Time Dashboard', desc: 'Live ON/OFF duty, late entry and early exit status across all locations at any moment.' },
      { title: 'Flexi & Special Shifts', desc: 'Ramadan shift, mother feeding shift, over-day shift and custom rule configurations.' },
      { title: 'Overtime Management', desc: 'OT segregation by time and day, grace periods, minimum OT thresholds and approval workflows.' },
      { title: 'LMRA Compliance', desc: 'Built-in reports for Bahrain Labour Market Regulatory Authority with direct integration.' },
      { title: 'Email Notifications', desc: 'Auto alerts for absent, late entry, early exit and missing swipe to employee and department heads.' },
      { title: 'Daily Attendance Reports', desc: 'Daily, weekly and monthly reports — time cards, overtime, deductions and graphical analysis.' },
    ],
    industries: ['government', 'healthcare', 'banking'],
    caseStudySlug: 'ministry-of-interior-attendance',
  },
  'hr-payroll-software': {
    seoKeyword: 'HR software Bahrain WPS payroll HRMS GCC',
    tagline: 'A fully localised GCC HRMS covering the complete employee lifecycle — onboarding, leave, payroll, appraisals, self-service and offboarding.',
    highlights: ['WPS-ready payroll', 'GOSI integration', 'Arabic interface & RTL', 'Employee self-service', 'Document management', 'Performance appraisal'],
    features: [
      { title: 'End-to-End Payroll', desc: 'Automated gross-to-net payroll with WPS compliance and bank file generation.' },
      { title: 'Leave Management', desc: 'Annual, sick, maternity and custom leave types with approval workflows.' },
      { title: 'Performance Appraisal', desc: 'Goal setting, 360-degree reviews and automated increment processing.' },
      { title: 'Employee Onboarding', desc: 'Digital onboarding workflows, document collection and induction tracking.' },
      { title: 'Document Management', desc: 'Secure digital storage for contracts, visas, passports and certificates.' },
      { title: 'Organisational Chart', desc: 'Dynamic org chart with role hierarchy and reporting lines.' },
      { title: 'Benefits & GOSI', desc: 'Track GOSI, end-of-service benefits and custom allowances automatically.' },
      { title: 'Arabic Interface', desc: 'Full Arabic-language interface and RTL support for all modules.' },
    ],
    industries: ['government', 'banking', 'retail'],
    caseStudySlug: 'bank-of-bahrain-kuwait-hrms',
  },
  'queue-management-system': {
    seoKeyword: 'queue management system Bahrain GCC kiosk WhatsApp',
    tagline: 'Wired, wireless and cloud-based queuing for ministries, banks, hospitals and enterprises — with WhatsApp virtual queuing, audio announcements and live analytics.',
    highlights: ['15" all-in-one KIOSK', 'WhatsApp virtual queue', 'Wired or wireless', 'Audio announcements', 'Multi-lingual support', 'Real-time analytics'],
    features: [
      { title: '15" Touchscreen Kiosk', desc: 'All-in-one KIOSK with built-in server, 80mm thermal printer and audio system — less single-point failure.' },
      { title: 'WhatsApp Virtual Queue', desc: 'Customers join and monitor queues via WhatsApp — eliminating physical waiting completely.' },
      { title: 'Wired & Wireless Options', desc: 'Ethernet cabling or fully wireless — both options available based on site requirements.' },
      { title: 'Multi-Service Categories', desc: 'Handles up to 10+ service categories with VIP and priority routing built in.' },
      { title: 'Counter LED Displays', desc: '8-digit bright LED counter displays, 35.4cm wide, showing ticket and counter numbers.' },
      { title: 'Audio Announcements', desc: 'Multi-lingual voice announcements through waiting area TV speakers or ceiling speakers.' },
      { title: 'Live Analytics & Reports', desc: 'Daily service reports, average wait time, processing time and satisfaction evaluation data.' },
      { title: 'Supervisor Remote Reporting', desc: 'Full reporting application accessible from KIOSK or remotely from supervisor PC.' },
    ],
    industries: ['government', 'banking', 'healthcare'],
    caseStudySlug: 'gulf-air-queue-management',
  },
  'rfid-asset-tracking': {
    seoKeyword: 'RFID asset tracking Bahrain warehouse management',
    tagline: 'Full lifecycle tracking of physical assets — IT equipment, furniture, vehicles, medical devices and industrial tools — using RFID tags, handheld scanners and a centralised asset register.',
    highlights: ['Active & passive RFID', 'Handheld mobile scanners', 'Multi-building & multi-site', 'Audit management', 'Depreciation tracking', 'Warehouse WMS'],
    features: [
      { title: 'RFID & Barcode', desc: 'Support for UHF RFID, HF RFID, QR codes and standard barcodes.' },
      { title: 'Handheld Scanners', desc: 'Rugged mobile scanners for fast bulk scanning and cycle counts.' },
      { title: 'Asset Lifecycle', desc: 'Track assets from procurement through maintenance to disposal.' },
      { title: 'Location Tracking', desc: 'Room-level location awareness with fixed RFID readers.' },
      { title: 'Audit Management', desc: 'Schedule and conduct physical asset audits with discrepancy reporting.' },
      { title: 'Depreciation Tracking', desc: 'Automated depreciation calculations integrated with ERP.' },
      { title: 'Maintenance Scheduling', desc: 'Preventive maintenance schedules with automated alerts.' },
      { title: 'Multi-Site Support', desc: 'Manage assets across unlimited buildings, floors and departments.' },
    ],
    industries: ['government', 'healthcare', 'logistics'],
    caseStudySlug: 'alba-rfid-assets',
  },
  'access-control-system': {
    seoKeyword: 'access control system CCTV Bahrain biometric IP cameras',
    tagline: 'Enterprise-grade IP-based access control and CCTV surveillance — combining biometric authentication, smart card readers, video analytics and 24/7 monitoring.',
    highlights: ['Fingerprint & face recognition', '2MP to 4K IP cameras', 'Video analytics & AI', 'Central management', 'Emergency lockdown', 'Full audit trails'],
    features: [
      { title: 'Biometric Access', desc: 'Fingerprint and facial recognition door controllers with anti-passback.' },
      { title: 'Smart Card / PIN', desc: 'MIFARE, HID and custom smart card readers for any door type.' },
      { title: 'IP CCTV', desc: '2MP to 4K IP cameras with AI analytics, motion detection and NVR storage.' },
      { title: 'Video Analytics', desc: 'Face detection, crowd counting, perimeter breach and loitering alerts.' },
      { title: 'Central Management', desc: 'Single software platform managing access and cameras across all sites.' },
      { title: 'Audit Trails', desc: 'Complete access logs with timestamps, photos and video evidence.' },
      { title: 'Visitor Integration', desc: 'Pre-register visitors and grant temporary access via the visitor system.' },
      { title: 'Emergency Lockdown', desc: 'One-click facility lockdown for emergency security situations.' },
    ],
    industries: ['government', 'banking', 'logistics'],
    caseStudySlug: 'bahrain-airport-cctv',
  },
  'digital-signage': {
    seoKeyword: 'digital signage LED displays Bahrain GCC CMS',
    tagline: 'Indoor and outdoor LED displays, vertical portrait screens, e-book readers and IP power controllers — all managed from a central CMS with scheduling and real-time content updates.',
    highlights: ['LED & LCD displays', 'Web-based CMS', 'Multi-zone layouts', 'Queue integration', 'Live data feeds', '24/7 operation'],
    features: [
      { title: 'LED Displays', desc: 'Indoor and outdoor LED panels in any size, from reception screens to large-format outdoor boards.' },
      { title: 'Content CMS', desc: 'Web-based content management with drag-and-drop templates and scheduling.' },
      { title: 'Multi-Zone Layouts', desc: 'Divide screens into zones for different content types simultaneously.' },
      { title: 'Vertical Signage', desc: 'Portrait-orientation screens for wayfinding, menus and promotional content.' },
      { title: 'eBook Readers', desc: 'Interactive e-book displays for catalogues, menus and information boards.' },
      { title: 'IP Power Control', desc: 'Remote power on/off scheduling to reduce energy consumption.' },
      { title: 'Queue Integration', desc: 'Display real-time queue numbers and wait times on signage screens.' },
      { title: 'Live Data Feeds', desc: 'Integrate live news, weather, prayer times and social media feeds.' },
    ],
    industries: ['retail', 'government', 'banking'],
    caseStudySlug: 'gulf-air-queue-management',
  },
  'erp-retail-management': {
    seoKeyword: 'ERP software Bahrain retail management inventory',
    tagline: 'Inventory, purchasing, sales, finance and HR integrated into one unified system — with electronic shelf labels, ID card printing and loyalty programme management.',
    highlights: ['Real-time inventory', 'Electronic shelf labels', 'Multi-company & multi-currency', 'Loyalty management', 'Restaurant management', 'ID card solutions'],
    features: [
      { title: 'Inventory Management', desc: 'Real-time stock levels, reorder points, expiry tracking and multi-warehouse.' },
      { title: 'POS Integration', desc: 'Seamless integration with major POS systems and custom hardware.' },
      { title: 'Electronic Shelf Labels', desc: 'ESL displays with instant price updates from the central ERP system.' },
      { title: 'Purchasing & Procurement', desc: 'Purchase orders, supplier management, GRN and 3-way matching.' },
      { title: 'Financial Accounting', desc: 'Full GL, AP, AR and bank reconciliation with local chart of accounts.' },
      { title: 'Loyalty Management', desc: 'Points-based loyalty programmes with card and mobile app integration.' },
      { title: 'Reporting & Analytics', desc: 'Custom dashboards for sales, margins, stock turns and supplier KPIs.' },
      { title: 'ID Card Solutions', desc: 'Employee, student and membership card design, printing and management.' },
    ],
    industries: ['retail', 'logistics', 'government'],
    caseStudySlug: 'jawad-business-erp',
  },
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  const detail = SOLUTION_DETAILS[slug];
  if (!sol) return { title: 'Solution Not Found' };
  return {
    title: `${sol.title} | D3 — Digital Data Dimensions`,
    description: sol.desc,
    keywords: detail?.seoKeyword,
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  const detail = SOLUTION_DETAILS[slug];

  if (!sol || !detail) notFound();

  const relatedCaseStudy = CASE_STUDIES.find((cs) => cs.slug === detail.caseStudySlug);
  const relatedIndustries = INDUSTRIES.filter((ind) => detail.industries.includes(ind.slug));
  const relatedSolutions = SOLUTIONS.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── HERO — 2-column ── */}
      <section style={{ padding: '80px 0 60px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div className="sol-hero-grid">
            {/* Left */}
            <div>
              <SectionEyebrow>Solution</SectionEyebrow>
              <h1 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.08, color: 'var(--heading)', marginBottom: 20 }}>
                {sol.title}
              </h1>
              <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, marginBottom: 36 }}>
                {detail.tagline}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button href="/contact" variant="primary"><ArrowIcon />Request a Demo</Button>
                <Button href="/contact" variant="ghost">Talk to us</Button>
              </div>
            </div>

            {/* Right — highlights */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '32px',
              alignSelf: 'start',
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Key capabilities</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {detail.highlights.map((h) => (
                  <li key={h} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--body)' }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'var(--bg-highlight)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--heading)', flexShrink: 0,
                    }}>
                      <CheckIcon />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                {sol.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100,
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    color: 'var(--muted)', letterSpacing: '0.02em',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)' }}>
          <RevealOnScroll>
            <SectionEyebrow>What&apos;s included</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.15, color: 'var(--heading)', marginBottom: 48 }}>
              All the features you need
            </h2>
          </RevealOnScroll>
          <div className="features-grid">
            {detail.features.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 40}>
                <div style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '24px 20px',
                  height: '100%',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'var(--bg-highlight)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 14, color: 'var(--heading)',
                  }}>
                    <CheckIcon />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--heading)', marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.65 }}>{f.desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .sol-hero-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 60px; align-items: start; }
          @media (max-width: 900px) { .sol-hero-grid { grid-template-columns: 1fr; gap: 32px; } }
          .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          @media (max-width: 1100px) { .features-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── INDUSTRIES ── */}
      {relatedIndustries.length > 0 && (
        <section style={{ padding: '72px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)' }}>
            <SectionEyebrow>Industries</SectionEyebrow>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: -0.8, lineHeight: 1.15, color: 'var(--heading)', marginBottom: 32 }}>
              Built for these sectors
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {relatedIndustries.map((ind) => (
                <Link key={ind.slug} href={`/industries/${ind.slug}` as Parameters<typeof Link>[0]['href']} style={{
                  padding: '12px 20px', background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 100, textDecoration: 'none', transition: 'border-color 0.2s',
                  fontSize: 14, fontWeight: 600, color: 'var(--heading)',
                }}>
                  {ind.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CASE STUDY ── */}
      {relatedCaseStudy && (
        <section style={{ padding: '72px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)' }}>
            <SectionEyebrow>Case Study</SectionEyebrow>
            <div className="case-study-grid">
              <div>
                <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--heading)', marginBottom: 12 }}>
                  {relatedCaseStudy.clientName}
                </h2>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24, background: 'var(--bg)', border: '1px solid var(--border)', padding: '4px 12px', borderRadius: 100 }}>
                  {relatedCaseStudy.clientType}
                </span>
                <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.75, marginBottom: 24 }}>
                  {relatedCaseStudy.problem}
                </p>
                <p style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.75, marginBottom: 28 }}>
                  <strong style={{ color: 'var(--heading)' }}>Result: </strong>{relatedCaseStudy.result}
                </p>
                <Link href={`/case-studies/${relatedCaseStudy.slug}` as Parameters<typeof Link>[0]['href']} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: 'var(--heading)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
                  Read full case study <ArrowIcon size={13} />
                </Link>
              </div>
              <div style={{ background: '#1A1A2E', borderRadius: 20, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
                {[
                  { label: 'Challenge', text: relatedCaseStudy.problem.slice(0, 90) + '…' },
                  { label: 'Solution', text: relatedCaseStudy.solution.slice(0, 90) + '…' },
                  { label: 'Outcome', text: relatedCaseStudy.result.slice(0, 90) + '…' },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            .case-study-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: start; margin-top: 32px; }
            @media (max-width: 800px) { .case-study-grid { grid-template-columns: 1fr; gap: 24px; } }
          `}</style>
        </section>
      )}

      {/* ── RELATED SOLUTIONS ── */}
      <section style={{ padding: '72px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)' }}>
          <SectionEyebrow>Also from D3</SectionEyebrow>
          <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--heading)', marginBottom: 32 }}>
            Explore more solutions
          </h2>
          <div className="related-grid">
            {relatedSolutions.map((rs) => (
              <Link key={rs.slug} href={`/solutions/${rs.slug}` as Parameters<typeof Link>[0]['href']} style={{
                display: 'block', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px',
                textDecoration: 'none', transition: 'border-color 0.2s',
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--heading)', marginBottom: 8 }}>{rs.title}</div>
                <div style={{ fontSize: 13, color: 'var(--body)', lineHeight: 1.6, marginBottom: 16 }}>{rs.desc.slice(0, 100)}…</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>
                  Learn more <ArrowIcon size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          @media (max-width: 900px) { .related-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 560px) { .related-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTASection />
    </>
  );
}
