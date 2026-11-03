import { useEffect, useRef } from 'react';

// Adds `.visible` to every `.reveal` element inside the returned ref once it scrolls into view.
// Pass deps when the set of `.reveal` children can change (e.g. filtered lists).
const useReveal = (deps = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els?.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
};

export default useReveal;
