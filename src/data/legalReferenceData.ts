import { CommencementMilestone, StatutoryReferenceItem } from '../types/course';

export const COMMENCEMENT_MILESTONES: CommencementMilestone[] = [
  {
    id: 'phase-1',
    dateLabel: '13–14 November 2025',
    phase: 'Phase 1 · Immediate Institutional Setup',
    status: 'in-force',
    notificationRef: 'DPDP Act Phase 1 & G.S.R. 846(E) Rules 1, 2, 17–21',
    provisions: 'Act Sec 2 (Definitions), Sec 18–26 (Data Protection Board establishment & powers), Sec 35, 38–43, 44(1)&(3); DPDP Rules 1, 2, 17–21.',
    bfsiOperationalImpact: 'Statutory glossary and Board institutional governance active. Establish internal DPDP steering governance and align terminology across Legal, Risk, IT, and Operations.'
  },
  {
    id: 'phase-2',
    dateLabel: '13–14 November 2026',
    phase: 'Phase 2 · Consent Manager Ecosystem (12 Months)',
    status: 'in-force',
    notificationRef: 'DPDP Act Sec 6(9), 27(1)(d) & DPDP Rules Rule 4 + First Schedule',
    provisions: 'Statutory Consent Manager registration eligibility (Indian company, ≥₹2 Cr net worth, data-blind interoperable architecture) and DPB registration powers.',
    bfsiOperationalImpact: 'ALREADY IN FORCE as of our 25 November 2026 reference date. Platforms seeking Consent Manager registration must meet First Schedule criteria; BFSI teams design Consent APIs ready for registered CMs.'
  },
  {
    id: 'phase-3',
    dateLabel: '13–14 May 2027',
    phase: 'Phase 3 · Substantive Fiduciary, Rights & SDF Enforcement (18 Months)',
    status: 'may-2027',
    notificationRef: 'G.S.R. 843(E) & DPDP Rules 2025 Rules 3, 5–16, 22, 23',
    provisions: 'Act Sec 3–5, 6(1)–(8)&(10), 7–17 (Lawful grounds, Sec 5 Notice, Sec 8 obligations, Sec 9 Children, Sec 10 SDFs, Sec 11–15 Rights/Duties, Sec 16 Cross-border, Sec 17 Exemptions) and Rules 3, 5–16.',
    bfsiOperationalImpact: 'Full penalty schedule active (₹250 Cr Rule 6 security; ₹200 Cr breach/children; ₹150 Cr SDF). Complete Rule 3 notices, 1-year log archives, 10-clause DPAs, Rule 10 age-gating, and DPO/DPIA readiness prior to May 2027.'
  }
];

export const STATUTORY_REFERENCE_INDEX: StatutoryReferenceItem[] = [
  {
    id: 'ref-dpdp-s2',
    law: 'DPDP Act, 2023',
    provision: 'Section 2 (Definitions)',
    status: 'in-force',
    effectiveDate: '13 Nov 2025',
    summary: 'Defines Child (<18), Consent Manager, Data Fiduciary, Data Principal, Data Processor, Personal Data, and Personal Data Breach.',
    bfsiNote: 'Sets statutory boundaries for Bank/Insurer (Fiduciary) vs DSA/LSP/TPA (Processor).'
  },
  {
    id: 'ref-dpdp-r4',
    law: 'DPDP Rules, 2025',
    provision: 'Rule 4 & First Schedule (Consent Managers)',
    status: 'in-force',
    effectiveDate: '14 Nov 2026',
    summary: 'Eligibility, ₹2 Cr net-worth threshold, technical/financial integrity, and interoperable data-blind consent management duties.',
    bfsiNote: 'Distinct from internal enterprise CMP SaaS tools; active for CM applicants now.'
  },
  {
    id: 'ref-dpdp-s5r3',
    law: 'DPDP Act & Rules',
    provision: 'Section 5 & Rule 3 (Privacy Notice)',
    status: 'may-2027',
    effectiveDate: '13–14 May 2027',
    summary: 'Standalone, clear, plain-language itemised notice in English or any 8th Schedule language; Sec 5(2) retroactive notice for legacy data.',
    bfsiNote: 'Decouple Privacy Notices from bundled T&Cs across branch & mobile journeys.'
  },
  {
    id: 'ref-dpdp-s6',
    law: 'DPDP Act, 2023',
    provision: 'Sections 4, 6 & 7 (Lawful Processing)',
    status: 'may-2027',
    effectiveDate: '13 May 2027',
    summary: 'Processing limited to Consent (free, specific, informed, unconditional, unambiguous) or Certain Legitimate Uses; Sec 6(10) burden of proof on Fiduciary.',
    bfsiNote: 'Eliminates GDPR-style "legitimate interest" for BFSI cross-sell analytics.'
  },
  {
    id: 'ref-dpdp-s8r6',
    law: 'DPDP Act & Rules',
    provision: 'Section 8(5)–(6), Rule 6 & Rule 7 (Security & Breach)',
    status: 'may-2027',
    effectiveDate: '13–14 May 2027',
    summary: 'Rule 6 safeguards (encryption, masking, access control, 1-yr logs, processor DPA clauses); Rule 7 dual DPB (72h) & Principal breach notice.',
    bfsiNote: 'Carries up to ₹250 Cr (security) and ₹200 Cr (breach notification) penalties.'
  },
  {
    id: 'ref-dpdp-s9',
    law: 'DPDP Act & Rules',
    provision: 'Section 9 & Rules 10–12 (Children & Guardians)',
    status: 'may-2027',
    effectiveDate: '13–14 May 2027',
    summary: 'Verifiable parental/lawful guardian consent; strict ban on detrimental processing, tracking, behavioural monitoring, and targeted ads.',
    bfsiNote: 'Applies to all users under 18 including minor bank accounts, teen wallets, and EdTech portals.'
  },
  {
    id: 'ref-dpdp-s10',
    law: 'DPDP Act & Rules',
    provision: 'Section 10 & Rule 13 (Significant Data Fiduciary)',
    status: 'may-2027',
    effectiveDate: '13–14 May 2027',
    summary: 'India-based DPO accountable to Board, 12-month DPIA & Independent Audit with DPB reporting, Rule 13(3) Algorithmic Due Diligence, Rule 13(4) localisation.',
    bfsiNote: 'Up to ₹150 Cr penalty tier; major banks/insurers should prepare ahead of notification.'
  },
  {
    id: 'ref-dpdp-s12r8',
    law: 'DPDP Act & Rules',
    provision: 'Section 8(7), 12(3) & Rule 8 (Retention & Erasure)',
    status: 'may-2027',
    effectiveDate: '13–14 May 2027',
    summary: 'Purpose-completion/withdrawal erasure subject to overriding statutory mandates; 1-yr minimum log retention; 3-yr inactivity erasure for 7th Schedule platforms.',
    bfsiNote: 'Requires Erasure Reconciliation Register, Legal Holds, and DR backup replay.'
  },
  {
    id: 'ref-rbi',
    law: 'RBI Master Directions',
    provision: 'Digital Lending (May 2025), KYC & Payment Localisation (2018)',
    status: 'independent-law',
    effectiveDate: 'Currently Active',
    summary: 'Bans lending-app contact/file harvesting; mandates India storage of payment system data; governs V-CIP & LSP accountability.',
    bfsiNote: 'Directly enforceable by RBI today regardless of DPDP Phase 3 date.'
  },
  {
    id: 'ref-sebi',
    law: 'SEBI CSCRF',
    provision: 'Cybersecurity & Cyber Resilience Framework (20 Aug 2024)',
    status: 'independent-law',
    effectiveDate: 'Currently Active',
    summary: 'SOC monitoring, VAPT, ISO alignment, and strict cyber reporting across brokers, AMCs, depositories, and RTAs.',
    bfsiNote: 'Mandatory active compliance for capital-market regulated entities.'
  },
  {
    id: 'ref-irdai',
    law: 'IRDAI Guidelines',
    provision: 'Information & Cyber Security Guidelines (24 Apr 2023)',
    status: 'independent-law',
    effectiveDate: 'Currently Active',
    summary: 'Governs insurer & TPA data protection, CISO oversight, DLP, and rapid cyber incident reporting.',
    bfsiNote: 'Protects health claims & policyholder records immediately.'
  },
  {
    id: 'ref-certin',
    law: 'CERT-In Directions',
    provision: 'Section 70B Directions (28 Apr 2022)',
    status: 'independent-law',
    effectiveDate: 'Currently Active',
    summary: 'Mandatory 6-hour cyber incident reporting, NTP clock sync, and 180-day ICT log retention within India.',
    bfsiNote: 'Strictest initial incident reporting clock in Indian BFSI.'
  },
  {
    id: 'ref-pmla',
    law: 'PMLA, 2002',
    provision: 'Section 12 Record Preservation',
    status: 'independent-law',
    effectiveDate: 'Currently Active',
    summary: 'Requires reporting entities (banks, insurers, intermediaries) to preserve KYC & transaction records for 5 years after relationship ends.',
    bfsiNote: 'Overrides DPDP Sec 12(3) erasure demands for statutory closed-account records.'
  }
];
