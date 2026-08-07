import type { ExamInput } from '../types';

/**
 * SIMULADO INÉDITO — R+ Clínica Médica UERJ 2026.
 *
 * Conjunto autoral, construído para reproduzir o estilo (caso clínico curto,
 * 4 alternativas, foco em conduta), a distribuição temática e o perfil de
 * dificuldade observados na análise do corpus 2021–2025.
 *
 * Este simulado é marcado com `isMock: true` no seed, de modo que suas
 * questões NÃO entram no cálculo de incidência histórica — caso contrário
 * o simulado enviesaria a própria análise que o originou.
 */
export const mock2026: ExamInput = {
  slug: 'uerj-2026-simulado-inedito',
  year: 2026,
  board: 'UERJ',
  program: 'R+ Clínica Médica',
  title: 'Simulado Inédito UERJ 2026 — R+ Clínica Médica',
  source: 'AUTORAL_ESTILO_BANCA',
  reference: 'Blueprint derivado da análise de incidência do corpus 2021–2025.',
  questions: [
    {
      number: 1,
      statement:
        'Homem de 64 anos, diabético, chega à emergência com dispneia e mal-estar há 2 horas, sem dor torácica típica. ECG com supradesnivelamento de ST em D2, D3 e aVF. PA 88x54 mmHg, FC 52 bpm, pulmões limpos, turgência jugular elevada. Qual conduta deve ser evitada neste cenário?',
      alternatives: [
        { letter: 'A', text: 'Realizar ECG com derivações direitas (V3R e V4R).' },
        { letter: 'B', text: 'Administrar nitrato sublingual ou intravenoso.' },
        { letter: 'C', text: 'Expandir com cristaloide intravenoso.' },
        { letter: 'D', text: 'Encaminhar para reperfusão coronariana imediata.' },
      ],
      answerKey: 'B',
      theme: 'cardiologia',
      subtheme: 'sindromes-coronarianas-agudas',
      difficulty: 'MEDIA',
      keywords: ['infarto de ventrículo direito', 'nitrato contraindicado', 'parede inferior', 'V3R V4R', 'pré-carga dependente'],
      reference: 'Diretriz da SBC sobre IAM com supradesnivelamento de ST',
    },
    {
      number: 2,
      statement:
        'Mulher de 70 anos com insuficiência cardíaca de fração de ejeção preservada (FEVE 58%), hipertensa e obesa, mantém dispneia aos médios esforços apesar de diurético em dose adequada. Qual classe farmacológica tem benefício demonstrado em desfechos nessa população?',
      alternatives: [
        { letter: 'A', text: 'Inibidor de SGLT2.' },
        { letter: 'B', text: 'Digoxina.' },
        { letter: 'C', text: 'Nitrato de ação prolongada.' },
        { letter: 'D', text: 'Bloqueador de canal de cálcio di-hidropiridínico.' },
      ],
      answerKey: 'A',
      theme: 'cardiologia',
      subtheme: 'insuficiencia-cardiaca',
      difficulty: 'MEDIA',
      keywords: ['ICFEp', 'iSGLT2', 'dapagliflozina', 'empagliflozina', 'hospitalização por IC'],
      reference: 'ESC Heart Failure Guidelines / Diretriz Brasileira de IC',
    },
    {
      number: 3,
      statement:
        'Homem de 59 anos, em pós-operatório de cirurgia abdominal, evolui com fibrilação atrial de alta resposta ventricular (FC 165 bpm), PA 78x44 mmHg, sudorese e rebaixamento do nível de consciência. Qual a conduta imediata?',
      alternatives: [
        { letter: 'A', text: 'Cardioversão elétrica sincronizada.' },
        { letter: 'B', text: 'Metoprolol intravenoso em bolus.' },
        { letter: 'C', text: 'Diltiazem intravenoso em infusão contínua.' },
        { letter: 'D', text: 'Anticoagulação plena e observação clínica.' },
      ],
      answerKey: 'A',
      theme: 'cardiologia',
      subtheme: 'arritmias',
      difficulty: 'FACIL',
      keywords: ['fibrilação atrial instável', 'cardioversão elétrica sincronizada', 'instabilidade hemodinâmica', 'alta resposta ventricular'],
      reference: 'ACLS / Diretriz Brasileira de Fibrilação Atrial',
    },
    {
      number: 4,
      statement:
        'Mulher de 48 anos apresenta PA de 178x112 mmHg aferida em consultório, assintomática, sem lesão aguda de órgão-alvo. Não faz uso de medicação. Fundoscopia normal, exame neurológico normal, sem dor torácica ou dispneia. Qual a conduta correta?',
      alternatives: [
        { letter: 'A', text: 'Nitroprussiato de sódio intravenoso para redução rápida da pressão.' },
        { letter: 'B', text: 'Iniciar ou ajustar anti-hipertensivo oral, com reavaliação ambulatorial em dias.' },
        { letter: 'C', text: 'Captopril sublingual seriado até normalizar a pressão na sala de espera.' },
        { letter: 'D', text: 'Internação em unidade de terapia intensiva para monitorização invasiva.' },
      ],
      answerKey: 'B',
      theme: 'cardiologia',
      subtheme: 'hipertensao-arterial',
      difficulty: 'MEDIA',
      keywords: ['urgência versus emergência hipertensiva', 'pseudocrise hipertensiva', 'redução gradual', 'lesão de órgão-alvo'],
      reference: 'Diretrizes Brasileiras de Hipertensão Arterial',
    },
    {
      number: 5,
      statement:
        'Homem de 72 anos, com DPOC, chega com piora da dispneia, aumento do volume e da purulência do escarro. Gasometria: pH 7,28, pCO2 68 mmHg, pO2 54 mmHg em ar ambiente, bicarbonato 30 mEq/L. Está alerta, com uso de musculatura acessória. Qual a intervenção com maior impacto na redução de mortalidade e intubação?',
      alternatives: [
        { letter: 'A', text: 'Ventilação não invasiva com dois níveis de pressão.' },
        { letter: 'B', text: 'Oxigênio suplementar em alto fluxo com máscara não reinalante a 15 L/min.' },
        { letter: 'C', text: 'Metilxantina intravenosa.' },
        { letter: 'D', text: 'Corticoide inalatório em dose alta.' },
      ],
      answerKey: 'A',
      theme: 'pneumologia',
      subtheme: 'dpoc',
      difficulty: 'MEDIA',
      keywords: ['exacerbação de DPOC', 'acidose respiratória', 'ventilação não invasiva', 'BiPAP', 'hipercapnia'],
      reference: 'GOLD Report / Diretrizes SBPT',
    },
    {
      number: 6,
      statement:
        'Mulher de 25 anos, asmática em uso de corticoide inalatório em dose baixa, refere sintomas diurnos 4 vezes por semana e despertar noturno semanal, com uso frequente de resgate. A técnica inalatória e a adesão foram verificadas e estão adequadas. Qual o próximo passo?',
      alternatives: [
        { letter: 'A', text: 'Manter a dose e reavaliar em 6 meses.' },
        { letter: 'B', text: 'Associar beta-2 de longa duração ao corticoide inalatório.' },
        { letter: 'C', text: 'Substituir por beta-2 de curta duração isolado de horário.' },
        { letter: 'D', text: 'Iniciar corticoide oral contínuo.' },
      ],
      answerKey: 'B',
      theme: 'pneumologia',
      subtheme: 'asma',
      difficulty: 'FACIL',
      keywords: ['asma não controlada', 'step-up', 'LABA', 'corticoide inalatório', 'GINA'],
      reference: 'GINA — Global Strategy for Asthma Management and Prevention',
    },
    {
      number: 7,
      statement:
        'Homem de 45 anos é diagnosticado com pneumonia adquirida na comunidade e tratado ambulatorialmente. Não tem comorbidades, não usou antibiótico nos últimos 3 meses e não tem fatores de risco para resistência. Qual o esquema empírico mais adequado?',
      alternatives: [
        { letter: 'A', text: 'Amoxicilina ou macrolídeo em monoterapia.' },
        { letter: 'B', text: 'Piperacilina-tazobactam associada a vancomicina.' },
        { letter: 'C', text: 'Meropenem em monoterapia.' },
        { letter: 'D', text: 'Ceftazidima associada a amicacina.' },
      ],
      answerKey: 'A',
      theme: 'pneumologia',
      subtheme: 'pneumonias',
      difficulty: 'FACIL',
      keywords: ['PAC ambulatorial', 'amoxicilina', 'macrolídeo', 'paciente hígido', 'antibioticoterapia empírica'],
      reference: 'Diretrizes SBPT para pneumonia adquirida na comunidade',
    },
    {
      number: 8,
      statement:
        'Paciente de 39 anos vivendo com HIV, em uso regular de terapia antirretroviral iniciada há 3 semanas por tuberculose pulmonar concomitante, evolui com piora da febre, aumento de linfonodos cervicais e piora radiológica. CD4 subiu de 60 para 190 células/mm³ e a carga viral caiu significativamente. Culturas para germes comuns negativas. Qual o diagnóstico mais provável?',
      alternatives: [
        { letter: 'A', text: 'Falha do tratamento antituberculoso por resistência.' },
        { letter: 'B', text: 'Síndrome inflamatória de reconstituição imune.' },
        { letter: 'C', text: 'Falha virológica da terapia antirretroviral.' },
        { letter: 'D', text: 'Linfoma não Hodgkin associado ao HIV.' },
      ],
      answerKey: 'B',
      theme: 'infectologia',
      subtheme: 'hiv-aids',
      difficulty: 'DIFICIL',
      keywords: ['SIRI', 'reconstituição imune', 'tuberculose', 'HIV', 'piora paradoxal'],
      reference: 'PCDT para Manejo da Infecção pelo HIV em Adultos (MS)',
    },
    {
      number: 9,
      statement:
        'Homem de 61 anos, internado há 10 dias em uso de ceftriaxona, apresenta diarreia aquosa profusa, dor abdominal, febre e leucocitose de 22.000/mm³. Pesquisa de toxina e PCR para Clostridioides difficile positivas. Não há íleo nem megacólon. Qual o tratamento de escolha?',
      alternatives: [
        { letter: 'A', text: 'Vancomicina por via oral ou fidaxomicina.' },
        { letter: 'B', text: 'Vancomicina intravenosa.' },
        { letter: 'C', text: 'Ciprofloxacino por via oral.' },
        { letter: 'D', text: 'Loperamida associada a probiótico.' },
      ],
      answerKey: 'A',
      theme: 'infectologia',
      subtheme: 'antibioticoterapia',
      difficulty: 'MEDIA',
      keywords: ['Clostridioides difficile', 'vancomicina oral', 'fidaxomicina', 'colite pseudomembranosa', 'diarreia associada a antibiótico'],
      reference: 'IDSA/SHEA Clinical Practice Guidelines for C. difficile Infection',
    },
    {
      number: 10,
      statement:
        'Paciente de 28 anos apresenta febre há 4 dias, cefaleia retro-orbitária, mialgia e exantema. No quinto dia, com a queda da febre, evolui com dor abdominal intensa, vômitos persistentes e hematócrito em elevação com queda de plaquetas. Qual a classificação e a conduta?',
      alternatives: [
        { letter: 'A', text: 'Dengue sem sinais de alarme; hidratação oral domiciliar.' },
        { letter: 'B', text: 'Dengue com sinais de alarme; hidratação intravenosa e observação hospitalar.' },
        { letter: 'C', text: 'Dengue grave; iniciar corticoide em dose alta.' },
        { letter: 'D', text: 'Chikungunya na fase crônica; iniciar metotrexato.' },
      ],
      answerKey: 'B',
      theme: 'infectologia',
      subtheme: 'doencas-tropicais',
      difficulty: 'FACIL',
      keywords: ['dengue', 'sinais de alarme', 'hemoconcentração', 'fase crítica', 'hidratação venosa'],
      reference: 'Dengue: diagnóstico e manejo clínico — adulto e criança (MS)',
    },
    {
      number: 11,
      statement:
        'Homem de 55 anos, sem doença renal prévia, é admitido com quadro de desidratação por diarreia. Creatinina 2,1 mg/dL (basal 0,9), ureia 96 mg/dL, sódio urinário 12 mEq/L, fração de excreção de sódio 0,4%, densidade urinária 1.028, sedimento urinário sem alterações. Qual a classificação e a conduta?',
      alternatives: [
        { letter: 'A', text: 'Injúria renal aguda pré-renal; expansão volêmica com cristaloide.' },
        { letter: 'B', text: 'Necrose tubular aguda; indicar diálise precoce.' },
        { letter: 'C', text: 'Nefrite intersticial aguda; iniciar corticoterapia.' },
        { letter: 'D', text: 'Glomerulonefrite aguda; solicitar biópsia renal.' },
      ],
      answerKey: 'A',
      theme: 'nefrologia',
      subtheme: 'injuria-renal-aguda',
      difficulty: 'FACIL',
      keywords: ['IRA pré-renal', 'fração de excreção de sódio', 'relação ureia/creatinina', 'expansão volêmica', 'KDIGO'],
      reference: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
    },
    {
      number: 12,
      statement:
        'Mulher de 33 anos apresenta hematúria macroscópica recorrente, tipicamente 24 a 48 horas após episódios de infecção de vias aéreas superiores. Creatinina 1,0 mg/dL, proteinúria de 0,6 g/24h, complemento sérico normal. Qual o diagnóstico mais provável?',
      alternatives: [
        { letter: 'A', text: 'Glomerulonefrite pós-estreptocócica.' },
        { letter: 'B', text: 'Nefropatia por IgA (doença de Berger).' },
        { letter: 'C', text: 'Nefrite lúpica classe IV.' },
        { letter: 'D', text: 'Doença de lesão mínima.' },
      ],
      answerKey: 'B',
      theme: 'nefrologia',
      subtheme: 'glomerulopatias',
      difficulty: 'MEDIA',
      keywords: ['nefropatia por IgA', 'hematúria sinfaringítica', 'complemento normal', 'doença de Berger', 'glomerulopatia'],
      reference: 'KDIGO Glomerular Diseases Guideline',
    },
    {
      number: 13,
      statement:
        'Homem de 66 anos com doença renal crônica estágio 4 apresenta cálcio 8,2 mg/dL, fósforo 6,2 mg/dL e PTH intacto de 480 pg/mL. Qual a fisiopatologia predominante e a conduta inicial?',
      alternatives: [
        { letter: 'A', text: 'Hiperparatireoidismo secundário; controlar o fósforo com quelantes e dieta.' },
        { letter: 'B', text: 'Hiperparatireoidismo primário; indicar paratireoidectomia imediata.' },
        { letter: 'C', text: 'Hipoparatireoidismo; repor cálcio e calcitriol em dose alta.' },
        { letter: 'D', text: 'Doença óssea adinâmica; suspender todos os quelantes.' },
      ],
      answerKey: 'A',
      theme: 'nefrologia',
      subtheme: 'doenca-renal-cronica',
      difficulty: 'MEDIA',
      keywords: ['distúrbio mineral ósseo da DRC', 'hiperparatireoidismo secundário', 'quelante de fósforo', 'PTH', 'hiperfosfatemia'],
      reference: 'KDIGO CKD-MBD Guideline',
    },
    {
      number: 14,
      statement:
        'Mulher de 62 anos, diabética tipo 2 em uso de metformina e empagliflozina, é admitida com dor abdominal, náuseas e taquipneia. Glicemia 190 mg/dL, pH 7,12, bicarbonato 10 mEq/L, ânion gap 24, cetonemia positiva. Qual o diagnóstico?',
      alternatives: [
        { letter: 'A', text: 'Estado hiperglicêmico hiperosmolar.' },
        { letter: 'B', text: 'Cetoacidose diabética euglicêmica.' },
        { letter: 'C', text: 'Acidose lática por metformina isoladamente.' },
        { letter: 'D', text: 'Acidose tubular renal tipo 4.' },
      ],
      answerKey: 'B',
      theme: 'endocrinologia',
      subtheme: 'emergencias-diabeticas',
      difficulty: 'DIFICIL',
      keywords: ['cetoacidose euglicêmica', 'inibidor de SGLT2', 'ânion gap elevado', 'cetonemia', 'diabetes tipo 2'],
      reference: 'ADA Standards of Care / Diretriz SBD',
    },
    {
      number: 15,
      statement:
        'Homem de 42 anos apresenta hiperpigmentação cutânea, astenia, hipotensão postural, hiponatremia e hiperpotassemia. O cortisol sérico matinal está baixo e o ACTH, elevado. Qual o diagnóstico e o tratamento de reposição adequado?',
      alternatives: [
        { letter: 'A', text: 'Insuficiência adrenal primária; repor glicocorticoide e mineralocorticoide.' },
        { letter: 'B', text: 'Insuficiência adrenal secundária; repor apenas glicocorticoide.' },
        { letter: 'C', text: 'Síndrome de Cushing; iniciar cetoconazol.' },
        { letter: 'D', text: 'Hiperaldosteronismo primário; iniciar espironolactona.' },
      ],
      answerKey: 'A',
      theme: 'endocrinologia',
      subtheme: 'adrenal',
      difficulty: 'MEDIA',
      keywords: ['doença de Addison', 'insuficiência adrenal primária', 'ACTH elevado', 'fludrocortisona', 'hiperpigmentação'],
      reference: 'Endocrine Society Guideline — Primary Adrenal Insufficiency',
    },
    {
      number: 16,
      statement:
        'Homem de 58 anos, cirrótico, apresenta alteração do comportamento, inversão do ciclo sono-vigília e asterixe. Não há febre nem sinais de sangramento. Foi identificada constipação intensa nos últimos dias. Qual o tratamento de primeira linha?',
      alternatives: [
        { letter: 'A', text: 'Lactulose por via oral, com meta de 2 a 3 evacuações pastosas por dia.' },
        { letter: 'B', text: 'Restrição proteica rigorosa e prolongada.' },
        { letter: 'C', text: 'Flumazenil intravenoso contínuo.' },
        { letter: 'D', text: 'Corticoterapia sistêmica.' },
      ],
      answerKey: 'A',
      theme: 'gastroenterologia',
      subtheme: 'cirrose-e-complicacoes',
      difficulty: 'FACIL',
      keywords: ['encefalopatia hepática', 'lactulose', 'rifaximina', 'asterixe', 'fator precipitante'],
      reference: 'AASLD/EASL Practice Guideline on Hepatic Encephalopathy',
    },
    {
      number: 17,
      statement:
        'Homem de 63 anos apresenta hematêmese e melena. Está taquicárdico, com PA 96x60 mmHg. Após ressuscitação volêmica inicial, encontra-se estável. Não é cirrótico e faz uso crônico de anti-inflamatório não esteroidal. Qual a conduta em relação ao momento da endoscopia digestiva alta?',
      alternatives: [
        { letter: 'A', text: 'Realizar endoscopia em até 24 horas após a estabilização.' },
        { letter: 'B', text: 'Realizar endoscopia somente após 72 horas de inibidor de bomba de prótons.' },
        { letter: 'C', text: 'Realizar endoscopia apenas se houver recidiva do sangramento.' },
        { letter: 'D', text: 'Indicar cirurgia de urgência sem endoscopia prévia.' },
      ],
      answerKey: 'A',
      theme: 'gastroenterologia',
      subtheme: 'hemorragia-digestiva',
      difficulty: 'MEDIA',
      keywords: ['hemorragia digestiva alta não varicosa', 'endoscopia precoce', 'classificação de Forrest', 'IBP', 'AINE'],
      reference: 'ESGE Guideline — Non-variceal Upper GI Hemorrhage',
    },
    {
      number: 18,
      statement:
        'Mulher de 71 anos apresenta anemia com hemoglobina 9,8 g/dL, VCM 88 fL, ferritina 320 ng/mL, saturação de transferrina 14%, PCR elevada e diagnóstico de artrite reumatoide em atividade. Qual o diagnóstico hematológico mais provável?',
      alternatives: [
        { letter: 'A', text: 'Anemia ferropriva.' },
        { letter: 'B', text: 'Anemia de doença crônica (anemia da inflamação).' },
        { letter: 'C', text: 'Anemia megaloblástica.' },
        { letter: 'D', text: 'Anemia hemolítica autoimune.' },
      ],
      answerKey: 'B',
      theme: 'hematologia',
      subtheme: 'anemias',
      difficulty: 'MEDIA',
      keywords: ['anemia de doença crônica', 'hepcidina', 'ferritina elevada', 'saturação de transferrina', 'inflamação'],
      reference: 'Diagnóstico diferencial das anemias — ABHH',
    },
    {
      number: 19,
      statement:
        'Homem de 68 anos apresenta linfocitose persistente de 42.000/mm³, linfonodomegalia cervical e axilar indolores, sem sintomas B. A imunofenotipagem de sangue periférico mostra população monoclonal de linfócitos B CD5+, CD23+, CD19+, com expressão fraca de CD20. Qual o diagnóstico?',
      alternatives: [
        { letter: 'A', text: 'Leucemia mieloide crônica.' },
        { letter: 'B', text: 'Leucemia linfocítica crônica.' },
        { letter: 'C', text: 'Leucemia linfoblástica aguda.' },
        { letter: 'D', text: 'Tricoleucemia.' },
      ],
      answerKey: 'B',
      theme: 'hematologia',
      subtheme: 'leucemias-e-linfomas',
      difficulty: 'MEDIA',
      keywords: ['leucemia linfocítica crônica', 'imunofenotipagem', 'CD5', 'CD23', 'linfocitose'],
      reference: 'iwCLL Guidelines for diagnosis and treatment of CLL',
    },
    {
      number: 20,
      statement:
        'Homem de 32 anos apresenta lombalgia inflamatória há 2 anos, com rigidez matinal prolongada, melhora com exercício e piora com repouso, além de dor alternante em nádegas. HLA-B27 positivo, PCR elevada e ressonância de sacroilíacas com edema ósseo subcondral. Qual o tratamento de primeira linha?',
      alternatives: [
        { letter: 'A', text: 'Anti-inflamatório não esteroidal em dose plena associado a exercícios.' },
        { letter: 'B', text: 'Metotrexato como monoterapia para doença axial.' },
        { letter: 'C', text: 'Corticoterapia sistêmica contínua em dose alta.' },
        { letter: 'D', text: 'Agente anti-TNF antes de qualquer outra terapia.' },
      ],
      answerKey: 'A',
      theme: 'reumatologia',
      subtheme: 'espondiloartrites',
      difficulty: 'MEDIA',
      keywords: ['espondiloartrite axial', 'HLA-B27', 'sacroileíte', 'AINE', 'lombalgia inflamatória'],
      reference: 'ASAS-EULAR recommendations for axial spondyloarthritis',
    },
    {
      number: 21,
      statement:
        'Mulher de 78 anos apresenta declínio cognitivo progressivo há 3 anos, iniciado por perda de memória episódica recente, com evolução para dificuldade de nomeação e desorientação espacial. Exame neurológico sem déficits focais, marcha preservada, sem alucinações precoces nem parkinsonismo. Qual o diagnóstico mais provável?',
      alternatives: [
        { letter: 'A', text: 'Demência de corpos de Lewy.' },
        { letter: 'B', text: 'Doença de Alzheimer.' },
        { letter: 'C', text: 'Demência frontotemporal variante comportamental.' },
        { letter: 'D', text: 'Hidrocefalia de pressão normal.' },
      ],
      answerKey: 'B',
      theme: 'neurologia',
      subtheme: 'demencias',
      difficulty: 'FACIL',
      keywords: ['doença de Alzheimer', 'memória episódica', 'demência', 'diagnóstico diferencial', 'declínio progressivo'],
      reference: 'NIA-AA Research Framework / Diretrizes de demência',
    },
    {
      number: 22,
      statement:
        'Paciente de 54 anos é encontrado em parada cardiorrespiratória. O monitor mostra fibrilação ventricular. Após o primeiro choque e 2 minutos de compressões, mantém fibrilação ventricular. Qual a sequência correta de intervenções?',
      alternatives: [
        { letter: 'A', text: 'Novo choque, seguido de adrenalina e, na persistência, amiodarona.' },
        { letter: 'B', text: 'Atropina intravenosa antes do próximo choque.' },
        { letter: 'C', text: 'Bicarbonato de sódio de rotina em todas as paradas.' },
        { letter: 'D', text: 'Cardioversão sincronizada em vez de desfibrilação.' },
      ],
      answerKey: 'A',
      theme: 'emergencias-e-terapia-intensiva',
      subtheme: 'parada-cardiorrespiratoria',
      difficulty: 'FACIL',
      keywords: ['fibrilação ventricular', 'desfibrilação', 'adrenalina', 'amiodarona', 'ACLS'],
      reference: 'AHA Guidelines for CPR and ECC',
    },
    {
      number: 23,
      statement:
        'Mulher de 47 anos em quimioterapia por linfoma apresenta febre de 38,5 °C e contagem de neutrófilos de 320/mm³. Está hemodinamicamente estável, sem foco infeccioso evidente. Qual a conduta imediata?',
      alternatives: [
        { letter: 'A', text: 'Coletar culturas e iniciar antibioticoterapia empírica de amplo espectro com cobertura antipseudomonas em até 1 hora.' },
        { letter: 'B', text: 'Aguardar novo pico febril antes de iniciar antibiótico.' },
        { letter: 'C', text: 'Iniciar antifúngico empírico como primeira medida isolada.' },
        { letter: 'D', text: 'Prescrever antitérmico e reavaliar em 24 horas ambulatorialmente.' },
      ],
      answerKey: 'A',
      theme: 'oncologia',
      subtheme: 'emergencias-oncologicas',
      difficulty: 'FACIL',
      keywords: ['neutropenia febril', 'antibioticoterapia empírica', 'cefepime', 'MASCC', 'emergência oncológica'],
      reference: 'IDSA / ASCO Guidelines for Febrile Neutropenia',
    },
    {
      number: 24,
      statement:
        'Um estudo de coorte acompanhou 2.000 indivíduos expostos e 2.000 não expostos a determinado fator, avaliando a incidência de uma doença. Qual medida de associação é diretamente calculável a partir desse desenho?',
      alternatives: [
        { letter: 'A', text: 'Razão de chances (odds ratio) apenas.' },
        { letter: 'B', text: 'Risco relativo.' },
        { letter: 'C', text: 'Prevalência pontual apenas.' },
        { letter: 'D', text: 'Nenhuma medida de associação pode ser calculada.' },
      ],
      answerKey: 'B',
      theme: 'medicina-preventiva',
      subtheme: 'epidemiologia-clinica',
      difficulty: 'FACIL',
      keywords: ['estudo de coorte', 'risco relativo', 'incidência', 'medida de associação', 'desenho de estudo'],
      reference: 'Epidemiologia — desenhos de estudo e medidas de associação',
    },
    {
      number: 25,
      statement:
        'Homem de 84 anos, com múltiplas comorbidades, faz uso de 11 medicamentos, incluindo benzodiazepínico para insônia e anti-histamínico de primeira geração. Apresentou duas quedas nos últimos 6 meses. Qual a conduta mais adequada segundo os princípios de prescrição no idoso?',
      alternatives: [
        { letter: 'A', text: 'Revisar a prescrição com desprescrição de fármacos potencialmente inapropriados.' },
        { letter: 'B', text: 'Associar um novo fármaco para tratar a instabilidade postural.' },
        { letter: 'C', text: 'Aumentar a dose do benzodiazepínico para melhorar o sono.' },
        { letter: 'D', text: 'Manter o esquema atual e apenas orientar cuidados domiciliares.' },
      ],
      answerKey: 'A',
      theme: 'geriatria',
      subtheme: 'polifarmacia',
      difficulty: 'FACIL',
      keywords: ['polifarmácia', 'desprescrição', 'critérios de Beers', 'quedas', 'fármacos inapropriados no idoso'],
      reference: 'AGS Beers Criteria / STOPP-START',
    },
  ],
};
