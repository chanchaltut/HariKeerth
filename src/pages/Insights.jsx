import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiCalendarBlank, PiClock, PiArrowRight } from 'react-icons/pi';
import { PageHero, Breadcrumb, Seo } from '../components/ui';
import { breadcrumbLd } from '../data/site';
import CTABanner from '../components/CTABanner';
import { ARTICLES, ARTICLE_CATEGORIES, formatDate } from '../data/articles';

const Insights = () => {
  const [category, setCategory] = useState('All');
  const list = category === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === category);
  const [featured, ...rest] = list;

  return (
    <div className="bg-surface">
      <Seo
        path="/blog"
        title="Insights — Tax, Compliance, Tenders & Infrastructure Guides | Harikeerth Infratax"
        description="Practical guides from Harikeerth Infratax on building plan approval, government tenders, business structures, bank loan project reports, GST notices and company acquisitions."
        keywords="Harikeerth insights, building plan approval Tamil Nadu, tender documents checklist, LLP vs private limited, project report for bank loan, GST notice reply"
        jsonLd={[breadcrumbLd([['Home', '/'], ['Insights', '/blog']])]}
      />

      <PageHero
        top={<Breadcrumb items={[['Home', '/'], ['Insights', null]]} />}
        eyebrow="Knowledge Hub"
        title={<>Insights &amp; <span className="accent-serif-light">Guides</span></>}
        description="Plain-English guidance on approvals, tenders, taxes and finance — written by the people who handle them every day."
      />

      <section className="px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex justify-center">
            <div className="scrollbar-none flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-soft">
              {ARTICLE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`min-h-[42px] shrink-0 whitespace-nowrap rounded-full px-4 text-[13px] font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                    category === cat ? 'bg-brand-700 text-white shadow-soft' : 'text-ink-soft hover:bg-ivory hover:text-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {featured && (
            <Link to={`/blog/${featured.slug}`} className="card card-hover group grid overflow-hidden md:grid-cols-2">
              <div className="relative h-64 overflow-hidden md:h-auto">
                <img src={featured.image} alt="" width="640" height="427" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105" />
                <span className="absolute left-5 top-5 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-950">Featured</span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-700">{featured.category}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-tight group-hover:text-brand-700 sm:text-3xl">{featured.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-5 text-[13px] text-ink-mute">
                  <span className="flex items-center gap-1.5"><PiCalendarBlank /> {formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1.5"><PiClock /> {featured.readTime}</span>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  Read article <PiArrowRight className="text-gold-600 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="card card-hover group flex flex-col overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={a.image} alt="" width="640" height="427" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-gold-700">{a.category}</p>
                  <h2 className="mt-2.5 text-lg font-semibold leading-snug tracking-tight group-hover:text-brand-700">{a.title}</h2>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-ink-soft">{a.excerpt}</p>
                  <div className="mt-auto flex items-center gap-4 pt-5 text-[12.5px] text-ink-mute">
                    <span className="flex items-center gap-1.5"><PiCalendarBlank /> {formatDate(a.date)}</span>
                    <span className="flex items-center gap-1.5"><PiClock /> {a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

export default Insights;
