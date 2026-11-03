import React from 'react';
import LegalPage, { LegalContact } from '../components/LegalPage';
import { BRAND } from '../data/site';

const TermsConditions = () => (
  <LegalPage
    path="/terms-conditions"
    title="Terms &"
    accent="Conditions"
    updated="November 2026"
    description={`Terms governing the use of the ${BRAND.legalName} website and its professional services.`}
  >
    <div>
      <h2>1. About these terms</h2>
      <p>These terms govern your use of {BRAND.website} and the professional services provided by {BRAND.legalName} (LLPIN {BRAND.llpin}). By using the website or engaging our services you agree to them.</p>
    </div>

    <div>
      <h2>2. Our services</h2>
      <p>We provide consultancy, documentation and filing support across business registration and compliance; accounting, audit, GST and income tax; GST and income-tax litigation; civil engineering, plan approval and project management; tender documentation and facilitation; trademark and ISO registration; bank loan and financial documentation; the purchase and sale of private limited companies; and compliance for unlisted equity investments. The exact scope, timeline and fee for each engagement are confirmed with you before work begins.</p>
    </div>

    <div>
      <h2>3. Approvals & outcomes</h2>
      <p>Registrations, approvals, certifications, tender awards, loan sanctions and the outcome of any assessment or appeal are decided by the relevant government department, authority, certification body, bank or tribunal. We prepare and present your case with professional care, but we cannot guarantee any particular decision or timeline that depends on a third party.</p>
    </div>

    <div>
      <h2>4. Your responsibilities</h2>
      <ul className="ml-5 list-disc space-y-1.5">
        <li>Provide complete, accurate and genuine documents and information, on time.</li>
        <li>Review drafts, returns and applications we share and confirm them before submission.</li>
        <li>Inform us promptly of notices, changes in your business or any fact relevant to the engagement.</li>
      </ul>
      <p className="mt-3">We rely on the information you provide and are not responsible for consequences arising from incomplete or incorrect information.</p>
    </div>

    <div>
      <h2>5. Fees & payments</h2>
      <p>Professional fees are quoted in advance. Government fees, stamp duty, authority charges and third-party costs are payable at actuals and are separate from our fee unless stated otherwise. Fees for work already performed are not refundable; where an engagement is cancelled before work begins, any advance is refunded after deducting costs already incurred.</p>
    </div>

    <div>
      <h2>6. Website content</h2>
      <p>Articles and information on this website are general in nature and are not legal, tax or engineering advice for your specific situation. Laws, rates and procedures change, so please consult us before acting on them.</p>
    </div>

    <div>
      <h2>7. Intellectual property</h2>
      <p>The Harikeerth Infratax name, logo and website content belong to {BRAND.legalName} and may not be reproduced without written permission.</p>
    </div>

    <div>
      <h2>8. Limitation of liability</h2>
      <p>To the extent permitted by law, our total liability for any engagement is limited to the professional fee paid for that engagement. We are not liable for indirect or consequential losses.</p>
    </div>

    <div>
      <h2>9. Governing law</h2>
      <p>These terms are governed by the laws of India, and the courts at Madurai, Tamil Nadu, have exclusive jurisdiction.</p>
    </div>

    <div>
      <h2>10. Contact</h2>
      <LegalContact />
    </div>
  </LegalPage>
);

export default TermsConditions;
