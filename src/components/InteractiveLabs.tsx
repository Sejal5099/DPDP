import { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  Eye,
  Lock,
  RefreshCw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from 'lucide-react';
import { StatusTag } from './StatusTag';
import { EnforcementStatus } from '../types/course';

type LabId = 'overlap' | 'consent' | 'erasure' | 'children' | 'sdf';

const LAB_TABS: { id: LabId; label: string; moduleRef: string }[] = [
  { id: 'overlap', label: 'Regulatory Overlap Mapper', moduleRef: 'M1 & M5' },
  { id: 'consent', label: 'Dark Pattern & Consent Studio', moduleRef: 'M2' },
  { id: 'erasure', label: 'Classification & Erasure Lab', moduleRef: 'M3' },
  { id: 'children', label: 'Children & Guardian Verifier', moduleRef: 'M4' },
  { id: 'sdf', label: 'SDF Governance Profiler', moduleRef: 'M6' },
];

// --- LAB 1 DATA ---
interface OverlapScenario {
  id: string;
  title: string;
  actor: string;
  activeSectorRules: { law: string; obligation: string; status: EnforcementStatus }[];
  dpdpProvisions: { ref: string; obligation: string; status: EnforcementStatus }[];
  criticalWarning: string;
}

const OVERLAP_SCENARIOS: OverlapScenario[] = [
  {
    id: 'lending-app',
    title: 'Digital Lending App Onboarding & Contact Access',
    actor: 'NBFC + Lending Service Provider (LSP)',
    activeSectorRules: [
      {
        law: 'RBI Digital Lending Directions (May 2025)',
        obligation: 'Strictly bans harvesting mobile contacts, call logs, or photo gallery; mandates Key Fact Statement & one-time KYC permissions.',
        status: 'independent-law',
      },
      {
        law: 'CERT-In Directions (2022)',
        obligation: 'Maintain 180-day ICT logs in India and report cyber incidents within 6 hours.',
        status: 'independent-law',
      },
    ],
    dpdpProvisions: [
      {
        ref: 'DPDP Sec 5 & 6 + Rule 3',
        obligation: 'Standalone multilingual Privacy Notice + unbundled specific consent before processing.',
        status: 'may-2027',
      },
      {
        ref: 'DPDP Sec 8(1)–(2)',
        obligation: 'NBFC (Fiduciary) remains legally liable for LSP (Processor) compliance under a valid DPA.',
        status: 'may-2027',
      },
    ],
    criticalWarning: 'Do NOT wait until May 2027—contact scraping is ALREADY illegal today under RBI Digital Lending Directions.',
  },
  {
    id: 'closed-kyc',
    title: 'Closed Savings Account KYC & Erasure Request',
    actor: 'Scheduled Commercial Bank (Data Fiduciary)',
    activeSectorRules: [
      {
        law: 'PMLA 2002 Sec 12 & RBI KYC Master Direction',
        obligation: 'Mandatory preservation of verified KYC and transaction logs for 5 years AFTER account closure.',
        status: 'independent-law',
      },
    ],
    dpdpProvisions: [
      {
        ref: 'DPDP Sec 8(7) & Sec 12(3)',
        obligation: 'Must erase non-statutory promotional/analytics records on request, while explaining statutory PMLA retention for closed-account KYC.',
        status: 'may-2027',
      },
      {
        ref: 'DPDP Rule 6(e) & Rule 8(3)',
        obligation: 'Retain access & traffic logs for at least 1 year for audit/investigation.',
        status: 'may-2027',
      },
    ],
    criticalWarning: 'Move closed-account KYC into a restricted Compliance Archive blocked from frontline sales/marketing access.',
  },
  {
    id: 'broker-breach',
    title: 'Stockbroking Client Trade File Ransomware Leak',
    actor: 'SEBI Registered Stockbroker / RTA',
    activeSectorRules: [
      {
        law: 'CERT-In Directions (2022)',
        obligation: 'Mandatory cyber incident report within 6 hours of noticing incident.',
        status: 'independent-law',
      },
      {
        law: 'SEBI CSCRF (Aug 2024)',
        obligation: 'Market-SOC incident containment, forensic preservation, and SEBI cyber reporting.',
        status: 'independent-law',
      },
    ],
    dpdpProvisions: [
      {
        ref: 'DPDP Sec 8(6) & Rule 7',
        obligation: 'Notify Data Protection Board "without delay" (+ full update within 72 hours) AND notify every affected investor in plain language.',
        status: 'may-2027',
      },
      {
        ref: 'DPDP Sec 8(5) & Rule 6',
        obligation: 'Assess reasonable security safeguard compliance (up to ₹250 Cr penalty tier post-May 2027).',
        status: 'may-2027',
      },
    ],
    criticalWarning: 'Waiting for complete forensic root-cause before notifying CERT-In breaches the 6-hour active reporting mandate.',
  },
  {
    id: 'health-tpa',
    title: 'Health Insurance Claim Diagnostics Shared with TPA',
    actor: 'Health Insurer (Fiduciary) → TPA (Processor)',
    activeSectorRules: [
      {
        law: 'IRDAI Info & Cyber Security Guidelines (2023)',
        obligation: 'Encrypt sensitive medical files, restrict access via RBAC, audit TPA security controls, report breaches rapidly.',
        status: 'independent-law',
      },
    ],
    dpdpProvisions: [
      {
        ref: 'DPDP Sec 8(2) & Rule 6(a)/(f)',
        obligation: 'Encrypted transfer/storage + 10-clause DPA binding TPA to rapid breach escalation and CoD on exit.',
        status: 'may-2027',
      },
      {
        ref: 'DPDP Sec 9 & Rule 10 (if minor patient)',
        obligation: 'Verify parental/guardian consent and bar any ad tracking or profiling on minor health claims.',
        status: 'may-2027',
      },
    ],
    criticalWarning: 'Unencrypted diagnostic PDFs sent via regular email violate active IRDAI cyber guidelines right now.',
  },
];

// --- LAB 2 DATA ---
interface DarkPatternFix {
  id: 'notice' | 'unbundle' | 'precheck' | 'confirmshame' | 'withdrawal';
  title: string;
  citation: string;
  flawedDesc: string;
  fixedDesc: string;
}

const CONSENT_FIXES: DarkPatternFix[] = [
  {
    id: 'notice',
    title: 'Standalone Multilingual Privacy Notice',
    citation: 'DPDP Sec 5(1), 5(3) · Rule 3',
    flawedDesc: 'Consent text buried inside a single "I accept 42-page Terms & Conditions" link with no 8th Schedule language selector.',
    fixedDesc: 'Dedicated scannable Rule 3 notice itemising data fields, purposes, withdrawal link, and English/Hindi/regional switcher.',
  },
  {
    id: 'unbundle',
    title: 'Unconditional Purpose Separation',
    citation: 'DPDP Sec 6(1) Illustration · CCPA Forced Action',
    flawedDesc: '"Open Savings Account" button stays locked unless user accepts third-party affiliate promotional loan & credit card offers.',
    fixedDesc: 'Core account opening proceeds cleanly even when optional marketing consent is declined.',
  },
  {
    id: 'precheck',
    title: 'Clear Affirmative Action (No Pre-Selected Boxes)',
    citation: 'DPDP Sec 6(1)',
    flawedDesc: 'Promotional affiliate sharing checkbox arrives pre-ticked by default.',
    fixedDesc: 'All optional purpose toggles start unchecked and require active user click.',
  },
  {
    id: 'confirmshame',
    title: 'Neutral Choice Copy (No Confirmshaming)',
    citation: 'CCPA Dark Patterns 2023 · DPDP Sec 6',
    flawedDesc: 'Decline option reads: "No thanks, I want to miss wealth growth and stay financially unsafe."',
    fixedDesc: 'Symmetric neutral buttons: "Allow Optional Offers" and "Continue Without Offers".',
  },
  {
    id: 'withdrawal',
    title: 'Comparable Ease of Withdrawal',
    citation: 'DPDP Sec 6(4)',
    flawedDesc: '1-tap mobile opt-in vs requiring physical signed letter mailed to Mumbai headquarters to opt out.',
    fixedDesc: 'Instant 1-click "Manage / Withdraw Consent" control available inside the same account screen.',
  },
];

// --- LAB 3 DATA ---
type DataTier = 'Public' | 'Internal' | 'Confidential' | 'Restricted';

const CLASSIFICATION_ITEMS: {
  id: string;
  label: string;
  correctTier: DataTier;
  rationale: string;
}[] = [
  {
    id: 'c1',
    label: 'Published Branch IFSC Codes & FD Interest Rate Card',
    correctTier: 'Public',
    rationale: 'Meant for open public distribution; requires integrity protection only.',
  },
  {
    id: 'c2',
    label: 'Internal Branch Cash-Handling SOP Manual (no PII)',
    correctTier: 'Internal',
    rationale: 'Operational internal reference with no customer identifiers.',
  },
  {
    id: 'c3',
    label: 'Customer Home Address, Loan Balance & Policy Schedule',
    correctTier: 'Confidential',
    rationale: 'Identifiable customer financial records requiring RBAC, encryption, and DLP.',
  },
  {
    id: 'c4',
    label: 'Raw Aadhaar Number, Card CVV & Health Claim Pathology Report',
    correctTier: 'Restricted',
    rationale: 'Highest statutory/harm sensitivity—requires tokenisation, vaulting, masking, and MFA/PAM.',
  },
  {
    id: 'c5',
    label: 'Analytics Table Using Internal CIF IDs (Mapping Table Exists)',
    correctTier: 'Confidential',
    rationale: 'Pseudonymised—NOT anonymised. Re-identification via CIF lookup means DPDP still applies in full.',
  },
];

interface ErasureRecord {
  id: string;
  system: string;
  state: string;
  correctAction: 'legal-hold' | 'pmla-archive' | 'erase-now';
  explanation: string;
}

const ERASURE_RECORDS: ErasureRecord[] = [
  {
    id: 'er-1',
    system: 'Home Loan Account (₹38L Active · DRT Recovery Suit Pending)',
    state: 'Litigation Notice Served',
    correctAction: 'legal-hold',
    explanation: 'Legal Hold freezes deletion pipelines under Sec 17(1)(c) & Evidence rules—erasing would be evidence spoliation.',
  },
  {
    id: 'er-2',
    system: 'Savings Account KYC & Ledger (Closed 2 Years Ago)',
    state: 'Closed Relationship',
    correctAction: 'pmla-archive',
    explanation: 'PMLA Sec 12 requires preserving KYC/transactions for 5 years post-closure (3 yrs remaining). Isolate in Compliance Archive.',
  },
  {
    id: 'er-3',
    system: 'Promotional Loan SMS Dialer & Third-Party Lead Agency',
    state: 'Marketing Consent Withdrawn',
    correctAction: 'erase-now',
    explanation: 'No statutory retention applies—immediately hard-purge from CRM, outbound dialers, vendor SFTP, and log DR Tombstone.',
  },
  {
    id: 'er-4',
    system: 'Unused Mobile App Behavioural Analytics & Push Tokens',
    state: 'Purpose Completed / Withdrawn',
    correctAction: 'erase-now',
    explanation: 'Telemetry/cookie preferences must be erased immediately and reconciled in the Erasure Reconciliation Register.',
  },
];

// --- LAB 4 DATA ---
interface VulnerableCase {
  id: string;
  title: string;
  context: string;
  ageOrStatus: string;
  correctVerdict: 'verifiable-parent' | 'lawful-guardian' | 'accessible-self' | 'rule12-strict' | 'blocked';
  verdictLabel: string;
  reasoning: string;
}

const VULNERABLE_CASES: VulnerableCase[] = [
  {
    id: 'v1',
    title: '17-Year-Old Applying for College Prepaid Card & UPI App',
    context: 'Applicant submits college ID and clicks "Yes, I am old enough". App bundles behavioural merchant coupon targeting.',
    ageOrStatus: 'Age 17 (Under 18)',
    correctVerdict: 'blocked',
    verdictLabel: 'Reject Self-Consent + Strip Ad/Coupon Profiling',
    reasoning: 'Under DPDP Sec 2(f), age 17 is still a Child. Requires Rule 10 Verifiable Parental Consent AND absolute removal of behavioural tracking/targeted ads under Sec 9(3).',
  },
  {
    id: 'v2',
    title: '11-Year-Old Opening Linked Minor Savings Account',
    context: 'Full-KYC parent logs into existing bank netbanking and completes DigiLocker/CIF linked authorisation; fraud SMS enabled, ad SDKs disabled.',
    ageOrStatus: 'Age 11 (Existing Parent KYC)',
    correctVerdict: 'verifiable-parent',
    verdictLabel: 'Compliant Under Rule 10 + Sec 9',
    reasoning: 'Uses reliable identity/age details already held by the Bank for the parent (Rule 10) with zero behavioural ad trackers.',
  },
  {
    id: 'v3',
    title: 'Visually Impaired Senior Executive Opening Term Deposit',
    context: 'Customer holds full legal/cognitive capacity and requests branch tablet notice in large-print screen-reader audio.',
    ageOrStatus: 'Adult · Sensory Disability (Full Capacity)',
    correctVerdict: 'accessible-self',
    verdictLabel: 'Empower Direct Accessible Consent (No Forced Guardian)',
    reasoning: 'Physical/sensory disability does NOT erase legal capacity. Provide accessible UI/audio readouts so the customer consents independently.',
  },
  {
    id: 'v4',
    title: 'Elderly Stroke Survivor Incapacitated · Son-in-Law Demands Mandate Change',
    context: 'Relative arrives without court/RPwD guardianship certificate asking to divert pension alerts to his own mobile number.',
    ageOrStatus: 'Adult Incapacitated · Informal Caregiver',
    correctVerdict: 'lawful-guardian',
    verdictLabel: 'Decline Informal Caregiver · Require Rule 11 Guardianship Proof',
    reasoning: 'An informal caregiver is NOT a lawful guardian under Rule 11. Require formal statutory/court guardianship order (RPwD / National Trust Act).',
  },
  {
    id: 'v5',
    title: 'School Attendance & Bus Safety Portal vs EdTech Ad Monetisation',
    context: 'School uses attendance RFID & bus GPS strictly for parent safety alerts under Rule 12, then partner vendor proposes selling student profiles to coaching centres.',
    ageOrStatus: 'Minor Students (<18)',
    correctVerdict: 'rule12-strict',
    verdictLabel: 'Allow School Safety GPS · Strictly Block Coaching Ad Sharing',
    reasoning: 'Fourth Schedule / Rule 12 allows school educational & safety tracking only—never commercial monetisation or targeted ads (Sec 9(3)).',
  },
];

export function InteractiveLabs() {
  const [activeLab, setActiveLab] = useState<LabId>('overlap');

  // Lab 1 State
  const [selectedOverlapId, setSelectedOverlapId] = useState<string>(OVERLAP_SCENARIOS[0].id);

  // Lab 2 State
  const [fixesApplied, setFixesApplied] = useState<Record<string, boolean>>({
    notice: false,
    unbundle: false,
    precheck: false,
    confirmshame: false,
    withdrawal: false,
  });
  const [previewLang, setPreviewLang] = useState<'en' | 'hi'>('en');

  // Lab 3 State
  const [lab3Mode, setLab3Mode] = useState<'classify' | 'reconcile'>('classify');
  const [tierGuesses, setTierGuesses] = useState<Record<string, DataTier>>({});
  const [erasureDecisions, setErasureDecisions] = useState<Record<string, string>>({});
  const [reconciliationChecked, setReconciliationChecked] = useState(false);

  // Lab 4 State
  const [vulnIdx, setVulnIdx] = useState(0);
  const [vulnAnswers, setVulnAnswers] = useState<Record<string, string>>({});

  // Lab 5 State (SDF Profiler)
  const [customerCountMillions, setCustomerCountMillions] = useState<number>(28);
  const [handlesHealthOrBiometrics, setHandlesHealthOrBiometrics] = useState<boolean>(true);
  const [usesAiCreditScoring, setUsesAiCreditScoring] = useState<boolean>(true);
  const [offshoreCloudReplica, setOffshoreCloudReplica] = useState<boolean>(true);
  const [minorsCountHigh, setMinorsCountHigh] = useState<boolean>(false);

  const overlapScenario =
    OVERLAP_SCENARIOS.find((s) => s.id === selectedOverlapId) ?? OVERLAP_SCENARIOS[0];

  const appliedCount = Object.values(fixesApplied).filter(Boolean).length;
  const consentScore = Math.round((appliedCount / CONSENT_FIXES.length) * 100);

  const activeVulnCase = VULNERABLE_CASES[vulnIdx];
  const selectedVulnAnswer = vulnAnswers[activeVulnCase.id];

  // SDF Score computation
  const sdfRiskPoints =
    (customerCountMillions >= 20 ? 35 : customerCountMillions >= 5 ? 20 : 8) +
    (handlesHealthOrBiometrics ? 25 : 5) +
    (usesAiCreditScoring ? 20 : 0) +
    (offshoreCloudReplica ? 10 : 0) +
    (minorsCountHigh ? 10 : 0);
  const sdfTier =
    sdfRiskPoints >= 65
      ? 'HIGH LIKELIHOOD OF SDF DESIGNATION'
      : sdfRiskPoints >= 40
        ? 'MODERATE SDF EXPOSURE'
        : 'STANDARD DATA FIDUCIARY BASELINE';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-cyan-800 dark:text-cyan-400">
          Interactive Practice Sandboxes
        </span>
        <h1 className="font-display text-3xl font-semibold text-slate-950 dark:text-white tracking-tight">
          DPDP Act &amp; BFSI Compliance Simulation Labs
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
          Test statutory judgement across all six modules—manipulate live UI consent controls, reconcile multi-system erasure holds, inspect minor/guardian edges, and profile Significant Data Fiduciary duties.
        </p>
      </div>

      {/* Lab Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {LAB_TABS.map((tab) => {
          const active = tab.id === activeLab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveLab(tab.id)}
              className={`shrink-0 px-3.5 py-2 text-xs font-semibold rounded-sm border transition-colors ${
                active
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-cyan-500 dark:text-slate-950 dark:border-cyan-500'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 dark:bg-slate-900/85 dark:text-slate-300 dark:border-slate-700 dark:hover:border-slate-500'
              }`}
            >
              <span className="font-mono text-[10px] opacity-75 mr-1.5">
                {tab.moduleRef}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ================= LAB 1: REGULATORY OVERLAP MAPPER ================= */}
      {activeLab === 'overlap' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-4 bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-4 space-y-2">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
              Select BFSI Workflow
            </h2>
            {OVERLAP_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedOverlapId(sc.id)}
                className={`w-full text-left p-3 rounded-sm border transition-colors ${
                  sc.id === overlapScenario.id
                    ? 'border-cyan-700 bg-cyan-50/70 dark:border-cyan-400 dark:bg-cyan-950/50'
                    : 'border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{sc.title}</div>
                <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  {sc.actor}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-6 space-y-5">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="font-mono text-xs text-cyan-800 dark:text-cyan-400 font-semibold uppercase">
                {overlapScenario.actor}
              </span>
              <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white mt-1">
                {overlapScenario.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-900 dark:text-cyan-300">
                  Independent Sectoral Laws (Enforceable Today)
                </h4>
                {overlapScenario.activeSectorRules.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 border border-cyan-300 bg-cyan-50/45 dark:border-cyan-800/70 dark:bg-cyan-950/35 rounded-sm space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 dark:text-white">
                        {item.law}
                      </span>
                      <StatusTag status={item.status} compact />
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.obligation}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                  DPDP Act &amp; Rules Overlay
                </h4>
                {overlapScenario.dpdpProvisions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 border border-amber-200 bg-amber-50/30 dark:border-amber-800/70 dark:bg-amber-950/30 rounded-sm space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 dark:text-white">
                        {item.ref}
                      </span>
                      <StatusTag status={item.status} compact />
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.obligation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-900 dark:bg-slate-950 dark:border dark:border-slate-700 text-white rounded-sm flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <span className="font-mono uppercase font-semibold text-amber-300 mr-1.5">
                  Compliance Takeaway:
                </span>
                {overlapScenario.criticalWarning}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= LAB 2: DARK PATTERN & CONSENT STUDIO ================= */}
      {activeLab === 'consent' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Stage (Left) */}
          <div className="lg:col-span-7 bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Live Mobile Onboarding Screen Preview
                </span>
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  Digital Savings Account &amp; Card Onboarding
                </h3>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                {fixesApplied.notice && (
                  <div className="flex border border-slate-300 dark:border-slate-700 rounded-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setPreviewLang('en')}
                      className={`px-2 py-1 ${
                        previewLang === 'en'
                          ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                          : 'bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewLang('hi')}
                      className={`px-2 py-1 ${
                        previewLang === 'hi'
                          ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                          : 'bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300'
                      }`}
                    >
                      हिन्दी
                    </button>
                  </div>
                )}
                <span
                  className={`px-2.5 py-1 rounded-sm font-semibold tabular-nums border ${
                    consentScore === 100
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700'
                      : 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800'
                  }`}
                >
                  Score: {consentScore}%
                </span>
              </div>
            </div>

            {/* Simulated Mobile Banking Consent Card */}
            <div className="border-2 border-slate-300 dark:border-slate-700 rounded-sm p-5 bg-slate-50 dark:bg-slate-950/75 space-y-4">
              {fixesApplied.notice ? (
                <div className="bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 rounded-sm p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold uppercase text-emerald-800 dark:text-emerald-300">
                      Rule 3 Standalone Privacy Notice
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {previewLang === 'en'
                      ? 'We collect PAN, Aadhaar V-KYC, and address strictly to open and operate your Savings Account (Purpose 1). You may manage or withdraw optional marketing consent anytime in Profile > Privacy, or escalate grievances to DPO / Data Protection Board.'
                      : 'हम आपका पैन, आधार V-KYC और पता केवल बचत खाता खोलने व संचालित करने के लिए एकत्र करते हैं। आप किसी भी समय Profile > Privacy से वैकल्पिक मार्केटिंग सहमति वापस ले सकते हैं।'}
                  </p>
                </div>
              ) : (
                <div className="bg-red-50/70 dark:bg-red-950/45 border border-red-200 dark:border-red-800/70 rounded-sm p-3.5 text-xs text-red-900 dark:text-red-200">
                  <strong>Flaw (Missing Rule 3 Notice):</strong> &ldquo;By tapping below you accept our 42-page Master Terms, Credit Bureau clause, and Privacy Guidelines.&rdquo;
                </div>
              )}

              {/* Optional Toggle */}
              <div
                className={`p-3.5 rounded-sm border bg-white dark:bg-slate-900 flex items-start gap-3 ${
                  fixesApplied.precheck && fixesApplied.unbundle
                    ? 'border-emerald-300 dark:border-emerald-700'
                    : 'border-red-200 dark:border-red-800'
                }`}
              >
                <input
                  type="checkbox"
                  readOnly
                  checked={!fixesApplied.precheck}
                  className="mt-1 h-4 w-4 accent-cyan-800 dark:accent-cyan-400"
                  aria-label="Simulated optional marketing consent checkbox"
                />
                <div className="text-xs space-y-1">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Optional: Share income profile with Partner Insurance &amp; Card Affiliates
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {!fixesApplied.precheck
                      ? 'VIOLATION: Pre-ticked box (lacks clear affirmative action)'
                      : 'COMPLIANT: Unchecked by default; requires explicit opt-in'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  className={`px-4 py-2 text-xs font-semibold rounded-sm border ${
                    fixesApplied.confirmshame
                      ? 'bg-white text-slate-800 border-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700'
                      : 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800 italic'
                  }`}
                >
                  {fixesApplied.confirmshame
                    ? 'Open Account Without Offers'
                    : 'No thanks, I prefer missing financial rewards'}
                </button>

                <button
                  type="button"
                  disabled={!fixesApplied.unbundle}
                  className={`px-4 py-2 text-xs font-semibold rounded-sm ${
                    fixesApplied.unbundle
                      ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                      : 'bg-slate-300 text-slate-600 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {fixesApplied.unbundle
                    ? 'Open Savings Account'
                    : 'Disabled Until Affiliate Box Checked'}
                </button>
              </div>

              {/* Withdrawal Footer */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-slate-600 dark:text-slate-400">Consent Withdrawal Path:</span>
                {fixesApplied.withdrawal ? (
                  <span className="font-mono text-emerald-800 dark:text-emerald-400 font-semibold">
                    1-Tap App Consent Centre (Comparable Ease · Sec 6(4))
                  </span>
                ) : (
                  <span className="font-mono text-red-700 dark:text-red-400 font-semibold">
                    Physical Registered Post to Mumbai HQ Required (Asymmetric)
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Control Deck (Right) */}
          <div className="lg:col-span-5 bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Engineering Remediation Controls
              </h3>
              <button
                type="button"
                onClick={() =>
                  setFixesApplied({
                    notice: true,
                    unbundle: true,
                    precheck: true,
                    confirmshame: true,
                    withdrawal: true,
                  })
                }
                className="text-xs font-semibold text-cyan-800 hover:text-cyan-950 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                Apply All Fixes
              </button>
            </div>

            <div className="space-y-3">
              {CONSENT_FIXES.map((fix) => {
                const enabled = fixesApplied[fix.id];
                return (
                  <button
                    key={fix.id}
                    type="button"
                    onClick={() =>
                      setFixesApplied((prev) => ({
                        ...prev,
                        [fix.id]: !prev[fix.id],
                      }))
                    }
                    className={`w-full text-left p-3.5 rounded-sm border transition-colors ${
                      enabled
                        ? 'border-emerald-300 bg-emerald-50/40 dark:border-emerald-700 dark:bg-emerald-950/35'
                        : 'border-slate-200 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950/50 dark:hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                        {fix.title}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase font-semibold ${
                          enabled
                            ? 'text-emerald-800 dark:text-emerald-400'
                            : 'text-red-700 dark:text-red-400'
                        }`}
                      >
                        {enabled ? 'Fixed' : 'Broken'}
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {fix.citation}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                      {enabled ? fix.fixedDesc : fix.flawedDesc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= LAB 3: CLASSIFICATION & ERASURE LAB ================= */}
      {activeLab === 'erasure' && (
        <div className="bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                Module 3: Data Classification &amp; Erasure Reconciliation Simulator
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Practice classifying BFSI datasets and triaging multi-product customer erasure requests across statutory holds.
              </p>
            </div>
            <div className="flex border border-slate-300 dark:border-slate-700 rounded-sm overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => setLab3Mode('classify')}
                className={`px-3.5 py-1.5 text-xs font-semibold ${
                  lab3Mode === 'classify'
                    ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                    : 'bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                1. Classification Drill
              </button>
              <button
                type="button"
                onClick={() => setLab3Mode('reconcile')}
                className={`px-3.5 py-1.5 text-xs font-semibold ${
                  lab3Mode === 'reconcile'
                    ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950'
                    : 'bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                2. Erasure Reconciliation
              </button>
            </div>
          </div>

          {lab3Mode === 'classify' && (
            <div className="space-y-3">
              {CLASSIFICATION_ITEMS.map((item) => {
                const chosen = tierGuesses[item.id];
                const isRight = chosen === item.correctTier;
                return (
                  <div
                    key={item.id}
                    className="p-4 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <Database className="w-4 h-4 text-cyan-800 dark:text-cyan-400 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      {chosen && (
                        <p
                          className={`text-xs leading-relaxed ${
                            isRight
                              ? 'text-emerald-800 dark:text-emerald-300'
                              : 'text-red-700 dark:text-red-300'
                          }`}
                        >
                          <strong>{isRight ? 'Correct:' : `Expected ${item.correctTier}:`}</strong>{' '}
                          {item.rationale}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 shrink-0">
                      {(['Public', 'Internal', 'Confidential', 'Restricted'] as DataTier[]).map(
                        (tier) => {
                          const selected = chosen === tier;
                          return (
                            <button
                              key={tier}
                              type="button"
                              onClick={() =>
                                setTierGuesses((prev) => ({
                                  ...prev,
                                  [item.id]: tier,
                                }))
                              }
                              className={`px-2.5 py-1 text-xs font-mono rounded-sm border transition-colors ${
                                selected
                                  ? tier === item.correctTier
                                    ? 'bg-emerald-700 text-white border-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:border-emerald-500'
                                    : 'bg-red-700 text-white border-red-700 dark:bg-red-500 dark:text-white dark:border-red-500'
                                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800'
                              }`}
                            >
                              {tier}
                            </button>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {lab3Mode === 'reconcile' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Customer Request:</strong> Customer <code>CIF-90482</code> submits a DPDP Section 12(3) erasure request across all bank systems. Assign the legally accurate reconciliation action per record store:
              </div>

              <div className="space-y-3">
                {ERASURE_RECORDS.map((rec) => {
                  const chosen = erasureDecisions[rec.id];
                  const correct = chosen === rec.correctAction;
                  return (
                    <div
                      key={rec.id}
                      className="p-4 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 rounded-sm space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            {rec.system}
                          </div>
                          <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                            Status: {rec.state}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {[
                            { id: 'legal-hold', label: 'Freeze (Legal Hold)' },
                            { id: 'pmla-archive', label: 'Retain in PMLA Archive' },
                            { id: 'erase-now', label: 'Hard Purge + Tombstone' },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setReconciliationChecked(false);
                                setErasureDecisions((prev) => ({
                                  ...prev,
                                  [rec.id]: opt.id,
                                }));
                              }}
                              className={`px-2.5 py-1.5 text-xs font-semibold rounded-sm border ${
                                chosen === opt.id
                                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-cyan-500 dark:text-slate-950 dark:border-cyan-500'
                                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {reconciliationChecked && (
                        <div
                          className={`p-2.5 rounded-sm text-xs border ${
                            correct
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/45 dark:border-emerald-800/70 dark:text-emerald-200'
                              : 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/45 dark:border-red-800/70 dark:text-red-200'
                          }`}
                        >
                          <strong>{correct ? 'Verified:' : 'Exception:'}</strong> {rec.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setReconciliationChecked(true)}
                  className="inline-flex items-center gap-2 bg-cyan-800 hover:bg-cyan-900 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 text-white text-xs font-semibold px-4 py-2 rounded-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Run Erasure Reconciliation Audit</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setErasureDecisions({});
                    setReconciliationChecked(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= LAB 4: CHILDREN & GUARDIAN VERIFIER ================= */}
      {activeLab === 'children' && (
        <div className="bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="font-mono text-xs text-cyan-800 dark:text-cyan-400 font-semibold uppercase">
                Module 4 Decision Simulator · Scenario {vulnIdx + 1} of {VULNERABLE_CASES.length}
              </span>
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white mt-0.5">
                {activeVulnCase.title}
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-950/60 px-2.5 py-1 rounded-sm">
              Subject: {activeVulnCase.ageOrStatus}
            </span>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
            {activeVulnCase.context}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { id: 'verifiable-parent', label: 'Approve via Rule 10 Parental KYC/Token' },
              { id: 'blocked', label: 'Reject Self-Consent + Strip Sec 9 Ad/Tracking' },
              { id: 'accessible-self', label: 'Enable Accessible Self-Consent (No Guardian)' },
              { id: 'lawful-guardian', label: 'Require Rule 11 Statutory Guardianship Proof' },
              { id: 'rule12-strict', label: 'Allow Rule 12 Safety Only · Ban Ad Monetisation' },
            ].map((choice) => {
              const chosen = selectedVulnAnswer === choice.id;
              const isCorrectChoice = choice.id === activeVulnCase.correctVerdict;
              return (
                <button
                  key={choice.id}
                  type="button"
                  onClick={() =>
                    setVulnAnswers((prev) => ({
                      ...prev,
                      [activeVulnCase.id]: choice.id,
                    }))
                  }
                  className={`text-left p-3.5 rounded-sm border text-xs font-semibold transition-colors ${
                    chosen
                      ? isCorrectChoice
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-900 dark:bg-emerald-950/50 dark:border-emerald-700 dark:text-emerald-200'
                        : 'bg-red-50 border-red-300 text-red-900 dark:bg-red-950/50 dark:border-red-700 dark:text-red-200'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-slate-400 dark:bg-slate-950/50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500'
                  }`}
                >
                  {choice.label}
                </button>
              );
            })}
          </div>

          {selectedVulnAnswer && (
            <div
              className={`p-4 rounded-sm border space-y-1.5 ${
                selectedVulnAnswer === activeVulnCase.correctVerdict
                  ? 'bg-emerald-50/70 border-emerald-300 dark:bg-emerald-950/45 dark:border-emerald-700'
                  : 'bg-amber-50/70 border-amber-300 dark:bg-amber-950/45 dark:border-amber-700'
              }`}
            >
              <div className="font-mono text-xs font-semibold uppercase text-slate-900 dark:text-white flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-cyan-800 dark:text-cyan-400" />
                <span>
                  {selectedVulnAnswer === activeVulnCase.correctVerdict
                    ? `Correct Determination: ${activeVulnCase.verdictLabel}`
                    : `Recommended Determination: ${activeVulnCase.verdictLabel}`}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeVulnCase.reasoning}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              disabled={vulnIdx === 0}
              onClick={() => setVulnIdx((i) => Math.max(0, i - 1))}
              className="px-3.5 py-1.5 text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-sm disabled:opacity-40"
            >
              Previous Case
            </button>
            <button
              type="button"
              onClick={() => setVulnIdx((i) => (i + 1) % VULNERABLE_CASES.length)}
              className="px-4 py-1.5 text-xs font-semibold bg-slate-900 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 text-white rounded-sm"
            >
              Next Scenario
            </button>
          </div>
        </div>
      )}

      {/* ================= LAB 5: SDF GOVERNANCE PROFILER ================= */}
      {activeLab === 'sdf' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Left */}
          <div className="lg:col-span-5 bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-5 space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <SlidersHorizontal className="w-4 h-4 text-cyan-800 dark:text-cyan-400" />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Section 10(1) Risk Parameter Deck
              </h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="sdf-volume" className="font-semibold text-slate-900 dark:text-white">
                  Active Customer Volume (Millions)
                </label>
                <span className="font-mono font-semibold text-cyan-800 dark:text-cyan-400 tabular-nums">
                  {customerCountMillions}M Principals
                </span>
              </div>
              <input
                id="sdf-volume"
                type="range"
                min={1}
                max={60}
                value={customerCountMillions}
                onChange={(e) => setCustomerCountMillions(Number(e.target.value))}
                className="w-full accent-cyan-800 dark:accent-cyan-400"
              />
              <div className="flex justify-between font-mono text-[10px] text-slate-400 dark:text-slate-500 tabular-nums">
                <span>1M</span>
                <span>20M</span>
                <span>40M</span>
                <span>60M+</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              {[
                {
                  checked: handlesHealthOrBiometrics,
                  setter: setHandlesHealthOrBiometrics,
                  label: 'Processes High-Sensitivity Financial, Aadhaar, or Health Claim Data',
                },
                {
                  checked: usesAiCreditScoring,
                  setter: setUsesAiCreditScoring,
                  label: 'Deploys Automated Credit Scoring / Underwriting AI Models',
                },
                {
                  checked: offshoreCloudReplica,
                  setter: setOffshoreCloudReplica,
                  label: 'Replicates Customer Traffic/Telemetry to Offshore Cloud Regions',
                },
                {
                  checked: minorsCountHigh,
                  setter: setMinorsCountHigh,
                  label: 'Operates Youth/Minor Accounts (<18 years)',
                },
              ].map((toggle, i) => (
                <label
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 rounded-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  <input
                    type="checkbox"
                    checked={toggle.checked}
                    onChange={(e) => toggle.setter(e.target.checked)}
                    className="mt-0.5 accent-cyan-800 dark:accent-cyan-400"
                  />
                  <span className="text-slate-800 dark:text-slate-200 leading-snug">{toggle.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Governance Output Right */}
          <div className="lg:col-span-7 bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase">
                  Projected SDF Governance Profile (Scheduled May 2027)
                </span>
                <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white mt-0.5">
                  {sdfTier}
                </h3>
              </div>
              <div className="font-mono text-lg font-semibold text-cyan-900 border border-cyan-300 bg-cyan-50 dark:text-cyan-300 dark:border-cyan-700 dark:bg-cyan-950/60 px-3 py-1.5 rounded-sm tabular-nums">
                Index: {sdfRiskPoints}/100
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 rounded-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                  <ShieldAlert className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>India-Resident Board DPO (Sec 10(2)(a))</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {sdfRiskPoints >= 40
                    ? 'Mandatory if notified: Individual based in India reporting directly to the Board; never outsource to offshore Group Head.'
                    : 'Appoint a named Grievance Officer today while structuring DPO escalation pathways.'}
                </p>
              </div>

              <div className="p-3.5 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 rounded-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                  <Eye className="w-4 h-4 text-cyan-800 dark:text-cyan-400" />
                  <span>12-Month DPIA &amp; Audit (Rule 13(1)–(2))</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Annual rights-impact DPIA + Independent Audit with significant observations submitted to the Data Protection Board.
                </p>
              </div>

              <div className="p-3.5 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 rounded-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                  <Scale className="w-4 h-4 text-cyan-800 dark:text-cyan-400" />
                  <span>Algorithmic Due Diligence (Rule 13(3))</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {usesAiCreditScoring
                    ? 'CRITICAL ACTION: Audit credit/underwriting ML models for bias, feature provenance, and human review rights.'
                    : 'Verify any future automated fraud or underwriting software prior to deployment.'}
                </p>
              </div>

              <div className="p-3.5 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 rounded-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                  <Lock className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Cross-Border Pinning (Rule 13(4) &amp; Sec 16)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {offshoreCloudReplica
                    ? 'Build Mumbai/Hyderabad data residency pinning capability in case Rule 13(4) restricts offshore traffic/PII categories.'
                    : 'India-pinned architecture simplifies Rule 13(4) and RBI payment localisation compliance.'}
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm text-xs text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">Statutory Penalty Tier:</strong> Non-compliance with Section 10 / Rule 13 carries up to <span className="font-mono font-semibold text-slate-950 dark:text-white">₹150 Crore</span> upon Phase 3 commencement in May 2027 (in addition to ₹250 Cr Rule 6 safeguards).
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
