import type { Metadata, Viewport } from 'next';
import { Montserrat, Cairo } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-ar',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://d3.com.bh';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'D3 Digital Data Dimensions — TimeTech Attendance, HRMS & IT Solutions | Bahrain & GCC',
    template: '%s | D3 Digital Data Dimensions',
  },
  description:
    'D3 Digital Data Dimensions (Dthree) is Bahrain\'s leading IT solutions company, delivering TimeTech time attendance systems, HRMS payroll software, queue management, RFID asset tracking, digital signage and ERP to 500+ enterprises across the GCC since 2010.',
  keywords: [
    'D3', 'D3 Bahrain', 'Dthree', 'Digital Data Dimensions', 'D3 Digital Data Dimensions',
    'TimeTech', 'Time Attendance System Bahrain', 'HRMS Software GCC', 'Biometric Attendance',
    'Queue Management System', 'RFID Asset Tracking', 'Digital Signage', 'ERP Bahrain',
    'HR Payroll Software Bahrain', 'Access Control System',
    'Workforce Management GCC', 'LMRA Compliance', 'WPS Payroll', 'Time Attendance Gulf',
    'IT Solutions Bahrain', 'Enterprise Software GCC', 'Attendance System Bahrain',
  ],
  authors: [{ name: 'D3 Digital Data Dimensions', url: BASE_URL }],
  creator: 'D3 Digital Data Dimensions',
  publisher: 'D3 Digital Data Dimensions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_BH',
    alternateLocale: ['ar_BH'],
    url: BASE_URL,
    siteName: 'D3 Digital Data Dimensions',
    title: 'D3 — TimeTech IT Solutions for GCC Enterprises | Bahrain Since 2010',
    description:
      'Enterprise IT solutions for Bahrain & GCC — TimeTech time attendance, HRMS, payroll, queue management, RFID tracking, digital signage and ERP. Trusted by 500+ organisations.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'D3 Digital Data Dimensions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D3 — IT Solutions for GCC Enterprises',
    description: 'TimeTech time attendance, HRMS, queue management, RFID and ERP for the GCC. Bahrain since 2010.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-BH': `${BASE_URL}/en`, 'ar-BH': `${BASE_URL}/ar` },
  },
};

// JSON-LD Structured Data for the organisation
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'D3 Digital Data Dimensions',
  alternateName: ['D3 Bahrain', 'Dthree', 'D3', 'Digital Data Dimensions'],
  url: BASE_URL,
  logo: `${BASE_URL}/d3logo.png`,
  description:
    'Bahrain-based IT solutions company providing TimeTech time attendance systems, HRMS payroll software, queue management, RFID asset tracking, digital signage and ERP to enterprises across the GCC since 2010.',
  foundingDate: '2010',
  areaServed: ['BH', 'AE', 'SA', 'KW', 'QA', 'OM'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+973-1333-3445',
      contactType: 'sales',
      areaServed: 'BH',
      availableLanguage: ['English', 'Arabic'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22, Building 1033, Road 3925',
    addressLocality: 'Umm Al Hassam',
    addressRegion: 'Manama',
    postalCode: '339',
    addressCountry: 'BH',
  },
  sameAs: [
    'https://time-tech.co/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${cairo.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
