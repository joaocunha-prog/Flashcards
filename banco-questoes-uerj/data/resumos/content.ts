import hepatopatiasNaoVirais from './hepatopatias-nao-virais';
import anemias from './anemias';
import emergenciasOncologicas from './emergencias-oncologicas';
import tumoresSolidos from './tumores-solidos';
import doencasDaAdrenal from './doencas-da-adrenal';
import leucemiasELinfomas from './leucemias-e-linfomas';
import vasculites from './vasculites';
import disturbiosDaHemostasia from './disturbios-da-hemostasia';
import doencasDaTireoide from './doencas-da-tireoide';
import doencasDoEsofago from './doencas-do-esofago';

/**
 * Índice de conteúdo dos resumos, por slug de assunto (subtema).
 *
 * Arquivo pesado (texto integral dos 10 resumos) — só deve ser importado no
 * servidor (`src/lib/resumos.ts`). Para checar em código cliente se um
 * assunto tem resumo, use o array leve `slugs.ts`, não este mapa.
 *
 * Para adicionar um resumo novo: crie `<slug-do-assunto>.ts` neste diretório
 * exportando a string em markdown, importe e registre aqui, e acrescente o
 * slug em `slugs.ts`.
 */
export const RESUMO_CONTENT: Record<string, string> = {
  'hepatopatias-nao-virais': hepatopatiasNaoVirais,
  anemias: anemias,
  'emergencias-oncologicas': emergenciasOncologicas,
  'tumores-solidos': tumoresSolidos,
  'doencas-da-adrenal': doencasDaAdrenal,
  'leucemias-e-linfomas': leucemiasELinfomas,
  vasculites: vasculites,
  'disturbios-da-hemostasia': disturbiosDaHemostasia,
  'doencas-da-tireoide': doencasDaTireoide,
  'doencas-do-esofago': doencasDoEsofago,
};
