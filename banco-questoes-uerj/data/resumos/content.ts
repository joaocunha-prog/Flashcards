// #1-10
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
// #11-38
import doencasDoPericardioEMiocardio from './doencas-do-pericardio-e-miocardio';
import doencasNeuromusculares from './doencas-neuromusculares';
import doencasTropicaisENegligenciadas from './doencas-tropicais-e-negligenciadas';
import hivAids from './hiv-aids';
import lupusEConectivopatias from './lupus-e-conectivopatias';
import artriteReumatoide from './artrite-reumatoide';
import diabetesMellitus from './diabetes-mellitus';
import disturbiosHidroeletroliticos from './disturbios-hidroeletroliticos';
import doencasIntersticiais from './doencas-intersticiais';
import pneumonias from './pneumonias';
import sindromesCoronarianasAgudas from './sindromes-coronarianas-agudas';
import sindromesVasculares from './sindromes-vasculares';
import arritmias from './arritmias';
import discrasiasPlasmocitarias from './discrasias-plasmocitarias';
import doencaRenalCronica from './doenca-renal-cronica';
import glomerulopatias from './glomerulopatias';
import infeccoesSexualmenteTransmissiveis from './infeccoes-sexualmente-transmissiveis';
import micosesSistemicas from './micoses-sistemicas';
import cirroseEComplicacoes from './cirrose-e-complicacoes';
import disturbiosMotores from './disturbios-motores';
import emergenciasDiabeticas from './emergencias-diabeticas';
import hipertensaoArterial from './hipertensao-arterial';
import injuriaRenalAguda from './injuria-renal-aguda';
import intoxicacoesExogenas from './intoxicacoes-exogenas';
import meningitesEInfeccoesDoSnc from './meningites-e-infeccoes-do-snc';
import neuroinfeccaoEEmergenciasNeurologicas from './neuroinfeccao-e-emergencias-neurologicas';
import rastreamentoOncologico from './rastreamento-oncologico';
import rimEmSituacoesEspeciais from './rim-em-situacoes-especiais';

/**
 * Índice de conteúdo dos resumos, por slug de assunto (subtema).
 *
 * Arquivo pesado (texto integral dos 38 resumos) — só deve ser importado no
 * servidor (`src/lib/resumos.ts`). Para checar em código cliente se um
 * assunto tem resumo, use o array leve `slugs.ts`, não este mapa.
 *
 * Para adicionar um resumo novo: crie `<slug-do-assunto>.ts` neste diretório
 * exportando a string em markdown, importe e registre aqui, e acrescente o
 * slug em `slugs.ts`.
 */
export const RESUMO_CONTENT: Record<string, string> = {
  // #1-10
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
  // #11-38
  'doencas-do-pericardio-e-miocardio': doencasDoPericardioEMiocardio,
  'doencas-neuromusculares': doencasNeuromusculares,
  'doencas-tropicais-e-negligenciadas': doencasTropicaisENegligenciadas,
  'hiv-aids': hivAids,
  'lupus-e-conectivopatias': lupusEConectivopatias,
  'artrite-reumatoide': artriteReumatoide,
  'diabetes-mellitus': diabetesMellitus,
  'disturbios-hidroeletroliticos': disturbiosHidroeletroliticos,
  'doencas-intersticiais': doencasIntersticiais,
  pneumonias: pneumonias,
  'sindromes-coronarianas-agudas': sindromesCoronarianasAgudas,
  'sindromes-vasculares': sindromesVasculares,
  arritmias: arritmias,
  'discrasias-plasmocitarias': discrasiasPlasmocitarias,
  'doenca-renal-cronica': doencaRenalCronica,
  glomerulopatias: glomerulopatias,
  'infeccoes-sexualmente-transmissiveis': infeccoesSexualmenteTransmissiveis,
  'micoses-sistemicas': micosesSistemicas,
  'cirrose-e-complicacoes': cirroseEComplicacoes,
  'disturbios-motores': disturbiosMotores,
  'emergencias-diabeticas': emergenciasDiabeticas,
  'hipertensao-arterial': hipertensaoArterial,
  'injuria-renal-aguda': injuriaRenalAguda,
  'intoxicacoes-exogenas': intoxicacoesExogenas,
  'meningites-e-infeccoes-do-snc': meningitesEInfeccoesDoSnc,
  'neuroinfeccao-e-emergencias-neurologicas': neuroinfeccaoEEmergenciasNeurologicas,
  'rastreamento-oncologico': rastreamentoOncologico,
  'rim-em-situacoes-especiais': rimEmSituacoesEspeciais,
};
