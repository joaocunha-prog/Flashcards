/**
 * Resumo — Alergia e Imunologia · Angioedema.
 *
 * Assunto de baixa incidência no corpus (1 questão real, cauda longa, fora
 * do corte 80/20): ENARE 2025 Q62 (angioedema adquirido por deficiência de
 * C1 esterase, sem resposta a epinefrina/anti-histamínico/corticoide,
 * respondendo a plasma fresco congelado e ácido tranexâmico). Cobre em
 * profundidade a distinção entre angioedema histaminérgico (mastocitário)
 * e angioedema bradicinérgico (hereditário e adquirido) — o eixo central
 * da questão real — e extrapola com o mesmo nível de detalhe o manejo
 * específico de cada forma, incluindo angioedema por IECA.
 */
const content = `
## 🎯 Essencial

- **O primeiro passo diante de angioedema é decidir o mecanismo: histaminérgico (mastocitário) ou bradicinérgico** — essa distinção muda completamente o tratamento, porque **angioedema bradicinérgico não responde a epinefrina, anti-histamínico ou corticoide**, os pilares do tratamento do angioedema histaminérgico/anafilaxia.
- **Ausência de urticária/prurido associada ao edema é a pista clínica mais importante para angioedema bradicinérgico** — o angioedema histaminérgico tipicamente vem acompanhado de urticária, prurido e, com frequência, outros sinais de anafilaxia (broncoespasmo, hipotensão); o bradicinérgico é indolor a pouco pruriginoso, de instalação mais lenta (minutos a horas) e pode acometer face, língua, extremidades e, sobretudo, parede intestinal (dor abdominal em cólica simulando abdome agudo).
- **Angioedema hereditário (tipos I e II) é por deficiência ou disfunção do inibidor de C1 esterase (C1-INH), autossômico dominante, com início tipicamente na infância/adolescência e história familiar positiva** — tipo I é deficiência quantitativa (C1-INH baixo), tipo II é deficiência funcional (C1-INH normal ou até alto, porém disfuncional). Existe ainda o **tipo III**, sem alteração de C1-INH, mais associado a mutação do fator XII e predominante em mulheres, muitas vezes ligado a estrogênio.
- **Angioedema adquirido por deficiência de C1 esterase** (o que caiu na questão real) ocorre tipicamente em **adultos sem história familiar**, associado a **doenças linfoproliferativas** (linfoma não Hodgkin, gamopatia monoclonal) que consomem C1-INH, ou a autoanticorpos anti-C1-INH — **C1q está tipicamente baixo na forma adquirida e normal na forma hereditária**, sendo esse o principal diferenciador laboratorial entre as duas.
- **Angioedema por inibidor da enzima conversora de angiotensina (IECA)** é a causa mais comum de angioedema bradicinérgico adquirido na prática clínica em geral — pode ocorrer a qualquer momento do uso (inclusive anos depois de iniciado), por acúmulo de bradicinina (a ECA também degrada bradicinina, além de converter angiotensina I em II); a conduta é suspender definitivamente o IECA e não reintroduzir a classe.

## 💎 Pearls

- **C4 sérico baixo é um bom exame de rastreio inicial para as formas bradicinérgicas por deficiência de C1-INH** (hereditária e adquirida) — quase sempre reduzido mesmo fora de crise, útil quando o diagnóstico específico (C1-INH quantitativo/funcional, C1q) ainda não está disponível.
- **C1q é o diferenciador-chave entre angioedema hereditário e adquirido**: normal no hereditário, **baixo no adquirido** (pelo consumo do complemento associado à doença linfoproliferativa/autoanticorpo de base) — pergunta clássica de prova quando o caso já deu C4 baixo e pede o próximo passo discriminativo.
- **Tratamento agudo específico do angioedema bradicinérgico** (hereditário ou adquirido): concentrado de C1 inibidor (purificado ou recombinante), **icatibant** (antagonista do receptor B2 da bradicinina) ou **ecalantide** (inibidor de calicreína) — quando nenhum desses está disponível, **plasma fresco congelado** é alternativa razoável (contém C1-INH, embora também forneça substrato para gerar mais bradicinina, por isso não é a primeira escolha quando há opção específica) e **ácido tranexâmico** pode ajudar como coadjuvante, sobretudo em crises leves a moderadas ou como profilaxia de curto prazo.
- **Profilaxia de crises recorrentes de angioedema hereditário**: **danazol** (andrógeno atenuado, estimula síntese hepática de C1-INH) foi historicamente a base da profilaxia de longo prazo, hoje cada vez mais substituído por concentrado de C1-INH profilático ou inibidores de calicreína de uso subcutâneo/oral mais modernos, com melhor perfil de efeitos adversos.
- **Gatilhos clássicos de crise em angioedema hereditário:** trauma (inclusive procedimento odontológico/manipulação de via aérea), estresse, infecção, e principalmente **estrogênio** (uso de anticoncepcional combinado ou gravidez pode desencadear ou agravar crises) — anamnese deve sempre perguntar sobre uso de estrogênio exógeno.
- Dor abdominal em cólica recorrente e inexplicada, às vezes levando a laparotomias exploradoras negativas, é apresentação clássica (e subdiagnosticada) de crise de angioedema bradicinérgico envolvendo parede intestinal — lembrar desse diagnóstico diferencial em "abdome agudo" de causa não esclarecida com história de episódios recorrentes de edema de face/extremidades.
- Edema laríngeo é a manifestação mais temida de qualquer forma de angioedema (histaminérgico ou bradicinérgico) pelo risco de obstrução de via aérea — via aérea deve ser avaliada e protegida precocemente, independentemente do mecanismo subjacente já estar definido ou não.

## ⚠️ Pitfalls

- Tratar angioedema bradicinérgico com o protocolo padrão de anafilaxia (epinefrina, anti-histamínico, corticoide) e considerar "refratário" quando na verdade o mecanismo nunca foi histaminérgico — a ausência completa de resposta a essas medidas após dose adequada é justamente a pista para trocar a hipótese diagnóstica, não para repetir/aumentar a mesma classe de tratamento.
- Assumir hereditariedade obrigatória diante de angioedema recorrente em adulto sem história familiar — a forma adquirida existe e deve ser investigada, sobretudo em paciente mais velho no primeiro episódio, sem história familiar, e com achados sugestivos de doença linfoproliferativa de base.
- Pedir apenas C4 e parar a investigação — C4 baixo confirma que é uma forma por deficiência de C1-INH, mas não diferencia hereditária de adquirida; **C1q** é o exame que faz essa distinção.
- Manter IECA "porque o paciente está controlado do ponto de vista pressórico" após um episódio de angioedema relacionado à droga — a conduta correta é suspensão definitiva e troca de classe (ex.: para BRA, com cautela, já que há relato de reação cruzada em minoria dos casos, mas o risco é bem menor que manter o IECA).
- Confundir angioedema com urticária isolada — urticária é superficial (derme), pruriginosa, fugaz, com lesões bem demarcadas; angioedema é mais profundo (derme profunda/subcutâneo/submucosa), menos pruriginoso, de resolução mais lenta, e frequentemente acomete face, lábios, língua e extremidades.
- Esperar confirmação laboratorial completa (C1-INH quantitativo/funcional, C1q) antes de tratar a crise aguda com risco de via aérea — o tratamento de emergência deve ser guiado pela clínica e história, com a investigação laboratorial completa vindo em seguida para definir profilaxia e diagnóstico definitivo.

## 🩺 Quadro clínico

- **Angioedema histaminérgico:** edema de instalação mais rápida, frequentemente com urticária associada, prurido, podendo evoluir com sinais sistêmicos de anafilaxia (broncoespasmo, hipotensão, taquicardia) — geralmente há gatilho identificável (alimento, medicamento, picada de inseto, látex).
- **Angioedema bradicinérgico (hereditário ou adquirido):** edema assimétrico, sem urticária, sem prurido relevante, de instalação mais lenta (minutos a poucas horas), acometendo face, lábios, língua, extremidades e podendo causar dor abdominal em cólica por edema de parede intestinal; história de episódios recorrentes desde a infância favorece hereditário, início tardio sem história familiar favorece adquirido.
- **Angioedema por IECA:** predomínio de face, lábios e língua; pode ocorrer mesmo após anos de uso estável da medicação; ausência de urticária, igual ao padrão bradicinérgico em geral.

## 🔎 Diagnóstico

- **Investigação laboratorial dirigida por mecanismo suspeito:** triptase sérica (elevada em processos mastocitários/anafilaxia), C4 sérico (baixo nas formas por deficiência de C1-INH), C1-INH quantitativo e funcional, **C1q** (normal no hereditário, baixo no adquirido).
- Diante de suspeita de forma adquirida, investigar doença de base: eletroforese de proteínas/imunofixação (gamopatia monoclonal), investigação de doença linfoproliferativa, pesquisa de autoanticorpo anti-C1-INH quando disponível.
- História familiar detalhada (três gerações, se possível) e cronologia de início dos sintomas em relação à puberdade/uso de estrogênio são fundamentais para diferenciar hereditário de adquirido antes mesmo dos exames complementares.

## 💊 Tratamento

- **Crise aguda com risco de via aérea, independentemente do mecanismo:** avaliação e proteção precoce de via aérea é prioridade absoluta.
- **Angioedema histaminérgico/anafilaxia:** epinefrina intramuscular como primeira linha, associada a anti-histamínico e corticoide sistêmico.
- **Angioedema bradicinérgico (hereditário ou adquirido) em crise aguda:** concentrado de C1 inibidor, icatibant ou ecalantide como primeira escolha quando disponíveis; plasma fresco congelado e ácido tranexâmico como alternativas quando as terapias específicas não estão disponíveis (como no caso do corpus).
- **Angioedema adquirido:** tratamento da doença de base (linfoma, gamopatia) costuma melhorar/resolver o angioedema; terapias específicas de crise seguem o mesmo racional da forma hereditária.
- **Angioedema por IECA:** suspensão definitiva da droga; suporte de via aérea em crise grave; terapias específicas bradicinérgicas têm evidência mais limitada nessa forma especificamente, mas podem ser consideradas em crise grave.
- **Profilaxia de longo prazo (formas hereditária/adquirida recorrentes):** danazol, concentrado de C1-INH profilático, ou inibidores de calicreína modernos, conforme frequência e gravidade das crises.

## 📝 Como a banca cobra

**"Angioedema" é um assunto de baixa incidência neste banco — apenas 1 questão real no corpus completo**: ENARE 2025 Q62 (DIFÍCIL), caso de mulher de 48 anos com primeiro episódio de angioedema de lábios/língua sem urticária, sem resposta a epinefrina/anti-histamínico/corticoide, respondendo a plasma fresco congelado e ácido tranexâmico — resposta correta: **angioedema adquirido**, contra distratores que incluem angioedema hereditário (afastado pela ausência de história familiar e início tardio) e causas alérgicas clássicas (afastadas pela ausência de urticária e de resposta ao tratamento antialérgico padrão).

Mesmo com baixa representação no corpus, angioedema é tema de **alto rendimento em provas de residência** justamente por testar um raciocínio de mecanismo fisiopatológico bem definido e discriminativo (histaminérgico vs. bradicinérgico), com implicação terapêutica direta e frequentemente contraintuitiva (a conduta padrão de anafilaxia não funciona na forma bradicinérgica) — um padrão de pergunta de alto valor discriminativo que tende a se repetir, inclusive testando angioedema por IECA ou a forma hereditária como resposta principal em vez de distrator.

## 📚 Referências essenciais

- WAO/EAACI Guideline for the Management of Hereditary Angioedema.
- International Consensus Algorithm for the Diagnosis, Therapy and Management of Hereditary Angioedema (diretriz de sociedade especializada em alergia e imunologia, para as formas bradicinérgicas).
`;

export default content.trim();
