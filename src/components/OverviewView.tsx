import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  FlaskConical,
  Scale,
  Users,
  Cpu,
  Briefcase,
  Layers,
} from 'lucide-react';
import { COURSE_MODULES, COURSE_REFERENCE_DATE } from '../data/courseIndex';
import { COMMENCEMENT_MILESTONES } from '../data/legalReferenceData';
import { AudienceRole, CourseView, UserProgress } from '../types/course';
import { StatusTag } from './StatusTag';

interface OverviewViewProps {
  progress: UserProgress;
  onSelectModule: (moduleId: number) => void;
  onSelectRole: (role: AudienceRole) => void;
  onNavigate: (view: CourseView) => void;
}

const ROLE_OPTIONS: {
  id: AudienceRole;
  label: string;
  desc: string;
  icon: typeof Users;
}[] = [
  {
    id: 'all',
    label: 'All Functions',
    desc: 'Complete statutory, technical, and governance perspective across all BFSI teams.',
    icon: Layers,
  },
  {
    id: 'frontline',
    label: 'Frontline Operations',
    desc: 'Branch tellers, relationship managers, claims desks, and contact centres.',
    icon: Users,
  },
  {
    id: 'it',
    label: 'IT & Cybersecurity',
    desc: 'Consent APIs, 1-yr SIEM logging, encryption, erasure reconciliation, and AI model checks.',
    icon: Cpu,
  },
  {
    id: 'leadership',
    label: 'Leadership & Board',
    desc: 'DPO oversight, 12-month DPIA/Audit cycles, TPRM contracts, and Board KPIs.',
    icon: Briefcase,
  },
];

export function OverviewView({
  progress,
  onSelectModule,
  onSelectRole,
  onNavigate,
}: OverviewViewProps) {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('phase-2');

  const totalUnits = COURSE_MODULES.reduce((sum, m) => sum + m.units.length, 0);
  const completedCount = progress.completedUnitIds.length;
  const activeMilestone =
    COMMENCEMENT_MILESTONES.find((m) => m.id === selectedPhaseId) ??
    COMMENCEMENT_MILESTONES[1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Hero Banner */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="lg:col-span-8 space-y-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-cyan-800 dark:text-cyan-400 uppercase tracking-wider">
              BFSI Compliance Curriculum
            </span>
            <span aria-hidden="true">·</span>
            <span>Calibrated {COURSE_REFERENCE_DATE}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">6 Modules / {totalUnits} Units</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-950 dark:text-white tracking-tight leading-[1.15]">
            Digital Personal Data Protection Act, 2023 &amp; DPDP Rules, 2025
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Structured regulatory training for Banking, Financial Services, and Insurance teams—bridging statutory foundations, consent engineering, erasure reconciliation, vulnerable customer safeguards, third-party security, and Significant Data Fiduciary governance.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onSelectModule(progress.activeModuleId)}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
            >
              <span>
                {completedCount > 0
                  ? `Continue Module ${progress.activeModuleId}`
                  : 'Start Module 1'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('labs')}
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 text-sm font-medium px-4 py-2.5 rounded-sm transition-colors"
            >
              <FlaskConical className="w-4 h-4 text-cyan-800 dark:text-cyan-400" />
              <span>Open Interactive Labs</span>
            </button>
          </div>
        </div>

        {/* Right Telemetry Summary Box */}
        <div className="lg:col-span-4 bg-white/82 dark:bg-slate-900/82 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xs rounded-sm p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
              Your Study Telemetry
            </span>
            <span className="font-mono text-xs font-semibold text-cyan-800 dark:text-cyan-400 tabular-nums">
              {completedCount} / {totalUnits} Units
            </span>
          </div>

          <div className="space-y-2">
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden">
              <div
                className="h-full bg-cyan-700 dark:bg-cyan-400 transition-all duration-300"
                style={{
                  width: `${totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0}%`,
                }}
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 tabular-nums">
              {Object.keys(progress.quizBestScores).length} of 6 module assessments attempted
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span>Board &amp; Rule 4 Consent Managers</span>
              </span>
              <span className="font-mono font-semibold text-emerald-800 dark:text-emerald-400">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-cyan-800 dark:text-cyan-400" />
                <span>RBI / SEBI / IRDAI / CERT-In / PMLA</span>
              </span>
              <span className="font-mono font-semibold text-cyan-800 dark:text-cyan-400">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                <span>DPDP Sec 3–17 &amp; Rules 3, 5–16</span>
              </span>
              <span className="font-mono font-semibold text-amber-800 dark:text-amber-400">MAY 2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Tailoring Bar */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Role-Based Study Lens
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tailor module takeaways to your operational responsibilities across branches, engineering, or governance.
            </p>
          </div>
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
            Active lens: <strong className="text-slate-900 dark:text-white uppercase">{progress.selectedRole}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ROLE_OPTIONS.map((role) => {
            const Icon = role.icon;
            const selected = progress.selectedRole === role.id;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => onSelectRole(role.id)}
                className={`text-left p-4 rounded-sm border transition-colors ${
                  selected
                    ? 'bg-slate-900 dark:bg-cyan-950/80 text-white border-slate-900 dark:border-cyan-500'
                    : 'bg-white/85 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    className={`w-4 h-4 ${selected ? 'text-cyan-300' : 'text-cyan-800 dark:text-cyan-400'}`}
                  />
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      selected ? 'text-cyan-300' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {selected ? 'Selected' : 'Select'}
                  </span>
                </div>
                <div className="text-sm font-semibold">{role.label}</div>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    selected ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {role.desc}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive Phased Commencement Timeline */}
      <section className="bg-white/82 dark:bg-slate-900/82 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xs rounded-sm p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Statutory Phased Commencement Schedule
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              Select a commencement milestone relative to <span className="font-mono text-slate-800 dark:text-slate-200">{COURSE_REFERENCE_DATE}</span> to verify what is legally enforceable today versus May 2027.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('reference')}
            className="text-xs font-semibold text-cyan-800 dark:text-cyan-400 hover:text-cyan-950 dark:hover:text-cyan-300 inline-flex items-center gap-1 shrink-0"
          >
            <span>Full Statutory Index</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {COMMENCEMENT_MILESTONES.map((milestone) => {
            const active = milestone.id === activeMilestone.id;
            return (
              <button
                key={milestone.id}
                type="button"
                onClick={() => setSelectedPhaseId(milestone.id)}
                className={`text-left p-4 rounded-sm border transition-colors ${
                  active
                    ? 'border-cyan-700 dark:border-cyan-400 bg-cyan-50/60 dark:bg-cyan-950/40'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/40 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                    {milestone.dateLabel}
                  </span>
                  <StatusTag status={milestone.status} compact />
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {milestone.phase}
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-sm p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          <div className="md:col-span-6 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Activated Provisions
              </span>
              <StatusTag status={activeMilestone.status} compact />
            </div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              {activeMilestone.provisions}
            </p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Ref: {activeMilestone.notificationRef}
            </p>
          </div>
          <div className="md:col-span-6 space-y-1.5 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-3 md:pt-0 md:pl-4">
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
              BFSI Operational Action
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeMilestone.bfsiOperationalImpact}
            </p>
          </div>
        </div>
      </section>

      {/* 6-Module Curriculum Grid */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
              Six-Module Core Curriculum
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              Select any module to study sessions, statutory comparison tables, illustrative BFSI case studies, and end-of-module assessments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSE_MODULES.map((mod) => {
            const modCompleted = mod.units.filter((u) =>
              progress.completedUnitIds.includes(u.id)
            ).length;
            const modPct = Math.round((modCompleted / mod.units.length) * 100);
            const bestQuiz = progress.quizBestScores[`quiz-m${mod.id}`];

            return (
              <article
                key={mod.id}
                className="bg-white/82 dark:bg-slate-900/82 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xs rounded-sm p-5 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <div className="space-y-3">
                  {/* Zero-pill inline metadata */}
                  <div className="flex items-center justify-between gap-2 font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                    <span className="font-semibold text-cyan-800 dark:text-cyan-400 uppercase tracking-wider">
                      Module {mod.id}
                    </span>
                    <span>
                      {mod.unitCountLabel} · {mod.durationLabel}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white leading-snug">
                    {mod.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {mod.subtitle}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                      Primary Statutes
                    </span>
                    <span>{mod.primaryStatutes.slice(0, 4).join(' · ')}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                    <span className="text-slate-600 dark:text-slate-400">
                      {modCompleted}/{mod.units.length} units ({modPct}%)
                    </span>
                    {bestQuiz ? (
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                        Quiz: {bestQuiz.score}/{bestQuiz.total}
                      </span>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-500">Quiz pending</span>
                    )}
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-cyan-700 dark:bg-cyan-400 transition-all duration-300"
                      style={{ width: `${modPct}%` }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectModule(mod.id)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-900 dark:hover:bg-cyan-500 text-slate-900 dark:text-slate-100 hover:text-white dark:hover:text-slate-950 border border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-cyan-500 text-xs font-semibold rounded-sm transition-colors"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open Module {mod.id}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
