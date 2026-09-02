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
};
