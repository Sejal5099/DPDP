import { useEffect, useState } from 'react';
import { COURSE_MODULES } from './data/courseIndex';
import { AudienceRole, CourseView, UserProgress } from './types/course';
import { Header } from './components/Header';
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
import {
  buildAppPath,
  ModuleTab,
  navigateHistory,
  parseRoute,
} from './utils/router';

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
  const [initialRoute] = useState(() => parseRoute(window.location.pathname));

  const [activeView, setActiveView] = useState<CourseView>(initialRoute.view);
  const [moduleTab, setModuleTab] = useState<ModuleTab>(
    initialRoute.tab ?? 'units'
  );
  const [expandedUnitIndex, setExpandedUnitIndex] = useState<number | null>(
    initialRoute.unitIndex !== undefined ? initialRoute.unitIndex : null
  );
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(
    initialRoute.assessmentOpen ?? false
  );

  const [progress, setProgress] = useState<UserProgress>(() => {
    const base = loadInitialProgress();
    if (initialRoute.view === 'module' && initialRoute.moduleId) {
      return {
        ...base,
        activeModuleId: initialRoute.moduleId,
        lastUnitByModule:
          typeof initialRoute.unitIndex === 'number'
            ? {
                ...base.lastUnitByModule,
                [initialRoute.moduleId]: initialRoute.unitIndex,
              }
            : base.lastUnitByModule,
      };
    }
    return base;
  });

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
  const [palette] = useState<BackdropPalette>(() => {
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
    if (!initialRoute.isCanonical) {
      navigateHistory(
        buildAppPath({
          view: initialRoute.view,
          moduleId: initialRoute.moduleId,
          tab: initialRoute.tab,
          unitIndex: initialRoute.unitIndex,
          assessmentOpen: initialRoute.assessmentOpen,
        }),
        true
      );
    }
  }, [initialRoute]);

  useEffect(() => {
    const onPopState = () => {
      const next = parseRoute(window.location.pathname);
      setActiveView(next.view);
      if (next.view === 'module' && next.moduleId) {
        const modId = next.moduleId;
        setModuleTab(next.tab ?? 'units');
        setExpandedUnitIndex(
          next.unitIndex !== undefined ? next.unitIndex : null
        );
        setIsAssessmentOpen(next.assessmentOpen ?? false);
        setProgress((prev) => ({
          ...prev,
          activeModuleId: modId,
          lastUnitByModule:
            typeof next.unitIndex === 'number'
              ? { ...prev.lastUnitByModule, [modId]: next.unitIndex }
              : prev.lastUnitByModule,
        }));
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

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

  const navigateTo = (view: CourseView) => {
    setActiveView(view);
    if (view === 'module') {
      navigateHistory(
        buildAppPath({
          view: 'module',
          moduleId: progress.activeModuleId,
          tab: moduleTab,
          unitIndex: expandedUnitIndex,
          assessmentOpen: isAssessmentOpen,
        })
      );
    } else {
      navigateHistory(buildAppPath({ view }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (moduleId: number, unitIndex?: number) => {
    const targetIdx =
      typeof unitIndex === 'number'
        ? unitIndex
        : (progress.lastUnitByModule[moduleId] ?? 0);

    setProgress((prev) => ({
      ...prev,
      activeModuleId: moduleId,
      lastUnitByModule: {
        ...prev.lastUnitByModule,
        [moduleId]: targetIdx,
      },
    }));
    setActiveView('module');
    setModuleTab('units');
    setExpandedUnitIndex(targetIdx);
    setIsAssessmentOpen(false);
    navigateHistory(
      buildAppPath({
        view: 'module',
        moduleId,
        tab: 'units',
        unitIndex: targetIdx,
        assessmentOpen: false,
      })
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectUnit = (moduleId: number, unitIndex: number | null) => {
    setModuleTab('units');
    setExpandedUnitIndex(unitIndex);
    setIsAssessmentOpen(false);
    if (typeof unitIndex === 'number') {
      setProgress((prev) => ({
        ...prev,
        lastUnitByModule: {
          ...prev.lastUnitByModule,
          [moduleId]: unitIndex,
        },
      }));
    }
    navigateHistory(
      buildAppPath({
        view: 'module',
        moduleId,
        tab: 'units',
        unitIndex,
        assessmentOpen: false,
      })
    );
  };

  const handleChangeModuleTab = (moduleId: number, tab: ModuleTab) => {
    setModuleTab(tab);
    navigateHistory(
      buildAppPath({
        view: 'module',
        moduleId,
        tab,
        unitIndex: expandedUnitIndex,
        assessmentOpen: isAssessmentOpen,
      })
    );
  };

  const handleToggleAssessment = (moduleId: number, open: boolean) => {
    setModuleTab('units');
    setExpandedUnitIndex(null);
    setIsAssessmentOpen(open);
    navigateHistory(
      buildAppPath({
        view: 'module',
        moduleId,
        tab: 'units',
        unitIndex: null,
        assessmentOpen: open,
      })
    );
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
              activeTab={moduleTab}
              expandedUnitIndex={expandedUnitIndex}
              isAssessmentOpen={isAssessmentOpen}
              onSelectModule={handleSelectModule}
              onSelectUnit={handleSelectUnit}
              onChangeTab={handleChangeModuleTab}
              onToggleAssessment={handleToggleAssessment}
              onToggleUnitComplete={handleToggleUnitComplete}
              onCompleteModuleUnits={handleCompleteModuleUnits}
              onSaveQuizScore={handleSaveQuizScore}
              onToggleChecklistItem={handleToggleChecklistItem}
              onNavigate={navigateTo}
            />
          )}

          {activeView === 'labs' && <InteractiveLabs />}

          {activeView === 'reference' && <LegalReferenceView />}
        </div>
      </div>
    </div>
  );
}
