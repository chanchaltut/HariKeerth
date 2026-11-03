import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowUpRight, PiCheckBold, PiWhatsappLogo, PiChatCircleDots } from 'react-icons/pi';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { waLink } from '../data/site';
import useReveal from '../hooks/useReveal';
import { SectionHeading } from './ui';

export const ServiceCard = ({ service, index = 0 }) => {
  const Icon = service.icon;
  return (
    <article
      className="reveal card card-hover group flex flex-col overflow-hidden"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      aria-label={service.title}
    >
      <Link to={`/services/${service.slug}`} className="relative block h-48 overflow-hidden" tabIndex={-1} aria-hidden="true">
        <img
          src={service.imageSm}
          alt=""
          width="640"
          height="427"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-brand-950/50 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-200 backdrop-blur">
          {service.category}
        </span>
      </Link>

      <div className="relative flex flex-1 flex-col px-6 pb-6 sm:px-7">
        <span className="icon-tile -mt-7 h-14 w-14 text-[28px] transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-105">
          <Icon />
        </span>
        <h3 className="mt-5 text-[1.3rem] font-semibold leading-snug tracking-tight">
          <Link to={`/services/${service.slug}`} className="transition-colors hover:text-brand-600">{service.title}</Link>
        </h3>
        <p className="mt-1.5 text-[13px] font-medium text-gold-700">{service.tagline}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{service.shortDesc}</p>

        <ul className="mt-5 space-y-2">
          {service.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-ink/80">
              <PiCheckBold className="mt-1 shrink-0 text-[11px] text-gold-500" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-700 transition-colors hover:text-gold-700">
            Explore service
            <PiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={waLink(`Hi Harikeerth Infratax! I need help with ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-lg text-whatsapp transition-all duration-300 hover:border-whatsapp hover:bg-whatsapp hover:text-white"
            aria-label={`Enquire about ${service.title} on WhatsApp`}
          >
            <PiWhatsappLogo />
          </a>
        </div>
      </div>
    </article>
  );
};

const ServicesSection = ({ heading = true }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useReveal([activeCategory]);

  const filtered = activeCategory === 'All' ? SERVICES : SERVICES.filter((s) => s.category === activeCategory);
  // The help card fills whatever is left of the last row in the 3-column grid
  const helpSpan = { 0: 'lg:col-span-3', 1: 'lg:col-span-2', 2: 'lg:col-span-1' }[filtered.length % 3];

  return (
    <section id="services" ref={sectionRef} className="section-y relative bg-surface" aria-label="Our services">
      <div className="grid-lines-light pointer-events-none absolute inset-x-0 top-0 h-[480px]" aria-hidden="true" />

      <div className="container-x relative">
        {heading && (
          <SectionHeading
            eyebrow="Our Services"
            title={<>Ten verticals. <span className="accent-serif">One trusted partner.</span></>}
            description="From the first registration to the last approval — tax, compliance, infrastructure and growth services, delivered by one accountable team."
          />
        )}

        <div className={`${heading ? 'mt-12' : ''} flex justify-center`}>
          <div className="scrollbar-none flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-soft" role="tablist" aria-label="Service categories">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`min-h-[42px] shrink-0 whitespace-nowrap rounded-full px-4 text-[13px] font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                  activeCategory === cat ? 'bg-brand-700 text-white shadow-soft' : 'text-ink-soft hover:bg-ivory hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filtered.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}

          <div className={`reveal surface-dark flex flex-col justify-between gap-8 rounded-3xl p-7 sm:col-span-2 sm:p-9 ${helpSpan}`}>
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold-500/25 blur-3xl" aria-hidden="true" />
            <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <span className="icon-tile-gold h-12 w-12 text-2xl"><PiChatCircleDots /></span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Not sure which service <span className="accent-serif-light">you need?</span>
              </h3>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-brand-100/70">Tell us about your business or project. We’ll map out exactly what is required — free.</p>
            </div>
            <a href={waLink('Hi Harikeerth Infratax! I need help choosing the right service.')} target="_blank" rel="noopener noreferrer" className="btn btn-gold relative self-start">
              <PiWhatsappLogo className="text-lg" />
              Ask Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
