/**
 * Mapa slug -> texto markdown do resumo. Vazio de propósito: o banco ENARE
 * nasce sem resumos. Ao escrever um resumo novo, crie `./nome-do-assunto.ts`
 * exportando a string markdown (ver formato em qualquer resumo de
 * `../../../banco-questoes-uerj/data/resumos/` como referência de seções),
 * importe-o aqui e acrescente uma entrada — e inclua o slug em `./slugs.ts`.
 */
export const RESUMO_CONTENT: Partial<Record<string, string>> = {};
