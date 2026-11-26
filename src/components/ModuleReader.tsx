import { useEffect, useState } from 'react';
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
import { AudienceRole, CourseView, UserProgress } from '../types/course';
import { StatusTag } from './StatusTag';
import { InlineModuleAssessment } from './InlineModuleAssessment';
import { DpdpDefinitionsDeck } from './DpdpDefinitionsDeck';

interface ModuleReaderProps {
  moduleId: number;
  progress: UserProgress;
  onSelectModule: (id: number) => void;
  onSelectUnit: (moduleId: number, unitIndex: number) => void;
  onToggleUnitComplete: (unitId: string) => void;
  onCompleteModuleUnits: (unitIds: string[]) => void;
  onSaveQuizScore: (quizId: string, score: number, total: number) => void;
  onToggleChecklistItem: (itemId: string) => void;
  onSelectRole: (role: AudienceRole) => void;
  onNavigate: (view: CourseView) => void;
}

type ModuleTab = 'units' | 'cases' | 'checklist';

export function ModuleReader({
  moduleId,
  progress,
  onSelectModule,
  onSelectUnit,
  onToggleUnitComplete,
  onCompleteModuleUnits,
  onSaveQuizScore,
  onToggleChecklistItem,
  onSelectRole,
  onNavigate,
}: ModuleReaderProps) {
  const mod = getModuleById(moduleId);
  const [activeTab, setActiveTab] = useState<ModuleTab>('units');
  const [selectedUnitIndex, setSelectedUnitIndex] = useState<number>(
    () => progress.lastUnitByModule[moduleId] ?? 0
  );
  const [revealedCaseIds, setRevealedCaseIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setActiveTab('units');
  }, [moduleId]);

  useEffect(() => {
    const savedIdx = progress.lastUnitByModule[moduleId] ?? 0;
    const bounded = Math.min(Math.max(0, savedIdx), mod.units.length - 1);
    setSelectedUnitIndex(bounded);
  }, [moduleId, mod.units.length, progress.lastUnitByModule]);

  const selectUnit = (idx: number) => {
    setSelectedUnitIndex(idx);
    onSelectUnit(moduleId, idx);
  };

  const activeUnit = mod.units[selectedUnitIndex] ?? mod.units[0];
  const isUnitCompleted = progress.completedUnitIds.includes(activeUnit.id);
  const modCompletedCount = mod.units.filter((u) =>
    progress.completedUnitIds.includes(u.id)
  ).length;
  const modPct = Math.round((modCompletedCount / mod.units.length) * 100);

  const toggleCaseReveal = (id: string) => {
    setRevealedCaseIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const jumpToEndAssessment = () => {
    setActiveTab('units');
    selectUnit(mod.units.length - 1);
    window.setTimeout(() => {
      document
        .getElementById('module-assessment')
        ?.scrollIntoView({ behavior: 'smooth' });
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

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
            {mod.commencementSummary}
          </p>
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
            onClick={() => setActiveTab('units')}
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
            onClick={() => setActiveTab('cases')}
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
              onClick={() => setActiveTab('checklist')}
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

        {/* Inline Role Lens Switcher */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mr-1">Lens:</span>
          {(['all', 'frontline', 'it', 'leadership'] as AudienceRole[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => onSelectRole(r)}
              className={`px-2 py-1 rounded-sm font-mono text-[11px] uppercase tracking-wider transition-colors ${
                progress.selectedRole === r
                  ? 'bg-cyan-800 dark:bg-cyan-500 text-white dark:text-slate-950 font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {r === 'all' ? 'All' : r === 'it' ? 'IT/Cyber' : r}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: Study Units Two-Zone Stage */}
      {activeTab === 'units' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Navigator — Consistent Deep Aqua-Navy Sidebar */}
          <aside className="lg:col-span-4 bg-[#081722] border border-cyan-800/70 shadow-lg shadow-black/20 dark:shadow-black/35 rounded-sm overflow-hidden">
            <div className="px-4 py-3.5 border-b border-cyan-900/70 bg-[#051018] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  Module {mod.id} Syllabus
                </span>
                <span className="font-mono text-xs text-white font-semibold tabular-nums">
                  {modCompletedCount}/{mod.units.length} ({modPct}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-sm overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    modPct === 100
                      ? 'bg-emerald-400'
                      : 'bg-cyan-400'
                  }`}
                  style={{ width: `${modPct}%` }}
                />
              </div>
            </div>
            <div className="divide-y divide-slate-800/90 max-h-[620px] overflow-y-auto">
              {mod.units.map((unit, idx) => {
                const done = progress.completedUnitIds.includes(unit.id);
                const selected = idx === selectedUnitIndex;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => selectUnit(idx)}
                    className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                      selected
                        ? 'bg-[#113C54]'
                        : 'bg-transparent hover:bg-[#0D283A]'
                    }`}
                  >
                    <span className="mt-0.5 shrink-0">
                      {done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle
                          className={`w-4 h-4 ${
                            selected
                              ? 'text-cyan-300'
                              : 'text-slate-400/75'
                          }`}
                        />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-slate-300/85 tabular-nums">
                        <span
                          className={
                            selected
                              ? 'text-cyan-300 font-semibold'
                              : 'text-cyan-200/85'
                          }
                        >
                          {unit.code}
                        </span>
                        <span>{unit.durationMinutes} min</span>
                      </div>
                      <div
                        className={`text-sm leading-snug mt-0.5 ${
                          selected
                            ? 'font-semibold text-white'
                            : 'font-medium text-slate-100'
                        }`}
                      >
                        {unit.title}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Assessment entry immediately following the last session in syllabus */}
              <button
                type="button"
                onClick={jumpToEndAssessment}
                className="w-full text-left px-4 py-3 flex items-start gap-3 transition-colors border-t border-cyan-900/70 bg-[#051018]/90 hover:bg-[#0D283A]"
              >
                <span className="mt-0.5 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-cyan-300" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[11px] text-cyan-300 font-semibold uppercase tracking-wider">
                    End-of-Module Assessment
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Included immediately after {mod.units[mod.units.length - 1]?.code}
                  </div>
                </div>
              </button>
            </div>
          </aside>

          {/* Right Unit Reading Stage — Consistent Elevated Steel-Slate Surface */}
          <main className="lg:col-span-8 bg-[#243044] border border-slate-600/80 shadow-lg shadow-black/15 dark:shadow-black/25 rounded-sm p-6 sm:p-8 space-y-6">
            <div className="space-y-3 border-b border-slate-700/80 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-slate-300 tabular-nums">
                  <span className="font-semibold text-cyan-300 uppercase">
                    {activeUnit.code}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeUnit.durationMinutes} minutes</span>
                  <span aria-hidden="true">·</span>
                  <StatusTag status={activeUnit.status} onDarkSurface />
                </div>

                <button
                  type="button"
                  onClick={() => onToggleUnitComplete(activeUnit.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-sm border transition-colors ${
                    isUnitCompleted
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700'
                      : 'bg-[#182233] text-slate-100 border-slate-500 hover:border-slate-400'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isUnitCompleted ? 'Completed' : 'Mark Complete'}</span>
                </button>
              </div>

              <h2 className="font-display text-2xl font-semibold text-white leading-snug">
                {activeUnit.title}
              </h2>

              <div className="font-mono text-xs text-slate-300">
                Citations: <span className="text-slate-100">{activeUnit.statutoryCitations.join(' · ')}</span>
              </div>
            </div>

            {activeUnit.id === 'm1-s3' ? (
              <DpdpDefinitionsDeck />
            ) : (
              <>
                {/* Core Concept Summary */}
                <div className="space-y-4">
                  <p className="text-[15px] text-slate-100 leading-relaxed">
                    {activeUnit.summary}
                  </p>

                  <div className="space-y-2">
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Key Statutory &amp; Operational Rules
                    </h3>
                    <ul className="space-y-2.5">
                      {activeUnit.keyPoints.map((pt, i) => (
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
                    {activeUnit.bfsiApplication}
                  </p>
                </div>

                {/* Comparison Table (if any) */}
                {activeUnit.table && (
                  <div className="space-y-2.5">
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {activeUnit.table.title}
                    </h3>
                    <div className="overflow-x-auto border border-slate-600/70 rounded-sm">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#182233] border-b border-slate-600/70">
                            {activeUnit.table.columns.map((col, idx) => (
                              <th
                                key={idx}
                                className="px-3.5 py-2.5 font-semibold text-white"
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700/80 bg-[#243044]">
                          {activeUnit.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-700/35">
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
                {activeUnit.roleNotes && (
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
                            text: activeUnit.roleNotes.frontline,
                          },
                          {
                            key: 'it',
                            label: 'IT & Cybersecurity',
                            icon: Cpu,
                            text: activeUnit.roleNotes.it,
                          },
                          {
                            key: 'leadership',
                            label: 'Leadership & Board',
                            icon: Briefcase,
                            text: activeUnit.roleNotes.leadership,
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
                          const highlighted = progress.selectedRole === item.key;
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
                disabled={selectedUnitIndex === 0}
                onClick={() => selectUnit(Math.max(0, selectedUnitIndex - 1))}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border border-slate-500 bg-[#182233] rounded-sm text-slate-100 hover:bg-slate-700/70 disabled:opacity-40 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Unit</span>
              </button>

              {selectedUnitIndex < mod.units.length - 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (!isUnitCompleted) {
                      onToggleUnitComplete(activeUnit.id);
                    }
                    selectUnit(Math.min(mod.units.length - 1, selectedUnitIndex + 1));
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
                    if (!isUnitCompleted) {
                      onToggleUnitComplete(activeUnit.id);
                    }
                    document
                      .getElementById('module-assessment')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-sm"
                >
                  <span>Complete &amp; Take Module {mod.id} Quiz</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Assessment appears immediately after the last session within the same module content section */}
            {selectedUnitIndex === mod.units.length - 1 && (
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
            )}
          </main>
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
