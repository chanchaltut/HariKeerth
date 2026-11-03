import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiWhatsappLogo, PiArrowRight, PiArrowUp, PiSealCheckFill, PiMapPinDuotone } from 'react-icons/pi';
import { BRAND, PILLARS, waLink } from '../data/site';
import { SERVICES, SERVICE_COUNT } from '../data/services';
import { DarkBackdrop, GoldSwoosh } from './ui';
import heroImg from '../assets/images/hero-skyline.webp';
import heroImgSm from '../assets/images/hero-skyline-1080.webp';
import markLight from '../assets/brand/logo-mark-light.webp';

const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 700);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="home" className="surface-dark flex min-h-[100svh] items-center" aria-label="Introduction">
        {/* Golden-hour skyline, tinted navy */}
        <div className="absolute inset-0 -z-20" aria-hidden="true">
          <img
            src={heroImg}
            srcSet={`${heroImgSm} 1080w, ${heroImg} 1920w`}
            sizes="100vw"
            alt=""
            width="1920"
            height="1135"
            fetchpriority="high"
            decoding="async"
            className="h-full w-full animate-ken-burns object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/10 to-brand-950/60" />
        </div>
        <DarkBackdrop />
        <GoldSwoosh className="-left-10 bottom-10 h-72 w-[70rem] opacity-70" />

        <div className="container-x relative grid items-center gap-14 pb-40 pt-40 sm:pt-48 lg:grid-cols-12 lg:pb-44">
          {/* ── Copy ── */}
          <div className="lg:col-span-7">
            <div className="inline-flex animate-fade-in-up items-center gap-2.5 rounded-full border border-gold-400/30 bg-white/[0.05] py-1.5 pl-1.5 pr-4 backdrop-blur">
              <span className="rounded-full bg-gold-500/15 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-300">LLP</span>
              <span className="text-[12.5px] font-medium text-white/80">Tax · Compliance · Infrastructure · Growth</span>
            </div>

            <h1 className="h-display mt-8 animate-fade-in-up text-white [animation-delay:80ms]">
              Engineering Your Projects.
              <span className="accent-serif-light block animate-shimmer pt-1 leading-[1.05]">Empowering Your Enterprise.</span>
            </h1>

            <p className="mt-7 max-w-xl animate-fade-in-up text-lg leading-relaxed text-brand-100/80 [animation-delay:160ms] sm:text-xl">
              Civil engineering and financial compliance under one roof — from building plan approvals and tenders to GST, audits, bank loans and company formation.
            </p>

            <div className="mt-10 flex animate-fade-in-up flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
              <a href={waLink('Hi Harikeerth Infratax! I would like a free consultation.')} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-gold btn-shine">
                <PiWhatsappLogo className="text-xl" />
                Free Consultation
              </a>
              <Link to="/services" className="btn btn-lg btn-glass group">
                Explore {SERVICE_COUNT} Services
                <PiArrowRight className="text-lg text-gold-300 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <ul className="mt-12 flex animate-fade-in-up flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-[13.5px] text-white/75 [animation-delay:320ms]">
              <li className="flex items-center gap-2"><PiSealCheckFill className="text-gold-400" /> Registered LLP · {BRAND.llpin}</li>
              <li className="flex items-center gap-2"><PiSealCheckFill className="text-gold-400" /> Engineer & commerce-led</li>
              <li className="flex items-center gap-2"><PiMapPinDuotone className="text-gold-400" /> Madurai, Tamil Nadu</li>
            </ul>
          </div>

          {/* ── Emblem + pillars ── */}
          <div className="relative hidden lg:col-span-5 lg:block" aria-hidden="true">
            <div className="ring-gold relative animate-fade-in rounded-[2rem] bg-brand-950/55 p-8 shadow-float backdrop-blur-xl [animation-delay:200ms]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
              <div className="relative flex items-center gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-gold-400/25 bg-white/[0.04]">
                  <img src={markLight} alt="" width="705" height="420" className="w-[78%]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">Harikeerth Infratax LLP</p>
                  <p className="mt-1.5 font-serif text-2xl font-semibold italic leading-snug text-white">One firm for your project &amp; your paperwork.</p>
                </div>
              </div>
              <div className="rule-gold my-7" />
              <div className="grid grid-cols-2 gap-3">
                {PILLARS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-gold-400/40">
                    <Icon className="text-2xl text-gold-400" />
                    <p className="mt-3 text-[15px] font-semibold text-white">{title}</p>
                    <p className="mt-1 text-[12.5px] leading-snug text-white/55">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-8 right-8 animate-float rounded-2xl border border-gold-400/25 bg-brand-900/80 px-5 py-3.5 shadow-float backdrop-blur-xl">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-gold-300">Service verticals</p>
              <p className="font-serif text-4xl font-semibold italic leading-none text-white">{SERVICES.length}</p>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/60 bg-white/90 text-brand-700 shadow-lift backdrop-blur transition-all duration-500 ease-out-expo hover:-translate-y-0.5 sm:right-6 ${
          showScrollTop ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <PiArrowUp />
      </button>
    </>
  );
};

export default Hero;
