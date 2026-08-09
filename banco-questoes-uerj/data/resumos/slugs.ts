/**
 * Slugs de assunto (subtema) que têm resumo escrito, na ordem em que foram
 * produzidos — a ORDEM DE EXIBIÇÃO real vem do ranking ao vivo em
 * `src/lib/resumos.ts`, não deste array.
 *
 * Arquivo deliberadamente pequeno e sem o conteúdo dos resumos: é importado
 * também pelo cliente (`QuestionSolver`, para decidir se mostra "Revisar
 * assunto"), e o texto integral de `content.ts` não deve entrar nesse bundle.
 *
 * Ao escrever um resumo novo, acrescente o slug aqui — `src/lib/resumos.ts`
 * valida em runtime que todo slug listado tem conteúdo correspondente em
 * `content.ts`.
 *
 * #1-10: primeira leva (top 10 do ranking 80/20).
 * #11-38: segunda leva — completa o corte de 80/20 (38 assuntos, conforme
 * HANDOFF.md).
 */
export const RESUMO_SLUGS = [
  // #1-10
  'hepatopatias-nao-virais',
  'anemias',
  'emergencias-oncologicas',
  'tumores-solidos',
  'doencas-da-adrenal',
  'leucemias-e-linfomas',
  'vasculites',
  'disturbios-da-hemostasia',
  'doencas-da-tireoide',
  'doencas-do-esofago',
  // #11-38
  'doencas-do-pericardio-e-miocardio',
  'doencas-neuromusculares',
  'doencas-tropicais-e-negligenciadas',
  'hiv-aids',
  'lupus-e-conectivopatias',
  'artrite-reumatoide',
  'diabetes-mellitus',
  'disturbios-hidroeletroliticos',
  'doencas-intersticiais',
  'pneumonias',
  'sindromes-coronarianas-agudas',
  'sindromes-vasculares',
  'arritmias',
  'discrasias-plasmocitarias',
  'doenca-renal-cronica',
  'glomerulopatias',
  'infeccoes-sexualmente-transmissiveis',
  'micoses-sistemicas',
  'cirrose-e-complicacoes',
  'disturbios-motores',
  'emergencias-diabeticas',
  'hipertensao-arterial',
  'injuria-renal-aguda',
  'intoxicacoes-exogenas',
  'meningites-e-infeccoes-do-snc',
  'neuroinfeccao-e-emergencias-neurologicas',
  'rastreamento-oncologico',
  'rim-em-situacoes-especiais',
] as const;

export type ResumoSlug = (typeof RESUMO_SLUGS)[number];
