export type ProjectImage = {
  id: string;
  client: string;
  location?: string;
  /** What solution this project belongs to (used for filtering) */
  solution?: 'Queue Management' | 'Time Attendance' | 'HRMS & Payroll' | 'RFID' | 'CCTV & Access' | 'Digital Signage' | 'ERP' | 'Other';
  /** Industry / sector (used for filtering) */
  industry?: 'Hospital' | 'Bank' | 'Government' | 'Retail' | 'Education' | 'Other';
  /** Place files under `public/images/` (or a subfolder) and reference e.g. `/images/hilal-hidd.jpeg` */
  src?: string;
  alt: string;
};

export const PROJECT_IMAGES: ProjectImage[] = [
  {
    id: 'al-hilal-hidd',
    client: 'Al Hilal Hospital',
    location: 'Hidd',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/hilal-hidd.jpeg',
    alt: 'Project installation at Al Hilal Hospital (Hidd)',
  },
  {
    id: 'al-hilal-sitra',
    client: 'Al Hilal Hospital',
    location: 'Sitra',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/hilal-sitra.jpeg',
    alt: 'Project installation at Al Hilal Hospital (Sitra)',
  },
  {
    id: 'al-hilal-manama',
    client: 'Al Hilal Hospital',
    location: 'Manama',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/hilal-manama.jpeg',
    alt: 'Project installation at Al Hilal Hospital (Manama)',
  },
  {
    id: 'al-hilal-hamad-town',
    client: 'Al Hilal Hospital',
    location: 'Hamad Town',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/hilal-hamadtown.jpeg',
    alt: 'Project installation at Al Hilal Hospital (Hamad Town)',
  },
  {
    id: 'al-hilal-adliya',
    client: 'Al Hilal Hospital',
    location: 'Adliya',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/hilal-adliya.jpeg',
    alt: 'Project installation at Al Hilal Hospital (Adliya)',
  },
  {
    id: 'al-hilal-adliya-2',
    client: 'Al Hilal Hospital',
    location: 'Adliya',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/hilal-adliya-2.jpeg',
    alt: 'Additional project installation at Al Hilal Hospital (Adliya)',
  },
  {
    id: 'al-hilal-manama-2',
    client: 'Al Hilal Hospital',
    location: 'Manama',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/hilal-manama-2.jpeg',
    alt: 'Additional project installation at Al Hilal Hospital (Manama)',
  },
  {
    id: 'habib-bank-manama',
    client: 'Habib Bank Limited',
    location: 'Manama',
    solution: 'Queue Management',
    industry: 'Bank',
    src: '/images/habib-bank-manama.jpeg',
    alt: 'Project installation at Habib Bank Limited (Manama)',
  },
  {
    id: 'ibn-al-nafees-manama',
    client: 'Ibn Al Nafees Hospital',
    location: 'Manama',
    solution: 'Queue Management',
    industry: 'Hospital',
    src: '/images/ibn-al-nafees-manama.jpeg',
    alt: 'Project installation at Ibn Al Nafees Hospital (Manama)',
  },
  {
    id: 'arab-open-university',
    client: 'Arab Open University',
    solution: 'Queue Management',
    industry: 'Education',
    src: '/images/aou-university.jpeg',
    alt: 'Project installation at Arab Open University',
  },
];

