import { FlashcardQuestion, QuizQuestion } from '../types/course';

export interface QuizModulePack {
  id: string;
  moduleId: number;
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
}

export const QUIZ_PACKS: QuizModulePack[] = [
  {
    id: 'quiz-m1',
    moduleId: 1,
    title: 'Module 1 Assessment: Statutory Foundation & BFSI Overlap',
    subtitle: '10 questions covering Puttaswamy (2017), phased commencement, statutory roles, RBI/SEBI/IRDAI/CERT-In/PMLA overlap, and penalty caps.',
    questions: [
      {
        id: 'q1-1',
        moduleId: 1,
        question: 'Which landmark Supreme Court ruling affirmed the Fundamental Right to Privacy under Article 21 and laid down the proportionality test?',
        options: [
          'Shreya Singhal v. Union of India (2015)',
          'Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)',
          'Navtej Singh Johar v. Union of India (2018)',
          'Kharak Singh v. State of Uttar Pradesh (1962)'
        ],
        correctIndex: 1,
        explanation: 'A 9-judge Constitution Bench in Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) unanimously held that privacy is an intrinsic part of Article 21.',
        citation: 'Constitution Art. 21 · Puttaswamy (2017)'
      },
      {
        id: 'q1-2',
        moduleId: 1,
        question: 'As of 25 November 2026, which DPDP Rules 2025 provision is ALREADY in force following the 1-year phase-in?',
        options: [
          'Rule 13 Significant Data Fiduciary DPIA & Audit',
          'Rule 10 Verifiable Parental Consent',
          'Rule 4 Consent Manager Registration & Obligations',
          'Rule 6 Minimum Reasonable Security Safeguards'
        ],
        correctIndex: 2,
        explanation: 'Rule 4 (Consent Managers) and Section 6(9) commenced on 13–14 November 2026 (12 months after notification), whereas Rules 3 and 5–16 commence in May 2027.',
        citation: 'G.S.R. 846(E) · DPDP Rules Rule 4'
      },
      {
        id: 'q1-3',
        moduleId: 1,
        question: 'When a bank outsources KYC verification to a FinTech vendor, who bears statutory responsibility under DPDP Section 8(1) if the vendor mishandles customer data?',
        options: [
          'Only the FinTech Data Processor',
          'The Data Fiduciary (Bank), which remains responsible for compliance',
          'Only the individual customer for choosing digital KYC',
          'Nobody until an RBI Ombudsman complaint is filed'
        ],
        correctIndex: 1,
        explanation: 'Under Section 8(1), a Data Fiduciary remains responsible for complying with the Act and Rules in respect of any processing undertaken by it or on its behalf by a Data Processor.',
        citation: 'DPDP Act Sec 8(1) & 8(2)'
      },
      {
        id: 'q1-4',
        moduleId: 1,
        question: 'A former depositor closes their savings account and demands immediate deletion of all PAN/KYC records. What is the compliant BFSI response?',
        options: [
          'Delete KYC immediately because DPDP Section 12 overrides banking laws',
          'Refuse to delete anything including optional marketing profiles',
          'Retain PMLA-mandated KYC/transaction records for 5 years post-closure in restricted archive while erasing non-statutory marketing data',
          'Wait for the customer to obtain a court order before deciding'
        ],
        correctIndex: 2,
        explanation: 'Section 8(7) and Section 12(3) erasure obligations do not override retention required under law (such as PMLA 5-year post-relationship preservation), though optional marketing records should be erased.',
        citation: 'PMLA Sec 12 · DPDP Sec 8(7) & 12(3)'
      },
      {
        id: 'q1-5',
        moduleId: 1,
        question: 'Which initial cyber-incident reporting timeline is STRICTLY enforceable right now under CERT-In Directions (2022)?',
        options: [
          'Within 6 hours of noticing or being brought to notice of an incident',
          'Within 72 hours only',
          'Within 30 days via quarterly Board report',
          'Only after DPDP Phase 3 commences in May 2027'
        ],
        correctIndex: 0,
        explanation: 'CERT-In Directions (28 April 2022) mandate reporting specified cyber incidents within 6 hours and maintaining ICT logs in India for 180 days.',
        citation: 'CERT-In Directions 2022'
      },
      {
        id: 'q1-6',
        moduleId: 1,
        question: 'Under RBI Digital Lending Directions (2025), which smartphone permission is strictly PROHIBITED for a lending app?',
        options: [
          'One-time camera access for V-KYC with explicit consent',
          'Accessing borrowers’ phone contacts, call logs, and photo gallery files',
          'Displaying Key Fact Statement before disbursal',
          'Disclosing partner Lending Service Providers on website'
        ],
        correctIndex: 1,
        explanation: 'RBI Digital Lending Directions bar lending apps from accessing mobile phone resources such as file/media, contact lists, call logs, and telephony functions.',
        citation: 'RBI Digital Lending Directions 2025'
      },
      {
        id: 'q1-7',
        moduleId: 1,
        question: 'Does the DPDP Act (Section 3) cover paper KYC forms filled out at a bank branch?',
        options: [
          'Never, under any circumstances',
          'Yes, once those paper forms are scanned or digitised into banking systems',
          'Only if the customer lives outside India',
          'Only for accounts above ₹10 Lakh'
        ],
        correctIndex: 1,
        explanation: 'Section 3 applies to personal data collected in digital form OR collected in non-digital form and digitised subsequently.',
        citation: 'DPDP Act Sec 3(a)'
      },
      {
        id: 'q1-8',
        moduleId: 1,
        question: 'What is the maximum statutory penalty under the DPDP Act Schedule for failing to take reasonable security safeguards causing a personal data breach?',
        options: [
          'Up to ₹50 Crore',
          'Up to ₹150 Crore',
          'Up to ₹200 Crore',
          'Up to ₹250 Crore'
        ],
        correctIndex: 3,
        explanation: 'Failing to take reasonable security safeguards under Section 8(5) carries the highest DPDP Schedule tier: up to ₹250 Crore.',
        citation: 'DPDP Act Sec 8(5) & Schedule'
      },
      {
        id: 'q1-9',
        moduleId: 1,
        question: 'Which sectoral framework specifically governs Cybersecurity & Cyber Resilience for stockbrokers, AMCs, depositories, and RTAs?',
        options: [
          'IRDAI Info & Cyber Security Guidelines 2023',
          'SEBI CSCRF (20 August 2024)',
          'TRAI DND Regulations',
          'UIDAI Biometric Vault Circular'
        ],
        correctIndex: 1,
        explanation: 'SEBI’s Cybersecurity and Cyber Resilience Framework (CSCRF) issued in August 2024 applies to SEBI Regulated Entities.',
        citation: 'SEBI CSCRF 2024'
      },
      {
        id: 'q1-10',
        moduleId: 1,
        question: 'Under DPDP Section 14, what right protects continuity when a Data Principal passes away or becomes incapacitated?',
        options: [
          'Right to Nominate another individual to exercise DPDP rights on their behalf',
          'Right to automatic deletion of all bank loans',
          'Right to transfer PAN credentials',
          'Right to waive RBI KYC checks'
        ],
        correctIndex: 0,
        explanation: 'Section 14 empowers a Data Principal to nominate any other individual to exercise their rights under the Act in the event of death or incapacity.',
        citation: 'DPDP Act Sec 14'
      }
    ]
  },
  {
    id: 'quiz-m2',
    moduleId: 2,
    title: 'Module 2 Assessment: Lawful Processing, Notice & Consent Engineering',
    subtitle: '20 curated questions spanning Processing Principles, GDPR vs DPDP, Rule 3 Notices, Dark Patterns, and Rule 4 Consent Managers.',
    questions: [
      {
        id: 'q2-1',
        moduleId: 2,
        subtopic: 'Lawful Processing',
        question: 'How many lawful grounds for processing personal data exist under DPDP Section 4?',
        options: [
          'Six (identical to GDPR Article 6)',
          'Two: Consent (Sec 6) and Certain Legitimate Uses (Sec 7)',
          'Three: Consent, Contract, and Legitimate Business Interest',
          'Only one: Written notarised consent'
        ],
        correctIndex: 1,
        explanation: 'Unlike GDPR’s six bases, DPDP Section 4 permits processing strictly on Consent (Sec 6) or Certain Legitimate Uses (Sec 7).',
        citation: 'DPDP Act Sec 4, 6, 7'
      },
      {
        id: 'q2-2',
        moduleId: 2,
        subtopic: 'Lawful Processing',
        question: 'Can an Indian bank rely on "Legitimate Business Interest" (as under GDPR Art. 6(1)(f)) to share borrower profiles for third-party wealth cross-sell?',
        options: [
          'Yes, if an internal Legitimate Interest Assessment (LIA) is signed',
          'No—DPDP has no private Legitimate Interest ground; explicit Sec 6 Consent is required',
          'Yes, for existing savings account holders over 5 years',
          'Only if the marketing message is sent by email instead of SMS'
        ],
        correctIndex: 1,
        explanation: 'DPDP deliberately omits GDPR’s private "legitimate interest" ground. Cross-sell analytics or third-party sharing requires free, specific, informed Sec 6 consent.',
        citation: 'DPDP Act Sec 4 & 6 vs GDPR Art. 6'
      },
      {
        id: 'q2-3',
        moduleId: 2,
        subtopic: 'Lawful Processing',
        question: 'Which processing principle requires collecting only fields strictly necessary for the declared purpose?',
        options: [
          'Storage Limitation',
          'Data Minimisation',
          'Algorithmic Transparency',
          'Cross-Border Parity'
        ],
        correctIndex: 1,
        explanation: 'Data Minimisation limits collection to attributes directly necessary and proportionate to the specified lawful purpose.',
        citation: 'DPDP Act Sec 6(1)'
      },
      {
        id: 'q2-4',
        moduleId: 2,
        subtopic: 'Lawful Processing',
        question: 'Under DPDP Section 7(i), when may an employer process employee personal data without obtaining separate Sec 6 consent?',
        options: [
          'For selling employee contact lists to retail credit card agencies',
          'For purposes of employment or safeguarding the employer from loss/liability (e.g., corporate espionage prevention)',
          'For monitoring employees’ personal family social media permanently',
          'Never—Section 7 omits employment'
        ],
        correctIndex: 1,
        explanation: 'Section 7(i) recognises employment purposes and preventing corporate espionage, loss, or liability as a Certain Legitimate Use.',
        citation: 'DPDP Act Sec 7(i)'
      },
      {
        id: 'q2-5',
        moduleId: 2,
        subtopic: 'Lawful Processing',
        question: 'If a walk-in pharmacy customer voluntarily gives their mobile number solely to receive an e-receipt, what permits issuing that receipt?',
        options: [
          'Section 7(a) voluntary provision for a specified purpose (without using it for promo spam)',
          'Section 10 Significant Data Fiduciary authority',
          'Section 16 Cross-border transfer right',
          'GDPR Recital 47'
        ],
        correctIndex: 0,
        explanation: 'Section 7(a) allows processing where the Principal voluntarily provides personal data for a specified purpose and has not indicated non-consent—strictly limited to that specified purpose.',
        citation: 'DPDP Act Sec 7(a)'
      },
      {
        id: 'q2-6',
        moduleId: 2,
        subtopic: 'Privacy Notice',
        question: 'How must a DPDP Section 5 / Rule 3 Privacy Notice be presented relative to Terms & Conditions?',
        options: [
          'Buried inside Section 18 of the 35-page Terms & Conditions PDF',
          'Presented independently in clear, plain language—understandable on its own without referring to other text',
          'Sent only after the customer complains',
          'Hidden behind a hover tooltip'
        ],
        correctIndex: 1,
        explanation: 'Rule 3 requires the notice to be presented and understandable independently of any other information made available by the Fiduciary.',
        citation: 'DPDP Rules Rule 3(a)'
      },
      {
        id: 'q2-7',
        moduleId: 2,
        subtopic: 'Privacy Notice',
        question: 'Which language options must Data Fiduciaries offer for accessing a Privacy Notice under Section 5(3)?',
        options: [
          'English only across India',
          'English or any language specified in the Eighth Schedule to the Constitution (22 languages)',
          'Hindi and English only',
          'Only the bank’s headquarters state language'
        ],
        correctIndex: 1,
        explanation: 'Section 5(3) mandates giving Data Principals the option to access the notice contents in English or any of the 22 Eighth Schedule languages.',
        citation: 'DPDP Act Sec 5(3)'
      },
      {
        id: 'q2-8',
        moduleId: 2,
        subtopic: 'Privacy Notice',
        question: 'What must a compliant Rule 3 Privacy Notice itemise at minimum?',
        options: [
          'Only the bank’s CIN number and stock ticker',
          'Itemised personal data collected, specified purposes & goods/services enabled, link/method to withdraw consent, and grievance/DPB complaint mechanism',
          'Source code repositories of the consent vault',
          'Full salaries of the Board of Directors'
        ],
        correctIndex: 1,
        explanation: 'Rule 3(b) specifies clear itemisation of personal data, purposes, goods/services enabled, withdrawal link/process, rights exercise, and Board complaint contact.',
        citation: 'DPDP Rules Rule 3(b)'
      },
      {
        id: 'q2-9',
        moduleId: 2,
        subtopic: 'Privacy Notice',
        question: 'What obligation applies to personal data collected BEFORE DPDP Section 5 commences (legacy customers) under Section 5(2)?',
        options: [
          'All pre-2027 accounts are permanently exempt from notices',
          'Data Fiduciary must give a compliant Section 5 notice as soon as reasonably practicable',
          'All pre-2027 bank accounts must be frozen immediately',
          'Only accounts opened in Mumbai require retrospective notices'
        ],
        correctIndex: 1,
        explanation: 'Section 5(2) requires Fiduciaries to furnish a Sec 5 notice to pre-commencement Principals as soon as it is reasonably practicable, continuing processing unless consent is withdrawn.',
        citation: 'DPDP Act Sec 5(2)'
      },
      {
        id: 'q2-10',
        moduleId: 2,
        subtopic: 'Privacy Notice',
        question: 'Which distinction correctly contrasts a Privacy Notice from a Privacy Policy?',
        options: [
          'There is no difference; they are legally interchangeable terms',
          'A Privacy Notice is point-of-collection itemised transparency; a Privacy Policy is a broader enterprise governance document',
          'Privacy Policies replace Section 6 consent',
          'Privacy Notices apply only to employees'
        ],
        correctIndex: 1,
        explanation: 'Privacy Notices deliver transaction-specific Sec 5 / Rule 3 transparency before consent, whereas a Privacy Policy outlines institution-wide privacy practices.',
        citation: 'DPDP Act Sec 5 · Rule 3'
      },
      {
        id: 'q2-11',
        moduleId: 2,
        subtopic: 'Consent Engineering',
        question: 'In a dispute over whether valid consent was obtained, who carries the legal burden of proof under Section 6(10)?',
        options: [
          'The Data Principal (customer)',
          'The Data Fiduciary (bank/insurer)',
          'The telecom SMS carrier',
          'The local branch manager personally'
        ],
        correctIndex: 1,
        explanation: 'Section 6(10) explicitly places the burden on the Data Fiduciary to prove that proper notice was served and valid consent was given.',
        citation: 'DPDP Act Sec 6(10)'
      },
      {
        id: 'q2-12',
        moduleId: 2,
        subtopic: 'Consent Engineering',
        question: 'Which UI pattern violates BOTH Section 6(1) "unconditional/clear affirmative action" and Dark Pattern rules?',
        options: [
          'Unchecked optional toggle for third-party promotional alerts alongside mandatory KYC screen',
          'Pre-ticked checkbox sharing income details with affiliate insurers + disabled "Submit" unless checked',
          'Clear "Accept" and "Decline" buttons of equal visual prominence',
          'Language dropdown switching notice text into Tamil or Bengali'
        ],
        correctIndex: 1,
        explanation: 'Pre-selected boxes lack clear affirmative action, and tying core onboarding to unrelated marketing consent violates Sec 6(1) unconditionality.',
        citation: 'DPDP Sec 6(1) · CCPA Dark Patterns 2023'
      },
      {
        id: 'q2-13',
        moduleId: 2,
        subtopic: 'Consent Engineering',
        question: 'What statutory rule governs the UX of withdrawing consent under Section 6(4)?',
        options: [
          'Withdrawal may require notarised physical courier to headquarters',
          'Ease of withdrawing consent shall be comparable to the ease of giving consent',
          'Withdrawal can only happen once per financial year',
          'Withdrawal incurs a ₹500 administrative processing fee'
        ],
        correctIndex: 1,
        explanation: 'Section 6(4) requires that withdrawing consent be comparable in ease to giving consent—eliminating asymmetric opt-out mazes.',
        citation: 'DPDP Act Sec 6(4)'
      },
      {
        id: 'q2-14',
        moduleId: 2,
        subtopic: 'Consent Engineering',
        question: 'How does a DPDP Statutory Consent Manager (Rule 4, effective Nov 2026) differ from commercial Enterprise CMP SaaS?',
        options: [
          'They are identical; any website cookie banner qualifies as a Consent Manager',
          'A Statutory Consent Manager is an India-incorporated, DPB-registered interoperable fiduciary (min ₹2 Cr net worth) acting as a cross-fiduciary dashboard for Principals',
          'Enterprise CMP software is illegal under DPDP',
          'Statutory Consent Managers store unencrypted Aadhaar biometrics for banks'
        ],
        correctIndex: 1,
        explanation: 'Rule 4 & First Schedule define a Consent Manager as a DPB-registered Indian company (₹2 Cr min net worth) providing an interoperable, data-blind single portal across Fiduciaries.',
        citation: 'DPDP Sec 2(g), 6(7)-(9) · Rule 4 & First Schedule'
      },
      {
        id: 'q2-15',
        moduleId: 2,
        subtopic: 'Consent Engineering',
        question: 'When a customer clicks "No, keep my data private" in response to a pop-up reading "No thanks, I prefer missing great offers and staying financially behind", what dark pattern is used?',
        options: [
          'Confirmshaming',
          'Cryptographic shredding',
          'Data minimisation',
          'Rule 3 itemisation'
        ],
        correctIndex: 0,
        explanation: 'Confirmshaming uses guilt-inducing, manipulative wording on the decline option to pressure users into consenting.',
        citation: 'CCPA Dark Patterns 2023 · DPDP Sec 6(1)'
      },
      {
        id: 'q2-16',
        moduleId: 2,
        subtopic: 'Consent Engineering',
        question: 'If a customer withdraws consent for optional wealth advisory emails, what happens to the legality of emails sent BEFORE withdrawal?',
        options: [
          'All prior emails retroactively become illegal and fined ₹50 Cr',
          'Withdrawal does NOT affect the legality of processing based on consent before withdrawal (Sec 6(5))',
          'The bank must recall delivered past statements from the customer inbox',
          'The bank must close the customer’s active savings account'
        ],
        correctIndex: 1,
        explanation: 'Under Section 6(5), consequences of withdrawal are borne by the Principal, and withdrawal does not affect lawfulness of prior consented processing.',
        citation: 'DPDP Act Sec 6(5)'
      }
    ]
  },
  {
    id: 'quiz-m3',
    moduleId: 3,
    title: 'Module 3 Assessment: Lifecycle, Retention & Erasure Reconciliation',
    subtitle: '15 questions covering the 7 lifecycle stages, classification, Rule 8 schedules, archival vs backups, logical vs physical deletion, Legal Holds, and DR replay.',
    questions: [
      {
        id: 'q3-1',
        moduleId: 3,
        question: 'Which statement accurately distinguishes Pseudonymisation from true Anonymisation under DPDP?',
        options: [
          'Replacing customer names with an internal CIF ID exempts the table from DPDP completely',
          'Pseudonymised data remains Personal Data because re-identification is possible via mapping keys; only irreversible anonymisation falls outside DPDP',
          'Both pseudonymisation and anonymisation are banned under Rule 8',
          'Only encryption keys count as pseudonymisation'
        ],
        correctIndex: 1,
        explanation: 'As long as an individual remains identifiable directly or indirectly using lookup keys, pseudonymised datasets remain Personal Data under DPDP.',
        citation: 'DPDP Act Sec 2(t) & Sec 3'
      },
      {
        id: 'q3-2',
        moduleId: 3,
        question: 'How should a bank classify raw Aadhaar numbers, card CVVs, OTPs, and health claim medical diagnoses?',
        options: [
          'Public',
          'Internal',
          'Restricted (highest sensitivity tier requiring tokenisation/vaulting/MFA/masking)',
          'Disposable cache'
        ],
        correctIndex: 2,
        explanation: 'Government identifiers, authentication secrets, biometrics, and clinical health claim details sit in the Restricted tier.',
        citation: 'Module 3 Classification Matrix · Rule 6(a)'
      },
      {
        id: 'q3-3',
        moduleId: 3,
        question: 'In a BFSI Retention Schedule, what is the "Retention Trigger" for Savings Account KYC records under PMLA?',
        options: [
          'Date of initial branch inquiry',
          'Date of Account Closure / end of business relationship (starting the 5-year countdown)',
          'Date the customer downloads the mobile app',
          'Customer’s 18th birthday'
        ],
        correctIndex: 1,
        explanation: 'PMLA Section 12 requires preserving KYC and transaction records for 5 years AFTER the business relationship/account terminates.',
        citation: 'PMLA Sec 12 · DPDP Sec 8(7)'
      },
      {
        id: 'q3-4',
        moduleId: 3,
        question: 'Under DPDP Rule 8 & the Seventh Schedule, what applies to specified major e-commerce/gaming/social platforms with inactive users?',
        options: [
          'Keep data indefinitely for AI training',
          'Erase personal data after 3 years of inactivity, giving at least 48 hours prior notice to the Data Principal',
          'Delete every account after 24 hours',
          'Sell inactive user profiles to brokers'
        ],
        correctIndex: 1,
        explanation: 'Rule 8 read with the Seventh Schedule mandates 3-year inactivity erasure with a 48-hour advance intimation window for specified large platforms (while Rule 8(3) retains 1-yr logs).',
        citation: 'DPDP Rules Rule 8 & Seventh Schedule'
      },
      {
        id: 'q3-5',
        moduleId: 3,
        question: 'Why is setting `is_deleted = true` in Core CRM insufficient for compliant erasure?',
        options: [
          'SQL booleans cannot index customer IDs',
          'Soft deletion only hides records from the UI while personal data stays live in database tables, analytics replicas, and exports',
          'Hard deletion is illegal under DPDP',
          'Soft delete automatically triggers a CERT-In incident'
        ],
        correctIndex: 1,
        explanation: 'Logical soft-delete flags leave underlying PII intact. Compliant erasure requires permanent purge, cryptographic shredding, or verified physical destruction.',
        citation: 'DPDP Act Sec 8(7) & Sec 12(3)'
      },
      {
        id: 'q3-6',
        moduleId: 3,
        question: 'What is Cryptographic Erasure (Crypto-Shredding)?',
        options: [
          'Renaming a cloud bucket with a random UUID',
          'Destroying the encryption keys so encrypted personal data blobs become permanently unrecoverable',
          'Uploading backups to a public cloud',
          'Masking only the first two letters of a user’s surname'
        ],
        correctIndex: 1,
        explanation: 'Crypto-shredding irreversibly destroys cryptographic keys protecting isolated data blocks, rendering ciphertext unreadable.',
        citation: 'NIST SP 800-88 · Rule 6'
      },
      {
        id: 'q3-7',
        moduleId: 3,
        question: 'A borrower with an active home loan under DRT recovery litigation demands total data erasure under Sec 12(3). What control governs the home loan file?',
        options: [
          'Immediate hard purge within 24 hours',
          'Legal Hold freezes automated deletion and overrides customer erasure for litigation-relevant records',
          'Move records to a marketing dialer',
          'Ask the customer to delete their own banking app'
        ],
        correctIndex: 1,
        explanation: 'Active litigation, regulatory probes, or Ombudsman disputes trigger a mandatory Legal Hold freezing purge pipelines to prevent evidence spoliation.',
        citation: 'DPDP Sec 12(3), 17(1)(c) · Evidence Law'
      },
      {
        id: 'q3-8',
        moduleId: 3,
        question: 'What purpose does an Erasure Reconciliation Register serve?',
        options: [
          'Storing unencrypted copies of deleted customer PANs forever',
          'Recording hashed ticket proof that Core DB, CRM, Data Lake, Call Recordings, and Processors all executed erasure or documented statutory retention',
          'Calculating monthly DSA commissions',
          'Tracking staff lunch attendance'
        ],
        correctIndex: 1,
        explanation: 'The Reconciliation Register provides auditable multi-system completion proof (using hashed references rather than retained raw PII).',
        citation: 'DPDP Act Sec 8(7), 12(3)'
      },
      {
        id: 'q3-9',
        moduleId: 3,
        question: 'Why must disaster recovery (DR) restoration runbooks include an "Erasure Replay / Tombstone" step?',
        options: [
          'To speed up CSS rendering',
          'To prevent customers who exercised erasure after a backup snapshot from being silently resurrected when an older backup is restored',
          'To permanently corrupt immutable tapes',
          'To bypass MFA during failover'
        ],
        correctIndex: 1,
        explanation: 'Restoring an immutable backup snapshot brings back records deleted since that snapshot—reapplying the hashed erasure tombstone queue before go-live prevents unlawful resurrection.',
        citation: 'DPDP Sec 8(7), 12(3)'
      },
      {
        id: 'q3-10',
        moduleId: 3,
        question: 'Before closing out an offboarded recovery agency or SMS vendor contract, what lifecycle artefact is mandatory?',
        options: [
          'A celebratory email',
          'Signed Certificate of Destruction (CoD) confirming purge across primary & sub-processor stores plus API/SFTP credential revocation',
          'A blank NDA signed 5 years ago',
          'Customer phone survey'
        ],
        correctIndex: 1,
        explanation: 'Third-party exit reconciliation requires revoking access tokens and obtaining verifiable proof/Certificates of Destruction.',
        citation: 'DPDP Sec 8(1)–(2), 8(7)'
      },
      {
        id: 'q3-11',
        moduleId: 3,
        question: 'Under DPDP Rule 8(3) and Rule 6(e), what is the minimum retention period for access/processing logs by ALL Data Fiduciaries (scheduled May 2027)?',
        options: [
          '30 days',
          '180 days only',
          'At least 1 year (unless longer required by law)',
          '10 years mandatory for cookies'
        ],
        correctIndex: 2,
        explanation: 'DPDP Rules 2025 extend CERT-In’s 180-day baseline to a minimum 1-year log retention requirement under Rule 6(e) and Rule 8(3).',
        citation: 'DPDP Rules Rule 6(e) & Rule 8(3)'
      },
      {
        id: 'q3-12',
        moduleId: 3,
        question: 'Which approach handles a closed savings account inside a Core Bank while respecting BOTH PMLA and DPDP minimisation?',
        options: [
          'Keep closed-account KYC visible on every sales RM’s marketing dashboard for 5 years',
          'Segregate closed-account statutory KYC into a restricted WORM/Compliance Archive off-limits to frontline marketing and analytics',
          'Print paper files and mail them back to the customer',
          'Delete closed-account KYC after 7 days'
        ],
        correctIndex: 1,
        explanation: 'Archival isolation preserves statutory PMLA evidence strictly for compliance/audit queries while blocking active operational or promotional processing.',
        citation: 'PMLA Sec 12 · DPDP Sec 8(5) & 8(7)'
      }
    ]
  },
  {
    id: 'quiz-m4',
    moduleId: 4,
    title: 'Module 4 Assessment: Children & Vulnerable Customers',
    subtitle: '10 scenario questions covering Section 2(f) <18 threshold, Rule 10 parental verification, Rule 11 lawful guardians, Rule 12 exemptions, and vulnerable customer protection.',
    questions: [
      {
        id: 'q4-1',
        moduleId: 4,
        question: 'Under DPDP Act Section 2(f), who qualifies as a "child"?',
        options: [
          'Any individual under 13 years of age',
          'Any individual under 16 years of age',
          'Any individual who has not completed 18 years of age',
          'Only children enrolled in primary school (<12 years)'
        ],
        correctIndex: 2,
        explanation: 'India’s DPDP Act strictly defines a child as an individual who has not completed 18 years of age—even 16- and 17-year-old teenagers require Section 9 safeguards.',
        citation: 'DPDP Act Sec 2(f)'
      },
      {
        id: 'q4-2',
        moduleId: 4,
        question: 'A 15-year-old checks "I confirm I am over 18" on a teen prepaid card app. Does this satisfy Rule 10 Verifiable Parental Consent?',
        options: [
          'Yes, self-declaration is legally sufficient',
          'No—Data Fiduciaries must observe technical/organisational due diligence via reliable existing KYC details or authorised virtual age tokens (e.g., DigiLocker)',
          'Yes, if the card limit is below ₹10,000',
          'Yes, provided terms & conditions are in English'
        ],
        correctIndex: 1,
        explanation: 'Rule 10 mandates verifiable identity and age validation through reliable Fiduciary records or government-authorised identity/virtual token providers—not honour-system checkboxes.',
        citation: 'DPDP Act Sec 9(1) · DPDP Rules Rule 10'
      },
      {
        id: 'q4-3',
        moduleId: 4,
        question: 'Which practices are STRICTLY PROHIBITED toward children under DPDP Section 9(2) and 9(3), even if a parent signed consent?',
        options: [
          'Issuing school fee payment receipts',
          'Tracking, behavioural monitoring, targeted advertising, and processing likely to cause detrimental effects on child well-being',
          'Providing emergency hospital diagnosis',
          'Sending parent-authorised fraud alerts'
        ],
        correctIndex: 1,
        explanation: 'Section 9(2) bans detrimental processing and Section 9(3) bars tracking, behavioural monitoring, and targeted ads directed at children (narrowly exempted only under Rule 12 Fourth Schedule).',
        citation: 'DPDP Act Sec 9(2)–(3)'
      },
      {
        id: 'q4-4',
        moduleId: 4,
        question: 'A neighbour/son-in-law visits a bank branch claiming to act as "caregiver" for an elderly customer with mild mobility issues. Under Rule 11, can they sign consent as a Lawful Guardian?',
        options: [
          'Yes, any relative living in the same house qualifies automatically',
          'No—Rule 11 recognises only legally appointed guardians under court order or designated statutory authorities (e.g., RPwD Act / National Trust Act), and capable customers must consent themselves with accessible formats',
          'Yes, if they bring a handwritten note',
          'Only if the balance is under ₹50,000'
        ],
        correctIndex: 1,
        explanation: 'Informal caregivers are NOT lawful guardians under Rule 11. Capable disabled/elderly adults must consent directly via accessible tools; incapacitated adults require valid statutory guardianship certificates.',
        citation: 'DPDP Rules Rule 11 · RPwD Act 2016'
      },
      {
        id: 'q4-5',
        moduleId: 4,
        question: 'What is the maximum penalty under the DPDP Act Schedule for violating Section 9 children’s data obligations (scheduled May 2027)?',
        options: [
          'Up to ₹50 Crore',
          'Up to ₹100 Crore',
          'Up to ₹200 Crore',
          'Up to ₹10,000'
        ],
        correctIndex: 2,
        explanation: 'Non-fulfilment of additional obligations relating to children under Section 9 carries penalties up to ₹200 Crore.',
        citation: 'DPDP Act Sec 9 & Schedule'
      },
      {
        id: 'q4-6',
        moduleId: 4,
        question: 'In the ABC Learning EdTech integrated case study, why was continuous student webcam attention tracking for coaching-ad targeting unlawful?',
        options: [
          'Rule 12 allows educational tracking ONLY for core academic learning/child safety inside statutory boundaries—NEVER behavioural surveillance or third-party ad/loan profiling',
          'Only webcams above 4K resolution are regulated',
          'Because schools cannot use Wi-Fi',
          'It is lawful if hidden in Terms & Conditions'
        ],
        correctIndex: 0,
        explanation: 'Rule 12 Fourth Schedule grants strictly scoped clinical, educational, and safety exemptions—never ad monetisation or detrimental surveillance.',
        citation: 'DPDP Sec 9(2)–(3) · Rule 12 & Fourth Schedule'
      },
      {
        id: 'q4-7',
        moduleId: 4,
        question: 'How should a bank help a visually impaired adult depositor (full cognitive capacity) review a Rule 3 Privacy Notice?',
        options: [
          'Force them to appoint a Rule 11 legal guardian',
          'Provide WCAG-compliant screen-reader digital interfaces, large print, or audio notice readouts so they consent independently',
          'Deny account opening altogether',
          'Let an unrelated teller click "I agree" silently'
        ],
        correctIndex: 1,
        explanation: 'Physical or sensory disability does NOT remove legal capacity—accessible UX empowers independent informed consent without coercive guardianship.',
        citation: 'DPDP Sec 5, 6 · RPwD Act 2016'
      },
      {
        id: 'q4-8',
        moduleId: 4,
        question: 'Which practice protects digitally inexperienced senior citizens against social-engineering fraud in BFSI?',
        options: [
          'Reading long English legalese at 2x speed',
          'Vernacular plain-language consent explanations, clear OTP fraud warnings, screen-sharing app blocks, and zero marketing bundling during pension services',
          'Storing customer ATM PINs in branch notebooks',
          'Requiring seniors to install third-party coupon apps'
        ],
        correctIndex: 1,
        explanation: 'Clear vernacular notices (Sec 5(3)), screen-share malware controls, and non-coercive branch practices shield elderly customers.',
        citation: 'DPDP Sec 5(3) · RBI Senior Citizen Circulars'
      }
    ]
  },
  {
    id: 'quiz-m5',
    moduleId: 5,
    title: 'Module 5 Assessment: Third-Party Risk, Cross-Border & Security Safeguards',
    subtitle: '10 questions covering Sec 8 Processor governance, Rule 6 safeguards, 6-step breach response, CERT-In vs Rule 7, Sec 16 cross-border, and Cloud/AI risks.',
    questions: [
      {
        id: 'q5-1',
        moduleId: 5,
        question: 'Under DPDP Rule 6 (scheduled May 2027), what is the minimum period ALL Data Fiduciaries must retain security/access logs?',
        options: [
          '30 days',
          '90 days',
          '180 days maximum',
          'At least 1 year (unless another law mandates longer)'
        ],
        correctIndex: 3,
        explanation: 'Rule 6(e) mandates retaining appropriate logs and personal data for a minimum period of 1 year for detection, investigation, and remediation.',
        citation: 'DPDP Rules Rule 6(e)'
      },
      {
        id: 'q5-2',
        moduleId: 5,
        question: 'During a ransomware breach affecting customer PII, how do CERT-In (active now) and DPDP Rule 7 (May 2027) timings compare?',
        options: [
          'Wait 30 days for forensics before telling anyone',
          'Report to CERT-In within 6 hours; under DPDP Rule 7 notify DPB "without delay" + full details within 72 hours, and notify affected Principals in plain language',
          'Only notify customers via newspaper ad 6 months later',
          'CERT-In overrides and cancels DPDP notification'
        ],
        correctIndex: 1,
        explanation: 'BFSI breach playbooks harmonise CERT-In’s strict 6-hour initial report with DPDP Rule 7’s prompt/72-hour DPB filing and plain-language Data Principal notice.',
        citation: 'CERT-In 2022 · DPDP Sec 8(6) & Rule 7'
      },
      {
        id: 'q5-3',
        moduleId: 5,
        question: 'How does DPDP Section 16 regulate cross-border transfers of personal data?',
        options: [
          'Strict global whitelist requiring EU Adequacy decisions',
          'Cross-border transfers are permitted globally EXCEPT to countries notified as restricted by Central Government, while preserving stricter Indian sectoral laws (e.g., RBI payment localisation)',
          'All cross-border cloud APIs are permanently banned',
          'Only transfers to the US are permitted'
        ],
        correctIndex: 1,
        explanation: 'Section 16 uses a Central Government negative-list model while explicitly saving stricter existing laws like RBI’s 2018 Payment System Data Localisation directive.',
        citation: 'DPDP Act Sec 16(1)–(2) · RBI 2018'
      },
      {
        id: 'q5-4',
        moduleId: 5,
        question: 'Why must a BFSI Data Processing Agreement (DPA) specify a 2–4 hour vendor breach notification SLA?',
        options: [
          'To give vendors an excuse to delay',
          'Because the hiring Bank/Insurer must report cyber incidents to CERT-In within 6 hours of notice under Indian law',
          'DPDP sets a 2-hour fine per SMS',
          'Only for Low-Risk stationery vendors'
        ],
        correctIndex: 1,
        explanation: 'If a vendor waits 24 hours to alert the bank, the bank automatically breaches CERT-In’s 6-hour reporting window.',
        citation: 'CERT-In 2022 · DPDP Sec 8(2), Rule 6(f)'
      },
      {
        id: 'q5-5',
        moduleId: 5,
        question: 'A claims adjuster pastes customer medical pathology PDFs and full names into a free public generative AI chatbot to draft emails. What risk occurs?',
        options: [
          'Zero risk because the prompt window closes afterwards',
          'Unauthorised disclosure to an uncontracted third party, loss of Confidentiality, Shadow IT violation, and potential cross-border leakage',
          'Improved Rule 6 compliance',
          'Automatic pseudonymisation'
        ],
        correctIndex: 1,
        explanation: 'Pasting unmasked PII into consumer GenAI tools leaks protected data outside contracted processor controls.',
        citation: 'IRDAI 2023 · DPDP Sec 8(2) & 8(5)'
      },
      {
        id: 'q5-6',
        moduleId: 5,
        question: 'Which technical control prevents developers and support agents from seeing real Aadhaar/card numbers in analytics and UAT testing?',
        options: [
          'Copying raw production dumps into Dev S3 buckets',
          'Data Masking, Tokenisation, and Synthetic Test Data generation',
          'Sharing single admin credentials via Slack',
          'Disabling TLS certificates'
        ],
        correctIndex: 1,
        explanation: 'Rule 6(a) explicitly highlights encryption, obfuscation, masking, and virtual tokens alongside strict Dev/UAT isolation.',
        citation: 'DPDP Rules Rule 6(a)–(b)'
      },
      {
        id: 'q5-7',
        moduleId: 5,
        question: 'What distinguishes ISO/IEC 27701 from ISO/IEC 27001?',
        options: [
          'ISO 27701 extends ISO 27001 into a Privacy Information Management System (PIMS) mapping Fiduciary and Processor privacy controls',
          'ISO 27701 only regulates fire extinguishers',
          'ISO 27701 replaces Indian statutes completely',
          'There is no relationship between them'
        ],
        correctIndex: 0,
        explanation: 'ISO/IEC 27701 is a privacy extension to ISO/IEC 27001 specifically defining PIMS controls for PII Controllers (Fiduciaries) and Processors.',
        citation: 'ISO/IEC 27001 & 27701'
      },
      {
        id: 'q5-8',
        moduleId: 5,
        question: 'Which access control principle ensures no single DBA can both modify customer balances AND delete SIEM audit logs?',
        options: [
          'Segregation of Duties (SoD) + Least Privilege + PAM',
          'Open public ACLs',
          'Confirmshaming',
          'Soft deletion'
        ],
        correctIndex: 0,
        explanation: 'Segregation of Duties paired with Least Privilege and Privileged Access Management stops single-actor fraud or log tampering.',
        citation: 'DPDP Rule 6(b)–(c)'
      },
      {
        id: 'q5-9',
        moduleId: 5,
        question: 'What are the four pillars of Vendor Due Diligence prior to onboarding a High-Risk processor?',
        options: [
          'Logo design, office location, CEO age, stock price',
          'Security Posture, Privacy Governance, Legal/Contractual Readiness, and Operational/BCP Resilience',
          'Social media followers and ad spend',
          'Only pricing discount %'
        ],
        correctIndex: 1,
        explanation: 'Structured four-pillar evaluation ensures technical security, privacy capability, signed DPAs, and business continuity before data flows.',
        citation: 'RBI IT Outsourcing · DPDP Sec 8(2)'
      },
      {
        id: 'q5-10',
        moduleId: 5,
        question: 'How much maximum penalty can the Data Protection Board impose if failure to maintain Rule 6 security safeguards causes a personal data breach?',
        options: [
          'Up to ₹50 Crore',
          'Up to ₹150 Crore',
          'Up to ₹200 Crore',
          'Up to ₹250 Crore'
        ],
        correctIndex: 3,
        explanation: 'Failure to take reasonable security safeguards under Sec 8(5) carries the highest penalty cap of ₹250 Crore.',
        citation: 'DPDP Act Sec 8(5) & Schedule'
      }
    ]
  },
  {
    id: 'quiz-m6',
    moduleId: 6,
    title: 'Module 6 Assessment: Significant Data Fiduciary (SDF) Governance',
    subtitle: '15 questions covering Sec 10 notification factors, DPO in India, 12-month DPIA & Independent Audit cycles, Algorithmic Due Diligence, Rule 13(4) localisation, and Board oversight.',
    questions: [
      {
        id: 'q6-1',
        moduleId: 6,
        question: 'Under DPDP Act Section 10(1), how is a Significant Data Fiduciary (SDF) designated?',
        options: [
          'Automatic self-registration by any startup with >10 employees',
          'Notification by the Central Government based on volume/sensitivity of personal data, risk to Principal rights, sovereignty/integrity, electoral democracy, state security, and public order',
          'Designated exclusively by local municipal corporations',
          'Every entity using Excel automatically becomes an SDF'
        ],
        correctIndex: 1,
        explanation: 'Section 10(1) empowers the Central Government to notify SDFs based on six statutory risk and scale factors.',
        citation: 'DPDP Act Sec 10(1)'
      },
      {
        id: 'q6-2',
        moduleId: 6,
        question: 'Which requirement applies strictly to an SDF’s Data Protection Officer (DPO) under Section 10(2)(a)?',
        options: [
          'May live permanently in Singapore or London as long as reachable by email',
          'Must be an individual based in India, represent the SDF under the Act, and be directly responsible to the Board of Directors / governing body',
          'Must be a third-party chatbot',
          'Reports solely to the Head of Performance Marketing'
        ],
        correctIndex: 1,
        explanation: 'Section 10(2)(a) requires the SDF’s DPO to be based in India, represent the SDF, be responsible to the Board/governing body, and serve as grievance point of contact.',
        citation: 'DPDP Act Sec 10(2)(a)'
      },
      {
        id: 'q6-3',
        moduleId: 6,
        question: 'Under DPDP Rule 13(1)–(2) (scheduled May 2027), how often must an SDF execute a DPIA and Independent Audit and submit significant observations to the Board (DPB)?',
        options: [
          'Once every 5 years',
          'Once in every period of 12 months from notification date',
          'Only after suffering a major breach',
          'Monthly external audits'
        ],
        correctIndex: 1,
        explanation: 'Rule 13(1) sets an annual 12-month cycle for both DPIA and Independent Audit, with Rule 13(2) requiring submission of significant observations to the Data Protection Board.',
        citation: 'DPDP Rules Rule 13(1)–(2)'
      },
      {
        id: 'q6-4',
        moduleId: 6,
        question: 'How does a DPIA fundamentally differ from an IT Information Security Risk Assessment?',
        options: [
          'A DPIA evaluates risks to the rights, autonomy, and fairness experienced by Data Principals, whereas Security Risk Assessment evaluates threats to enterprise CIA assets',
          'A DPIA is only a firewall port scan',
          'Security Risk Assessments replace DPIAs automatically',
          'DPIAs examine office air-conditioning'
        ],
        correctIndex: 0,
        explanation: 'While Security Assessments focus on CIA asset vulnerabilities, DPIAs examine rights risks: over-collection, opacity, algorithmic bias, child harm, and inability to withdraw.',
        citation: 'DPDP Sec 10(2)(c) · Rule 13(1)'
      },
      {
        id: 'q6-5',
        moduleId: 6,
        question: 'What specific AI/software duty does DPDP Rule 13(3) impose on Significant Data Fiduciaries?',
        options: [
          'Banning all software updates',
          'Observing due diligence to verify algorithmic software used for hosting/display/processing/sharing personal data is NOT likely to pose a risk to Data Principal rights',
          'Publishing proprietary neural weights on GitHub',
          'Using public LLM tools for KYC reviews'
        ],
        correctIndex: 1,
        explanation: 'Rule 13(3) requires SDFs to verify algorithmic software—including credit scoring, underwriting, and automated decisioning—does not pose risks to Principal rights.',
        citation: 'DPDP Rules Rule 13(3)'
      },
      {
        id: 'q6-6',
        moduleId: 6,
        question: 'How does Rule 13(4) differ from general Section 16 cross-border transfer rules?',
        options: [
          'Rule 13(4) allows SDFs to ignore Section 16 negative lists',
          'Rule 13(4) empowers the Central Government (via committee recommendations) to impose targeted localisation restrictions on specified personal/traffic data categories processed by SDFs',
          'Rule 13(4) applies only to US citizens',
          'They are identical rules'
        ],
        correctIndex: 1,
        explanation: 'Rule 13(4) layers SDF-specific, committee-recommended data localisation restrictions on top of Section 16’s general negative-list framework.',
        citation: 'DPDP Rules Rule 13(4) vs Sec 16'
      },
      {
        id: 'q6-7',
        moduleId: 6,
        question: 'What is the maximum penalty cap specifically for failing Section 10 / Rule 13 SDF obligations?',
        options: [
          'Up to ₹50 Crore',
          'Up to ₹150 Crore',
          'Up to ₹200 Crore',
          'Up to ₹10,000'
        ],
        correctIndex: 1,
        explanation: 'Non-fulfilment of additional obligations of a Significant Data Fiduciary under Section 10 carries penalties up to ₹150 Crore.',
        citation: 'DPDP Act Sec 10 & Schedule'
      },
      {
        id: 'q6-8',
        moduleId: 6,
        question: 'Which failure appeared in Integrated Case Study 7 when a conglomerate prepared for SDF status?',
        options: [
          'Appointing an India-based DPO reporting to the Board',
          'Relying on an overseas Group Privacy Head in Singapore and equating an infrastructure VAPT scan with a DPDP DPIA',
          'Testing AI credit models for disparate impact',
          'Mapping 10 Board KPIs'
        ],
        correctIndex: 1,
        explanation: 'An overseas Group Privacy Head fails Sec 10(2)(a)’s "based in India" mandate, and an infrastructure VAPT scan does not assess Principal rights under Sec 10(2)(c).',
        citation: 'DPDP Sec 10(2) · Rule 13(1)–(3)'
      },
      {
        id: 'q6-9',
        moduleId: 6,
        question: 'Why must an Independent Data Auditor under Sec 10(2)(b) stay independent of IT/Marketing project teams?',
        options: [
          'To ensure an objective verification of actual logs, consent flows, and contracts free from operational conflict of interest',
          'Because auditors cannot read SQL schemas',
          'So audit findings never reach the Board',
          'Only external marketing agencies can be Independent Auditors'
        ],
        correctIndex: 0,
        explanation: 'Objective assurance requires independence from the product/IT teams designing or operating the controls being tested.',
        citation: 'DPDP Sec 10(2)(b) · Rule 13(1)'
      },
      {
        id: 'q6-10',
        moduleId: 6,
        question: 'On 25 November 2026, what is the legal enforcement status of Section 10 and Rule 13?',
        options: [
          'Already subject to ₹150 Cr fines since November 2025',
          'Notified future provisions scheduled to commence in May 2027, giving BFSI institutions a crucial readiness window',
          'Repealed permanently',
          'Voluntary forever with no statutory schedule'
        ],
        correctIndex: 1,
        explanation: 'Under the phased commencement schedule, substantive obligations including Section 10 and Rule 13 commence 18 months post-Rules notification (May 2027).',
        citation: 'G.S.R. 843(E) & 846(E)'
      }
    ]
  }
];

export const MODULE_4_FLASHCARDS: FlashcardQuestion[] = [
  {
    id: 'm4-fc1',
    moduleId: 4,
    category: 'Age Threshold',
    prompt: 'How does DPDP’s statutory age definition differ from GDPR and US COPPA when onboarding a 17-year-old college student for a debit card?',
    modelAnswer: 'DPDP Sec 2(f) defines anyone under 18 as a child (unlike COPPA <13 or GDPR 13–16). A 17-year-old still requires Rule 10 verifiable parental consent plus Sec 9 tracking/ad bans.',
    citation: 'DPDP Act Sec 2(f) & Sec 9'
  },
  {
    id: 'm4-fc2',
    moduleId: 4,
    category: 'Parental Verification',
    prompt: 'Should an online platform store full unmasked parental Aadhaar PDFs permanently to prove Rule 10 compliance?',
    modelAnswer: 'No. Rule 10 encourages using existing reliable Fiduciary KYC records or virtual age tokens (e.g., DigiLocker) while practising data minimisation.',
    citation: 'DPDP Rules Rule 10'
  },
  {
    id: 'm4-fc3',
    moduleId: 4,
    category: 'Caregiver vs Guardian',
    prompt: 'When can a relative sign consent on behalf of an adult customer with a disability?',
    modelAnswer: 'Only when verified under Rule 11 as a court/statutory Lawful Guardian (e.g., RPwD Act / National Trust Act) for an adult lacking legal capacity. Capable adults with physical/sensory disabilities must consent directly via accessible UI.',
    citation: 'DPDP Rules Rule 11 · RPwD Act 2016'
  },
  {
    id: 'm4-fc4',
    moduleId: 4,
    category: 'Rule 12 Exemptions',
    prompt: 'When a school uses Rule 12 Fourth Schedule exemptions to track student bus GPS or attendance, can it share those location logs with an EdTech advertiser?',
    modelAnswer: 'Never. Fourth Schedule exemptions strictly cover child safety and educational functions—commercial tracking and targeted ads remain categorically banned under Sec 9(3).',
    citation: 'DPDP Sec 9(3) · Rule 12 & Fourth Schedule'
  },
  {
    id: 'm4-fc5',
    moduleId: 4,
    category: 'Elderly Protection',
    prompt: 'What 3 operational safeguards protect elderly banking customers during digital onboarding?',
    modelAnswer: '1) Plain-language 8th Schedule vernacular notices (Rule 3); 2) Zero bundled cross-sell checkboxes during pension/FD servicing; 3) Screen-sharing malware warnings & cooling-off limits for high-risk transfers.',
    citation: 'DPDP Sec 5(3), 6 · RBI Senior Citizen Directives'
  },
  {
    id: 'm4-fc6',
    moduleId: 4,
    category: 'Teen FinTech SDKs',
    prompt: 'What technical check must engineering run before shipping a Youth Savings App for 13–17-year-olds?',
    modelAnswer: 'Verify `age < 18` feature flags strip all third-party ad pixels, behavioural analytics trackers, cross-app attribution SDKs, and gamified credit prompts.',
    citation: 'DPDP Act Sec 9(2)–(3)'
  }
];
