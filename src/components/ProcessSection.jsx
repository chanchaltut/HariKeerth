import React from 'react';
import { PiLightningDuotone } from 'react-icons/pi';
import { PROCESS_STEPS } from '../data/site';
import useReveal from '../hooks/useReveal';
import { DarkBackdrop, GoldSwoosh, SectionHeading } from './ui';

const ProcessSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="surface-dark section-y" aria-label="How we work">
      <DarkBackdrop />
      <GoldSwoosh className="-right-40 top-0 h-80 w-[60rem] rotate-180 opacity-40" />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="How We Work"
          title={<>From first call to final approval, in <span className="accent-serif-light">four clear steps</span></>}
          description="A transparent process with one point of contact — so you always know what is happening and what comes next."
        />

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-[60px] hidden h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent lg:block" aria-hidden="true" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="reveal ring-gold group relative rounded-3xl bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="icon-tile-gold h-14 w-14 text-[28px]"><Icon /></span>
                  <span className="font-serif text-6xl font-semibold italic leading-none text-white/10 transition-colors duration-500 group-hover:text-gold-400/30">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-brand-100/65">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold-400/20 bg-white/[0.05] py-2 pl-2 pr-5 backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/15 text-lg text-gold-300"><PiLightningDuotone /></span>
            <p className="text-sm text-brand-100/75">
              <strong className="font-semibold text-white">Free first consultation.</strong> A clear quote before any work begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
