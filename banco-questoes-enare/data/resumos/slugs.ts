/**
 * Slugs de assunto (subtema) que têm resumo escrito.
 *
 * A ORDEM DE EXIBIÇÃO real vem do ranking ao vivo em `src/lib/resumos.ts`,
 * não deste array. Arquivo deliberadamente pequeno e sem o conteúdo dos
 * resumos: é importado também pelo cliente (`QuestionSolver`, para decidir
 * se mostra "Revisar assunto"), e o texto integral de `content.ts` não deve
 * entrar nesse bundle.
 *
 * Vazio de propósito: o banco ENARE nasce sem resumos. Ao escrever um resumo
 * novo, acrescente o slug aqui — `src/lib/resumos.ts` valida em runtime que
 * todo slug listado tem conteúdo correspondente em `content.ts`.
 */
export const RESUMO_SLUGS = [] as const;

export type ResumoSlug = (typeof RESUMO_SLUGS)[number];
