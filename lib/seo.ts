import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://dthree.co';

/**
 * Builds a self-referential canonical + Open Graph/Twitter block for a page.
 * Every page must call this with its OWN locale + path — without it, Next.js
 * metadata merging falls back to the [locale] layout's canonical (the homepage),
 * which is what was collapsing every inner page's canonical/OG onto "/".
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
}: {
  locale: string;
  path: string; // e.g. '/about', '/blog/my-post', or '' for the homepage
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const url = `${BASE_URL}/${locale}${path}`;
  const image = ogImage ?? '/og-image.png';

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        'en-BH': `${BASE_URL}/en${path}`,
        'ar-BH': `${BASE_URL}/ar${path}`,
        'x-default': `${BASE_URL}/en${path}`,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url,
      siteName: 'D3 Digital Data Dimensions',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
