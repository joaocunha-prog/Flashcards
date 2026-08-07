'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

interface ThemeOption {
  slug: string;
  name: string;
  count: number;
}

type Mode =
  | 'ALEATORIO'
  | 'POR_TEMA'
  | 'POR_INCIDENCIA'
  | 'APENAS_ERRADAS'
  | 'APENAS_REVISAO'
  | 'SIMULADO_INEDITO';

const MODES: Array<{ value: Mode; label: string; description: string }> = [
  {
    value: 'ALEATORIO',
    label: 'Aleatório',
    description: 'Sorteio livre em todo o banco.',
  },
  {
    value: 'POR_TEMA',
    label: 'Por tema',
    description: 'Escolha os temas que quer treinar.',
  },
  {
    value: 'POR_INCIDENCIA',
    label: 'Por incidência',
    description: 'Distribui as questões na proporção histórica de cada assunto.',
  },
  {
    value: 'APENAS_ERRADAS',
    label: 'Apenas erradas',
    description: 'Só o que você já errou.',
  },
  {
    value: 'APENAS_REVISAO',
    label: 'Apenas revisões',
    description: 'Só o que você marcou como "revisar".',
  },
  {
    value: 'SIMULADO_INEDITO',
    label: 'Prova gerada',
    description: 'Resolve a última prova gerada pelo botão acima, na íntegra.',
  },
];

export function QuizBuilder({ themes }: { themes: ThemeOption[] }) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('POR_INCIDENCIA');
  const [size, setSize] = useState(20);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggle(list: string[], value: string, setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  async function create() {
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          size,
          themeSlugs: mode === 'POR_TEMA' ? selectedThemes : undefined,
          difficulties: difficulties.length ? difficulties : undefined,
        }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error ?? 'Não foi possível montar o simulado.');
      }

      router.push(`/simulados/${payload.quizId}`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Erro inesperado.');
      setSubmitting(false);
    }
  }

  const isMock = mode === 'SIMULADO_INEDITO';

  return (
    <div className="card">
      <h2 className="mb-4 font-semibold">Montar simulado</h2>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {MODES.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setMode(option.value)}
            aria-pressed={mode === option.value}
            className={clsx(
              'rounded-lg border p-3 text-left transition-colors',
              mode === option.value
                ? 'border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950/40'
                : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700',
            )}
          >
            <p className="text-sm font-medium">{option.label}</p>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {option.description}
            </p>
          </button>
        ))}
      </div>

      {mode === 'POR_TEMA' && (
        <div className="mt-5">
          <p className="label mb-2">Temas</p>
          <div className="flex flex-wrap gap-1.5">
            {themes.map((theme) => (
              <button
                key={theme.slug}
                type="button"
                onClick={() => toggle(selectedThemes, theme.slug, setSelectedThemes)}
                aria-pressed={selectedThemes.includes(theme.slug)}
                className={clsx(
                  'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                  selectedThemes.includes(theme.slug)
                    ? 'border-brand-600 bg-brand-600 text-white dark:border-brand-500 dark:bg-brand-500 dark:text-slate-950'
                    : 'border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
                )}
              >
                {theme.name}
                <span className="ml-1 opacity-60">{theme.count}</span>
              </button>
            ))}
          </div>
          {selectedThemes.length === 0 && (
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Nenhum tema selecionado — o sorteio usará o banco inteiro.
            </p>
          )}
        </div>
      )}

      {!isMock && (
        <>
          <div className="mt-5">
            <p className="label mb-2">Dificuldade (opcional)</p>
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  ['FACIL', 'Fácil'],
                  ['MEDIA', 'Média'],
                  ['DIFICIL', 'Difícil'],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => toggle(difficulties, value, setDifficulties)}
                  aria-pressed={difficulties.includes(value)}
                  className={clsx(
                    'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                    difficulties.includes(value)
                      ? 'border-brand-600 bg-brand-600 text-white dark:border-brand-500 dark:bg-brand-500 dark:text-slate-950'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="size" className="label mb-2">
              Número de questões: <span className="tabular-nums">{size}</span>
            </label>
            <input
              id="size"
              type="range"
              min={5}
              max={50}
              step={5}
              value={size}
              onChange={(event) => setSize(Number(event.target.value))}
              className="w-full accent-brand-600"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>5</span>
              <span>50</span>
            </div>
          </div>
        </>
      )}

      {isMock && (
        <p className="mt-5 rounded-lg bg-slate-50 p-3 text-sm text-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
          Usa a prova gerada mais recente por inteiro — o tamanho e a distribuição já vêm prontos.
          Se ainda não houver nenhuma, gere uma no painel acima.
        </p>
      )}

      {error && (
        <p className="mt-4 text-sm text-rose-600 dark:text-rose-400" role="alert">
          {error}
        </p>
      )}

      <button type="button" onClick={create} disabled={submitting} className="btn-primary mt-5">
        {submitting ? 'Montando…' : 'Iniciar simulado'}
      </button>
    </div>
  );
}
