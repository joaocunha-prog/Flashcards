'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ProgressBar } from './ui';

/**
 * Botão "Gerar prova de 60 questões".
 *
 * A geração é assíncrona: o POST devolve um id de job e este componente
 * acompanha o progresso por polling. O botão fica desabilitado enquanto o
 * banco não tiver questões suficientes — a mesma regra é aplicada no servidor,
 * então habilitá-lo por fora do app não contorna nada.
 */

interface Readiness {
  ready: boolean;
  available: number;
  required: number;
  subjects: number;
  reason: string | null;
  runningJobId: string | null;
}

interface JobState {
  id: string;
  status: 'PENDENTE' | 'GERANDO' | 'CONCLUIDO' | 'FALHOU';
  requested: number;
  generated: number;
  progress: number;
  examSlug: string | null;
  error: string | null;
  blueprint: Array<{ label: string; count: number }>;
}

const EXAM_SIZE = 60;
const POLL_INTERVAL_MS = 3000;

export function GenerateExamButton() {
  const router = useRouter();
  const [readiness, setReadiness] = useState<Readiness | null>(null);
  const [job, setJob] = useState<JobState | null>(null);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loadReadiness = useCallback(async () => {
    try {
      const response = await fetch('/api/exams/generate');
      if (response.ok) setReadiness(await response.json());
    } catch {
      // Rede indisponível: o botão fica em "verificando" em vez de prometer
      // uma geração que não vai acontecer.
    }
  }, []);

  const pollJob = useCallback(
    async (jobId: string) => {
      try {
        const response = await fetch(`/api/exams/generate/${jobId}`);
        if (!response.ok) return;

        const data: JobState = await response.json();
        setJob(data);

        if (data.status === 'PENDENTE' || data.status === 'GERANDO') {
          timer.current = setTimeout(() => pollJob(jobId), POLL_INTERVAL_MS);
          return;
        }

        if (data.status === 'CONCLUIDO') {
          // A prova nova precisa aparecer nas listas já renderizadas.
          router.refresh();
          void loadReadiness();
        }
      } catch {
        timer.current = setTimeout(() => pollJob(jobId), POLL_INTERVAL_MS);
      }
    },
    [loadReadiness, router],
  );

  useEffect(() => {
    void loadReadiness();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [loadReadiness]);

  // Retoma o acompanhamento de uma geração que já estava rodando — por
  // exemplo depois de um F5 no meio do processo.
  useEffect(() => {
    if (readiness?.runningJobId && !job) {
      void pollJob(readiness.runningJobId);
    }
  }, [readiness?.runningJobId, job, pollJob]);

  async function start() {
    setStarting(true);
    setError(null);

    try {
      const response = await fetch('/api/exams/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ size: EXAM_SIZE }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error ?? 'Não foi possível iniciar a geração.');

      setJob({
        id: payload.jobId,
        status: 'PENDENTE',
        requested: EXAM_SIZE,
        generated: 0,
        progress: 0,
        examSlug: null,
        error: null,
        blueprint: [],
      });
      void pollJob(payload.jobId);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Erro inesperado.');
    } finally {
      setStarting(false);
    }
  }

  const running = job?.status === 'PENDENTE' || job?.status === 'GERANDO';

  return (
    <section className="card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="font-semibold">Gerar prova de {EXAM_SIZE} questões</h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Monta uma prova inédita a partir do banco: a distribuição de assuntos segue a incidência
            histórica, a dificuldade acompanha o perfil do corpus e as questões existentes servem de
            referência de estilo. As questões geradas entram no banco, mas ficam fora do cálculo de
            incidência.
          </p>
        </div>

        <button
          type="button"
          onClick={start}
          disabled={!readiness?.ready || running || starting}
          className="btn-primary shrink-0"
          title={readiness?.reason ?? undefined}
        >
          {starting || running ? 'Gerando…' : `Gerar prova de ${EXAM_SIZE} questões`}
        </button>
      </div>

      {/* Banco insuficiente: explica o porquê em vez de só desabilitar. */}
      {readiness && !readiness.ready && !running && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-200">
          <p className="font-medium">Indisponível por enquanto</p>
          <p className="mt-1 leading-relaxed">{readiness.reason}</p>
          {readiness.available < readiness.required && (
            <p className="mt-2">
              <Link href="/questoes" className="font-medium underline">
                Ver o banco
              </Link>{' '}
              · importe provas com{' '}
              <code className="rounded bg-amber-100 px-1 dark:bg-amber-900">
                npm run exam:import
              </code>
            </p>
          )}
        </div>
      )}

      {readiness?.ready && !job && (
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Base: {readiness.available} questões classificadas em {readiness.subjects} assuntos.
        </p>
      )}

      {running && (
        <div className="mt-4">
          <div className="mb-2 flex items-baseline justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              {job.status === 'PENDENTE' ? 'Preparando o blueprint…' : 'Elaborando questões…'}
            </span>
            <span className="tabular-nums text-slate-500 dark:text-slate-400">
              {job.generated}/{job.requested}
            </span>
          </div>
          <ProgressBar value={job.generated} max={Math.max(1, job.requested)} />
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Costuma levar alguns minutos. Pode navegar pelo app — o progresso é retomado ao voltar.
          </p>
        </div>
      )}

      {job?.status === 'CONCLUIDO' && (
        <div className="animate-fade-in mt-4 rounded-lg border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
          <p className="font-medium text-emerald-700 dark:text-emerald-300">
            Prova gerada com {job.generated} questões.
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Já está no banco. Use o modo “Simulado inédito” abaixo para resolvê-la, ou abra o banco
            filtrando pelas provas geradas.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/questoes?includeMocks=true&sort=recent" className="btn-secondary">
              Ver as questões
            </Link>
            <button type="button" onClick={() => setJob(null)} className="btn-ghost">
              Fechar
            </button>
          </div>
        </div>
      )}

      {job?.status === 'FALHOU' && (
        <div className="mt-4 rounded-lg border border-rose-300 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/40">
          <p className="font-medium text-rose-700 dark:text-rose-300">Falha na geração</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{job.error}</p>
          <button type="button" onClick={() => setJob(null)} className="btn-secondary mt-3">
            Tentar de novo
          </button>
        </div>
      )}

      {error && (
        <p className="mt-3 text-sm text-rose-600 dark:text-rose-400" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
