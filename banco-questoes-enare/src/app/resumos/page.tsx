import { listResumos } from '@/lib/resumos';
import { ResumoCard } from '@/components/ResumoCard';
import { EmptyState, PageHeader } from '@/components/ui';

export const dynamic = 'force-dynamic';

/**
 * Aba Resumos — os assuntos de maior incidência, em ordem de prioridade
 * 80/20, cada um com resumo médico completo. A ordem e os números vêm do
 * mesmo ranking calculado em `/analise`; só o conteúdo textual é próprio
 * desta aba.
 */
export default async function ResumosPage() {
  const resumos = await listResumos();

  return (
    <div>
      <PageHeader
        title="Resumos"
        subtitle={
          resumos.length > 0
            ? `Os ${resumos.length} assuntos de maior incidência, em ordem de prioridade — a mesma curva 80/20 da Análise da banca`
            : 'Nenhum resumo disponível ainda'
        }
      />

      {resumos.length === 0 ? (
        <EmptyState
          title="Nenhum resumo publicado ainda"
          description="Os resumos cobrem os assuntos de maior incidência do ranking 80/20. Importe provas para o ranking ser calculado."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resumos.map((resumo) => (
            <ResumoCard key={resumo.slug} resumo={resumo} />
          ))}
        </div>
      )}
    </div>
  );
}
