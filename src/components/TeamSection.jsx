import React from 'react';
import { PiPhoneCall, PiEnvelopeSimple, PiWhatsappLogo, PiSealCheckFill } from 'react-icons/pi';
import { BRAND, PARTNERS, formatPhone, waLink } from '../data/site';
import useReveal from '../hooks/useReveal';
import { SectionHeading } from './ui';
import markLight from '../assets/brand/logo-mark-light.webp';

const TeamSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="section-y bg-surface" aria-label="Designated partners">
      <div className="container-x">
        <SectionHeading
          eyebrow="Leadership"
          title={<>Meet our <span className="accent-serif">Designated Partners</span></>}
          description="An engineer and a commerce professional — together covering every side of your business and your projects."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {PARTNERS.map((p, i) => (
            <article key={p.name} className="reveal card card-hover group relative overflow-hidden" style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Monogram header */}
              <div className="surface-dark relative h-44">
                <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-gold-500/25 blur-3xl" aria-hidden="true" />
                <img src={markLight} alt="" width="705" height="420" loading="lazy" className="pointer-events-none absolute right-6 top-6 h-8 w-auto opacity-40" aria-hidden="true" />
              </div>
              <span className="ring-gold absolute left-7 top-32 z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 font-serif text-4xl font-semibold italic text-gold-300 shadow-float">
                {p.initials}
              </span>

              <div className="px-7 pb-7 pt-16">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-700">{p.role}</p>
                <h3 className="mt-2 flex items-center gap-2 text-3xl font-semibold tracking-[-0.02em]">
                  {p.name}
                  <PiSealCheckFill className="shrink-0 text-xl text-gold-500" aria-label="Verified" />
                </h3>
                <p className="mt-1 font-serif text-xl font-semibold italic text-brand-600">{p.qualification}</p>

                <div className="rule-gold my-6" />

                <p className="text-[14.5px] leading-relaxed text-ink-soft">{p.bio}</p>
                <p className="mt-4 text-[12.5px] font-medium leading-relaxed text-brand-700">{p.focus}</p>

                <div className="mt-6 space-y-1">
                  {(p.phones.length ? p.phones : [BRAND.phone]).map((ph) => (
                    <a key={ph} href={`tel:${ph}`} className="flex min-h-[40px] items-center gap-3 text-[15px] font-medium text-ink transition-colors hover:text-brand-600">
                      <span className="icon-tile-soft h-9 w-9 rounded-xl text-base"><PiPhoneCall /></span>
                      {formatPhone(ph)}
                    </a>
                  ))}
                  <a href={`mailto:${BRAND.email}`} className="flex min-h-[40px] items-center gap-3 break-all text-[15px] font-medium text-ink transition-colors hover:text-brand-600">
                    <span className="icon-tile-soft h-9 w-9 rounded-xl text-base"><PiEnvelopeSimple /></span>
                    {BRAND.email}
                  </a>
                </div>

                <a
                  href={waLink(`Hi Harikeerth Infratax! I would like to speak with ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp mt-7 w-full"
                >
                  <PiWhatsappLogo className="text-lg" />
                  Consult {p.name.split(' ')[1]}
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] text-ink-mute">
          {BRAND.legalName} · LLPIN {BRAND.llpin} · <a href={waLink('Hi Harikeerth Infratax!')} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 hover:text-gold-700">General enquiries on WhatsApp</a>
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
