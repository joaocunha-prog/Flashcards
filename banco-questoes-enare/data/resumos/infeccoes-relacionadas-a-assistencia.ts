/**
 * Resumo — Infectologia · Infecções relacionadas à assistência.
 *
 * Reorganizado por entidade clínica (cada infecção/dispositivo tem sua
 * própria seção com quando suspeitar, diagnóstico, tratamento, pearl e
 * pitfall juntos) — antes esse conteúdo estava picado entre seções
 * genéricas de tipo, misturando C. difficile, bacteremia por cateter e
 * CLABSI no mesmo bloco de "Diagnóstico" ou "Tratamento". Os princípios
 * gerais de prevenção (higiene das mãos, stewardship, precauções por via
 * de transmissão) não são entidades — ficam no Essencial/Conceito, como no
 * padrão do resumo de hiv-aids.
 *
 * Cobre as entidades do assunto no corpus: prevenção de infecção
 * hospitalar (higiene das mãos), colite por Clostridioides difficile
 * (teste molecular, apresentação inicial e forma recorrente/refratária)
 * e bacteremia por Staphylococcus aureus relacionada a cateter. Também
 * traz, como extrapolação de alto rendimento além do que já caiu em
 * prova, os demais grandes tipos de infecção relacionada à assistência à
 * saúde (CLABSI, CAUTI, PAV, infecção de sítio cirúrgico), microrganismos
 * multirresistentes, precauções por via de transmissão e stewardship
 * antimicrobiano, que compõem o mesmo assunto de forma mais ampla.
 */
const content = `
## 🎯 Essencial

- A **higiene das mãos** é a medida isolada mais eficaz de prevenção — os **"5 momentos" da OMS** estruturam quando higienizar, com preferência por **álcool gel** exceto quando há sujidade visível ou suspeita de *C. difficile* (esporos resistem ao álcool — lavar com água e sabão). Uso de luvas **não substitui** a higienização: mãos devem ser higienizadas antes de calçar e imediatamente após retirar.
- Todo dispositivo invasivo (cateter urinário, cateter venoso central, tubo orotraqueal) rompe barreiras naturais e forma biofilme — o tempo de permanência é o principal determinante de risco em CAUTI, CLABSI e PAV; a estratégia mais custo-efetiva de prevenção é sempre reavaliar diariamente a necessidade de mantê-lo.
- O uso prévio de **antibiótico de amplo espectro** é o elo comum entre colite por *C. difficile* e a seleção de microrganismos multirresistentes (MRSA, VRE, ESBL, CRE) — programas de **stewardship antimicrobiano** (descalonamento precoce, revisão ativa de prescrições) reduzem os dois problemas ao mesmo tempo.
- Precauções por via de transmissão complementam a higiene das mãos: **contato** (MRSA, VRE, *C. difficile*, CRE — avental e luvas), **gotículas** (influenza, meningococo — máscara cirúrgica) e **aerossóis** (tuberculose, sarampo, varicela — máscara N95/PFF2 e quarto com pressão negativa) — usar precaução de contato genérica para todo multirresistente, sem diferenciar a via, é erro comum.

## 📝 Como a banca cobra

**Infecções relacionadas à assistência aparece em 5 questões (2,36% do corpus)** — 2 do EBSERH e 3 do ENARE, com forte concentração em colite por *Clostridioides difficile* (3 das 5 questões), além de prevenção geral e bacteremia relacionada a cateter.

- **Higiene das mãos** (EBSERH 2025 Q51) cobra os fundamentos de prevenção — momentos corretos e escolha entre álcool gel e água e sabão.
- **Colite por C. difficile** apareceu 3 vezes: teste molecular/algoritmo diagnóstico (EBSERH 2026 Q40), forma recorrente/refratária (ENARE 2025 Q16) e apresentação inicial típica (ENARE 2026 Q68) — vale dominar o algoritmo diagnóstico completo e a escada terapêutica (inicial → recorrente).
- **Bacteremia por S. aureus relacionada a cateter** (ENARE 2025 Q29) testa a conduta completa: remoção do dispositivo + investigação de foco secundário.
- **CAUTI, PAV, CLABSI e infecção de sítio cirúrgico ainda não foram cobradas isoladamente** — completam o mesmo assunto de dispositivo invasivo e são candidatas naturais de alto rendimento.

## 🧠 Conceito e fisiopatologia

A transmissão cruzada de patógenos hospitalares ocorre predominantemente pelas mãos da equipe assistencial — por isso a higienização nos momentos certos interrompe a cadeia de transmissão antes mesmo de qualquer outra barreira. *C. difficile* causa colite por produção de **toxinas A e B**, que danificam o citoesqueleto de actina das células epiteliais do cólon; o uso prévio de antibióticos de amplo espectro rompe a microbiota protetora do cólon, permitindo a proliferação da bactéria e a expressão de sua toxina. Bacteremia relacionada a cateter ocorre por colonização do **biofilme** na superfície do dispositivo — *S. aureus* é particularmente virulento e tem tropismo por endocárdio e material protético, justificando investigação sistemática de disseminação hematogênica.

## 🔹 Colite por Clostridioides difficile

- **Quando suspeitar:** espectro de diarreia aquosa leve (3 ou mais evacuações não formadas em 24h) até colite grave com dor abdominal, febre e leucocitose importante; no extremo, **colite fulminante** com íleo, distensão abdominal (podendo mascarar a diarreia por parada do trânsito), megacólon tóxico e choque.
- **Diagnóstico:** algoritmo de dois passos — GDH antigen ou NAAT/PCR como triagem de alta sensibilidade, seguido de **EIA de toxina** para confirmar doença ativa em amostra positiva na triagem (NAAT isolado pode detectar apenas colonização, não doença ativa); testar **só fezes diarreicas**, nunca em paciente assintomático.
- **Tratamento inicial:** **vancomicina oral ou fidaxomicina** — metronidazol não é mais primeira escolha. Fidaxomicina tem menor taxa de recorrência que vancomicina, por ação mais poupadora da microbiota normal.
- **Recorrente/refratário:** fidaxomicina, vancomicina em esquema de pulso/redução gradual, ou **transplante de microbiota fecal** em recorrências múltiplas.
- **Fulminante:** vancomicina oral em dose alta + metronidazol IV, avaliação cirúrgica precoce (colectomia) se não houver resposta.
- **Prevenção:** álcool gel **não** elimina esporos — lavagem com água e sabão + precaução de contato.
- ⚠️ **Pitfall:** tratar como colite todo paciente com NAAT positivo isolado, sem confirmar toxina — supertratamento de colonização.
- 📝 **Como caiu:** EBSERH 2026 Q40 (teste molecular) · ENARE 2025 Q16 (recorrente/refratária) · ENARE 2026 Q68 (apresentação inicial).

## 🔹 Bacteremia por Staphylococcus aureus relacionada a cateter

- **Quando suspeitar:** febre, calafrios, eritema/secreção purulenta no sítio de inserção do cateter (nem sempre presente); sinais de embolização séptica (lesões cutâneas, dor óssea/articular) sugerem foco metastático.
- **Conduta:** **remoção do cateter**, hemoculturas de controle para confirmar clareamento, e investigação sistemática de foco secundário — **ecocardiograma para excluir endocardite** é obrigatório, mesmo com foco aparentemente claro (cateter), pela alta virulência do *S. aureus*.
- **Tratamento:** oxacilina/cefazolina se sensível à meticilina, vancomicina se MRSA; duração conforme complicação — mínimo 2 semanas se não complicada e sem fatores de risco, **4-6 semanas se complicada/endocardite**.
- ⚠️ **Pitfall:** retirar o cateter e considerar o caso resolvido, sem investigar endocardite/foco secundário nem repetir hemoculturas de controle; adiar o ecocardiograma "para ver se a febre passa".
- 📝 **Como caiu:** ENARE 2025 Q29.

## 🔹 Infecção de corrente sanguínea associada a cateter (CLABSI)

- **Quando suspeitar:** febre e calafrios sem outro foco evidente em paciente com cateter central há mais de 2 dias, podendo haver hipotensão/sepse nos casos mais graves; sinais inflamatórios no sítio de inserção são pouco sensíveis e frequentemente ausentes.
- **Diagnóstico:** hemocultura periférica e pelo cateter simultâneas — **tempo diferencial de positivação** (a hemocultura colhida pelo cateter positiva ≥2h antes da periférica) ou contagem de colônias ≥3x maior na amostra do cateter sustentam o cateter como fonte **sem necessidade de removê-lo** para confirmar — útil quando a remoção é indesejável (cateter de longa permanência sem outra via de acesso).
- **Prevenção:** "bundle" de inserção (higiene das mãos, barreira máxima de precaução, antissepsia com **clorexidina alcoólica** — preferida a povidona-iodo isolado, por ação mais rápida e efeito residual prolongado) e manutenção (curativo estéril, avaliação diária de necessidade).
- **Tratamento:** remoção do cateter na maioria dos casos (obrigatória se *S. aureus*, fungo, ou sinais de sepse grave/êmbolos sépticos); em cateteres de longa permanência sem alternativa de acesso, terapia de "lock" antibiótico associada a antibioticoterapia sistêmica pode ser tentada em organismos menos virulentos.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Infecção do trato urinário associada a cateter (CAUTI)

- **Quando suspeitar:** febre, dor suprapúbica ou em flanco, alteração do estado mental em idoso (pode ser a única manifestação), urina turva/com odor fétido — **sintomas** atribuíveis à ITU são necessários para o diagnóstico, não a bacteriúria isolada.
- **Diagnóstico:** definida por sintomas atribuíveis à ITU associados a cultura de urina positiva em paciente com cateter vesical presente ou removido há até 48h; **bacteriúria assintomática em paciente sondado não deve ser tratada**.
- **Prevenção:** a "regra de ouro" é a mesma de qualquer dispositivo invasivo — não colocar sem indicação clara, e retirar assim que a indicação deixar de existir.
- **Tratamento:** antibioticoterapia dirigida por cultura apenas em paciente sintomático; remoção ou troca do cateter vesical sempre que possível.
- ⚠️ **Pitfall:** manter sonda vesical "por rotina" além da indicação clínica ativa — principal fator de risco modificável para CAUTI.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Pneumonia associada à ventilação mecânica (PAV)

- **Quando suspeitar:** febre nova, secreção traqueal purulenta, piora da oxigenação e infiltrado radiológico novo em paciente ventilado há mais de 48 horas.
- **Diagnóstico:** critérios clínicos associados a piora da oxigenação; cultura quantitativa de secreção respiratória orienta o agente.
- **Prevenção:** elevação da cabeceira, interrupção diária da sedação e higiene oral.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Infecção de sítio cirúrgico (ISC)

- **Quando suspeitar:** eritema, calor, dor e secreção purulenta na incisão, geralmente entre o 5º e o 10º dia pós-operatório; febre e toxemia sistêmica quando há componente profundo ou de órgão/cavidade.
- **Classificação:** **superficial** (pele e subcutâneo), **profunda** (fáscia/músculo) e **de órgão/cavidade** (estrutura manipulada na cirurgia, ex.: abscesso intra-abdominal após cirurgia de cólon) — a profundidade determina a conduta.
- **Prevenção:** antibioticoprofilaxia administrada dentro de **60 minutos antes da incisão** (até 120 minutos para vancomicina/fluoroquinolonas, pelo tempo de infusão) e suspensa em até 24h após a cirurgia na maioria dos casos — prolongar não reduz infecção e favorece resistência. Normoglicemia e normotermia perioperatórias são fatores modificáveis tão importantes quanto a antibioticoprofilaxia.
- **Tratamento:** drenagem/desbridamento da coleção é o pilar quando há abscesso ou deiscência purulenta — antibioticoterapia isolada, sem drenagem, tende a falhar.
- ⚠️ **Pitfall:** prolongar antibioticoprofilaxia por vários dias "para garantir" — não reduz ISC e favorece seleção de resistência e *C. difficile*.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Microrganismos multirresistentes

- **Panorama:** **MRSA** (*S. aureus* resistente à meticilina), **VRE** (*Enterococcus* resistente à vancomicina), **ESBL** (Enterobacteriaceae produtoras de betalactamase de espectro estendido) e, cada vez mais crítico, **CRE** (Enterobacteriaceae resistentes a carbapenêmicos).
- **Quadro:** a maioria dos portadores é **assintomática** (colonização de pele, nasofaringe ou trato gastrointestinal) — a infecção clínica só se manifesta quando o organismo invade um sítio normalmente estéril.
- **Conduta:** colonização assintomática **não trata** — apenas precaução de contato e, quando indicado pelo protocolo institucional, descolonização (ex.: mupirocina nasal e clorexidina para MRSA em preparo pré-operatório de cirurgias de alto risco).
- ⚠️ **Pitfall:** vigilância não é tratamento — colonização assintomática por *C. difficile* ou MRSA não indica antibioticoterapia.
- 📝 **Como caiu:** ainda não cobrado no corpus como entidade isolada.

## 📚 Referências essenciais

- Segurança do Paciente em Serviços de Saúde: Higiene das Mãos — Ministério da Saúde/ANVISA (2ª edição), adota os "5 momentos" da OMS na prática brasileira.
- Medidas de Prevenção de Infecção Relacionada à Assistência à Saúde — ANVISA (Segurança do Paciente).
- IDSA/SHEA Clinical Practice Guidelines for Clostridioides difficile Infection (sem PCDT brasileiro equivalente para este tratamento específico).
- IDSA Clinical Practice Guidelines for the Management of Intravascular Catheter-Related Infection (sem PCDT brasileiro equivalente).
- CDC/NHSN — Surveillance Definitions for Specific Types of Infections (CLABSI, CAUTI, PAV, ISC).
`;

export default content.trim();
