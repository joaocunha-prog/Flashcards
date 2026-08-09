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
 */
export const RESUMO_SLUGS = [
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
] as const;

export type ResumoSlug = (typeof RESUMO_SLUGS)[number];
