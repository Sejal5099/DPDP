import { useEffect, useRef, useState } from 'react';
import { Lock, RotateCcw, Sparkles, Unlock } from 'lucide-react';

interface DefinitionTopic {
  id: string;
  sectionCode: string;
  title: string;
  definition: string;
  statutoryRef: string;
}

const DPDP_DEFINITION_TOPICS: DefinitionTopic[] = [
  {
    id: '3.2.1',
    sectionCode: '3.2.1',
    title: 'Data Principal',
    definition: 'The individual to whom personal data relates.',
    statutoryRef: 'Section 2(j)',
  },
  {
    id: '3.2.2',
    sectionCode: '3.2.2',
    title: 'Data Fiduciary',
    definition:
      'A person who, alone or in conjunction with other persons, determines the purpose and means of processing personal data.',
    statutoryRef: 'Section 2(i)',
  },
  {
    id: '3.2.3',
    sectionCode: '3.2.3',
    title: 'Data Processor',
    definition:
      'A person who processes personal data on behalf of a Data Fiduciary.',
    statutoryRef: 'Section 2(k)',
  },
  {
    id: '3.2.4',
    sectionCode: '3.2.4',
    title: 'Consent Manager',
    definition:
      'A registered entity that enables a Data Principal to give, manage, review and withdraw consent through an accessible and interoperable platform.',
    statutoryRef: 'Section 2(g)',
  },
  {
    id: '3.2.5',
    sectionCode: '3.2.5',
    title: 'Personal Data',
    definition:
      'Any data about an individual who is identifiable by or in relation to such data.',
    statutoryRef: 'Section 2(t)',
  },
  {
    id: '3.2.6',
    sectionCode: '3.2.6',
    title: 'Processing',
    definition:
      'Processing includes operations performed on personal data, such as: Collection. Storage. Organisation. Retrieval. Use. Sharing. Disclosure. Erasure.',
    statutoryRef: 'Section 2(x)',
  },
  {
    id: '3.2.7',
    sectionCode: '3.2.7',
    title: 'Significant Data Fiduciary',
    definition:
      'A Data Fiduciary or class of Data Fiduciaries notified by the Central Government as a Significant Data Fiduciary based on prescribed factors. Such entities have additional obligations, including appointing a Data Protection Officer based in India, appointing an independent data auditor and undertaking specified assessments.',
    statutoryRef: 'Section 2(z) & Sec 10',
  },
];

function TopicIllustration({ topicId }: { topicId: string }) {
  switch (topicId) {
    case '3.2.1':
      // Data Principal: User badge + protective shield
      return (
        <svg viewBox="0 0 120 84" className="w-28 h-20" aria-hidden="true">
          <rect
            x="16"
            y="18"
            width="52"
            height="48"
            rx="6"
            fill="#E0F2FE"
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <circle cx="34" cy="37" r="8" fill="#0284C7" />
          <path
            d="M22 57c0-6.5 5.4-11 12-11s12 4.5 12 11"
            fill="#0284C7"
          />
          <rect x="47" y="28" width="14" height="4" rx="2" fill="#0369A1" />
          <rect x="47" y="36" width="14" height="4" rx="2" fill="#7DD3FC" />
          <rect x="47" y="44" width="11" height="4" rx="2" fill="#7DD3FC" />
          <path
            d="M84 14l20 7v17c0 13.5-8.5 24-20 29-11.5-5-20-15.5-20-29V21l20-7z"
            fill="#0EA5E9"
            stroke="#E0F2FE"
            strokeWidth="2"
          />
          <path
            d="M75.5 39.5l5.8 5.8 11.7-12.3"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case '3.2.2':
      // Data Fiduciary: Enterprise/Bank building + checklist folder + flag
      return (
        <svg viewBox="0 0 120 84" className="w-28 h-20" aria-hidden="true">
          {/* Flag */}
          <line x1="40" y1="8" x2="40" y2="20" stroke="#94A3B8" strokeWidth="2" />
          <path d="M40 8l13 4-13 4V8z" fill="#EF4444" />
          {/* Main Building */}
          <rect
            x="20"
            y="20"
            width="42"
            height="52"
            rx="3"
            fill="#E2E8F0"
            stroke="#64748B"
            strokeWidth="2"
          />
          {/* Windows */}
          <rect x="26" y="27" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="37" y="27" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="48" y="27" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="26" y="39" width="7" height="7" rx="1" fill="#0284C7" />
          <rect x="37" y="39" width="7" height="7" rx="1" fill="#0284C7" />
          <rect x="48" y="39" width="7" height="7" rx="1" fill="#0284C7" />
          <rect x="26" y="51" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="48" y="51" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="36" y="57" width="10" height="15" rx="1" fill="#334155" />
          {/* Governance Folder / Checklist */}
          <rect
            x="68"
            y="26"
            width="34"
            height="42"
            rx="4"
            fill="#F8FAFC"
            stroke="#475569"
            strokeWidth="2"
          />
          <rect x="76" y="21" width="18" height="8" rx="2" fill="#0EA5E9" />
          <path d="M74 37l3 3 5-5" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="85" y="36" width="12" height="3" rx="1.5" fill="#64748B" />
          <path d="M74 48l3 3 5-5" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="85" y="47" width="12" height="3" rx="1.5" fill="#64748B" />
          <circle cx="96" cy="64" r="9" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M92 64l3 3 5-5.5" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case '3.2.3':
      // Data Processor: Interlocking gears + server stack
      return (
        <svg viewBox="0 0 120 84" className="w-28 h-20" aria-hidden="true">
          {/* Large Gear */}
          <g transform="translate(40,42)">
            <circle cx="0" cy="0" r="19" fill="#0284C7" stroke="#BAE6FD" strokeWidth="2" />
            <rect x="-4" y="-25" width="8" height="7" rx="1.5" fill="#0284C7" />
            <rect x="-4" y="18" width="8" height="7" rx="1.5" fill="#0284C7" />
            <rect x="-25" y="-4" width="7" height="8" rx="1.5" fill="#0284C7" />
            <rect x="18" y="-4" width="7" height="8" rx="1.5" fill="#0284C7" />
            <circle cx="0" cy="0" r="8" fill="#E0F2FE" />
          </g>
          {/* Small Gear */}
          <g transform="translate(65,24)">
            <circle cx="0" cy="0" r="11" fill="#64748B" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="-2.5" y="-15" width="5" height="5" rx="1" fill="#64748B" />
            <rect x="-2.5" y="10" width="5" height="5" rx="1" fill="#64748B" />
            <rect x="-15" y="-2.5" width="5" height="5" rx="1" fill="#64748B" />
            <rect x="10" y="-2.5" width="5" height="5" rx="1" fill="#64748B" />
            <circle cx="0" cy="0" r="4.5" fill="#F1F5F9" />
          </g>
          {/* Server Racks */}
          <rect x="70" y="37" width="34" height="11" rx="2.5" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="77" cy="42.5" r="2" fill="#22D3EE" />
          <rect x="83" y="41" width="15" height="3" rx="1.5" fill="#64748B" />
          <rect x="70" y="50" width="34" height="11" rx="2.5" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="77" cy="55.5" r="2" fill="#34D399" />
          <rect x="83" y="54" width="15" height="3" rx="1.5" fill="#64748B" />
          <rect x="70" y="63" width="34" height="11" rx="2.5" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="77" cy="68.5" r="2" fill="#22D3EE" />
          <rect x="83" y="67" width="15" height="3" rx="1.5" fill="#64748B" />
        </svg>
      );

    case '3.2.4':
      // Consent Manager: Interoperable portal + consent toggle/key + allow/deny badges
      return (
        <svg viewBox="0 0 120 84" className="w-28 h-20" aria-hidden="true">
          <rect
            x="18"
            y="18"
            width="66"
            height="48"
            rx="6"
            fill="#F1F5F9"
            stroke="#64748B"
            strokeWidth="2"
          />
          {/* Top bar */}
          <rect x="18" y="18" width="66" height="12" rx="4" fill="#1E293B" />
          <circle cx="26" cy="24" r="2" fill="#38BDF8" />
          <circle cx="33" cy="24" r="2" fill="#34D399" />
          {/* Consent Switch */}
          <rect x="52" y="15" width="48" height="18" rx="9" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="91" cy="24" r="6" fill="#FFFFFF" />
          {/* Deny / Withdraw circle */}
          <circle cx="34" cy="48" r="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
          <path d="M31 45l6 6M37 45l-6 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          {/* Lines */}
          <rect x="47" y="42" width="28" height="4" rx="2" fill="#475569" />
          <rect x="47" y="50" width="20" height="4" rx="2" fill="#94A3B8" />
          {/* Green Shield Check */}
          <path
            d="M88 38l16 5.5v13c0 10.5-6.5 18.5-16 22-9.5-3.5-16-11.5-16-22v-13L88 38z"
            fill="#10B981"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <path
            d="M82 57l4.5 4.5 9-9.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case '3.2.5':
      // Personal Data: Profile card + padlock + Personal Information badge
      return (
        <svg viewBox="0 0 120 84" className="w-28 h-20" aria-hidden="true">
          <rect
            x="24"
            y="14"
            width="64"
            height="48"
            rx="6"
            fill="#E0F2FE"
            stroke="#38BDF8"
            strokeWidth="2"
          />
          {/* Corner focus marks */}
          <path d="M18 22v-8h8M94 22v-8h-8M18 54v8h8" fill="none" stroke="#94A3B8" strokeWidth="2" />
          {/* Person Icon */}
          <circle cx="44" cy="30" r="6.5" fill="#0284C7" />
          <path d="M34 46c0-5 4.5-8.5 10-8.5s10 3.5 10 8.5" fill="#0284C7" />
          {/* Lines */}
          <rect x="59" y="25" width="22" height="4" rx="2" fill="#0369A1" />
          <rect x="59" y="33" width="18" height="4" rx="2" fill="#7DD3FC" />
          <rect x="59" y="41" width="20" height="4" rx="2" fill="#7DD3FC" />
          {/* Padlock */}
          <path d="M25 50v-4a6 6 0 0 1 12 0v4" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
          <rect x="21" y="50" width="20" height="16" rx="3" fill="#F59E0B" stroke="#FEF3C7" strokeWidth="1.5" />
          <circle cx="31" cy="58" r="2.2" fill="#78350F" />
          {/* Callout pill */}
          <rect x="46" y="53" width="52" height="18" rx="4" fill="#F8FAFC" stroke="#10B981" strokeWidth="2" />
          <circle cx="55" cy="62" r="4.5" fill="#F59E0B" />
          <text x="53.6" y="65" fontSize="8" fontWeight="bold" fill="#FFFFFF">!</text>
          <rect x="63" y="58.5" width="28" height="3" rx="1.5" fill="#0F172A" />
          <rect x="63" y="63.5" width="20" height="2.5" rx="1.2" fill="#64748B" />
        </svg>
      );

    case '3.2.6':
      // Processing: Circular lifecycle arrows around gear + cloud/db/doc nodes
      return (
        <svg viewBox="0 0 120 84" className="w-28 h-20" aria-hidden="true">
          {/* Circular cycle ring */}
          <circle
            cx="60"
            cy="42"
            r="26"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeDasharray="34 10"
          />
          <polygon points="86,38 92,46 80,46" fill="#38BDF8" />
          <polygon points="34,46 28,38 40,38" fill="#38BDF8" />
          {/* Central Gear */}
          <circle cx="60" cy="42" r="13" fill="#0284C7" stroke="#E0F2FE" strokeWidth="2" />
          <rect x="57.5" y="25" width="5" height="5" rx="1" fill="#0284C7" />
          <rect x="57.5" y="54" width="5" height="5" rx="1" fill="#0284C7" />
          <rect x="43" y="39.5" width="5" height="5" rx="1" fill="#0284C7" />
          <rect x="72" y="39.5" width="5" height="5" rx="1" fill="#0284C7" />
          <circle cx="60" cy="42" r="5" fill="#E0F2FE" />
          {/* Top Node: Cloud */}
          <circle cx="60" cy="14" r="9" fill="#1E293B" stroke="#7DD3FC" strokeWidth="1.5" />
          <path d="M55 16h10a3 3 0 0 0 0-6 4 4 0 0 0-7.5-1 2.5 2.5 0 0 0-2.5 7z" fill="#38BDF8" />
          {/* Left Node: Document */}
          <circle cx="28" cy="42" r="9" fill="#1E293B" stroke="#7DD3FC" strokeWidth="1.5" />
          <rect x="24" y="37" width="8" height="10" rx="1" fill="#E2E8F0" />
          {/* Right Node: Share/Storage */}
          <circle cx="92" cy="42" r="9" fill="#1E293B" stroke="#34D399" strokeWidth="1.5" />
          <ellipse cx="92" cy="39" rx="5" ry="2.2" fill="#34D399" />
          <path d="M87 39v6c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-6" fill="none" stroke="#34D399" strokeWidth="1.8" />
        </svg>
      );

    case '3.2.7':
    default:
      // Significant Data Fiduciary: Large enterprise HQ + flag + golden audit star + DPO shield
      return (
        <svg viewBox="0 0 120 84" className="w-28 h-20" aria-hidden="true">
          {/* Flag */}
          <line x1="60" y1="7" x2="60" y2="18" stroke="#94A3B8" strokeWidth="2" />
          <rect x="60" y="7" width="12" height="3" fill="#F97316" />
          <rect x="60" y="10" width="12" height="3" fill="#FFFFFF" />
          <rect x="60" y="13" width="12" height="3" fill="#16A34A" />
          {/* Building */}
          <rect x="38" y="18" width="44" height="52" rx="3" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
          <rect x="44" y="25" width="7" height="7" rx="1" fill="#0284C7" />
          <rect x="56" y="25" width="7" height="7" rx="1" fill="#0284C7" />
          <rect x="68" y="25" width="7" height="7" rx="1" fill="#0284C7" />
          <rect x="44" y="37" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="56" y="37" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="68" y="37" width="7" height="7" rx="1" fill="#38BDF8" />
          <rect x="53" y="54" width="14" height="16" rx="1" fill="#334155" />
          {/* Left Shield Badge */}
          <path
            d="M24 38l11 4v10c0 8-4.5 14-11 17-6.5-3-11-9-11-17V42l11-4z"
            fill="#10B981"
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />
          <path d="M20 53l3 3 6-6.5" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          {/* Right Star Seal + DPO badge */}
          <circle cx="94" cy="25" r="10" fill="#F59E0B" stroke="#FEF3C7" strokeWidth="2" />
          <polygon
            points="94,18 96,22.5 101,23 97.2,26.2 98.4,31 94,28.4 89.6,31 90.8,26.2 87,23 92,22.5"
            fill="#FFFFFF"
          />
          <rect x="78" y="52" width="30" height="16" rx="8" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="1.8" />
          <text x="93" y="63" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFFFFF">
            DPO
          </text>
        </svg>
      );
  }
}

export function DpdpDefinitionsDeck() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lockedIds, setLockedIds] = useState<string[]>([]);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const allRevealed = lockedIds.length === DPDP_DEFINITION_TOPICS.length;

  const toggleCardLock = (id: string) => {
    clearTimers();
    setLockedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleAllCascade = () => {
    clearTimers();
    if (allRevealed) {
      // Cascade-reset cards back to illustration fronts
      DPDP_DEFINITION_TOPICS.forEach((topic, idx) => {
        const timer = window.setTimeout(() => {
          setLockedIds((prev) => prev.filter((item) => item !== topic.id));
        }, idx * 75);
        timersRef.current.push(timer);
      });
    } else {
      // Cascade-flip all remaining cards open sequentially
      DPDP_DEFINITION_TOPICS.forEach((topic, idx) => {
        const timer = window.setTimeout(() => {
          setLockedIds((prev) =>
            prev.includes(topic.id) ? prev : [...prev, topic.id]
          );
        }, idx * 75);
        timersRef.current.push(timer);
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Topic Banner + Cascade Toggle */}
      <div className="bg-[#182233] border border-slate-600/70 rounded-sm p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Topic 3.2: Important Definitions Under the DPDP Act</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200">
            Key Roles &amp; Terms — Hover over any card to preview its statutory definition, or tap/click to lock it open.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs text-slate-300 tabular-nums">
            {lockedIds.length}/{DPDP_DEFINITION_TOPICS.length} Locked
          </span>
          <button
            type="button"
            onClick={handleToggleAllCascade}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
          >
            {allRevealed ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Cards</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Show All Definitions</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 7 Interactive 3D Flip Cards — 4 Top Row + 3 Centered Bottom Row on Desktop */}
      <div className="flex flex-wrap justify-center gap-4">
        {DPDP_DEFINITION_TOPICS.map((topic) => {
          const isLocked = lockedIds.includes(topic.id);
          const isFlipped = isLocked || hoveredId === topic.id;

          return (
            <button
              key={topic.id}
              type="button"
              aria-pressed={isLocked}
              aria-label={`${topic.sectionCode} ${topic.title}: ${topic.definition}`}
              onMouseEnter={() => setHoveredId(topic.id)}
              onMouseLeave={() =>
                setHoveredId((prev) => (prev === topic.id ? null : prev))
              }
              onClick={() => toggleCardLock(topic.id)}
              className="group relative w-full sm:w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.75rem)] h-64 text-left perspective-[1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE — Illustration & Topic Title */}
                <div className="absolute inset-0 backface-hidden bg-[#182233] border border-slate-600/80 group-hover:border-cyan-400/80 rounded-sm p-4 flex flex-col justify-between shadow-md shadow-black/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-cyan-300 bg-[#0B1927] border border-cyan-800/70 px-2 py-0.5 rounded-sm tabular-nums">
                      {topic.sectionCode}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      {topic.statutoryRef}
                    </span>
                  </div>

                  <div className="flex-1 flex items-center justify-center my-2 rounded-sm bg-[#101A28] border border-slate-700/70 p-2">
                    <TopicIllustration topicId={topic.id} />
                  </div>

                  <div className="space-y-1 text-center">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">
                      {topic.title}
                    </div>
                    <div className="font-mono text-[10px] text-cyan-300/85">
                      Hover or tap to reveal
                    </div>
                  </div>
                </div>

                {/* BACK FACE — Section Number, Title & Complete Definition */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0B2233] border border-cyan-400/85 rounded-sm p-4 flex flex-col justify-between shadow-lg shadow-black/30">
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-cyan-800/70">
                    <span className="font-mono text-[11px] font-semibold text-cyan-300 tabular-nums">
                      {topic.sectionCode} · {topic.statutoryRef}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-mono text-[10px] px-1.5 py-0.5 rounded-sm ${
                        isLocked
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/50'
                          : 'text-slate-300'
                      }`}
                    >
                      {isLocked ? (
                        <>
                          <Lock className="w-2.5 h-2.5" />
                          <span>Locked</span>
                        </>
                      ) : (
                        <>
                          <Unlock className="w-2.5 h-2.5" />
                          <span>Tap to lock</span>
                        </>
                      )}
                    </span>
                  </div>

                  <div className="flex-1 overflow-y-auto py-2 space-y-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-100 leading-relaxed">
                      {topic.definition}
                    </p>
                  </div>

                  <div className="pt-1.5 border-t border-cyan-900/70 flex items-center justify-between font-mono text-[10px] text-slate-300">
                    <span>DPDP Act, 2023</span>
                    <span className="text-cyan-300">
                      {isLocked ? 'Tap to close' : 'Tap to keep open'}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
