/**
 * Resumo — Hematologia · Leucemias e linfomas.
 *
 * Reorganizado por entidade clínica (leucemias agudas, leucemias crônicas,
 * linfoma de Hodgkin e linfoma não-Hodgkin são doenças distintas com
 * biologia, quadro clínico e conduta próprios) — a questão real do corpus
 * cobra o estadiamento/avaliação complementar obrigatória em linfoma difuso
 * de grandes células B relacionado ao HIV. Assunto de baixa incidência no
 * banco (1 questão), mas leucemias e linfomas são tema clássico e
 * recorrente de prova de residência em hematologia e clínica médica.
 */
const content = `
## 🎯 Essencial

- **Leucemias** são neoplasias hematológicas com predomínio de comprometimento primário da **medula óssea e sangue periférico**; **linfomas** predominam em **tecido linfoide sólido** (linfonodos, baço, sítios extranodais), podendo secundariamente infiltrar medula óssea (leucemização).
- **Aguda vs. crônica** não é sobre idade do paciente, e sim sobre o **grau de diferenciação das células neoplásicas e velocidade de evolução**: leucemias agudas acumulam **blastos indiferenciados** e evoluem em dias a semanas sem tratamento; leucemias crônicas acumulam células **mais maduras/diferenciadas** e evoluem em meses a anos.
- **Linfoma de Hodgkin** é definido pela presença da **célula de Reed-Sternberg** (célula binucleada/multinucleada característica, de origem em linfócito B do centro germinativo) em meio a um infiltrado inflamatório reacional — biologia e comportamento clínico muito diferentes do grupo heterogêneo dos **linfomas não-Hodgkin**.
- **Linfoma não-Hodgkin** é um grupo heterogêneo de neoplasias de linfócitos B, T ou NK — o subtipo mais comum e mais cobrado em prova é o **linfoma difuso de grandes células B (LDGCB)**, de comportamento agressivo, mas potencialmente curável com quimioimunoterapia.
- **Linfoma associado ao HIV** (sobretudo LDGCB e linfoma de Burkitt) é doença definidora de AIDS — ocorre com maior frequência e maior chance de acometimento extranodal quanto mais baixo o CD4, e a avaliação de estadiamento precisa investigar ativamente sítios que a imunossupressão torna mais prováveis (sistema nervoso central, trato gastrointestinal).

## 🔹 Leucemias agudas (LMA e LLA)

- **Leucemia mieloide aguda (LMA):** mais comum em adultos, sobretudo idosos; associada a síndromes mielodisplásicas prévias, exposição a quimioterápicos/radiação prévios, e a alterações citogenéticas específicas com valor prognóstico (ex.: t(15;17) na leucemia promielocítica aguda — subtipo com risco de coagulação intravascular disseminada grave ao diagnóstico, mas alta taxa de cura com ácido transretinoico associado a arsênio/quimioterapia).
- **Leucemia linfoblástica aguda (LLA):** mais comum em crianças (pico entre 2-5 anos), com excelente prognóstico nessa faixa etária; em adultos tem comportamento mais agressivo e prognóstico pior. Cromossomo Philadelphia — t(9;22), gene de fusão BCR-ABL — ocorre em subgrupo de LLA (mais frequente em adultos que em crianças) e hoje é tratável com inibidor de tirosina-quinase associado à quimioterapia.
- **Quadro clínico comum às leucemias agudas:** insuficiência medular por infiltração blástica — anemia (astenia, palidez), neutropenia (infecções de repetição/febre), plaquetopenia (sangramento, petéquias); pode haver infiltração extramedular (hepatoesplenomegalia, linfadenopatia, infiltração gengival mais típica de subtipos monocíticos de LMA, acometimento de sistema nervoso central mais típico da LLA).
- **Diagnóstico:** mielograma com **≥20% de blastos** na medula óssea (ou evidências de alteração citogenética/molecular específica que define a entidade independentemente da contagem); imunofenotipagem por citometria de fluxo define linhagem (mieloide vs. linfoide) e subtipo.
- ⚠️ **Pitfall:** suspeitar de leucemia aguda diante de pancitopenia com blastos circulantes e **atrasar o tratamento de suporte** (transfusão, antibioticoterapia empírica em neutropenia febril) esperando confirmação completa — a estabilização inicial não pode esperar o resultado definitivo do mielograma/citogenética.
- 💎 **Pearl:** leucemia promielocítica aguda é **emergência hematológica** desde a suspeita clínica — iniciar ácido transretinoico já diante de suspeita morfológica forte, sem esperar confirmação citogenética, pelo altíssimo risco de sangramento fatal por coagulopatia associada.

## 🔹 Leucemias crônicas (LMC e LLC)

- **Leucemia mieloide crônica (LMC):** definida pelo cromossomo Philadelphia — t(9;22), gene de fusão **BCR-ABL** constitutivamente ativo — em praticamente 100% dos casos. Quadro clássico: leucocitose importante com **desvio escalonado** (todas as fases de maturação mieloide presentes no sangue periférico, não só blastos), esplenomegalia proeminente, frequentemente assintomática ao diagnóstico (achado em hemograma de rotina). Tratamento com **inibidor de tirosina-quinase** (imatinibe e sucessores) revolucionou o prognóstico, tornando a doença controlável cronicamente na maioria dos casos.
- **Leucemia linfocítica crônica (LLC):** leucemia mais comum em idosos nos países ocidentais; acúmulo de linfócitos B maduros, porém disfuncionais, no sangue, medula e linfonodos. Frequentemente assintomática, achado incidental de linfocitose no hemograma; imunofenotipagem confirma o clone B com marcadores característicos. Pode cursar com citopenias autoimunes associadas (anemia hemolítica autoimune, plaquetopenia imune) por disfunção imunológica paraneoplásica, mesmo sem infiltração medular extensa.
- ⚠️ **Pitfall:** confundir LMC com leucocitose reacional (infecção) — o desvio escalonado com basofilia e esplenomegalia marcante, associado a BCR-ABL positivo, diferencia claramente de reação leucemoide infecciosa.

## 🔹 Linfoma de Hodgkin

- **Epidemiologia:** distribuição bimodal — pico em adultos jovens (20-30 anos) e segundo pico em idosos; associação com infecção prévia por vírus Epstein-Barr em parte dos casos.
- **Quadro clínico:** linfadenopatia **indolor**, de crescimento lento, classicamente cervical/supraclavicular, com **disseminação contígua e previsível** entre cadeias linfonodais adjacentes (diferente do padrão mais aleatório do linfoma não-Hodghin); sintomas B (febre, sudorese noturna profusa, perda de peso >10% em 6 meses) definem pior prognóstico e mudam o estadiamento.
- **Diagnóstico:** biópsia excisional de linfonodo (não apenas punção aspirativa) para identificação da célula de Reed-Sternberg em meio ao infiltrado inflamatório reacional característico.
- **Tratamento:** altamente curável mesmo em estágios avançados — quimioterapia combinada (esquema clássico com doxorrubicina, bleomicina, vinblastina, dacarbazina) com ou sem radioterapia complementar conforme estádio e resposta.

## 🔹 Linfoma não-Hodgkin difuso de grandes células B (incluindo relacionado ao HIV)

- **Comportamento:** agressivo (crescimento rápido), mas com **potencial de cura** com esquema de quimioimunoterapia combinada (rituximabe associado a poliquimioterapia).
- **Relação com HIV:** doença definidora de AIDS — a imunossupressão (CD4 baixo) favorece tanto maior incidência quanto **maior frequência de acometimento extranodal** (trato gastrointestinal, medula óssea, sistema nervoso central) em comparação com a população geral, o que muda diretamente a investigação de estadiamento obrigatória.
- **Estadiamento (classificação de Lugano, atualização moderna do sistema Ann Arbor):** exige avaliação sistemática de todos os sítios potencialmente envolvidos — tomografia de tórax, abdome e pelve (ou PET-TC quando disponível) para linfonodos e vísceras; **enterotomografia e endoscopia digestiva alta com biópsias** quando há suspeita de acometimento gastrointestinal (espessamento de parede gástrica/intestinal, como no caso mais complexo); **mielograma com imunofenotipagem e citometria de fluxo** (não apenas contagem morfológica) para avaliar infiltração medular com a sensibilidade necessária em paciente imunossuprimido; **punção lombar com citologia oncótica, imunofenotipagem e citometria de fluxo do líquor** e **ressonância magnética de crânio com contraste** (mais sensível que tomografia para avaliação de sistema nervoso central) são **obrigatórias** diante de linfoma relacionado ao HIV com doença extranodal extensa/múltiplos sítios, pelo maior risco de acometimento oculto de sistema nervoso central nesse contexto.
- ⚠️ **Pitfall:** usar **tomografia de crânio** em vez de **ressonância magnética com contraste** para avaliar sistema nervoso central em paciente com alto risco de acometimento — a ressonância tem sensibilidade muito superior para detectar lesões parenquimatosas/meníngeas sutis.
- ⚠️ **Pitfall:** solicitar apenas **colonoscopia** quando a suspeita clínica/radiológica aponta para acometimento de **trato gastrointestinal alto** (espessamento gástrico/de delgado) — nesse cenário, enterotomografia e endoscopia digestiva alta com biópsias são os exames dirigidos corretos, não a colonoscopia isolada.
- ⚠️ **Pitfall:** solicitar apenas **citologia oncótica** do líquor sem **imunofenotipagem/citometria de fluxo** — a citometria aumenta muito a sensibilidade para detectar infiltração linfomatosa de baixa celularidade no líquor, que a citologia convencional isolada pode não capturar.
- 📝 **Como caiu:** ENARE 2026 Q33 (MÉDIA) — paciente com linfoma difuso de grandes células B relacionado ao HIV (CD4 180), massa axilar volumosa, comprometimento retroperitoneal e de parede gástrica/ileal, exigindo reconhecimento do pacote completo de avaliação complementar obrigatória: enterotomografia + endoscopia digestiva alta com biópsias + punção lombar com citologia oncótica/imunofenotipagem/citometria de fluxo + ressonância magnética de crânio com contraste (gabarito), contra distratores que trocavam exames por versões menos sensíveis ou dirigidas ao sítio errado (colonoscopia em vez de endoscopia alta, tomografia em vez de ressonância de crânio, citologia isolada sem citometria).

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2026 Q33)** — ficou fora do corte 80/20. Ainda assim, leucemias e linfomas são tema clássico e extenso de prova de residência (hematologia, clínica médica, infectologia quando associado a HIV), com alta chance de reaparecer cobrindo outras entidades da família (leucemias agudas/crônicas, linfoma de Hodgkin) ainda não exploradas neste banco específico.

- A questão real cobrou um cenário de alta complexidade combinando duas áreas (hematologia e infectologia/HIV), testando não o reconhecimento do diagnóstico (já dado no enunciado), mas a **lógica de estadiamento completo e correto** diante de doença extranodal extensa em paciente imunossuprimido — padrão de cobrança que exige conhecer não só "quais exames existem", mas qual exame é o mais sensível/dirigido para cada sítio suspeito.

## 📚 Referências essenciais

- NCCN (National Comprehensive Cancer Network) — Guidelines for B-Cell Lymphomas e para leucemias agudas/crônicas.
- ICML (classificação de Lugano, derivada do International Conference on Malignant Lymphoma) — critérios de estadiamento e resposta em linfomas.
`;

export default content.trim();
