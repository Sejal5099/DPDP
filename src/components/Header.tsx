import { useState } from 'react';
import { BookOpenCheck, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { CourseView } from '../types/course';
import { ThemeMode } from './InteractiveBackdrop';

interface HeaderProps {
  activeView: CourseView;
  onNavigate: (view: CourseView) => void;
  activeModuleId: number;
  completionPercent: number;
  onResumeModule: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const NAV_ITEMS: { id: CourseView; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'overview', label: 'Curriculum' },
  { id: 'labs', label: 'Interactive Labs' },
  { id: 'reference', label: 'Legal Reference' },
];

export function Header({
  activeView,
  onNavigate,
  activeModuleId,
  completionPercent,
  onResumeModule,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: CourseView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/90 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand */}
        <button
          type="button"
          onClick={() => handleNav('dashboard')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 dark:focus-visible:ring-cyan-400 rounded-sm shrink-0"
        >
          <span className="w-8 h-8 rounded-sm bg-gradient-to-br from-cyan-700 via-cyan-800 to-teal-800 dark:from-cyan-500 dark:via-teal-500 dark:to-emerald-500 text-white dark:text-slate-950 flex items-center justify-center shrink-0 group-hover:brightness-110 transition-all shadow-xs">
            <BookOpenCheck className="w-4 h-4" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-base font-semibold tracking-tight text-slate-900 dark:text-white leading-none whitespace-nowrap">
              DPDP BFSI Academy
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 leading-none whitespace-nowrap">
              Act 2023 · Rules 2025
            </span>
          </span>
        </button>

        {/* Zone 2: Single-line Primary Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const isCurrent =
              activeView === item.id || (item.id === 'overview' && activeView === 'module');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`whitespace-nowrap text-sm font-medium py-5 border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 dark:focus-visible:ring-cyan-400 ${
                  isCurrent
                    ? 'border-cyan-700 dark:border-cyan-400 text-slate-950 dark:text-white font-semibold'
                    : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Resume Action & Upper-Right Light/Dark Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              onResumeModule();
              setMobileMenuOpen(false);
            }}
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-xs font-semibold px-3.5 py-2 rounded-sm transition-colors tabular-nums whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 dark:focus-visible:ring-cyan-400"
          >
            <span>Resume M{activeModuleId} · {completionPercent}%</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 hover:border-cyan-700 dark:hover:border-cyan-400 text-slate-800 dark:text-slate-100 text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 dark:focus-visible:ring-cyan-400"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-cyan-800" />
                <span>Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-sm"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Persistent Global Course Progress Track */}
      <div
        className="w-full h-[3px] bg-slate-200/70 dark:bg-slate-800"
        role="progressbar"
        aria-valuenow={completionPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Overall course completion ${completionPercent}%`}
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-700 via-cyan-800 to-teal-700 dark:from-cyan-400 dark:via-emerald-400 dark:to-teal-400 transition-all duration-300"
          style={{ width: `${completionPercent}%` }}
        />
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isCurrent =
              activeView === item.id || (item.id === 'overview' && activeView === 'module');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-sm ${
                  isCurrent
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-950 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => {
              onResumeModule();
              setMobileMenuOpen(false);
            }}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 text-xs font-semibold px-3.5 py-2.5 rounded-sm tabular-nums"
          >
            <span>Resume Module {activeModuleId} ({completionPercent}% Complete)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
}
