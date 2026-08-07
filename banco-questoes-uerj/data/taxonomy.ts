/**
 * Taxonomia de temas/subtemas de Clínica Médica.
 *
 * Importar uma prova nova não exige tocar neste arquivo: o importador cria
 * temas e subtemas ausentes automaticamente (ver src/lib/import.ts). A lista
 * abaixo apenas garante ordem de exibição e nomes canônicos estáveis.
 */

export interface SubthemeSeed {
  slug: string;
  name: string;
}

export interface ThemeSeed {
  slug: string;
  name: string;
  order: number;
  subthemes: SubthemeSeed[];
}

export const TAXONOMY: ThemeSeed[] = [
  {
    slug: 'cardiologia',
    name: 'Cardiologia',
    order: 1,
    subthemes: [
      { slug: 'sindromes-coronarianas-agudas', name: 'Síndromes coronarianas agudas' },
      { slug: 'insuficiencia-cardiaca', name: 'Insuficiência cardíaca' },
      { slug: 'arritmias', name: 'Arritmias' },
      { slug: 'hipertensao-arterial', name: 'Hipertensão arterial' },
      { slug: 'valvopatias', name: 'Valvopatias' },
      { slug: 'pericardio-e-miocardio', name: 'Doenças do pericárdio e miocárdio' },
      { slug: 'dislipidemia-e-risco-cv', name: 'Dislipidemia e risco cardiovascular' },
    ],
  },
  {
    slug: 'pneumologia',
    name: 'Pneumologia',
    order: 2,
    subthemes: [
      { slug: 'dpoc', name: 'DPOC' },
      { slug: 'asma', name: 'Asma' },
      { slug: 'pneumonias', name: 'Pneumonias' },
      { slug: 'tromboembolismo-pulmonar', name: 'Tromboembolismo pulmonar' },
      { slug: 'derrame-pleural', name: 'Derrame pleural' },
      { slug: 'doencas-intersticiais', name: 'Doenças intersticiais' },
      { slug: 'tuberculose-pulmonar', name: 'Tuberculose pulmonar' },
    ],
  },
  {
    slug: 'infectologia',
    name: 'Infectologia',
    order: 3,
    subthemes: [
      { slug: 'hiv-aids', name: 'HIV/AIDS' },
      { slug: 'sepse', name: 'Sepse' },
      { slug: 'endocardite-infecciosa', name: 'Endocardite infecciosa' },
      { slug: 'meningites', name: 'Meningites' },
      { slug: 'doencas-tropicais', name: 'Doenças tropicais e negligenciadas' },
      { slug: 'hepatites-virais', name: 'Hepatites virais' },
      { slug: 'antibioticoterapia', name: 'Antibioticoterapia' },
      { slug: 'infeccoes-relacionadas-assistencia', name: 'Infecções relacionadas à assistência' },
    ],
  },
  {
    slug: 'nefrologia',
    name: 'Nefrologia',
    order: 4,
    subthemes: [
      { slug: 'injuria-renal-aguda', name: 'Injúria renal aguda' },
      { slug: 'doenca-renal-cronica', name: 'Doença renal crônica' },
      { slug: 'disturbios-hidroeletroliticos', name: 'Distúrbios hidroeletrolíticos' },
      { slug: 'disturbios-acido-base', name: 'Distúrbios ácido-base' },
      { slug: 'glomerulopatias', name: 'Glomerulopatias' },
      { slug: 'nefrolitiase', name: 'Nefrolitíase' },
    ],
  },
  {
    slug: 'endocrinologia',
    name: 'Endocrinologia',
    order: 5,
    subthemes: [
      { slug: 'diabetes-mellitus', name: 'Diabetes mellitus' },
      { slug: 'emergencias-diabeticas', name: 'Emergências diabéticas' },
      { slug: 'tireoide', name: 'Doenças da tireoide' },
      { slug: 'adrenal', name: 'Doenças da adrenal' },
      { slug: 'obesidade-e-metabolismo', name: 'Obesidade e síndrome metabólica' },
      { slug: 'metabolismo-osseo', name: 'Metabolismo ósseo e cálcio' },
    ],
  },
  {
    slug: 'gastroenterologia',
    name: 'Gastroenterologia e Hepatologia',
    order: 6,
    subthemes: [
      { slug: 'hemorragia-digestiva', name: 'Hemorragia digestiva' },
      { slug: 'cirrose-e-complicacoes', name: 'Cirrose e complicações' },
      { slug: 'doenca-inflamatoria-intestinal', name: 'Doença inflamatória intestinal' },
      { slug: 'pancreatite', name: 'Pancreatite' },
      { slug: 'doenca-ulcerosa-peptica', name: 'Doença ulcerosa péptica e H. pylori' },
      { slug: 'diarreias', name: 'Diarreias' },
      { slug: 'hepatopatias-nao-virais', name: 'Hepatopatias não virais' },
    ],
  },
  {
    slug: 'hematologia',
    name: 'Hematologia',
    order: 7,
    subthemes: [
      { slug: 'anemias', name: 'Anemias' },
      { slug: 'leucemias-e-linfomas', name: 'Leucemias e linfomas' },
      { slug: 'disturbios-hemostasia', name: 'Distúrbios da hemostasia' },
      { slug: 'trombofilia-e-anticoagulacao', name: 'Trombofilia e anticoagulação' },
      { slug: 'discrasias-plasmocitarias', name: 'Discrasias plasmocitárias' },
    ],
  },
  {
    slug: 'reumatologia',
    name: 'Reumatologia',
    order: 8,
    subthemes: [
      { slug: 'artrite-reumatoide', name: 'Artrite reumatoide' },
      { slug: 'lupus-e-conectivopatias', name: 'Lúpus e conectivopatias' },
      { slug: 'vasculites', name: 'Vasculites' },
      { slug: 'espondiloartrites', name: 'Espondiloartrites' },
      { slug: 'artrites-microcristalinas', name: 'Artrites microcristalinas' },
      { slug: 'osteoartrite-e-dor-cronica', name: 'Osteoartrite e dor crônica' },
    ],
  },
  {
    slug: 'neurologia',
    name: 'Neurologia',
    order: 9,
    subthemes: [
      { slug: 'avc', name: 'Acidente vascular cerebral' },
      { slug: 'cefaleias', name: 'Cefaleias' },
      { slug: 'epilepsia', name: 'Epilepsia' },
      { slug: 'demencias', name: 'Demências' },
      { slug: 'doencas-neuromusculares', name: 'Doenças neuromusculares' },
      { slug: 'sindromes-medulares', name: 'Síndromes medulares e desmielinizantes' },
    ],
  },
  {
    slug: 'emergencias-e-terapia-intensiva',
    name: 'Emergências e Terapia Intensiva',
    order: 10,
    subthemes: [
      { slug: 'choque', name: 'Choque' },
      { slug: 'parada-cardiorrespiratoria', name: 'Parada cardiorrespiratória' },
      { slug: 'insuficiencia-respiratoria-e-vm', name: 'Insuficiência respiratória e ventilação mecânica' },
      { slug: 'intoxicacoes', name: 'Intoxicações exógenas' },
      { slug: 'rebaixamento-de-consciencia', name: 'Rebaixamento de consciência' },
    ],
  },
  {
    slug: 'oncologia',
    name: 'Oncologia',
    order: 11,
    subthemes: [
      { slug: 'rastreamento-oncologico', name: 'Rastreamento oncológico' },
      { slug: 'emergencias-oncologicas', name: 'Emergências oncológicas' },
      { slug: 'tumores-solidos', name: 'Tumores sólidos' },
      { slug: 'cuidados-paliativos', name: 'Cuidados paliativos' },
    ],
  },
  {
    slug: 'geriatria',
    name: 'Geriatria',
    order: 12,
    subthemes: [
      { slug: 'sindromes-geriatricas', name: 'Síndromes geriátricas' },
      { slug: 'delirium', name: 'Delirium' },
      { slug: 'polifarmacia', name: 'Polifarmácia e prescrição no idoso' },
      { slug: 'quedas-e-fragilidade', name: 'Quedas e fragilidade' },
    ],
  },
  {
    slug: 'medicina-preventiva',
    name: 'Medicina Preventiva e Epidemiologia',
    order: 13,
    subthemes: [
      { slug: 'epidemiologia-clinica', name: 'Epidemiologia clínica e testes diagnósticos' },
      { slug: 'rastreamento-e-prevencao', name: 'Rastreamento e prevenção' },
      { slug: 'imunizacoes', name: 'Imunizações' },
      { slug: 'bioestatistica', name: 'Bioestatística' },
      { slug: 'etica-e-sus', name: 'Ética médica e SUS' },
    ],
  },
];

/** Mapa slug de subtema -> slug de tema, útil para validar importações. */
export const SUBTHEME_TO_THEME: Record<string, string> = Object.fromEntries(
  TAXONOMY.flatMap((theme) => theme.subthemes.map((sub) => [sub.slug, theme.slug])),
);
