import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PiCaretRight } from 'react-icons/pi';
import { BRAND, SITE_URL, OG_IMAGE } from '../data/site';
import logoHorizontal from '../assets/brand/logo-horizontal.webp';
import logoHorizontalLight from '../assets/brand/logo-horizontal-light.webp';

// ─── Horizontal logo (mark + wordmark) ───────────────────────
export const Logo = ({ light = false, className = 'h-11 w-auto', eager = false }) => (
  <img
    src={light ? logoHorizontalLight : logoHorizontal}
    alt={BRAND.legalName}
    width="729"
    height="144"
    className={className}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
  />
);

// ─── Per-page SEO head ───────────────────────────────────────
export const Seo = ({ title, description, path = '/', keywords, image = OG_IMAGE, type = 'website', noindex = false, jsonLd = [] }) => {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const fullTitle = title.includes(BRAND.name) ? title : `${title} | ${BRAND.name}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  );
};

// ─── Navy aurora + gold glow backdrop for dark sections ──────
export const DarkBackdrop = ({ className = '' }) => (
  <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`} aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(35,90,152,0.55),transparent_60%)]" />
    <div className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-[120px]" />
    <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-gold-500/15 blur-[120px]" />
    <div className="grid-lines absolute inset-0" />
    <div className="noise absolute inset-0" />
  </div>
);

// Gold swoosh lines borrowed from the stationery design
export const GoldSwoosh = ({ className = '' }) => (
  <svg className={`pointer-events-none absolute ${className}`} viewBox="0 0 800 400" fill="none" aria-hidden="true" preserveAspectRatio="none">
    <defs>
      <linearGradient id="swoosh" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#C9972B" stopOpacity="0" />
        <stop offset="0.45" stopColor="#E6C565" stopOpacity="0.9" />
        <stop offset="1" stopColor="#C9972B" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <path d="M0 360 C 240 330, 520 250, 800 40" stroke="url(#swoosh)" strokeWidth="2" />
    <path d="M0 390 C 260 360, 560 280, 800 90" stroke="url(#swoosh)" strokeWidth="1" opacity="0.55" />
  </svg>
);

// ─── Eyebrow + title + description ───────────────────────────
export const SectionHeading = ({ eyebrow, title, description, align = 'center', dark = false, className = '' }) => {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <div className={`eyebrow ${centered ? 'eyebrow-center' : ''} ${dark ? 'eyebrow-dark' : ''}`}>{eyebrow}</div>}
      <h2 className={`h-section mt-5 ${dark ? 'text-white' : ''}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${centered ? 'mx-auto max-w-2xl' : ''} ${dark ? 'text-brand-100/70' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

// ─── Breadcrumb pill used on inner-page heroes ───────────────
export const Breadcrumb = ({ items }) => (
  <nav className="mb-9 flex justify-center" aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[12.5px] text-white/60 backdrop-blur">
      {items.map(([name, href], i) => (
        <React.Fragment key={name}>
          {i > 0 && <li aria-hidden="true"><PiCaretRight className="text-[10px] text-gold-400" /></li>}
          <li>
            {href
              ? <Link to={href} className="transition-colors hover:text-white">{name}</Link>
              : <span className="font-semibold text-white" aria-current="page">{name}</span>}
          </li>
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

// ─── Dark hero at the top of inner pages ─────────────────────
export const PageHero = ({ eyebrow, title, description, children, top, image }) => (
  <section className="surface-dark pb-20 pt-40 sm:pb-24 sm:pt-48">
    {image && (
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <img src={image} alt="" className="h-full w-full animate-ken-burns object-cover opacity-[0.22]" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/80 to-brand-950" />
      </div>
    )}
    <DarkBackdrop />
    <GoldSwoosh className="-right-20 bottom-0 h-56 w-[60rem] opacity-60" />
    <div className="container-x relative">
      {top}
      <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
        {eyebrow && <div className="eyebrow eyebrow-center eyebrow-dark">{eyebrow}</div>}
        <h1 className="h-display mt-6 text-white">{title}</h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/75 sm:text-lg">{description}</p>
        )}
        {children}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
  </section>
);
