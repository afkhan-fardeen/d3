'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { PROJECT_IMAGES, type ProjectImage } from '@/lib/projects';

type Solution = NonNullable<ProjectImage['solution']>;
type Industry = NonNullable<ProjectImage['industry']>;

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

function formatTitle(p: ProjectImage) {
  return p.location ? `${p.client} — ${p.location}` : p.client;
}

function groupByClient(items: ProjectImage[]) {
  const map = new Map<string, ProjectImage[]>();
  for (const item of items) {
    const key = item.client;
    const list = map.get(key);
    if (list) list.push(item);
    else map.set(key, [item]);
  }
  return Array.from(map.entries()).map(([client, images]) => ({ client, images }));
}

export function ProjectsGallery() {
  const solutions = useMemo(() => {
    const list = PROJECT_IMAGES.map((p) => p.solution).filter(Boolean) as Solution[];
    return ['All', ...uniq(list)] as const;
  }, []);

  const industries = useMemo(() => {
    const list = PROJECT_IMAGES.map((p) => p.industry).filter(Boolean) as Industry[];
    return ['All', ...uniq(list)] as const;
  }, []);

  const [activeSolution, setActiveSolution] = useState<(typeof solutions)[number]>('All');
  const [activeIndustry, setActiveIndustry] = useState<(typeof industries)[number]>('All');
  const visible = useMemo(() => {
    return PROJECT_IMAGES.filter((p) => {
      const okSolution = activeSolution === 'All' ? true : p.solution === activeSolution;
      const okIndustry = activeIndustry === 'All' ? true : p.industry === activeIndustry;
      return okSolution && okIndustry;
    });
  }, [activeIndustry, activeSolution]);

  const groups = useMemo(() => groupByClient(visible), [visible]);

  // default: show a small set per client to reduce clutter
  const DEFAULT_VISIBLE_PER_CLIENT = 6;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const isExpanded = (client: string) => !!expanded[client];
  const toggleClient = (client: string) => setExpanded((s) => ({ ...s, [client]: !s[client] }));

  useEffect(() => {
    // Reset expanded sections when filters change
    setExpanded({});
  }, [activeIndustry, activeSolution]);

  return (
    <>
      <div className="pg-filters">
        <div className="pg-filter-row" role="tablist" aria-label="Filter by solution">
          <div className="pg-filter-label">Solution</div>
          <div className="pg-filter-chips">
            {solutions.map((s) => (
              <button
                key={s}
                type="button"
                role="tab"
                aria-selected={activeSolution === s}
                className={`pg-chip${activeSolution === s ? ' pg-chip--on' : ''}`}
                onClick={() => setActiveSolution(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="pg-filter-row" role="tablist" aria-label="Filter by industry">
          <div className="pg-filter-label">Industry</div>
          <div className="pg-filter-chips">
            {industries.map((s) => (
              <button
                key={s}
                type="button"
                role="tab"
                aria-selected={activeIndustry === s}
                className={`pg-chip${activeIndustry === s ? ' pg-chip--on' : ''}`}
                onClick={() => setActiveIndustry(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pg-groups" aria-label="Project gallery grouped by client">
        {groups.map(({ client, images }) => {
          const expandedOn = isExpanded(client);
          const shown = expandedOn ? images : images.slice(0, DEFAULT_VISIBLE_PER_CLIENT);
          const remaining = Math.max(0, images.length - shown.length);

          return (
            <section key={client} className="pg-group">
              <div className="pg-group-head">
                <div>
                  <div className="pg-group-title">{client}</div>
                  <div className="pg-group-sub">{images.length} photo{images.length === 1 ? '' : 's'}</div>
                </div>
                {images.length > DEFAULT_VISIBLE_PER_CLIENT && (
                  <button type="button" className="pg-group-toggle" onClick={() => toggleClient(client)}>
                    {expandedOn ? 'Show less' : `Show all (${images.length})`}
                  </button>
                )}
              </div>

              <div className="pg-grid" aria-label={`${client} projects`}>
                {shown.map((p) => {
                  const title = formatTitle(p);
                  return (
                    <div
                      key={p.id}
                      className="pg-card"
                    >
                      <div className="pg-media">
                        {p.src ? (
                          <Image
                            src={p.src}
                            alt={p.alt}
                            fill
                            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                          />
                        ) : (
                          <div className="pg-placeholder">{title}</div>
                        )}
                      </div>
                      <div className="pg-meta">
                        <div className="pg-title">{title}</div>
                        {(p.industry || p.solution) && (
                          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                            {p.industry && <div className="pg-badge">{p.industry}</div>}
                            {p.solution && <div className="pg-badge pg-badge--dark">{p.solution}</div>}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {!expandedOn && remaining > 0 && (
                <div className="pg-group-more">+ {remaining} more in {client}</div>
              )}
            </section>
          );
        })}
      </div>

      <style>{`
        .pg-filters{ display:flex; flex-direction:column; gap: 10px; margin-bottom: 18px; }
        .pg-filter-row{ display:flex; align-items:flex-start; gap: 12px; flex-wrap: wrap; }
        .pg-filter-label{
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          padding-top: 9px;
          min-width: 74px;
        }
        .pg-filter-chips{ display:flex; flex-wrap:wrap; gap:10px; }
        .pg-chip{
          appearance:none;
          border:1px solid var(--border);
          background: var(--bg-surface);
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
          border-radius: 999px;
          padding: 8px 12px;
          cursor:pointer;
          transition: background .2s, color .2s, border-color .2s, transform .2s;
        }
        .pg-chip:hover { border-color: color-mix(in srgb, var(--muted) 55%, var(--border)); transform: translateY(-1px); }
        .pg-chip--on{
          background: var(--heading);
          border-color: var(--heading);
          color: #fff;
        }

        .pg-groups{ display: flex; flex-direction: column; gap: 26px; }
        .pg-group{
          padding-top: 4px;
        }
        .pg-group-head{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap: 16px;
          margin-bottom: 12px;
        }
        .pg-group-title{
          font-size: 18px;
          font-weight: 900;
          color: var(--heading);
          letter-spacing: -0.4px;
          line-height: 1.2;
        }
        .pg-group-sub{
          font-size: 12px;
          color: var(--muted);
          margin-top: 4px;
          font-weight: 600;
        }
        .pg-group-toggle{
          appearance:none;
          border: 1px solid var(--border);
          background: var(--bg-surface);
          color: var(--heading);
          font-size: 12px;
          font-weight: 800;
          padding: 8px 12px;
          border-radius: 999px;
          cursor:pointer;
          transition: transform .2s, border-color .2s, background .2s;
          white-space: nowrap;
        }
        .pg-group-toggle:hover{
          transform: translateY(-1px);
          border-color: color-mix(in srgb, var(--muted) 35%, var(--border));
        }
        .pg-group-more{
          margin-top: 10px;
          font-size: 12px;
          color: var(--muted);
          font-weight: 700;
        }

        .pg-grid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 860px)  { .pg-grid{ grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 520px)  { .pg-grid{ grid-template-columns: 1fr !important; } }

        .pg-card{
          text-align:left;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow:hidden;
          padding:0;
          cursor: default;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }
        .pg-card:hover{
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: color-mix(in srgb, var(--muted) 30%, var(--border));
        }
        .pg-media{
          position:relative;
          aspect-ratio: 4 / 5;
          width:100%;
          background: var(--bg-highlight);
        }
        .pg-placeholder{
          position:absolute; inset:0;
          display:flex; align-items:center; justify-content:center;
          color: var(--muted);
          font-size: 12px;
          font-weight: 700;
          padding: 14px;
          text-align:center;
        }
        .pg-meta{
          display:flex; align-items:flex-start; justify-content:space-between; gap:12px;
          padding: 14px 14px 13px;
        }
        .pg-title{
          font-size: 14px;
          font-weight: 800;
          color: var(--heading);
          line-height: 1.25;
          letter-spacing: -0.2px;
        }
        .pg-badge{
          flex-shrink:0;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--bg-surface);
          white-space: nowrap;
        }
        .pg-badge--dark{
          color: #fff;
          background: var(--heading);
          border-color: var(--heading);
        }

      `}</style>
    </>
  );
}

