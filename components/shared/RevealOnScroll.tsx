'use client';

import { useEffect, useRef } from 'react';

/**
 * Elements are visible by default (no opacity:0 on server).
 * JS progressively enhances with a fade-up animation.
 * If JS is blocked/slow, content still shows immediately.
 */
export function RevealOnScroll({ children, delay = 0, className = '' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply the initial hidden state only after JS runs
    el.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('reveal-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    // Small delay to allow first paint before hiding
    const t = setTimeout(() => observer.observe(el), 50);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { '--reveal-delay': `${delay}ms` } as React.CSSProperties : undefined}
    >
      {children}
    </div>
  );
}
