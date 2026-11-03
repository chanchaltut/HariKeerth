import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowUpRight } from 'react-icons/pi';
import { SUB_SERVICES, SUB_SERVICE_GROUPS } from '../data/services';
import useReveal from '../hooks/useReveal';
import { SectionHeading } from './ui';

// Directory of individual registrations, licences and filings — each links to its own page.
const RegistrationsSection = () => {
  const [group, setGroup] = useState(SUB_SERVICE_GROUPS[0]);
  const sectionRef = useReveal([group]);
  const items = SUB_SERVICES.filter((s) => s.group === group);

  return (
    <section ref={sectionRef} className="section-y bg-white" aria-label="Registrations, licences and filings">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Registrations & Filings"
            title={<>Everything your business needs, <span className="accent-serif">done right.</span></>}
          />
          <p className="lead lg:pb-2">
            Pick a service to see what’s included and the documents you’ll need. Every one is handled end to end by our team — online or at our Madurai office.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Service groups">
          {SUB_SERVICE_GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              role="tab"
              aria-selected={group === g}
              className={`min-h-[44px] rounded-full border px-5 text-[13.5px] font-semibold transition-all duration-300 ${
                group === g ? 'border-gold-400 bg-gold-50 text-brand-700 shadow-soft' : 'border-line bg-white text-ink-soft hover:border-gold-300 hover:text-ink'
              }`}
            >
              {g}
              <span className={`ml-2 rounded-full px-2 py-0.5 text-[11px] ${group === g ? 'bg-brand-700 text-white' : 'bg-surface text-ink-mute'}`}>
                {SUB_SERVICES.filter((s) => s.group === g).length}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="reveal group flex items-start gap-4 rounded-2xl border border-line bg-ivory p-5 transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white hover:shadow-lift"
                style={{ transitionDelay: `${(i % 4) * 50}ms` }}
              >
                <span className="icon-tile-soft h-11 w-11 text-[22px] transition-colors duration-500 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:bg-none group-hover:text-gold-300">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-2 text-[15px] font-semibold leading-snug text-ink">
                    {s.name}
                    <PiArrowUpRight className="mt-0.5 shrink-0 text-ink-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600" />
                  </span>
                  <span className="mt-1 line-clamp-2 block text-[13px] leading-snug text-ink-soft">{s.desc}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RegistrationsSection;
