// ═══════════════════════════════════════════════════════════
//  Harikeerth Infratax LLP — brand & site-wide content
//  Source of truth: client stationery (visiting card, letterhead,
//  envelope) and the services brochure in /brand-assets.
// ═══════════════════════════════════════════════════════════
import {
  PiReceiptDuotone, PiShieldCheckDuotone, PiCraneTowerDuotone, PiChartLineUpDuotone,
  PiChatsCircleDuotone, PiFolderOpenDuotone, PiRocketLaunchDuotone, PiSealCheckDuotone,
  PiHardHatDuotone, PiLockKeyDuotone, PiCurrencyInrDuotone, PiClockDuotone, PiMapPinDuotone,
  PiFactoryDuotone, PiStorefrontDuotone, PiShippingContainerDuotone, PiBriefcaseDuotone,
  PiCoinsDuotone, PiHouseLineDuotone,
} from 'react-icons/pi';

export const SITE_URL = 'https://www.harikeerth.in';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${path}`,
  })),
});

const ADDRESS_LINES = [
  'No. 4/86, Ex Serviceman Complex,',
  'Pillar No. 95, New Natham Main Road,',
  'Iyerbungalow, Madurai – 625017',
];
const ADDRESS = `${ADDRESS_LINES.join(' ')}, Tamil Nadu, India`;

export const BRAND = {
  name: 'Harikeerth Infratax',
  legalName: 'Harikeerth Infratax LLP',
  shortName: 'Harikeerth',
  llpin: 'ACZ-6942',
  tagline: 'Engineering Your Projects. Empowering Your Enterprise.',
  pillars: ['Tax', 'Compliance', 'Infrastructure', 'Growth'],
  description:
    'Harikeerth Infratax LLP is a Madurai-based firm that brings civil engineering and financial compliance under one roof — business registration, accounting, audit, GST & income tax, litigation, plan approval, project management, tender documentation, trademark & ISO, bank loan documentation and company acquisition advisory.',
  phones: ['9578841301', '9363741307', '6374950449'],
  phone: '9578841301',
  whatsapp: '919578841301',
  email: 'harikeerth301@gmail.com',
  addressLines: ADDRESS_LINES,
  address: ADDRESS,
  street: 'No. 4/86, Ex Serviceman Complex, Pillar No. 95, New Natham Main Road, Iyerbungalow',
  city: 'Madurai',
  region: 'Tamil Nadu',
  postalCode: '625017',
  // Confirm with the client before launch
  timings: 'Monday – Saturday · 9:30 AM – 7:00 PM',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Ex Serviceman Complex, New Natham Main Road, Iyerbungalow, Madurai 625017`)}`,
  mapsEmbed: `https://maps.google.com/maps?q=${encodeURIComponent('Ex Serviceman Complex, New Natham Main Road, Iyerbungalow, Madurai 625017')}&z=16&output=embed`,
  website: SITE_URL,
  // Add profile URLs here once the client shares them — empty entries are not rendered
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  },
};

export const formatPhone = (p) => `+91 ${p.slice(0, 5)} ${p.slice(5)}`;
export const waLink = (text) => `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

// ─── DESIGNATED PARTNERS ─────────────────────────────────────
export const PARTNERS = [
  {
    name: 'Er. Maheswaran G.',
    initials: 'MG',
    qualification: 'B.Tech (Civil)',
    role: 'Designated Partner',
    focus: 'Civil Engineering · Plan Approval · Project Management · Tender Documentation',
    bio: 'A civil engineer who leads the firm’s infrastructure practice — building plan approvals, estimation, project management and tender support for contractors, builders and project owners.',
    phones: ['9578841301', '9363741307'],
  },
  {
    name: 'Mrs. Sudha',
    initials: 'S',
    qualification: 'M.Com, PGDCA',
    role: 'Designated Partner',
    focus: 'Accounting · GST & Income Tax · Business Compliance · Financial Documentation',
    bio: 'A commerce postgraduate who leads the firm’s tax and compliance practice — bookkeeping, GST and income-tax filings, statutory compliance and financial documentation for bank loans.',
    phones: [],
  },
];

// ─── NAV ─────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', mega: true },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// ─── FOUR BRAND PILLARS (brochure cover) ─────────────────────
export const PILLARS = [
  { icon: PiReceiptDuotone, title: 'Tax', desc: 'GST, income tax, TDS and litigation support handled end to end.' },
  { icon: PiShieldCheckDuotone, title: 'Compliance', desc: 'Registrations, ROC, ISO and statutory filings — always on time.' },
  { icon: PiCraneTowerDuotone, title: 'Infrastructure', desc: 'Plan approval, project management and tender documentation.' },
  { icon: PiChartLineUpDuotone, title: 'Growth', desc: 'Bank loans, project finance, acquisitions and investment advisory.' },
];

// ─── WHY CHOOSE US ───────────────────────────────────────────
export const WHY_CHOOSE_US = [
  { icon: PiHardHatDuotone, title: 'Engineering + Finance, One Desk', desc: 'A civil engineer and a commerce professional lead the firm — so your project approvals, tenders, books and taxes are handled by one accountable team.' },
  { icon: PiLockKeyDuotone, title: 'Confidential & Safe', desc: 'Your documents, financials and project data are handled with strict confidentiality and shared only with the authorities concerned.' },
  { icon: PiCurrencyInrDuotone, title: 'No Hidden Fees', desc: 'A clear written quote before we begin. Government fees are passed on at actuals and shown separately.' },
  { icon: PiClockDuotone, title: 'Time-Bound Delivery', desc: 'Every engagement runs on a due-date calendar, so filings, renewals and tender deadlines are never missed.' },
  { icon: PiMapPinDuotone, title: 'Rooted in Madurai, Serving India', desc: 'Meet us at our Iyerbungalow office, or work with us online from anywhere in Tamil Nadu and across India.' },
];

// ─── PROCESS ─────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { step: '01', icon: PiChatsCircleDuotone, title: 'Tell Us Your Requirement', desc: 'Call, WhatsApp or visit our Madurai office. We understand your business or project in a free first consultation.' },
  { step: '02', icon: PiFolderOpenDuotone, title: 'Share Documents', desc: 'You receive a precise checklist. Share documents in person, by email or on WhatsApp — whichever suits you.' },
  { step: '03', icon: PiRocketLaunchDuotone, title: 'We Execute', desc: 'Our team prepares, verifies and files with the department, authority or bank — and keeps you updated at every stage.' },
  { step: '04', icon: PiSealCheckDuotone, title: 'Delivered & Tracked', desc: 'You receive certificates, approvals and acknowledgements, plus reminders for every future renewal and due date.' },
];

// ─── WHO WE SERVE ────────────────────────────────────────────
export const CLIENT_SEGMENTS = [
  { icon: PiHardHatDuotone, title: 'Contractors & Builders', desc: 'Contractor registration, tenders, plan approvals, GST and project finance.' },
  { icon: PiFactoryDuotone, title: 'MSMEs & Manufacturers', desc: 'Udyam, GST, bookkeeping, ISO certification and working-capital loans.' },
  { icon: PiRocketLaunchDuotone, title: 'Startups & New Ventures', desc: 'Company / LLP formation, Startup India, trademark and investor-ready books.' },
  { icon: PiStorefrontDuotone, title: 'Traders & Retailers', desc: 'GST registration & returns, FSSAI, accounting and income-tax filing.' },
  { icon: PiShippingContainerDuotone, title: 'Importers & Exporters', desc: 'IEC, AD Code, APEDA and the GST refunds that come with exports.' },
  { icon: PiBriefcaseDuotone, title: 'Professionals & Salaried', desc: 'Income-tax returns, tax planning, notice replies and capital-gains reporting.' },
  { icon: PiHouseLineDuotone, title: 'Property Owners', desc: 'Building plan approval, estimation, structural drawings and home-loan documents.' },
  { icon: PiCoinsDuotone, title: 'Investors & Promoters', desc: 'Unlisted share compliance, valuation support and company acquisitions.' },
];

// ─── GLOBAL FAQ ──────────────────────────────────────────────
export const FAQS = [
  {
    q: 'What is Harikeerth Infratax LLP?',
    a: 'Harikeerth Infratax LLP (LLPIN ACZ-6942) is a Madurai-based firm offering tax, compliance and infrastructure consultancy under one roof. Its services include business registration, accounting, audit, GST and income-tax filing and litigation, civil engineering and plan approval, project management, tender documentation, trademark and ISO registration, bank loan documentation, the purchase and sale of private limited companies, and compliance for unlisted equity investments.',
  },
  {
    q: 'Who are the partners of Harikeerth Infratax?',
    a: 'The firm is led by two Designated Partners: Er. Maheswaran G., B.Tech (Civil), who heads the engineering, plan approval, project management and tender practice, and Mrs. Sudha, M.Com, PGDCA, who heads accounting, taxation and business compliance.',
  },
  {
    q: 'Where is your office and how do I contact you?',
    a: `Our office is at ${ADDRESS}. You can call ${['9578841301', '9363741307', '6374950449'].map((p) => `+91 ${p}`).join(', ')}, WhatsApp +91 9578841301, or email harikeerth301@gmail.com.`,
  },
  {
    q: 'Do you work with clients outside Madurai?',
    a: 'Yes. Tax, compliance, registration and documentation work is handled online for clients across Tamil Nadu and India. For plan approvals, site-related engineering and tender work, we serve Madurai and the surrounding districts, and take up projects elsewhere on request.',
  },
  {
    q: 'How are your fees decided?',
    a: 'Fees depend on the scope of work — for example, the type of entity, the volume of transactions or the size of a project. You get a clear written quote after the first consultation. Government fees, stamp duty and authority charges are always shown separately, at actuals.',
  },
  {
    q: 'Can you help a contractor with both tenders and taxes?',
    a: 'That is exactly what we are set up for. We can register your firm, obtain your contractor licence and digital signature, prepare and upload tender documents, and then manage your GST, TDS, books, income tax and bank-loan documentation for the projects you win.',
  },
  {
    q: 'Is the first consultation free?',
    a: 'Yes. The first consultation — in person, over the phone or on WhatsApp — is free. We assess your requirement, list the documents needed and give you a timeline and a quote with no obligation.',
  },
];
