'use client';

import { useState } from 'react';
import clsx from 'clsx';

/** Alterna a marcação "Selecionado" de um resumo — vitrine editorial, global, ao lado do 80/20. */
export function SelectResumoButton({
  slug,
  initialSelected,
}: {
  slug: string;
  initialSelected: boolean;
}) {
  const [selected, setSelected] = useState(initialSelected);
  const [saving, setSaving] = useState(false);

  async function toggle() {
    const next = !selected;
    setSelected(next);
    setSaving(true);
    try {
      const response = await fetch(`/api/resumos/${slug}/select`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selected: next }),
      });
      if (!response.ok) setSelected(!next); // desfaz o otimismo se o servidor recusou
    } catch {
      setSelected(!next);
    } finally {
      setSaving(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={saving}
      aria-pressed={selected}
      className={clsx(
        'btn-secondary',
        selected && 'border-brand-500 text-brand-600 dark:border-brand-500 dark:text-brand-400',
      )}
    >
      {selected ? '📌 Selecionado' : '📌 Selecionar'}
    </button>
  );
}
