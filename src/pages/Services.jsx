import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiMagnifyingGlass, PiArrowUpRight, PiX } from 'react-icons/pi';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import CTABanner from '../components/CTABanner';
import { PageHero, Breadcrumb, Seo } from '../components/ui';
import { SERVICES, SUB_SERVICES, SUB_SERVICE_GROUPS, getService } from '../data/services';
import { SITE_URL, breadcrumbLd } from '../data/site';
import heroImg from '../assets/images/svc-project.webp';

const ALL = [
  ...SERVICES.map((s) => ({ slug: s.slug, name: s.title, desc: s.tagline, icon: s.icon, group: 'Service Vertical' })),
  ...SUB_SERVICES.map((s) => ({ slug: s.slug, name: s.name, desc: s.desc, icon: s.icon, group: s.group })),
];

const Services = () => {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL.filter((s) => `${s.name} ${s.desc} ${s.group}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <>
      <Seo
        path="/services"
        title="All Services — Tax, Compliance, Infrastructure & Finance | Harikeerth Infratax"
        description={`${SERVICES.length} service verticals and ${SUB_SERVICES.length} individual registrations and filings — company & LLP registration, GST, income tax, audit, building plan approval, tenders, trademark, ISO, bank loans and more, from Harikeerth Infratax LLP, Madurai.`}
        keywords="Harikeerth services, company registration Madurai, GST services Madurai, plan approval Madurai, tender documentation, ISO certification, trademark registration, bank loan documentation, income tax filing Madurai"
        jsonLd={[
          breadcrumbLd([['Home', '/'], ['Services', '/services']]),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Harikeerth Infratax services',
            itemListElement: ALL.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${SITE_URL}/services/${s.slug}` })),
          },
        ]}
      />

      <PageHero
        image={heroImg}
        top={<Breadcrumb items={[['Home', '/'], ['Services', null]]} />}
        eyebrow={`${SERVICES.length} Verticals · ${SUB_SERVICES.length} Individual Services`}
        title={<>Every service, <span className="accent-serif-light">one partner</span></>}
        description="Search for what you need, or browse by vertical. Every engagement starts with a free consultation and a clear written quote."
      >
        <div className="relative mx-auto mt-10 max-w-xl text-left">
          <label htmlFor="service-search" className="sr-only">Search services</label>
          <div className="ring-gold relative flex items-center rounded-full bg-white/[0.07] backdrop-blur-xl">
            <PiMagnifyingGlass className="ml-5 shrink-0 text-xl text-gold-300" />
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “GST”, “LLP”, “plan approval”, “tender”…"
              autoComplete="off"
              className="h-14 w-full bg-transparent px-4 text-[15px] text-white placeholder:text-white/45 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white" aria-label="Clear search">
                <PiX />
              </button>
            )}
          </div>
          {query && (
            <div className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-3xl border border-line bg-white text-ink shadow-float">
              {results.length ? (
                <ul className="max-h-80 divide-y divide-line overflow-y-auto">
                  {results.map(({ slug, name, group, icon: Icon }) => (
                    <li key={slug}>
                      <Link to={`/services/${slug}`} className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-ivory">
                        <span className="icon-tile-soft h-9 w-9 rounded-xl text-lg"><Icon /></span>
                        <span className="flex-1">
                          <span className="block text-[14.5px] font-semibold">{name}</span>
                          <span className="block text-[12px] text-ink-mute">{group}</span>
                        </span>
                        <PiArrowUpRight className="text-gold-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-5 py-4 text-[14px] text-ink-soft">No exact match — <Link to="/contact" className="font-semibold text-brand-700 underline decoration-gold-300 underline-offset-4">ask us directly</Link>, we likely handle it.</p>
              )}
            </div>
          )}
        </div>
      </PageHero>

      <ServicesSection heading={false} />

      {/* Full directory */}
      <section className="section-y bg-white" aria-label="All individual services">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow eyebrow-center">Directory</div>
            <h2 className="h-section mt-5">Registrations, licences <span className="accent-serif">&amp; filings</span></h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {SUB_SERVICE_GROUPS.map((group) => (
              <div key={group}>
                <h3 className="flex items-center gap-2.5 border-b border-line pb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                  {group}
                </h3>
                <ul className="mt-4 space-y-1">
                  {SUB_SERVICES.filter((s) => s.group === group).map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-ivory">
                          <Icon className="shrink-0 text-xl text-gold-600" />
                          <span className="flex-1 text-[14.5px] font-medium text-ink group-hover:text-brand-700">{s.name}</span>
                          <span className="hidden text-[11px] text-ink-mute xl:inline">{getService(s.parent)?.category.split(' ')[0]}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTABanner />
    </>
  );
};

export default Services;
