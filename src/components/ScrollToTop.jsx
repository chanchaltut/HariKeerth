import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to top on route change, or to the #hash target when one is present.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section (possibly lazy-loaded) is in the DOM
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
