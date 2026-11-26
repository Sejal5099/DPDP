export type CourseView = 'dashboard' | 'overview' | 'module' | 'labs' | 'reference';

export type AudienceRole = 'all' | 'frontline' | 'it' | 'leadership';

export type EnforcementStatus = 'in-force' | 'may-2027' | 'independent-law';

export interface ComparisonTable {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface RoleGuidance {
  frontline: string;
  it: string;
  leadership: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  sector: string;
  scenario: string;
  legalIssue: string;
  expectedApproach: string;
  keyCitation: string;
  statusNote: EnforcementStatus;
}

export interface CourseUnit {
  id: string;
  code: string;
  title: string;
  durationMinutes: number;
  status: EnforcementStatus;
  statutoryCitations: string[];
  summary: string;
  keyPoints: string[];
  bfsiApplication: string;
  table?: ComparisonTable;
  roleNotes?: RoleGuidance;
}

export interface ModuleChecklistItem {
  id: string;
  label: string;
  detail: string;
}

export interface CourseModule {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  durationLabel: string;
  unitCountLabel: string;
  pdfAssetPath: string;
  pdfFileName: string;
  commencementSummary: string;
  primaryStatutes: string[];
  learningObjectives: string[];
  units: CourseUnit[];
  caseStudies: CaseStudyItem[];
  checklist?: ModuleChecklistItem[];
}

export interface QuizQuestion {
  id: string;
  moduleId: number;
  subtopic?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  citation: string;
}

export interface FlashcardQuestion {
  id: string;
  moduleId: number;
  category: string;
  prompt: string;
  modelAnswer: string;
  citation: string;
}

export interface CommencementMilestone {
  id: string;
  dateLabel: string;
  phase: string;
  status: EnforcementStatus;
  notificationRef: string;
  provisions: string;
  bfsiOperationalImpact: string;
}

export interface StatutoryReferenceItem {
  id: string;
  law: string;
  provision: string;
  status: EnforcementStatus;
  effectiveDate: string;
  summary: string;
  bfsiNote: string;
}

export interface UserProgress {
  completedUnitIds: string[];
  completedChecklistIds: string[];
  enterpriseReadinessIds: string[];
  quizBestScores: Record<string, { score: number; total: number; lastAttemptAt: string }>;
  activeModuleId: number;
  lastUnitByModule: Record<number, number>;
  selectedRole: AudienceRole;
}
