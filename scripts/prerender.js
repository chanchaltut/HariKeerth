/**
 * Prerenders every route of the built app into static HTML and generates sitemap.xml.
 * Runs after `vite build` (client → dist/) and `vite build --ssr` (renderer → dist-ssr/).
 *
 *   /                 → dist/index.html
 *   /about            → dist/about.html          (served at /about via vercel.json cleanUrls)
 *   /services/gst-... → dist/services/gst-....html
 *   /blog/<slug>      → dist/blog/<slug>.html
 *   unknown paths     → dist/404.html            (served by Vercel with a real 404 status)
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE = 'https://www.harikeerth.in';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
const ROOT_DIV = '<div id="root"></div>';

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
if (!SEO_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
  throw new Error('dist/index.html is missing the <!--seo:start/end--> markers or the empty root div');
}

// The route list lives next to the renderer (src/entry-server.jsx) so it always matches the data
const { render, routes: ROUTES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const renderPage = async (url) => {
  const { html, helmet } = await render(url);
  const head = ['title', 'meta', 'link', 'script']
    .map((key) => helmet[key].toString())
    .filter(Boolean)
    .join('\n  ');
  return {
    head,
    document: template
      .replace(SEO_BLOCK, () => head)
      .replace(ROOT_DIV, () => `<div id="root">${html}</div>`),
  };
};

const writePage = async (file, contents) => {
  const target = path.join(distDir, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, contents);
};

for (const route of ROUTES) {
  const { head, document } = await renderPage(route.path);
  const canonical = `${SITE}${route.path}`;
  // Fail the build rather than ship a page with a missing or wrong canonical/title
  if (!head.includes(`rel="canonical" href="${canonical}"`)) {
    throw new Error(`${route.path}: expected canonical ${canonical}`);
  }
  if (!/<title[^>]*>[^<]+<\/title>/.test(head)) throw new Error(`${route.path}: missing <title>`);

  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
  await writePage(file, document);
  console.log(`prerendered ${route.path.padEnd(56)} → dist/${file}`);
}

const notFound = await renderPage('/__not-found__');
await writePage('404.html', notFound.document);
console.log(`prerendered ${'(404)'.padEnd(36)} → dist/404.html`);

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${r.lastmod || lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`wrote dist/sitemap.xml (${ROUTES.length} URLs)`);

await fs.rm(ssrDir, { recursive: true, force: true });
