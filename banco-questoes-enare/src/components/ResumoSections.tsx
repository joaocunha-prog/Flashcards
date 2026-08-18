'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { RESUMO_SECTION_LABEL, type ResumoSection } from '@/lib/resumoSections';

/**
 * Corpo do resumo — índice fixo (desktop) / faixa horizontal (mobile) que
 * acompanha a rolagem, com uma seção por card, borda colorida por tipo.
 *
 * Cada card usa a mesma classe `.explanation` (globals.css) do renderizador
 * de comentários para o HTML interno — tabelas, listas e negrito já têm
 * estilo pronto ali, sem duplicar CSS.
 */

const KIND_STYLE: Partial<Record<ResumoSection['kind'], { badge: string; border: string }>> = {
  essencial: {
    badge: 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300',
    border: 'border-l-brand-500 dark:border-l-brand-500',
  },
  pearls: {
    badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    border: 'border-l-emerald-500 dark:border-l-emerald-600',
  },
  pitfalls: {
    badge: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
    border: 'border-l-rose-500 dark:border-l-rose-600',
  },
  enare: {
    badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
    border: 'border-l-indigo-500 dark:border-l-indigo-600',
  },
  atualizacao: {
    badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    border: 'border-l-amber-500 dark:border-l-amber-600',
  },
  mnemonicos: {
    badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    border: 'border-l-amber-500 dark:border-l-amber-600',
  },
};
const DEFAULT_STYLE = {
  badge: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
  border: 'border-l-slate-300 dark:border-l-slate-700',
};

function styleFor(kind: ResumoSection['kind']) {
  return KIND_STYLE[kind] ?? DEFAULT_STYLE;
}

export function ResumoSections({ sections }: { sections: ResumoSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('[data-resumo-section]');
    if (!nodes || nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      // Considera "atual" a seção que ocupa a faixa logo abaixo do cabeçalho
      // fixo — sem isso, o item ativo troca só quando a seção já está saindo
      // de tela, tarde demais para orientar a rolagem.
      { rootMargin: '-15% 0px -70% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="grid gap-5 lg:grid-cols-[200px_minmax(0,1fr)] lg:items-start">
      <nav
        aria-label="Seções do resumo"
        className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-2 lg:sticky lg:top-20 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={clsx(
              'flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border-l-2 px-2.5 py-1.5 text-xs font-medium transition-colors lg:shrink lg:whitespace-normal',
              activeId === section.id
                ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                : 'border-transparent text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
            )}
          >
            <span aria-hidden>{section.emoji}</span>
            {RESUMO_SECTION_LABEL[section.kind] ?? section.title}
          </a>
        ))}
      </nav>

      <div ref={containerRef} className="flex flex-col gap-4">
        {sections.map((section) => {
          const style = styleFor(section.kind);
          return (
            <section
              key={section.id}
              id={section.id}
              data-resumo-section
              className={clsx('card scroll-mt-24 rounded-l-none border-l-4', style.border)}
            >
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  className={clsx(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base',
                    style.badge,
                  )}
                  aria-hidden
                >
                  {section.emoji}
                </span>
                <h2 className="text-base font-semibold">{section.title}</h2>
              </div>
              <div className="explanation text-sm" dangerouslySetInnerHTML={{ __html: section.html }} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
