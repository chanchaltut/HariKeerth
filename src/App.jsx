import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WelcomeModal from './components/WelcomeModal';
import StickyMobileCTA from './components/StickyMobileCTA';
import TopMarquee from './components/Marquee';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Lazy-load everything except the home page
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const ServicePage = lazy(() => import('./pages/services/ServicePage'));
const Contact = lazy(() => import('./pages/Contact'));
const Insights = lazy(() => import('./pages/Insights'));
const Article = lazy(() => import('./pages/Article'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-brand-950">
    <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-gold-500/20 border-t-gold-400" role="status" aria-label="Loading" />
  </div>
);

function App() {
  return (
    <div className="App">
      <TopMarquee />
      <WelcomeModal />
      <ScrollToTop />
      <Navbar />
      <StickyMobileCTA />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Insights />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
