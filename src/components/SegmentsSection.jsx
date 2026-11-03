import React from 'react';
import { CLIENT_SEGMENTS } from '../data/site';
import useReveal from '../hooks/useReveal';
import { SectionHeading } from './ui';

const SegmentsSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="section-y bg-white" aria-label="Who we serve">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who We Serve"
          title={<>Built for the people who <span className="accent-serif">build India</span></>}
          description="From a first-time founder to an established contractor, we tailor every engagement to where your business is today."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {CLIENT_SEGMENTS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="reveal group relative bg-white p-7 transition-colors duration-500 hover:bg-ivory" style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
              <span className="absolute inset-x-7 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <Icon className="text-[34px] text-gold-500 transition-transform duration-500 group-hover:-translate-y-0.5" />
              <h3 className="mt-5 text-[17px] font-semibold">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
