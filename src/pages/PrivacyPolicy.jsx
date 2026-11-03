import React from 'react';
import LegalPage, { LegalContact } from '../components/LegalPage';
import { BRAND } from '../data/site';

const PrivacyPolicy = () => (
  <LegalPage
    path="/privacy-policy"
    title="Privacy"
    accent="Policy"
    updated="November 2026"
    description={`How ${BRAND.legalName} collects, uses and protects your personal, financial and project information.`}
  >
    <div>
      <h2>1. Introduction</h2>
      <p>
        {BRAND.legalName} (“Harikeerth”, “we”, “our” or “us”), reachable at {BRAND.website}, respects your privacy. This policy explains how we collect, use, store and protect personal, financial and project information when you visit our website or engage us for tax, compliance, engineering, tender or financial documentation services.
      </p>
    </div>

    <div>
      <h2>2. Information we collect</h2>
      <h3>2.1 Information you give us</h3>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>Contact details — name, mobile number, email and address.</li>
        <li>Identity documents — PAN, Aadhaar and other KYC documents required for registrations and filings.</li>
        <li>Financial records — bank statements, invoices, books of accounts, returns and financial statements.</li>
        <li>Business records — incorporation documents, partner / director details, licences and certificates.</li>
        <li>Property and project records — title documents, patta, drawings, estimates, tender documents and work orders.</li>
      </ul>
      <h3 className="mt-4">2.2 Information collected automatically</h3>
      <p>When you browse our website, basic technical data such as browser type, device and pages visited may be processed by our hosting provider to keep the site secure and working well.</p>
    </div>

    <div>
      <h2>3. How we use your information</h2>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>To deliver the services you engage us for — registrations, filings, audits, approvals, tenders, loan documentation and advisory.</li>
        <li>To submit applications and returns to government portals, local bodies, authorities and banks on your behalf.</li>
        <li>To respond to enquiries and keep you updated by phone, WhatsApp or email.</li>
        <li>To send reminders about due dates and renewals relating to your engagement.</li>
        <li>To meet our legal and regulatory obligations.</li>
      </ul>
    </div>

    <div>
      <h2>4. Sharing & confidentiality</h2>
      <p className="mb-3"><strong>We do not sell, rent or trade your information.</strong> It is shared only where your engagement requires it — with government departments and portals, local and planning authorities, banks and lenders, certification bodies or professionals working on your matter — and only to the extent necessary.</p>
      <p>Everyone at Harikeerth who handles your information is bound by confidentiality.</p>
    </div>

    <div>
      <h2>5. Security & retention</h2>
      <p>We use reasonable technical and organisational safeguards to protect your documents against unauthorised access, loss or misuse. We retain records for as long as needed to deliver our services and as required by applicable laws; you may ask us to return or delete documents that we are not legally required to keep.</p>
    </div>

    <div>
      <h2>6. Website enquiries</h2>
      <p>Details submitted through our contact form are delivered to our team’s WhatsApp so we can reply quickly. They are used only to respond to your enquiry.</p>
    </div>

    <div>
      <h2>7. Your choices</h2>
      <p>You may ask us to access, correct or delete your personal information, or to stop sending you reminders, at any time by contacting us using the details below.</p>
    </div>

    <div>
      <h2>8. Contact us</h2>
      <p className="mb-4">For any question about this policy or your information:</p>
      <LegalContact />
    </div>
  </LegalPage>
);

export default PrivacyPolicy;
