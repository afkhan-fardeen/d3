import { MetadataRoute } from 'next';
import { SOLUTIONS, INDUSTRIES, CASE_STUDIES, BLOG_POSTS } from '@/lib/data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://dthree.co';
const LOCALES = ['en', 'ar'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Static pages — must match real routes under app/[locale]/. There is no
  // /solutions or /industries index page (only /solutions/[slug] and
  // /industries/[slug]), so those are intentionally excluded here.
  const staticPages = ['', '/about', '/projects', '/partners', '/case-studies', '/clients', '/contact', '/blog', '/news', '/careers', '/privacy-policy', '/sitemap'];
  for (const locale of LOCALES) {
    for (const page of staticPages) {
      routes.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  // Solution pages
  for (const sol of SOLUTIONS) {
    for (const locale of LOCALES) {
      routes.push({
        url: `${BASE_URL}/${locale}/solutions/${sol.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }
  }

  // Industry pages
  for (const ind of INDUSTRIES) {
    for (const locale of LOCALES) {
      routes.push({
        url: `${BASE_URL}/${locale}/industries/${ind.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  // Case studies
  for (const cs of CASE_STUDIES) {
    for (const locale of LOCALES) {
      routes.push({
        url: `${BASE_URL}/${locale}/case-studies/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // Blog posts
  for (const post of BLOG_POSTS) {
    for (const locale of LOCALES) {
      routes.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return routes;
}
