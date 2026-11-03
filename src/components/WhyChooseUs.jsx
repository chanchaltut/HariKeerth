import React from 'react';
import { Link } from 'react-router-dom';
import { PiArrowRight, PiWhatsappLogo } from 'react-icons/pi';
import { BRAND, WHY_CHOOSE_US, waLink } from '../data/site';
import useReveal from '../hooks/useReveal';
import towersImg from '../assets/images/why-towers.webp';
import markLight from '../assets/brand/logo-mark-light.webp';

// First four go in the bento grid; the fifth becomes the dark banner.
const gridFeatures = WHY_CHOOSE_US.slice(0, 4);
const bannerFeature = WHY_CHOOSE_US[4];

const WhyChooseUs = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="section-y bg-ivory" aria-label={`Why choose ${BRAND.name}`}>
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <div className="eyebrow">Why Harikeerth</div>
            <h2 className="h-section mt-5">
              The rare firm that understands <span className="accent-serif">both your site and your books</span>
            </h2>
          </div>
          <div className="reveal lg:pb-2">
            <p className="lead">
              Most consultants cover either engineering or finance. We cover both — so approvals, tenders, taxes and loans move forward together instead of waiting on one another.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={waLink('Hi Harikeerth Infratax! I want to get started.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-shine group">
                Get Started
                <PiArrowRight className="text-gold-300 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/about" className="btn btn-outline">Meet the Partners</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
          <div className="reveal relative min-h-[380px] overflow-hidden rounded-4xl lg:row-span-3">
            <img src={towersImg} alt="Glass towers rising into the sky" width="800" height="1000" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/30 to-transparent" />
            <div className="ring-gold absolute inset-x-5 bottom-5 rounded-3xl bg-brand-950/50 p-5 backdrop-blur-xl">
              <img src={markLight} alt="" width="705" height="420" loading="lazy" className="h-10 w-auto" />
              <p className="mt-4 font-serif text-2xl font-semibold italic leading-snug text-white">“{BRAND.tagline}”</p>
              <p className="mt-2 text-[12.5px] uppercase tracking-[0.18em] text-gold-300">{BRAND.legalName}</p>
            </div>
          </div>

          {gridFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="reveal card card-hover group p-7" style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <span className="icon-tile-soft h-12 w-12 text-2xl transition-all duration-500 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:bg-none group-hover:text-gold-300">
                  <Icon />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{feature.desc}</p>
              </div>
            );
          })}

          {bannerFeature && (
            <div className="reveal surface-dark relative flex flex-col gap-6 rounded-4xl p-7 sm:flex-row sm:items-center sm:justify-between lg:col-span-2">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-500/25 blur-3xl" aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <span className="icon-tile-gold h-12 w-12 text-2xl"><bannerFeature.icon /></span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{bannerFeature.title}</h3>
                  <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-brand-100/70">{bannerFeature.desc}</p>
                </div>
              </div>
              <a href={waLink('Hi Harikeerth Infratax! I need help.')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp relative shrink-0">
                <PiWhatsappLogo className="text-lg" />
                WhatsApp Us
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
