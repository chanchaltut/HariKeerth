import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiX, PiCompass, PiWhatsappLogo } from 'react-icons/pi';
import { BRAND, PILLARS, waLink } from '../data/site';
import { Logo } from './ui';

const STORAGE_KEY = 'harikeerth_welcome_v1';

// One-time (per session) welcome card introducing the four service pillars.
const WelcomeModal = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  const dismiss = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch { /* storage unavailable */ }
    }, 300);
  }, []);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(STORAGE_KEY) === '1'; } catch { dismissed = false; }
    if (dismissed) return undefined;
    const timer = setTimeout(() => {
      setShow(true);
      setTimeout(() => setAnimate(true), 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, dismiss]);

  const handleExplore = () => {
    dismiss();
    navigate('/services');
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
      aria-label={`Welcome to ${BRAND.name}`}
    >
      <div className="absolute inset-0 bg-brand-950/70 backdrop-blur-md" onClick={dismiss} aria-hidden="true" />

      <div className={`relative flex max-h-[88dvh] w-full max-w-md flex-col overflow-hidden rounded-[2rem] bg-white shadow-float transition-all duration-500 ease-out-expo ${animate ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95'}`}>
        <div className="surface-dark shrink-0 px-6 pb-7 pt-5">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-gold-500/30 blur-3xl" aria-hidden="true" />
          <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative flex items-center justify-between">
            <Logo light className="h-9 w-auto" />
            <button onClick={dismiss} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition-colors hover:bg-white/20" aria-label="Close">
              <PiX />
            </button>
          </div>
          <h2 className="relative mt-6 text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
            Welcome to <span className="accent-serif-light">Harikeerth</span>
          </h2>
          <p className="relative mt-1 text-sm text-brand-100/70">{BRAND.tagline}</p>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6 py-6">
          <div className="grid grid-cols-2 gap-2">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-line bg-ivory p-3.5">
                <Icon className="text-xl text-gold-600" />
                <p className="mt-2 text-[14px] font-semibold text-ink">{title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-ink-soft">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <button onClick={handleExplore} className="btn btn-primary flex-1">
              <PiCompass className="text-lg text-gold-300" />
              Explore Services
            </button>
            <a href={waLink('Hi Harikeerth Infratax! I would like a free consultation.')} target="_blank" rel="noopener noreferrer" onClick={dismiss} className="btn btn-whatsapp flex-1">
              <PiWhatsappLogo className="text-lg" />
              WhatsApp Us
            </a>
          </div>

          <button onClick={dismiss} className="mx-auto mt-3 block min-h-[36px] text-[13px] font-medium text-ink-mute transition-colors hover:text-brand-700">
            Continue to website →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
