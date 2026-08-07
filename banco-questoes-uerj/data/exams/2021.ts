import type { ExamInput } from '../types';

/**
 * ATENÇÃO — PROCEDÊNCIA DO CONTEÚDO
 *
 * As questões deste arquivo são AUTORAIS, escritas no estilo e no formato da
 * prova de R+ Clínica Médica da UERJ (múltipla escolha, 4 alternativas, caso
 * clínico curto). Elas NÃO são transcrições dos cadernos oficiais da banca.
 *
 * Para trabalhar com as provas reais, importe os cadernos oficiais via
 * `npm run exam:import` usando `source: "PROVA_OFICIAL"`. As estatísticas de
 * incidência e o ranking 80/20 são recalculados automaticamente e passam a
 * refletir o corpus real.
 */
export const exam2021: ExamInput = {
  slug: 'uerj-2021-r-plus-cm-autoral',
  year: 2021,
  board: 'UERJ',
  program: 'R+ Clínica Médica',
  title: 'UERJ 2021 — R+ Clínica Médica (conjunto autoral no estilo da banca)',
  source: 'AUTORAL_ESTILO_BANCA',
  reference: 'Questões autorais para treino; distribuição temática inspirada no perfil histórico da banca.',
  questions: [
    {
      number: 1,
      statement:
        'Homem de 62 anos, hipertenso e tabagista, chega à emergência com dor precordial em aperto iniciada há 90 minutos, com irradiação para o membro superior esquerdo. PA 140x90 mmHg, FC 88 bpm, sem sinais de congestão. O ECG mostra supradesnivelamento do segmento ST de 3 mm em V2 a V5. O serviço não dispõe de laboratório de hemodinâmica e o hospital com angioplastia primária mais próximo está a 3 horas de transporte. Qual a conduta mais adequada?',
      alternatives: [
        { letter: 'A', text: 'Transferir imediatamente para angioplastia primária, sem terapia de reperfusão local.' },
        { letter: 'B', text: 'Administrar trombolítico no serviço de origem e transferir para centro com hemodinâmica.' },
        { letter: 'C', text: 'Iniciar apenas antiagregação dupla e anticoagulação, aguardando estratificação eletiva.' },
        { letter: 'D', text: 'Solicitar troponina seriada e definir a reperfusão somente após confirmação laboratorial.' },
      ],
      answerKey: 'B',
      theme: 'cardiologia',
      subtheme: 'sindromes-coronarianas-agudas',
      difficulty: 'MEDIA',
      keywords: ['IAMCSST', 'reperfusão', 'trombólise', 'tempo porta-balão', 'estratégia fármaco-invasiva'],
      reference: 'Diretriz da Sociedade Brasileira de Cardiologia sobre IAM com supradesnivelamento de ST',
    },
    {
      number: 2,
      statement:
        'Mulher de 68 anos com insuficiência cardíaca de fração de ejeção reduzida (FEVE 28%), classe funcional NYHA II, em uso otimizado de enalapril, carvedilol e espironolactona. Mantém-se sintomática, com PA 118x74 mmHg, FC 72 bpm em ritmo sinusal, potássio 4,4 mEq/L e creatinina 1,1 mg/dL. Qual a modificação terapêutica com maior benefício demonstrado em mortalidade neste cenário?',
      alternatives: [
        { letter: 'A', text: 'Substituir o enalapril por sacubitril-valsartana e associar inibidor de SGLT2.' },
        { letter: 'B', text: 'Associar digoxina para controle sintomático.' },
        { letter: 'C', text: 'Aumentar a dose de furosemida e manter o restante do esquema.' },
        { letter: 'D', text: 'Associar amiodarona profilática para prevenção de morte súbita.' },
      ],
      answerKey: 'A',
      theme: 'cardiologia',
      subtheme: 'insuficiencia-cardiaca',
      difficulty: 'MEDIA',
      keywords: ['ICFEr', 'sacubitril-valsartana', 'iSGLT2', 'terapia quádrupla', 'mortalidade'],
      reference: 'Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda',
    },
    {
      number: 3,
      statement:
        'Homem de 55 anos, etilista, é internado com pneumonia adquirida na comunidade. No terceiro dia de antibioticoterapia apresenta piora clínica, com febre persistente e dor pleurítica. A radiografia mostra derrame pleural volumoso à direita. A toracocentese revela: pH 7,05, glicose 32 mg/dL, DHL 1.400 U/L e aspecto turvo, com bacterioscopia negativa. Qual a conduta indicada?',
      alternatives: [
        { letter: 'A', text: 'Manter antibioticoterapia isolada e repetir a toracocentese em 48 horas.' },
        { letter: 'B', text: 'Realizar toracocenteses de alívio seriadas conforme a sintomatologia.' },
        { letter: 'C', text: 'Indicar drenagem torácica em selo d’água, mantendo a antibioticoterapia.' },
        { letter: 'D', text: 'Iniciar corticoterapia sistêmica para reduzir a inflamação pleural.' },
      ],
      answerKey: 'C',
      theme: 'pneumologia',
      subtheme: 'derrame-pleural',
      difficulty: 'MEDIA',
      keywords: ['derrame parapneumônico complicado', 'empiema', 'critérios de Light', 'drenagem torácica', 'pH pleural'],
      reference: 'Diretrizes de manejo do derrame pleural parapneumônico (BTS/ACCP)',
    },
    {
      number: 4,
      statement:
        'Paciente de 34 anos, com diagnóstico recente de infecção pelo HIV, assintomático, apresenta contagem de linfócitos T CD4+ de 180 células/mm³ e carga viral de 95.000 cópias/mL. Não há evidência de infecção oportunista ativa. Além de iniciar a terapia antirretroviral, qual profilaxia primária está indicada neste momento?',
      alternatives: [
        { letter: 'A', text: 'Sulfametoxazol-trimetoprima para Pneumocystis jirovecii.' },
        { letter: 'B', text: 'Azitromicina para complexo Mycobacterium avium.' },
        { letter: 'C', text: 'Fluconazol para criptococose.' },
        { letter: 'D', text: 'Valganciclovir para citomegalovírus.' },
      ],
      answerKey: 'A',
      theme: 'infectologia',
      subtheme: 'hiv-aids',
      difficulty: 'FACIL',
      keywords: ['HIV', 'CD4', 'profilaxia primária', 'Pneumocystis jirovecii', 'SMX-TMP'],
      reference: 'Protocolo Clínico e Diretrizes Terapêuticas para Manejo da Infecção pelo HIV em Adultos (MS)',
    },
    {
      number: 5,
      statement:
        'Homem de 45 anos é internado com quadro de febre e emagrecimento há 5 semanas. Ao exame, sopro diastólico em foco aórtico, esplenomegalia e lesões cutâneas eritematosas dolorosas em polpas digitais. Hemoculturas seriadas são positivas para Streptococcus do grupo viridans. O ecocardiograma transtorácico é inconclusivo. Considerando os critérios de Duke modificados, qual a afirmação correta?',
      alternatives: [
        { letter: 'A', text: 'O diagnóstico está descartado, pois o ecocardiograma transtorácico foi inconclusivo.' },
        { letter: 'B', text: 'Há um critério maior e critérios menores; deve-se realizar ecocardiograma transesofágico.' },
        { letter: 'C', text: 'Os achados cutâneos são critérios maiores e já confirmam o diagnóstico definitivo.' },
        { letter: 'D', text: 'A presença de esplenomegalia isolada configura critério maior de endocardite.' },
      ],
      answerKey: 'B',
      theme: 'infectologia',
      subtheme: 'endocardite-infecciosa',
      difficulty: 'MEDIA',
      keywords: ['endocardite infecciosa', 'critérios de Duke', 'nódulos de Osler', 'ecocardiograma transesofágico', 'hemocultura'],
      reference: 'Diretrizes da AHA/ESC para endocardite infecciosa',
    },
    {
      number: 6,
      statement:
        'Mulher de 72 anos é internada por pneumonia e evolui, no segundo dia, com oligúria. Creatinina sobe de 0,9 para 2,4 mg/dL. Está hipotensa e recebeu contraste iodado no dia da admissão. O exame de urina mostra cilindros granulosos pigmentares, sódio urinário de 62 mEq/L e fração de excreção de sódio de 3,2%. Qual o diagnóstico mais provável?',
      alternatives: [
        { letter: 'A', text: 'Injúria renal aguda pré-renal por hipovolemia.' },
        { letter: 'B', text: 'Necrose tubular aguda.' },
        { letter: 'C', text: 'Nefrite intersticial aguda alérgica.' },
        { letter: 'D', text: 'Injúria renal aguda pós-renal obstrutiva.' },
      ],
      answerKey: 'B',
      theme: 'nefrologia',
      subtheme: 'injuria-renal-aguda',
      difficulty: 'MEDIA',
      keywords: ['necrose tubular aguda', 'fração de excreção de sódio', 'cilindros granulosos', 'KDIGO', 'nefrotoxicidade'],
      reference: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
    },
    {
      number: 7,
      statement:
        'Homem de 58 anos, diabético tipo 2 há 12 anos, em uso de metformina 2 g/dia, apresenta HbA1c de 8,4%. Possui doença arterial coronariana estabelecida, com angioplastia prévia, e taxa de filtração glomerular estimada de 68 mL/min/1,73 m². Qual a classe de fármaco a ser associada com maior benefício cardiovascular comprovado?',
      alternatives: [
        { letter: 'A', text: 'Sulfonilureia.' },
        { letter: 'B', text: 'Inibidor da DPP-4.' },
        { letter: 'C', text: 'Agonista do receptor de GLP-1.' },
        { letter: 'D', text: 'Insulina NPH noturna.' },
      ],
      answerKey: 'C',
      theme: 'endocrinologia',
      subtheme: 'diabetes-mellitus',
      difficulty: 'MEDIA',
      keywords: ['diabetes tipo 2', 'GLP-1', 'doença cardiovascular aterosclerótica', 'HbA1c', 'proteção cardiovascular'],
      reference: 'Diretriz da Sociedade Brasileira de Diabetes / ADA Standards of Care',
    },
    {
      number: 8,
      statement:
        'Paciente de 50 anos, cirrótico por hepatite C, é admitido com ascite volumosa e dor abdominal difusa. A paracentese diagnóstica revela 620 leucócitos/mm³, com 78% de polimorfonucleares, e cultura em andamento. Além da antibioticoterapia com cefalosporina de terceira geração, qual medida reduz comprovadamente a mortalidade e a incidência de síndrome hepatorrenal neste contexto?',
      alternatives: [
        { letter: 'A', text: 'Infusão de albumina intravenosa.' },
        { letter: 'B', text: 'Paracentese de alívio de grande volume imediata.' },
        { letter: 'C', text: 'Uso de betabloqueador não seletivo em dose plena.' },
        { letter: 'D', text: 'Restrição hídrica intensa associada a diurético de alça.' },
      ],
      answerKey: 'A',
      theme: 'gastroenterologia',
      subtheme: 'cirrose-e-complicacoes',
      difficulty: 'MEDIA',
      keywords: ['peritonite bacteriana espontânea', 'albumina', 'síndrome hepatorrenal', 'ascite', 'cirrose'],
      reference: 'EASL Clinical Practice Guidelines on decompensated cirrhosis',
    },
    {
      number: 9,
      statement:
        'Mulher de 28 anos apresenta astenia progressiva. Hemograma: hemoglobina 8,6 g/dL, VCM 68 fL, RDW 18%. Ferritina 6 ng/mL, saturação de transferrina 7%. Relata menorragia há 2 anos. Foi iniciada reposição de sulfato ferroso oral. Qual parâmetro indica resposta adequada mais precocemente?',
      alternatives: [
        { letter: 'A', text: 'Normalização da ferritina em 7 dias.' },
        { letter: 'B', text: 'Aumento de reticulócitos entre o 5º e o 10º dia.' },
        { letter: 'C', text: 'Normalização do VCM em 72 horas.' },
        { letter: 'D', text: 'Queda do RDW na primeira semana.' },
      ],
      answerKey: 'B',
      theme: 'hematologia',
      subtheme: 'anemias',
      difficulty: 'FACIL',
      keywords: ['anemia ferropriva', 'reticulócitos', 'ferritina', 'VCM', 'resposta ao ferro'],
      reference: 'Diretrizes de manejo da anemia ferropriva (ABHH/WHO)',
    },
    {
      number: 10,
      statement:
        'Mulher de 32 anos apresenta artrite de pequenas articulações das mãos, fotossensibilidade, úlceras orais indolores e proteinúria de 1,8 g/24h. FAN 1:1280 padrão nuclear homogêneo, anti-DNA nativo positivo, C3 e C4 reduzidos. Qual a conduta diagnóstica mais adequada para definir o tratamento?',
      alternatives: [
        { letter: 'A', text: 'Iniciar corticoide em dose alta empiricamente, sem investigação adicional.' },
        { letter: 'B', text: 'Realizar biópsia renal para classificação histológica da nefrite lúpica.' },
        { letter: 'C', text: 'Solicitar apenas ultrassonografia renal e acompanhar a proteinúria.' },
        { letter: 'D', text: 'Repetir o FAN em 3 meses antes de qualquer intervenção.' },
      ],
      answerKey: 'B',
      theme: 'reumatologia',
      subtheme: 'lupus-e-conectivopatias',
      difficulty: 'MEDIA',
      keywords: ['lúpus eritematoso sistêmico', 'nefrite lúpica', 'biópsia renal', 'anti-DNA', 'complemento'],
      reference: 'Recomendações EULAR/ACR para nefrite lúpica',
    },
    {
      number: 11,
      statement:
        'Homem de 66 anos, hipertenso, é trazido com hemiparesia direita e afasia de início há 2 horas. PA 178x96 mmHg, glicemia 132 mg/dL, NIHSS 14. Tomografia de crânio sem contraste não evidencia hemorragia nem sinais precoces extensos de isquemia. Não usa anticoagulante e não há contraindicações. Qual a conduta imediata?',
      alternatives: [
        { letter: 'A', text: 'Reduzir a PA para menos de 140x90 mmHg antes de qualquer terapia.' },
        { letter: 'B', text: 'Administrar alteplase intravenosa.' },
        { letter: 'C', text: 'Iniciar AAS e heparina de baixo peso molecular em dose plena.' },
        { letter: 'D', text: 'Aguardar ressonância magnética antes de definir a conduta.' },
      ],
      answerKey: 'B',
      theme: 'neurologia',
      subtheme: 'avc',
      difficulty: 'FACIL',
      keywords: ['AVC isquêmico', 'trombólise', 'alteplase', 'janela terapêutica', 'NIHSS'],
      reference: 'Diretrizes da AHA/ASA para manejo precoce do AVC isquêmico agudo',
    },
    {
      number: 12,
      statement:
        'Paciente de 70 anos é admitido com quadro de pielonefrite. Apresenta PA 82x48 mmHg após 30 mL/kg de cristaloide, lactato 4,2 mmol/L, frequência cardíaca 118 bpm e diurese 0,2 mL/kg/h. Qual a conduta seguinte mais apropriada?',
      alternatives: [
        { letter: 'A', text: 'Iniciar noradrenalina para atingir PAM ≥ 65 mmHg.' },
        { letter: 'B', text: 'Iniciar dopamina em dose renal para proteção da função renal.' },
        { letter: 'C', text: 'Administrar mais 30 mL/kg de cristaloide antes de qualquer vasopressor.' },
        { letter: 'D', text: 'Iniciar dobutamina como droga vasoativa de primeira escolha.' },
      ],
      answerKey: 'A',
      theme: 'emergencias-e-terapia-intensiva',
      subtheme: 'choque',
      difficulty: 'FACIL',
      keywords: ['choque séptico', 'noradrenalina', 'PAM', 'lactato', 'ressuscitação volêmica'],
      reference: 'Surviving Sepsis Campaign',
    },
  ],
};
