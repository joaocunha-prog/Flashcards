import Link from 'next/link';
import { readAnalysis } from '@/lib/analysis';
import { TAXONOMY_COUNTS } from '@data/taxonomy';
import { SubjectRanking } from '@/components/SubjectRanking';
import { EmptyBankNotice, PageHeader, StatCard } from '@/components/ui';

export const dynamic = 'force-dynamic';

/**
 * Etapa 1 — análise da banca.
 *
 * O ranking é por assunto (tema — subtema), clicável para revelar os tópicos.
 * Nenhum número aqui é fixo no código: tudo vem do último snapshot.
 */
export default async function AnalisePage() {
  const analysis = await readAnalysis();
  const isEmpty = analysis.totalQuestions === 0;

  const difficultyTotal =
    analysis.difficultyDistribution.FACIL +
    analysis.difficultyDistribution.MEDIA +
    analysis.difficultyDistribution.DIFICIL;

  return (
    <div>
      <PageHeader
        title="Análise da banca"
        subtitle={
          isEmpty
            ? 'Banco vazio — importe provas para gerar a análise'
            : `Corpus: ${analysis.totalQuestions} questões · ${analysis.totalExams} provas · ${analysis.years.join(', ')}`
        }
      />

      {isEmpty && <EmptyBankNotice />}

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Questões analisadas" value={analysis.totalQuestions} />
        <StatCard
          label="Assuntos com questões"
          value={analysis.subjects.length}
          hint={`de ${TAXONOMY_COUNTS.subthemes} mapeados`}
        />
        <StatCard
          label="Assuntos no corte 80/20"
          value={analysis.paretoSubjects.length}
          hint={
            analysis.paretoSubjects.length > 0
              ? `cobrem ${analysis.paretoSubjects.at(-1)?.cumulativePercent.toFixed(1)}% da prova`
              : 'aguardando questões'
          }
          tone="brand"
        />
        <StatCard label="Temas" value={analysis.themes.length} hint={`de ${TAXONOMY_COUNTS.themes}`} />
      </section>

      <section className="card mt-6">
        <h2 className="mb-1 font-semibold">Lista de estudo 80/20</h2>
        <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
          Assuntos ordenados por incidência até somarem {analysis.paretoCutoff}% do acumulado.
          Clique num assunto para abrir os tópicos específicos que ele cobra.
        </p>
        <SubjectRanking
          subjects={analysis.paretoSubjects}
          years={analysis.years}
          emptyMessage="Sem dados suficientes. Importe ao menos uma prova para o ranking aparecer."
        />
      </section>

      <section className="card mt-4">
        <h2 className="mb-1 font-semibold">Ranking completo por assunto</h2>
        <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
          Todos os assuntos com pelo menos uma questão no corpus.
        </p>
        <SubjectRanking
          subjects={analysis.subjects}
          years={analysis.years}
          emptyMessage="Nenhum assunto com questões ainda."
        />
        {analysis.unclassified > 0 && (
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            {analysis.unclassified}{' '}
            {analysis.unclassified === 1 ? 'questão está' : 'questões estão'} sem subtema
            classificado e {analysis.unclassified === 1 ? 'não entra' : 'não entram'} neste ranking.
          </p>
        )}
      </section>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <section className="card lg:col-span-2">
          <h2 className="mb-1 font-semibold">Agregado por tema</h2>
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
            Visão de alto nível. A lista de estudo usa o nível de assunto, mais acionável.
          </p>

          {analysis.themes.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Sem questões no banco.
            </p>
          ) : (
            <ul className="space-y-2">
              {analysis.themes.map((theme) => (
                <li key={theme.slug} className="flex items-center gap-3 text-sm">
                  <span className="w-6 shrink-0 tabular-nums text-slate-400">{theme.rank}.</span>
                  <Link
                    href={`/questoes?theme=${theme.slug}`}
                    className="min-w-0 flex-1 truncate hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {theme.name}
                  </Link>
                  <span className="h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <span
                      className="block h-full rounded-full bg-brand-400"
                      style={{
                        width: `${(theme.percent / Math.max(1, analysis.themes[0].percent)) * 100}%`,
                      }}
                    />
                  </span>
                  <span className="w-28 shrink-0 text-right tabular-nums text-slate-500 dark:text-slate-400">
                    {theme.total} q · {theme.percent.toFixed(1)}%
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="card">
          <h2 className="mb-4 font-semibold">Perfil de dificuldade</h2>
          <ul className="space-y-3">
            {(
              [
                ['FACIL', 'Fácil', 'bg-emerald-500'],
                ['MEDIA', 'Média', 'bg-amber-500'],
                ['DIFICIL', 'Difícil', 'bg-rose-500'],
              ] as const
            ).map(([key, label, color]) => {
              const count = analysis.difficultyDistribution[key];
              const percent = difficultyTotal === 0 ? 0 : (count / difficultyTotal) * 100;
              return (
                <li key={key}>
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <span className="tabular-nums text-slate-500 dark:text-slate-400">
                      {count} ({percent.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
            <p className="font-medium text-slate-700 dark:text-slate-300">Como atualizar</p>
            <p className="mt-1">
              Importe uma prova com{' '}
              <code className="rounded bg-slate-200 px-1 dark:bg-slate-700">
                npm run exam:import -- prova.json
              </code>{' '}
              e todos os números desta página são recalculados automaticamente.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
