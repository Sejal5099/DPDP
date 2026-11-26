import { MODULES_1_TO_3 } from './module1to3Data';
import { MODULES_4_TO_6 } from './module4to6Data';
import { CourseModule } from '../types/course';

export const COURSE_MODULES: CourseModule[] = [
  ...MODULES_1_TO_3,
  ...MODULES_4_TO_6,
];

export const COURSE_REFERENCE_DATE = '25 November 2026';

export function getModuleById(id: number): CourseModule {
  return COURSE_MODULES.find((m) => m.id === id) ?? COURSE_MODULES[0];
}
