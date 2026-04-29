import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { GTMScript } from '@/components/layout/GTMScript';
import { LocaleHtmlAttributes } from '@/components/layout/LocaleHtmlAttributes';
import type { Metadata } from 'next';

type Locale = 'en';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://d3.com.bh';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    'D3 Digital Data Dimensions (Dthree) — TimeTech IT Solutions for GCC Enterprises | Bahrain Since 2010';
  const description =
    'D3 Digital Data Dimensions (Dthree) delivers TimeTech time attendance, HRMS payroll, queue management, RFID asset tracking, digital signage and ERP for 500+ enterprises across Bahrain and the GCC since 2010.';

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: '%s | D3 Digital Data Dimensions',
    },
    description,
    openGraph: {
      type: 'website',
      locale: 'en_BH',
      url: `${BASE_URL}/${locale}`,
      siteName: 'D3 Digital Data Dimensions',
      title,
      description,
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'D3' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'en-BH': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtmlAttributes />
      <GTMScript gtmId={gtmId} />
      <ThemeProvider>
        <div suppressHydrationWarning>
          <Navbar />
        </div>
        <main id="main-content" style={{ paddingTop: 80 }}>
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
