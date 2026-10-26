import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

type Href = Parameters<typeof Link>[0]['href'];

// Reviewer notes in the source drafts, e.g. `[CONFIRM ...]`. Never shown to readers.
const REVIEW_MARKER = /^\[(CONFIRM|VERIFY|ADD)\b/;

const p = { fontSize: 15, color: 'var(--body)', lineHeight: 1.85, marginBottom: 24, fontWeight: 400 } as const;

function inline(text: string, key = ''): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /`([^`]+)`|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${key}-${i++}`;
    if (m[1] !== undefined) {
      if (!REVIEW_MARKER.test(m[1])) {
        out.push(<code key={k} style={{ fontSize: '0.9em', background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: 4 }}>{m[1]}</code>);
      }
    } else if (m[2] !== undefined) {
      out.push(<strong key={k} style={{ fontWeight: 600, color: 'var(--heading)' }}>{m[2]}</strong>);
    } else {
      const href = m[4];
      const style = { color: 'var(--cta)', textDecoration: 'underline' };
      if (href.startsWith('/')) out.push(<Link key={k} href={href as Href} style={style}>{inline(m[3], k)}</Link>);
      else out.push(<a key={k} href={href} style={style} target="_blank" rel="noopener noreferrer">{m[3]}</a>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const cells = (row: string) => row.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

export function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r/g, '').split('\n');
  const nodes: ReactNode[] = [];
  let i = 0;
  let n = 0;

  while (i < lines.length) {
    const line = lines[i];
    const key = `b${n++}`;

    if (!line.trim()) { i++; continue; }

    if (line.startsWith('```')) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++]);
      i++;
      nodes.push(
        <pre key={key} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 20, marginBottom: 24, overflowX: 'auto', fontSize: 13, lineHeight: 1.6, color: 'var(--body)' }}>
          <code>{buf.join('\n')}</code>
        </pre>,
      );
      continue;
    }

    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      i++;
      if (h[1].length === 1) continue; // page hero already renders the title as h1
      const level = h[1].length;
      const Tag = level === 2 ? 'h2' : 'h3';
      nodes.push(
        <Tag key={key} style={{ fontFamily: 'var(--font)', fontSize: level === 2 ? 26 : 20, fontWeight: 400, letterSpacing: -0.4, lineHeight: 1.25, color: 'var(--heading)', margin: level === 2 ? '48px 0 20px' : '32px 0 16px' }}>
          {inline(h[2], key)}
        </Tag>,
      );
      continue;
    }

    if (line.startsWith('>')) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith('>')) buf.push(lines[i++].replace(/^>\s?/, ''));
      nodes.push(
        <blockquote key={key} style={{ ...p, borderLeft: '3px solid var(--border)', paddingLeft: 20, fontStyle: 'italic' }}>
          {inline(buf.join(' '), key)}
        </blockquote>,
      );
      continue;
    }

    if (line.trim().startsWith('|') && lines[i + 1]?.match(/^\s*\|[\s:|-]+\|\s*$/)) {
      const head = cells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(cells(lines[i++]));
      const cell = { padding: '10px 14px', textAlign: 'left', borderBottom: '1px solid var(--border)', verticalAlign: 'top' } as const;
      nodes.push(
        <div key={key} style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, lineHeight: 1.6, color: 'var(--body)' }}>
            <thead>
              <tr>{head.map((c, j) => <th key={j} style={{ ...cell, fontWeight: 600, color: 'var(--heading)', background: 'var(--bg-surface)' }}>{inline(c, `${key}h${j}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri}>{r.map((c, j) => <td key={j} style={cell}>{inline(c, `${key}r${ri}c${j}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const ul = /^[-*]\s+/;
    const ol = /^\d+\.\s+/;
    if (ul.test(line) || ol.test(line)) {
      const ordered = ol.test(line);
      const re = ordered ? ol : ul;
      const items: string[] = [];
      while (i < lines.length && re.test(lines[i])) items.push(lines[i++].replace(re, ''));
      const Tag = ordered ? 'ol' : 'ul';
      nodes.push(
        <Tag key={key} style={{ ...p, paddingLeft: 24, listStyle: ordered ? 'decimal' : 'disc' }}>
          {items.map((it, j) => <li key={j} style={{ marginBottom: 8 }}>{inline(it, `${key}l${j}`)}</li>)}
        </Tag>,
      );
      continue;
    }

    // Paragraph: consecutive plain lines; single newlines become line breaks (FAQ question/answer pairs)
    const buf: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|```|>|\s*\||[-*]\s|\d+\.\s)/.test(lines[i])) buf.push(lines[i++]);
    if (!buf.length) { i++; continue; }
    const content = buf.map((l, j) => <span key={j}>{j > 0 && <br />}{inline(l, `${key}p${j}`)}</span>);
    const empty = buf.every((l) => !inline(l).some((x) => (typeof x === 'string' ? x.trim() : true)));
    if (empty) continue;
    nodes.push(<p key={key} style={p}>{content}</p>);
  }

  return <>{nodes}</>;
}
