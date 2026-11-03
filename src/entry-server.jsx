// Build-time renderer used by scripts/prerender.js to turn every route into static HTML,
// so search engines and AI crawlers get full content without running JavaScript.
import React from 'react';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { SERVICES, SUB_SERVICES } from './data/services';
import { ARTICLES } from './data/articles';

// Every URL to prerender, with sitemap hints
export const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, changefreq: 'monthly', priority: '0.9' })),
  ...SUB_SERVICES.map((s) => ({ path: `/services/${s.slug}`, changefreq: 'monthly', priority: '0.8' })),
  ...ARTICLES.map((a) => ({ path: `/blog/${a.slug}`, changefreq: 'yearly', priority: '0.6', lastmod: a.date })),
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-conditions', changefreq: 'yearly', priority: '0.3' },
];

export function render(url) {
  const helmetContext = {};

  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, callback) { html += chunk; callback(); },
      final(callback) { resolve({ html, helmet: helmetContext.helmet }); callback(); },
    });

    // onAllReady waits for every lazy() page to load, so the output holds the full page
    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        onAllReady() { pipe(sink); },
        onShellError: reject,
        onError: reject,
      }
    );
  });
}
