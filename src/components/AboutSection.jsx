import React from 'react';
import { Link } from 'react-router-dom';
import { PiCheckBold, PiWhatsappLogo, PiArrowRight, PiHardHatDuotone, PiCalculatorDuotone } from 'react-icons/pi';
import { BRAND, waLink } from '../data/site';
import useReveal from '../hooks/useReveal';
import aboutImg from '../assets/images/about-cranes.webp';
import workersImg from '../assets/images/site-workers.webp';
import markImg from '../assets/brand/logo-mark.webp';

const HIGHLIGHTS = [
  'Registered LLP — LLPIN ' + BRAND.llpin,
  'Led by a Civil Engineer & a Commerce Postgraduate',
  'Tax, compliance & infrastructure — one accountable team',
  'Office in Madurai · Service across Tamil Nadu & India',
  'Clear written quotes — no hidden fees',
  'Due-date tracking for every filing & renewal',
];

// `showHeading` is off on the About page, whose hero already carries the title.
const AboutSection = ({ showHeading = true }) => {
  const sectionRef = useReveal();

  return (
    <section id="about" ref={sectionRef} className="section-y overflow-hidden bg-white" aria-label={`About ${BRAND.name}`}>
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image composition */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-4xl border border-gold-200 bg-gold-50 sm:-left-10 sm:-top-10 sm:h-56 sm:w-56" aria-hidden="true" />
          <div className="grid-lines-light absolute -bottom-10 -right-10 h-64 w-64" aria-hidden="true" />

          <div className="relative grid grid-cols-5 gap-4">
            <div className="relative col-span-3 overflow-hidden rounded-[2rem] shadow-float">
              <img src={aboutImg} alt="Tower cranes over a building under construction" width="900" height="1029" loading="lazy" decoding="async" className="h-[380px] w-full object-cover sm:h-[520px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white">
                <span className="icon-tile h-10 w-10 text-xl"><PiHardHatDuotone /></span>
                <p className="text-sm font-semibold leading-snug">Infrastructure<br /><span className="font-normal text-white/70">Plan approval · Projects · Tenders</span></p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <div className="flex aspect-square items-center justify-center rounded-[1.75rem] border border-line bg-ivory p-5 shadow-soft">
                <img src={markImg} alt="" width="705" height="420" loading="lazy" className="w-full" />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-[1.75rem] shadow-lift">
                <img src={workersImg} alt="Engineers and workers on a construction site" width="900" height="600" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
                <span className="absolute bottom-3 left-3 icon-tile-gold h-9 w-9 rounded-xl text-lg"><PiCalculatorDuotone /></span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-6 rounded-3xl border border-line bg-white/95 px-5 py-4 shadow-lift backdrop-blur sm:-bottom-10 sm:left-10">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-gold-700">Our promise</p>
            <p className="mt-1 font-serif text-xl font-semibold italic text-brand-700">Built right. Filed right. On time.</p>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          {showHeading && (
            <div className="reveal">
              <div className="eyebrow">About Us</div>
              <h2 className="h-section mt-5">
                Where engineering meets <span className="accent-serif">financial expertise</span>
              </h2>
            </div>
          )}

          <div className="reveal mt-7 space-y-4">
            <p className="lead">
              <strong className="font-semibold text-ink">{BRAND.legalName}</strong> is a Madurai-based firm built on a simple idea: a business or a construction project should not need five different consultants to get its approvals, filings and finance in order.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Our partners bring together <strong className="font-semibold text-ink">civil engineering</strong> and <strong className="font-semibold text-ink">commerce &amp; taxation</strong>. That lets us take a project from building plan approval and tender documentation to GST, accounting, bank loans and statutory compliance — with one team accountable from start to finish.
            </p>
          </div>

          <ul className="reveal mt-9 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-ivory p-4 text-[14px] font-medium leading-snug text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-[10px] text-brand-900">
                  <PiCheckBold />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={waLink('Hi Harikeerth Infratax! I want to book a free consultation.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-shine">
              <PiWhatsappLogo className="text-lg text-gold-300" />
              Book Free Consultation
            </a>
            {showHeading && (
              <Link to="/about" className="btn btn-outline group">
                More About Us
                <PiArrowRight className="text-gold-600 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
