import React from 'react';
import { MARQUEE_ITEMS } from '../data/services';

// Thin fixed strip above the navbar — services ticker
const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-mask fixed inset-x-0 top-0 z-[100] h-8 overflow-hidden border-b border-gold-500/20 bg-brand-950" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-950 to-transparent" />
      <div className="marquee-track h-full items-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 whitespace-nowrap px-4 text-[10.5px] font-medium uppercase tracking-[0.2em] text-brand-100/70">
            <span className="h-1 w-1 rotate-45 bg-gold-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
