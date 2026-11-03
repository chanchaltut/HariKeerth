import React from 'react';
import { Link } from 'react-router-dom';
import { PiArrowRight, PiHouse } from 'react-icons/pi';
import { Seo, DarkBackdrop } from '../components/ui';
import { SERVICES } from '../data/services';

const NotFound = () => (
  <>
    <Seo path="/404" title="Page Not Found" description="The page you are looking for does not exist." noindex />
    <section className="surface-dark flex min-h-screen items-center px-4 pb-20 pt-40 text-center">
      <DarkBackdrop />
      <div className="container-x">
        <p className="accent-serif-light text-[9rem] leading-none sm:text-[12rem]">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">This page has moved — or never existed.</h1>
        <p className="mx-auto mt-3 max-w-md text-brand-100/70">Let’s get you back on track. Here are a few good places to start.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-gold"><PiHouse className="text-lg" /> Go Home</Link>
          <Link to="/services" className="btn btn-glass">Browse Services <PiArrowRight className="text-gold-300" /></Link>
        </div>
        <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2">
          {SERVICES.slice(0, 6).map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`} className="inline-block rounded-full border border-white/15 px-4 py-2 text-[13px] text-white/75 transition-colors hover:border-gold-400 hover:text-white">{s.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default NotFound;
