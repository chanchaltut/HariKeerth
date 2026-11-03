import React, { useEffect, useRef } from 'react';
import { PiStackDuotone, PiListChecksDuotone, PiUsersThreeDuotone, PiPhoneCallDuotone } from 'react-icons/pi';
import { SERVICES, SERVICE_COUNT } from '../data/services';
import { PARTNERS, BRAND } from '../data/site';

// Counts are derived from the actual catalogue — no invented client numbers.
const STATS = [
  { number: SERVICES.length, suffix: '', label: 'Service Verticals', icon: PiStackDuotone },
  { number: parseInt(SERVICE_COUNT, 10), suffix: '+', label: 'Registrations, Filings & Services', icon: PiListChecksDuotone },
  { number: PARTNERS.length, suffix: '', label: 'Designated Partners', icon: PiUsersThreeDuotone },
  { number: BRAND.phones.length, suffix: '', label: 'Direct Helplines', icon: PiPhoneCallDuotone },
];

// `overlap` lifts the card over the bottom edge of a dark hero above it.
const StatsBar = ({ overlap = false }) => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animate = (el, target) => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1800, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 4)) * target);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        countersRef.current.forEach((el, i) => el && animate(el, STATS[i].number));
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative z-10 px-4 sm:px-6 lg:px-8 ${overlap ? '-mt-20 sm:-mt-24' : 'bg-surface py-16 sm:py-20'}`}
      aria-label="Harikeerth Infratax at a glance"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative grid grid-cols-2 overflow-hidden rounded-4xl border border-line bg-white shadow-float lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-700 via-gold-400 to-brand-700" aria-hidden="true" />
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group relative flex flex-col gap-4 p-6 sm:p-8 ${i % 2 === 0 ? 'border-r border-line' : ''} ${i < 2 ? 'border-b border-line lg:border-b-0' : ''} ${i === 1 ? 'lg:border-r' : ''}`}
              >
                <span className="icon-tile-soft h-11 w-11 text-[22px] transition-transform duration-500 group-hover:-translate-y-0.5"><Icon /></span>
                <div>
                  <div className="flex items-baseline gap-0.5 font-serif text-[2.6rem] font-semibold leading-none text-brand-700 sm:text-[3.4rem]">
                    <span ref={(el) => (countersRef.current[i] = el)} className="tabular-nums">{stat.number}</span>
                    <span className="text-gradient-gold">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-[13px] font-medium text-ink-soft sm:text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
