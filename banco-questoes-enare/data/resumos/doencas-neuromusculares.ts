/**
 * Resumo — Neurologia · Doenças neuromusculares.
 *
 * Reorganizado por entidade clínica (cada doença tem sua própria seção com
 * quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo.
 *
 * Cobre as entidades do assunto no corpus: padrão eletroneuromiográfico da
 * síndrome de Guillain-Barré, paralisia periódica hipocalêmica, miastenia
 * gravis associada a timoma com indicação de timectomia e a distinção
 * clínica entre afasia de Broca e afasia de Wernicke — este último tema é
 * semiologia de linguagem cortical, sem relação fisiopatológica com as
 * doenças neuromusculares propriamente ditas, e é tratado aqui como seção
 * à parte porque é assim que o corpus de questões o classifica. Inclui
 * também extrapolações de alto rendimento (variante de Miller Fisher,
 * síndrome miastênica de Lambert-Eaton, ELA, miopatias inflamatórias,
 * distrofias musculares e outras canalopatias periódicas) ainda não
 * cobradas no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- As doenças neuromusculares se organizam por **nível anatômico acometido**: neurônio motor (ELA), nervo periférico (SGB), junção neuromuscular (miastenia gravis, Lambert-Eaton) e músculo (miopatias, distrofias) — o nível determina padrão de fraqueza, comportamento dos reflexos e qual exame complementar (ENMG, CK, biópsia) é mais útil.
- **CK (creatinoquinase)** é o divisor inicial mais rápido: elevada aponta acometimento muscular primário; normal em neuropatias (SGB) e na miastenia gravis.
- **Reflexos e sensibilidade** também separam rapidamente os grandes grupos: arreflexia + parestesia sugere neuropatia (SGB); reflexos preservados + fraqueza flutuante sugere junção neuromuscular (MG); reflexos preservados até fase tardia + CK alta sugere miopatia.
- As afasias corticais (bloco à parte, ver seção própria) decorrem de lesão de córtex cerebral, tipicamente vascular — não têm relação fisiopatológica com nervo, junção ou músculo; entram neste resumo apenas porque é assim que o banco de questões as classifica.

## 📝 Como a banca cobra

**Doenças neuromusculares aparece em 4 questões (1,89% do corpus)**, misturando EBSERH e ENARE, com foco em mecanismo e conduta, e um tópico de semiologia neurológica clássica classificado junto.

- **EBSERH 2025 Q58** cobrou o padrão eletroneuromiográfico da síndrome de Guillain-Barré — reconhecer o padrão desmielinizante clássico é o ponto central.
- **ENARE 2025 Q43** (classificada como difícil) trouxe paralisia periódica hipocalêmica, exigindo entender o mecanismo de desvio transcelular de potássio.
- **ENARE 2026 Q9** testou miastenia gravis associada a timoma, com a indicação de timectomia.
- **ENARE 2026 Q48** cobrou a distinção clínica entre afasia de Broca e afasia de Wernicke — semiologia clássica classificada dentro deste assunto pelo banco, sem relação fisiopatológica direta com as demais entidades.

## 🧠 Conceito e fisiopatologia

A SGB é processo autoimune pós-infeccioso por mimetismo molecular: epítopos de patógenos (gangliosídeos de *Campylobacter jejuni*, o gatilho clássico) se assemelham a componentes do nervo periférico, levando o sistema imune a atacar mielina (forma desmielinizante clássica, AIDP) ou o axônio diretamente (formas axonais, AMAN/AMSAN). A miastenia gravis é doença autoimune pós-sináptica da junção neuromuscular (anticorpos anti-receptor de acetilcolina ou anti-MuSK); a síndrome de Lambert-Eaton é o espelho pré-sináptico (anticorpos contra canais de cálcio voltagem-dependentes) — mecanismos opostos que explicam por que uma piora e a outra melhora com esforço repetido. A paralisia periódica hipocalêmica é canalopatia muscular em que a queda aguda do potássio extracelular (por desvio transcelular, não perda corporal) despolariza paradoxalmente a membrana, tornando-a inexcitável. As afasias corticais seguem a organização perisylviana clássica da linguagem — lesão frontal posterior compromete produção (Broca), lesão temporal posterior compromete compreensão (Wernicke).

## 🔹 Síndrome de Guillain-Barré (SGB)

- **Quando suspeitar:** fraqueza ascendente simétrica (pernas antes de braços), parestesias distais leves, hipo/arreflexia progressiva, geralmente 1-3 semanas após infecção (*Campylobacter jejuni*, vírus respiratórios/gastrointestinais, mais raramente pós-vacinal). Pode envolver nervos cranianos (diplegia facial) e musculatura respiratória — disfagia, voz fraca e dispneia são sinais de gravidade.
- **Diagnóstico:** eletroneuromiografia com padrão **desmielinizante (AIDP)** — velocidade de condução reduzida, latências distais prolongadas, bloqueio de condução, ondas F ausentes/prolongadas — ou padrão **axonal (AMAN/AMSAN)**, com amplitude de potencial de ação reduzida e velocidade preservada. Líquor com **dissociação albumino-citológica** (proteína alta, celularidade normal), que pode estar ausente na 1ª semana. Monitorar sempre **capacidade vital forçada** seriada pelo risco de insuficiência respiratória.
- **Tratamento:** imunoglobulina IV ou plasmaférese (eficácia equivalente) — **corticoide isolado não tem benefício comprovado**; suporte ventilatório se insuficiência respiratória; fisioterapia motora precoce.
- 💎 **Pearl:** a **variante de Miller Fisher** segue o mesmo mecanismo de mimetismo molecular, mas com anticorpo anti-GQ1b dirigido a gangliosídeos dos nervos oculomotores — tríade oftalmoplegia + ataxia + arreflexia, tipicamente **sem** fraqueza importante de membros, que pode ser confundida com AVC de tronco.
- ⚠️ **Pitfall:** tratar SGB com corticoide isolado, atrasando IVIG/plasmaférese — sem eficácia comprovada nessa doença (ao contrário de outras neuropatias inflamatórias crônicas).
- 📝 **Como caiu:** EBSERH 2025 Q58 — padrão eletroneuromiográfico desmielinizante clássico.

## 🔹 Paralisia periódica hipocalêmica

- **Quando suspeitar:** episódios recorrentes de fraqueza flácida proximal (mais em membros inferiores), poupando musculatura respiratória, ocular e facial, com recuperação completa entre crises e sensibilidade preservada — desencadeados por exercício intenso, dieta rica em carboidratos ou estresse. Forma familiar (canalopatia, mutação em CACNA1S) ou secundária a **tireotoxicose**.
- **Diagnóstico:** potássio sérico baixo durante a crise (por desvio transcelular, não perda corporal total); ECG com achatamento de onda T e onda U; TSH/T4 livre para excluir causa tireotóxica.
- **Tratamento:** reposição **cautelosa e em baixa dose** de potássio (o retorno do potássio à célula pode causar hipercalemia de rebote); na forma tireotóxica, **betabloqueador** associado ao controle da tireotoxicose é o tratamento de escolha, mais do que reposição agressiva isolada; acetazolamida na profilaxia da forma familiar.
- 💎 **Pearl:** as formas **hipercalêmica** e a **paramiotonia congênita** são canalopatias do canal de sódio, clinicamente distintas — fraqueza desencadeada por repouso após exercício, jejum ou ingestão de potássio (não por carboidratos) é o gatilho "errado" para a forma hipocalêmica, pista clássica de prova.
- ⚠️ **Pitfall:** repor potássio de forma agressiva e rápida — risco de hipercalemia de rebote quando o potássio retorna ao espaço extracelular.
- 📝 **Como caiu:** ENARE 2025 Q43 (DIFÍCIL) — mecanismo de desvio transcelular de potássio.

## 🔹 Miastenia gravis (MG)

- **Quando suspeitar:** fraqueza flutuante que **piora com esforço repetido**, frequentemente com ptose/diplopia na apresentação, piores ao final do dia; fraqueza proximal de membros e, em casos bulbares, disfagia/disartria — **reflexos tendíneos profundos preservados**, ao contrário da SGB.
- **Diagnóstico:** anticorpos anti-receptor de acetilcolina (ou anti-MuSK); teste de estimulação repetitiva com **decremento** da resposta, ou eletromiografia de fibra única; **TC de tórax obrigatória em todo paciente recém-diagnosticado** — associação com **timoma em até 10-15% dos casos**.
- **Tratamento:** piridostigmina sintomática; imunossupressão (corticoide, azatioprina) na doença generalizada; **timectomia** se timoma confirmado (decisão oncológica, independente do controle clínico da MG) ou em MG generalizada sem timoma, sobretudo em pacientes jovens com doença moderada a grave; imunoglobulina IV ou plasmaférese na crise miastênica com insuficiência respiratória.
- 💎 **Pearl:** fármacos que **pioram a transmissão neuromuscular** e devem ser evitados/usados com cautela: aminoglicosídeos, fluoroquinolonas, betabloqueadores e sulfato de magnésio — pergunta clássica de prova sobre "o que não prescrever" num miastênico internado.
- ⚠️ **Pitfall:** adiar a timectomia em paciente com timoma confirmado só porque a MG está bem controlada clinicamente — a indicação é oncológica, não apenas neurológica.
- 📝 **Como caiu:** ENARE 2026 Q9 — miastenia gravis com timoma e indicação de timectomia.

## 🔹 Síndrome miastênica de Lambert-Eaton (diferencial da MG)

- **Quando suspeitar:** fraqueza proximal de início insidioso com reflexos inicialmente diminuídos que se intensificam transitoriamente após contração sustentada (**facilitação pós-tetânica**), associada a disautonomia (boca seca, disfunção erétil, constipação) — costuma ser **paraneoplásica**, classicamente associada a **carcinoma pulmonar de pequenas células**.
- **Diagnóstico:** estimulação repetitiva de alta frequência mostra **incremento** da resposta — padrão oposto ao decremento da MG; investigar neoplasia oculta, sobretudo pulmonar.
- 💎 **Pearl:** na MG a força **piora** com esforço repetido; na Lambert-Eaton, paradoxalmente, a força **melhora** — é o par de perguntas invertidas mais cobrado nesse diferencial.
- 📝 **Como caiu:** ainda não cobrado no corpus — diferencial paraneoplásico clássico da MG, alto potencial de cobrança.

## 🔹 Afasias corticais (Broca vs. Wernicke) — semiologia, sem relação fisiopatológica com o eixo acima

- **Afasia de Broca:** discurso não fluente, esforçoso e agramatical, com compreensão relativamente preservada e repetição prejudicada; lesão frontal posterior/inferior; paciente costuma ter consciência do próprio déficit (frustração).
- **Afasia de Wernicke:** discurso fluente mas incompreensível (parafasias, neologismos), compreensão prejudicada; lesão temporal posterior; frequentemente **sem** consciência do déficit (anosognosia).
- **Afasia global** (lesão perisylviana extensa, fluência e compreensão comprometidas) e **afasia de condução** (repetição desproporcionalmente prejudicada, fluência e compreensão relativamente preservadas, lesão do fascículo arqueado) completam o espectro clássico.
- **Diagnóstico:** exame clínico da fala (fluência, compreensão, repetição, nomeação) associado a neuroimagem para localizar a lesão (tipicamente vascular).
- **Tratamento:** reabilitação fonoaudiológica e tratamento da causa de base.
- ⚠️ **Pitfall:** trocar as características de Broca e Wernicke (achar que Broca é fluente ou que Wernicke é não fluente) — erro clássico de decoreba invertida; e encaixar a afasia dentro da fisiopatologia neuromuscular só porque está classificada no mesmo assunto do banco.
- 📝 **Como caiu:** ENARE 2026 Q48.

## 🔹 Diagnósticos diferenciais de fraqueza que completam o tema

- **Esclerose lateral amiotrófica (ELA):** combina sinais de neurônio motor superior (espasticidade, hiperreflexia, Babinski) e inferior (atrofia, fasciculações) no mesmo paciente, **sem** alteração sensitiva associada — essa ausência de queixa sensitiva a distingue da SGB.
- **Miopatias inflamatórias (polimiosite e dermatomiosite):** fraqueza muscular proximal simétrica com CK elevada; dermatomiosite acrescenta achados cutâneos (heliotropo, pápulas de Gottron) e maior associação com neoplasia oculta em adultos — biópsia muscular confirma.
- **Distrofias musculares (ex.: Duchenne):** doença genética do músculo, fraqueza progressiva de início na infância, CK muito elevada, pseudo-hipertrofia de panturrilhas.
- **Botulismo:** paralisia flácida **descendente** com envolvimento pupilar (midríase, diplopia) desde o início — diferencia da SGB, que é ascendente e geralmente poupa pupilas.
- **Crise miastênica vs. crise colinérgica:** a primeira é insuficiência respiratória por fraqueza da musculatura respiratória (escalonar para IVIG/plasmaférese e suporte ventilatório); a segunda é excesso de anticolinesterásico, com sinais muscarínicos associados (miose, sialorreia, cólica, bradicardia) — diferenciar orienta se a conduta é aumentar ou suspender a piridostigmina.
- 📝 **Como caiu:** nenhum desses ainda cobrado no corpus — completam o diagnóstico diferencial de fraqueza aguda/subaguda, tema de alto rendimento.

## 📋 Tabela

**Nível anatômico × achados-chave em fraqueza neuromuscular**

| Nível | Entidade | Reflexos | CK | Sensibilidade |
|---|---|---|---|---|
| Neurônio motor | ELA | Hiperativos (+ sinais de NMI) | Normal | Preservada |
| Nervo periférico | SGB | Reduzidos/abolidos | Normal | Alterada (leve) |
| Junção (pós-sináptica) | Miastenia gravis | Preservados | Normal | Preservada |
| Junção (pré-sináptica) | Lambert-Eaton | Reduzidos, com incremento pós-esforço | Normal | Preservada (disautonomia) |
| Músculo | Miopatias/distrofias | Preservados até fase tardia | Elevada | Preservada |

## 📚 Referências essenciais

- European Federation of Neurological Societies/Peripheral Nerve Society (EFNS/PNS) — Guideline on management of Guillain-Barré syndrome.
- Myasthenia Gravis Foundation of America (MGFA) e estudo MGTX — indicação de timectomia na miastenia gravis.
- Consenso de canalopatias musculares periódicas.
`;

export default content.trim();
