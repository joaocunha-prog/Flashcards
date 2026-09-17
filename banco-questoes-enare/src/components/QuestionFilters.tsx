'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState, useTransition } from 'react';
import clsx from 'clsx';

interface ThemeOption {
  slug: string;
  name: string;
  count: number;
}

/**
 * Filtros do banco de questões. O estado vive na URL, não em memória: assim
 * um filtro montado é compartilhável e sobrevive ao recarregar a página.
 */
export function QuestionFilters({
  themes,
  years,
  basePath = '/questoes',
  lockFavorites = false,
}: {
  themes: ThemeOption[];
  years: number[];
  basePath?: string;
  lockFavorites?: boolean;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState(params.get('q') ?? '');
  const [expanded, setExpanded] = useState(false);

  const push = useCallback(
    (next: URLSearchParams) => {
      next.delete('page'); // qualquer mudança de filtro volta para a página 1
      startTransition(() => {
        router.push(`${basePath}?${next.toString()}`);
      });
    },
    [basePath, router],
  );

  const toggleValue = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(params.toString());
      const current = next.getAll(key);
      next.delete(key);
      if (current.includes(value)) {
        current.filter((item) => item !== value).forEach((item) => next.append(key, item));
      } else {
        [...current, value].forEach((item) => next.append(key, item));
      }
      push(next);
    },
    [params, push],
  );

  function submitSearch(event: React.FormEvent) {
    event.preventDefault();
    const next = new URLSearchParams(params.toString());
    if (search.trim()) next.set('q', search.trim());
    else next.delete('q');
    push(next);
  }

  function setSingle(key: string, value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    push(next);
  }

  function clearAll() {
    const next = new URLSearchParams();
    if (lockFavorites) next.set('favorite', 'true');
    setSearch('');
    push(next);
  }

  const selectedThemes = params.getAll('theme');
  const selectedYears = params.getAll('year');
  const selectedDifficulties = params.getAll('difficulty');
  const selectedStatuses = params.getAll('status');
  const sort = params.get('sort') ?? 'recent';

  const activeCount =
    selectedThemes.length +
    selectedYears.length +
    selectedDifficulties.length +
    selectedStatuses.length +
    (params.get('q') ? 1 : 0);

  return (
    <div className={clsx('card mb-4', isPending && 'opacity-70')}>
      <div className="flex flex-wrap items-center gap-2">
        <form onSubmit={submitSearch} className="flex min-w-[240px] flex-1 gap-2">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por tema, palavra-chave ou enunciado…"
            className="input"
            aria-label="Buscar questões"
          />
          <button type="submit" className="btn-primary shrink-0">
            Buscar
          </button>
        </form>

        <select
          value={sort}
          onChange={(event) => setSingle('sort', event.target.value)}
          className="input w-auto shrink-0"
          aria-label="Ordenar por"
        >
          <option value="recent">Mais recentes</option>
          <option value="oldest">Mais antigas</option>
          <option value="incidence">Maior incidência</option>
        </select>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="btn-secondary shrink-0"
          aria-expanded={expanded}
        >
          Filtros
          {activeCount > 0 && (
            <span className="ml-1 rounded-full bg-brand-600 px-1.5 text-xs text-white dark:bg-brand-500 dark:text-slate-950">
              {activeCount}
            </span>
          )}
        </button>

        {activeCount > 0 && (
          <button type="button" onClick={clearAll} className="btn-ghost shrink-0">
            Limpar
          </button>
        )}
      </div>

      {expanded && (
        <div className="mt-4 space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
          <FilterGroup label="Tema">
            {themes.map((theme) => (
              <Chip
                key={theme.slug}
                active={selectedThemes.includes(theme.slug)}
                onClick={() => toggleValue('theme', theme.slug)}
              >
                {theme.name}
                <span className="ml-1 text-xs opacity-60">{theme.count}</span>
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Ano">
            {years.map((year) => (
              <Chip
                key={year}
                active={selectedYears.includes(String(year))}
                onClick={() => toggleValue('year', String(year))}
              >
                {year}
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Dificuldade">
            {(
              [
                ['FACIL', 'Fácil'],
                ['MEDIA', 'Média'],
                ['DIFICIL', 'Difícil'],
              ] as const
            ).map(([value, label]) => (
              <Chip
                key={value}
                active={selectedDifficulties.includes(value)}
                onClick={() => toggleValue('difficulty', value)}
              >
                {label}
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Status">
            {(
              [
                ['NAO_FEITA', 'Não feitas'],
                ['ACERTOU', 'Acertadas'],
                ['ERROU', 'Erradas'],
                ['REVISAR', 'Revisar'],
              ] as const
            ).map(([value, label]) => (
              <Chip
                key={value}
                active={selectedStatuses.includes(value)}
                onClick={() => toggleValue('status', value)}
              >
                {label}
              </Chip>
            ))}
          </FilterGroup>

          {!lockFavorites && (
            <FilterGroup label="Outros">
              <Chip
                active={params.get('favorite') === 'true'}
                onClick={() =>
                  setSingle('favorite', params.get('favorite') === 'true' ? null : 'true')
                }
              >
                Só favoritas
              </Chip>
              <Chip
                active={params.get('includeMocks') === 'true'}
                onClick={() =>
                  setSingle('includeMocks', params.get('includeMocks') === 'true' ? null : 'true')
                }
              >
                Incluir simulado inédito
              </Chip>
            </FilterGroup>
          )}
        </div>
      )}
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        active
          ? 'border-brand-600 bg-brand-600 text-white dark:border-brand-500 dark:bg-brand-500 dark:text-slate-950'
          : 'border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800',
      )}
    >
      {children}
    </button>
  );
}
