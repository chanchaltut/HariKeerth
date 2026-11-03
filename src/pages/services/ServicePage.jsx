/**
 * Dynamic page for every /services/:slug — handles both service verticals and individual services.
 */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  PiWhatsappLogo, PiPhoneCall, PiCheckBold, PiArrowUpRight, PiFileTextDuotone, PiListChecksDuotone,
  PiUsersThreeDuotone, PiArrowRight, PiMapPinDuotone, PiClockDuotone, PiChatCircleDots,
} from 'react-icons/pi';
import { BRAND, SITE_URL, formatPhone, waLink, breadcrumbLd } from '../../data/site';
import { SERVICES, getService, getSubService, subServicesOf } from '../../data/services';
import { PageHero, Breadcrumb, Seo } from '../../components/ui';
import ProcessSection from '../../components/ProcessSection';
import FAQSection from '../../components/FAQSection';
import CTABanner from '../../components/CTABanner';
import NotFound from '../NotFound';

const serviceLd = ({ name, description, path, category }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${SITE_URL}${path}`,
  serviceType: category,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'City', name: 'Madurai' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
  ],
});

const HeroCtas = ({ label }) => (
  <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
    <a href={waLink(`Hi Harikeerth Infratax! I need help with ${label}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-gold btn-shine">
      <PiWhatsappLogo className="text-xl" />
      Get a Free Quote
    </a>
    <a href={`tel:${BRAND.phone}`} className="btn btn-lg btn-glass">
      <PiPhoneCall className="text-lg text-gold-300" />
      {formatPhone(BRAND.phone)}
    </a>
  </div>
);

const QuickFacts = ({ items }) => (
  <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 text-left sm:grid-cols-4">
    {items.map(([label, value]) => (
      <div key={label} className="bg-brand-950/60 px-4 py-4 backdrop-blur">
        <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold-300/80">{label}</dt>
        <dd className="mt-1 text-[14px] font-semibold text-white">{value}</dd>
      </div>
    ))}
  </dl>
);

const CheckGrid = ({ items }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <div key={item} className="card card-hover flex items-center gap-4 rounded-2xl p-5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-sm text-brand-900">
          <PiCheckBold />
        </span>
        <span className="text-[15px] font-medium leading-snug text-ink">{item}</span>
      </div>
    ))}
  </div>
);

const SideCard = ({ label }) => (
  <aside className="surface-dark rounded-4xl p-7 lg:sticky lg:top-36">
    <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gold-500/25 blur-3xl" aria-hidden="true" />
    <div className="relative">
      <span className="icon-tile-gold h-12 w-12 text-2xl"><PiChatCircleDots /></span>
      <h3 className="mt-5 text-xl font-semibold text-white">Talk to a partner</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-brand-100/70">Share your requirement for {label}. You’ll get a document checklist, timeline and quote — free.</p>
      <ul className="mt-6 space-y-3 text-[14px] text-white/80">
        {BRAND.phones.map((p) => (
          <li key={p}><a href={`tel:${p}`} className="flex items-center gap-2.5 hover:text-white"><PiPhoneCall className="text-gold-400" /> {formatPhone(p)}</a></li>
        ))}
        <li className="flex items-start gap-2.5"><PiMapPinDuotone className="mt-0.5 shrink-0 text-gold-400" /> Iyerbungalow, Madurai</li>
        <li className="flex items-start gap-2.5"><PiClockDuotone className="mt-0.5 shrink-0 text-gold-400" /> {BRAND.timings}</li>
      </ul>
      <a href={waLink(`Hi Harikeerth Infratax! I need help with ${label}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-7 w-full">
        <PiWhatsappLogo className="text-lg" />
        WhatsApp Us
      </a>
    </div>
  </aside>
);

// ─── Service vertical ────────────────────────────────────────
const VerticalPage = ({ service }) => {
  const path = `/services/${service.slug}`;
  const related = subServicesOf(service.slug);
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 9);
  const Icon = service.icon;

  return (
    <>
      <Seo
        path={path}
        title={`${service.title} in Madurai | Harikeerth Infratax`}
        description={`${service.shortDesc} ${service.tagline}. Harikeerth Infratax LLP, Madurai, Tamil Nadu.`}
        keywords={`${service.title}, ${service.tagline}, ${service.title} Madurai, ${service.title} Tamil Nadu, Harikeerth Infratax`}
        jsonLd={[
          serviceLd({ name: service.title, description: service.overview, path, category: service.category }),
          breadcrumbLd([['Home', '/'], ['Services', '/services'], [service.title, path]]),
        ]}
      />

      <PageHero
        image={service.image}
        top={<Breadcrumb items={[['Home', '/'], ['Services', '/services'], [service.title, null]]} />}
        eyebrow={service.tagline}
        title={service.title}
        description={service.shortDesc}
      >
        <QuickFacts items={[['Vertical', service.category], ['Mode', 'Office & Online'], ['Based in', 'Madurai, TN'], ['First consult', 'Free']]} />
        <HeroCtas label={service.title} />
      </PageHero>

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <span className="icon-tile h-14 w-14 text-3xl"><Icon /></span>
              <div className="eyebrow">Overview</div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">{service.overview}</p>

            <h2 className="mt-14 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              What’s <span className="accent-serif">included</span>
            </h2>
            <div className="mt-8"><CheckGrid items={service.includes} /></div>

            <h2 className="mt-14 flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em]">
              <PiUsersThreeDuotone className="text-gold-500" /> Ideal for
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {service.idealFor.map((who) => (
                <li key={who} className="rounded-full border border-gold-200 bg-gold-50 px-4 py-2 text-[14px] font-medium text-brand-700">{who}</li>
              ))}
            </ul>

            {related.length > 0 && (
              <>
                <h2 className="mt-14 text-2xl font-semibold tracking-[-0.02em]">Individual services in this vertical</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {related.map((s) => {
                    const SIcon = s.icon;
                    return (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="group flex items-start gap-4 rounded-2xl border border-line bg-ivory p-5 transition-all hover:border-gold-300 hover:bg-white hover:shadow-lift">
                        <span className="icon-tile-soft h-11 w-11 text-[22px]"><SIcon /></span>
                        <span className="flex-1">
                          <span className="flex items-center justify-between gap-2 font-semibold text-ink">{s.name}<PiArrowUpRight className="text-gold-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                          <span className="mt-1 block text-[13px] leading-snug text-ink-soft">{s.desc}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="lg:col-span-4"><SideCard label={service.title} /></div>
        </div>
      </section>

      <ProcessSection />
      <FAQSection faqs={service.faqs} title={<>{service.title} <span className="accent-serif">FAQs</span></>} intro={`Common questions about our ${service.title.toLowerCase()} services.`} />

      <section className="section-y bg-white" aria-label="Other services">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-[-0.02em]">Explore other <span className="accent-serif">verticals</span></h2>
            <Link to="/services" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-gold-700">All services <PiArrowRight /></Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => {
              const OIcon = s.icon;
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition-all hover:border-gold-300 hover:shadow-lift">
                  <span className="icon-tile h-11 w-11 text-xl"><OIcon /></span>
                  <span className="flex-1 text-[14.5px] font-semibold leading-snug text-ink group-hover:text-brand-700">{s.title}</span>
                  <PiArrowUpRight className="text-gold-600" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
};

// ─── Individual service ──────────────────────────────────────
const SubServicePage = ({ sub }) => {
  const parent = getService(sub.parent);
  const path = `/services/${sub.slug}`;
  const siblings = subServicesOf(sub.parent).filter((s) => s.slug !== sub.slug);
  const faqs = [
    { q: `What documents are required for ${sub.name}?`, a: `Typically: ${sub.docs.join('; ')}. We share a precise checklist for your case after the first consultation.` },
    { q: `What is included in your ${sub.name} service?`, a: `${sub.includes.join('; ')}. ${sub.desc}` },
    { q: `Can I get ${sub.name} done without visiting your office?`, a: `Yes. You can share documents on WhatsApp or email and we handle the process online. You are also welcome to visit our office at ${BRAND.address}.` },
  ];
  const Icon = sub.icon;

  return (
    <>
      <Seo
        path={path}
        title={`${sub.name} in Madurai | Harikeerth Infratax`}
        description={`${sub.desc} Documents, process and expert support from Harikeerth Infratax LLP, Madurai, Tamil Nadu.`}
        keywords={`${sub.name}, ${sub.name} Madurai, ${sub.name} Tamil Nadu, ${sub.name} online, ${parent.title}, Harikeerth Infratax`}
        jsonLd={[
          serviceLd({ name: sub.name, description: sub.desc, path, category: parent.title }),
          breadcrumbLd([['Home', '/'], ['Services', '/services'], [parent.title, `/services/${parent.slug}`], [sub.name, path]]),
        ]}
      />

      <PageHero
        image={parent.image}
        top={<Breadcrumb items={[['Home', '/'], ['Services', '/services'], [parent.title, `/services/${parent.slug}`], [sub.name, null]]} />}
        eyebrow={sub.group}
        title={sub.name}
        description={sub.desc}
      >
        <QuickFacts items={[['Category', sub.group.split(' ')[0]], ['Mode', 'Office & Online'], ['Based in', 'Madurai, TN'], ['First consult', 'Free']]} />
        <HeroCtas label={sub.name} />
      </PageHero>

      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card p-7">
                <span className="icon-tile h-12 w-12 text-2xl"><PiListChecksDuotone /></span>
                <h2 className="mt-5 text-2xl font-semibold">What we do</h2>
                <ul className="mt-5 space-y-3">
                  {sub.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-ink">
                      <PiCheckBold className="mt-1 shrink-0 text-sm text-gold-500" />{i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-7">
                <span className="icon-tile-gold h-12 w-12 text-2xl"><PiFileTextDuotone /></span>
                <h2 className="mt-5 text-2xl font-semibold">Documents needed</h2>
                <ul className="mt-5 space-y-3">
                  {sub.docs.map((d, i) => (
                    <li key={d} className="flex items-start gap-3 text-[15px] text-ink">
                      <span className="mt-0.5 font-serif text-base font-semibold italic text-gold-600">{String(i + 1).padStart(2, '0')}</span>{d}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[12.5px] text-ink-mute">Indicative list — the exact checklist depends on your case.</p>
              </div>
            </div>

            <Link to={`/services/${parent.slug}`} className="group mt-6 flex items-center gap-5 overflow-hidden rounded-3xl border border-line bg-ivory p-5 transition-all hover:border-gold-300 hover:shadow-lift sm:p-6">
              <img src={parent.imageSm} alt="" width="640" height="427" loading="lazy" className="hidden h-20 w-28 rounded-2xl object-cover sm:block" />
              <span className="flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-700">Part of our vertical</span>
                <span className="mt-1 block text-lg font-semibold text-ink group-hover:text-brand-700">{parent.title}</span>
                <span className="block text-[13.5px] text-ink-soft">{parent.tagline}</span>
              </span>
              <Icon className="hidden text-4xl text-gold-500 sm:block" />
              <PiArrowUpRight className="text-xl text-gold-600" />
            </Link>

            {siblings.length > 0 && (
              <>
                <h2 className="mt-14 text-2xl font-semibold tracking-[-0.02em]">Related services</h2>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {siblings.map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[14px] font-medium text-ink transition-all hover:border-gold-400 hover:text-brand-700">
                      <s.icon className="text-gold-600" /> {s.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="lg:col-span-4"><SideCard label={sub.name} /></div>
        </div>
      </section>

      <ProcessSection />
      <FAQSection faqs={faqs} title={<>{sub.name} <span className="accent-serif">FAQs</span></>} intro={`Quick answers about ${sub.name.toLowerCase()}.`} />
      <CTABanner />
    </>
  );
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = getService(slug);
  if (service) return <VerticalPage key={slug} service={service} />;
  const sub = getSubService(slug);
  if (sub) return <SubServicePage key={slug} sub={sub} />;
  return <NotFound />;
};

export default ServicePage;
