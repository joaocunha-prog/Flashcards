/**
 * Slugs de assunto (subtema) que têm resumo escrito.
 *
 * A ORDEM DE EXIBIÇÃO real vem do ranking ao vivo em `src/lib/resumos.ts`,
 * não deste array. Arquivo deliberadamente pequeno e sem o conteúdo dos
 * resumos: é importado também pelo cliente (`QuestionSolver`, para decidir
 * se mostra "Revisar assunto"), e o texto integral de `content.ts` não deve
 * entrar nesse bundle.
 *
 * Os 46 assuntos do corte 80/20 do corpus ENARE/EBSERH (ver HANDOFF.md na
 * raiz do repo para o ranking completo). Ao escrever um resumo novo,
 * acrescente o slug aqui — `src/lib/resumos.ts` valida em runtime que todo
 * slug listado tem conteúdo correspondente em `content.ts`.
 */
export const RESUMO_SLUGS = [
  'hiv-aids',
  'disturbios-da-hemostasia',
  'emergencias-oncologicas',
  'neuroinfeccao-e-emergencias-neurologicas',
  'cirrose-e-complicacoes',
  'diarreias-e-ma-absorcao',
  'doencas-tropicais-e-negligenciadas',
  'rim-em-situacoes-especiais',
  'hepatopatias-nao-virais',
  'infeccoes-relacionadas-a-assistencia',
  'insuficiencia-cardiaca',
  'disturbios-motores',
  'doenca-renal-cronica',
  'doencas-da-tireoide',
  'doencas-neuromusculares',
  'infeccoes-de-pele-e-partes-moles',
  'infeccoes-do-trato-urinario',
  'infeccoes-sexualmente-transmissiveis',
  'manifestacoes-cutaneas',
  'motilidade-intestinal',
  'anemias',
  'arritmias',
  'asma',
  'diabetes-mellitus',
  'dislipidemia',
  'disturbios-hidroeletroliticos',
  'intoxicacoes-exogenas',
  'nutricao',
  'pneumonias',
  'rastreamento-oncologico',
  'artrites-microcristalinas',
  'avaliacao-geriatrica-ampla',
  'avaliacao-perioperatoria',
  'derrame-pleural',
  'doencas-da-adrenal',
  'doencas-do-pericardio-e-miocardio',
  'doencas-inflamatorias-intestinais',
  'doencas-intersticiais',
  'dpoc',
  'glomerulopatias',
  'hipertensao-arterial',
  'injuria-renal-aguda',
  'sindromes-autoimunes-induzidas',
  'sindromes-vasculares',
  'sindromes-vestibulares',
  'tuberculose',
] as const;

export type ResumoSlug = (typeof RESUMO_SLUGS)[number];
