/**
 * Formato canônico de importação de provas.
 *
 * É o mesmo shape aceito por `POST /api/admin/import` e por
 * `npm run exam:import -- caminho/arquivo.json`. Qualquer prova futura
 * (2027, 2028, ...) entra no sistema por aqui e dispara a recomputação
 * das estatísticas de incidência e do ranking 80/20.
 */

export type DifficultyInput = 'FACIL' | 'MEDIA' | 'DIFICIL';
export type SourceInput = 'PROVA_OFICIAL' | 'AUTORAL_ESTILO_BANCA';

export interface AlternativeInput {
  letter: string;
  text: string;
}

export interface QuestionInput {
  /** Número da questão no caderno. */
  number: number;
  statement: string;
  alternatives: AlternativeInput[];
  /** Letra correta. NUNCA é exposta ao cliente antes de o usuário responder. */
  answerKey: string;
  /** Ex.: "Neurologia". */
  theme: string;
  /** Ex.: "Síndromes vasculares". É o nível do ranking de assuntos. */
  subtheme?: string;
  /** Ex.: "AVC isquêmico — trombólise". Exige `subtheme`. */
  topic?: string;
  difficulty: DifficultyInput;
  keywords: string[];
  /** Diretriz/fonte de referência do item, quando conhecida. */
  reference?: string;
}

export interface ExamInput {
  /** Chave estável; reimportar o mesmo slug atualiza a prova em vez de duplicar. */
  slug: string;
  year: number;
  board?: string;
  program?: string;
  title: string;
  source: SourceInput;
  reference?: string;
  appliedAt?: string;
  questions: QuestionInput[];
}
