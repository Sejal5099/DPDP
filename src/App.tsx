import { useEffect, useState } from 'react';
import { COURSE_MODULES } from './data/courseIndex';
import { AudienceRole, CourseView, UserProgress } from './types/course';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DashboardView } from './components/DashboardView';
import { OverviewView } from './components/OverviewView';
import { ModuleReader } from './components/ModuleReader';
import { InteractiveLabs } from './components/InteractiveLabs';
import { LegalReferenceView } from './components/LegalReferenceView';
import {
  BackdropPalette,
  InteractiveBackdrop,
  ThemeMode,
} from './components/InteractiveBackdrop';

const STORAGE_KEY = 'dpdp_bfsi_academy_progress_v1';
const BACKDROP_KEY = 'dpdp_bfsi_backdrop_v1';
const THEME_KEY = 'dpdp_bfsi_theme_v1';

const DEFAULT_PROGRESS: UserProgress = {
  completedUnitIds: [],
  completedChecklistIds: [],
  enterpriseReadinessIds: [],
  quizBestScores: {},
  activeModuleId: 1,
  lastUnitByModule: {},
  selectedRole: 'all',
};

function loadInitialProgress(): UserProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return {
      completedUnitIds: Array.isArray(parsed.completedUnitIds)
        ? parsed.completedUnitIds
        : [],
      completedChecklistIds: Array.isArray(parsed.completedChecklistIds)
        ? parsed.completedChecklistIds
        : [],
      enterpriseReadinessIds: Array.isArray(parsed.enterpriseReadinessIds)
        ? parsed.enterpriseReadinessIds
        : [],
      quizBestScores:
        parsed.quizBestScores && typeof parsed.quizBestScores === 'object'
          ? parsed.quizBestScores
          : {},
      activeModuleId:
        typeof parsed.activeModuleId === 'number' &&
        parsed.activeModuleId >= 1 &&
        parsed.activeModuleId <= 6
          ? parsed.activeModuleId
          : 1,
      lastUnitByModule:
        parsed.lastUnitByModule && typeof parsed.lastUnitByModule === 'object'
          ? parsed.lastUnitByModule
          : {},
      selectedRole: parsed.selectedRole ?? 'all',
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export default function App() {
  const [activeView, setActiveView] = useState<CourseView>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(() => loadInitialProgress());
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = window.localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // Ignore
    }
    return 'dark';
  });
  const [palette, setPalette] = useState<BackdropPalette>(() => {
    try {
      const saved = window.localStorage.getItem(BACKDROP_KEY);
      if (saved === 'ocean' || saved === 'sunset' || saved === 'aurora') {
        return saved;
      }
    } catch {
      // Ignore
    }
    return 'aurora';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore
    }
  }, [theme]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota restrictions silently
    }
  }, [progress]);

  useEffect(() => {
    try {
      window.localStorage.setItem(BACKDROP_KEY, palette);
    } catch {
      // Ignore
    }
  }, [palette]);

  const navigateTo = (view: CourseView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (moduleId: number, unitIndex?: number) => {
    setProgress((prev) => ({
      ...prev,
      activeModuleId: moduleId,
      lastUnitByModule:
        typeof unitIndex === 'number'
          ? { ...prev.lastUnitByModule, [moduleId]: unitIndex }
          : prev.lastUnitByModule,
    }));
    setActiveView('module');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectUnit = (moduleId: number, unitIndex: number) => {
    setProgress((prev) => ({
      ...prev,
      lastUnitByModule: {
        ...prev.lastUnitByModule,
        [moduleId]: unitIndex,
      },
    }));
  };

  const handleToggleUnitComplete = (unitId: string) => {
    setProgress((prev) => {
      const exists = prev.completedUnitIds.includes(unitId);
      return {
        ...prev,
        completedUnitIds: exists
          ? prev.completedUnitIds.filter((id) => id !== unitId)
          : [...prev.completedUnitIds, unitId],
      };
    });
  };

  const handleCompleteModuleUnits = (unitIds: string[]) => {
    setProgress((prev) => ({
      ...prev,
      completedUnitIds: Array.from(new Set([...prev.completedUnitIds, ...unitIds])),
    }));
  };

  const handleToggleChecklistItem = (itemId: string) => {
    setProgress((prev) => {
      const exists = prev.completedChecklistIds.includes(itemId);
      return {
        ...prev,
        completedChecklistIds: exists
          ? prev.completedChecklistIds.filter((id) => id !== itemId)
          : [...prev.completedChecklistIds, itemId],
      };
    });
  };

  const handleSelectRole = (role: AudienceRole) => {
    setProgress((prev) => ({ ...prev, selectedRole: role }));
  };

  const handleSaveQuizScore = (quizId: string, score: number, total: number) => {
    setProgress((prev) => {
      const existing = prev.quizBestScores[quizId];
      const nextBest =
        !existing || score >= existing.score
          ? { score, total, lastAttemptAt: new Date().toISOString() }
          : existing;
      return {
        ...prev,
        quizBestScores: {
          ...prev.quizBestScores,
          [quizId]: nextBest,
        },
      };
    });
  };

  const handleResetProgress = () => {
    setProgress(DEFAULT_PROGRESS);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const totalUnits = COURSE_MODULES.reduce((sum, m) => sum + m.units.length, 0);
  const completionPercent =
    totalUnits > 0
      ? Math.round((progress.completedUnitIds.length / totalUnits) * 100)
      : 0;

  return (
    <div className="relative min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
      <InteractiveBackdrop palette={palette} theme={theme} />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header
          activeView={activeView}
          onNavigate={navigateTo}
          activeModuleId={progress.activeModuleId}
          completionPercent={completionPercent}
          onResumeModule={() =>
            handleSelectModule(
              progress.activeModuleId,
              progress.lastUnitByModule[progress.activeModuleId]
            )
          }
          theme={theme}
          onToggleTheme={() =>
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
        />

        <div className="flex-1">
          {activeView === 'dashboard' && (
            <DashboardView
              progress={progress}
              onSelectModule={handleSelectModule}
              onToggleUnitComplete={handleToggleUnitComplete}
              onNavigate={navigateTo}
              onResetProgress={handleResetProgress}
            />
          )}

          {activeView === 'overview' && (
            <OverviewView
              progress={progress}
              onSelectModule={handleSelectModule}
              onSelectRole={handleSelectRole}
              onNavigate={navigateTo}
            />
          )}

          {activeView === 'module' && (
            <ModuleReader
              moduleId={progress.activeModuleId}
              progress={progress}
              onSelectModule={handleSelectModule}
              onSelectUnit={handleSelectUnit}
              onToggleUnitComplete={handleToggleUnitComplete}
              onCompleteModuleUnits={handleCompleteModuleUnits}
              onSaveQuizScore={handleSaveQuizScore}
              onToggleChecklistItem={handleToggleChecklistItem}
              onSelectRole={handleSelectRole}
              onNavigate={navigateTo}
            />
          )}

          {activeView === 'labs' && <InteractiveLabs />}

          {activeView === 'reference' && <LegalReferenceView />}
        </div>

        <Footer palette={palette} onChangePalette={setPalette} />
      </div>
    </div>
  );
}
