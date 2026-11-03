import React from 'react';
import { Link } from 'react-router-dom';
import {
  PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo, PiYoutubeLogo, PiWhatsappLogo,
  PiPhoneCall, PiEnvelopeSimple, PiMapPin, PiClock, PiArrowUpRight, PiIdentificationBadge,
} from 'react-icons/pi';
import { BRAND, formatPhone, waLink } from '../data/site';
import { SERVICES, SUB_SERVICES } from '../data/services';
import { Logo, GoldSwoosh } from './ui';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

const popularSlugs = [
  'private-limited-company', 'llp-registration', 'gst-registration', 'gst-return-filing', 'income-tax-return-filing',
  'msme-udyam-registration', 'trademark-registration', 'iso-certification', 'building-plan-approval', 'e-tender-registration',
];
const popular = popularSlugs.map((slug) => SUB_SERVICES.find((s) => s.slug === slug)).filter(Boolean);

const socialIcons = { facebook: PiFacebookLogo, instagram: PiInstagramLogo, linkedin: PiLinkedinLogo, youtube: PiYoutubeLogo };
const socialLinks = [
  { icon: PiWhatsappLogo, href: waLink('Hi Harikeerth Infratax!'), label: 'WhatsApp' },
  ...Object.entries(BRAND.social).filter(([, href]) => href).map(([key, href]) => ({ icon: socialIcons[key], href, label: key[0].toUpperCase() + key.slice(1) })),
];

const FooterHeading = ({ children }) => (
  <h3 className="mb-6 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
    <span className="h-px w-5 bg-gold-500" />
    {children}
  </h3>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="group inline-flex items-center gap-1.5 py-1 text-[14px] text-white/65 transition-colors hover:text-white">
      {children}
      <PiArrowUpRight className="-translate-x-1 text-xs text-gold-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  </li>
);

const Footer = () => (
  <footer className="relative isolate overflow-hidden bg-brand-950 text-white">
    <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[120px]" aria-hidden="true" />
    <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
    <GoldSwoosh className="-right-40 top-0 -z-10 h-64 w-[70rem] rotate-180 opacity-30" />
    <div className="h-[3px] bg-gradient-to-r from-brand-700 via-gold-400 to-brand-700" aria-hidden="true" />

    <div className="container-x pb-10 pt-20 sm:pt-24">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-4">
          <Link to="/" className="inline-block" aria-label={`${BRAND.name} — Home`}>
            <Logo light className="h-14 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm font-serif text-xl font-medium italic leading-snug text-gold-200">{BRAND.tagline}</p>
          <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-white/60">
            Tax, compliance, infrastructure and growth services from one accountable team in Madurai, Tamil Nadu.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] text-white/75">
            <PiIdentificationBadge className="text-base text-gold-400" />
            {BRAND.legalName} · LLPIN {BRAND.llpin}
          </p>

          <div className="mt-7 flex items-center gap-2.5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-500 hover:text-brand-950"
              >
                <Icon />
              </a>
            ))}
            <a href={`mailto:${BRAND.email}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-500 hover:text-brand-950">
              <PiEnvelopeSimple />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <FooterHeading>Service Verticals</FooterHeading>
          <ul className="space-y-1">
            {SERVICES.map((s) => <FooterLink key={s.slug} to={`/services/${s.slug}`}>{s.title}</FooterLink>)}
          </ul>
        </div>

        {/* Popular + quick links */}
        <div className="lg:col-span-2">
          <FooterHeading>Popular</FooterHeading>
          <ul className="space-y-1">
            {popular.map((s) => <FooterLink key={s.slug} to={`/services/${s.slug}`}>{s.name}</FooterLink>)}
          </ul>
          <div className="mt-8">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-1">
              {quickLinks.map((l) => <FooterLink key={l.name} to={l.href}>{l.name}</FooterLink>)}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="sm:col-span-2 lg:col-span-3">
          <FooterHeading>Visit or Call</FooterHeading>
          <ul className="space-y-5 text-[14px] text-white/70">
            <li className="flex items-start gap-3">
              <PiMapPin className="mt-0.5 shrink-0 text-lg text-gold-400" />
              <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="leading-relaxed transition-colors hover:text-white">
                {BRAND.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                <span className="block">Tamil Nadu, India</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PiPhoneCall className="mt-0.5 shrink-0 text-lg text-gold-400" />
              <span className="flex flex-col gap-1">
                {BRAND.phones.map((p) => <a key={p} href={`tel:${p}`} className="transition-colors hover:text-white">{formatPhone(p)}</a>)}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <PiEnvelopeSimple className="mt-0.5 shrink-0 text-lg text-gold-400" />
              <a href={`mailto:${BRAND.email}`} className="break-all transition-colors hover:text-white">{BRAND.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <PiClock className="mt-0.5 shrink-0 text-lg text-gold-400" />
              <span>{BRAND.timings}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <p
        className="pointer-events-none mt-20 select-none bg-gradient-to-b from-gold-300/[0.16] to-transparent bg-clip-text text-center font-serif text-[17vw] font-semibold italic leading-[0.85] tracking-[-0.02em] text-transparent lg:text-[13rem]"
        aria-hidden="true"
      >
        Harikeerth
      </p>

      <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-white/45 md:flex-row">
        <p>© {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
          <Link to="/terms-conditions" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
          <span>
            Website designed &amp; developed by{' '}
            <a
              href="https://www.codehyphen.in/"
              target="_blank"
              rel="noopener"
              title="Code Hyphen — Website Design, SEO, AEO & GEO Agency in India"
              className="font-semibold text-white/70 transition-colors hover:text-gold-300"
            >
              Code Hyphen
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
