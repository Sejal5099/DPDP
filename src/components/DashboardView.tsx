import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Clock,
  FlaskConical,
  RotateCcw,
  Search,
} from 'lucide-react';
import { COURSE_MODULES } from '../data/courseIndex';
import { QUIZ_PACKS } from '../data/assessmentsData';
import { CourseView, UserProgress } from '../types/course';

interface DashboardViewProps {
  progress: UserProgress;
  onSelectModule: (moduleId: number, unitIndex?: number) => void;
  onNavigate: (view: CourseView) => void;
  onResetProgress: () => void;
}

type ModuleFilterStatus = 'all' | 'completed' | 'in-progress' | 'not-started';

function formatMinutesToHours(totalMins: number): string {
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return `${h}h ${String(m).padStart(2, '0')}m`;
}

export function DashboardView({
  progress,
  onSelectModule,
  onNavigate,
  onResetProgress,
}: DashboardViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ModuleFilterStatus>('all');
  const [confirmReset, setConfirmReset] = useState(false);

  const metrics = useMemo(() => {
    const allUnits = COURSE_MODULES.flatMap((m) => m.units);
    const totalUnits = allUnits.length;
    const completedUnits = allUnits.filter((u) =>
      progress.completedUnitIds.includes(u.id)
    );
    const completedCount = completedUnits.length;
    const overallPct =
      totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0;

    const totalMinutes = allUnits.reduce((sum, u) => sum + u.durationMinutes, 0);
    const completedMinutes = completedUnits.reduce(
      (sum, u) => sum + u.durationMinutes,
      0
    );

    const attemptedQuizzes = QUIZ_PACKS.filter(
      (p) => progress.quizBestScores[p.id] !== undefined
    );
    const totalQuizEarned = attemptedQuizzes.reduce(
      (sum, p) => sum + (progress.quizBestScores[p.id]?.score ?? 0),
      0
    );
    const totalQuizPossible = attemptedQuizzes.reduce(
      (sum, p) => sum + (progress.quizBestScores[p.id]?.total ?? 0),
      0
    );
    const avgQuizPct =
      totalQuizPossible > 0
        ? Math.round((totalQuizEarned / totalQuizPossible) * 100)
        : 0;

    return {
      totalUnits,
      completedCount,
      overallPct,
      totalMinutes,
      completedMinutes,
      attemptedCount: attemptedQuizzes.length,
      avgQuizPct,
    };
  }, [progress]);

  const moduleRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return COURSE_MODULES.map((mod) => {
      const doneUnits = mod.units.filter((u) =>
        progress.completedUnitIds.includes(u.id)
      );
      const doneCount = doneUnits.length;
      const pct = Math.round((doneCount / mod.units.length) * 100);
      const totalMins = mod.units.reduce((s, u) => s + u.durationMinutes, 0);
      const doneMins = doneUnits.reduce((s, u) => s + u.durationMinutes, 0);
      const quiz = progress.quizBestScores[`quiz-m${mod.id}`];

      const status: Exclude<ModuleFilterStatus, 'all'> =
        doneCount === 0
          ? 'not-started'
          : doneCount === mod.units.length
            ? 'completed'
            : 'in-progress';

      const nextIncompleteIdx = mod.units.findIndex(
        (u) => !progress.completedUnitIds.includes(u.id)
      );
      const resumeIdx =
        progress.lastUnitByModule[mod.id] ??
        (nextIncompleteIdx >= 0 ? nextIncompleteIdx : 0);

      return {
        mod,
        doneCount,
        pct,
        totalMins,
        doneMins,
        quiz,
        status,
        resumeIdx,
      };
    }).filter((row) => {
      if (statusFilter !== 'all' && row.status !== statusFilter) return false;
      if (!q) return true;
      const haystack = [
        `module ${row.mod.id}`,
        row.mod.title,
        row.mod.shortTitle,
        ...row.mod.primaryStatutes,
        ...row.mod.units.map((u) => u.title),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [progress, searchQuery, statusFilter]);

  const activeMod =
    COURSE_MODULES.find((m) => m.id === progress.activeModuleId) ??
    COURSE_MODULES[0];
  const activeUnitIdx = progress.lastUnitByModule[activeMod.id] ?? 0;
  const activeUnit = activeMod.units[activeUnitIdx] ?? activeMod.units[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Action Header */}
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950 dark:text-white tracking-tight">
            Dashboard
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => onSelectModule(activeMod.id, activeUnitIdx)}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-sm transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>
              Continue {activeUnit.code}: M{activeMod.id}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('labs')}
            className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-medium px-3.5 py-2.5 rounded-sm"
          >
            <FlaskConical className="w-4 h-4 text-cyan-800 dark:text-cyan-400" />
            <span>Interactive Labs</span>
          </button>
        </div>
      </section>

      {/* 3-Metric Unified KPI Strip (Single-Elevation Hairline Grid) */}
      <section
        aria-label="Key learning metrics"
        className="grid grid-cols-1 sm:grid-cols-3 bg-white/82 dark:bg-slate-900/82 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-sm divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 dark:divide-slate-800 shadow-xs"
      >
        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span>Course Progress</span>
            <span className="text-cyan-800 dark:text-cyan-400 font-semibold tabular-nums">
              {metrics.completedCount}/{metrics.totalUnits} Units
            </span>
          </div>
          <div className="font-mono text-3xl font-semibold text-slate-950 dark:text-white tabular-nums">
            {metrics.overallPct}%
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-700 via-cyan-800 to-teal-700 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-400 transition-all duration-300"
              style={{ width: `${metrics.overallPct}%` }}
            />
          </div>
        </div>

        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span>Study Time Logged</span>
            <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          </div>
          <div className="font-mono text-3xl font-semibold text-slate-950 dark:text-white tabular-nums">
            {formatMinutesToHours(metrics.completedMinutes)}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 tabular-nums">
            of {formatMinutesToHours(metrics.totalMinutes)} total curriculum runtime
          </p>
        </div>

        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span>Assessments</span>
            <span className="font-semibold text-emerald-800 dark:text-emerald-400 tabular-nums">
              {metrics.attemptedCount}/6 Attempted
            </span>
          </div>
          <div className="font-mono text-3xl font-semibold text-slate-950 dark:text-white tabular-nums">
            {metrics.attemptedCount > 0 ? `${metrics.avgQuizPct}%` : '—'}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {metrics.attemptedCount > 0
              ? 'Weighted average across attempted quizzes'
              : 'Attempt any module quiz to record scores'}
          </p>
        </div>
      </section>

      {/* Segmented 6-Module Master Progress Bar */}
      <section className="bg-white/82 dark:bg-slate-900/82 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-sm p-5 sm:p-6 space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="space-y-1">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-slate-950 dark:text-white">
              Six-Module Segmented Completion Map
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Click any module segment to jump straight to your next uncompleted session.
            </p>
          </div>
          <span className="font-mono text-sm font-medium text-slate-600 dark:text-slate-300 tabular-nums shrink-0">
            {metrics.completedCount} of {metrics.totalUnits} total units completed
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURSE_MODULES.map((mod) => {
            const done = mod.units.filter((u) =>
              progress.completedUnitIds.includes(u.id)
            ).length;
            const pct = Math.round((done / mod.units.length) * 100);
            const resumeIdx = progress.lastUnitByModule[mod.id] ?? 0;
            const isActive = progress.activeModuleId === mod.id;
            const accentMap: Record<
              number,
              { code: string; bar: string; active: string; top: string }
            > = {
              1: {
                code: 'text-cyan-800 dark:text-cyan-400',
                bar: 'from-cyan-700 to-cyan-900 dark:from-cyan-400 dark:to-cyan-500',
                active: 'border-cyan-700 dark:border-cyan-400 bg-cyan-50/70 dark:bg-cyan-950/40',
                top: 'border-t-cyan-700 dark:border-t-cyan-400',
              },
              2: {
                code: 'text-teal-800 dark:text-teal-400',
                bar: 'from-teal-700 to-cyan-800 dark:from-teal-400 dark:to-cyan-400',
                active: 'border-teal-700 dark:border-teal-400 bg-teal-50/70 dark:bg-teal-950/40',
                top: 'border-t-teal-700 dark:border-t-teal-400',
              },
              3: {
                code: 'text-emerald-700 dark:text-emerald-400',
                bar: 'from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400',
                active: 'border-emerald-600 dark:border-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/40',
                top: 'border-t-emerald-500 dark:border-t-emerald-400',
              },
              4: {
                code: 'text-amber-700 dark:text-amber-400',
                bar: 'from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400',
                active: 'border-amber-600 dark:border-amber-400 bg-amber-50/70 dark:bg-amber-950/40',
                top: 'border-t-amber-500 dark:border-t-amber-400',
              },
              5: {
                code: 'text-rose-700 dark:text-rose-400',
                bar: 'from-rose-500 to-pink-500 dark:from-rose-400 dark:to-pink-400',
                active: 'border-rose-600 dark:border-rose-400 bg-rose-50/70 dark:bg-rose-950/40',
                top: 'border-t-rose-500 dark:border-t-rose-400',
              },
              6: {
                code: 'text-violet-700 dark:text-violet-400',
                bar: 'from-violet-500 to-purple-500 dark:from-violet-400 dark:to-purple-400',
                active: 'border-violet-600 dark:border-violet-400 bg-violet-50/70 dark:bg-violet-950/40',
                top: 'border-t-violet-500 dark:border-t-violet-400',
              },
            };
            const accent = accentMap[mod.id] ?? accentMap[1];

            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => onSelectModule(mod.id, resumeIdx)}
                className={`text-left p-4 sm:p-5 rounded-sm border border-t-2 transition-colors ${accent.top} ${
                  isActive
                    ? accent.active
                    : 'border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-sm sm:text-base tabular-nums">
                  <span className={`font-semibold ${accent.code}`}>M{mod.id}</span>
                  <span
                    className={`font-semibold ${
                      pct === 100
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : pct > 0
                          ? accent.code
                          : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {pct}%
                  </span>
                </div>
                <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mt-1.5 leading-snug">
                  {mod.shortTitle}
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden mt-3">
                  <div
                    className={`h-full bg-gradient-to-r transition-all duration-300 ${
                      pct === 100 ? 'from-emerald-500 to-teal-500' : accent.bar
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 tabular-nums">
                  {done}/{mod.units.length} units
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Module Progress Tracking Grid + Search/Filter */}
      <section className="bg-white/82 dark:bg-slate-900/82 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-sm overflow-hidden shadow-xs">
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-slate-950 dark:text-white">
              Module Progress
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Filter modules by status or resume reading.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules or statutes..."
                className="pl-9 pr-3 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-800 dark:focus:border-cyan-400 w-64"
                aria-label="Search modules or statutes"
              />
            </div>

            <div className="flex border border-slate-300 dark:border-slate-700 rounded-sm overflow-hidden text-sm">
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'in-progress', label: 'In Progress' },
                  { id: 'completed', label: 'Done' },
                  { id: 'not-started', label: 'New' },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setStatusFilter(f.id)}
                  className={`px-3 py-2 font-medium transition-colors ${
                    statusFilter === f.id
                      ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {moduleRows.length === 0 ? (
          <div className="p-10 text-center space-y-3">
            <p className="text-base font-medium text-slate-700 dark:text-slate-300">
              No modules match &ldquo;{searchQuery}&rdquo; under the selected filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
              }}
              className="px-4 py-2 text-sm font-semibold bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 rounded-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {/* Table Header (Desktop) */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-5 sm:px-6 py-3 bg-slate-50 dark:bg-slate-950/60 font-mono text-xs uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400">
              <div className="col-span-4">Module</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Units / Time</div>
              <div className="col-span-2">Progress</div>
              <div className="col-span-1 text-right">Quiz</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {moduleRows.map(
              ({
                mod,
                doneCount,
                pct,
                totalMins,
                doneMins,
                quiz,
                status,
                resumeIdx,
              }) => {
                return (
                  <div key={mod.id}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-5 sm:px-6 py-4 items-center hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                      <div className="md:col-span-4 min-w-0">
                        <div className="font-mono text-xs sm:text-sm text-cyan-800 dark:text-cyan-400 font-semibold">
                          Module {mod.id}
                        </div>
                        <div className="text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug mt-0.5">
                          {mod.title}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <span
                          className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm border ${
                            status === 'completed'
                              ? 'text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800'
                              : status === 'in-progress'
                                ? 'text-cyan-900 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-300 dark:border-cyan-800'
                                : 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          {status === 'completed'
                            ? 'Completed'
                            : status === 'in-progress'
                              ? 'In Progress'
                              : 'Not Started'}
                        </span>
                      </div>

                      <div className="md:col-span-2 md:text-right font-mono tabular-nums">
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          {doneCount}/{mod.units.length} units
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {doneMins}/{totalMins} min
                        </div>
                      </div>

                      <div className="md:col-span-2 flex items-center gap-2.5">
                        <div className="flex-1 h-2.5 bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              pct === 100
                                ? 'bg-emerald-600 dark:bg-emerald-500'
                                : 'bg-cyan-700 dark:bg-cyan-400'
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 w-10 text-right tabular-nums">
                          {pct}%
                        </span>
                      </div>

                      <div className="md:col-span-1 md:text-right font-mono text-sm tabular-nums">
                        {quiz ? (
                          <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                            {quiz.score}/{quiz.total}
                          </span>
                        ) : (
                          <span className="text-slate-400 dark:text-slate-600">—</span>
                        )}
                      </div>

                      <div className="md:col-span-1 md:text-right">
                        <button
                          type="button"
                          onClick={() => onSelectModule(mod.id, resumeIdx)}
                          className="inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold bg-slate-900 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 rounded-sm whitespace-nowrap"
                        >
                          <span>
                            {status === 'completed'
                              ? 'Review'
                              : status === 'in-progress'
                                ? 'Resume'
                                : 'Start'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </section>

      {/* Clean Progress Reset Control */}
      <section className="bg-white/82 dark:bg-slate-900/82 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-sm px-5 py-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
        <span>
          All progress, unit completions, and quiz scores persist automatically in your browser.
        </span>

        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-red-700 dark:hover:text-red-400 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Progress</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-red-700 dark:text-red-400 font-semibold">Reset saved progress?</span>
            <button
              type="button"
              onClick={() => {
                onResetProgress();
                setConfirmReset(false);
              }}
              className="px-2.5 py-1 bg-red-700 text-white font-semibold rounded-sm"
            >
              Confirm Reset
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="px-2.5 py-1 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-sm"
            >
              Cancel
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
