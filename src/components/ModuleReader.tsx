import { useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  FlaskConical,
  ShieldCheck,
  Users,
  Cpu,
  Briefcase,
} from 'lucide-react';
import { getModuleById } from '../data/courseIndex';
import { CourseView, UserProgress } from '../types/course';
import { ModuleTab } from '../utils/router';
import { StatusTag } from './StatusTag';
import { InlineModuleAssessment } from './InlineModuleAssessment';
import { DpdpDefinitionsDeck } from './DpdpDefinitionsDeck';

interface ModuleReaderProps {
  moduleId: number;
  progress: UserProgress;
  activeTab: ModuleTab;
  expandedUnitIndex: number | null;
  isAssessmentOpen: boolean;
  onSelectModule: (id: number) => void;
  onSelectUnit: (moduleId: number, unitIndex: number | null) => void;
  onChangeTab: (moduleId: number, tab: ModuleTab) => void;
  onToggleAssessment: (moduleId: number, open: boolean) => void;
  onToggleUnitComplete: (unitId: string) => void;
  onCompleteModuleUnits: (unitIds: string[]) => void;
  onSaveQuizScore: (quizId: string, score: number, total: number) => void;
  onToggleChecklistItem: (itemId: string) => void;
  onNavigate: (view: CourseView) => void;
}

export function ModuleReader({
  moduleId,
  progress,
  activeTab,
  expandedUnitIndex,
  isAssessmentOpen,
  onSelectModule,
  onSelectUnit,
  onChangeTab,
  onToggleAssessment,
  onToggleUnitComplete,
  onCompleteModuleUnits,
  onSaveQuizScore,
  onToggleChecklistItem,
  onNavigate,
}: ModuleReaderProps) {
  const mod = getModuleById(moduleId);
  const [revealedCaseIds, setRevealedCaseIds] = useState<Record<string, boolean>>({});
  const unitRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const assessmentRef = useRef<HTMLDivElement | null>(null);

  const openUnitAt = (idx: number) => {
    onSelectUnit(moduleId, idx);
    window.setTimeout(() => {
      unitRowRefs.current[idx]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 40);
  };

  const toggleUnitAccordion = (idx: number) => {
    if (expandedUnitIndex === idx) {
      onSelectUnit(moduleId, null);
    } else {
      openUnitAt(idx);
    }
  };

  const modCompletedCount = mod.units.filter((u) =>
    progress.completedUnitIds.includes(u.id)
  ).length;
  const modPct = Math.round((modCompletedCount / mod.units.length) * 100);

  const toggleCaseReveal = (id: string) => {
    setRevealedCaseIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const jumpToEndAssessment = () => {
    onToggleAssessment(moduleId, true);
    window.setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* Top Module Switcher & Breadcrumb Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
            <button
              type="button"
              onClick={() => onNavigate('overview')}
              className="inline-flex items-center gap-1 text-cyan-800 hover:text-cyan-950 dark:text-cyan-400 dark:hover:text-cyan-300 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Curriculum</span>
            </button>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100 uppercase">
              Module {mod.id} of 6
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {mod.unitCountLabel} · {mod.durationLabel}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950 dark:text-white tracking-tight">
            {mod.title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('labs')}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 dark:text-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 rounded-sm"
          >
            <FlaskConical className="w-3.5 h-3.5 text-cyan-800 dark:text-cyan-400" />
            <span>Open Lab</span>
          </button>
          <button
            type="button"
            onClick={jumpToEndAssessment}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 rounded-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Module {mod.id} Quiz</span>
          </button>
        </div>
      </div>

      {/* Mode Tabs + Role Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm px-4 py-2.5">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onChangeTab(mod.id, 'units')}
            className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
              activeTab === 'units'
                ? 'border-cyan-700 dark:border-cyan-400 text-slate-950 dark:text-white font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            }`}
          >
            Study Units ({mod.units.length})
          </button>
          <button
            type="button"
            onClick={() => onChangeTab(mod.id, 'cases')}
            className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
              activeTab === 'cases'
                ? 'border-cyan-700 dark:border-cyan-400 text-slate-950 dark:text-white font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            }`}
          >
            Case Studies ({mod.caseStudies.length})
          </button>
          {mod.checklist && mod.checklist.length > 0 && (
            <button
              type="button"
              onClick={() => onChangeTab(mod.id, 'checklist')}
              className={`text-sm font-medium py-1.5 border-b-2 transition-colors ${
                activeTab === 'checklist'
                  ? 'border-cyan-700 dark:border-cyan-400 text-slate-950 dark:text-white font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              12-Point Checklist
            </button>
          )}
        </div>
      </div>

      {/* TAB 1: Accordion Study Units — Stacked Rows with Dropdown Arrows */}
      {activeTab === 'units' && (
        <div className="space-y-3">
          {/* Module Syllabus Progress Header */}
          <div className="bg-[#051018] border border-cyan-800/70 rounded-sm px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Module {mod.id} Syllabus
              </span>
              <span className="text-xs text-slate-300">
                Click any session row to expand its details
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-white font-semibold tabular-nums">
                {modCompletedCount}/{mod.units.length} ({modPct}%)
              </span>
              <div className="w-28 sm:w-44 h-1.5 bg-slate-800 rounded-sm overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    modPct === 100 ? 'bg-emerald-400' : 'bg-cyan-400'
                  }`}
                  style={{ width: `${modPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Session Dropdown Rows — One Below the Other */}
          <div className="space-y-2.5">
            {mod.units.map((unit, idx) => {
              const done = progress.completedUnitIds.includes(unit.id);
              const isOpen = expandedUnitIndex === idx;

              return (
                <div
                  key={unit.id}
                  ref={(el) => {
                    unitRowRefs.current[idx] = el;
                  }}
                  className={`rounded-sm border overflow-hidden transition-colors shadow-sm dark:shadow-black/25 ${
                    isOpen
                      ? 'border-cyan-400/80'
                      : 'border-cyan-800/70'
                  }`}
                >
                  {/* Accordion Header Row — Deep Aqua-Navy */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleUnitAccordion(idx)}
                    className={`w-full text-left px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4 transition-colors ${
                      isOpen
                        ? 'bg-[#113C54]'
                        : 'bg-[#081722] hover:bg-[#0D283A]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="shrink-0">
                        {done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Circle
                            className={`w-4 h-4 ${
                              isOpen ? 'text-cyan-300' : 'text-slate-400/75'
                            }`}
                          />
                        )}
                      </span>

                      <span
                        className={`font-mono text-xs shrink-0 tabular-nums ${
                          isOpen
                            ? 'text-cyan-300 font-semibold'
                            : 'text-cyan-200/85'
                        }`}
                      >
                        {unit.code}
                      </span>

                      <span
                        className={`text-sm sm:text-[15px] truncate ${
                          isOpen
                            ? 'font-semibold text-white'
                            : 'font-medium text-slate-100'
                        }`}
                      >
                        {unit.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs text-slate-300 tabular-nums">
                        {unit.durationMinutes} min
                      </span>
                      <span className="p-1 rounded-sm bg-[#051018]/60 border border-cyan-800/60 text-cyan-300">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </div>
                  </button>

                  {/* Dropdown Content Body — Elevated Steel-Slate Surface */}
                  {isOpen && (
                    <div className="bg-[#243044] border-t border-cyan-800/70 p-6 sm:p-8 space-y-6">
                      <div className="space-y-3 border-b border-slate-700/80 pb-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-slate-300 tabular-nums">
                            <span className="font-semibold text-cyan-300 uppercase">
                              {unit.code}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{unit.durationMinutes} minutes</span>
                            <span aria-hidden="true">·</span>
                            <StatusTag status={unit.status} onDarkSurface />
                          </div>

                          <button
                            type="button"
                            onClick={() => onToggleUnitComplete(unit.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-sm border transition-colors ${
                              done
                                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700'
                                : 'bg-[#182233] text-slate-100 border-slate-500 hover:border-slate-400'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{done ? 'Completed' : 'Mark Complete'}</span>
                          </button>
                        </div>

                        <h2 className="font-display text-2xl font-semibold text-white leading-snug">
                          {unit.title}
                        </h2>

                        <div className="font-mono text-xs text-slate-300">
                          Citations:{' '}
                          <span className="text-slate-100">
                            {unit.statutoryCitations.join(' · ')}
                          </span>
                        </div>
                      </div>

                      {unit.id === 'm1-s3' ? (
                        <DpdpDefinitionsDeck />
                      ) : (
                        <>
                          {/* Core Concept Summary */}
                          <div className="space-y-4">
                            <p className="text-[15px] text-slate-100 leading-relaxed">
                              {unit.summary}
                            </p>

                            <div className="space-y-2">
                              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                                Key Statutory &amp; Operational Rules
                              </h3>
                              <ul className="space-y-2.5">
                                {unit.keyPoints.map((pt, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-sm text-slate-200 leading-relaxed"
                                  >
                                    <span className="font-mono text-xs text-cyan-300 font-semibold mt-0.5 tabular-nums">
                                      {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* BFSI Operational Application */}
                          <div className="bg-[#182233] border border-slate-600/70 rounded-sm p-4 space-y-1.5">
                            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-cyan-300 block">
                              BFSI Operational Practice
                            </span>
                            <p className="text-sm text-slate-100 leading-relaxed">
                              {unit.bfsiApplication}
                            </p>
                          </div>

                          {/* Comparison Table (if any) */}
                          {unit.table && (
                            <div className="space-y-2.5">
                              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                                {unit.table.title}
                              </h3>
                              <div className="overflow-x-auto border border-slate-600/70 rounded-sm">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                  <thead>
                                    <tr className="bg-[#182233] border-b border-slate-600/70">
                                      {unit.table.columns.map((col, cIdx) => (
                                        <th
                                          key={cIdx}
                                          className="px-3.5 py-2.5 font-semibold text-white"
                                        >
                                          {col}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-700/80 bg-[#243044]">
                                    {unit.table.rows.map((row, rIdx) => (
                                      <tr
                                        key={rIdx}
                                        className="hover:bg-slate-700/35"
                                      >
                                        {row.map((cell, cIdx) => (
                                          <td
                                            key={cIdx}
                                            className={`px-3.5 py-2.5 align-top leading-relaxed ${
                                              cIdx === 0
                                                ? 'font-medium text-white'
                                                : 'text-slate-200'
                                            }`}
                                          >
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}

                          {/* Role-Specific Takeaways */}
                          {unit.roleNotes && (
                            <div className="space-y-2.5 pt-2 border-t border-slate-700/80">
                              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                                Role Accountability Breakdown
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {(
                                  [
                                    {
                                      key: 'frontline',
                                      label: 'Frontline Operations',
                                      icon: Users,
                                      text: unit.roleNotes.frontline,
                                    },
                                    {
                                      key: 'it',
                                      label: 'IT & Cybersecurity',
                                      icon: Cpu,
                                      text: unit.roleNotes.it,
                                    },
                                    {
                                      key: 'leadership',
                                      label: 'Leadership & Board',
                                      icon: Briefcase,
                                      text: unit.roleNotes.leadership,
                                    },
                                  ] as const
                                )
                                  .filter(
                                    (item) =>
                                      progress.selectedRole === 'all' ||
                                      progress.selectedRole === item.key
                                  )
                                  .map((item) => {
                                    const Icon = item.icon;
                                    const highlighted =
                                      progress.selectedRole === item.key;
                                    return (
                                      <div
                                        key={item.key}
                                        className={`p-3.5 rounded-sm border ${
                                          highlighted
                                            ? 'border-cyan-400 bg-cyan-950/55'
                                            : 'border-slate-600/70 bg-[#182233]'
                                        }`}
                                      >
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-white mb-1.5">
                                          <Icon className="w-3.5 h-3.5 text-cyan-300" />
                                          <span>{item.label}</span>
                                        </div>
                                        <p className="text-xs text-slate-200 leading-relaxed">
                                          {item.text}
                                        </p>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* Unit Footer Navigation */}
                      <div className="flex items-center justify-between pt-5 border-t border-slate-700/80">
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => openUnitAt(Math.max(0, idx - 1))}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border border-slate-500 bg-[#182233] rounded-sm text-slate-100 hover:bg-slate-700/70 disabled:opacity-40 disabled:pointer-events-none"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Previous Unit</span>
                        </button>

                        {idx < mod.units.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (!done) {
                                onToggleUnitComplete(unit.id);
                              }
                              openUnitAt(Math.min(mod.units.length - 1, idx + 1));
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-sm"
                          >
                            <span>Complete &amp; Next Unit</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              if (!done) {
                                onToggleUnitComplete(unit.id);
                              }
                              jumpToEndAssessment();
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-sm"
                          >
                            <span>Complete &amp; Take Module {mod.id} Quiz</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* End-of-Module Assessment Accordion Row */}
            <div
              ref={assessmentRef}
              className={`rounded-sm border overflow-hidden transition-colors shadow-sm dark:shadow-black/25 ${
                isAssessmentOpen ? 'border-cyan-400/80' : 'border-cyan-800/70'
              }`}
            >
              <button
                type="button"
                aria-expanded={isAssessmentOpen}
                onClick={() => onToggleAssessment(mod.id, !isAssessmentOpen)}
                className={`w-full text-left px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4 transition-colors ${
                  isAssessmentOpen
                    ? 'bg-[#113C54]'
                    : 'bg-[#051018] hover:bg-[#0D283A]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 shrink-0">
                    End-of-Module Assessment
                  </span>
                  <span className="text-sm font-medium text-slate-200 truncate">
                    Module {mod.id} Knowledge Check &amp; Verification
                  </span>
                </div>

                <span className="p-1 rounded-sm bg-[#081722] border border-cyan-800/60 text-cyan-300 shrink-0">
                  {isAssessmentOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>

              {isAssessmentOpen && (
                <div className="bg-[#243044] border-t border-cyan-800/70 p-6 sm:p-8">
                  <InlineModuleAssessment
                    moduleId={mod.id}
                    modTitle={mod.title}
                    completedCount={modCompletedCount}
                    totalUnits={mod.units.length}
                    progress={progress}
                    onSaveQuizScore={onSaveQuizScore}
                    onCompleteModuleUnits={() =>
                      onCompleteModuleUnits(mod.units.map((u) => u.id))
                    }
                    onProceedNextModule={
                      mod.id < 6 ? () => onSelectModule(mod.id + 1) : undefined
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Illustrative BFSI Case Studies */}
      {activeTab === 'cases' && (
        <div className="space-y-5">
          <div className="bg-slate-50 dark:bg-slate-900/84 border border-slate-200 dark:border-slate-700/80 rounded-sm p-4 text-xs text-slate-600 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-white">Teaching Note:</strong> All scenarios below are illustrative hypothetical BFSI teaching cases designed to test statutory reasoning under the DPDP Act 2023, DPDP Rules 2025, and active sectoral regulations.
          </div>

          <div className="space-y-4">
            {mod.caseStudies.map((cs, idx) => {
              const open = !!revealedCaseIds[cs.id];
              return (
                <article
                  key={cs.id}
                  className="bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-5 sm:p-6 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-cyan-800 dark:text-cyan-400 uppercase">
                        Case {mod.id}.{idx + 1}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{cs.sector}</span>
                      <span aria-hidden="true">·</span>
                      <StatusTag status={cs.statusNote} compact />
                    </div>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {cs.keyCitation}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                    {cs.title}
                  </h3>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {cs.scenario}
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleCaseReveal(cs.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-900 hover:text-cyan-950 border border-cyan-300 bg-cyan-50/70 dark:text-cyan-300 dark:hover:text-cyan-200 dark:border-cyan-700 dark:bg-cyan-950/60 px-3 py-1.5 rounded-sm"
                    >
                      <span>
                        {open ? 'Hide Legal Analysis' : 'Reveal Legal Issue & Expected Approach'}
                      </span>
                      {open ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {open && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="bg-amber-50/50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/70 rounded-sm p-3.5 space-y-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-amber-900 dark:text-amber-300">
                          Core Legal Issue
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                          {cs.legalIssue}
                        </p>
                      </div>
                      <div className="bg-emerald-50/50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/70 rounded-sm p-3.5 space-y-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-emerald-900 dark:text-emerald-300">
                          Expected Compliant Approach
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                          {cs.expectedApproach}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: Module 3 12-Point Operational Checklist */}
      {activeTab === 'checklist' && mod.checklist && (
        <div className="bg-white/84 dark:bg-slate-900/84 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-xs rounded-sm p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                Module 3 Readiness Verification Checklist (12 Controls)
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Track implementation progress across lifecycle inventory, retention rules, legal holds, and disaster recovery replay.
              </p>
            </div>
            <span className="font-mono text-xs font-semibold text-cyan-800 dark:text-cyan-400 tabular-nums">
              {
                mod.checklist.filter((item) =>
                  progress.completedChecklistIds.includes(item.id)
                ).length
              }{' '}
              / {mod.checklist.length} Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {mod.checklist.map((item, idx) => {
              const checked = progress.completedChecklistIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onToggleChecklistItem(item.id)}
                  className={`text-left p-4 rounded-sm border flex items-start gap-3 transition-colors ${
                    checked
                      ? 'border-emerald-300 bg-emerald-50/40 dark:border-emerald-700 dark:bg-emerald-950/35'
                      : 'border-slate-200 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950/50 dark:hover:border-slate-500'
                  }`}
                >
                  <span className="mt-0.5 shrink-0">
                    {checked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    )}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400 mr-1.5 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
