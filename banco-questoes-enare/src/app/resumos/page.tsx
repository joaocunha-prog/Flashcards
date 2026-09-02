import { listResumos } from '@/lib/resumos';
import { ResumosTabs } from '@/components/ResumosTabs';
import { EmptyState, PageHeader } from '@/components/ui';

export const dynamic = 'force-dynamic';

/**
 * Aba Resumos — duas vitrines sobre o mesmo conteúdo: **80/20**, os assuntos
 * dentro do corte de incidência (ranking ao vivo, igual à Análise da banca),
 * e **Selecionados**, uma curadoria editorial independente do ranking. A
 * lista completa vem de `listResumos()`; a troca de aba é só filtro client-side.
 */
export default async function ResumosPage() {
  const resumos = await listResumos();

  return (
    <div>
      <PageHeader
        title="Resumos"
        subtitle={
          resumos.length > 0
            ? `${resumos.length} resumos escritos — filtre por 80/20 (ranking de incidência) ou Selecionados (curadoria)`
            : 'Nenhum resumo disponível ainda'
        }
      />

      {resumos.length === 0 ? (
        <EmptyState
          title="Nenhum resumo publicado ainda"
          description="Escreva um resumo em data/resumos/ e importe a prova (ou a taxonomia) do assunto correspondente para ele aparecer aqui."
        />
      ) : (
        <ResumosTabs resumos={resumos} />
      )}
    </div>
  );
}
