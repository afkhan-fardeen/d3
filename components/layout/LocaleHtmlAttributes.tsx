'use client';
import { useEffect } from 'react';
import { useLocale } from 'next-intl';

export function LocaleHtmlAttributes() {
  const locale = useLocale();
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', locale);
    html.setAttribute('dir', 'ltr');
  }, [locale]);
  return null;
}
