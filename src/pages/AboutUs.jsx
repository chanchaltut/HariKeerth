import React from 'react';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import StatsBar from '../components/StatsBar';
import WhyChooseUs from '../components/WhyChooseUs';
import SegmentsSection from '../components/SegmentsSection';
import CTABanner from '../components/CTABanner';
import { PageHero, Breadcrumb, Seo } from '../components/ui';
import { BRAND, PILLARS, breadcrumbLd } from '../data/site';
import aboutImg from '../assets/images/about-cranes.webp';

const AboutUs = () => (
  <>
    <Seo
      path="/about"
      title="About Harikeerth Infratax LLP | Engineering & Financial Compliance, Madurai"
      description="Harikeerth Infratax LLP (LLPIN ACZ-6942) is led by Er. Maheswaran G., B.Tech (Civil), and Mrs. Sudha, M.Com, PGDCA — bringing civil engineering, taxation and business compliance under one roof in Madurai."
      keywords="About Harikeerth Infratax, Harikeerth Infratax LLP partners, Maheswaran G civil engineer Madurai, Sudha M.Com, Harikeerth Madurai"
      jsonLd={[breadcrumbLd([['Home', '/'], ['About', '/about']])]}
    />

    <PageHero
      image={aboutImg}
      top={<Breadcrumb items={[['Home', '/'], ['About', null]]} />}
      eyebrow={`${BRAND.legalName} · LLPIN ${BRAND.llpin}`}
      title={<>About <span className="accent-serif-light">Harikeerth</span></>}
      description="A Madurai firm built to give businesses and project owners one accountable partner for engineering, taxation and compliance."
    >
      <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4">
        {PILLARS.map(({ icon: Icon, title }) => (
          <li key={title} className="flex flex-col items-center gap-2 bg-brand-950/60 px-4 py-5 backdrop-blur">
            <Icon className="text-2xl text-gold-400" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white">{title}</span>
          </li>
        ))}
      </ul>
    </PageHero>

    <AboutSection showHeading={false} />
    <StatsBar />
    <TeamSection />
    <WhyChooseUs />
    <SegmentsSection />
    <CTABanner />
  </>
);

export default AboutUs;
