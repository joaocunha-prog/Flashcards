'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import type { QuestionStatus } from '@prisma/client';
import type { QuestionSubject, SolveQuestion } from '@/lib/serializers';
import { renderMarkdown } from '@/lib/markdown';
import { RESUMO_SLUGS } from '@data/resumos/slugs';
import { DifficultyBadge, StatusBadge } from './ui';

/** `Set<string>` para aceitar o slug dinâmico de `subject.subtheme` sem briga de tipo com a tupla literal. */
const RESUMO_SLUG_SET = new Set<string>(RESUMO_SLUGS);

/**
 * Tela de resolução (Etapa 4).
 *
 * Fluxo: enunciado + alternativas → o usuário marca uma → o servidor responde
 * apenas "acertou" ou "errou" → só então aparece o botão "Explicar com Claude".
 *
 * O gabarito não existe neste componente. `SolveQuestion` não carrega o campo,
 * e o endpoint de resposta devolve um booleano — de modo que nem o React
 * DevTools nem o payload de rede revelam a letra correta antes da hora.
 *
 * A classificação do assunto (tema, subtema, tópico, palavras-chave) segue a
 * mesma regra: `question.subject` chega null enquanto não há tentativa, e a
 * resposta do servidor a traz junto do resultado.
 */

interface AnswerResponse {
  correct: boolean;
  status: QuestionStatus;
  attemptCount: number;
  correctCount: number;
  /** Ressalva sobre o gabarito oficial, quando existe. Só chega após responder. */
  reviewNote: string | null;
  /** Classificação do assunto, liberada agora que a resposta foi registrada. */
  subject: QuestionSubject;
}

export function QuestionSolver({
  question,
  quizId,
  nextHref,
}: {
  question: SolveQuestion;
  quizId?: string;
  nextHref?: string;
}) {
  const router = useRouter();

  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<AnswerResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [explanation, setExplanation] = useState<string | null>(null);
  const [explaining, setExplaining] = useState(false);
  const [explanationError, setExplanationError] = useState<string | null>(null);

  const [favorite, setFavorite] = useState(question.userState?.favorite ?? false);
  const [notes, setNotes] = useState(question.userState?.notes ?? '');
  const [notesSaved, setNotesSaved] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [status, setStatus] = useState<QuestionStatus>(question.userState?.status ?? 'NAO_FEITA');

  const [startedAt] = useState(() => Date.now());

  // O componente é reutilizado ao navegar entre questões; sem este reset a
  // próxima apareceria já respondida.
  //
  // A dependência é APENAS `question.id`. Incluir campos de `userState` aqui
  // faz o reset disparar logo após responder: `router.refresh()` reexecuta o
  // server component, o status muda de NAO_FEITA para ACERTOU/ERROU e o efeito
  // limpa `result` — apagando da tela o "Você acertou", a ressalva de gabarito
  // e o botão "Explicar com Claude" que acabaram de aparecer.
  const latestState = useRef(question.userState);
  latestState.current = question.userState;

  useEffect(() => {
    const state = latestState.current;
    setSelected(null);
    setResult(null);
    setError(null);
    setExplanation(null);
    setExplanationError(null);
    setFavorite(state?.favorite ?? false);
    setNotes(state?.notes ?? '');
    setStatus(state?.status ?? 'NAO_FEITA');
  }, [question.id]);

  const answered = result !== null;

  // Vem do servidor quando a questão já tinha sido respondida antes; vem da
  // resposta recém-registrada no caso contrário. Antes disso, não existe.
  const subject = question.subject ?? result?.subject ?? null;

  const explanationHtml = useMemo(
    () => (explanation ? renderMarkdown(explanation) : null),
    [explanation],
  );

  async function submitAnswer() {
    if (!selected || submitting) return;
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/questions/${question.id}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selectedLetter: selected,
          elapsedSeconds: Math.round((Date.now() - startedAt) / 1000),
          quizId,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error ?? 'Não foi possível registrar a resposta.');
      }

      const data: AnswerResponse = await response.json();
      setResult(data);
      setStatus(data.status);
      router.refresh();

      // Comentário já escrito: busca na hora, sem exigir um clique. O endpoint
      // só o entrega depois da tentativa registrada acima, então esta é a
      // primeira oportunidade em que ele pode aparecer sem entregar o gabarito.
      if (question.hasExplanation) void requestExplanation(false);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Erro inesperado.');
    } finally {
      setSubmitting(false);
    }
  }

  async function requestExplanation(regenerate = false) {
    if (explaining) return;
    setExplaining(true);
    setExplanationError(null);

    try {
      const response = await fetch(`/api/questions/${question.id}/explain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedLetter: selected, regenerate }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error ?? 'Não foi possível gerar a explicação.');
      }
      setExplanation(payload.content);
    } catch (caught) {
      setExplanationError(caught instanceof Error ? caught.message : 'Erro inesperado.');
    } finally {
      setExplaining(false);
    }
  }

  async function patchState(patch: Record<string, unknown>) {
    const response = await fetch(`/api/questions/${question.id}/state`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    });
    if (response.ok) router.refresh();
    return response.ok;
  }

  async function toggleFavorite() {
    const next = !favorite;
    setFavorite(next);
    const ok = await patchState({ favorite: next });
    if (!ok) setFavorite(!next); // desfaz o otimismo se o servidor recusou
  }

  async function markForReview() {
    setStatus('REVISAR');
    const ok = await patchState({ status: 'REVISAR' });
    if (!ok) setStatus(question.userState?.status ?? 'NAO_FEITA');
  }

  async function saveNotes() {
    setNotesSaved('saving');
    const ok = await patchState({ notes: notes.trim() || null });
    setNotesSaved(ok ? 'saved' : 'idle');
    if (ok) setTimeout(() => setNotesSaved('idle'), 2000);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      {/* `min-w-0`: item de grid não encolhe abaixo do conteúdo por padrão, e
          sem isso uma tabela larga no comentário empurra a página inteira para
          o lado em vez de rolar dentro do próprio wrapper. */}
      <div className="min-w-0 space-y-4">
        <article className="card">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-mono text-slate-400">
              {question.year} · Q{question.number}
            </span>
            {subject ? (
              <>
                <span className="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {subject.theme.name}
                </span>
                {subject.subtheme && (
                  <span className="text-slate-400">{subject.subtheme.name}</span>
                )}
                {subject.topic && (
                  <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                    {subject.topic.name}
                  </span>
                )}
              </>
            ) : (
              // Dizer que o assunto está oculto evita que a ausência das tags
              // pareça defeito — e reforça que resolver às cegas é o exercício.
              <span className="italic text-slate-400 dark:text-slate-500">
                assunto oculto até você responder
              </span>
            )}
            <DifficultyBadge difficulty={question.difficulty} />
            <StatusBadge status={status} />
          </div>

          <p className="whitespace-pre-line text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
            {question.statement}
          </p>

          <ul className="mt-5 space-y-2">
            {question.alternatives.map((alt) => {
              const isSelected = selected === alt.letter;
              return (
                <li key={alt.id}>
                  <button
                    type="button"
                    disabled={answered}
                    onClick={() => setSelected(alt.letter)}
                    aria-pressed={isSelected}
                    className={clsx(
                      'flex w-full gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
                      answered && isSelected && result?.correct
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40'
                        : answered && isSelected && !result?.correct
                          ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40'
                          : isSelected
                            ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800/50',
                      answered && !isSelected && 'opacity-60',
                      answered && 'cursor-default',
                    )}
                  >
                    <span
                      className={clsx(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold',
                        isSelected
                          ? 'border-transparent bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                          : 'border-slate-300 text-slate-500 dark:border-slate-600 dark:text-slate-400',
                      )}
                    >
                      {alt.letter}
                    </span>
                    <span className="leading-relaxed text-slate-700 dark:text-slate-300">
                      {alt.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {error && (
            <p className="mt-3 text-sm text-rose-600 dark:text-rose-400" role="alert">
              {error}
            </p>
          )}

          {!answered ? (
            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={submitAnswer}
                disabled={!selected || submitting}
                className="btn-primary"
              >
                {submitting ? 'Confirmando…' : 'Confirmar resposta'}
              </button>
              {!selected && (
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Escolha uma alternativa.
                </span>
              )}
            </div>
          ) : (
            <div className="animate-fade-in mt-5 space-y-4">
              {/* Feedback deliberadamente binário: nada de revelar a letra certa. */}
              <div
                className={clsx(
                  'rounded-lg border p-4',
                  result?.correct
                    ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40'
                    : 'border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40',
                )}
                role="status"
              >
                <p
                  className={clsx(
                    'text-base font-semibold',
                    result?.correct
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-rose-700 dark:text-rose-300',
                  )}
                >
                  {result?.correct ? 'Você acertou.' : 'Você errou.'}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {question.hasExplanation
                    ? result?.correct
                      ? 'O comentário abaixo confirma o raciocínio e mostra o distrator mais tentador.'
                      : 'O comentário abaixo explica onde o raciocínio se quebra.'
                    : result?.correct
                      ? 'Peça a explicação para confirmar o raciocínio e ver o distrator mais tentador.'
                      : 'O gabarito não é exibido aqui — peça a explicação para entender o erro.'}
                </p>
              </div>

              {result?.reviewNote && (
                <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/70 py-3 pl-4 pr-3 dark:bg-amber-950/30">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                    Ressalva sobre o gabarito oficial
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {result.reviewNote}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {/* O botão só existe para questão SEM comentário pronto. Onde já
                    há um, ele é carregado sozinho ao responder — pedir para o
                    usuário clicar em "Explicar com Claude" para receber um texto
                    que já está no banco seria um clique inútil. */}
                {!question.hasExplanation && (
                  <button
                    type="button"
                    onClick={() => requestExplanation(false)}
                    disabled={explaining}
                    className="btn-primary"
                  >
                    {explaining ? (
                      <>
                        <Spinner /> Gerando explicação…
                      </>
                    ) : explanation ? (
                      'Ver explicação'
                    ) : (
                      'Explicar com Claude'
                    )}
                  </button>
                )}

                {explanation && (
                  <button
                    type="button"
                    onClick={() => requestExplanation(true)}
                    disabled={explaining}
                    className="btn-secondary"
                  >
                    Gerar novamente
                  </button>
                )}

                <button type="button" onClick={markForReview} className="btn-secondary">
                  Marcar para revisar
                </button>

                {subject?.subtheme && RESUMO_SLUG_SET.has(subject.subtheme.slug) && (
                  <a href={`/resumos/${subject.subtheme.slug}`} className="btn-secondary">
                    Revisar assunto
                  </a>
                )}

                {nextHref && (
                  <a href={nextHref} className="btn-secondary ml-auto">
                    Próxima questão →
                  </a>
                )}
              </div>

              {explanationError && (
                <p className="text-sm text-rose-600 dark:text-rose-400" role="alert">
                  {explanationError}
                </p>
              )}
            </div>
          )}
        </article>

        {answered && explaining && !explanationHtml && (
          <section className="card flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <Spinner />
            {question.hasExplanation ? 'Carregando o comentário…' : 'Gerando o comentário…'}
          </section>
        )}

        {explanationHtml && (
          <section className="card animate-fade-in">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h2 className="font-semibold">Comentário</h2>
              <span className="badge bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                gerado pelo Claude
              </span>
            </div>
            <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">
              Ancorado em medicina baseada em evidências, com a hierarquia de fontes explicitada.
            </p>

            <div
              className="explanation text-sm"
              dangerouslySetInnerHTML={{ __html: explanationHtml }}
            />

            {/* A checagem de consistência é feita pelo próprio modelo. Chamar
                isso de "validação clínica" sem ressalva sugeriria revisão
                humana por especialista, que não houve. */}
            <p className="mt-5 border-t border-slate-200 pt-3 text-xs leading-relaxed text-slate-500 dark:border-slate-800 dark:text-slate-400">
              Texto gerado por IA, incluindo a checagem de consistência do gabarito — que é uma
              verificação do modelo contra a evidência que ele conhece, não revisão por
              especialista. Confira as referências antes de fixar a conduta.
            </p>
          </section>
        )}
      </div>

      <aside className="space-y-4">
        <div className="card">
          <button
            type="button"
            onClick={toggleFavorite}
            className={clsx(
              'btn w-full',
              favorite
                ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-950 dark:text-amber-300'
                : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800',
            )}
          >
            {favorite ? '★ Favorita' : '☆ Favoritar'}
          </button>

          {question.userState && question.userState.attemptCount > 0 && (
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-500 dark:text-slate-400">Tentativas</dt>
                <dd className="tabular-nums">{result?.attemptCount ?? question.userState.attemptCount}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500 dark:text-slate-400">Acertos</dt>
                <dd className="tabular-nums">{result?.correctCount ?? question.userState.correctCount}</dd>
              </div>
            </dl>
          )}
        </div>

        <div className="card">
          <label htmlFor="notes" className="label mb-2">
            Observações
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(event) => {
              setNotes(event.target.value);
              setNotesSaved('idle');
            }}
            rows={6}
            placeholder="Anote o raciocínio, o corte numérico, a pegadinha…"
            className="input resize-y"
          />
          <div className="mt-2 flex items-center gap-2">
            <button type="button" onClick={saveNotes} className="btn-secondary text-xs">
              {notesSaved === 'saving' ? 'Salvando…' : 'Salvar'}
            </button>
            {notesSaved === 'saved' && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400">Salvo</span>
            )}
          </div>
        </div>

        {/* Palavras-chave e incidência ficam fora do ar até a resposta: as
            primeiras costumam nomear o diagnóstico ou a droga certa, e a
            segunda identifica o assunto pelo nome. */}
        {subject && subject.keywords.length > 0 && (
          <div className="card animate-fade-in">
            <p className="label mb-2">Palavras-chave</p>
            <div className="flex flex-wrap gap-1">
              {subject.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {subject && (
          <div className="card animate-fade-in">
            <p className="label mb-2">Incidência do assunto</p>
            <p className="text-2xl font-semibold tabular-nums text-brand-600 dark:text-brand-400">
              {subject.subjectFrequency.toFixed(1)}%
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {subject.subtheme?.name ?? 'sem assunto classificado'} · do corpus histórico
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
      />
    </svg>
  );
}
