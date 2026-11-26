import { Palette } from 'lucide-react';
import { COURSE_REFERENCE_DATE } from '../data/courseIndex';
import { BackdropPalette } from './InteractiveBackdrop';

interface FooterProps {
  palette: BackdropPalette;
  onChangePalette: (p: BackdropPalette) => void;
}

export function Footer({ palette, onChangePalette }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-slate-200/80 dark:border-slate-800/90 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col lg:flex-row lg:items-center justify-between gap-5 text-xs text-slate-600 dark:text-slate-400">
        <div className="space-y-1">
          <p className="font-semibold text-slate-900 dark:text-slate-100">
            DPDP Act, 2023 &amp; DPDP Rules, 2025 — BFSI Compliance Curriculum
          </p>
          <p>
            Educational curriculum calibrated to <span className="font-mono font-medium text-slate-800 dark:text-slate-200">{COURSE_REFERENCE_DATE}</span>. Illustrative BFSI scenarios are hypothetical teaching examples; <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em> and statutory citations reflect official Indian law.
          </p>
        </div>

        {/* Background Tone Controls */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
            <Palette className="w-3.5 h-3.5 text-cyan-800 dark:text-cyan-400" />
            <span>Tone:</span>
          </span>
          {(
            [
              { id: 'aurora', label: 'Cyber Navy' },
              { id: 'ocean', label: 'Deep Aqua' },
              { id: 'sunset', label: 'Midnight Slate' },
            ] as { id: BackdropPalette; label: string }[]
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onChangePalette(item.id)}
              className={`px-2.5 py-1 rounded-sm font-mono text-[11px] border transition-colors whitespace-nowrap ${
                palette === item.id
                  ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 border-slate-900 dark:border-cyan-500 font-semibold'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
