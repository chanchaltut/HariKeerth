import React from 'react';
import { PageHero, Breadcrumb, Seo } from './ui';
import { BRAND, formatPhone } from '../data/site';

export const LegalContact = () => (
  <div className="space-y-1.5 rounded-2xl border border-line bg-ivory p-5 text-[15px]">
    <p className="font-semibold text-ink">{BRAND.legalName} <span className="font-normal text-ink-mute">· LLPIN {BRAND.llpin}</span></p>
    <p className="text-ink-soft">{BRAND.address}</p>
    <p className="text-ink-soft">Email: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
    <p className="text-ink-soft">Phone: {BRAND.phones.map((p, i) => <React.Fragment key={p}>{i > 0 && ', '}<a href={`tel:${p}`}>{formatPhone(p)}</a></React.Fragment>)}</p>
    <p className="text-ink-soft">Website: <a href={BRAND.website}>{BRAND.website.replace('https://', '')}</a></p>
  </div>
);

const LegalPage = ({ path, title, accent, description, updated, children }) => (
  <div className="min-h-screen bg-surface">
    <Seo path={path} title={`${title} ${accent}`} description={description} />
    <PageHero
      top={<Breadcrumb items={[['Home', '/'], [`${title} ${accent}`, null]]} />}
      eyebrow="Legal"
      title={<>{title} <span className="accent-serif-light">{accent}</span></>}
      description={`Last updated: ${updated} · ${BRAND.legalName}`}
    />
    <section className="px-4 pb-20 sm:px-6 sm:pb-28 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="prose-legal relative -mt-10 space-y-10 rounded-4xl border border-line bg-white p-6 shadow-float sm:p-10 md:p-14">
          {children}
        </div>
      </div>
    </section>
  </div>
);

export default LegalPage;
