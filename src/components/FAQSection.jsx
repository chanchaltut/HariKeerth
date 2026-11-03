import React, { useState } from 'react';
import { PiPlus, PiWhatsappLogo } from 'react-icons/pi';
import { FAQS, waLink } from '../data/site';

// Pass `faqs` for a page-specific list (service pages); defaults to the global FAQ.
const FAQSection = ({ faqs = FAQS, title, intro }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-y bg-surface" aria-label="Frequently asked questions">
      {/* FAQPage JSON-LD mirrors the visible questions below */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }),
        }}
      />

      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <div className="eyebrow">FAQ</div>
            <h2 className="h-section mt-5">{title || <>Questions, <span className="accent-serif">answered</span></>}</h2>
            <p className="lead mt-5">{intro || 'Everything you need to know about how we work, our services and getting started.'}</p>

            <div className="surface-dark mt-10 hidden rounded-4xl p-7 lg:block">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/25 blur-3xl" aria-hidden="true" />
              <p className="relative text-lg font-semibold text-white">Have another question?</p>
              <p className="relative mt-1.5 text-[14px] text-brand-100/70">Our partners reply personally on WhatsApp.</p>
              <a href={waLink('Hi Harikeerth Infratax! I have a question.')} target="_blank" rel="noopener noreferrer" className="btn btn-gold relative mt-6">
                <PiWhatsappLogo className="text-lg" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className={`rounded-3xl border bg-white transition-all duration-500 ${isOpen ? 'border-gold-300 shadow-lift' : 'border-line hover:border-gold-200'}`}>
                <button
                  className="flex min-h-[64px] w-full items-center gap-4 p-5 text-left sm:p-6"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-serif text-xl font-semibold italic text-gold-600 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`flex-1 text-[15px] font-semibold leading-snug transition-colors sm:text-base ${isOpen ? 'text-brand-700' : 'text-ink'}`}>{faq.q}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${isOpen ? 'rotate-45 bg-brand-700 text-gold-300' : 'bg-surface text-ink'}`}>
                    <PiPlus />
                  </span>
                </button>
                <div id={`faq-answer-${i}`} className={`accordion-panel ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
                  <div>
                    <p className="px-5 pb-6 text-[15px] leading-relaxed text-ink-soft sm:pl-[4.4rem] sm:pr-16">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-6 text-center lg:hidden">
            <p className="mb-4 text-sm text-ink-soft">Have another question? Our partners reply personally.</p>
            <a href={waLink('Hi Harikeerth Infratax! I have a question.')} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <PiWhatsappLogo className="text-lg" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
