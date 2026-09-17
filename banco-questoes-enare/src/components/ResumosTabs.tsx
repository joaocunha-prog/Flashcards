'use client';

import { useState } from 'react';
import clsx from 'clsx';
import type { ResumoSummary } from '@/lib/resumos';
import { ResumoCard } from '@/components/ResumoCard';
import { EmptyState } from '@/components/ui';

type Tab = 'PARETO' | 'SELECIONADOS';

const TABS: Array<{ value: Tab; label: string; filter: (r: ResumoSummary) => boolean }> = [
  { value: 'PARETO', label: '80/20', filter: (r) => r.isPareto },
  { value: 'SELECIONADOS', label: 'Selecionados', filter: (r) => r.selected },
];

/** Duas vitrines sobre a mesma lista de resumos: 80/20 (ranking) e Selecionados (curadoria). */
export function ResumosTabs({ resumos }: { resumos: ResumoSummary[] }) {
  const [tab, setTab] = useState<Tab>('PARETO');
  const active = TABS.find((t) => t.value === tab)!;
  const filtered = resumos.filter(active.filter);

  return (
    <div>
      <div className="mb-4 flex gap-2">
        {TABS.map((option) => {
          const count = resumos.filter(option.filter).length;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setTab(option.value)}
              aria-pressed={tab === option.value}
              className={clsx(
                'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
                tab === option.value
                  ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700',
              )}
            >
              {option.label} <span className="tabular-nums opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title={
            tab === 'PARETO'
              ? 'Nenhum resumo dentro do corte 80/20 ainda'
              : 'Nenhum resumo selecionado ainda'
          }
          description={
            tab === 'PARETO'
              ? 'Assim que um assunto com resumo entrar no corte de 80% de incidência, ele aparece aqui.'
              : 'Marque "📌 Selecionar" na página de um resumo para colocá-lo nesta vitrine.'
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resumo) => (
            <ResumoCard key={resumo.slug} resumo={resumo} />
          ))}
        </div>
      )}
    </div>
  );
}
