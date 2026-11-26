import { CourseModule } from '../types/course';

export const MODULES_1_TO_3: CourseModule[] = [
  {
    id: 1,
    slug: 'statutory-foundation-bfsi-overlap',
    title: 'Statutory Foundation & BFSI Regulatory Overlap',
    shortTitle: 'Statutory Foundation',
    subtitle: 'Constitutional privacy jurisprudence, DPDP Act 2023 applicability, phased Rules 2025 commencement, and sectoral BFSI mandates (RBI, SEBI, IRDAI, PMLA, CERT-In).',
    durationLabel: '360 min',
    unitCountLabel: '12 sessions',
    pdfAssetPath: '/assets/aistudio/Module_1_4bee8af2.pdf',
    pdfFileName: 'Module_1_4bee8af2.pdf',
    commencementSummary: 'Board/Consent Manager framework active (Nov 2025 / Nov 2026); substantive Fiduciary & Rights provisions (Sec 3–17) scheduled for 13 May 2027. RBI/SEBI/IRDAI/CERT-In/PMLA apply independently today.',
    primaryStatutes: [
      'Constitution of India Art. 21',
      'DPDP Act, 2023 (Sec 2–44)',
      'DPDP Rules, 2025 (G.S.R. 846(E))',
      'RBI Digital Lending 2025 & KYC Directions',
      'SEBI CSCRF 2024',
      'IRDAI Info & Cyber Security 2023',
      'CERT-In Directions 2022',
      'PMLA 2002'
    ],
    learningObjectives: [
      'Trace India’s privacy evolution from Justice K.S. Puttaswamy (2017) and IT Act Sec 43A/72A to the DPDP Act, 2023.',
      'Distinguish Data Principals, Data Fiduciaries, Data Processors, Consent Managers, and Significant Data Fiduciaries.',
      'Separate DPDP provisions currently in force (as of 25 Nov 2026) from obligations scheduled to commence in May 2027.',
      'Map operational overlaps and harmonise conflicts across DPDP, RBI, SEBI, IRDAI, PMLA, Aadhaar Act, and CERT-In.'
    ],
    units: [
      {
        id: 'm1-s1',
        code: 'Session 1.1',
        title: 'Constitutional Privacy Foundation & Pre-DPDP Regime',
        durationMinutes: 30,
        status: 'in-force',
        statutoryCitations: ['Art. 21 Constitution', 'Justice K.S. Puttaswamy v. UOI (2017)', 'IT Act Sec 43A & 72A', 'SPDI Rules 2011'],
        summary: 'In Justice K.S. Puttaswamy (Retd.) v. Union of India (2017), a 9-judge Supreme Court bench affirmed privacy as an intrinsic part of Article 21 (Right to Life and Personal Liberty) and established the proportionality test (legality, legitimate aim, proportionality, procedural safeguards).',
        keyPoints: [
          'IT Act Section 43A & SPDI Rules (2011) previously governed Sensitive Personal Data or Information (passwords, financial info, biometrics) for body corporates.',
          'Section 43A is slated for omission under Section 44(2) of the DPDP Act upon full operational transition.',
          'Banks and insurers already owed confidentiality duties under contract, common law, and sectoral master directions before DPDP.'
        ],
        bfsiApplication: 'BFSI institutions cannot treat privacy solely as an IT checkbox—constitutional proportionality underpins regulator scrutiny of surveillance, credit scoring, and KYC collection.',
        roleNotes: {
          frontline: 'Recognise customer financial and identity disclosures as protected legal information, never casual records.',
          it: 'Align historical SPDI encryption/access baselines with upcoming DPDP Rule 6 technical safeguards.',
          leadership: 'Anchor enterprise data governance in Board-approved proportionality and necessity principles.'
        }
      },
      {
        id: 'm1-s2',
        code: 'Session 1.2',
        title: 'DPDP Act Territorial & Material Applicability',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 3', 'DPDP Act Sec 2(n), 2(t)'],
        summary: 'Section 3 applies to digital personal data (collected digitally or digitised subsequently) processed within India, or outside India if connected to offering goods or services to Data Principals in India.',
        keyPoints: [
          'Applies to both online onboarding and paper forms scanned/entered into Core Banking, LOS, or Policy Admin systems.',
          'Excludes personal data processed by individuals for personal/domestic purposes or data publicly available via legal obligation.',
          'Extraterritorial reach covers offshore fintech partners, foreign reinsurers, and overseas SaaS analytics vendors handling Indian customer records.'
        ],
        bfsiApplication: 'Branch physical KYC forms, signed mandate slips, and physical insurance proposals become in-scope the moment branch staff scan or key them into CRM/DMS.',
        roleNotes: {
          frontline: 'Physical account opening forms and cheque KYC slips enter DPDP scope upon digitisation.',
          it: 'Inventory every offshore cloud region, payment gateway, and reinsurer ingesting Indian customer data.',
          leadership: 'Ensure global group entities and overseas outsourcing centres adopt Indian DPDP controls.'
        }
      },
      {
        id: 'm1-s3',
        code: 'Session 1.3',
        title: 'Topic 3.2: Important Definitions Under the DPDP Act',
        durationMinutes: 30,
        status: 'in-force',
        statutoryCitations: ['DPDP Act Sec 2(g), 2(i), 2(j), 2(k), 2(t), 2(x), 2(z)', 'DPDP Act Sec 10'],
        summary: 'Interactive visual guide to the seven foundational definitions under the DPDP Act, 2023 (3.2.1 Data Principal through 3.2.7 Significant Data Fiduciary). Hover over or tap any card to flip and reveal its statutory definition.',
        keyPoints: [
          '3.2.1 Data Principal — The individual to whom personal data relates.',
          '3.2.2 Data Fiduciary — A person who, alone or in conjunction with other persons, determines the purpose and means of processing personal data.',
          '3.2.3 Data Processor — A person who processes personal data on behalf of a Data Fiduciary.',
          '3.2.4 Consent Manager — A registered entity enabling consent management through an accessible and interoperable platform.',
          '3.2.5 Personal Data — Any data about an individual who is identifiable by or in relation to such data.',
          '3.2.6 Processing — Operations performed on personal data (Collection, Storage, Organisation, Retrieval, Use, Sharing, Disclosure, Erasure).',
          '3.2.7 Significant Data Fiduciary — Notified Data Fiduciary subject to India-based DPO, independent data auditor, and specified assessments.'
        ],
        bfsiApplication: 'Hover or tap each of the seven cards below to inspect the statutory definitions governing BFSI customers, banks/insurers, vendors, consent platforms, and Significant Data Fiduciaries.'
      },
      {
        id: 'm1-s4',
        code: 'Session 1.4',
        title: 'Lawful Grounds: Consent & Certain Legitimate Uses',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 4', 'DPDP Act Sec 6', 'DPDP Act Sec 7'],
        summary: 'Under Section 4 (commencing May 2027), personal data may only be processed for a lawful purpose based either on valid Consent (Sec 6) or Certain Legitimate Uses (Sec 7). Unlike GDPR, DPDP contains no broad private "legitimate interest" ground.',
        keyPoints: [
          'Consent must be free, specific, informed, unconditional, and unambiguous via clear affirmative action, limited to data necessary for the specified purpose.',
          'Section 7(a) permits processing when data is voluntarily provided for a specified purpose without indicating non-consent (e.g., walking in for a receipt).',
          'Section 7 covers State functions, legal obligations, court orders, medical emergencies, and employment-related purposes (Sec 7(i)).'
        ],
        bfsiApplication: 'Banks cannot rely on vague "legitimate business interest" to run cross-sell analytics or share borrower leads with sister wealth subsidiaries—explicit, unbundled consent is mandatory.',
        roleNotes: {
          frontline: 'Never bundle insurance or credit card marketing consent into mandatory savings account opening forms.',
          it: 'Tag every personal data attribute with its lawful ground (Sec 6 Consent vs Sec 7 Legal/Employment use).',
          leadership: 'Eliminate dark patterns and cross-sell assumptions in product acquisition funnels prior to May 2027.'
        }
      },
      {
        id: 'm1-s5',
        code: 'Session 1.5',
        title: 'General Obligations of Data Fiduciaries',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(1)–(11)', 'DPDP Rules Rule 6, 7, 8'],
        summary: 'Section 8 imposes core Fiduciary duties: accuracy/completeness when decisions affect Principals or disclosures occur, reasonable security safeguards, mandatory breach intimation, erasure upon purpose completion/withdrawal, and grievance redressal.',
        keyPoints: [
          'Sec 8(1): Fiduciary remains responsible for DPDP compliance even when outsourcing to Data Processors.',
          'Sec 8(2): Valid contracts required before engaging Data Processors.',
          'Sec 8(5) & Rule 6: Reasonable security safeguards (encryption/masking, access controls, 1-year log retention).',
          'Sec 8(6) & Rule 7: Dual notification to Data Protection Board and affected Principals on personal data breach.'
        ],
        bfsiApplication: 'Data inaccuracies in CIBIL/credit bureau reporting or policy nominee fields carry statutory compliance weight alongside RBI/IRDAI consumer protection.',
        roleNotes: {
          frontline: 'Verify and update customer contact/KYC corrections promptly so credit and claim decisions use accurate data.',
          it: 'Deploy automated 1-year security log retention and encryption across all customer data stores.',
          leadership: 'Ensure third-party vendor contracts mandate DPDP flow-down and breach escalation.'
        }
      },
      {
        id: 'm1-s6',
        code: 'Session 1.6',
        title: 'Rights & Duties of Data Principals',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 11–15', 'DPDP Rules Rule 14'],
        summary: 'Data Principals hold rights to access processing summaries and recipient lists (Sec 11), correction/updating/erasure (Sec 12), grievance redressal (Sec 13), and nomination of an authorised representative upon death/incapacity (Sec 14)—balanced by duties under Sec 15 not to impersonate or file frivolous complaints.',
        keyPoints: [
          'Erasure under Sec 12(3) does NOT override statutory retention mandates (e.g., PMLA 5-year/RBI/tax records).',
          'Sec 14 nomination enables seamless continuity for privacy rights alongside bank/insurance financial nominees.',
          'Rule 14 requires clear publication of grievance mechanisms and response within defined timelines (up to 90 days max).'
        ],
        bfsiApplication: 'Loan closure does not allow immediate erasure of KYC or ledger history—BFSI teams must explain statutory retention politely while erasing non-statutory marketing data.',
        roleNotes: {
          frontline: 'Route all customer access, correction, erasure, and grievance requests through official SLA workflows.',
          it: 'Build self-service portal endpoints for data summaries, consent withdrawal, and nominee capture.',
          leadership: 'Monitor DSAR and grievance turnaround times before escalation to the Data Protection Board.'
        }
      },
      {
        id: 'm1-s7',
        code: 'Session 1.7',
        title: 'Phased Commencement: Nov 2025 vs Nov 2026 vs May 2027',
        durationMinutes: 30,
        status: 'in-force',
        statutoryCitations: ['G.S.R. 843(E)', 'G.S.R. 846(E)', 'DPDP Rules 2025'],
        summary: 'On our course reference date (25 November 2026), governance definitions, the Data Protection Board framework, and Consent Manager registration rules are already in force, whereas core Fiduciary, Consent Notice, Children, and SDF rules commence 13–14 May 2027.',
        keyPoints: [
          'Phase 1 (13–14 Nov 2025): Definitions (Sec 2), Data Protection Board establishment (Sec 18–26), Rule-making & penalties framework, Rules 1, 2, 17–21.',
          'Phase 2 (13–14 Nov 2026): Sec 6(9), Sec 27(1)(d), and Rule 4 (Consent Manager registration & obligations) now active.',
          'Phase 3 (13–14 May 2027): Substantive duties Sec 3–17 and Rules 3, 5–16, 22, 23 take legal effect.'
        ],
        bfsiApplication: 'Never falsely claim Section 9 or Rule 13 is enforceable today, nor wait until May 2027 to architect systems—sectoral RBI/SEBI/IRDAI/CERT-In rules already mandate parallel controls right now.',
        table: {
          title: 'DPDP Act & Rules Commencement Status (Reference Date: 25 Nov 2026)',
          columns: ['Phase & Date', 'Act Sections', 'DPDP Rules 2025', 'Current Status'],
          rows: [
            ['Phase 1 (13–14 Nov 2025)', 'Sec 2, 18–26, 35, 38–43, 44(1)&(3)', 'Rules 1, 2, 17–21', 'IN FORCE'],
            ['Phase 2 (13–14 Nov 2026)', 'Sec 6(9), Sec 27(1)(d)', 'Rule 4 (Consent Managers)', 'IN FORCE'],
            ['Phase 3 (13–14 May 2027)', 'Sec 3–5, 6(1)–(8)&(10), 7–17, 27(other), 28–34, 36–37, 44(2)', 'Rules 3, 5–16, 22, 23', 'MAY 2027']
          ]
        }
      },
      {
        id: 'm1-s8',
        code: 'Session 1.8',
        title: 'RBI Master Directions Overlap (KYC & Digital Lending 2025)',
        durationMinutes: 30,
        status: 'independent-law',
        statutoryCitations: ['RBI KYC Master Direction', 'RBI Digital Lending Directions (8 May 2025)', 'RBI Data Localisation (2018)'],
        summary: 'RBI governs banks, NBFCs, payment operators, and LSPs directly. Its Digital Lending Directions (2025) impose strict limits on data collection, explicit borrower consent, and ban accessing mobile contacts/call logs/files.',
        keyPoints: [
          'Payment system data must be stored exclusively in India (RBI 2018 circular).',
          'Digital Lending apps may only access one-time camera/microphone/location for KYC with explicit consent and clear retention disclosure.',
          'REs (Regulated Entities) bear ultimate accountability for Lending Service Providers (LSPs), mirroring DPDP Sec 8(1).'
        ],
        bfsiApplication: 'Even before DPDP Sec 6 takes effect in May 2027, an NBFC lending app scraping phone contacts violates active RBI Digital Lending Directions immediately.',
        roleNotes: {
          frontline: 'Follow RBI Video-KYC (V-CIP) and Aadhaar masking SOPs during every customer onboarding.',
          it: 'Verify SDK permissions in mobile lending apps block contacts/gallery/call-log harvesting.',
          leadership: 'Harmonise LSP vendor governance across RBI outsourcing guidelines and DPDP Sec 8.'
        }
      },
      {
        id: 'm1-s9',
        code: 'Session 1.9',
        title: 'SEBI CSCRF 2024 & Capital Markets Overlap',
        durationMinutes: 30,
        status: 'independent-law',
        statutoryCitations: ['SEBI CSCRF (20 Aug 2024)', 'SEBI Intermediary Regulations'],
        summary: 'SEBI’s Cybersecurity and Cyber Resilience Framework (CSCRF) applies across Qualified/Mid-size/Small-size Regulated Entities including brokers, AMCs, depositories, and RTAs—enforcing strict SOC monitoring, ISO alignment, and incident reporting.',
        keyPoints: [
          'SEBI mandates market-SOC onboarding or continuous cyber resilience monitoring and periodic VAPT.',
          'Investor KYC, demat holdings, and trade logs carry strict confidentiality and audit-trail retention.',
          'DPDP Rule 6 (safeguards) and Rule 7 (breach notification) layer directly atop SEBI cyber reporting.'
        ],
        bfsiApplication: 'A brokerage or RTA experiencing a client trade-file leak faces simultaneous SEBI CSCRF reporting and DPDP breach notification duties post-May 2027.',
        roleNotes: {
          frontline: 'Never export client demat holding statements or advisory notes to personal messaging channels.',
          it: 'Integrate SEBI CSCRF SOC alerts with unified breach triage playbooks.',
          leadership: 'Consolidate SEBI Technology Committee oversight with DPDP governance.'
        }
      },
      {
        id: 'm1-s10',
        code: 'Session 1.10',
        title: 'IRDAI Information & Cyber Security Guidelines (2023)',
        durationMinutes: 30,
        status: 'independent-law',
        statutoryCitations: ['IRDAI Info & Cyber Security Guidelines (24 Apr 2023)', 'IRDAI Protection of Policyholders Interests'],
        summary: 'Insurers handle sensitive health diagnostics, family medical histories, lifestyle underwriting data, and beneficiary claims—regulated immediately under IRDAI’s 2023 Cyber Guidelines and 2024 policyholder regulations.',
        keyPoints: [
          'Mandates Board-approved information security policies, CISO oversight, DLP controls, and 6-hour/48-hour cyber incident reporting.',
          'Third-Party Administrators (TPAs), surveyors, and hospital portals must follow insurer security baselines.',
          'Note: Unlike GDPR, DPDP does not create a separate "special category" tier—but sensitive health claims require elevated Rule 6 safeguards and strict Sec 9 protection for minor beneficiaries.'
        ],
        bfsiApplication: 'Medical diagnostic PDFs uploaded for health claims cannot sit in unencrypted TPA email inboxes or shared branch folders.',
        roleNotes: {
          frontline: 'Collect only policy-relevant claim documents through authenticated insurer portals.',
          it: 'Encrypt health claim repositories at rest/transit and restrict underwriting screen access via RBAC.',
          leadership: 'Audit TPA and web-aggregator data sharing agreements ahead of May 2027.'
        }
      },
      {
        id: 'm1-s11',
        code: 'Session 1.11',
        title: 'PMLA, Aadhaar Act & CERT-In Intersection',
        durationMinutes: 30,
        status: 'independent-law',
        statutoryCitations: ['PMLA 2002 Sec 12', 'Aadhaar Act 2016', 'CERT-In Directions (28 Apr 2022)'],
        summary: 'Statutory record mandates and national cyber directives supersede generic consent withdrawal: PMLA requires retaining KYC/transaction records for 5 years post-relationship; Aadhaar Act forbids storing core biometrics or raw Aadhaar numbers without UIDAI vaulting; CERT-In mandates 6-hour cyber incident reporting and 180-day ICT log retention in India.',
        keyPoints: [
          'DPDP Sec 8(7) (erasure upon purpose completion) yields where another law requires retention (PMLA 5-year mandate).',
          'DPDP Sec 17 & Sec 7(b) preserve statutory compliance processing.',
          'CERT-In 6-hour reporting is stricter in initial speed than DPDP Rule 7’s "without delay" + 72-hour detailed breach update.'
        ],
        bfsiApplication: 'When a closed-account customer demands immediate erasure of PAN and KYC logs, the bank must retain PMLA-mandated KYC records in restricted archival storage while deleting marketing tags.',
        roleNotes: {
          frontline: 'Never collect unmasked Aadhaar photocopies where VID/masked e-KYC suffices.',
          it: 'Maintain NTP-synchronised 180-day CERT-In ICT logs today and expand to 1-year DPDP Rule 6 logs for May 2027.',
          leadership: 'Coordinate Legal, CISO, and MLRO functions so DPDP erasure workflows never break PMLA compliance.'
        }
      },
      {
        id: 'm1-s12',
        code: 'Session 1.12',
        title: 'Enterprise Harmonisation & Penalty Architecture',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 33 & Schedule', 'DPDP Act Sec 27–32'],
        summary: 'DPDP establishes tiered administrative penalties up to ₹250 crore for failing reasonable security safeguards, ₹200 crore for breach notification or children’s data failures, and ₹50 crore for general violations—independent of RBI/SEBI/IRDAI supervisory sanctions.',
        keyPoints: [
          'Penalties apply per breach/contravention evaluated by the Data Protection Board based on gravity, duration, repetitive nature, and mitigation.',
          'Voluntary undertakings under Sec 32 allow early corrective commitments to the Board.',
          'Single unified privacy + cyber + AML governance prevents siloed compliance failures.'
        ],
        bfsiApplication: 'Harmonising RBI/SEBI/IRDAI controls with DPDP Rule 6 safeguards addresses the single highest financial penalty category (₹250 Cr) simultaneously across regulators.',
        table: {
          title: 'DPDP Act Schedule Penalty Caps (Substantive Enforcement From May 2027)',
          columns: ['Contravention Category', 'Statutory Section', 'Maximum Penalty'],
          rows: [
            ['Failure to take reasonable security safeguards to prevent personal data breach', 'Sec 8(5)', 'Up to ₹250 Crore'],
            ['Failure to notify Board and affected Data Principals of personal data breach', 'Sec 8(6)', 'Up to ₹200 Crore'],
            ['Non-fulfilment of additional obligations relating to children', 'Sec 9', 'Up to ₹200 Crore'],
            ['Non-fulfilment of Significant Data Fiduciary obligations (DPIA/Audit/DPO)', 'Sec 10', 'Up to ₹150 Crore'],
            ['Breach of Data Principal duties (impersonation, false/frivolous complaint)', 'Sec 15', 'Up to ₹10,000'],
            ['Any other contravention of DPDP Act or Rules', 'General Residual', 'Up to ₹50 Crore']
          ]
        }
      }
    ],
    caseStudies: [
      {
        id: 'm1-cs1',
        title: 'Digital Lending App Contact Scraping',
        sector: 'NBFC / FinTech Lending',
        scenario: 'An NBFC partners with a Lending Service Provider (LSP) whose Android app requires access to borrowers’ phone contacts, SMS inbox, and photo gallery before evaluating a ₹50,000 personal loan.',
        legalIssue: 'Violation of active RBI Digital Lending Directions (2025) prohibition on harvesting contacts/files, plus failure of DPDP necessity & unbundled consent principles.',
        expectedApproach: 'Immediately disable non-KYC device permissions under RBI Directions today; enforce strict LSP Data Processing Agreement, granular purpose notice, and data minimisation ahead of May 2027.',
        keyCitation: 'RBI Digital Lending Directions 2025 · DPDP Sec 4, 6, 8(1)',
        statusNote: 'independent-law'
      },
      {
        id: 'm1-cs2',
        title: 'Closed Savings Account PMLA vs Erasure Request',
        sector: 'Retail Banking',
        scenario: 'A former customer closes their savings account and demands immediate deletion of all PAN, Aadhaar e-KYC logs, and 4 years of transaction statements citing the right to erasure.',
        legalIssue: 'Conflict between customer erasure demand (DPDP Sec 12(3)) and mandatory 5-year record preservation under PMLA Section 12.',
        expectedApproach: 'Retain KYC and transaction records in a restricted statutory archive for 5 years post-account closure under PMLA; immediately erase promotional leads, marketing flags, and non-essential session logs.',
        keyCitation: 'PMLA Sec 12 · DPDP Sec 8(7), 12(3)',
        statusNote: 'may-2027'
      },
      {
        id: 'm1-cs3',
        title: 'Health Insurance TPA Unencrypted Claim Transfer',
        sector: 'Health Insurance',
        scenario: 'A hospital desk emails unencrypted diagnostic reports and policy IDs of 420 patients to a Third-Party Administrator (TPA), and a staff laptop is later stolen from a cab.',
        legalIssue: 'Immediate violation of IRDAI Info & Cyber Security Guidelines (2023) and CERT-In 6-hour reporting; future DPDP Sec 8(5) & 8(6) exposure up to ₹250 Cr + ₹200 Cr.',
        expectedApproach: 'Trigger CERT-In 6-hour and IRDAI incident reporting immediately, enforce encrypted TPA claim portals + full-disk encryption, and integrate Rule 7 72-hour Board/Principal breach workflow.',
        keyCitation: 'IRDAI 2023 · CERT-In 2022 · DPDP Rule 6 & 7',
        statusNote: 'independent-law'
      },
      {
        id: 'm1-cs4',
        title: 'Broking House Offshore Analytics Vendor',
        sector: 'Securities & Wealth Management',
        scenario: 'An Indian stockbroker uploads client portfolio histories and PAN-linked trade behaviour to a US-based cloud AI analytics vendor to model churn risk.',
        legalIssue: 'Extraterritorial DPDP Sec 3 coverage over offshore vendor, SEBI CSCRF third-party governance, and future Sec 16 cross-border transfer compliance.',
        expectedApproach: 'Apply SEBI CSCRF vendor controls today; execute formal DPA with pseudonymisation/tokenisation and track MeitY negative-list notifications under Sec 16.',
        keyCitation: 'SEBI CSCRF 2024 · DPDP Sec 3, 8(2), 16',
        statusNote: 'may-2027'
      }
    ]
  },
  {
    id: 2,
    slug: 'lawful-processing-notice-consent-engineering',
    title: 'Lawful Processing, Privacy Notice & Consent Engineering',
    shortTitle: 'Notice & Consent Engineering',
    subtitle: 'Seven data processing principles, GDPR vs DPDP lawful grounds, Section 5 & Rule 3 clear notices, dark pattern elimination, and Statutory Consent Managers.',
    durationLabel: '300 min',
    unitCountLabel: '9 structured units',
    pdfAssetPath: '/assets/aistudio/Module_2_aeb75308.pdf',
    pdfFileName: 'Module_2_aeb75308.pdf',
    commencementSummary: 'Rule 4 (Consent Manager registration & obligations) & Sec 6(9) active since 13–14 Nov 2026. Section 4–7 & Rule 3 notices commence 13–14 May 2027.',
    primaryStatutes: [
      'DPDP Act Sec 4, 5, 6, 7',
      'DPDP Rules Rule 3 & Rule 4',
      'DPDP Rules First Schedule (Consent Manager)',
      'GDPR Art. 5, 6, 7, 12–14 (Comparative)',
      'CCPA Guidelines on Dark Patterns 2023'
    ],
    learningObjectives: [
      'Apply the 7 core data protection principles (lawfulness, fairness & transparency, purpose limitation, minimisation, accuracy, storage limitation, integrity & accountability).',
      'Contrast GDPR’s 6 lawful bases (including Contract & Legitimate Interest) with DPDP’s strict 2-ground model (Consent & Certain Legitimate Uses).',
      'Draft DPDP Section 5 & Rule 3 standalone, clear, plain-language Privacy Notices distinct from Privacy Policies and Terms of Service.',
      'Engineer compliant consent lifecycles, eliminate UI dark patterns, and distinguish Statutory Consent Managers (Rule 4) from enterprise CMP software.'
    ],
    units: [
      {
        id: 'm2-u1',
        code: 'Unit 2.1',
        title: 'The Seven Foundational Processing Principles',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 4–8', 'GDPR Art. 5 (Comparative)'],
        summary: 'Global privacy regimes and DPDP operational readiness revolve around seven principles: Lawfulness/Fairness/Transparency, Purpose Limitation, Data Minimisation, Accuracy, Storage Limitation, Integrity & Confidentiality, and Accountability.',
        keyPoints: [
          'Data Minimisation: collect only fields strictly required for the stated service (e.g., avoid collecting caste, spouse employment, or social handles for a basic deposit).',
          'Purpose Limitation: data gathered for KYC verification cannot automatically feed behavioural ad profiling without separate fresh notice and consent.',
          'Accountability: maintain demonstrable logs proving notice delivery, consent timestamps, and withdrawal enforcement.'
        ],
        bfsiApplication: 'Audit every BFSI onboarding form field-by-field—every optional or legacy field without clear purpose justification is a liability.',
        roleNotes: {
          frontline: 'Never request extra personal documents "just in case" beyond the standard checklist.',
          it: 'Enforce schema-level field tagging linking database columns to permitted processing purposes.',
          leadership: 'Require Data Minimisation sign-off before launching new digital journeys.'
        }
      },
      {
        id: 'm2-u2',
        code: 'Unit 2.2',
        title: 'GDPR 6 Lawful Bases vs DPDP 2 Lawful Grounds',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 4, 6, 7', 'GDPR Art. 6'],
        summary: 'GDPR provides six bases (Consent, Contract, Legal Obligation, Vital Interests, Public Task, Legitimate Interests). DPDP eliminates "Contractual Necessity" and "Legitimate Interests", leaving ONLY Consent (Sec 6) and Certain Legitimate Uses (Sec 7).',
        keyPoints: [
          'Under GDPR, processing to fulfil a loan contract relies on Art. 6(1)(b); under DPDP, if not covered by a Sec 7 statutory duty or voluntary provision, the bank needs explicit Consent (Sec 6).',
          'Section 7(a) applies only when a Principal voluntarily provides data for a specified purpose AND has not indicated non-consent—it cannot justify hidden secondary sharing.',
          'Consent under DPDP Sec 6(1) MUST be free, specific, informed, unconditional, and unambiguous.'
        ],
        bfsiApplication: 'Multinational banks copying EU GDPR "Legitimate Interest Assessments (LIA)" into Indian operations will fail DPDP audits—India requires Sec 6 Consent or strict Sec 7 triggers.',
        table: {
          title: 'GDPR Art. 6 vs DPDP Act Sec 4 & 7 Comparison',
          columns: ['Processing Scenario', 'GDPR Legal Basis', 'DPDP Act Ground', 'Key Operational Difference'],
          rows: [
            ['Processing loan EMI repayment', 'Contractual Necessity (Art. 6(1)(b))', 'Sec 6 Consent / Sec 7(a) Voluntary', 'No standalone "Contract" ground under DPDP'],
            ['Fraud telemetry & cross-sell analytics', 'Legitimate Interest (Art. 6(1)(f))', 'Sec 6 Explicit Consent (or statutory mandate)', 'No private "Legitimate Interest" balancing test in DPDP'],
            ['PMLA / Income Tax statutory KYC', 'Legal Obligation (Art. 6(1)(c))', 'Sec 7(b)/(c)/(d) Legal Duty', 'Both allow statutory processing without consent'],
            ['Employee payroll & HR administration', 'Contract / Legal / Legitimate Interest', 'Sec 7(i) Employment Purposes', 'Covered under legitimate use for employment & corporate loss prevention']
          ]
        }
      },
      {
        id: 'm2-u3',
        code: 'Unit 2.3',
        title: 'Section 5 & Rule 3 Privacy Notice Architecture',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 5', 'DPDP Rules Rule 3'],
        summary: 'Before or at the time of seeking consent, Data Fiduciaries must deliver an itemised notice (Sec 5 & Rule 3) that is standalone, understandable independently, in clear/plain language, and available in English or any 8th Schedule language.',
        keyPoints: [
          'Rule 3 requires the notice to be presented independently—NOT buried inside a 40-page Terms & Conditions or generic Privacy Policy.',
          'Must itemise: (a) personal data to be processed, (b) specified purpose(s) and goods/services enabled, (c) how to withdraw consent, and (d) how to exercise rights and complain to the DPB.',
          'For pre-commencement legacy consents (Sec 5(2)), Fiduciaries must issue retroactive notices "as soon as reasonably practicable" upon Sec 5 commencement.'
        ],
        bfsiApplication: 'Every BFSI account opening screen needs a concise, scannable Rule 3 Notice showing exact data fields, purposes, and a 1-click English/Hindi/regional language switcher.',
        roleNotes: {
          frontline: 'Read/provide the short standalone notice summary in the customer’s preferred language at branch desks.',
          it: 'Deploy multilingual Rule 3 notice templates via API with versioned delivery audit trails.',
          leadership: 'Budget for 22-language (8th Schedule) notice localisation and legacy customer notice campaigns before May 2027.'
        }
      },
      {
        id: 'm2-u4',
        code: 'Unit 2.4',
        title: 'Privacy Notice vs Privacy Policy vs Terms & Conditions',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 5 & 6', 'DPDP Rules Rule 3'],
        summary: 'Legal, product, and UX teams routinely confuse three distinct artefacts: Privacy Notices (point-of-collection disclosure to individuals), Privacy Policies (external governance overview), and Terms & Conditions (contractual rules).',
        keyPoints: [
          'Privacy Notice: Just-in-time, transaction-specific transparency required before consent.',
          'Privacy Policy: Holistic institutional statement published on website/app describing practices, security posture, and DPO details.',
          'Terms & Conditions: Commercial contract governing fees, interest rates, and liability—cannot conceal consent.'
        ],
        bfsiApplication: 'Replacing "I agree to T&C and Privacy Policy" with separate, granular checkboxes plus a dedicated Rule 3 Notice prevents invalid bundled consent.',
        table: {
          title: 'Notice vs Policy vs Terms & Conditions',
          columns: ['Dimension', 'Privacy Notice (Sec 5 / Rule 3)', 'Privacy Policy', 'Terms & Conditions'],
          rows: [
            ['Primary Role', 'Specific transparency before consent', 'Enterprise-wide privacy commitment', 'Commercial & contractual service rules'],
            ['Delivery Timing', 'At/before data collection point', 'Always accessible via site/app footer', 'Account/product onboarding contract'],
            ['DPDP Requirement', 'Mandatory, standalone & itemised', 'Supporting governance disclosure', 'Must stay separate from consent checkboxes']
          ]
        }
      },
      {
        id: 'm2-u5',
        code: 'Unit 2.5',
        title: 'Consent Engineering & End-to-End Consent Lifecycle',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 6(1)–(6)', 'DPDP Act Sec 6(10)'],
        summary: 'Consent engineering translates statutory rules into auditable software architecture spanning five lifecycle stages: Collection -> Artefact Storage -> Active Enforcement -> Modification/Withdrawal -> Post-Withdrawal Erasure.',
        keyPoints: [
          'Unconditional rule (Sec 6(1) illustration): A bank cannot force a customer to accept third-party marketing emails as a precondition to opening a basic savings account.',
          'Section 6(10): In any dispute, the Data Fiduciary bears the legal burden of proving valid notice was given and valid consent was obtained.',
          'Withdrawal (Sec 6(4)) must be as easy as giving consent and automatically halt downstream marketing/analytics feeds within reasonable real-time SLAs.'
        ],
        bfsiApplication: 'Generate an immutable cryptographic/timestamped Consent Artefact (Notice Version + Purpose IDs + Timestamp + Channel) propagated via API to CRM, SMS gateways, and partner fintechs.',
        roleNotes: {
          frontline: 'Respect customer "No" to optional cross-sell add-ons without delaying core banking service.',
          it: 'Emit real-time webhook events on consent withdrawal so dialers, ad pixels, and email engines suppress profiles instantly.',
          leadership: 'Treat missing consent proof under Sec 6(10) as an automatic audit failure.'
        }
      },
      {
        id: 'm2-u6',
        code: 'Unit 2.6',
        title: 'Eliminating Dark Patterns in Financial UX',
        durationMinutes: 35,
        status: 'independent-law',
        statutoryCitations: ['DPDP Act Sec 6(1) & 6(4)', 'CCPA Guidelines for Prevention of Dark Patterns 2023'],
        summary: 'Deceptive UI/UX tricks invalidate free and informed consent under DPDP and violate active CCPA Dark Patterns prohibitions (2023).',
        keyPoints: [
          'Forced Consent / Bundling: Tying core loan disbursement to mandatory partner insurance or promotional consent.',
          'Pre-Selected Options: Pre-ticked checkboxes for sharing data with affiliates—violates Sec 6 "clear affirmative action".',
          'Confirmshaming: Guilt-tripping button copy ("No thanks, I hate saving money and financial security").',
          'Asymmetric / Difficult Withdrawal: 1-tap "Accept All" inside the app vs forcing branch visits or physical letters to withdraw.'
        ],
        bfsiApplication: 'Every mobile banking app, credit card funnel, and insurance aggregator landing page requires dark-pattern QA sign-off before deployment.',
        roleNotes: {
          frontline: 'Never pre-fill or check marketing boxes on tablet/paper forms on a customer’s behalf.',
          it: 'Enforce UI component standards banning pre-checked optional toggles and hidden opt-out paths.',
          leadership: 'Prohibit growth/marketing KPIs from overriding consent fairness.'
        }
      },
      {
        id: 'm2-u7',
        code: 'Unit 2.7',
        title: 'Statutory Consent Manager (Rule 4) vs Enterprise CMP Software',
        durationMinutes: 40,
        status: 'in-force',
        statutoryCitations: ['DPDP Act Sec 2(g), 6(7)–(9)', 'DPDP Rules Rule 4 & First Schedule'],
        summary: 'A major point of industry confusion: a Statutory Consent Manager under DPDP (Rule 4, IN FORCE since 14 Nov 2026) is an independent, India-incorporated fiduciary platform registered with the Data Protection Board—completely distinct from commercial Cookie/Consent Management Platform (CMP) SaaS tools.',
        keyPoints: [
          'Rule 4 & First Schedule require a Consent Manager to be an Indian company with minimum ₹2 Crore net worth, technical capacity, independent directors, and strict conflict-of-interest avoidance.',
          'The Consent Manager acts as an interoperable single dashboard allowing Data Principals to give, manage, review, and withdraw consent across multiple Data Fiduciaries (data-blind architecture).',
          'Enterprise CMP software (e.g., OneTrust/custom consent vaults) helps a single bank store internal consent receipts, but does NOT turn the bank into a Rule 4 Consent Manager.'
        ],
        bfsiApplication: 'BFSI institutions should prepare APIs compatible with registered Consent Managers (similar to Account Aggregator interoperability) while running internal consent vaults for direct channels.',
        table: {
          title: 'Statutory Consent Manager (Rule 4) vs Enterprise CMP Tool',
          columns: ['Attribute', 'DPDP Statutory Consent Manager', 'Enterprise CMP Software'],
          rows: [
            ['Legal Status', 'Registered with Data Protection Board under Rule 4 (active Nov 2026)', 'Commercial SaaS / internal consent vault'],
            ['Incorporation & Net Worth', 'Indian company, min ₹2 Cr net worth, Board audit oversight', 'Any vendor; no statutory DPB registration'],
            ['Scope', 'Cross-fiduciary single interface for the Data Principal', 'Single-enterprise websites, apps, and CRM logs'],
            ['Data Blindness', 'Cannot read underlying personal data payload itself', 'Stores enterprise consent flags & user identifiers']
          ]
        }
      },
      {
        id: 'm2-u8',
        code: 'Unit 2.8',
        title: 'Consent Withdrawal Propagation & Edge Cases',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 6(4)–(6)'],
        summary: 'Under Section 6(5), consequences of consent withdrawal are borne by the Data Principal (e.g., a borrower revoking access to optional analytics loses personalised offers), and withdrawal does not invalidate prior lawful processing.',
        keyPoints: [
          'Core regulated services (repaying an active loan) continue under statutory/voluntary processing even after optional marketing consent is revoked.',
          'Data Fiduciaries must notify connected Data Processors (SMS agencies, analytics SaaS) immediately upon withdrawal.',
          'Granular purpose scoping avoids forcing "all-or-nothing" consent revocation.'
        ],
        bfsiApplication: 'Allow a customer to toggle off "Wealth Advisory Calls" while keeping "Instant UPI Fraud Alerts" enabled.',
        roleNotes: {
          frontline: 'Confirm to customers clearly which alerts remain active after marketing withdrawal.',
          it: 'Propagate consent revocation events across DWH, CRM, marketing automation, and vendor SFTP/APIs.',
          leadership: 'Measure withdrawal propagation latency across third-party ecosystems.'
        }
      },
      {
        id: 'm2-u9',
        code: 'Unit 2.9',
        title: 'Auditing Consent Artefacts & Legacy Data Migration',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 5(2), 6(10)'],
        summary: 'Banks hold tens of millions of pre-DPDP customer accounts. Section 5(2) requires issuing fresh retrospective Rule 3 notices for pre-Act consents as soon as reasonably practicable after May 2027 commencement.',
        keyPoints: [
          'Audit legacy CRM flags ("Do Not Disturb", paper opt-ins) to identify missing notice proofs.',
          'Execute multi-channel Sec 5(2) notice outreach (email, SMS link, mobile banking banner, ATM/statement notice) logged per customer.',
          'Retain consent withdrawal proofs even after underlying marketing profiles are erased to defend future disputes.'
        ],
        bfsiApplication: 'Running Sec 5(2) legacy notice readiness tests in late 2026 prevents operational bottlenecks when Phase 3 triggers in May 2027.',
        roleNotes: {
          frontline: 'Capture updated Rule 3 acknowledgements during routine branch KYC refreshes.',
          it: 'Maintain immutable consent audit logs (who, what version, when, how) separate from mutable CRM preference flags.',
          leadership: 'Approve staged legacy customer notice roadmap across inactive and active accounts.'
        }
      }
    ],
    caseStudies: [
      {
        id: 'm2-cs1',
        title: 'Bundled Credit Card Insurance Add-On',
        sector: 'Credit Cards',
        scenario: 'During digital credit card activation, the "Activate Card" button is disabled unless the user checks "I agree to Terms, Privacy Policy, and sharing my income data with Group Insurance Partners for promotional quotes."',
        legalIssue: 'Violates Section 6(1) unconditional & specific consent and CCPA Dark Patterns (Forced Action).',
        expectedApproach: 'Decouple optional promotional partner sharing into an unchecked, independent toggle paired with a clear Rule 3 notice. Card activation must succeed cleanly if declined.',
        keyCitation: 'DPDP Sec 5 & 6(1) · Rule 3 · CCPA Dark Patterns 2023',
        statusNote: 'may-2027'
      },
      {
        id: 'm2-cs2',
        title: 'Asymmetric Marketing Withdrawal Funnel',
        sector: 'Wealth & Mutual Funds',
        scenario: 'An AMC mobile app lets investors opt into partner wealth alerts with 1 swipe, but requires printing, signing, and couriering a physical form to the Mumbai RTA office to opt out.',
        legalIssue: 'Directly violates Section 6(4) ("ease of withdrawal shall be comparable to ease of giving consent") and Dark Pattern obstruction.',
        expectedApproach: 'Build a 1-tap in-app Consent Preference Centre linked to automated suppression APIs across CRM and outbound dialers.',
        keyCitation: 'DPDP Sec 6(4) & 6(6)',
        statusNote: 'may-2027'
      },
      {
        id: 'm2-cs3',
        title: 'Legacy Pre-2023 Consent Without Audit Trail',
        sector: 'Retail Banking',
        scenario: 'A bank runs a personal loan campaign targeting 2 million pre-2020 depositors based on a legacy spreadsheet column marked "Marketing=Y" without notice versions or timestamps.',
        legalIssue: 'Fails Sec 5(2) legacy notice requirement and Sec 6(10) burden of proof.',
        expectedApproach: 'Halt unverified legacy targeting pending Sec 5(2) compliant notice issuance and explicit re-consent capture via logged digital/branch channels.',
        keyCitation: 'DPDP Sec 5(2) & 6(10)',
        statusNote: 'may-2027'
      }
    ]
  },
  {
    id: 3,
    slug: 'data-lifecycle-retention-erasure-reconciliation',
    title: 'Data Lifecycle, Retention & Erasure Reconciliation',
    shortTitle: 'Lifecycle & Erasure',
    subtitle: 'Seven lifecycle stages, data classification, Rule 8 & Seventh Schedule retention triggers, archival vs backup isolation, and legally defensible erasure reconciliation.',
    durationLabel: '425 min',
    unitCountLabel: '12 structured units',
    pdfAssetPath: '/assets/aistudio/Module_3_c28b9648.pdf',
    pdfFileName: 'Module_3_c28b9648.pdf',
    commencementSummary: 'DPDP Sec 8(7), Sec 12(3) & Rule 8 retention/erasure mandates commence May 2027; PMLA 5-year KYC retention, Income Tax 8-year books, and CERT-In 180-day logs are active today.',
    primaryStatutes: [
      'DPDP Act Sec 8(7) & Sec 12(3)',
      'DPDP Rules Rule 8 & Seventh Schedule',
      'DPDP Rules Rule 6(e) (1-yr log retention)',
      'PMLA 2002 (5-year post-relationship)',
      'Income Tax Act & Companies Act (8 years)',
      'RBI / IRDAI / SEBI Retention Mandates'
    ],
    learningObjectives: [
      'Map all 7 stages of the BFSI data lifecycle from Collection to Verified Destruction.',
      'Classify organisational records across Public, Internal, Confidential, and Restricted tiers.',
      'Distinguish Retention Triggers from Retention Periods under Rule 8 and the Seventh Schedule.',
      'Execute multi-system Erasure Reconciliation, manage Partial Erasure under Legal Holds, and handle Backup Restoration reapplication.'
    ],
    units: [
      {
        id: 'm3-u1',
        code: 'Unit 3.1',
        title: 'The Seven Stages of the Data Lifecycle',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(7)', 'NIST / ISO 27001 Lifecycle'],
        summary: 'Every piece of customer data flows through seven controlled stages: (1) Collection & Capture, (2) Storage & Classification, (3) Active Processing & Use, (4) Sharing & Disclosure, (5) Archival, (6) Retention Expiry / Trigger Review, and (7) Secure Deletion & Reconciliation.',
        keyPoints: [
          'Shadow spreadsheets, branch desktops, and WhatsApp chat exports create untracked lifecycle branches ("dark data").',
          'Retention clocks rarely start at collection—most BFSI clocks start at Account Closure, Loan Settlement, or Claim Adjudication.',
          'Lifecycle governance stops indefinite hoarding ("just in case").'
        ],
        bfsiApplication: 'Tracking all 7 stages prevents rejected loan leads from sitting indefinitely in DSA Excel sheets.',
        roleNotes: {
          frontline: 'Store customer onboarding scans strictly in official DMS—never on local PC desktops or USB drives.',
          it: 'Tag every table and object bucket with lifecycle owner, classification tier, and purge policy.',
          leadership: 'Eliminate "infinite retention" defaults across enterprise storage budgets.'
        }
      },
      {
        id: 'm3-u2',
        code: 'Unit 3.2',
        title: 'Personal vs Non-Personal Data & 4-Tier Classification',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 2(t)', 'DPDP Act Sec 3'],
        summary: 'Personal data means any data about an individual identifiable by or in relation to such data. True irreversibly anonymised aggregates fall outside DPDP, whereas pseudonymised/tokenised IDs remain personal data as long as re-identification keys exist.',
        keyPoints: [
          'Public: Published branch locator, IFSC directory, public product brochures.',
          'Internal: Standard branch SOPs, internal training memos without customer identifiers.',
          'Confidential: Customer names, addresses, loan balances, policy histories.',
          'Restricted: Passwords, PINs, OTPs, PAN/Aadhaar numbers, medical diagnostic records, biometrics, full card PAN/CVV.'
        ],
        bfsiApplication: 'Replacing customer names with an internal CIF ID in analytics tables is pseudonymisation—NOT anonymisation—so DPDP still applies.',
        table: {
          title: 'BFSI 4-Tier Data Classification Matrix',
          columns: ['Tier', 'Sensitivity & Impact', 'BFSI Examples', 'Mandatory Handling Controls'],
          rows: [
            ['Public', 'No privacy/harm impact', 'Published FD rates, branch IFSC list, CSR reports', 'Integrity verification only'],
            ['Internal', 'Operational internal impact', 'Staff rosters, internal branch manuals', 'Authenticated employee access'],
            ['Confidential', 'High customer/regulatory impact', 'Account balances, credit scores, policy schedules', 'RBAC, encryption in transit & rest, DLP'],
            ['Restricted', 'Severe statutory/fraud impact', 'Aadhaar/PAN, biometrics, health claims, card CVV/OTP', 'Tokenisation/vaulting, MFA, PAM, strict masking']
          ]
        }
      },
      {
        id: 'm3-u3',
        code: 'Unit 3.3',
        title: 'Purpose Limitation, Data Minimisation & Storage Types',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 6(1), 8(5), 8(7)'],
        summary: 'Minimisation reduces breach blast radius under the CIA Triad (Confidentiality, Integrity, Availability) across primary Core DBs, Data Warehouses, S3/Blob lakes, and physical paper vaults.',
        keyPoints: [
          'Primary OLTP DBs require low latency and strict schema controls.',
          'Analytics warehouses require field masking/tokenisation before ingestion.',
          'Physical paper loan/KYC files require locked fireproof records rooms and scheduled pulping/shredding.'
        ],
        bfsiApplication: 'Mask PAN/Aadhaar in customer service CRM views so agents only see last 4 digits during routine balance queries.',
        roleNotes: {
          frontline: 'Verify identity without printing unnecessary full Aadhaar or bank statement copies.',
          it: 'Implement column-level masking in DWH/BI tools and scan unstructured buckets for stray PII.',
          leadership: 'Mandate minimisation gates in product architecture reviews.'
        }
      },
      {
        id: 'm3-u4',
        code: 'Unit 3.4',
        title: 'Retention Policies vs Schedules: Triggers vs Periods',
        durationMinutes: 40,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(7)', 'DPDP Rules Rule 8', 'Seventh Schedule'],
        summary: 'A Retention Policy defines institutional rules; a Retention Schedule maps exact record categories to a Retention Trigger (the event starting the clock) and a Retention Period (duration after the trigger).',
        keyPoints: [
          'Rule 8 requires specified Data Fiduciaries (Seventh Schedule: major e-commerce, online gaming, social media platforms ≥2 Cr users) to erase inactive user data after 3 years (with 48-hour prior notice).',
          'Under Rule 8(3), ALL Data Fiduciaries must retain traffic/processing logs for at least 1 year for statutory/Board audit purposes.',
          'BFSI Retention Triggers: Account Closure (+5 yrs PMLA), Loan Full Settlement (+5–8 yrs), Policy Expiry/Maturity (+5–8 yrs), Rejected Application (+6–12 months).'
        ],
        bfsiApplication: 'Never calculate 5-year PMLA retention from Account Opening Date—an account open for 20 years must keep KYC active plus 5 years AFTER closure.',
        table: {
          title: 'BFSI Retention Trigger vs Retention Period Schedule',
          columns: ['Record Category', 'Retention Trigger', 'Retention Period', 'Legal Basis'],
          rows: [
            ['Savings Account KYC & Transactions', 'Date of Account Closure / Termination', '5 Years post-closure', 'PMLA Sec 12 & RBI KYC Master Direction'],
            ['Corporate Tax & Accounting Ledgers', 'End of relevant Assessment/Financial Year', '8 Years', 'Income Tax Act / Companies Act'],
            ['Abandoned / Rejected Loan Lead', 'Date of Rejection / Inactivity', '90–180 Days (policy max)', 'DPDP Sec 8(7) Purpose Completion'],
            ['Access & Processing Security Logs', 'Log Creation Timestamp', 'Min 1 Year (DPDP) / 180d (CERT-In)', 'DPDP Rule 6(e) & Rule 8(3) / CERT-In'],
            ['7th Schedule Inactive Platform User', 'Last User Interaction / Exercise of Right', '3 Years (+48h pre-erasure notice)', 'DPDP Rule 8 & Seventh Schedule']
          ]
        }
      },
      {
        id: 'm3-u5',
        code: 'Unit 3.5',
        title: 'Active Storage vs Archival vs Immutable Backups',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(5), 8(7)'],
        summary: 'Active systems serve daily operations; Archival storage holds statutory records (e.g., closed-account PMLA files) locked away from marketing/analytics access; Backups preserve point-in-time disaster recovery snapshots.',
        keyPoints: [
          'Moving closed-account data to a WORM/restricted archive removes it from frontline view and cross-sell engines while honouring PMLA.',
          'Backups are not processed for business use—deleting a single row inside daily immutable tapes is technically impractical, so backups expire via scheduled rotation.',
          'Critical rule: If a backup is restored after an outage, erased Data Principal records MUST be re-purged using a Suppression/Erasure Tombstone Ledger.'
        ],
        bfsiApplication: 'A customer who erased marketing preferences 2 months ago must NOT suddenly receive promotional SMS after a Core CRM disaster recovery restore.',
        roleNotes: {
          frontline: 'Understand why closed-account details vanish from active branch teller screens.',
          it: 'Maintain an append-only Erasure Tombstone Registry checked automatically during every DR backup restore.',
          leadership: 'Approve tiered backup rotation ceilings (e.g., 30–90 days) aligned with business continuity.'
        }
      },
      {
        id: 'm3-u6',
        code: 'Unit 3.6',
        title: 'Logical Deletion vs Physical Destruction & Cryptographic Erasure',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(7)', 'NIST SP 800-88'],
        summary: 'Setting `is_deleted = true` in SQL only hides UI visibility—true erasure requires irreversible removal via Purge/Overwrite, Cryptographic Shredding (destroying encryption keys), or Physical Cross-Cut Shredding/Degaussing.',
        keyPoints: [
          'Soft Delete (`is_deleted = true`): Acceptable only during short cooling-off/reconciliation queues—NOT compliant final erasure.',
          'Hard Delete & Vacuum: Removes row/index pointers across primary DB and replicas.',
          'Cryptographic Erasure: Destroying tenant/record KMS keys renders encrypted cloud blobs permanently unreadable.'
        ],
        bfsiApplication: 'Decommissioned branch servers, leased MFPs (copier hard drives), and physical KYC boxes require certified NIST 800-88 / cross-cut destruction certificates.',
        roleNotes: {
          frontline: 'Dispose of customer printouts exclusively in locked cross-cut shredder bins, never open office trash.',
          it: 'Separate soft-delete UI flags from automated nightly hard-purge and key-destruction jobs.',
          leadership: 'Mandate vendor Certificate of Destruction (CoD) audits for retired hardware and paper archives.'
        }
      },
      {
        id: 'm3-u7',
        code: 'Unit 3.7',
        title: 'Right to Erasure (Section 12(3)) Mechanics & Triage',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 12(3)', 'DPDP Rules Rule 14'],
        summary: 'A Data Principal may request erasure unless retention is necessary for the specified purpose or compliance with any law in force. Every request follows intake verification, statutory hold screening, multi-system cascade, and response closure.',
        keyPoints: [
          'Identity Verification: Prevent fraudulent third-party erasure attacks via authenticated channels.',
          'Statutory Triage: Distinguish active obligations (open loan, open claim, PMLA 5-yr clock) from erasable data (promotional leads, app telemetry, completed feedback).',
          'Written Communication: Explain clearly what was erased and what must be legally retained under statute.'
        ],
        bfsiApplication: 'Most BFSI erasure requests result in "Partial Erasure" rather than total wipeout—requiring disciplined system separation.',
        roleNotes: {
          frontline: 'Verify customer identity via approved KYC before logging an erasure ticket.',
          it: 'Expose system-by-system erasure connectors covering CRM, DWH, dialers, email tools, and document stores.',
          leadership: 'Track erasure SLA adherence and partial-erasure legal explanations.'
        }
      },
      {
        id: 'm3-u8',
        code: 'Unit 3.8',
        title: 'Erasure Reconciliation & the Reconciliation Register',
        durationMinutes: 40,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(7), 12(3)'],
        summary: 'Customer data never lives in one database—it replicates across Core Banking, LOS, Insurance Policy Admin, Payment Wallet, CRM, Data Lake, Call Recordings, and Vendors. Erasure Reconciliation verifies all downstream systems match.',
        keyPoints: [
          'Maintain an Erasure Reconciliation Register recording Request ID, Systems Queried, Action Taken (Erased / Retained-PMLA / Legal Hold / Partial), Processor Confirmation, and Timestamp.',
          'Avoid storing full deleted PII inside the Reconciliation Register—store only a one-way cryptographic hash or internal Ticket ID for proof.',
          'Zero silent orphan copies: verify SFTP exports, branch email attachments, and analytics sandboxes.'
        ],
        bfsiApplication: 'If Core Banking deletes a marketing lead but the outbound voice-bot vendor still calls the customer, reconciliation failed.',
        roleNotes: {
          frontline: 'Never retain manual offline customer lists after system erasure tickets close.',
          it: 'Automate two-phase commit / acknowledgement receipts across internal microservices and vendor APIs.',
          leadership: 'Review quarterly Reconciliation Register exception reports.'
        }
      },
      {
        id: 'm3-u9',
        code: 'Unit 3.9',
        title: 'Legal Holds, Litigation & Chain of Custody',
        durationMinutes: 35,
        status: 'in-force',
        statutoryCitations: ['Civil/Criminal Procedure Codes', 'Bharatiya Sakshya Adhiniyam 2023', 'DPDP Sec 17(1)(c)'],
        summary: 'When fraud investigation, RBI Ombudsman complaint, DRT recovery suit, or regulatory inquiry begins, Legal Counsel issues a Legal Hold that immediately freezes auto-purge schedules.',
        keyPoints: [
          'Destroying records subject to active litigation or regulatory probe constitutes spoliation of evidence.',
          'Legal Hold overrides automated retention expiry and customer erasure requests strictly for affected records.',
          'Maintain Chain of Custody logs (who collected, hashed, locked, and accessed preserved records) until Legal formally releases the hold.'
        ],
        bfsiApplication: 'A defaulting borrower demanding erasure under Sec 12 while DRT recovery litigation is active must be rejected under Legal Hold with statutory citation.',
        roleNotes: {
          frontline: 'Escalate any threat of Ombudsman/court dispute immediately so records aren’t purged.',
          it: 'Support granular record-level `legal_hold` flags that block automated deletion pipelines.',
          leadership: 'Require dual Legal + Compliance sign-off before releasing any enterprise Legal Hold.'
        }
      },
      {
        id: 'm3-u10',
        code: 'Unit 3.10',
        title: 'Third-Party Vendor Deletion & Exit Reconciliation',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(1), 8(2), 8(7)'],
        summary: 'Data Processors—DSAs, credit scoring APIs, cloud backups, SMS aggregators, and collection agencies—must erase data on instruction or contract termination and submit signed Certificates of Destruction.',
        keyPoints: [
          'Include explicit deletion SLAs (e.g., 7–15 days post-request, 30 days on contract exit) in Data Processing Agreements.',
          'Verify sub-processors (fourth parties) also purge replicated data.',
          'Revoke all API tokens, VPN keys, and SFTP credentials before final vendor sign-off.'
        ],
        bfsiApplication: 'An offboarded recovery agency still holding borrower phone numbers and loan statements poses extreme reputational and ₹250 Cr security liability.',
        roleNotes: {
          frontline: 'Route all customer-facing agency handovers solely through logged enterprise portals.',
          it: 'Run post-exit API key revocation checks and verify S3/blob storage de-provisioning.',
          leadership: 'Withhold final vendor invoice settlement until Certificate of Destruction is verified.'
        }
      },
      {
        id: 'm3-u11',
        code: 'Unit 3.11',
        title: 'Backup Restoration Reapplication & Suppress Lists',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(7), 12(3)'],
        summary: 'Disaster Recovery (DR) drills or ransomware recovery restore snapshots containing customers who subsequently exercised erasure. Without automated post-restore replay, deleted data resurrects quietly.',
        keyPoints: [
          'Maintain a minimal, hashed Erasure Replay Queue covering the maximum backup retention window (e.g., 90 days).',
          'Before bringing a restored production database online, automatically replay every Erasure Replay command against restored tables.',
          'Verify DR runbooks test erasure reapplication during annual BCP drills.'
        ],
        bfsiApplication: 'BCP recovery tests pass only when restored environments prove deleted customers stay deleted.',
        roleNotes: {
          frontline: 'Report any unexpected reappearance of closed/suppressed customer profiles immediately.',
          it: 'Embed `apply_erasure_tombstones.sh` as a mandatory step in DR failover checklists.',
          leadership: 'Audit BCP/DR test reports for erasure persistence validation.'
        }
      },
      {
        id: 'm3-u12',
        code: 'Unit 3.12',
        title: 'Module 3 Operational Readiness & 12-Point Sign-Off',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(7), 12(3)', 'Rule 6(e), Rule 8'],
        summary: 'Consolidates lifecycle inventory, classification, retention schedule mapping, legal hold tooling, and vendor exit governance into a 12-item verification standard ahead of May 2027.',
        keyPoints: [
          'Aligns core BFSI data stores with both immediate PMLA/RBI/CERT-In rules and upcoming DPDP Rule 8.',
          'Verifies automated log retention reaches the 1-year Rule 6(e) / Rule 8(3) threshold.',
          'Establishes quarterly reconciliation audits across business, IT, and third parties.'
        ],
        bfsiApplication: 'Use the interactive 12-item Module 3 Completion Checklist to benchmark branch, IT, and vendor readiness.',
        roleNotes: {
          frontline: 'Complete desk-level clean-desk and paper-shredding verification.',
          it: 'Validate automated purge scripts, 1-year log retention, and DR replay.',
          leadership: 'Sign off enterprise Retention Schedule bridging PMLA, Tax, RBI, IRDAI, SEBI, and DPDP.'
        }
      }
    ],
    caseStudies: [
      {
        id: 'm3-cs1',
        title: 'Multi-Product Customer Partial Erasure Request',
        sector: 'Universal Bank',
        scenario: 'A customer has: (1) an active home loan under DRT legal hold, (2) a savings account closed 2 years ago, (3) an inactive digital wallet untouched for 4 years, and (4) promotional SMS preferences. They file a full DPDP erasure request.',
        legalIssue: 'Cannot apply blanket deletion or blanket refusal—each product follows different statutory rules.',
        expectedApproach: 'Freeze home loan records under Legal Hold; retain closed savings KYC in restricted archive for remaining 3 years of 5-yr PMLA period; erase dormant wallet profile (subject to RBI PPI closure rules) and immediately purge all promotional marketing lists & reconcile across vendors.',
        keyCitation: 'PMLA Sec 12 · DPDP Sec 8(7), 12(3), 17(1)(c)',
        statusNote: 'may-2027'
      },
      {
        id: 'm3-cs2',
        title: 'DR Failover Resurrecting Erased Leads',
        sector: 'Life Insurance',
        scenario: 'Following a storage corruption incident, an insurer restores a 14-day-old CRM backup. The next morning, 1,200 prospects who had opted out and requested erasure over the prior two weeks receive automated renewal/upsell WhatsApp messages.',
        legalIssue: 'Failure of Backup Restoration Reapplication and Erasure Reconciliation.',
        expectedApproach: 'Implement an immutable hashed Erasure Replay Ledger applied automatically to every restored backup before outbound marketing queues reconnect.',
        keyCitation: 'DPDP Sec 6(4), 8(7), 12(3)',
        statusNote: 'may-2027'
      },
      {
        id: 'm3-cs3',
        title: 'Unreconciled DSA Desktop Spreadsheets',
        sector: 'Auto & Personal Loans',
        scenario: 'A Direct Selling Agent’s relationship manager keeps 18,000 rejected loan applicants’ PAN, salary slips, and bank statements on a personal laptop 2 years after the bank moved on.',
        legalIssue: 'Violation of Purpose Completion erasure (Sec 8(7)), Data Minimisation, and Third-Party Exit Reconciliation.',
        expectedApproach: 'Prohibit local DSA downloads via VDI/zero-download portals, enforce 90-day auto-purge on rejected leads, and require periodic DSA destruction attestations.',
        keyCitation: 'DPDP Sec 8(1), 8(5), 8(7)',
        statusNote: 'may-2027'
      }
    ],
    checklist: [
      { id: 'm3-chk-1', label: '7-Stage Data Inventory Mapped', detail: 'Every BFSI personal data repository documented from collection through destruction.' },
      { id: 'm3-chk-2', label: '4-Tier Classification Applied', detail: 'Public, Internal, Confidential, and Restricted tags enforced across databases and DMS.' },
      { id: 'm3-chk-3', label: 'Pseudonymisation vs Anonymisation Verified', detail: 'Analytics teams prevented from treating reversible tokenised IDs as exempt non-personal data.' },
      { id: 'm3-chk-4', label: 'Retention Triggers Defined', detail: 'Clocks tied to account closure, loan settlement, or claim closure—not onboarding date.' },
      { id: 'm3-chk-5', label: 'PMLA / Tax / Sectoral Schedules Harmonised', detail: '5-year PMLA, 8-year Tax, and DPDP 1-year security log rules reconciled.' },
      { id: 'm3-chk-6', label: 'Active vs Restricted Archive Segregated', detail: 'Closed-account statutory records isolated from branch screens and marketing tools.' },
      { id: 'm3-chk-7', label: 'Hard Purge Replaces Soft Delete', detail: 'Automated purge/cryptographic shredders clear `is_deleted` queues reliably.' },
      { id: 'm3-chk-8', label: 'Right to Erasure Partial Triage Ready', detail: 'Intake workflow separates statutory-hold products from immediately erasable marketing/telemetry.' },
      { id: 'm3-chk-9', label: 'Erasure Reconciliation Register Live', detail: 'Hashed proof logs confirm multi-system and third-party deletion closure.' },
      { id: 'm3-chk-10', label: 'Legal Hold Lock Controls Tested', detail: 'Legal/Ombudsman hold flags instantly pause automated retention purge pipelines.' },
      { id: 'm3-chk-11', label: 'Vendor Offboarding Destruction Certificates', detail: 'Contracts require CoD and API token revocation on vendor exit.' },
      { id: 'm3-chk-12', label: 'DR Backup Restore Replay Scripted', detail: 'Tombstone ledger re-deletes erased records automatically during disaster recovery.' }
    ]
  }
];
