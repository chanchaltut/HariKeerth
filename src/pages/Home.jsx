import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import RegistrationsSection from '../components/RegistrationsSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';
import SegmentsSection from '../components/SegmentsSection';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';
import { Seo } from '../components/ui';

const Home = () => (
  <>
    <Seo
      path="/"
      title="Harikeerth Infratax LLP | Tax, Compliance & Infrastructure Consultants in Madurai"
      description="Harikeerth Infratax LLP, Madurai — business registration, accounting, audit, GST & income tax, litigation, building plan approval, project management, tender documentation, trademark & ISO, bank loans and company acquisition advisory."
      keywords="Harikeerth, Harikeerth Infratax, Harikeerth Infratax LLP, harikeerth.in, tax consultant Madurai, GST registration Madurai, company registration Madurai, LLP registration Madurai, building plan approval Madurai, civil engineering consultant Madurai, tender documentation Madurai, contractor registration Tamil Nadu, ISO certification Madurai, trademark registration Madurai, bank loan project report Madurai, income tax filing Madurai"
    />
    <Hero />
    <StatsBar overlap />
    <AboutSection />
    <ServicesSection />
    <RegistrationsSection />
    <ProcessSection />
    <WhyChooseUs />
    <TeamSection />
    <SegmentsSection />
    <FAQSection />
    <CTABanner />
  </>
);

export default Home;
