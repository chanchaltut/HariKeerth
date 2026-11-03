// ═══════════════════════════════════════════════════════════
//  Insights — articles served at /blog/:slug
//  Content blocks: { h } heading · { p } paragraph · { ul: [] } list · { tip } callout
// ═══════════════════════════════════════════════════════════
import imgCivil from '../assets/images/svc-civil-640.webp';
import imgTender from '../assets/images/svc-tender-640.webp';
import imgBusiness from '../assets/images/svc-business-640.webp';
import imgBank from '../assets/images/svc-bankloan-640.webp';
import imgLitigation from '../assets/images/svc-litigation-640.webp';
import imgCompanySale from '../assets/images/svc-company-sale-640.webp';

export const ARTICLE_CATEGORIES = ['All', 'Infrastructure', 'Tenders', 'Business Setup', 'Finance', 'GST & Tax'];

export const ARTICLES = [
  {
    slug: 'building-plan-approval-tamil-nadu-guide',
    title: 'Building Plan Approval in Tamil Nadu: Documents, Process & Common Delays',
    category: 'Infrastructure',
    date: '2026-10-28',
    readTime: '6 min read',
    image: imgCivil,
    service: 'civil-engineering-project-consultancy',
    excerpt: 'Planning to build a house or a commercial building? Here is what the approval process involves, the documents you should keep ready, and why most applications get delayed.',
    content: [
      { p: 'Every new building in Tamil Nadu needs planning permission and building permission from the competent authority before construction starts. Building without approval can lead to stop-work notices, penalties and problems later — when you apply for a bank loan, a service connection or sell the property.' },
      { h: 'Who approves your plan?' },
      { p: 'It depends on where the site is and how large the building is. Smaller residential buildings are usually approved by the local body — the corporation, municipality or panchayat. Larger and special buildings need approval from the planning authority. The Tamil Nadu Combined Development and Building Rules set the standards your drawings must follow: setbacks, floor-space index, height, parking and more.' },
      { h: 'Documents to keep ready' },
      { ul: [
        'Sale deed / title deed and the parent documents',
        'Patta, chitta and adangal extracts',
        'Encumbrance certificate for the required period',
        'Field measurement book (FMB) sketch / approved layout copy',
        'Owner’s identity proof and recent tax receipts',
        'Building drawings prepared and signed by a registered engineer',
      ] },
      { h: 'The process, step by step' },
      { p: 'An engineer first studies your site documents and the applicable rules, then prepares the site plan, floor plans, sections and elevations. The application is filed with the authority — today largely online — along with the fees. The authority scrutinises the drawings, may inspect the site and can raise queries. Once these are answered, the approved plan and permit are issued.' },
      { h: 'Why applications get delayed' },
      { ul: [
        'Gaps in the title chain or a mismatch between patta and deed',
        'Drawings that violate setback or FSI limits',
        'The site falling in an unapproved layout',
        'Missing NOCs where the site is near highways, water bodies or heritage zones',
        'Slow replies to queries raised by the authority',
      ] },
      { tip: 'Get the documents reviewed before the drawings are made. Most delays come from title and layout issues that could have been spotted on day one.' },
      { p: 'Our engineering desk, led by Er. Maheswaran G., B.Tech (Civil), handles plan preparation, submission and follow-up — and can prepare the bank-format estimate if you are taking a construction loan.' },
    ],
  },
  {
    slug: 'government-tender-document-checklist-contractors',
    title: 'Government Tender Checklist: Documents Every Contractor Should Keep Ready',
    category: 'Tenders',
    date: '2026-10-21',
    readTime: '5 min read',
    image: imgTender,
    service: 'tender-documentation-contractor-support',
    excerpt: 'Most tenders are lost on paperwork, not price. Keep these documents current and you can respond to any tender notice within days.',
    content: [
      { p: 'Government tenders reward contractors who are always ready. The bid window is often short, and a single missing certificate can disqualify an otherwise winning bid at the technical stage. The answer is a permanently updated tender folder.' },
      { h: 'Registration & identity' },
      { ul: [
        'Firm / company registration certificate and partnership deed or MoA',
        'PAN of the firm and GST registration certificate',
        'Contractor registration / enlistment certificate in the right class',
        'Class 3 digital signature (signing + encryption) for e-procurement',
        'Registration on the relevant e-procurement portals',
      ] },
      { h: 'Financial capacity' },
      { ul: [
        'Audited financial statements for the last three to five years',
        'Income-tax returns and a turnover certificate',
        'Solvency certificate from your bank',
        'Bank details for EMD refunds and payments',
      ] },
      { h: 'Technical capacity' },
      { ul: [
        'Work-order copies and completion certificates for similar works',
        'List of works in hand',
        'Details of technical staff and their qualifications',
        'List of owned / leased machinery',
        'ISO certificates, where the tender asks for them',
      ] },
      { h: 'Reading the tender correctly' },
      { p: 'Before you price anything, check the eligibility criteria, similar-work definitions, the EMD amount and format, the bid validity period, and every corrigendum issued. Many disqualifications come from overlooking a corrigendum that changed a condition after the notice was published.' },
      { tip: 'Renew your DSC, contractor registration and solvency certificate well before they expire. An expired document on the opening day is the most avoidable reason to lose a tender.' },
      { p: 'We maintain tender folders for contractors, prepare technical and financial bids and track them to the opening date — and handle the GST, TDS and accounts for the work you win.' },
    ],
  },
  {
    slug: 'proprietorship-vs-partnership-vs-llp-vs-private-limited',
    title: 'Proprietorship, Partnership, LLP or Private Limited: Which Structure Fits Your Business?',
    category: 'Business Setup',
    date: '2026-10-14',
    readTime: '6 min read',
    image: imgBusiness,
    service: 'business-registration-compliance',
    excerpt: 'Liability, compliance cost, funding and credibility all depend on the structure you choose on day one. Here is a practical comparison.',
    content: [
      { p: 'Before choosing a structure, answer four questions: What will the business do? How much will you invest? How many people will own it? And where will it operate from? The right answer balances protection, cost and future plans.' },
      { h: 'Sole proprietorship' },
      { p: 'The quickest and cheapest start — the business and the owner are legally the same. Compliance is light, but liability is unlimited and the business cannot bring in partners or investors without changing its structure. Suits small traders, shops and individual service providers.' },
      { h: 'Partnership firm' },
      { p: 'Two or more people run the business under a partnership deed. It is simple and inexpensive, but partners carry unlimited liability, jointly and individually. Register the firm with the Registrar of Firms — an unregistered firm faces limits on enforcing contracts in court.' },
      { h: 'Limited Liability Partnership (LLP)' },
      { p: 'An LLP combines partnership flexibility with limited liability and a separate legal identity. Its compliance is lighter than a company’s. It suits professional firms, family businesses and service companies that do not plan to raise equity.' },
      { h: 'Private Limited Company' },
      { p: 'The most credible structure for growth. Shareholders’ liability is limited, ownership is easy to transfer, and investors and banks are comfortable with it. In return, compliance is heavier: statutory audit, board meetings, an AGM and annual ROC filings.' },
      { h: 'One Person Company & Public Limited' },
      { p: 'An OPC gives a single founder a company structure with limited liability. A public limited company suits large enterprises that need a wide shareholder base.' },
      { tip: 'If you expect to bid for large tenders or raise investment within two to three years, start as an LLP or a Private Limited Company. Converting later costs more than starting right.' },
    ],
  },
  {
    slug: 'project-report-for-bank-loan-what-banks-look-for',
    title: 'Project Report for a Bank Loan: What Banks Actually Look For',
    category: 'Finance',
    date: '2026-10-07',
    readTime: '5 min read',
    image: imgBank,
    service: 'bank-loan-financial-documentation',
    excerpt: 'A project report is not a formality — it is how the bank decides whether your loan can be repaid. Here is what a strong report contains.',
    content: [
      { p: 'Whether you need a term loan for machinery, a construction loan or working capital, the bank wants one question answered convincingly: can this business repay the loan from its own cash flows? A well-prepared project report answers it with numbers the banker can verify.' },
      { h: 'What a strong project report contains' },
      { ul: [
        'Promoter profile — experience, qualifications and track record',
        'Project description — what you will build, buy or expand, and why',
        'Cost of the project with quotations, and the means of finance',
        'Five-year projections — revenue, costs, profit and cash flow',
        'Key ratios — DSCR, current ratio, debt-equity and break-even',
        'Repayment schedule matched to realistic cash flows',
        'Security offered — primary and collateral',
      ] },
      { h: 'CMA data for working capital' },
      { p: 'For cash credit and overdraft limits, banks use Credit Monitoring Arrangement (CMA) data: past, current and projected financial statements in a prescribed format, with an assessment of the working-capital gap. The numbers must tie back to your audited statements and GST returns.' },
      { h: 'Common reasons proposals are rejected' },
      { ul: [
        'Projections far above past performance with no explanation',
        'Turnover in the report that does not match GST returns',
        'An inadequate promoter contribution',
        'Missing quotations or vague project costs',
      ] },
      { tip: 'Banks trust consistency. Make sure your books, GST returns, ITRs and project report tell the same story before you apply.' },
    ],
  },
  {
    slug: 'gst-notice-received-what-to-do',
    title: 'Received a GST Notice? A Step-by-Step Response Plan',
    category: 'GST & Tax',
    date: '2026-09-30',
    readTime: '5 min read',
    image: imgLitigation,
    service: 'gst-income-tax-litigation',
    excerpt: 'A GST notice is not a penalty — it is a question. Answer it well, and on time, and most notices close without a demand.',
    content: [
      { p: 'GST notices are increasingly generated by data matching: differences between GSTR-1 and GSTR-3B, input credit claimed above what GSTR-2B shows, or mismatches with e-way bills and income-tax data. Most can be resolved with reconciliation and a clear reply.' },
      { h: 'Step 1 — Identify the notice' },
      { p: 'Check the form number, the period, the section invoked and the reply deadline. A scrutiny notice (ASMT-10), a show-cause notice (DRC-01 / SCN) and a registration-related notice each need a different response.' },
      { h: 'Step 2 — Reconcile before you reply' },
      { ul: [
        'Compare GSTR-1, GSTR-3B and GSTR-2B for the period',
        'Match the books of accounts with the returns',
        'Identify genuine errors and the explanations for every other difference',
        'Collect invoices, e-way bills and payment proofs',
      ] },
      { h: 'Step 3 — Reply point by point' },
      { p: 'Address every point the officer has raised, attach supporting documents and pay any genuine shortfall with interest through DRC-03 to limit penalties. Ask for a personal hearing if the matter is complex.' },
      { h: 'Step 4 — If an order goes against you' },
      { p: 'You can file an appeal within the time limit allowed, after making the mandatory pre-deposit. Watch the deadline: a delayed appeal may not be admitted.' },
      { tip: 'Never ignore a notice or let the deadline pass. An unanswered notice can result in an ex-parte demand that is far harder to reverse.' },
    ],
  },
  {
    slug: 'buying-private-limited-company-due-diligence',
    title: 'Buying an Existing Private Limited Company: A Due Diligence Checklist',
    category: 'Business Setup',
    date: '2026-09-23',
    readTime: '5 min read',
    image: imgCompanySale,
    service: 'purchase-sale-private-limited-companies',
    excerpt: 'An older company can open doors that a new one cannot — but only if you know exactly what you are buying.',
    content: [
      { p: 'Contractors, investors and expanding businesses sometimes prefer to acquire an existing private limited company rather than incorporate a new one. A company with a filing history, past turnover and established registrations can meet tender eligibility or lender requirements immediately. The trade-off: you inherit its past, so due diligence is essential.' },
      { h: 'ROC & corporate records' },
      { ul: [
        'Status on the MCA portal — active and fully filed, with no defaults',
        'Annual returns and financial statements filed for every year',
        'Charges registered against the company',
        'Statutory registers, minutes and share certificates',
      ] },
      { h: 'Tax & regulatory compliance' },
      { ul: [
        'Income-tax returns, pending demands and notices',
        'GST returns, ITC position and pending proceedings',
        'TDS defaults and EPF / ESI dues',
        'Licences and registrations that will transfer with the company',
      ] },
      { h: 'Financial & legal' },
      { ul: [
        'Accuracy of the balance sheet — especially loans and receivables',
        'Bank liabilities, guarantees and personal guarantees of the existing directors',
        'Pending litigation and contractual obligations',
      ] },
      { h: 'Executing the transfer' },
      { p: 'The deal is completed through a share purchase agreement, share transfer deeds with stamp duty, the appointment and resignation of directors, and the matching ROC filings — followed by updates to bank signatories, GST and other registrations.' },
      { tip: 'Insist on indemnities in the share purchase agreement for liabilities from the period before the transfer. Due diligence reduces risk; indemnities protect you from what it might miss.' },
    ],
  },
];

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);
export const ARTICLE_PATHS = ARTICLES.map((a) => `/blog/${a.slug}`);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
