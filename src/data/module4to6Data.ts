import { CourseModule } from '../types/course';

export const MODULES_4_TO_6: CourseModule[] = [
  {
    id: 4,
    slug: 'childrens-data-vulnerable-customers',
    title: "Children's Data & Vulnerable Customers",
    shortTitle: 'Children & Vulnerable Users',
    subtitle: 'Section 9 & Rules 10–12 verifiable parental/guardian consent, ban on behavioural tracking & targeted ads, elderly & digital-literacy safeguards, and sector playbooks.',
    durationLabel: '240 min',
    unitCountLabel: '8 structured units',
    pdfAssetPath: '/assets/aistudio/Module_4_f9c07cb7.pdf',
    pdfFileName: 'Module_4_f9c07cb7.pdf',
    commencementSummary: 'DPDP Act Sec 9 and DPDP Rules 10, 11 & 12 (Fourth Schedule) commence May 2027 (₹200 Cr penalty cap). RBI Senior Citizen / Accessibility and IRDAI/RPwD duties apply independently.',
    primaryStatutes: [
      'DPDP Act Sec 2(f) & Sec 9(1)–(4)',
      'DPDP Rules Rule 10 (Parental Consent)',
      'DPDP Rules Rule 11 (Lawful Guardian)',
      'DPDP Rules Rule 12 & Fourth Schedule',
      'Rights of Persons with Disabilities Act 2016',
      'RBI Master Circular on Customer Service'
    ],
    learningObjectives: [
      'Apply India’s strict statutory age threshold: any individual under 18 years is a Child (Sec 2(f)).',
      'Operationalise Verifiable Parental Consent (Rule 10) and Lawful Guardian Verification for persons with disabilities (Rule 11).',
      'Enforce the absolute statutory prohibition on detrimental processing, tracking, behavioural monitoring, and targeted advertising toward children (Sec 9(2)–(3)), subject only to Rule 12 Fourth Schedule exemptions.',
      'Protect vulnerable customers (elderly, limited digital literacy, persons with disabilities) against OTP fraud, coercive consent, and caregiver overreach across EdTech, Healthcare, Banking, and Gaming.'
    ],
    units: [
      {
        id: 'm4-u1',
        code: 'Unit 4.1',
        title: 'Statutory Definition of Child (<18 Years) & Penalties',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 2(f)', 'DPDP Act Sec 9', 'Schedule (₹200 Cr)'],
        summary: 'Unlike US COPPA (<13) or GDPR (13–16), DPDP Section 2(f) strictly defines a "child" as ANY individual who has not completed 18 years of age—requiring parental consent even for 16–17-year-old college applicants, teen debit card users, and student borrowers.',
        keyPoints: [
          'Non-compliance with Section 9 triggers administrative penalties up to ₹200 Crore per contravention.',
          'Includes minors named as bank minor-account holders, education loan co-applicants, insurance minor nominees/lives assured, and teen EdTech/gaming users.',
          'Self-declared "Click yes if you are over 18" checkboxes fail statutory due diligence.'
        ],
        bfsiApplication: 'Minor savings accounts, student demat/scholarship products, and juvenile life policies must block unverified self-onboarding for anyone under 18.',
        roleNotes: {
          frontline: 'Verify date-of-birth documents before treating any teen applicant as an adult signatory.',
          it: 'Configure age-gate workflows triggered at DOB < 18 years across onboarding APIs.',
          leadership: 'Recognise India’s strict <18 threshold eliminates reliance on generic US/EU 13+ age policies.'
        }
      },
      {
        id: 'm4-u2',
        code: 'Unit 4.2',
        title: 'Verifiable Parental Consent (Rule 10 Mechanics)',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 9(1)', 'DPDP Rules Rule 10'],
        summary: 'Under Section 9(1) and Rule 10, Data Fiduciaries must obtain verifiable consent of a parent before processing a child’s data—observing appropriate technical and organisational measures to ensure the consenting individual is an identifiable adult parent.',
        keyPoints: [
          'Method 1: Use reliable identity and age details already held by the Data Fiduciary (e.g., an existing KYC-verified bank customer adding their minor child’s account).',
          'Method 2: Voluntarily provided identity/age details or a virtual token mapped via government-authorised entities/Digital Locker service providers (e.g., DigiLocker age token).',
          'Fiduciaries must not excessively harvest parental Aadhaar/PAN permanently solely to prove age verification—verify via token and store proof metadata minimally.'
        ],
        bfsiApplication: 'A retail bank can smoothly verify parental authority when an existing Full-KYC parent opens a Linked Minor Savings Account, or via DigiLocker token for new-to-bank families.',
        table: {
          title: 'Rule 10 Parental Age & Identity Verification Pathways',
          columns: ['Verification Pathway', 'How It Works', 'Privacy-Preserving Best Practice'],
          rows: [
            ['Existing Fiduciary KYC Record', 'Parent already KYC-verified in core banking/insurance DB', 'Link verified CIF/Policy ID + timestamped parental consent'],
            ['DigiLocker / Authorised Virtual Token', 'Parent authenticates via DigiLocker / regulated ID provider issuing verified age token', 'Validate token without storing raw parent ID scans indefinitely'],
            ['Voluntary Official ID Submission', 'Parent provides official age/ID proof for verification', 'Mask sensitive ID numbers and purge raw image once verified if not required by PMLA']
          ]
        }
      },
      {
        id: 'm4-u3',
        code: 'Unit 4.3',
        title: 'Lawful Guardian Verification for Persons with Disabilities (Rule 11)',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 2(j), 9(1)', 'DPDP Rules Rule 11', 'RPwD Act 2016', 'National Trust Act 1999'],
        summary: 'A Data Principal also includes a lawful guardian acting on behalf of a person with a disability who cannot make legally binding decisions independently. Rule 11 requires verifying that the guardian is validly appointed by a court, designated authority, or local-level committee under applicable Indian law.',
        keyPoints: [
          'Crucial Distinction: A family member, nurse, or informal caregiver is NOT automatically a "lawful guardian" under Rule 11.',
          'Fiduciaries must check valid guardianship certificates issued under the Rights of Persons with Disabilities Act, National Trust Act, or Mental Healthcare/court orders.',
          'Where a person with a visual, hearing, or physical disability retains full legal capacity, they consent in their own right—accessible formats (screen readers, audio, braille/large print) are mandatory, never forced guardianship.'
        ],
        bfsiApplication: 'Never let a relative verbally waive consent or alter nominee details for an adult disabled customer without verified court/statutory guardianship papers—and never force guardianship on a cognitively capable visually impaired customer.',
        roleNotes: {
          frontline: 'Provide accessible voice/large-print notice readouts for capable customers with disabilities; verify formal guardianship certificates before accepting third-party instructions.',
          it: 'Ensure WCAG 2.1 AA screen-reader compatibility across all consent notices and withdrawal buttons.',
          leadership: 'Train branch staff on the legal line between informal caregivers and Rule 11 lawful guardians.'
        }
      },
      {
        id: 'm4-u4',
        code: 'Unit 4.4',
        title: 'Absolute Bans: Detrimental Effects, Tracking & Targeted Ads',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 9(2), 9(3)', 'DPDP Rules Rule 12 & Fourth Schedule'],
        summary: 'Even WITH verifiable parental consent, Section 9 imposes two strict prohibitions: (1) No processing likely to cause any detrimental effect on the well-being of a child (Sec 9(2)), and (2) No tracking, behavioural monitoring, or targeted advertising directed at children (Sec 9(3)).',
        keyPoints: [
          'Prohibited examples: Teen loot-box addiction profiling, biometric mood/webcam attention monitoring in EdTech, retargeting minors with buy-now-pay-later ads, or sharing student lists with external credit brokers.',
          'Rule 12 & Fourth Schedule allow narrowly tailored exemptions ONLY for specified clinical/mental-health establishments, allied healthcare professionals, educational institutions (strictly for educational tracking & child safety), crèches/daycare, and transport safety tracking.',
          'Exemptions NEVER allow commercial ad profiling or monetisation of children’s data.'
        ],
        bfsiApplication: 'A bank offering a "Teen Banking App" must turn off ad SDKs, third-party analytics pixels, gamified spending nudges, and behavioural credit profiling for all accounts flagged `age < 18`.',
        roleNotes: {
          frontline: 'Never pitch speculative loans, credit cards, or market-linked upsells to minors or student visitors.',
          it: 'Enforce strict `is_minor` feature flags disabling third-party ad trackers, session replay, and cross-app SDKs.',
          leadership: 'Audit all EdTech, teen-fintech, and youth savings products against Rule 12 strict boundaries.'
        }
      },
      {
        id: 'm4-u5',
        code: 'Unit 4.5',
        title: 'Online Risks to Minors & Vulnerable Users',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(5), 9(2)', 'IT Act Cyber Safety'],
        summary: 'Children and digitally inexperienced customers face amplified risks online: synthetic identity theft ("clean credit profiles"), cyberbullying from leaked peer/school portals, online grooming via open teen chats, and permanent commercial profiling.',
        keyPoints: [
          'Identity Theft: Stolen minor Aadhaar/DOB details can be abused years before credit monitoring notices.',
          'Webcam & Keystroke Overreach: Continuous proctoring biometrics risk leakage and psychological harm.',
          'Algorithmic Manipulation: Predatory micro-transaction loops in youth apps damage financial well-being.'
        ],
        bfsiApplication: 'Protect minor beneficiary registries, student scholarship portals, and junior banking apps with Restricted-tier security and zero public directory exposure.',
        roleNotes: {
          frontline: 'Educate parents opening junior accounts against sharing app PINs or minor KYC photos on public chats.',
          it: 'Strip EXIF location data from uploaded school/student photos and disable unmoderated peer messaging.',
          leadership: 'Evaluate child psychological and financial safety inside Product DPIAs.'
        }
      },
      {
        id: 'm4-u6',
        code: 'Unit 4.6',
        title: 'Vulnerable Customer Safeguards: Elderly, Digital Literacy & Accessibility',
        durationMinutes: 30,
        status: 'independent-law',
        statutoryCitations: ['DPDP Sec 5, 6', 'RBI Customer Service & Senior Citizen Directives'],
        summary: 'Beyond statutory children, BFSI serves elderly pensioners, first-time digital banking adopters, rural/vernacular customers, and individuals facing medical distress—who are primary targets of OTP social engineering, APK malware, and pressured consent.',
        keyPoints: [
          'Elderly & Limited Digital Literacy: Long legalese screens and small fonts lead to blind tapping; fraudsters exploit remote screen-sharing apps.',
          'Coercive Branch/Hospital Consent: Never condition emergency insurance claim cashless desks or pension life-certificates on unrelated marketing waivers.',
          'Vernacular Notice Clarity: 8th Schedule language notices (Rule 3) empower comprehension for non-English customers.'
        ],
        bfsiApplication: 'Implement cooling-off limits for high-value first-time elderly transfers, plain-language vernacular audio/visual notices, and doorstep banking verification protocols.',
        roleNotes: {
          frontline: 'Explain notice terms verbally in the customer’s local language; never ask customers to read out OTPs to branch helpers.',
          it: 'Provide high-contrast, large-font UI toggles, audio notice playback, and screen-share fraud warnings.',
          leadership: 'Embed vulnerable customer fairness KPIs into branch audit checklists and complaint reviews.'
        }
      },
      {
        id: 'm4-u7',
        code: 'Unit 4.7',
        title: 'Cross-Sector Operational Guides: EdTech, Healthcare, Banking & Gaming',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Sec 9', 'Rule 10–12 & Fourth Schedule'],
        summary: 'Operational rules differ sharply by sector context—even when serving the exact same 14-year-old student or minor patient.',
        keyPoints: [
          'Education / EdTech: Classroom attendance & academic safety tracking allowed strictly within Fourth Schedule school limits; commercial EdTech selling test scores to coaching advertisers is banned.',
          'Healthcare: Clinical diagnosis & hospital emergency care protected for minors; pharmacy/diagnostic lab apps cannot retarget minor medical history for wellness ads.',
          'Banking (Minors): Parent/guardian verifiable KYC required; zero behavioural credit scoring or ad trackers on teen wallets.',
          'Online Gaming: Strict age-gating, verifiable parental consent, zero targeted ads, zero spend-manipulation profiling.'
        ],
        bfsiApplication: 'BFSI partnerships with EdTech fee-financing lenders or hospital EMI portals must inherit the strictest applicable child-protection rules.',
        table: {
          title: 'Sector-Specific Minor & Vulnerable Safeguards',
          columns: ['Sector', 'Permitted Core Processing', 'Prohibited Practices (Sec 9)'],
          rows: [
            ['Banking & FinTech', 'Minor savings account with verified parent KYC; fraud alerts', 'Targeted loan/card ads, ad-tech SDK tracking in teen apps'],
            ['Healthcare & Health Ins.', 'Diagnosis, TPA claims, Rule 12 clinical monitoring', 'Sharing ailment profiles with ad brokers or wellness marketers'],
            ['Education / EdTech', 'Academic progress, Rule 12 safety/bus tracking by schools', 'Webcam emotion profiling, selling student data to coaching ads'],
            ['Online Gaming', 'Age-gated play with verified parental consent & spend caps', 'Loot-box behavioural profiling, targeted ads to <18 players']
          ]
        }
      },
      {
        id: 'm4-u8',
        code: 'Unit 4.8',
        title: 'Integrated Scenario Analysis: ABC Learning & Youth Banking',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 6, 8, 9', 'DPDP Rules Rule 10–12'],
        summary: 'Applies every Module 4 rule end-to-end using the ABC Learning EdTech platform & bank fee-financing integration scenario.',
        keyPoints: [
          'ABC Learning collects student voice recordings, webcam focus logs, and parents’ bank details while running third-party behavioural ad SDKs and selling "high-performer leads" to scholarship lenders.',
          'Violations identified: Missing Rule 10 parental verification, Sec 9(2) detrimental webcam surveillance, Sec 9(3) behavioural tracking & targeted ads, and illegal lead monetisation.',
          'Remediation: Disable ad SDKs immediately, shift to DigiLocker/verified parent consent, restrict student metrics strictly to educational safety, and audit partner banks.'
        ],
        bfsiApplication: 'Banks sponsoring school fee portals or co-branded EdTech cards must audit EdTech partners for Rule 10/Sec 9 violations before onboarding.',
        roleNotes: {
          frontline: 'Flag suspicious student/minor lead lists offered by unlicensed coaching or EdTech promoters.',
          it: 'Block SDK data exfiltration on youth portals via Content Security Policy and mobile binary audits.',
          leadership: 'Require zero-tracking certifications in every youth-adjacent co-branding partnership.'
        }
      }
    ],
    caseStudies: [
      {
        id: 'm4-cs1',
        title: 'ABC Learning Platform & Behavioural Ad Monetisation',
        sector: 'EdTech & Partner Fee-Lending',
        scenario: 'ABC Learning offers free tablet coding courses to 11–16 year olds, captures continuous webcam attention scores, embeds third-party ad-network trackers, and exports high-scoring student profiles to a partner NBFC for education-loan pitches.',
        legalIssue: 'Multiple Section 9 breaches: no verifiable parental consent (Sec 9(1)/Rule 10), detrimental biometric surveillance (Sec 9(2)), prohibited behavioural tracking/targeted advertising (Sec 9(3)), and unlawful NBFC lead sharing.',
        expectedApproach: 'Strip ad-network SDKs and webcam emotion tracking; implement Rule 10 DigiLocker/parent verification; sever student-lead monetisation; and mandate NBFC partner compliance audits.',
        keyCitation: 'DPDP Sec 9(1)–(3) · Rules 10 & 12 · Up to ₹200 Cr',
        statusNote: 'may-2027'
      },
      {
        id: 'm4-cs2',
        title: 'Caregiver vs Lawful Guardian in Pension Withdrawal',
        sector: 'Retail Banking / Senior Care',
        scenario: 'An elderly customer recovering from a stroke sends her son-in-law with an unsigned note and her debit card to update her mobile number and authorise third-party wealth alerts.',
        legalIssue: 'An informal family caregiver lacks Rule 11 lawful guardian authority; altering mobile numbers bypasses OTP fraud controls.',
        expectedApproach: 'Decline informal third-party changes; verify whether the customer can consent directly via accessible doorstep banking, OR require formal court/statutory guardianship proof under Rule 11 before acting on behalf of a person with legal incapacity.',
        keyCitation: 'DPDP Rule 11 · RPwD Act 2016 · RBI Senior Citizen Guidelines',
        statusNote: 'may-2027'
      },
      {
        id: 'm4-cs3',
        title: 'Teen Wallet App "Recommended Deals" Feed',
        sector: 'Digital Banking / FinTech',
        scenario: 'A bank launches a youth UPI wallet for ages 13–17 linked to parent accounts. The app logs merchant categories to show personalised lifestyle coupons and pushes gaming recharge offers.',
        legalIssue: 'Even with parental account linkage, Section 9(3) strictly bars behavioural monitoring and targeted advertising directed at children.',
        expectedApproach: 'Disable all personalised profiling, coupon targeting, and merchant behavioural analytics for minor accounts (`age < 18`), keeping only static parental spend controls and fraud monitoring.',
        keyCitation: 'DPDP Sec 9(3) · Rule 10',
        statusNote: 'may-2027'
      }
    ]
  },
  {
    id: 5,
    slug: 'third-party-risk-cross-border-security-safeguards',
    title: 'Third-Party Risk, Cross-Border Transfer & Security Safeguards',
    shortTitle: 'TPRM & Security Safeguards',
    subtitle: 'Data Processor accountability (Sec 8), 4-pillar Vendor Due Diligence, 10-clause DPA, Rule 6 minimum safeguards, 6-step breach response, CERT-In/ISO/NIST, and Cloud/AI risks.',
    durationLabel: '360 min',
    unitCountLabel: '10 structured units',
    pdfAssetPath: '/assets/aistudio/Module_5_4780aee7.pdf',
    pdfFileName: 'Module_5_4780aee7.pdf',
    commencementSummary: 'Rule 6 safeguards (₹250 Cr cap) & Rule 7 breach notices (₹200 Cr cap) commence May 2027; CERT-In 6-hr reporting, RBI IT Outsourcing, SEBI CSCRF, and IRDAI Cyber rules are enforceable right now.',
    primaryStatutes: [
      'DPDP Act Sec 8(1)–(6) & Sec 16',
      'DPDP Rules Rule 6 (Security Safeguards)',
      'DPDP Rules Rule 7 (Breach Notification)',
      'CERT-In Directions 2022 (6-hr & 180d)',
      'RBI IT Outsourcing 2023 & SEBI CSCRF 2024',
      'ISO 27001 / ISO 27701 / NIST CSF / SOC 2'
    ],
    learningObjectives: [
      'Enforce Data Fiduciary liability over Data Processors via 4-pillar Vendor Due Diligence, High/Medium/Low tiering, and a 10-clause Data Processing Agreement.',
      'Manage cross-border transfers under Section 16 alongside sectoral localisation mandates (RBI Payment Data, SEBI CSCRF, IRDAI).',
      'Implement all Rule 6 minimum reasonable security safeguards (encryption/masking/tokenisation, access controls, 1-year log retention, backups, vendor security clauses).',
      'Execute the 6-step Breach Response Plan harmonising CERT-In (6 hours), RBI/SEBI/IRDAI, and DPDP Rule 7 (without delay + 72 hours), while mitigating Cloud, Shadow AI, and Supply Chain risks.'
    ],
    units: [
      {
        id: 'm5-u1',
        code: 'Unit 5.1',
        title: 'Fiduciary vs Processor Liability (Section 8(1)–(2))',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(1), 8(2)'],
        summary: 'Data Fiduciaries cannot outsource legal accountability. Under Section 8(1), a bank or insurer remains fully responsible for DPDP compliance even when a Data Processor causes a breach or unlawful processing—and Section 8(2) mandates a valid contract before processor engagement.',
        keyPoints: [
          'DPDP regulates Data Processors indirectly through Fiduciary contracts and direct Fiduciary liability.',
          'Fourth-party sub-processors (e.g., an LMS vendor hosting inside a secondary cloud) require prior written Fiduciary approval.',
          'Independent sectoral mandates (RBI Outsourcing Directions) similarly bar delegating regulatory risk.'
        ],
        bfsiApplication: 'If a KYC agency or SMS vendor leaks customer PANs, the Data Protection Board fines the hiring bank/insurer—up to ₹250 Crore under Sec 8(5).',
        roleNotes: {
          frontline: 'Never share customer data with unapproved external agencies or freelance local printers.',
          it: 'Maintain a real-time Sub-processor & API Dependency Registry mapped to every customer flow.',
          leadership: 'Enforce strict vendor offboarding rights and uncapped/material DPDP indemnity clauses.'
        }
      },
      {
        id: 'm5-u2',
        code: 'Unit 5.2',
        title: 'Four-Pillar Vendor Due Diligence & Risk Tiering',
        durationMinutes: 35,
        status: 'independent-law',
        statutoryCitations: ['RBI IT Outsourcing Directions 2023', 'DPDP Sec 8(2), 8(5)'],
        summary: 'Before sharing a single record, TPRM evaluates vendors across four pillars—Security Posture, Privacy Governance, Legal & Contractual Readiness, and Operational/BCP Resilience—and assigns High, Medium, or Low risk tiers.',
        keyPoints: [
          'High Risk (Tier 1): Cloud core banking hosts, Video-KYC vendors, TPAs, payment processors handling large Restricted datasets → require ISO 27001/SOC 2 Type II + annual pen-test + onsite audit.',
          'Medium Risk (Tier 2): CRM/ticketing tools, HR payroll SaaS → require annual questionnaire, DPA, MFA/encryption proof.',
          'Low Risk (Tier 3): Facilities/non-PII SaaS → standard NDA and zero customer data access.'
        ],
        bfsiApplication: 'No procurement purchase order (PO) should close until TPRM assigns a risk tier and CISO/DPO sign off controls.',
        table: {
          title: 'Four-Pillar Vendor Risk Tiering Matrix',
          columns: ['Risk Tier', 'BFSI Vendor Examples', 'Minimum Evidence Required', 'Review Cadence'],
          rows: [
            ['High Risk', 'Core cloud, V-KYC provider, TPA, collection agency', 'ISO 27001 + SOC 2 Type II, VAPT report, onsite/deep audit, cyber insurance', 'Annual + continuous monitoring'],
            ['Medium Risk', 'CRM analytics, email/SMS gateway, survey SaaS', 'Security questionnaire, MFA/TLS/encryption validation, full DPA', 'Every 18–24 months'],
            ['Low Risk', 'Stationery, office logistics (non-PII)', 'Non-PII attestation & physical NDA', 'At renewal']
          ]
        }
      },
      {
        id: 'm5-u3',
        code: 'Unit 5.3',
        title: 'The 10-Clause Data Processing Agreement (DPA) Framework',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(2)', 'DPDP Rules Rule 6(f)'],
        summary: 'Rule 6(f) explicitly requires incorporating appropriate technical and organisational provisions inside Data Processor contracts. A robust BFSI DPA contains ten non-negotiable clauses.',
        keyPoints: [
          '1) Subject matter, duration & processing instructions; 2) Confidentiality obligations; 3) Rule 6 Technical & Organisational safeguards; 4) Sub-processor approval & flow-down; 5) Assistance with Data Principal rights (access/erasure);',
          '6) Rapid Breach Notification SLA (e.g., 2–4 hours so Fiduciary meets CERT-In 6-hr clock); 7) Audit & inspection rights; 8) Cross-border restrictions; 9) Exit deletion & Certificate of Destruction; 10) Liability & regulatory cooperation.'
        ],
        bfsiApplication: 'Negotiating a 2-hour vendor breach SLA is mathematically required—waiting 24 hours makes the bank breach CERT-In’s mandatory 6-hour window.',
        roleNotes: {
          frontline: 'Engage only procurement-approved vendors carrying signed DPAs.',
          it: 'Verify vendor SLAs align with real telemetry alerts and log export formats.',
          leadership: 'Adopt standard 10-clause DPA addenda across all legacy BFSI vendor master contracts before May 2027.'
        }
      },
      {
        id: 'm5-u4',
        code: 'Unit 5.4',
        title: 'Cross-Border Data Transfers (Section 16) & Sectoral Localisation',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 16', 'RBI Payment Localisation 2018', 'GDPR / PDPA / US'],
        summary: 'Section 16 permits cross-border personal data transfers globally EXCEPT to countries notified as restricted ("negative list") by the Central Government—WHILE explicitly preserving stricter Indian sectoral localisation laws.',
        keyPoints: [
          'Even if DPDP Section 16 allows transfers to Country X, RBI’s 2018 Payment System Data Storage directive still forbids storing Indian payment transaction logs outside India.',
          'International contrast: GDPR uses Adequacy + SCCs; Singapore PDPA uses Comparable Protection Standard; US uses sectoral federal/state laws (CCPA/GLBA).',
          'Rule 13(4) (Module 6) adds targeted localisation restrictions specifically for Significant Data Fiduciaries.'
        ],
        bfsiApplication: 'Every cross-border architecture decision must pass a 2-gate test: (Gate 1) Does RBI/SEBI/IRDAI permit offshore storage? (Gate 2) Is the destination free of DPDP Sec 16 / Rule 13(4) restrictions?',
        roleNotes: {
          frontline: 'Never upload Indian customer exports into personal foreign-hosted drives.',
          it: 'Pin cloud storage regions (`ap-south-1` Mumbai / `ap-south-2` Hyderabad) via infrastructure-as-code guardrails.',
          leadership: 'Monitor MeitY Section 16 restricted-country notifications alongside RBI/IRDAI circulars.'
        }
      },
      {
        id: 'm5-u5',
        code: 'Unit 5.5',
        title: 'CIA Triad & Technical/Organisational Controls',
        durationMinutes: 40,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(5)', 'DPDP Rules Rule 6'],
        summary: 'Security protects Confidentiality (preventing unauthorised disclosure), Integrity (preventing unauthorised tampering), and Availability (ensuring resilient customer access).',
        keyPoints: [
          'Cryptographic Controls: Encryption at rest (AES-256) and in transit (TLS 1.3), Obfuscation, Data Masking (UI/DWH), and Tokenisation (PCI-DSS / Aadhaar Vault).',
          'Identity & Access: RBAC (role-based), ABAC (attribute/context-based), MFA for all staff/remote access, PAM (Privileged Access Management) with session recording.',
          'Least Privilege & Segregation of Duties (SoD): No single developer or teller holds both write/approve and audit-log deletion powers.'
        ],
        bfsiApplication: 'Zero Trust identity and PAM session recording prevent insider abuse of Core Banking DBAs and privileged cloud consoles.',
        roleNotes: {
          frontline: 'Lock workstation screens immediately on stepping away; never share hardware tokens or MFA approvals.',
          it: 'Enforce MFA, PAM just-in-time elevation, and automated secret rotation across CI/CD.',
          leadership: 'Fund annual Red Team exercises and continuous Zero Trust architecture upgrades.'
        }
      },
      {
        id: 'm5-u6',
        code: 'Unit 5.6',
        title: 'DPDP Rules 2025 – Rule 6 Minimum Security Safeguards',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Rules Rule 6(a)–(g)', 'DPDP Act Sec 8(5)'],
        summary: 'Scheduled for May 2027 (₹250 Cr penalty tier), Rule 6 codifies seven baseline technical and organisational safeguards every Data Fiduciary must implement.',
        keyPoints: [
          '(a) Appropriate data security measures including encryption, obfuscation, masking, or virtual tokens;',
          '(b) Appropriate measures to control access to computer resources;',
          '(c) Visibility on accessing of personal data through appropriate logs, monitoring, and review for unauthorised access;',
          '(d) Reasonable measures for continued processing upon confidentiality/integrity/availability compromise (data backups);',
          '(e) Retention of logs and personal data for at least 1 year (unless longer law applies) to enable detection, investigation, and remediation;',
          '(f) Appropriate contractual safeguards in Data Processor agreements; (g) Appropriate technical and organisational measures to ensure effective observance.'
        ],
        bfsiApplication: 'Notice Rule 6(e): CERT-In requires 180-day log retention today, but DPDP Rule 6 extends security/access log retention to 1 full year (365 days) for May 2027.',
        table: {
          title: 'DPDP Rule 6 Minimum Safeguards Checklist',
          columns: ['Rule Clause', 'Mandated Control', 'BFSI Implementation Standard'],
          rows: [
            ['Rule 6(a)', 'Encryption, masking, obfuscation, tokens', 'AES-256 rest, TLS 1.3 transit, Aadhaar/card tokenisation, masked CRM fields'],
            ['Rule 6(b)', 'Computer resource access control', 'SSO + MFA, RBAC/ABAC, Least Privilege, PAM for DBAs'],
            ['Rule 6(c)', 'Access visibility & monitoring', 'Central SIEM ingestion, anomaly alerts, privileged session logs'],
            ['Rule 6(d)', 'Backups for continuity', 'Immutable 3-2-1 air-gapped backups & regular DR testing'],
            ['Rule 6(e)', '1-Year log retention', 'Expand SIEM archive from 180d (CERT-In) to ≥365d immutable retention'],
            ['Rule 6(f)–(g)', 'Processor contracts & governance', 'Signed 10-clause DPA + periodic technical compliance testing']
          ]
        }
      },
      {
        id: 'm5-u7',
        code: 'Unit 5.7',
        title: 'Six-Step Breach Response & Notification Harmonisation',
        durationMinutes: 40,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8(6)', 'DPDP Rules Rule 7', 'CERT-In 2022', 'RBI / SEBI / IRDAI'],
        summary: 'A personal data breach includes any unauthorised processing or accidental disclosure, acquisition, sharing, alteration, destruction, or loss of access compromising confidentiality, integrity, or availability.',
        keyPoints: [
          '6-Step Playbook: (1) Detection & Triage → (2) Containment & Evidence Preservation → (3) Forensic Investigation & Impact Assessment → (4) Multi-Regulator Notification → (5) Data Principal Intimation & Mitigation Support → (6) Post-Incident Remediation & Root-Cause Update.',
          'CERT-In (Active Now): 6 hours from noticing/being notified of cyber incident.',
          'DPDP Rule 7 (May 2027): To Data Protection Board "without delay" (initial facts) + detailed update within 72 hours; AND to every affected Data Principal in clear, plain language explaining breach nature, likely consequences, mitigation steps, and contact point.'
        ],
        bfsiApplication: 'Never wait for full forensic completion before notifying CERT-In at Hour 6—send initial statutory intimation immediately and update within 72 hours under DPDP Rule 7.',
        roleNotes: {
          frontline: 'Report misdirected customer emails, lost USBs, or suspicious logins to SOC within 15 minutes.',
          it: 'Automate forensic snapshot isolation and maintain pre-approved CERT-In / DPB / customer notice templates.',
          leadership: 'Run quarterly tabletop cyber-privacy breach drills integrating Legal, CISO, DPO, and PR.'
        }
      },
      {
        id: 'm5-u8',
        code: 'Unit 5.8',
        title: 'Multi-Framework Mapping: RBI/SEBI/IRDAI + ISO/NIST/SOC 2',
        durationMinutes: 35,
        status: 'independent-law',
        statutoryCitations: ['ISO/IEC 27001:2022', 'ISO/IEC 27701 (PIMS)', 'NIST CSF 2.0', 'SOC 2 Type II'],
        summary: 'Global standards provide auditable blueprints satisfying overlapping Indian regulations: ISO 27001 handles ISMS, ISO 27701 extends it into a Privacy Information Management System (PIMS), NIST CSF structures Identify-Protect-Detect-Respond-Recover-Govern, and SOC 2 certifies third-party SaaS.',
        keyPoints: [
          'Mapping controls once across ISO 27701 + RBI/SEBI/IRDAI + DPDP avoids duplicate vendor questionnaires.',
          'ISO 27701 explicitly aligns Fiduciary vs Processor governance controls.'
        ],
        bfsiApplication: 'Adopt an integrated control library so one SIEM rule or annual VAPT satisfies RBI, SEBI CSCRF, IRDAI, and DPDP Rule 6 simultaneously.',
        roleNotes: {
          frontline: 'Follow unified enterprise IT/InfoSec policies rather than fragmented spreadsheets.',
          it: 'Cross-tag SIEM/GRS controls to ISO 27001 Annex A, SEBI CSCRF, and DPDP Rule 6.',
          leadership: 'Use ISO 27701 certification as an objective benchmark of vendor and internal maturity.'
        }
      },
      {
        id: 'm5-u9',
        code: 'Unit 5.9',
        title: 'Seven-Stage Third-Party Risk Management (TPRM) Lifecycle',
        durationMinutes: 35,
        status: 'independent-law',
        statutoryCitations: ['RBI IT Outsourcing 2023', 'DPDP Sec 8(1)–(2)'],
        summary: 'Effective TPRM governs vendors continuously across seven stages: (1) Business Need & Inherent Risk Scoping → (2) Due Diligence → (3) Contractual DPA & SLA Execution → (4) Secure Onboarding & Least-Privilege Provisioning → (5) Ongoing Performance/Security Monitoring → (6) Incident Escalation & Change Management → (7) Exit, Deletion Certification & Access Revocation.',
        keyPoints: [
          'Continuous monitoring catches expired SOC 2 certificates or newly compromised vendor APIs before breaches hit.',
          'Never skip Stage 7 offboarding verification when switching marketing agencies or collection partners.'
        ],
        bfsiApplication: 'Integrate TPRM checks directly into Vendor Portal onboarding and invoice release gates.',
        roleNotes: {
          frontline: 'Do not hand customer portfolios to newly contracted agents until onboarding compliance clears.',
          it: 'Enforce short-lived OAuth tokens and IP allowlisting for every third-party integration.',
          leadership: 'Present quarterly Tier-1 Vendor Concentration & Risk Heatmaps to the Board Risk Committee.'
        }
      },
      {
        id: 'm5-u10',
        code: 'Unit 5.10',
        title: 'Emerging Risks: Cloud Misconfiguration, Public AI Tools & Supply Chain',
        durationMinutes: 35,
        status: 'independent-law',
        statutoryCitations: ['DPDP Sec 8(5)', 'CERT-In / SEBI / RBI'],
        summary: 'Modern breaches stem predominantly from three fast-moving risks: (1) Cloud Misconfigurations (open S3 buckets, unauthenticated APIs, exposed dev snapshots), (2) Public Generative AI / Shadow IT (staff pasting borrower KYC, claims, or balance sheets into unapproved public AI chatbots), and (3) Software Supply Chain / SDK attacks.',
        keyPoints: [
          'Public AI Prompts: Pasting customer names, PANs, or medical histories into consumer GenAI tools equals unauthorised third-party disclosure + cross-border transfer.',
          'Cloud Posture (CSPM): Enforce automated deny-public-bucket policies and zero unmasked production data in UAT/Dev environments.',
          'Supply Chain: Maintain Software Bill of Materials (SBOM) and audit third-party mobile SDKs inside banking apps.'
        ],
        bfsiApplication: 'Deploy enterprise DLP rules blocking PII uploads to public AI portals alongside strict UAT synthetic data masking.',
        roleNotes: {
          frontline: 'NEVER paste customer names, account numbers, claim notes, or emails into public AI writing tools.',
          it: 'Enforce CSPM guardrails, block production PII in Dev/QA, and scan mobile apps for rogue SDKs.',
          leadership: 'Issue clear enterprise GenAI Acceptable Use policies and approve secure private AI workspaces.'
        }
      }
    ],
    caseStudies: [
      {
        id: 'm5-cs1',
        title: 'Public S3 Bucket & Dev/UAT Production Data Copy',
        sector: 'FinTech Payments',
        scenario: 'A developer copies 450,000 unmasked customer KYC records from production into a staging AWS S3 bucket for performance testing and accidentally sets public-read ACL.',
        legalIssue: 'Violation of Rule 6(a)/(b) security safeguards (potential ₹250 Cr penalty post-May 2027), immediate RBI/CERT-In breach reporting, and failure of data minimisation.',
        expectedApproach: 'Immediately lock bucket, preserve forensic access logs, notify CERT-In within 6 hours (and RBI), prepare Rule 7 Board/Principal breach notice, and enforce synthetic data + CSPM block-public-access policies.',
        keyCitation: 'CERT-In 2022 · RBI Cyber Security · DPDP Rule 6 & 7',
        statusNote: 'independent-law'
      },
      {
        id: 'm5-cs2',
        title: 'Claims Adjuster Pasting Medical Records into Public AI',
        sector: 'Health Insurance',
        scenario: 'To draft claim rejection summaries faster, an insurance adjuster pastes patient diagnostic PDFs (full name, policy ID, hospital pathology notes) into an unapproved free public LLM web tool.',
        legalIssue: 'Unauthorised disclosure to an uncontracted foreign vendor (violating IRDAI 2023, DPDP Sec 8(2)/(5), and Sec 16 governance).',
        expectedApproach: 'Block consumer AI domains via enterprise DLP, run incident triage with the vendor for data purge, discipline/retrain staff, and provision an approved zero-retention enterprise workspace.',
        keyCitation: 'IRDAI Guidelines 2023 · DPDP Sec 8(2), 8(5)',
        statusNote: 'independent-law'
      },
      {
        id: 'm5-cs3',
        title: 'KYC Sub-Processor Breach Without Escalation SLA',
        sector: 'Private Bank',
        scenario: 'A Video-KYC vendor silently outsources optical OCR extraction to an unapproved sub-processor, which suffers ransomware at 02:00 AM. The KYC vendor notifies the bank 5 days later.',
        legalIssue: 'Bank misses CERT-In 6-hour window and fails Rule 6(f) sub-processor governance.',
        expectedApproach: 'Mandate prior written approval for sub-processors in the 10-clause DPA, enforce a 2-hour cyber incident notice SLA, and terminate unapproved fourth-party data flows.',
        keyCitation: 'CERT-In 2022 · RBI Outsourcing · DPDP Sec 8(1)–(2), Rule 6(f)',
        statusNote: 'independent-law'
      }
    ]
  },
  {
    id: 6,
    slug: 'significant-data-fiduciary-sdf-governance',
    title: 'Significant Data Fiduciary (SDF) Governance',
    shortTitle: 'SDF Governance',
    subtitle: 'Section 10 & Rule 13 obligations (DPO in India, 12-month DPIA & Independent Audit cycles, Algorithmic Due Diligence, Targeted Localisation, and Board Oversight).',
    durationLabel: '330 min',
    unitCountLabel: '10 sessions',
    pdfAssetPath: '/assets/aistudio/Module_6_5f7d16c3.pdf',
    pdfFileName: 'Module_6_5f7d16c3.pdf',
    commencementSummary: 'Section 10 & Rule 13 SDF obligations commence May 2027 (₹150 Cr penalty cap) upon Central Government notification. Scheduled banks, major insurers, and leading brokers should prepare as likely SDFs now.',
    primaryStatutes: [
      'DPDP Act Sec 10(1)–(2)',
      'DPDP Rules Rule 13(1)–(4)',
      'DPDP Act Sec 33 Schedule (₹150 Cr SDF cap)',
      'RBI / SEBI / IRDAI Board Governance Mandates'
    ],
    learningObjectives: [
      'Analyse the six statutory criteria under Section 10(1) used by the Central Government to notify Significant Data Fiduciaries (volume, sensitivity, rights impact, sovereignty, electoral democracy, public order).',
      'Distinguish standard Data Fiduciary obligations from elevated SDF duties (DPO, DPIA, Independent Audit, Algorithmic Due Diligence, Rule 13(4) Transfer Restrictions).',
      'Design an India-based Data Protection Officer (DPO) role accountable to the Board, alongside the 12-month DPIA and Independent Audit reporting cadence under Rule 13(1)–(2).',
      'Implement Rule 13(3) Algorithmic Due Diligence for credit/underwriting AI, Rule 13(4) committee-based cross-border controls, and a 10-KPI Board Governance Dashboard.'
    ],
    units: [
      {
        id: 'm6-s1',
        code: 'Session 6.1',
        title: 'Who Becomes an SDF? Section 10(1) Assessment Factors',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 10(1)'],
        summary: 'The Central Government designates any Data Fiduciary or class of Data Fiduciaries as a Significant Data Fiduciary (SDF) by notification based on six statutory risk factors—not merely revenue size.',
        keyPoints: [
          'Six Sec 10(1) Factors: (1) Volume & sensitivity of personal data processed; (2) Risk to rights of Data Principals; (3) Potential impact on sovereignty & integrity of India; (4) Risk to electoral democracy; (5) Security of the State; (6) Public order.',
          'While MeitY’s formal SDF list awaits Section 10 commencement (May 2027), large commercial banks, systemic NBFCs, life/health insurers, depositories, and major payment platforms exhibit high volume + sensitivity profiles.',
          'Every high-volume BFSI institution should build "SDF-ready" governance regardless of immediate notification.'
        ],
        bfsiApplication: 'Banking and insurance scale (tens of millions of PAN, Aadhaar, financial, and health claim records) squarely triggers Factors 1 and 2.',
        roleNotes: {
          frontline: 'Understand heightened governance applies across high-sensitivity financial institutions.',
          it: 'Inventory high-volume PII repositories and sensitivity flows feeding DPIA registers.',
          leadership: 'Pre-assess enterprise exposure against the 6 Section 10(1) factors and budget SDF readiness before May 2027.'
        }
      },
      {
        id: 'm6-s2',
        code: 'Session 6.2',
        title: 'Data Fiduciary vs Significant Data Fiduciary Duties',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8 vs Sec 10', 'DPDP Rules Rule 13'],
        summary: 'SDFs must comply with ALL ordinary Data Fiduciary duties (Sec 8, Rules 3–12) PLUS elevated governance layers under Section 10 and Rule 13—carrying up to ₹150 Crore additional penalty exposure.',
        keyPoints: [
          'Ordinary Fiduciary: Grievance officer contact details, Sec 5 notice, Rule 6 security, Rule 7 breach notices, Sec 9 children duties.',
          'SDF Additions: Dedicated DPO based in India accountable to Board, periodic (every 12 months) DPIA + Independent Audit with Board submission of significant observations, Rule 13(3) algorithmic risk verification, and Rule 13(4) targeted cross-border restrictions.'
        ],
        bfsiApplication: 'Standard "Grievance Officer" naming does not satisfy Section 10—an SDF needs an India-resident, Board-accountable DPO and formal 12-month independent audits.',
        table: {
          title: 'Data Fiduciary vs Significant Data Fiduciary (SDF)',
          columns: ['Governance Element', 'All Data Fiduciaries (Sec 8)', 'Significant Data Fiduciary Additions (Sec 10 & Rule 13)'],
          rows: [
            ['Privacy Leadership', 'Publish contact details of Grievance Officer/DPO', 'Mandatory DPO based in India, represents SDF, accountable to Board'],
            ['Risk Assessment', 'General security risk assessments', 'Formal DPIA every 12 months + furnishing observations to DPB (Rule 13(2))'],
            ['Audit', 'Internal/contractual compliance reviews', 'Independent Data Auditor review every 12 months'],
            ['AI / Algorithms', 'General fairness & notice compliance', 'Mandatory Algorithmic Software Due Diligence (Rule 13(3))'],
            ['Cross-Border Transfers', 'Subject to Sec 16 negative list & sectoral rules', 'Additional committee-recommended data localisation restrictions (Rule 13(4))'],
            ['Penalty Tier', 'Up to ₹50 Cr – ₹250 Cr', 'Additional up to ₹150 Cr specifically for Sec 10 / Rule 13 breaches']
          ]
        }
      },
      {
        id: 'm6-s3',
        code: 'Session 6.3',
        title: 'Role-Based Shared Governance Model',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 10'],
        summary: 'SDF compliance cannot rest solely on the DPO—it operates across three interlocking operational layers: Frontline Operations, IT & Cybersecurity, and Executive Leadership & Board.',
        keyPoints: [
          'Frontline Operations: Branch tellers, RM teams, claims desks, and contact centres execute Rule 3 notices, verify Rule 10/11 authority, catch dark patterns, and escalate grievances within 15 minutes.',
          'IT & Cybersecurity: Architects encryption/tokenisation, Consent APIs, 1-year SIEM logs, Erasure Reconciliation, CSPM, and Algorithmic testing.',
          'Leadership & Board: Approves DPO charter, DPIA risk appetite, vendor/AI policies, and reviews 10-KPI compliance dashboard quarterly.'
        ],
        bfsiApplication: 'Clear RACI boundaries eliminate finger-pointing between Compliance, CISO, Product, and Branch Operations.',
        roleNotes: {
          frontline: 'Act as the first line of defence at customer onboarding, branch counters, and grievance desks.',
          it: 'Provide verifiable technical evidence—logs, encryption keys, reconciliation receipts—for the 12-month Independent Audit.',
          leadership: 'Empower the DPO with direct Board access and unobstructed budget authority.'
        }
      },
      {
        id: 'm6-s4',
        code: 'Session 6.4',
        title: 'Data Protection Officer (DPO) Mandate & Independence',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 10(2)(a)'],
        summary: 'Under Section 10(2)(a), every SDF must appoint a Data Protection Officer who: (1) is an individual based in India, (2) represents the SDF under the Act, (3) is directly responsible to the Board of Directors or governing body, and (4) acts as point of contact for grievance redressal.',
        keyPoints: [
          'Unlike GDPR where a DPO cannot be conflicted or be dismissed lightly, Indian DPDP emphasizes residency in India and direct Board accountability.',
          'DPO cannot be a part-time junior clerical title—must enjoy direct Board Audit/Risk Committee reporting and independence from revenue/marketing pressure.',
          'Contact details of the DPO must be prominently published for Data Principals and the Data Protection Board.'
        ],
        bfsiApplication: 'Avoid making the Head of Growth Marketing or Chief Sales Officer the DPO—conflict between aggressive cross-sell targets and consent governance creates regulatory red flags.',
        roleNotes: {
          frontline: 'Publish and provide accurate DPO grievance escalation contacts whenever a complaint remains unresolved.',
          it: 'Give DPO read/audit visibility into Consent Vaults, DPIA workflows, and SIEM breach dashboards.',
          leadership: 'Confirm DPO is based in India with a documented Board-approved Charter.'
        }
      },
      {
        id: 'm6-s5',
        code: 'Session 6.5',
        title: 'The 12-Month DPIA & Independent Audit Cycle (Rule 13(1)–(2))',
        durationMinutes: 40,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 10(2)(b)–(c)', 'DPDP Rules Rule 13(1)–(2)'],
        summary: 'Rule 13(1) requires every SDF to undertake a Data Protection Impact Assessment (DPIA) and an Independent Audit once in every period of 12 months from the date of SDF notification—and Rule 13(2) requires furnishing a report containing significant observations of both to the Data Protection Board.',
        keyPoints: [
          'DPIA Elements (Sec 10(2)(c)): Description of rights of Data Principals, purpose of processing, assessment and management of risks to Principal rights.',
          'DPIA vs Security Risk Assessment: A Security Risk Assessment protects company confidentiality/availability from hackers; a DPIA evaluates risks TO INDIVIDUAL RIGHTS (bias, over-collection, opacity, irreversible profiling, lock-in).',
          'Independent Audit: Must be executed by an objective qualified auditor (internal audit independent of ops or external specialist) checking actual code, logs, contracts, and notices—not just paper policies.'
        ],
        bfsiApplication: 'Launch new digital lending apps or biometric authentication only AFTER completing an incremental DPIA, rolled up annually into the Rule 13(2) submission.',
        table: {
          title: 'DPIA vs Security Risk Assessment',
          columns: ['Dimension', 'Data Protection Impact Assessment (DPIA)', 'Information Security Risk Assessment'],
          rows: [
            ['Primary Lens', 'Impact on Data Principal rights, fairness & autonomy', 'Impact on enterprise CIA triad & infrastructure'],
            ['Core Triggers', 'Annual 12-month SDF mandate + high-risk AI/minor/new processing', 'New IT assets, network changes, annual VAPT/ISO cycle'],
            ['Key Risks Evaluated', 'Dark patterns, biased credit rejection, excessive profiling, inability to erase', 'Unpatched CVEs, ransomware, weak passwords, DDoS'],
            ['Regulatory Reporting', 'Significant observations furnished to DPB under Rule 13(2)', 'Internal CISO / Board IT Committee & CERT-In/SEBI VAPT']
          ]
        }
      },
      {
        id: 'm6-s6',
        code: 'Session 6.6',
        title: 'Algorithmic Software Due Diligence (Rule 13(3))',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Rules Rule 13(3)'],
        summary: 'One of India’s most distinctive privacy provisions: Rule 13(3) requires every SDF to verify that algorithmic software used for hosting, display, uploading, modification, publishing, transmission, storage, updating, or sharing of personal data is NOT likely to pose a risk to the rights of Data Principals.',
        keyPoints: [
          'Covers AI/ML credit underwriting models, automated fraud-freezing engines, insurance dynamic pricing algorithms, and robo-advisory/recommendation systems.',
          'Required Controls: Pre-deployment bias & disparate-impact testing, training-data provenance checks (no scraped unconsented PII), explainability documentation, human-in-the-loop appeal paths, and drift monitoring.',
          'Applies to both in-house ML models and third-party fintech scoring SaaS.'
        ],
        bfsiApplication: 'If an automated loan-rejection model penalises applicants based on surrogate demographic signals or uses unverified social-media scraping, the SDF violates Rule 13(3).',
        roleNotes: {
          frontline: 'Know how customers can request human review when an automated KYC or credit rule rejects them.',
          it: 'Run model bias audits, maintain feature-lineage cards, and strip unauthorised attributes from training sets.',
          leadership: 'Require Model Risk + DPO dual sign-off before promoting AI scoring models to production.'
        }
      },
      {
        id: 'm6-s7',
        code: 'Session 6.7',
        title: 'SDF Targeted Cross-Border Restrictions (Rule 13(4) vs Sec 16)',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 16', 'DPDP Rules Rule 13(4)'],
        summary: 'Whereas Section 16 applies general negative-list country restrictions to all Data Fiduciaries, Rule 13(4) empowers the Central Government (based on an expert committee’s recommendations) to restrict SDFs from transferring specified categories of personal data or traffic data outside India.',
        keyPoints: [
          'Rule 13(4) operates selectively by data category + SDF designation—creating targeted localisation obligations atop RBI payment localisation.',
          'Cross-border cloud replication, offshore DR sites, and global parent consolidation reports must support selective India-only pinning if Rule 13(4) triggers.',
          'Keep strict separation between general Sec 16 country blacklists and Rule 13(4) SDF data-category restrictions.'
        ],
        bfsiApplication: 'Ensure global Core/CRM cloud architectures can isolate specified Indian datasets (e.g., KYC/telemetry) inside Mumbai/Hyderabad regions cleanly.',
        roleNotes: {
          frontline: 'Do not use overseas support desks if restricted under product SOPs.',
          it: 'Tag cross-border API egress flows and support regional data residency toggles.',
          leadership: 'Build architectural optionality in global SaaS contracts so India-only data pinning can activate rapidly.'
        }
      },
      {
        id: 'm6-s8',
        code: 'Session 6.8',
        title: 'Board Oversight & the 10-Indicator Compliance Dashboard',
        durationMinutes: 35,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 10(2)(a)', 'DPDP Rules Rule 13(2)'],
        summary: 'Because the DPO reports directly to the Board of Directors, Boards need concise, objective metrics rather than legal essays—structured around ten quarterly Governance KPIs.',
        keyPoints: [
          '10 Board KPIs: (1) Consent & Notice Coverage %; (2) Sec 5(2) Legacy Re-Notice Progress; (3) Grievance & DSAR SLA Compliance %; (4) Erasure Reconciliation Completion %; (5) Open Critical Security / Rule 6 Gaps;',
          '(6) 1-Year Log Retention Health; (7) High-Risk Vendor DPA & Audit Coverage %; (8) Children/Rule 10–12 Compliance Exceptions; (9) DPIA & Independent Audit Action Closure %; (10) Algorithmic Rule 13(3) Reviews Completed.'
        ],
        bfsiApplication: 'Present these 10 indicators quarterly to the Board Risk / Privacy Committee with RAG status and named remediation owners.',
        roleNotes: {
          frontline: 'Feed accurate grievance and branch consent exception metrics upward without suppression.',
          it: 'Automate live telemetry feeds from SIEM, CMP, and TPRM portals into the Board reporting pack.',
          leadership: 'Tie executive remediation accountability directly to overdue High/Critical audit findings.'
        }
      },
      {
        id: 'm6-s9',
        code: 'Session 6.9',
        title: 'Integrated Case Study 7 & Common SDF Failure Modes',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Act Sec 8, 9, 10', 'DPDP Rules Rule 6, 7, 13'],
        summary: 'Examines Case Study 7 (a multi-product BFSI financial conglomerate notified as an SDF) revealing how fragmented legacy silos cause compounding Rule 13 audit findings.',
        keyPoints: [
          'Failure Mode 1: Appointing a remote overseas Group CISO as DPDP DPO (fails "based in India" rule).',
          'Failure Mode 2: Treating an IT VAPT scan as a DPIA (misses Principal rights impact).',
          'Failure Mode 3: Deploying a third-party AI credit-limit reducer without Rule 13(3) due diligence.',
          'Failure Mode 4: Delaying Rule 13(2) significant audit observations beyond Board review windows.'
        ],
        bfsiApplication: 'Conglomerates spanning Banking, Insurance, and AMC subsidiaries must harmonise DPO coordination across entities rather than copying unlocalised global templates.',
        roleNotes: {
          frontline: 'Escalate systemic consent friction encountered across subsidiary cross-sell journeys.',
          it: 'Eliminate undocumented AI/analytics sandboxes outside formal DPIA scope.',
          leadership: 'Enforce strict remediation SLAs on every Rule 13(2) audit observation before DPB submission.'
        }
      },
      {
        id: 'm6-s10',
        code: 'Session 6.10',
        title: '10-Phase SDF Implementation Roadmap (Nov 2026 → May 2027+)',
        durationMinutes: 30,
        status: 'may-2027',
        statutoryCitations: ['DPDP Rules 2025 Phased Commencement'],
        summary: 'Provides a structured 10-phase roadmap taking an enterprise from Gap Assessment through DPO Charter, Notice/Consent Engineering, Rule 6 Security Uplift, Lifecycle/Erasure, TPRM, Children Safeguards, DPIA, Mock Independent Audit, and Live Board Reporting.',
        keyPoints: [
          'Phases 1–3 (Immediate Nov 2026–Jan 2027): Sec 10 exposure sizing, India DPO Charter, Data Discovery & Retention Matrix.',
          'Phases 4–7 (Feb–Apr 2027): Rule 3 Notices, Dark Pattern purge, Rule 6 1-yr logs & encryption uplift, 10-clause Vendor DPAs, Rule 10 Age Gate.',
          'Phases 8–10 (May 2027 & Ongoing): Rule 13(3) Algorithmic Audits, Mock Independent Audit, 12-month Rule 13(2) DPB reporting cadence.'
        ],
        bfsiApplication: 'Using the 6-month runway between November 2026 and May 2027 ensures calm engineering execution instead of emergency last-minute patches.',
        roleNotes: {
          frontline: 'Complete role-based training and SOP drills during Q1 2027 rollout.',
          it: 'Prioritise long-lead engineering: 1-year SIEM storage, Erasure Reconciliation APIs, and Rule 3 multilingual notices.',
          leadership: 'Track monthly steering-committee milestones toward May 2027 readiness.'
        }
      }
    ],
    caseStudies: [
      {
        id: 'm6-cs1',
        title: 'Integrated Case Study 7: Systemic Financial Group SDF Readiness',
        sector: 'Financial Conglomerate (Bank + NBFC + Insurance)',
        scenario: 'A top-5 Indian bank anticipates Section 10 SDF notification in May 2027. Currently, its Singapore-based Group Privacy Head acts as nominal DPO; its digital-lending AI model scores credit using third-party telecom/social metadata without bias testing; and annual IT audits cover only ISO 27001 infrastructure without DPIAs.',
        legalIssue: 'Violates Sec 10(2)(a) (DPO must be in India & accountable to Board), Sec 10(2)(b)-(c) & Rule 13(1)-(2) (annual DPIA + Independent Audit missing), and Rule 13(3) (algorithmic due diligence omitted)—exposing the group to ₹150 Cr SDF penalties.',
        expectedApproach: 'Appoint an India-resident Board-accountable DPO per notified SDF entity; separate DPIA rights assessment from IT VAPT; run Rule 13(3) algorithmic fairness & consent provenance checks on credit AI; build a 12-month DPIA + Independent Audit calendar with DPB observation reporting; and align Rule 13(4) regional pinning.',
        keyCitation: 'DPDP Sec 10 · Rule 13(1)–(4) · Penalty up to ₹150 Cr',
        statusNote: 'may-2027'
      },
      {
        id: 'm6-cs2',
        title: 'Unchecked AI Credit-Limit Reduction Engine',
        sector: 'Credit Cards & Consumer Lending',
        scenario: 'An SDF bank deploys a third-party SaaS model that automatically slashes card limits by 60% based on opaque geolocation and merchant-category patterns, offering no explanation or appeal route.',
        legalIssue: 'Direct breach of Rule 13(3) requirement to ensure algorithmic software poses no risk to Data Principal rights, plus DPIA and grievance redressal failures.',
        expectedApproach: 'Halt unvetted model rules; perform Rule 13(3) bias, explainability, and proportionality verification; provide transparent human-review appeal channels; and document risk mitigation inside the annual DPIA.',
        keyCitation: 'DPDP Rule 13(3) · Sec 10(2)(c)',
        statusNote: 'may-2027'
      },
      {
        id: 'm6-cs3',
        title: 'Global Cloud Reinsurer & Rule 13(4) Transfer Pinning',
        sector: 'Life & Health Reinsurance',
        scenario: 'An Indian SDF insurer auto-replicates full policyholder clinical dossiers and claims traffic telemetry to an EU/US analytics cluster.',
        legalIssue: 'Future Rule 13(4) committee restrictions may prohibit offshore transfer of specified SDF personal/traffic categories even if general Section 16 negative lists allow those countries.',
        expectedApproach: 'Re-architect data pipelines so raw clinical dossiers and sensitive traffic metadata stay pinned in Indian cloud regions, exporting only strictly anonymised actuarial aggregates when permitted by IRDAI and Rule 13(4).',
        keyCitation: 'DPDP Rule 13(4) · Sec 16 · IRDAI Guidelines',
        statusNote: 'may-2027'
      }
    ]
  }
];
