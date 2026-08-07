/**
 * Taxonomia de Clínica Médica em três níveis:
 *
 *   Tema          Neurologia
 *   └ Subtema     Síndromes vasculares          ← o "assunto" do ranking
 *     └ Tópico    AVC isquêmico — trombólise    ← o detalhe clicável
 *
 * O ranking de incidência é calculado no nível de **subtema**, exibido como
 * "Tema — Subtema". Clicar num assunto abre a lista de tópicos com a
 * incidência de cada um.
 *
 * Importar uma prova nova não exige tocar neste arquivo: o importador cria
 * tema, subtema e tópico ausentes automaticamente (ver src/lib/import.ts).
 * A lista abaixo garante nomes canônicos e ordem de exibição estáveis, e
 * serve de mapa de estudo mesmo com o banco vazio.
 */

export interface TopicSeed {
  slug: string;
  name: string;
}

export interface SubthemeSeed {
  slug: string;
  name: string;
  topics: TopicSeed[];
}

export interface ThemeSeed {
  slug: string;
  name: string;
  order: number;
  subthemes: SubthemeSeed[];
}

/** Normaliza um nome em slug: sem acentos, minúsculo, hifenizado. */
export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Slug de tópico é prefixado pelo subtema para garantir unicidade global:
 * "Tratamento" aparece em dezenas de subtemas diferentes.
 */
export function topicSlug(subthemeSlug: string, topicName: string): string {
  return `${subthemeSlug}--${slugify(topicName)}`;
}

/** Definição compacta: tópicos entram como nomes, os slugs são derivados. */
type RawTheme = [themeSlug: string, themeName: string, subthemes: RawSubtheme[]];
type RawSubtheme = [subthemeSlug: string, subthemeName: string, topics: string[]];

const RAW: RawTheme[] = [
  ['cardiologia', 'Cardiologia', [
    ['sindromes-coronarianas-agudas', 'Síndromes coronarianas agudas', [
      'IAM com supra de ST — reperfusão',
      'IAM sem supra de ST — estratificação',
      'Angina instável',
      'Infarto de ventrículo direito',
      'Complicações mecânicas do infarto',
      'Antiagregação e anticoagulação na SCA',
      'Angina estável e testes de isquemia',
    ]],
    ['insuficiencia-cardiaca', 'Insuficiência cardíaca', [
      'ICFEr — terapia quádrupla',
      'ICFEp — manejo',
      'IC aguda e edema agudo de pulmão',
      'Choque cardiogênico',
      'Dispositivos e transplante',
      'Diuréticos e congestão refratária',
    ]],
    ['arritmias', 'Arritmias', [
      'Fibrilação atrial — controle de frequência e ritmo',
      'Fibrilação atrial — anticoagulação',
      'Flutter atrial',
      'Taquicardias supraventriculares',
      'Taquicardias ventriculares',
      'Bradiarritmias e marca-passo',
      'Síndromes de pré-excitação',
      'Síndrome do QT longo',
    ]],
    ['hipertensao-arterial', 'Hipertensão arterial', [
      'Diagnóstico e estratificação',
      'Tratamento farmacológico',
      'Hipertensão resistente',
      'Hipertensão secundária',
      'Emergência e urgência hipertensiva',
    ]],
    ['valvopatias', 'Valvopatias', [
      'Estenose aórtica',
      'Insuficiência aórtica',
      'Estenose mitral',
      'Insuficiência mitral',
      'Próteses valvares e anticoagulação',
      'Febre reumática',
    ]],
    ['pericardio-e-miocardio', 'Doenças do pericárdio e miocárdio', [
      'Pericardite aguda',
      'Tamponamento cardíaco',
      'Pericardite constritiva',
      'Miocardites',
      'Cardiomiopatia hipertrófica',
      'Cardiomiopatia dilatada',
      'Cardiomiopatias restritivas e infiltrativas',
    ]],
    ['dislipidemia-e-risco-cv', 'Dislipidemia e risco cardiovascular', [
      'Estratificação de risco cardiovascular',
      'Estatinas e metas de LDL',
      'Hipertrigliceridemia',
      'Prevenção primária e secundária',
    ]],
    ['doencas-da-aorta', 'Doenças da aorta e vasculares', [
      'Dissecção aguda de aorta',
      'Aneurisma de aorta abdominal',
      'Doença arterial periférica',
    ]],
  ]],

  ['pneumologia', 'Pneumologia', [
    ['dpoc', 'DPOC', [
      'Diagnóstico e espirometria',
      'Tratamento de manutenção (GOLD)',
      'Exacerbação aguda',
      'Oxigenoterapia domiciliar',
      'Deficiência de alfa-1-antitripsina',
    ]],
    ['asma', 'Asma', [
      'Diagnóstico e prova de função pulmonar',
      'Controle e ajuste de etapa',
      'Crise asmática',
      'Asma grave e imunobiológicos',
    ]],
    ['pneumonias', 'Pneumonias', [
      'PAC — avaliação de gravidade',
      'PAC — antibioticoterapia',
      'Pneumonia hospitalar e associada à ventilação',
      'Pneumonia aspirativa e abscesso pulmonar',
      'Pneumonia no imunossuprimido',
    ]],
    ['tromboembolismo-pulmonar', 'Tromboembolismo pulmonar', [
      'Probabilidade pré-teste e D-dímero',
      'Diagnóstico por imagem',
      'Estratificação de risco e trombólise',
      'Anticoagulação e duração do tratamento',
      'Hipertensão pulmonar tromboembólica crônica',
    ]],
    ['derrame-pleural', 'Derrame pleural', [
      'Critérios de Light',
      'Derrame parapneumônico e empiema',
      'Derrame neoplásico',
      'Pneumotórax',
    ]],
    ['doencas-intersticiais', 'Doenças intersticiais', [
      'Fibrose pulmonar idiopática',
      'Pneumonite de hipersensibilidade',
      'Sarcoidose',
      'Doença intersticial associada a colagenoses',
      'Pneumoconioses',
    ]],
    ['tuberculose-pulmonar', 'Tuberculose pulmonar', [
      'Diagnóstico (TRM-TB e baciloscopia)',
      'Esquema básico e efeitos adversos',
      'Infecção latente',
      'Tuberculose resistente',
      'Tuberculose extrapulmonar',
    ]],
    ['nodulo-e-rastreamento-pulmonar', 'Nódulo pulmonar e rastreamento', [
      'Nódulo pulmonar solitário',
      'Rastreamento de câncer de pulmão',
    ]],
    ['disturbios-respiratorios-do-sono', 'Distúrbios respiratórios do sono', [
      'Apneia obstrutiva do sono',
      'Síndrome obesidade-hipoventilação',
    ]],
  ]],

  ['infectologia', 'Infectologia', [
    ['hiv-aids', 'HIV/AIDS', [
      'Diagnóstico e testagem',
      'Início e escolha da TARV',
      'Falha virológica e resistência',
      'Profilaxias primárias por CD4',
      'Pneumocistose',
      'Neurotoxoplasmose',
      'Neurocriptococose',
      'Síndrome inflamatória de reconstituição imune',
      'PrEP e profilaxia pós-exposição',
    ]],
    ['sepse', 'Sepse', [
      'Definições e escores',
      'Ressuscitação volêmica inicial',
      'Vasopressores e alvos hemodinâmicos',
      'Controle de foco e antibioticoterapia precoce',
    ]],
    ['endocardite-infecciosa', 'Endocardite infecciosa', [
      'Critérios de Duke',
      'Etiologia e hemoculturas',
      'Antibioticoterapia',
      'Indicações cirúrgicas',
      'Profilaxia',
    ]],
    ['meningites', 'Meningites e infecções do SNC', [
      'Meningite bacteriana aguda',
      'Meningite viral e asséptica',
      'Meningite tuberculosa',
      'Análise do líquor',
      'Quimioprofilaxia de contatos',
      'Encefalite herpética',
      'Abscesso cerebral',
    ]],
    ['doencas-tropicais', 'Doenças tropicais e negligenciadas', [
      'Dengue',
      'Chikungunya e Zika',
      'Malária',
      'Leptospirose',
      'Febre amarela',
      'Doença de Chagas',
      'Leishmanioses',
      'Esquistossomose',
      'Hanseníase',
    ]],
    ['hepatites-virais', 'Hepatites virais', [
      'Hepatites A e E',
      'Hepatite B — interpretação sorológica',
      'Hepatite B — tratamento',
      'Hepatite C — diagnóstico e antivirais',
      'Hepatite D',
      'Profilaxia pós-exposição ocupacional',
    ]],
    ['antibioticoterapia', 'Antibioticoterapia', [
      'Espectro e escolha empírica',
      'Infecção por Clostridioides difficile',
      'Multirresistência (ESBL, KPC, MRSA)',
      'Descalonamento e duração',
      'Alergia a betalactâmicos',
    ]],
    ['infeccoes-relacionadas-assistencia', 'Infecções relacionadas à assistência', [
      'Infecção de corrente sanguínea por cateter',
      'Infecção urinária associada a sonda',
      'Precauções e controle de infecção',
      'Febre no pós-operatório',
    ]],
    ['infeccoes-pele-partes-moles', 'Infecções de pele e partes moles', [
      'Celulite e erisipela',
      'Fasciíte necrosante',
      'Pé diabético infectado',
      'Osteomielite',
    ]],
    ['infeccoes-trato-urinario', 'Infecções do trato urinário', [
      'Cistite não complicada',
      'Pielonefrite',
      'Bacteriúria assintomática',
      'ITU complicada e recorrente',
    ]],
  ]],

  ['nefrologia', 'Nefrologia', [
    ['injuria-renal-aguda', 'Injúria renal aguda', [
      'Classificação KDIGO',
      'IRA pré-renal',
      'Necrose tubular aguda',
      'Nefrite intersticial aguda',
      'IRA pós-renal obstrutiva',
      'Indicações de diálise de urgência',
      'Síndrome cardiorrenal',
    ]],
    ['doenca-renal-cronica', 'Doença renal crônica', [
      'Estadiamento e albuminúria',
      'Nefroproteção e controle da progressão',
      'Distúrbio mineral e ósseo',
      'Anemia da doença renal crônica',
      'Acidose metabólica na DRC',
      'Preparo para terapia renal substitutiva',
    ]],
    ['disturbios-hidroeletroliticos', 'Distúrbios hidroeletrolíticos', [
      'Hiponatremia',
      'Hipernatremia',
      'Hipopotassemia',
      'Hiperpotassemia',
      'Distúrbios do cálcio',
      'Distúrbios do magnésio e do fósforo',
    ]],
    ['disturbios-acido-base', 'Distúrbios ácido-base', [
      'Acidose metabólica com ânion gap elevado',
      'Acidose metabólica hiperclorêmica',
      'Alcalose metabólica',
      'Distúrbios respiratórios',
      'Distúrbios mistos',
      'Acidose tubular renal',
    ]],
    ['glomerulopatias', 'Glomerulopatias', [
      'Síndrome nefrítica',
      'Síndrome nefrótica',
      'Nefropatia por IgA',
      'Lesão mínima e GESF',
      'Nefropatia membranosa',
      'Nefrite lúpica',
      'Glomerulonefrite rapidamente progressiva',
      'Nefropatia diabética',
    ]],
    ['nefrolitiase', 'Nefrolitíase', [
      'Cólica renal — manejo agudo',
      'Composição dos cálculos',
      'Prevenção de recorrência',
    ]],
    ['rim-situacoes-especiais', 'Rim em situações especiais', [
      'Nefrotoxicidade por fármacos',
      'Nefropatia por contraste',
      'Doença renal policística',
      'Hipertensão renovascular',
    ]],
  ]],

  ['endocrinologia', 'Endocrinologia', [
    ['diabetes-mellitus', 'Diabetes mellitus', [
      'Diagnóstico e rastreamento',
      'Metformina e antidiabéticos orais',
      'iSGLT2 e agonistas de GLP-1',
      'Insulinoterapia',
      'Complicações microvasculares',
      'Diabetes tipo 1 e LADA',
      'Pé diabético',
    ]],
    ['emergencias-diabeticas', 'Emergências diabéticas', [
      'Cetoacidose diabética',
      'Estado hiperglicêmico hiperosmolar',
      'Cetoacidose euglicêmica',
      'Hipoglicemia',
    ]],
    ['tireoide', 'Doenças da tireoide', [
      'Hipotireoidismo',
      'Hipertireoidismo e doença de Graves',
      'Tireoidites',
      'Nódulo tireoidiano e câncer',
      'Crise tireotóxica',
      'Coma mixedematoso',
      'Tireoide e gravidez',
    ]],
    ['adrenal', 'Doenças da adrenal', [
      'Insuficiência adrenal primária e secundária',
      'Crise adrenal',
      'Síndrome de Cushing',
      'Hiperaldosteronismo primário',
      'Feocromocitoma',
      'Incidentaloma adrenal',
    ]],
    ['obesidade-e-metabolismo', 'Obesidade e síndrome metabólica', [
      'Avaliação e classificação',
      'Tratamento farmacológico',
      'Cirurgia bariátrica e seguimento',
      'Síndrome metabólica',
    ]],
    ['metabolismo-osseo', 'Metabolismo ósseo e cálcio', [
      'Osteoporose — diagnóstico e rastreamento',
      'Osteoporose — tratamento',
      'Osteoporose induzida por glicocorticoide',
      'Hiperparatireoidismo primário',
      'Hipercalcemia',
      'Deficiência de vitamina D',
      'Doença de Paget óssea',
    ]],
    ['hipofise-e-gonadas', 'Hipófise e gônadas', [
      'Adenomas hipofisários',
      'Hiperprolactinemia',
      'Acromegalia',
      'Diabetes insipidus',
      'Hipopituitarismo',
      'Hipogonadismo',
    ]],
  ]],

  ['gastroenterologia', 'Gastroenterologia e Hepatologia', [
    ['hemorragia-digestiva', 'Hemorragia digestiva', [
      'HDA varicosa',
      'HDA não varicosa',
      'Hemorragia digestiva baixa',
      'Escores de risco e estratégia transfusional',
    ]],
    ['cirrose-e-complicacoes', 'Cirrose e complicações', [
      'Ascite',
      'Peritonite bacteriana espontânea',
      'Encefalopatia hepática',
      'Síndrome hepatorrenal',
      'Hipertensão portal e varizes',
      'Child-Pugh e MELD',
      'Carcinoma hepatocelular — rastreamento',
    ]],
    ['doenca-inflamatoria-intestinal', 'Doença inflamatória intestinal', [
      'Doença de Crohn',
      'Retocolite ulcerativa',
      'Diagnóstico diferencial e exames',
      'Tratamento e biológicos',
      'Complicações e vigilância de neoplasia',
    ]],
    ['pancreatite', 'Pancreatite', [
      'Pancreatite aguda — diagnóstico',
      'Pancreatite aguda — manejo inicial',
      'Pancreatite aguda — gravidade e complicações',
      'Pancreatite crônica',
    ]],
    ['doenca-ulcerosa-peptica', 'Doença ulcerosa péptica e H. pylori', [
      'Dispepsia e sinais de alarme',
      'Diagnóstico de H. pylori',
      'Erradicação e controle de cura',
      'Úlcera associada a AINE',
    ]],
    ['diarreias', 'Diarreias e má absorção', [
      'Diarreia aguda infecciosa',
      'Diarreia crônica — investigação',
      'Doença celíaca',
      'Síndrome do intestino irritável',
      'Supercrescimento bacteriano',
    ]],
    ['hepatopatias-nao-virais', 'Hepatopatias não virais', [
      'Doença hepática gordurosa metabólica',
      'Hepatite alcoólica',
      'Hepatite autoimune',
      'Colangite biliar primária e colangite esclerosante',
      'Hemocromatose',
      'Doença de Wilson',
      'Hepatotoxicidade medicamentosa',
      'Insuficiência hepática aguda',
    ]],
    ['esofago', 'Doenças do esôfago', [
      'Doença do refluxo gastroesofágico',
      'Esofagite eosinofílica',
      'Acalasia',
      'Disfagia — investigação',
      'Esôfago de Barrett',
    ]],
    ['vias-biliares', 'Vesícula e vias biliares', [
      'Colecistite aguda',
      'Colangite aguda',
      'Coledocolitíase',
    ]],
  ]],

  ['hematologia', 'Hematologia', [
    ['anemias', 'Anemias', [
      'Anemia ferropriva',
      'Anemia de doença crônica',
      'Anemia megaloblástica',
      'Anemias hemolíticas autoimunes',
      'Anemia falciforme',
      'Talassemias',
      'Deficiência de G6PD',
      'Aplasia e falência medular',
    ]],
    ['leucemias-e-linfomas', 'Leucemias e linfomas', [
      'Leucemias agudas',
      'Leucemia promielocítica aguda',
      'Leucemia mieloide crônica',
      'Leucemia linfocítica crônica',
      'Linfoma de Hodgkin',
      'Linfomas não Hodgkin',
      'Síndromes mielodisplásicas',
    ]],
    ['disturbios-hemostasia', 'Distúrbios da hemostasia', [
      'Trombocitopenia imune',
      'Púrpura trombocitopênica trombótica',
      'Coagulação intravascular disseminada',
      'Hemofilias',
      'Doença de von Willebrand',
      'Investigação do paciente com sangramento',
    ]],
    ['trombofilia-e-anticoagulacao', 'Trombofilia e anticoagulação', [
      'Trombose venosa profunda',
      'Trombofilias hereditárias',
      'Síndrome antifosfolípide',
      'Anticoagulantes orais diretos',
      'Varfarina e reversão',
      'Trombocitopenia induzida por heparina',
      'Anticoagulação perioperatória',
    ]],
    ['discrasias-plasmocitarias', 'Discrasias plasmocitárias', [
      'Mieloma múltiplo',
      'Gamopatia monoclonal de significado indeterminado',
      'Amiloidose AL',
      'Macroglobulinemia de Waldenström',
    ]],
    ['neoplasias-mieloproliferativas', 'Neoplasias mieloproliferativas', [
      'Policitemia vera',
      'Trombocitemia essencial',
      'Mielofibrose primária',
    ]],
    ['transfusao', 'Medicina transfusional', [
      'Indicações de hemocomponentes',
      'Reações transfusionais',
    ]],
  ]],

  ['reumatologia', 'Reumatologia', [
    ['artrite-reumatoide', 'Artrite reumatoide', [
      'Diagnóstico e critérios classificatórios',
      'Tratamento com DMARDs sintéticos',
      'Biológicos e tratamento por alvo',
      'Manifestações extra-articulares',
    ]],
    ['lupus-e-conectivopatias', 'Lúpus e conectivopatias', [
      'LES — critérios e diagnóstico',
      'LES — tratamento',
      'Nefrite lúpica',
      'Síndrome antifosfolípide',
      'Síndrome de Sjögren',
      'Esclerose sistêmica',
      'Miopatias inflamatórias',
      'Doença mista do tecido conjuntivo',
    ]],
    ['vasculites', 'Vasculites', [
      'Arterite de células gigantes',
      'Polimialgia reumática',
      'Vasculites ANCA-associadas',
      'Poliarterite nodosa',
      'Doença de Behçet',
      'Vasculite por IgA',
      'Arterite de Takayasu',
    ]],
    ['espondiloartrites', 'Espondiloartrites', [
      'Espondiloartrite axial',
      'Artrite psoriásica',
      'Artrite reativa',
      'Artrite enteropática',
    ]],
    ['artrites-microcristalinas', 'Artrites microcristalinas', [
      'Gota — crise aguda',
      'Gota — tratamento hipouricemiante',
      'Doença por depósito de pirofosfato de cálcio',
    ]],
    ['osteoartrite-e-dor-cronica', 'Osteoartrite e dor crônica', [
      'Osteoartrite',
      'Fibromialgia',
      'Lombalgia e bandeiras vermelhas',
    ]],
    ['artrite-septica', 'Artrite séptica e infecciosa', [
      'Artrite séptica',
      'Artrites virais',
      'Análise do líquido sinovial',
    ]],
  ]],

  ['neurologia', 'Neurologia', [
    ['sindromes-vasculares', 'Síndromes vasculares', [
      'AVC isquêmico — diagnóstico e janela terapêutica',
      'AVC isquêmico — trombólise',
      'AVC isquêmico — trombectomia mecânica',
      'AVC isquêmico — prevenção secundária',
      'Ataque isquêmico transitório',
      'AVC hemorrágico intraparenquimatoso',
      'Hemorragia subaracnoide e aneurisma',
      'Trombose venosa cerebral',
      'Síndromes vasculares por território arterial',
    ]],
    ['disturbios-motores', 'Distúrbios motores', [
      'Doença de Parkinson — diagnóstico',
      'Doença de Parkinson — tratamento',
      'Parkinsonismos atípicos',
      'Tremor essencial',
      'Distonias',
      'Coreias',
      'Síndrome neuroléptica maligna',
    ]],
    ['cefaleias', 'Cefaleias', [
      'Migrânea — tratamento agudo',
      'Migrânea — profilaxia',
      'Cefaleia tensional',
      'Cefaleia em salvas',
      'Cefaleia secundária e sinais de alarme',
    ]],
    ['epilepsia', 'Epilepsia', [
      'Classificação das crises',
      'Primeira crise — investigação',
      'Fármacos antiepilépticos',
      'Estado de mal epiléptico',
      'Epilepsia e gravidez',
    ]],
    ['demencias', 'Demências', [
      'Doença de Alzheimer',
      'Demência vascular',
      'Demência por corpos de Lewy',
      'Demência frontotemporal',
      'Comprometimento cognitivo leve',
      'Demências potencialmente reversíveis',
    ]],
    ['doencas-neuromusculares', 'Doenças neuromusculares', [
      'Síndrome de Guillain-Barré',
      'Miastenia gravis',
      'Polineuropatias',
      'Esclerose lateral amiotrófica',
      'Miopatias',
    ]],
    ['sindromes-medulares', 'Síndromes medulares e desmielinizantes', [
      'Esclerose múltipla',
      'Neuromielite óptica',
      'Compressão medular',
      'Mielite transversa',
      'Síndromes medulares topográficas',
    ]],
    ['neuroinfeccao-e-emergencias', 'Neuroinfecção e emergências neurológicas', [
      'Encefalites virais',
      'Neurocisticercose',
      'Hipertensão intracraniana',
      'Vertigem e síndromes vestibulares',
    ]],
  ]],

  ['emergencias-e-terapia-intensiva', 'Emergências e Terapia Intensiva', [
    ['choque', 'Choque', [
      'Choque séptico',
      'Choque cardiogênico',
      'Choque hipovolêmico',
      'Choque obstrutivo',
      'Monitorização hemodinâmica',
      'Drogas vasoativas',
    ]],
    ['parada-cardiorrespiratoria', 'Parada cardiorrespiratória', [
      'Ritmos chocáveis',
      'Ritmos não chocáveis',
      'Causas reversíveis (5H e 5T)',
      'Cuidados pós-parada',
    ]],
    ['insuficiencia-respiratoria-e-vm', 'Insuficiência respiratória e ventilação mecânica', [
      'Ventilação não invasiva',
      'Intubação e via aérea difícil',
      'Ventilação protetora na SDRA',
      'Modos ventilatórios',
      'Desmame e extubação',
      'Sedação e analgesia na UTI',
    ]],
    ['intoxicacoes', 'Intoxicações exógenas', [
      'Opioides',
      'Benzodiazepínicos',
      'Antidepressivos tricíclicos',
      'Paracetamol',
      'Organofosforados',
      'Álcoois tóxicos',
      'Monóxido de carbono',
      'Descontaminação e antídotos',
    ]],
    ['rebaixamento-de-consciencia', 'Rebaixamento de consciência', [
      'Abordagem inicial do coma',
      'Exame neurológico do comatoso',
      'Morte encefálica',
    ]],
    ['emergencias-diversas', 'Outras emergências clínicas', [
      'Anafilaxia',
      'Hipertermia e intermação',
      'Hipotermia acidental',
      'Rabdomiólise',
    ]],
  ]],

  ['oncologia', 'Oncologia', [
    ['rastreamento-oncologico', 'Rastreamento oncológico', [
      'Câncer de mama',
      'Câncer colorretal',
      'Câncer de colo uterino',
      'Câncer de próstata',
      'Câncer de pulmão',
    ]],
    ['emergencias-oncologicas', 'Emergências oncológicas', [
      'Neutropenia febril',
      'Síndrome de lise tumoral',
      'Compressão medular metastática',
      'Síndrome da veia cava superior',
      'Hipercalcemia maligna',
    ]],
    ['tumores-solidos', 'Tumores sólidos', [
      'Câncer de pulmão',
      'Câncer colorretal',
      'Câncer de mama',
      'Câncer gástrico e esofágico',
      'Sítio primário desconhecido',
    ]],
    ['sindromes-paraneoplasicas', 'Síndromes paraneoplásicas', [
      'SIADH paraneoplásica',
      'Hipercalcemia por PTHrP',
      'Síndromes neurológicas paraneoplásicas',
    ]],
    ['cuidados-paliativos', 'Cuidados paliativos', [
      'Controle da dor e escada analgésica',
      'Dispneia e sintomas refratários',
      'Comunicação de más notícias',
      'Terminalidade e diretivas antecipadas',
    ]],
  ]],

  ['geriatria', 'Geriatria', [
    ['sindromes-geriatricas', 'Síndromes geriátricas', [
      'Avaliação geriátrica ampla',
      'Incontinência urinária',
      'Imobilidade e lesões por pressão',
      'Desnutrição no idoso',
]],
    ['delirium', 'Delirium', [
      'Diagnóstico e CAM',
      'Fatores precipitantes',
      'Prevenção e manejo não farmacológico',
      'Manejo farmacológico',
    ]],
    ['polifarmacia', 'Polifarmácia e prescrição no idoso', [
      'Critérios de Beers e STOPP/START',
      'Desprescrição',
      'Interações e reações adversas',
    ]],
    ['quedas-e-fragilidade', 'Quedas e fragilidade', [
      'Avaliação do risco de quedas',
      'Fragilidade e sarcopenia',
      'Prevenção de fraturas',
    ]],
    ['cognicao-e-humor-no-idoso', 'Cognição e humor no idoso', [
      'Depressão no idoso',
      'Rastreio cognitivo',
    ]],
  ]],

  ['medicina-preventiva', 'Medicina Preventiva e Epidemiologia', [
    ['epidemiologia-clinica', 'Epidemiologia clínica e testes diagnósticos', [
      'Sensibilidade e especificidade',
      'Valores preditivos e prevalência',
      'Razão de verossimilhança',
      'Curva ROC e ponto de corte',
    ]],
    ['rastreamento-e-prevencao', 'Rastreamento e prevenção', [
      'Níveis de prevenção',
      'Critérios para rastreamento populacional',
      'Vieses do rastreamento',
    ]],
    ['imunizacoes', 'Imunizações', [
      'Calendário vacinal do adulto',
      'Vacinação no imunossuprimido',
      'Vacinas em situações especiais',
    ]],
    ['bioestatistica', 'Bioestatística', [
      'Medidas de associação (RR, OR, HR)',
      'NNT e redução absoluta de risco',
      'Testes de hipótese e valor-p',
      'Intervalo de confiança',
      'Desenhos de estudo',
      'Vieses e confundimento',
      'Metanálise e revisão sistemática',
    ]],
    ['etica-e-sus', 'Ética médica e SUS', [
      'Princípios e organização do SUS',
      'Sigilo e confidencialidade',
      'Consentimento e autonomia',
      'Notificação compulsória',
    ]],
  ]],
];

export const TAXONOMY: ThemeSeed[] = RAW.map(([themeSlug, themeName, subthemes], index) => ({
  slug: themeSlug,
  name: themeName,
  order: index + 1,
  subthemes: subthemes.map(([subthemeSlug, subthemeName, topics]) => ({
    slug: subthemeSlug,
    name: subthemeName,
    topics: topics.map((name) => ({ slug: topicSlug(subthemeSlug, name), name })),
  })),
}));

/** Mapa slug de subtema -> slug de tema, para validar importações. */
export const SUBTHEME_TO_THEME: Record<string, string> = Object.fromEntries(
  TAXONOMY.flatMap((theme) => theme.subthemes.map((sub) => [sub.slug, theme.slug])),
);

export const TAXONOMY_COUNTS = {
  themes: TAXONOMY.length,
  subthemes: TAXONOMY.reduce((sum, theme) => sum + theme.subthemes.length, 0),
  topics: TAXONOMY.reduce(
    (sum, theme) => sum + theme.subthemes.reduce((acc, sub) => acc + sub.topics.length, 0),
    0,
  ),
};
