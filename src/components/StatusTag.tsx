import { CheckCircle2, Clock, Scale } from 'lucide-react';
import { EnforcementStatus } from '../types/course';

interface StatusTagProps {
  status: EnforcementStatus;
  compact?: boolean;
  onDarkSurface?: boolean;
}

export function StatusTag({
  status,
  compact = false,
  onDarkSurface = false,
}: StatusTagProps) {
  if (status === 'in-force') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm tabular-nums whitespace-nowrap border ${
          onDarkSurface
            ? 'text-emerald-300 bg-emerald-950/60 border-emerald-800/80'
            : 'text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/80'
        }`}
        title="Provision currently in legal force as of 25 November 2026"
      >
        <CheckCircle2
          className={`w-3 h-3 shrink-0 ${
            onDarkSurface
              ? 'text-emerald-400'
              : 'text-emerald-700 dark:text-emerald-400'
          }`}
        />
        <span>{compact ? 'In Force' : 'In Force · Nov 2026'}</span>
      </span>
    );
  }

  if (status === 'may-2027') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm tabular-nums whitespace-nowrap border ${
          onDarkSurface
            ? 'text-amber-300 bg-amber-950/60 border-amber-800/80'
            : 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800/80'
        }`}
        title="Notified future obligation scheduled to commence in May 2027"
      >
        <Clock
          className={`w-3 h-3 shrink-0 ${
            onDarkSurface
              ? 'text-amber-400'
              : 'text-amber-700 dark:text-amber-400'
          }`}
        />
        <span>{compact ? 'May 2027' : 'Scheduled · May 2027'}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm tabular-nums whitespace-nowrap border ${
        onDarkSurface
          ? 'text-cyan-300 bg-cyan-950/60 border-cyan-800/80'
          : 'text-cyan-900 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-300/90 dark:border-cyan-800/80'
      }`}
      title="Independent sectoral or cyber law currently enforceable today"
    >
      <Scale
        className={`w-3 h-3 shrink-0 ${
          onDarkSurface ? 'text-cyan-400' : 'text-cyan-800 dark:text-cyan-400'
        }`}
      />
      <span>{compact ? 'Sector Law Active' : 'Sector Law · Active Now'}</span>
    </span>
  );
}
