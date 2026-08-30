/**
 * Resumo — Infectologia · Infecções relacionadas à assistência.
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

- A **higiene das mãos** é a medida isolada mais eficaz de prevenção de infecção relacionada à assistência — os **"5 momentos" da OMS** (antes de tocar o paciente, antes de procedimento asséptico, após risco de exposição a fluido corporal, após tocar o paciente, após tocar superfícies próximas ao paciente) estruturam quando higienizar, com preferência por **álcool gel** exceto quando há sujidade visível ou suspeita de C. difficile (esporos resistem ao álcool — lavar com água e sabão).
- **Colite por Clostridioides difficile:** diagnóstico ideal combina **teste de amplificação de ácido nucleico (PCR/NAAT)** com detecção de toxina (EIA) ou antígeno GDH — NAAT isolado pode detectar apenas colonização, não necessariamente doença ativa; testar somente fezes diarreicas, nunca em paciente assintomático.
- Tratamento de primeira linha do C. difficile: **vancomicina oral ou fidaxomicina** — metronidazol não é mais primeira escolha (reservado a indisponibilidade dos agentes preferenciais ou doença leve em contexto de recurso limitado).
- C. difficile **recorrente/refratário:** considerar fidaxomicina, vancomicina em esquema de pulso/redução gradual, ou **transplante de microbiota fecal** em recorrências múltiplas. A gravidade do episódio (não complicada, grave, fulminante) também muda a conduta: quadro **fulminante** (íleo, megacólon tóxico, choque) exige vancomicina oral em dose alta associada a metronidazol IV, com avaliação cirúrgica precoce (colectomia) se não houver resposta.
- **Bacteremia por Staphylococcus aureus associada a cateter:** exige **remoção do cateter**, hemoculturas de controle para confirmar clareamento, investigação de foco secundário (ecocardiograma para excluir endocardite, pela alta virulência do S. aureus) e duração do tratamento definida conforme complicação (bacteremia não complicada vs. complicada/endocardite).
- As demais infecções relacionadas à assistência que completam o mesmo assunto: **ITU associada a cateter vesical (CAUTI)**, evitável sobretudo por indicação criteriosa e remoção precoce da sonda; **pneumonia associada à ventilação mecânica (PAV)**, prevenida por elevação da cabeceira, interrupção diária da sedação e higiene oral; e **infecção de sítio cirúrgico (ISC)**, prevenida por antibioticoprofilaxia no momento correto, tricotomia adequada (quando indicada) e normotermia perioperatória.
- **Infecção de corrente sanguínea associada a cateter (CLABSI)** é distinta de bacteremia relacionada a cateter em geral: usa definição de vigilância padronizada (NHSN) baseada em hemocultura positiva sem outro foco identificado em paciente com cateter central há mais de 2 dias; prevenida pelo "bundle" de inserção (higiene das mãos, barreira máxima de precaução, antissepsia com clorexidina alcoólica, escolha do melhor sítio) e manutenção (curativo estéril, avaliação diária de necessidade).
- Precauções específicas por via de transmissão complementam a higiene das mãos: **contato** (MRSA, VRE, C. difficile, CRE — avental e luvas), **gotículas** (influenza, meningococo — máscara cirúrgica) e **aerossóis** (tuberculose, sarampo, varicela — máscara N95/PFF2 e quarto com pressão negativa).

## 💎 Pearls

- Álcool gel não elimina esporos de C. difficile — em suspeita ou confirmação dessa infecção, a orientação correta é **lavagem com água e sabão**, além de precaução de contato.
- Um NAAT/PCR positivo isolado para C. difficile pode representar apenas colonização assintomática — por isso algoritmos atuais recomendam confirmar com detecção de toxina antes de tratar, especialmente em diarreia leve com outra causa possível.
- Fidaxomicina tem menor taxa de recorrência que vancomicina, por ação mais poupadora da microbiota intestinal normal — vantagem relevante em paciente de alto risco de recidiva.
- Toda bacteremia por S. aureus deve ser tratada como potencialmente complicada até prova em contrário, mesmo com foco aparentemente claro (cateter) — a busca ativa por endocardite/foco metastático é obrigatória.
- Vigilância de infecção relacionada à assistência não deve ser confundida com tratamento — colonização assintomática por C. difficile ou MRSA não indica antibioticoterapia.
- Uso de luvas não substitui a higienização das mãos — as mãos devem ser higienizadas antes de calçar e imediatamente após retirar as luvas, pois a superfície da luva também se contamina e pode transmitir patógenos entre pacientes.
- Programas de **stewardship antimicrobiano** (uso racional de antibióticos, com revisão ativa de prescrições e descalonamento precoce) reduzem tanto a emergência de multirresistência quanto a incidência de colite por C. difficile — a exposição prévia a antibiótico de amplo espectro é o principal fator de risco modificável para essa infecção.
- A "regra de ouro" da CAUTI é a mesma para qualquer dispositivo invasivo: o melhor jeito de prevenir a infecção é não colocar o dispositivo sem indicação clara, e retirá-lo assim que a indicação deixar de existir — vale para sonda vesical, cateter venoso central e tubo orotraqueal.
- Organismos multirresistentes de maior relevância hospitalar hoje: **MRSA** (Staphylococcus aureus resistente à meticilina), **VRE** (Enterococcus resistente à vancomicina), **ESBL** (Enterobacteriaceae produtoras de betalactamase de espectro estendido) e, cada vez mais crítico, **CRE** (Enterobacteriaceae resistentes a carbapenêmicos) — todos exigem precaução de contato e uso racional de antimicrobianos para conter a disseminação.
- Antibioticoprofilaxia cirúrgica deve ser administrada dentro de 60 minutos antes da incisão (ou até 120 minutos para vancomicina/fluoroquinolonas, pelo tempo de infusão) e suspensa em até 24h após a cirurgia na maioria dos casos — prolongar além disso não reduz infecção e aumenta seleção de resistência.
- A duração recomendada da higienização com álcool gel é de cerca de 20-30 segundos, cobrindo toda a superfície das mãos (incluindo entre os dedos e polegares) até secar completamente — técnica incompleta reduz a eficácia mesmo com produto e frequência corretos.
- **Tempo diferencial de positivação de hemocultura (differential time to positivity)** ajuda a diagnosticar CLABSI sem remover o cateter: se a hemocultura colhida pelo cateter positiva ≥2 horas antes da colhida por veia periférica, o cateter é a fonte provável — útil quando a remoção do dispositivo é indesejável (ex.: cateter de longa permanência sem outra via de acesso).
- Infecção de sítio cirúrgico é classificada em **superficial** (pele e subcutâneo), **profunda** (fáscia/músculo) e **de órgão/cavidade** (estrutura manipulada na cirurgia, ex.: abscesso intra-abdominal após cirurgia de cólon) — a profundidade determina a conduta (drenagem simples vs. reabordagem cirúrgica).
- Glicemia perioperatória mal controlada e hipotermia intraoperatória são fatores de risco modificáveis para ISC tão importantes quanto a técnica de antibioticoprofilaxia — normoglicemia e normotermia fazem parte do mesmo pacote de prevenção.
- A escolha do antisséptico para preparo de pele antes de inserção de cateter central ou cirurgia deve preferir **clorexidina alcoólica** a povidona-iodo isolado, por ação mais rápida e efeito residual prolongado — parte do bundle de prevenção de CLABSI e ISC.

## ⚠️ Pitfalls

- Usar apenas álcool gel nas mãos ao cuidar de paciente com suspeita de C. difficile — não elimina esporos.
- Tratar como colite por C. difficile todo paciente com NAAT positivo, independentemente de toxina/quadro clínico — supertratamento de colonização.
- Prescrever metronidazol como primeira linha para C. difficile fora de cenário de indisponibilidade dos agentes preferenciais — conduta ultrapassada.
- Retirar o cateter em bacteremia por S. aureus e considerar o caso resolvido, sem investigar endocardite/foco secundário nem repetir hemoculturas de controle.
- Testar fezes formadas ("vigilância") para C. difficile em paciente assintomático — gera resultados falso-positivos por colonização e tratamento desnecessário.
- Retirar as luvas e não higienizar as mãos em seguida, assumindo que a barreira física já protegeu tanto o profissional quanto o próximo paciente.
- Adiar o ecocardiograma em bacteremia por S. aureus até "ver se a febre passa" — a investigação de endocardite deve ser precoce, pois muda diretamente a duração do tratamento.
- Iniciar antibiótico de amplo espectro sem indicação clara "por segurança" — é o principal fator de risco evitável para seleção de multirresistência e para colite por C. difficile.
- Manter sonda vesical ou cateter venoso central "por rotina" além da indicação clínica ativa — é o principal fator de risco modificável para CAUTI e CLABSI.
- Prolongar antibioticoprofilaxia cirúrgica por vários dias "para garantir" — não reduz infecção de sítio cirúrgico e favorece seleção de resistência e C. difficile.
- Tratar hiperglicemia perioperatória como problema "só do anestesista" e não do pacote de prevenção de ISC — o controle glicêmico é responsabilidade compartilhada da equipe cirúrgica.
- Usar precaução de contato genérica para todo microrganismo multirresistente sem diferenciar a via de transmissão — tuberculose e outras doenças transmitidas por aerossol exigem precaução específica (N95/PFF2), não apenas contato.

## 📝 Como a banca cobra

**Infecções relacionadas à assistência aparece em 5 questões (2,36% do corpus)** — 2 do EBSERH e 3 do ENARE, com forte concentração em colite por Clostridioides difficile (3 das 5 questões), além de prevenção geral e bacteremia relacionada a cateter.

- **Higiene das mãos** (EBSERH 2025 Q51) cobra os fundamentos de prevenção — momentos corretos e escolha entre álcool gel e água e sabão.
- **Colite por C. difficile** apareceu 3 vezes: teste molecular/algoritmo diagnóstico (EBSERH 2026 Q40), forma recorrente/refratária (ENARE 2025 Q16) e apresentação inicial típica (ENARE 2026 Q68) — vale dominar o algoritmo diagnóstico completo e a escada terapêutica (inicial → recorrente).
- **Bacteremia por S. aureus relacionada a cateter** (ENARE 2025 Q29) testa a conduta completa: remoção do dispositivo + investigação de foco secundário.

## 🧠 Conceito e fisiopatologia

A transmissão cruzada de patógenos hospitalares ocorre predominantemente pelas mãos da equipe assistencial — por isso a higienização nos momentos certos interrompe a cadeia de transmissão antes mesmo de qualquer outra barreira (luvas, isolamento). Álcool gel é eficaz contra a maioria das formas vegetativas bacterianas e vírus envelopados, mas **não** contra esporos, forma de resistência ambiental do C. difficile — daí a exigência de água e sabão nesse cenário específico.

C. difficile causa colite por produção de **toxinas A e B**, que danificam o citoesqueleto de actina das células epiteliais do cólon, gerando inflamação, perda da barreira epitelial e, em casos graves, pseudomembranas. O uso prévio de antibióticos de amplo espectro rompe a microbiota protetora do cólon, permitindo a proliferação da bactéria (endógena ou adquirida) e a expressão de sua toxina.

Bacteremia relacionada a cateter ocorre por colonização do biofilme na superfície do dispositivo — S. aureus é particularmente virulento e tem tropismo por endocárdio e material protético, justificando a investigação sistemática de disseminação hematogênica.

Todo dispositivo invasivo (cateter urinário, cateter venoso central, tubo endotraqueal) rompe barreiras naturais de defesa e forma biofilme, criando um nicho protegido de antibióticos e de resposta imune — por isso o tempo de permanência do dispositivo é o principal determinante de risco em CAUTI, CLABSI e PAV, e a estratégia mais custo-efetiva de prevenção é sempre reavaliar diariamente a necessidade de mantê-lo.

O uso prévio de antibiótico de amplo espectro é o elo comum entre colite por C. difficile e a seleção de microrganismos multirresistentes (MRSA, VRE, ESBL, CRE): ao suprimir a flora comensal sensível, o antibiótico abre espaço ecológico para a proliferação de organismos resistentes ou toxigênicos que já colonizavam o trato gastrointestinal em baixa quantidade — por isso o uso racional de antimicrobianos (stewardship) é, ao mesmo tempo, medida de prevenção de infecção relacionada à assistência e de contenção de resistência bacteriana.

## 🩺 Quadro clínico

- **Colite por C. difficile:** espectro de diarreia aquosa leve (3 ou mais evacuações não formadas em 24h) até colite grave com dor abdominal, febre, leucocitose importante e, no extremo, **colite fulminante** com íleo, distensão abdominal (podendo mascarar a diarreia por parada do trânsito), megacólon tóxico e choque.
- **Bacteremia por S. aureus relacionada a cateter:** febre, calafrios, eritema/secreção purulenta no sítio de inserção do cateter (nem sempre presente); sinais de embolização séptica (lesões cutâneas, dor óssea/articular) sugerem foco metastático.
- **CAUTI:** febre, dor suprapúbica ou em flanco, alteração do estado mental em idoso (pode ser a única manifestação), urina turva/com odor fétido — sintomas atribuíveis à ITU são necessários para o diagnóstico, não a bacteriúria isolada.
- **PAV:** febre nova, secreção traqueal purulenta, piora da oxigenação e infiltrado radiológico novo em paciente ventilado há mais de 48 horas.
- **ISC:** eritema, calor, dor e secreção purulenta na incisão, geralmente entre o 5º e o 10º dia pós-operatório; febre e toxemia sistêmica quando há componente profundo ou de órgão/cavidade.
- **CLABSI:** febre e calafrios sem outro foco evidente em paciente com cateter central, podendo haver hipotensão/sepse nos casos mais graves; sinais inflamatórios no sítio de inserção são pouco sensíveis e frequentemente ausentes.
- **Colonização/infecção por organismo multirresistente (MRSA, VRE, CRE):** a maioria dos portadores é assintomática (colonização de pele, nasofaringe ou trato gastrointestinal) — a infecção clínica só se manifesta quando o organismo invade um sítio normalmente estéril (corrente sanguínea, trato urinário, sítio cirúrgico).
- **Endocardite associada a cateter (complicação da bacteremia por S. aureus):** sopro novo, fenômenos embólicos (petéquias, hemorragias em estilhaço, lesões de Janeway), febre persistente apesar de antibioticoterapia dirigida e cateter removido.

## 🔎 Diagnóstico

- **C. difficile:** algoritmo de dois passos — GDH antigen ou NAAT como triagem de alta sensibilidade, seguido de EIA de toxina para confirmar doença ativa em amostra positiva na triagem; testar só fezes não formadas.
- **Bacteremia por S. aureus:** hemoculturas seriadas até negativação, ecocardiograma (transtorácico e, se dúvida, transesofágico) para excluir endocardite, avaliação de foco metastático (óssea, articular, abscessos).
- **CAUTI:** definida por sintomas atribuíveis à ITU associados a cultura de urina positiva em paciente com cateter vesical presente ou removido há até 48h — bacteriúria assintomática em paciente sondado não deve ser tratada.
- **PAV:** critérios clínicos (febre, secreção purulenta, infiltrado radiológico novo) associados a piora da oxigenação em paciente ventilado há mais de 48h; cultura quantitativa de secreção respiratória orienta o agente.
- **CLABSI:** hemocultura periférica e pelo cateter simultâneas — diferencial de tempo de positivação ≥2h a favor do cateter, ou contagem de colônias ≥3x maior na amostra do cateter, sustentam o cateter como fonte sem necessidade de removê-lo para confirmar.
- **ISC:** clínico (eritema, secreção, deiscência), cultura da secreção quando há indicação de troca de antibiótico empírico; imagem (TC/US) para suspeita de coleção profunda ou de órgão/cavidade.

## 💊 Tratamento

- **C. difficile inicial:** vancomicina oral ou fidaxomicina.
- **C. difficile recorrente:** fidaxomicina, vancomicina em esquema prolongado/pulsado, ou transplante de microbiota fecal em recorrências múltiplas.
- **C. difficile fulminante:** vancomicina oral em dose alta + metronidazol IV, avaliação cirúrgica precoce (colectomia) se não houver resposta ou houver sinais de abdome cirúrgico.
- **Bacteremia por S. aureus relacionada a cateter:** remoção do cateter, antibioticoterapia dirigida (oxacilina/cefazolina se sensível à meticilina, vancomicina se MRSA), duração conforme complicação (mínimo 2 semanas se não complicada e sem fatores de risco; 4-6 semanas se complicada/endocardite).
- **Prevenção geral:** higienização das mãos nos 5 momentos, precauções de contato para C. difficile/MRSA/VRE/CRE, pacotes de prevenção (bundles) para inserção e manutenção de cateter venoso e vesical, elevação da cabeceira e interrupção diária de sedação para reduzir PAV.
- **CLABSI confirmada:** remoção do cateter na maioria dos casos (obrigatória se S. aureus, fungo, ou sinais de sepse grave/êmbolos sépticos); em cateteres de longa permanência sem alternativa de acesso, terapia de "lock" antibiótico associada a antibioticoterapia sistêmica pode ser tentada em organismos menos virulentos.
- **ISC:** drenagem/desbridamento da coleção é o pilar terapêutico quando há abscesso ou deiscência purulenta — antibioticoterapia isolada, sem drenagem, tende a falhar em infecção com coleção estabelecida.
- **CAUTI:** antibioticoterapia dirigida por cultura apenas em paciente sintomático; remoção ou troca do cateter vesical sempre que possível como parte do tratamento.
- **Colonização assintomática por organismo multirresistente:** não trata — apenas precaução de contato e, quando indicado pelo protocolo institucional, descolonização (ex.: mupirocina nasal e clorexidina para MRSA em preparo pré-operatório de cirurgias de alto risco).

## 📚 Referências essenciais

- Segurança do Paciente em Serviços de Saúde: Higiene das Mãos — Ministério da Saúde/ANVISA (2ª edição), adota os "5 momentos" da OMS na prática brasileira.
- Medidas de Prevenção de Infecção Relacionada à Assistência à Saúde — ANVISA (Segurança do Paciente).
- IDSA/SHEA Clinical Practice Guidelines for Clostridioides difficile Infection (sem PCDT brasileiro equivalente para este tratamento específico).
- IDSA Clinical Practice Guidelines for the Management of Intravascular Catheter-Related Infection (sem PCDT brasileiro equivalente).
- CDC/NHSN — Surveillance Definitions for Specific Types of Infections (CLABSI, CAUTI, PAV, ISC).
`;

export default content.trim();
