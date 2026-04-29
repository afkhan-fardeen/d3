import { MetadataRoute } from 'next';
import { SOLUTIONS, INDUSTRIES, CASE_STUDIES, BLOG_POSTS } from '@/lib/data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://d3.com.bh';
const LOCALES = ['en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = ['', '/about', '/projects', '/partners', '/solutions', '/industries', '/case-studies', '/clients', '/contact', '/blog'];
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
