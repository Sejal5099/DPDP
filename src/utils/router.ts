import { getModuleById } from '../data/courseIndex';
import { CourseView } from '../types/course';

export type ModuleTab = 'units' | 'cases' | 'checklist';

export interface ParsedRoute {
  view: CourseView;
  moduleId?: number;
  tab?: ModuleTab;
  unitIndex?: number | null;
  assessmentOpen?: boolean;
  isCanonical: boolean;
}

const RAW_BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export function getUnitSlug(unitCode: string): string {
  return unitCode.replace(/^Session\s+/i, '').trim().toLowerCase();
}

export function buildFullPath(appPath: string): string {
  const normalized = appPath.startsWith('/') ? appPath : `/${appPath}`;
  if (!RAW_BASE || RAW_BASE === '/') {
    return normalized;
  }
  return `${RAW_BASE}${normalized}`;
}

export function stripBasePath(pathname: string): string {
  if (RAW_BASE && RAW_BASE !== '/') {
    if (pathname === RAW_BASE || pathname === `${RAW_BASE}/`) {
      return '/';
    }
    if (pathname.startsWith(`${RAW_BASE}/`)) {
      return pathname.slice(RAW_BASE.length) || '/';
    }
  }
  return pathname || '/';
}

export function buildAppPath(route: {
  view: CourseView;
  moduleId?: number;
  tab?: ModuleTab;
  unitIndex?: number | null;
  assessmentOpen?: boolean;
}): string {
  switch (route.view) {
    case 'dashboard':
      return '/dashboard';
    case 'overview':
      return '/curriculum';
    case 'labs':
      return '/labs';
    case 'reference':
      return '/reference';
    case 'module': {
      const modId = Math.min(Math.max(1, route.moduleId ?? 1), 6);
      const mod = getModuleById(modId);
      if (route.tab === 'cases') {
        return `/module/${mod.id}/cases`;
      }
      if (route.tab === 'checklist' && mod.checklist && mod.checklist.length > 0) {
        return `/module/${mod.id}/checklist`;
      }
      if (route.assessmentOpen) {
        return `/module/${mod.id}/assessment`;
      }
      if (
        typeof route.unitIndex === 'number' &&
        route.unitIndex >= 0 &&
        route.unitIndex < mod.units.length
      ) {
        const slug = getUnitSlug(mod.units[route.unitIndex].code);
        return `/module/${mod.id}/session/${slug}`;
      }
      return `/module/${mod.id}`;
    }
  }
}

export function parseRoute(pathname: string): ParsedRoute {
  const rel = stripBasePath(pathname).replace(/\/+$/, '') || '/';

  if (rel === '/') {
    return { view: 'dashboard', isCanonical: false };
  }
  if (rel === '/dashboard') {
    return { view: 'dashboard', isCanonical: true };
  }
  if (rel === '/curriculum' || rel === '/overview') {
    return { view: 'overview', isCanonical: rel === '/curriculum' };
  }
  if (rel === '/labs') {
    return { view: 'labs', isCanonical: true };
  }
  if (rel === '/reference') {
    return { view: 'reference', isCanonical: true };
  }

  const parts = rel.split('/').filter(Boolean);
  if (parts[0] === 'module' && parts[1]) {
    const parsedId = Number.parseInt(parts[1], 10);
    if (!Number.isNaN(parsedId) && parsedId >= 1 && parsedId <= 6) {
      const mod = getModuleById(parsedId);
      const sub = parts[2];
      const arg = parts[3];

      if (!sub) {
        return {
          view: 'module',
          moduleId: mod.id,
          tab: 'units',
          unitIndex: null,
          assessmentOpen: false,
          isCanonical: true,
        };
      }
      if (sub === 'cases') {
        return {
          view: 'module',
          moduleId: mod.id,
          tab: 'cases',
          unitIndex: null,
          assessmentOpen: false,
          isCanonical: true,
        };
      }
      if (sub === 'checklist' && mod.checklist && mod.checklist.length > 0) {
        return {
          view: 'module',
          moduleId: mod.id,
          tab: 'checklist',
          unitIndex: null,
          assessmentOpen: false,
          isCanonical: true,
        };
      }
      if (sub === 'assessment') {
        return {
          view: 'module',
          moduleId: mod.id,
          tab: 'units',
          unitIndex: null,
          assessmentOpen: true,
          isCanonical: true,
        };
      }
      if (sub === 'session' && arg) {
        const cleanArg = decodeURIComponent(arg).trim().toLowerCase();
        const foundIdx = mod.units.findIndex(
          (u) =>
            getUnitSlug(u.code) === cleanArg ||
            u.id.toLowerCase() === cleanArg
        );
        const unitIndex = foundIdx >= 0 ? foundIdx : 0;
        return {
          view: 'module',
          moduleId: mod.id,
          tab: 'units',
          unitIndex,
          assessmentOpen: false,
          isCanonical: foundIdx >= 0,
        };
      }

      return {
        view: 'module',
        moduleId: mod.id,
        tab: 'units',
        unitIndex: 0,
        assessmentOpen: false,
        isCanonical: false,
      };
    }
  }

  return { view: 'dashboard', isCanonical: false };
}

export function navigateHistory(appPath: string, replace = false): void {
  const fullPath = buildFullPath(appPath);
  if (window.location.pathname === fullPath) {
    return;
  }
  if (replace) {
    window.history.replaceState(null, '', fullPath);
  } else {
    window.history.pushState(null, '', fullPath);
  }
}
