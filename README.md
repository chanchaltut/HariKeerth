# Harikeerth Infratax LLP — www.harikeerth.in

Marketing website for **Harikeerth Infratax LLP** (LLPIN ACZ-6942), Madurai — tax, compliance, infrastructure and growth services.

React 18 + Vite + Tailwind CSS, prerendered to static HTML for SEO and deployed on Vercel.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Client build → SSR build → prerender every route to `dist/` + `sitemap.xml` |
| `npm run preview` | Serve the production build |
| `npm run lint` | ESLint |
| `python3 scripts/build-brand-assets.py` | Regenerate logos, favicons and WebP photos from `brand-assets/` |
| `python3 scripts/build-brand-assets.py --og` | …and re-render the social share banner (needs `google-chrome`) |

## Where things live

```
brand-assets/        client-supplied masters (logo vectors, stationery, design sources, photography, OG banner source)
public/              favicons, manifest, robots.txt, llms.txt, og-image.jpg, logo.png
src/data/site.js     brand details, contacts, partners, FAQs, process — edit content here
src/data/services.js 10 service verticals + individual services (each gets /services/<slug>)
src/data/articles.js Insights articles (each gets /blog/<slug>)
src/assets/          WebP logos & photos imported by components (hashed + cached by Vite)
api/enquiry.js       Vercel function: contact form → WhatsApp (CallMeBot)
```

Adding a service or article to `src/data/*` automatically adds its page, menu entry, prerendered HTML and sitemap URL.

## Environment variables (Vercel)

- `CALLMEBOT_PHONE` — WhatsApp number that receives enquiries, with country code (e.g. `919363741301`)
- `CALLMEBOT_APIKEY` — API key issued by CallMeBot for that number
