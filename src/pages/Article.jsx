import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PiCalendarBlank, PiClock, PiLightbulbDuotone, PiWhatsappLogo, PiArrowRight, PiCheckBold } from 'react-icons/pi';
import { PageHero, Breadcrumb, Seo } from '../components/ui';
import CTABanner from '../components/CTABanner';
import NotFound from './NotFound';
import { ARTICLES, getArticle, formatDate } from '../data/articles';
import { getService } from '../data/services';
import { BRAND, SITE_URL, waLink, breadcrumbLd } from '../data/site';

const Block = ({ block }) => {
  if (block.h) return <h2 className="mb-3 mt-10 text-2xl font-semibold tracking-tight text-ink">{block.h}</h2>;
  if (block.ul) {
    return (
      <ul className="my-5 space-y-2.5">
        {block.ul.map((li) => (
          <li key={li} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink-soft">
            <PiCheckBold className="mt-1.5 shrink-0 text-[12px] text-gold-500" />{li}
          </li>
        ))}
      </ul>
    );
  }
  if (block.tip) {
    return (
      <div className="my-8 flex gap-4 rounded-3xl border border-gold-200 bg-gold-50 p-6">
        <PiLightbulbDuotone className="shrink-0 text-3xl text-gold-600" />
        <p className="text-[15.5px] font-medium leading-relaxed text-brand-800">{block.tip}</p>
      </div>
    );
  }
  return <p className="mb-5 text-[16.5px] leading-[1.85] text-ink-soft">{block.p}</p>;
};

const Article = () => {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <NotFound />;

  const path = `/blog/${article.slug}`;
  const service = getService(article.service);
  const more = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Seo
        path={path}
        type="article"
        title={`${article.title} | Harikeerth Infratax`}
        description={article.excerpt}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: `${SITE_URL}${article.image}`,
            datePublished: article.date,
            dateModified: article.date,
            mainEntityOfPage: `${SITE_URL}${path}`,
            author: { '@type': 'Organization', name: BRAND.legalName, url: SITE_URL },
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          breadcrumbLd([['Home', '/'], ['Insights', '/blog'], [article.title, path]]),
        ]}
      />

      <PageHero
        image={article.image}
        top={<Breadcrumb items={[['Home', '/'], ['Insights', '/blog'], [article.category, null]]} />}
        eyebrow={article.category}
        title={<span className="block text-[0.72em] leading-[1.12]">{article.title}</span>}
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-white/70">
          <span className="flex items-center gap-1.5"><PiCalendarBlank className="text-gold-400" /> {formatDate(article.date)}</span>
          <span className="flex items-center gap-1.5"><PiClock className="text-gold-400" /> {article.readTime}</span>
          <span>By {BRAND.legalName}</span>
        </div>
      </PageHero>

      <article className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 border-l-2 border-gold-400 pl-5 font-serif text-2xl font-medium italic leading-snug text-brand-700">{article.excerpt}</p>
          {article.content.map((block, i) => <Block key={i} block={block} />)}

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-line bg-ivory p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-700">Need help with this?</p>
              {service && <Link to={`/services/${service.slug}`} className="mt-1 block text-lg font-semibold text-ink hover:text-brand-700">{service.title} →</Link>}
            </div>
            <a href={waLink(`Hi Harikeerth Infratax! I read your article "${article.title}" and need assistance.`)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
              <PiWhatsappLogo className="text-lg" /> WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-[12.5px] leading-relaxed text-ink-mute">
            This article is general information, not legal or tax advice for your specific situation. Rules and rates change — please consult us before acting on it.
          </p>
        </div>
      </article>

      <section className="bg-surface px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight">More <span className="accent-serif">insights</span></h2>
            <Link to="/blog" className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-gold-700">All articles <PiArrowRight /></Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="card card-hover group overflow-hidden">
                <img src={a.image} alt="" width="640" height="427" loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-700">{a.category}</p>
                  <h3 className="mt-2 font-semibold leading-snug group-hover:text-brand-700">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
};

export default Article;
