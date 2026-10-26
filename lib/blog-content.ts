import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'content', 'blog');

export type BlogArticle = {
  meta: Record<string, string>;
  body: string;
};

/** Markdown article for a slug, or null when the post uses legacy paragraph content. */
export function getBlogArticle(slug: string): BlogArticle | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1');
  }
  return { meta, body: m[2] };
}
