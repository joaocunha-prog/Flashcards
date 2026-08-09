import clsx from 'clsx';
import type { Difficulty, QuestionStatus } from '@prisma/client';

/** Blocos visuais reaproveitados pelas páginas. */

/** Rótulo em caixa alta com os controles embaixo, quebrando em várias linhas. */
export function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

/**
 * Pastilha de seleção. `disabled` serve ao caso "já incluído por um nó pai":
 * o item aparece marcado, mas não é o clique dele que o colocou ali.
 */
export function Chip({
  active,
  onClick,
  disabled = false,
  title,
  children,
}: {
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      disabled={disabled}
      title={title}
      className={clsx(
        'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        disabled && 'cursor-not-allowed opacity-50',
        active
          ? 'border-brand-600 bg-brand-600 text-white dark:border-brand-500 dark:bg-brand-500 dark:text-slate-950'
          : 'border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300',
        !active && !disabled && 'hover:bg-slate-100 dark:hover:bg-slate-800',
      )}
    >
      {children}
    </button>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  tone = 'neutral',
}: {
  label: string;
  value: string | number;
  hint?: string;
  tone?: 'neutral' | 'positive' | 'negative' | 'brand';
}) {
  const toneClass = {
    neutral: 'text-slate-900 dark:text-slate-100',
    positive: 'text-emerald-600 dark:text-emerald-400',
    negative: 'text-rose-600 dark:text-rose-400',
    brand: 'text-brand-600 dark:text-brand-400',
  }[tone];

  return (
    <div className="card">
      <p className="label">{label}</p>
      <p className={clsx('mt-2 text-3xl font-semibold tabular-nums', toneClass)}>{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>}
    </div>
  );
}

export function ProgressBar({
  value,
  max = 100,
  className,
  tone = 'brand',
}: {
  value: number;
  max?: number;
  className?: string;
  tone?: 'brand' | 'emerald' | 'rose' | 'amber';
}) {
  const percent = max === 0 ? 0 : Math.min(100, Math.max(0, (value / max) * 100));
  const toneClass = {
    brand: 'bg-brand-500',
    emerald: 'bg-emerald-500',
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
  }[tone];

  return (
    <div
      className={clsx('h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800', className)}
      role="progressbar"
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={clsx('h-full rounded-full transition-all', toneClass)} style={{ width: `${percent}%` }} />
    </div>
  );
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  FACIL: 'Fácil',
  MEDIA: 'Média',
  DIFICIL: 'Difícil',
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const styles: Record<Difficulty, string> = {
    FACIL: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    MEDIA: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    DIFICIL: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
  };
  return <span className={clsx('badge', styles[difficulty])}>{DIFFICULTY_LABEL[difficulty]}</span>;
}

export const STATUS_LABEL: Record<QuestionStatus, string> = {
  NAO_FEITA: 'Não feita',
  ACERTOU: 'Acertou',
  ERROU: 'Errou',
  REVISAR: 'Revisar',
};

export function StatusBadge({ status }: { status: QuestionStatus }) {
  const styles: Record<QuestionStatus, string> = {
    NAO_FEITA: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
    ACERTOU: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    ERROU: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
    REVISAR: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  };
  return <span className={clsx('badge', styles[status])}>{STATUS_LABEL[status]}</span>;
}

export function EmptyState({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="card flex flex-col items-center gap-2 py-12 text-center">
      <p className="font-medium">{title}</p>
      {description && <p className="max-w-md text-sm text-slate-500 dark:text-slate-400">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

/**
 * Aviso de banco vazio. Aparece enquanto não houver questões: sem corpus não
 * há incidência, ranking nem geração de prova, e é melhor dizer isso do que
 * mostrar telas zeradas sem explicação.
 */
export function EmptyBankNotice() {
  return (
    <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-200">
      <p className="font-medium">O banco está vazio</p>
      <p className="mt-1 leading-relaxed">
        Nenhuma questão foi cadastrada ainda, então o ranking de assuntos e a lista 80/20 aparecem
        zerados. Importe as provas da banca para popular o banco:
      </p>
      <p className="mt-2">
        <code className="rounded bg-amber-100 px-1.5 py-0.5 dark:bg-amber-900">
          npm run exam:import -- prova.json
        </code>
      </p>
      <p className="mt-2 leading-relaxed">
        A taxonomia de temas, assuntos e tópicos já está carregada e serve de mapa de estudo. A
        partir das questões importadas, as estatísticas são recalculadas sozinhas e o botão de
        gerar prova é liberado.
      </p>
    </div>
  );
}
