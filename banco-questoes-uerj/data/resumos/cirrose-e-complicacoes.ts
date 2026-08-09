/**
 * Resumo — Gastroenterologia e Hepatologia · Cirrose e complicações.
 *
 * Cobre as entidades do assunto no corpus: rastreamento e conduta do
 * carcinoma hepatocelular, e peritonite bacteriana espontânea.
 */
const content = `
## 🎯 Essencial

- **Rastreamento de carcinoma hepatocelular (CHC): USG abdominal a cada 6 meses em todo cirrótico** (e em portadores crônicos de hepatite B mesmo sem cirrose, conforme risco). Nódulo detectado ao rastreio: **TC de 4 fases (ou RM multifásica)**, não biópsia como primeiro passo.
- **Padrão de imagem que dispensa biópsia para diagnosticar CHC:** **captação de contraste na fase arterial + "wash-out" (hiporrealce) na fase portal/tardia** — esse padrão em nódulo ≥1cm em fígado cirrótico já é diagnóstico, sistematizado pelo **LI-RADS**.
- **Ressecção cirúrgica é a melhor opção em CHC localizado com função hepática preservada** (sem cirrose ou cirrose muito compensada, sem hipertensão portal clinicamente significativa) — transplante é reservado para doença dentro dos critérios de Milão em paciente com função hepática comprometida (cirrose descompensada), e não é automaticamente a "melhor opção" só porque cura tanto o tumor quanto a hepatopatia de base.
- **Peritonite bacteriana espontânea (PBE):** líquido ascítico com **≥250 polimorfonucleares/mm³** confirma o diagnóstico, independentemente de cultura positiva (que costuma ser negativa em até 40% dos casos verdadeiros). Tratamento: **cefalosporina de 3ª geração (cefotaxima)**.
- **Na PBE, além do antibiótico, duas medidas adicionais mudam mortalidade: albumina IV (previne síndrome hepatorrenal) e suspensão do betabloqueador** (que compromete a resposta hemodinâmica compensatória à infecção/hipovolemia relativa, piorando a perfusão renal).
- **Todo paciente que já teve um episódio de PBE precisa de profilaxia secundária com norfloxacino** (ou outra quinolona) — recorrência é muito comum sem profilaxia.
- **Profilaxia primária de PBE (antes do primeiro episódio)** é indicada em cirróticos com proteína do líquido ascítico muito baixa (<1,5 g/dL) associada a outros fatores de risco (disfunção renal, hiponatremia, Child-Pugh avançado) ou em sangramento digestivo alto agudo.

## 💎 Pearls

- **O rastreamento de CHC só vale a pena em quem seria candidato a tratamento** — a lógica de custo-benefício do rastreio semestral pressupõe que, se um nódulo for encontrado precocemente, existe conduta terapêutica curativa disponível (ressecção, transplante, ablação).
- **A alfafetoproteína tem papel complementar, não substitui a imagem** — muitos CHCs, especialmente pequenos, têm alfafetoproteína normal; o diagnóstico por imagem com padrão típico é suficiente isoladamente.
- **GASA (gradiente soro-ascite de albumina) ≥1,1 confirma hipertensão portal como causa da ascite** — é o primeiro passo na investigação de qualquer ascite nova, antes mesmo de pensar em PBE.
- **A proteína total do líquido ascítico na PBE clássica é tipicamente baixa** (<1 g/dL, refletindo ascite de hipertensão portal "pura") — isso a diferencia de peritonite bacteriana secundária (perfuração/abcesso intra-abdominal), que costuma ter proteína mais alta, glicose mais baixa e múltiplos organismos na cultura (polimicrobiana).
- **Betabloqueador não profilático de sangramento variceal deve ser reavaliado/suspenso em cirrótico com PBE, hipotensão ou síndrome hepatorrenal** — essa é uma das poucas situações em que a "janela terapêutica" do betabloqueador na cirrose se estreita (o conceito de "janela do betabloqueador na cirrose").
- **A vigilância de CHC deve continuar mesmo após tratamento curativo de um primeiro tumor** — recorrência é comum, e o rastreio semestral deve ser retomado/mantido no seguimento pós-tratamento.

## ⚠️ Pitfalls

- **Biopsiar todo nódulo hepático em cirrótico antes de tentar caracterizá-lo por imagem multifásica** — quando o padrão de captação arterial + wash-out é típico, a biópsia é desnecessária e acrescenta risco (incluindo risco teórico de disseminação tumoral pelo trajeto da agulha).
- **Indicar transplante hepático como conduta padrão para todo CHC**, mesmo em paciente com função hepática preservada e doença localizada — a ressecção cirúrgica é preferível nesse cenário, reservando o transplante para quando a hepatopatia de base (não só o tumor) também precisa ser resolvida.
- **Aguardar cultura positiva do líquido ascítico para iniciar tratamento de PBE** — a contagem de polimorfonucleares ≥250/mm³ já basta para iniciar antibiótico empiricamente, sem esperar o resultado (que demora dias e é frequentemente negativo mesmo em infecção real).
- **Tratar PBE só com antibiótico, sem albumina** — a albumina intravenosa reduz significativamente a incidência de síndrome hepatorrenal e mortalidade, especialmente em pacientes com creatinina elevada, bilirrubina alta ou outros marcadores de gravidade.
- **Manter betabloqueador em dose plena durante episódio de PBE/instabilidade hemodinâmica** — deve ser suspenso temporariamente nesse contexto.
- **Não indicar profilaxia secundária após o primeiro episódio de PBE** — a recorrência sem profilaxia é alta, e o norfloxacino profilático reduz significativamente esse risco.

## 📝 Como a UERJ cobra

**Cirrose e complicações é #29 do ranking (3 questões, 1,2% do corpus)**, com **carcinoma hepatocelular respondendo por 2 das 3 questões** — a banca claramente prioriza o algoritmo de rastreamento e conduta do CHC dentro deste assunto.

- As duas vinhetas de **carcinoma hepatocelular** (2021 Q30, 2024 Q33) testaram, respectivamente, o **exame correto diante de nódulo suspeito** (TC de 4 fases, não biópsia direta) e a **conduta terapêutica correta em doença localizada com função hepática preservada** (ressecção cirúrgica, não transplante ou terapia sistêmica) — ambas citando explicitamente a diretriz AASLD para CHC.
- **Peritonite bacteriana espontânea** (2021 Q33) exigiu reconhecer a combinação completa de conduta correta (antibiótico + suspensão de betabloqueador + albumina), citando o Consenso de Baveno VII e a diretriz EASL de cirrose descompensada — questão que cobra o "pacote terapêutico completo", não apenas o antibiótico isolado.

## 🆕 Atualização

- O **sistema LI-RADS** (Liver Imaging Reporting and Data System) tornou-se o padrão internacional para caracterizar nódulos hepáticos em cirróticos por imagem, padronizando a linguagem radiológica e reduzindo a necessidade de biópsia em nódulos com padrão típico — já refletido no racional cobrado pela UERJ.
- Para CHC avançado/irressecável, a combinação de **imunoterapia (atezolizumabe) + antiangiogênico (bevacizumabe)** tornou-se o novo padrão de primeira linha sistêmica, superando o sorafenibe isolado (padrão anterior por mais de uma década) em sobrevida global — mudança relevante de primeira linha terapêutica sistêmica, ainda não cobrada pela UERJ.
- O **Consenso de Baveno VII**, já referenciado pela UERJ, atualizou critérios de compensação/descompensação da cirrose e reforçou recomendações de rastreamento e manejo combinado de complicações (incluindo o conceito da "janela terapêutica do betabloqueador" e critérios mais recentes para retirada segura de betabloqueador em descompensação aguda).

## 🧠 Conceito e fisiopatologia

**Carcinoma hepatocelular** desenvolve-se predominantemente em fígado cirrótico, onde ciclos repetidos de lesão-regeneração hepatocitária ao longo de anos acumulam mutações que eventualmente geram um clone celular maligno — a neoangiogênese tumoral desproporcional (o tumor desenvolve suprimento arterial próprio, diferente do parênquima hepático normal, que é predominantemente suprido pela veia porta) explica o padrão de imagem característico: captação intensa na fase arterial (sangue arterial concentrado no tumor hipervascular) seguida de "lavagem" mais rápida que o parênquima adjacente na fase portal/tardia (wash-out), já que o tumor não retém o contraste da mesma forma que o tecido hepático normal circundante.

**Peritonite bacteriana espontânea** ocorre por translocação bacteriana da flora intestinal através da parede intestinal edemaciada e hiperpermeável (consequência da hipertensão portal) para os linfonodos mesentéricos e, posteriormente, para a circulação sistêmica e o líquido ascítico — a baixa concentração de proteínas opsonizantes no líquido ascítico de pacientes com hipoproteinemia grave (proteína total <1-1,5 g/dL) reduz a capacidade de defesa local contra essa colonização bacteriana, explicando por que esse subgrupo tem risco particularmente alto e se beneficia de profilaxia antibiótica primária.

A **suspensão do betabloqueador na PBE/instabilidade** reflete que, nessa situação, o coração cirrótico já compensado de forma limitada (a chamada cardiomiopatia cirrótica) perde ainda mais sua capacidade de aumentar o débito cardíaco em resposta à vasodilatação sistêmica da sepse — o bloqueio beta-adrenérgico, que normalmente reduz pressão portal ao diminuir o débito cardíaco, torna-se contraproducente nesse cenário agudo, comprometendo a perfusão renal e contribuindo para síndrome hepatorrenal.

## 🩺 Quadro clínico

- **CHC:** frequentemente assintomático em fase inicial (daí a importância do rastreamento); em fase avançada, dor em hipocôndrio direito, emagrecimento, descompensação de cirrose previamente estável, massa palpável.
- **PBE:** pode ser assintomática/oligossintomática ou apresentar dor abdominal, febre, piora do estado mental (encefalopatia desencadeada pela infecção), diarreia; um subgrupo significativo de casos tem apresentação silenciosa, o que reforça a indicação de paracentese diagnóstica em toda internação de cirrótico com ascite.

## 🔎 Diagnóstico

- **CHC:** USG semestral de rastreamento em cirróticos; nódulo suspeito → **TC de 4 fases ou RM multifásica** com padrão de captação arterial + wash-out (LI-RADS); biópsia reservada para padrão de imagem atípico/indeterminado.
- **PBE:** **paracentese diagnóstica** em toda internação de cirrótico com ascite (e sempre que houver piora clínica) — contagem de polimorfonucleares ≥250/mm³ confirma o diagnóstico independentemente do resultado da cultura.

## 🚨 Gravidade / classificação

- **Critérios de Milão** (nódulo único ≤5cm ou até 3 nódulos ≤3cm cada, sem invasão vascular/extra-hepática) definem elegibilidade para transplante hepático no CHC.
- **Estadiamento BCLC (Barcelona Clinic Liver Cancer)** integra estágio tumoral e função hepática para orientar a estratégia terapêutica completa (ressecção, transplante, ablação, terapia locorregional, sistêmica).
- **PBE com creatinina elevada, bilirrubina alta ou sódio baixo** define maior risco de síndrome hepatorrenal e reforça a indicação de albumina IV.

## 💊 Tratamento

- **CHC localizado, função hepática preservada:** **ressecção cirúrgica**.
- **CHC dentro dos critérios de Milão, função hepática comprometida (cirrose descompensada):** **transplante hepático**.
- **CHC não candidato a cirurgia/transplante, doença localizada:** terapias locorregionais (ablação por radiofrequência, quimioembolização transarterial).
- **CHC avançado/metastático:** terapia sistêmica (imunoterapia + antiangiogênico como padrão atual de primeira linha).
- **PBE:** **cefotaxima** (ou outra cefalosporina de 3ª geração) + **albumina intravenosa** (especialmente se creatinina/bilirrubina elevadas) + **suspensão do betabloqueador** durante o episódio agudo; **profilaxia secundária com norfloxacino** após o primeiro episódio, indefinidamente.

## 🔀 Diagnóstico diferencial

| Peritonite em cirrótico | Proteína do líquido | Cultura | Conduta |
| --- | --- | --- | --- |
| PBE (espontânea) | Baixa (<1 g/dL, tipicamente) | Frequentemente negativa | Cefotaxima + albumina |
| Peritonite bacteriana secundária | Mais alta | Polimicrobiana | Investigar foco cirúrgico (perfuração/abscesso) |

## 📋 Tabela de revisão

| Situação | Achado-chave | Conduta |
| --- | --- | --- |
| Rastreamento de CHC | Cirrose ou hepatite B crônica | USG semestral |
| Nódulo suspeito na USG | — | TC/RM multifásica (LI-RADS) |
| CHC localizado, função preservada | Sem hipertensão portal significativa | Ressecção cirúrgica |
| Ascite + PMN ≥250/mm³ | PBE confirmada | Cefotaxima + albumina + suspender BB |

## 📚 Referências essenciais

- Diretriz AASLD para Carcinoma Hepatocelular (citada explicitamente pela UERJ em 2021 e 2024).
- Consenso de Baveno VII / Diretriz EASL de Cirrose Descompensada (citados explicitamente pela UERJ em 2021).
- Sistema LI-RADS (Liver Imaging Reporting and Data System) — American College of Radiology.
`;

export default content.trim();
