// Core product and content data for D3 — Digital Data Dimensions
// Powered by TimeTech solutions, serving GCC enterprises since 2010

export const SOLUTIONS = [
  {
    slug: 'timetech-application',
    num: '01',
    title: 'TimeTech Platform',
    desc: 'Complete cloud-based workforce intelligence platform: time attendance, HRMS, payroll, visitor management, mobile app and employee self-service — built for GCC enterprises.',
    tags: ['Biometric', 'Cloud', 'Multi-company', 'iOS & Android'],
    icon: 'clock',
  },
  {
    slug: 'time-attendance-system',
    num: '02',
    title: 'Time Attendance & HRMS',
    desc: 'Biometric fingerprint, face recognition and card-based attendance with real-time processing, auto-shift picking, LMRA-compliant payroll export and unlimited sites.',
    tags: ['Biometric', 'LMRA Ready', 'Auto Shift', 'Mobile App'],
    icon: 'clock',
  },
  {
    slug: 'queue-management-system',
    num: '03',
    title: 'Queue Management System',
    desc: 'Wired and wireless kiosk-based queuing with WhatsApp virtual queue, audio announcements, live analytics and multi-service category management for ministries and enterprises.',
    tags: ['Kiosk', 'WhatsApp Queue', 'Wireless', 'Analytics'],
    icon: 'users',
  },
  {
    slug: 'digital-signage',
    num: '04',
    title: 'Digital Signage & Displays',
    desc: 'LED, LCD and vertical signage displays from 42" with 4K support, 24/7 operation, centralized CMS, Android OS and optional touch screen for indoor and outdoor deployments.',
    tags: ['4K LED', 'Remote CMS', '24/7 Operation', 'eBook'],
    icon: 'monitor',
  },
  {
    slug: 'rfid-asset-tracking',
    num: '05',
    title: 'RFID & Asset Tracking',
    desc: 'Active and passive RFID tracking for assets, documents and warehouse inventory across multiple buildings, departments and warehouses with mobile handheld terminal support.',
    tags: ['Active RFID', 'Warehouse WMS', 'Document Tracking', 'Mobile'],
    icon: 'layers',
  },
  {
    slug: 'access-control-system',
    num: '06',
    title: 'IP CCTV & Access Control',
    desc: 'Enterprise-grade IP surveillance cameras, biometric access controllers and proximity card systems integrated with centralized management software for GCC security compliance.',
    tags: ['IP Camera', 'Face Recognition', 'NFC / Proximity', 'Biometric'],
    icon: 'shield',
  },
  {
    slug: 'erp-retail-management',
    num: '07',
    title: 'ERP & Retail Management',
    desc: 'Full ERP covering procurement, inventory, sales, financial accounting, payroll, restaurant management and electronic shelf labels — multi-company, multi-currency, multi-branch.',
    tags: ['Multi-Company', 'ESL', 'Inventory', 'Retail POS'],
    icon: 'briefcase',
  },
];

export const INDUSTRIES = [
  {
    slug: 'government',
    title: 'Government',
    desc: 'Labour law compliance, LMRA integration, biometric attendance for civil service and ministry-grade physical security.',
    icon: 'building',
    challenges: [
      { title: 'LMRA & Labour Compliance', desc: 'Full alignment with Bahrain Labour Market Regulatory Authority requirements and GCC labour law.' },
      { title: 'Large Distributed Workforce', desc: 'Managing thousands of employees across multiple ministries and government departments.' },
      { title: 'Ministry-Grade Security', desc: 'Biometric access control, IP CCTV and visitor management for sensitive government facilities.' },
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    desc: '24/7 shift scheduling, medical credential tracking, queue management for outpatient services and RFID equipment tracking.',
    icon: 'heart',
    challenges: [
      { title: '24/7 Shift Management', desc: 'Complex rotating schedules for doctors, nurses and support staff with Ramadan and special shift support.' },
      { title: 'Patient Queue Optimisation', desc: 'Reducing waiting times in outpatient clinics and emergency departments with intelligent queue kiosks.' },
      { title: 'Credential & Document Tracking', desc: 'Maintaining up-to-date certifications, licenses and compliance documents with automated reminders.' },
    ],
  },
  {
    slug: 'banking',
    title: 'Banking & Finance',
    desc: 'Audit-compliant attendance records, secure biometric access, visitor screening and SOX-ready payroll reporting.',
    icon: 'credit-card',
    challenges: [
      { title: 'Regulatory Compliance', desc: 'SOX, Central Bank of Bahrain and internal audit reporting requirements met with full data integrity.' },
      { title: 'Visitor & Branch Security', desc: 'Comprehensive visitor management and biometric door access across all branch locations.' },
      { title: 'Payroll Accuracy', desc: 'Zero-error payroll with direct WPS integration, GOSI calculations and multi-currency support.' },
    ],
  },
  {
    slug: 'retail',
    title: 'Retail',
    desc: 'ERP, electronic shelf labels, real-time inventory control, workforce scheduling and POS integration for multi-location retailers.',
    icon: 'shopping-bag',
    challenges: [
      { title: 'Real-Time Inventory', desc: 'Live stock visibility across all locations with RFID and barcode scanning.' },
      { title: 'Electronic Shelf Labels', desc: 'Instant price updates across all shelves, eliminating manual repricing and pricing errors.' },
      { title: 'Peak Workforce Scheduling', desc: 'Automated staff rostering based on footfall patterns and sales data.' },
    ],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    desc: 'RFID warehouse management, asset tracking with handheld terminals, IP fleet surveillance and distributed workforce management.',
    icon: 'truck',
    challenges: [
      { title: 'Warehouse & Asset Visibility', desc: 'RFID tracking across multiple warehouses with real-time stock levels and cycle counts.' },
      { title: 'Fleet & Yard Security', desc: 'IP CCTV monitoring for loading bays, vehicles and high-value cargo areas.' },
      { title: 'Distributed Workforce', desc: 'Managing shift workers across multiple depots and sites with mobile attendance.' },
    ],
  },
];

export const CASE_STUDIES = [
  {
    slug: 'ministry-of-interior-attendance',
    clientName: 'Government Ministry',
    clientType: 'Government',
    problem: 'No unified attendance system across dozens of departments — manual registers, buddy-punching and no LMRA-compliant reporting.',
    solution: 'Deployed TimeTech biometric attendance terminals, central dashboard and auto LMRA report generation across all departments.',
    result: 'Eliminated manual attendance processing, achieved LMRA compliance and dramatically reduced payroll discrepancies.',
  },
  {
    slug: 'bank-of-bahrain-kuwait-hrms',
    clientName: 'GCC Commercial Bank',
    clientType: 'Banking',
    problem: 'Legacy HR system with no employee self-service, creating high admin overhead and slow payroll approvals.',
    solution: 'Full TimeTech HRMS deployment including employee self-service portal, mobile app, payroll engine and appraisal module.',
    result: 'Significant reduction in HR admin workload; employees now manage leave, overtime and payslips independently.',
  },
  {
    slug: 'gulf-air-queue-management',
    clientName: 'Regional Transport Hub',
    clientType: 'Government',
    problem: 'Long service queues causing customer dissatisfaction and staff overload across multiple service counters.',
    solution: 'TimeTech Queue Management with kiosks, digital display screens, WhatsApp virtual queue and real-time service analytics.',
    result: 'Substantially reduced average wait times and measurably improved citizen satisfaction scores.',
  },
  {
    slug: 'bahrain-airport-cctv',
    clientName: 'International Airport',
    clientType: 'Government',
    problem: 'Fragmented CCTV coverage, no centralised access control, multiple security blind spots across terminals.',
    solution: 'Full IP CCTV deployment and biometric access control across all terminal checkpoints with centralised management.',
    result: 'Achieved full security compliance, eliminated blind spots and reduced incident response time significantly.',
  },
  {
    slug: 'alba-rfid-assets',
    clientName: 'Industrial Manufacturer',
    clientType: 'Industrial',
    problem: 'Thousands of high-value industrial assets with no reliable tracking — frequent loss and audit failures.',
    solution: 'RFID fixed asset tracking with handheld mobile terminals and centralised asset management software.',
    result: 'Near-zero unaccounted asset loss, passed external audits and improved asset utilisation across all sites.',
  },
  {
    slug: 'jawad-business-erp',
    clientName: 'Multi-location Retail Group',
    clientType: 'Retail',
    problem: 'Disconnected POS, inventory and HR systems across a large branch network causing reconciliation delays.',
    solution: 'Unified D3 ERP with electronic shelf labels, real-time inventory and integrated payroll management.',
    result: 'Price updates now take seconds instead of days; inventory errors reduced to near zero across all branches.',
  },
];

export const CLIENTS = {
  government: [
    'Ministry of Interior',
    'Ministry of Works',
    'Ministry of Education',
    'Bahrain Airport Company',
    'Electricity & Water Authority',
    'Civil Aviation Affairs',
    'Central Informatics Organisation',
    'Ministry of Health',
  ],
  private: [
    'ALBA',
    'Gulf Air',
    'Batelco',
    'Nass Corporation',
    'Jawad Business Group',
    'Al Moayyed Group',
    'GFH Financial Group',
    'Bahrain Petroleum Company',
  ],
  gcc: [
    'Bank of Bahrain & Kuwait',
    'National Bank of Bahrain',
    'Ithmaar Bank',
    'Khaleeji Commercial Bank',
    'Ibn Al Nafees Hospital',
    'Royal Humanitarian Foundation',
    'Bahrain Bourse',
    'Mouwasat Medical Services',
  ],
};

export const BLOG_POSTS = [
  {
    slug: 'top-5-benefits-biometric-attendance',
    title: 'Top 5 Benefits of Biometric Attendance Systems for GCC Enterprises',
    excerpt: 'Biometric attendance eliminates buddy-punching, reduces payroll errors and ensures full LMRA compliance. Here\'s why GCC enterprises are upgrading from legacy systems.',
    tags: ['Time Attendance', 'Biometric', 'LMRA'],
    publishedAt: '2025-03-15',
  },
  {
    slug: 'queue-management-government-sector',
    title: 'How Queue Management Systems Are Transforming Government Services in the GCC',
    excerpt: 'From ministries to municipal offices, TimeTech\'s intelligent queue management is cutting wait times and improving citizen satisfaction across Bahrain and the GCC.',
    tags: ['Queue Management', 'Government', 'GCC'],
    publishedAt: '2025-02-28',
  },
  {
    slug: 'rfid-asset-tracking-manufacturing',
    title: 'RFID Asset Tracking: A Complete Guide for GCC Manufacturing & Industrial Companies',
    excerpt: 'Everything you need to know about RFID asset tracking in GCC industrial environments — from hardware selection to warehouse management software integration.',
    tags: ['RFID', 'Asset Tracking', 'Warehouse'],
    publishedAt: '2025-02-10',
  },
  {
    slug: 'choosing-hr-software-bahrain',
    title: 'How to Choose the Right HRMS for Your GCC Business in 2025',
    excerpt: 'A practical guide to evaluating HRMS platforms for GCC businesses — covering LMRA compliance, WPS payroll, Arabic support, GOSI integration and mobile capabilities.',
    tags: ['HRMS', 'Payroll', 'Bahrain', 'GCC'],
    publishedAt: '2025-01-20',
  },
];
