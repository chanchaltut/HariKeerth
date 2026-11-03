import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiList, PiX, PiPhoneCall, PiWhatsappLogo, PiArrowUpRight, PiCaretDown, PiArrowRight } from 'react-icons/pi';
import { BRAND, NAV_ITEMS, formatPhone, waLink } from '../data/site';
import { SERVICES, SUB_SERVICES, SUB_SERVICE_GROUPS, SERVICE_COUNT } from '../data/services';
import { Logo } from './ui';

const groupedSubServices = SUB_SERVICE_GROUPS.map((group) => ({
  group,
  items: SUB_SERVICES.filter((s) => s.group === group),
}));

// ─── Desktop mega menu ───────────────────────────────────────
const MegaMenu = ({ open, onNavigate }) => (
  <div className={`mega-panel absolute inset-x-0 top-full z-40 pt-3 ${open ? 'open' : ''}`} role="region" aria-label="Services menu">
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-float">
      <div className="grid grid-cols-12">
        {/* Verticals */}
        <div className="col-span-4 border-r border-line bg-ivory p-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">Service Verticals</p>
          <ul className="space-y-0.5">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    onClick={onNavigate}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-white hover:shadow-soft"
                  >
                    <span className="icon-tile h-8 w-8 rounded-lg text-base"><Icon /></span>
                    <span className="text-[13.5px] font-medium leading-snug text-ink group-hover:text-brand-700">{s.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Individual services */}
        <div className="col-span-8 grid grid-cols-4 gap-6 p-7">
          {groupedSubServices.map(({ group, items }) => (
            <div key={group}>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">{group}</p>
              <ul className="space-y-0.5">
                {items.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      onClick={onNavigate}
                      className="block rounded-lg py-1.5 text-[13.5px] text-ink-soft transition-colors hover:text-brand-700"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 border-t border-line bg-brand-950 px-7 py-4 text-white">
        <p className="text-[13.5px] text-white/70">
          Not sure where to start? <span className="font-semibold text-white">The first consultation is free.</span>
        </p>
        <div className="flex items-center gap-3">
          <Link to="/services" onClick={onNavigate} className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-gold-300 hover:text-gold-200">
            View all services <PiArrowRight />
          </Link>
          <a href={waLink('Hi Harikeerth Infratax! I would like a free consultation.')} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm">
            <PiWhatsappLogo className="text-base" /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  const isActive = (path) => (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  useEffect(() => {
    setIsSidebarOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!megaOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMegaOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [megaOpen]);

  const openMega = () => { clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 160); };
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* ─── FLOATING NAVBAR ─── */}
      <header className="fixed inset-x-0 top-8 z-50 px-3 pt-3 sm:px-5">
        <div className="relative mx-auto max-w-7xl" onMouseLeave={closeMega}>
          <nav
            className={`flex h-16 items-center justify-between rounded-2xl border pl-4 pr-2.5 transition-all duration-500 ease-out-expo sm:h-[74px] sm:pl-5 sm:pr-3 ${
              isScrolled ? 'border-line/80 bg-white/90 shadow-float backdrop-blur-xl' : 'border-white/60 bg-white/95 shadow-soft backdrop-blur-xl'
            }`}
            role="navigation"
            aria-label="Main navigation"
          >
            <Link to="/" className="flex shrink-0 items-center" aria-label={`${BRAND.name} — Home`}>
              <Logo eager className="h-9 w-auto sm:h-11" />
            </Link>

            {/* Desktop links */}
            <ul className="hidden items-center gap-0.5 lg:flex">
              {NAV_ITEMS.map((link) => (
                <li key={link.name} onMouseEnter={link.mega ? openMega : closeMega}>
                  {link.mega ? (
                    <button
                      type="button"
                      onClick={() => setMegaOpen((v) => !v)}
                      onFocus={openMega}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      className={`relative flex min-h-[44px] items-center gap-1 rounded-full px-4 text-[14.5px] font-medium transition-colors ${
                        isActive(link.href) || megaOpen ? 'text-brand-700' : 'text-ink-soft hover:text-ink'
                      }`}
                    >
                      {link.name}
                      <PiCaretDown className={`text-xs transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
                      {isActive(link.href) && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`relative flex min-h-[44px] items-center rounded-full px-4 text-[14.5px] font-medium transition-colors ${
                        isActive(link.href) ? 'text-brand-700' : 'text-ink-soft hover:text-ink'
                      }`}
                    >
                      {link.name}
                      {isActive(link.href) && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-2 lg:flex" onMouseEnter={closeMega}>
              <a href={`tel:${BRAND.phone}`} className="flex min-h-[44px] items-center gap-2 rounded-full px-3 text-[14px] font-medium text-ink-soft transition-colors hover:text-brand-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-50 text-gold-600"><PiPhoneCall /></span>
                <span className="hidden xl:inline">{formatPhone(BRAND.phone)}</span>
              </a>
              <Link to="/contact" className="btn btn-primary btn-shine btn-sm !min-h-[46px] !px-5">
                Free Consultation
                <PiArrowUpRight className="text-base text-gold-300" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ivory text-2xl text-ink transition-colors hover:text-brand-700 lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? <PiX /> : <PiList />}
            </button>
          </nav>

          <div className="hidden lg:block" onMouseEnter={openMega}>
            <MegaMenu open={megaOpen} onNavigate={() => setMegaOpen(false)} />
          </div>
        </div>
      </header>

      {/* ─── MOBILE BACKDROP ─── */}
      <div
        className={`fixed inset-0 z-[110] bg-brand-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isSidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* ─── MOBILE DRAWER ─── */}
      <div
        className={`fixed inset-y-0 left-0 z-[120] flex w-[88%] max-w-[380px] flex-col bg-white shadow-float transition-transform duration-500 ease-out-expo lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Link to="/" onClick={closeSidebar} className="flex shrink-0 items-center py-1" aria-label={`${BRAND.name} — Home`}>
            <Logo className="h-10 w-auto" />
          </Link>
          <button onClick={closeSidebar} className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ivory text-xl text-ink" aria-label="Close menu">
            <PiX />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
          <ul className="space-y-1">
            {NAV_ITEMS.map((link, i) => (
              <li key={link.name}>
                {link.mega ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-semibold tracking-tight transition-all ${
                        isActive(link.href) ? 'bg-gold-50 text-brand-700' : 'text-ink hover:bg-ivory'
                      }`}
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-serif text-sm italic text-gold-600">0{i + 1}</span>
                        {link.name}
                      </span>
                      <PiCaretDown className={`text-base text-ink-mute transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`accordion-panel ${mobileServicesOpen ? 'open' : ''}`}>
                      <div>
                        <ul className="mb-2 ml-4 mt-1 space-y-0.5 border-l border-gold-200 pl-3">
                          {SERVICES.map((s) => (
                            <li key={s.slug}>
                              <Link to={`/services/${s.slug}`} onClick={closeSidebar} className="block rounded-xl px-3 py-2 text-[14.5px] font-medium text-ink-soft hover:bg-ivory hover:text-brand-700">
                                {s.title}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link to="/services" onClick={closeSidebar} className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-[14.5px] font-semibold text-gold-700">
                              All {SERVICE_COUNT} services <PiArrowRight />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={closeSidebar}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-semibold tracking-tight transition-all ${
                      isActive(link.href) ? 'bg-gold-50 text-brand-700' : 'text-ink hover:bg-ivory'
                    }`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif text-sm italic text-gold-600">0{i + 1}</span>
                      {link.name}
                    </span>
                    <PiArrowUpRight className="text-base text-ink-mute" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-line p-5 pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]">
          <a href={waLink('Hi Harikeerth Infratax! I would like to know more about your services.')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
            <PiWhatsappLogo className="text-xl" />
            WhatsApp Us
          </a>
          <a href={`tel:${BRAND.phone}`} className="btn btn-primary w-full">
            <PiPhoneCall className="text-lg text-gold-300" />
            Call {formatPhone(BRAND.phone)}
          </a>
          <p className="pt-1 text-center text-[11px] text-ink-mute">{BRAND.legalName} · LLPIN {BRAND.llpin}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
