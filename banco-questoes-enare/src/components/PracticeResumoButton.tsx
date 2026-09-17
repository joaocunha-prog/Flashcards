'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * "Praticar este assunto" — monta um simulado com o simulador já existente
 * (modo POR_TEMA filtrado pelo assunto), em vez de um sistema de questões
 * próprio da aba Resumos.
 */
export function PracticeResumoButton({
  subthemeSlug,
  size,
}: {
  subthemeSlug: string;
  size: number;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function start() {
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'POR_TEMA', subthemeSlugs: [subthemeSlug], size }),
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

  return (
    <div>
      <button type="button" onClick={start} disabled={submitting} className="btn-primary">
        {submitting ? 'Montando…' : 'Praticar este assunto'}
      </button>
      {error && (
        <p className="mt-2 text-sm text-rose-600 dark:text-rose-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
