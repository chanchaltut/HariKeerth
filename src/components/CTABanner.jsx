import React from 'react';
import { PiPhoneCall, PiArrowRight, PiWhatsappLogo, PiShieldCheckDuotone, PiMapPinDuotone, PiTagDuotone, PiClockDuotone } from 'react-icons/pi';
import { BRAND, formatPhone, waLink } from '../data/site';
import { DarkBackdrop, GoldSwoosh } from './ui';
import markLight from '../assets/brand/logo-mark-light.webp';

const trustPoints = [
  { icon: PiShieldCheckDuotone, text: 'Confidential & Safe' },
  { icon: PiTagDuotone, text: 'No Hidden Fees' },
  { icon: PiClockDuotone, text: 'Time-Bound Delivery' },
  { icon: PiMapPinDuotone, text: 'Madurai Office' },
];

const CTABanner = () => (
  <section className="bg-white px-3 py-16 sm:px-5 sm:py-24" aria-label="Start a conversation">
    <div className="surface-dark mx-auto max-w-7xl rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-24">
      <DarkBackdrop />
      <GoldSwoosh className="-left-20 bottom-0 h-64 w-[70rem] opacity-70" />
      <div className="relative mx-auto max-w-3xl text-center">
        <img src={markLight} alt="" width="705" height="420" loading="lazy" className="mx-auto h-14 w-auto" aria-hidden="true" />
        <div className="eyebrow eyebrow-center eyebrow-dark mt-8">Free First Consultation</div>

        <h2 className="h-section mt-6 text-white">
          Let’s build your business — <span className="accent-serif-light">the right way.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-100/75 sm:text-lg">
          Tell us what you are planning — a new company, a building, a tender or a loan. We’ll map out every approval, filing and document, with a clear quote.
        </p>

        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {trustPoints.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Icon className="text-lg text-gold-400" />
              {text}
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waLink('Hi Harikeerth Infratax! I would like a free consultation.')} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-gold btn-shine">
            <PiWhatsappLogo className="text-xl" />
            WhatsApp for Free Consultation
          </a>
          <a href={`tel:${BRAND.phone}`} className="btn btn-lg btn-glass group">
            <PiPhoneCall className="text-lg text-gold-300" />
            {formatPhone(BRAND.phone)}
            <PiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
