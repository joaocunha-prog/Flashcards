/**
 * Mapa slug -> texto markdown do resumo.
 *
 * Ao escrever um resumo novo, crie `./nome-do-assunto.ts` exportando a string
 * markdown, importe-o aqui e acrescente uma entrada — e inclua o slug em
 * `./slugs.ts`.
 */
import hivAids from './hiv-aids';
import disturbiosDaHemostasia from './disturbios-da-hemostasia';
import emergenciasOncologicas from './emergencias-oncologicas';
import neuroinfeccaoEEmergenciasNeurologicas from './neuroinfeccao-e-emergencias-neurologicas';
import cirroseEComplicacoes from './cirrose-e-complicacoes';
import diarreiasEMaAbsorcao from './diarreias-e-ma-absorcao';
import doencasTropicaisENegligenciadas from './doencas-tropicais-e-negligenciadas';
import rimEmSituacoesEspeciais from './rim-em-situacoes-especiais';
import hepatopatiasNaoVirais from './hepatopatias-nao-virais';
import infeccoesRelacionadasAAssistencia from './infeccoes-relacionadas-a-assistencia';
import insuficienciaCardiaca from './insuficiencia-cardiaca';
import disturbiosMotores from './disturbios-motores';
import doencaRenalCronica from './doenca-renal-cronica';
import doencasDaTireoide from './doencas-da-tireoide';
import doencasNeuromusculares from './doencas-neuromusculares';
import infeccoesDePeleEPartesMoles from './infeccoes-de-pele-e-partes-moles';
import infeccoesDoTratoUrinario from './infeccoes-do-trato-urinario';
import infeccoesSexualmenteTransmissiveis from './infeccoes-sexualmente-transmissiveis';
import manifestacoesCutaneas from './manifestacoes-cutaneas';
import motilidadeIntestinal from './motilidade-intestinal';
import anemias from './anemias';
import arritmias from './arritmias';
import asma from './asma';
import diabetesMellitus from './diabetes-mellitus';
import dislipidemia from './dislipidemia';
import disturbiosHidroeletroliticos from './disturbios-hidroeletroliticos';
import intoxicacoesExogenas from './intoxicacoes-exogenas';
import nutricao from './nutricao';
import pneumonias from './pneumonias';
import rastreamentoOncologico from './rastreamento-oncologico';
import artritesMicrocristalinas from './artrites-microcristalinas';
import avaliacaoGeriatricaAmpla from './avaliacao-geriatrica-ampla';
import avaliacaoPerioperatoria from './avaliacao-perioperatoria';
import derramePleural from './derrame-pleural';
import doencasDaAdrenal from './doencas-da-adrenal';
import doencasDoPericardioEMiocardio from './doencas-do-pericardio-e-miocardio';
import doencasInflamatoriasIntestinais from './doencas-inflamatorias-intestinais';
import doencasIntersticiais from './doencas-intersticiais';
import dpoc from './dpoc';
import glomerulopatias from './glomerulopatias';
import hipertensaoArterial from './hipertensao-arterial';
import injuriaRenalAguda from './injuria-renal-aguda';
import sindromesAutoimunesInduzidas from './sindromes-autoimunes-induzidas';
import sindromesVasculares from './sindromes-vasculares';
import sindromesVestibulares from './sindromes-vestibulares';
import tuberculose from './tuberculose';
// #47-85 — assuntos fora do corte 80/20 (cauda longa, 1-2 questões cada no corpus)
import angioedema from './angioedema';
import catatonia from './catatonia';
import cefaleias from './cefaleias';
import cuidadosPaliativos from './cuidados-paliativos';
import demencias from './demencias';
import diabetesNoIdosoFragil from './diabetes-no-idoso-fragil';
import disturbiosAcidoBase from './disturbios-acido-base';
import disturbiosMetabolicos from './disturbios-metabolicos';
import doencasDaAortaEVasculares from './doencas-da-aorta-e-vasculares';
import doencasDaHipofise from './doencas-da-hipofise';
import doencasDeNotificacaoCompulsoria from './doencas-de-notificacao-compulsoria';
import doencasDoPancreas from './doencas-do-pancreas';
import doencasEmergentes from './doencas-emergentes';
import doencasRespiratoriasAtipicas from './doencas-respiratorias-atipicas';
import doencasVirais from './doencas-virais';
import espondiloartropatias from './espondiloartropatias';
import estabilizadoresDeHumor from './estabilizadores-de-humor';
import funcaoPulmonar from './funcao-pulmonar';
import hepatitesVirais from './hepatites-virais';
import imunizacaoDoIdoso from './imunizacao-do-idoso';
import leucemiasELinfomas from './leucemias-e-linfomas';
import metabolismoOsseoECalcio from './metabolismo-osseo-e-calcio';
import micosesEMicobacteriosesAtipicas from './micoses-e-micobacterioses-atipicas';
import micosesSistemicas from './micoses-sistemicas';
import neutropeniaFebril from './neutropenia-febril';
import olhoVermelho from './olho-vermelho';
import sarcopeniaEFragilidade from './sarcopenia-e-fragilidade';
import sincope from './sincope';
import sindromesAutoinflamatorias from './sindromes-autoinflamatorias';
import sindromesCoronarianasAgudas from './sindromes-coronarianas-agudas';
import sindromesMedularesEDesmielinizantes from './sindromes-medulares-e-desmielinizantes';
import toxicidadeDeQuimioterapicos from './toxicidade-de-quimioterapicos';
import transtornosAlimentares from './transtornos-alimentares';
import transtornosDoHumor from './transtornos-do-humor';
import transtornosPorUsoDeSubstancias from './transtornos-por-uso-de-substancias';
import tumoresNeuroendocrinosGastrointestinais from './tumores-neuroendocrinos-gastrointestinais';
import tumoresSolidos from './tumores-solidos';
import valvopatias from './valvopatias';
import vasculites from './vasculites';

export const RESUMO_CONTENT: Partial<Record<string, string>> = {
  'hiv-aids': hivAids,
  'disturbios-da-hemostasia': disturbiosDaHemostasia,
  'emergencias-oncologicas': emergenciasOncologicas,
  'neuroinfeccao-e-emergencias-neurologicas': neuroinfeccaoEEmergenciasNeurologicas,
  'cirrose-e-complicacoes': cirroseEComplicacoes,
  'diarreias-e-ma-absorcao': diarreiasEMaAbsorcao,
  'doencas-tropicais-e-negligenciadas': doencasTropicaisENegligenciadas,
  'rim-em-situacoes-especiais': rimEmSituacoesEspeciais,
  'hepatopatias-nao-virais': hepatopatiasNaoVirais,
  'infeccoes-relacionadas-a-assistencia': infeccoesRelacionadasAAssistencia,
  'insuficiencia-cardiaca': insuficienciaCardiaca,
  'disturbios-motores': disturbiosMotores,
  'doenca-renal-cronica': doencaRenalCronica,
  'doencas-da-tireoide': doencasDaTireoide,
  'doencas-neuromusculares': doencasNeuromusculares,
  'infeccoes-de-pele-e-partes-moles': infeccoesDePeleEPartesMoles,
  'infeccoes-do-trato-urinario': infeccoesDoTratoUrinario,
  'infeccoes-sexualmente-transmissiveis': infeccoesSexualmenteTransmissiveis,
  'manifestacoes-cutaneas': manifestacoesCutaneas,
  'motilidade-intestinal': motilidadeIntestinal,
  anemias,
  arritmias,
  asma,
  'diabetes-mellitus': diabetesMellitus,
  dislipidemia,
  'disturbios-hidroeletroliticos': disturbiosHidroeletroliticos,
  'intoxicacoes-exogenas': intoxicacoesExogenas,
  nutricao,
  pneumonias,
  'rastreamento-oncologico': rastreamentoOncologico,
  'artrites-microcristalinas': artritesMicrocristalinas,
  'avaliacao-geriatrica-ampla': avaliacaoGeriatricaAmpla,
  'avaliacao-perioperatoria': avaliacaoPerioperatoria,
  'derrame-pleural': derramePleural,
  'doencas-da-adrenal': doencasDaAdrenal,
  'doencas-do-pericardio-e-miocardio': doencasDoPericardioEMiocardio,
  'doencas-inflamatorias-intestinais': doencasInflamatoriasIntestinais,
  'doencas-intersticiais': doencasIntersticiais,
  dpoc,
  glomerulopatias,
  'hipertensao-arterial': hipertensaoArterial,
  'injuria-renal-aguda': injuriaRenalAguda,
  'sindromes-autoimunes-induzidas': sindromesAutoimunesInduzidas,
  'sindromes-vasculares': sindromesVasculares,
  'sindromes-vestibulares': sindromesVestibulares,
  tuberculose,
  angioedema,
  catatonia,
  cefaleias,
  'cuidados-paliativos': cuidadosPaliativos,
  demencias,
  'diabetes-no-idoso-fragil': diabetesNoIdosoFragil,
  'disturbios-acido-base': disturbiosAcidoBase,
  'disturbios-metabolicos': disturbiosMetabolicos,
  'doencas-da-aorta-e-vasculares': doencasDaAortaEVasculares,
  'doencas-da-hipofise': doencasDaHipofise,
  'doencas-de-notificacao-compulsoria': doencasDeNotificacaoCompulsoria,
  'doencas-do-pancreas': doencasDoPancreas,
  'doencas-emergentes': doencasEmergentes,
  'doencas-respiratorias-atipicas': doencasRespiratoriasAtipicas,
  'doencas-virais': doencasVirais,
  espondiloartropatias,
  'estabilizadores-de-humor': estabilizadoresDeHumor,
  'funcao-pulmonar': funcaoPulmonar,
  'hepatites-virais': hepatitesVirais,
  'imunizacao-do-idoso': imunizacaoDoIdoso,
  'leucemias-e-linfomas': leucemiasELinfomas,
  'metabolismo-osseo-e-calcio': metabolismoOsseoECalcio,
  'micoses-e-micobacterioses-atipicas': micosesEMicobacteriosesAtipicas,
  'micoses-sistemicas': micosesSistemicas,
  'neutropenia-febril': neutropeniaFebril,
  'olho-vermelho': olhoVermelho,
  'sarcopenia-e-fragilidade': sarcopeniaEFragilidade,
  sincope,
  'sindromes-autoinflamatorias': sindromesAutoinflamatorias,
  'sindromes-coronarianas-agudas': sindromesCoronarianasAgudas,
  'sindromes-medulares-e-desmielinizantes': sindromesMedularesEDesmielinizantes,
  'toxicidade-de-quimioterapicos': toxicidadeDeQuimioterapicos,
  'transtornos-alimentares': transtornosAlimentares,
  'transtornos-do-humor': transtornosDoHumor,
  'transtornos-por-uso-de-substancias': transtornosPorUsoDeSubstancias,
  'tumores-neuroendocrinos-gastrointestinais': tumoresNeuroendocrinosGastrointestinais,
  'tumores-solidos': tumoresSolidos,
  valvopatias,
  vasculites,
};
