import type { ExamInput } from '../types';
import { exam2021 } from './2021';
import { exam2022 } from './2022';
import { exam2023 } from './2023';
import { exam2024 } from './2024';
import { exam2025 } from './2025';
import { mock2026 } from './mock-2026';

/**
 * Provas que compõem o corpus histórico — base do cálculo de incidência
 * e do ranking 80/20.
 */
export const HISTORICAL_EXAMS: ExamInput[] = [exam2021, exam2022, exam2023, exam2024, exam2025];

/**
 * Simulados inéditos. Ficam fora da análise de incidência: são derivados
 * dela, então incluí-los realimentaria o próprio cálculo.
 */
export const MOCK_EXAMS: ExamInput[] = [mock2026];

export const ALL_EXAMS: ExamInput[] = [...HISTORICAL_EXAMS, ...MOCK_EXAMS];

export { exam2021, exam2022, exam2023, exam2024, exam2025, mock2026 };
