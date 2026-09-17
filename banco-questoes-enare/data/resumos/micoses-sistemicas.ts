/**
 * Resumo — Infectologia · Micoses sistêmicas.
 *
 * Assunto de baixa incidência no corpus (1 questão real, cauda longa, fora
 * do corte 80/20): ENARE 2025 Q17 (aspergilose pulmonar invasiva em
 * paciente neutropênico grave e prolongado). Como "micoses sistêmicas"
 * reúne doenças fúngicas distintas por agente e hospedeiro de risco (como
 * em vasculites.ts), o resumo é organizado por entidade clínica,
 * aprofundando a aspergilose invasiva (a entidade realmente cobrada) e
 * extrapolando as demais micoses sistêmicas mais clássicas de prova de
 * residência no Brasil (mucormicose, histoplasmose, paracoccidioidomicose,
 * candidíase invasiva).
 */
const content = `
## 🎯 Essencial

- **Neutropenia grave e prolongada (geralmente >10 dias) é o principal fator de risco para micose invasiva** — aspergilose e mucormicose são as mais temidas nesse cenário, e febre persistente apesar de antibioticoterapia de amplo espectro em neutropênico deve sempre acionar a suspeita de infecção fúngica invasiva.
- **Galactomanana sérica seriada é o exame de maior utilidade prática na aspergilose invasiva em neutropênico** — mais do que um único valor isolado, a tendência de elevação ao longo do tempo ajuda a decisão de terapia antifúngica empírica/antecipada, já que a confirmação histológica muitas vezes é inviável (paciente instável, plaquetopenia).
- **Cultura de Aspergillus tem sensibilidade baixa em quadros invasivos agudos** — o fungo não costuma ser recuperado com facilidade em amostras respiratórias mesmo em doença confirmada; não se deve esperar a cultura para iniciar tratamento diante de forte suspeita clínico-radiológica e galactomanana compatível.
- **Mucormicose progride mais rápido e é mais agressiva que a aspergilose**, com predileção por invasão angioinvasiva direta de vasos — cetoacidose diabética e neutropenia grave são os dois fatores de risco clássicos mais cobrados; diferenciar dos dois é essencial porque o tratamento antifúngico de escolha é diferente (voriconazol não cobre mucorales).
- **Histoplasmose e paracoccidioidomicose são as micoses endêmicas sistêmicas mais relevantes no Brasil** — quadro pulmonar crônico com padrão radiológico que pode simular tuberculose é a armadilha clássica de prova para ambas.

## 🔹 Aspergilose pulmonar invasiva

- **Hospedeiro de risco:** neutropenia grave e prolongada (leucemia aguda, transplante de células-tronco hematopoiéticas, quimioterapia intensiva), uso prolongado de corticoide em altas doses, doença pulmonar obstrutiva crônica com corticoide inalatório/sistêmico crônico.
- **Quadro clínico:** febre refratária a antibiótico de amplo espectro, dor torácica pleurítica, tosse, hemoptise, dispneia — em paciente já em neutropenia prolongada e piora progressiva apesar de cobertura antibacteriana adequada.
- **Achados de imagem:** tomografia de tórax com nódulos (por vezes com **sinal do halo** — halo de vidro fosco ao redor do nódulo, mais precoce), consolidações, cavitação e **sinal do crescente aéreo** (mais tardio, associado à recuperação da neutropenia); no caso descrito no corpus, múltiplos nódulos cavitados e infiltrado em "árvore em brotamento" reforçam invasão de via aérea associada.
- **Diagnóstico:** **galactomanana sérica seriada** (imunoensaio) é a ferramenta mais prática à beira-leito — sensibilidade e especificidade moderadas isoladamente, mas o valor está no acompanhamento de tendência ao longo de dias/semanas para orientar decisão terapêutica, já que biópsia é frequentemente inviável (risco de sangramento em plaquetopenia) e a cultura demora e tem sensibilidade baixa nos quadros agudos invasivos. Galactomanana em lavado broncoalveolar tem sensibilidade maior que a sérica quando a broncoscopia é possível.
- **Tratamento:** **voriconazol** é o antifúngico de primeira linha (isavuconazol é alternativa); anfotericina B lipossomal fica reservada a falha/intolerância ou suspeita concomitante de mucormicose (cobertura mais ampla enquanto se define o agente).
- 💎 **Pearl:** diante de neutropenia grave e prolongada com piora clínica apesar de antibiótico de amplo espectro, a decisão de iniciar antifúngico **empírico ou antecipado** (guiado por galactomanana seriada/tomografia) não deve esperar confirmação por cultura — a mortalidade sobe muito com atraso terapêutico.
- ⚠️ **Pitfall:** achar que galactomanana negativa isolada exclui aspergilose invasiva, ou que cultura negativa "fecha o caso" — ambas têm sensibilidade limitada nesse contexto; o racional correto é acompanhar a tendência seriada do biomarcador junto da evolução clínica e radiológica.
- 📝 **Como caiu:** ENARE 2025 Q17 — paciente com tumor de células germinativas, neutropenia grave e prolongada, piorando apesar de antibioticoterapia de amplo espectro, com TC de tórax sugestiva; resposta correta reconhece a **galactomanana sérica seriada** como ferramenta para decisão de terapia antifúngica empírica, contra distratores que superestimam sensibilidade da cultura ou do exame direto isolado e que indicam biópsia como único caminho possível.

## 🔹 Mucormicose

- **Hospedeiro de risco:** cetoacidose diabética (associação clássica), neutropenia grave/prolongada, uso de desferroxamina, imunossupressão importante (transplante, corticoide em alta dose).
- **Mecanismo:** fungo angioinvasivo direto (ordem Mucorales) — invasão vascular rápida com trombose e necrose tecidual, progressão muito mais agressiva que a aspergilose.
- **Quadro clínico:** forma rino-órbito-cerebral é a mais clássica (dor facial, necrose de palato/mucosa nasal com escara enegrecida, proptose, oftalmoplegia) — mas também há formas pulmonares (indistinguíveis clinicamente da aspergilose invasiva sem exame complementar) e cutâneas.
- **Diagnóstico:** biópsia com histopatologia mostrando hifas largas, não septadas (ou pouco septadas), com ramificação em ângulo reto (~90°) — diferente das hifas finas, septadas, com ramificação em ângulo agudo (~45°) do *Aspergillus*. **Galactomanana é negativa na mucormicose** (não é marcador dessa micose) — achado que ajuda a diferenciar das duas quando a clínica é ambígua.
- **Tratamento:** anfotericina B lipossomal em altas doses + **desbridamento cirúrgico extenso e precoce** é indispensável (diferente da aspergilose, em que a cirurgia é reservada a situações específicas) — isavuconazol e posaconazol são opções de manutenção/step-down. Voriconazol **não cobre mucorales** — usá-lo empiricamente sem cobertura para mucormicose em paciente de alto risco é erro grave.
- 💎 **Pearl:** a diferenciação histopatológica hifas largas não septadas em ângulo reto (mucormicose) vs. hifas finas septadas em ângulo agudo (aspergilose) é um dos achados de imagem microscópica mais cobrados em prova de micoses invasivas.
- ⚠️ **Pitfall:** tratar suspeita de infecção fúngica invasiva grave só com voriconazol sem considerar mucormicose no diferencial (especialmente em cetoacidose diabética) — a lacuna de cobertura pode ser fatal.

## 🔹 Histoplasmose

- **Epidemiologia:** endêmica em áreas com solo rico em fezes de morcegos/aves (cavernas, galinheiros); no Brasil, relevante em várias regiões, com surtos ligados a espeleologia/exposição ocupacional.
- **Quadro clínico:** maioria dos casos é assintomática/autolimitada em imunocompetentes; forma pulmonar aguda pode simular pneumonia atípica ou tuberculose; forma pulmonar crônica cavitária ocorre em pacientes com DPOC/dano estrutural pulmonar prévio; **forma disseminada progressiva** ocorre em imunossuprimidos graves (HIV avançado com CD4 muito baixo, uso de anti-TNF) com febre, hepatoesplenomegalia, pancitopenia, lesões mucocutâneas.
- **Diagnóstico:** antígeno de *Histoplasma* em urina/soro (útil sobretudo na forma disseminada, com boa sensibilidade); sorologia e cultura têm papel complementar; histopatologia com leveduras intracelulares pequenas dentro de macrófagos.
- **Tratamento:** itraconazol para formas leves a moderadas; anfotericina B para formas graves/disseminadas/SNC, com transição para itraconazol de manutenção.
- 💎 **Pearl:** histoplasmose disseminada em paciente com HIV e CD4 muito baixo é diagnóstico diferencial importante de tuberculose disseminada e de leishmaniose visceral nesse mesmo perfil de hospedeiro — todas cursam com pancitopenia e hepatoesplenomegalia.

## 🔹 Paracoccidioidomicose

- **Epidemiologia:** micose sistêmica endêmica **mais prevalente da América Latina**, fortemente associada a trabalhadores rurais do sexo masculino, exposição ao solo/plantas contaminadas com o fungo (*Paracoccidioides brasiliensis*).
- **Formas clínicas:** forma aguda/subaguda (juvenil) — mais rápida, com linfadenopatia generalizada, hepatoesplenomegalia, acometimento cutâneo e de medula óssea; forma crônica (adulto) — mais comum, curso insidioso, acometimento pulmonar predominante (podendo simular tuberculose) associado a lesões mucosas orofaríngeas ulceradas dolorosas muito características ("estomatite moriforme").
- **Diagnóstico:** exame micológico direto/histopatológico com leveduras em "roda de leme" (múltiplos brotamentos ao redor de célula central) é achado patognomônico; sorologia por imunodifusão dupla é útil para diagnóstico e seguimento de resposta terapêutica.
- **Tratamento:** itraconazol para formas leves a moderadas (primeira escolha na maioria dos casos); sulfametoxazol-trimetoprima como alternativa de custo mais baixo/uso prolongado; anfotericina B para formas graves.
- 💎 **Pearl:** lesão mucosa orofaríngea ulcerada e dolorosa ("estomatite moriforme") em homem com história ocupacional rural é achado de altíssimo valor discriminativo para paracoccidioidomicose.

## 🔹 Candidíase invasiva

- **Hospedeiro de risco:** cateter venoso central, nutrição parenteral, cirurgia abdominal complexa/perfuração de víscera, uso prolongado de antibiótico de amplo espectro, neutropenia.
- **Quadro clínico:** candidemia (hemocultura positiva) pode ser assintomática ou cursar com sepse; **candidíase hepatoesplênica** (forma crônica disseminada) surge tipicamente na recuperação da neutropenia, com febre persistente e lesões hipodensas múltiplas em fígado/baço à imagem.
- **Diagnóstico:** hemocultura (padrão, mas sensibilidade moderada); beta-D-glucana sérica auxilia no rastreio em paciente de alto risco; fundoscopia para rastrear endoftalmite em todo caso de candidemia confirmada.
- **Tratamento:** equinocandina (caspofungina, micafungina, anidulafungina) como primeira linha empírica na maioria dos adultos com candidemia; fluconazol é opção em paciente estável, sem exposição prévia a azólico e espécie sensível conhecida; remover cateter venoso central sempre que possível é parte essencial do tratamento, não opcional.
- 💎 **Pearl:** toda candidemia confirmada exige fundoscopia para rastrear endoftalmite/coriorretinite — achado que muda a duração do tratamento.

## 📋 Tabela

**Diferencial rápido das micoses sistêmicas mais cobradas**

| Micose | Hospedeiro de risco clássico | Achado diagnóstico-chave | Antifúngico de escolha |
|---|---|---|---|
| Aspergilose invasiva | Neutropenia grave/prolongada | Galactomanana sérica seriada; hifas septadas em ângulo agudo | Voriconazol |
| Mucormicose | Cetoacidose diabética; neutropenia | Hifas largas não septadas em ângulo reto; galactomanana negativa | Anfotericina B + desbridamento cirúrgico |
| Histoplasmose disseminada | HIV avançado (CD4 muito baixo) | Antígeno urinário/sérico; leveduras intracelulares | Anfotericina B (grave) / itraconazol |
| Paracoccidioidomicose | Trabalhador rural, homem adulto | Lesão mucosa "moriforme"; leveduras em "roda de leme" | Itraconazol |
| Candidíase invasiva | Cateter central, nutrição parenteral | Hemocultura; beta-D-glucana | Equinocandina |

## 📝 Como a banca cobra

**"Micoses sistêmicas" é um assunto de baixa incidência neste banco — apenas 1 questão real no corpus completo**: ENARE 2025 Q17 (DIFÍCIL), caso de aspergilose pulmonar invasiva em paciente com neutropenia grave e prolongada, testando o papel real da galactomanana sérica seriada como ferramenta de decisão terapêutica frente às limitações de sensibilidade da cultura e do exame direto.

Mesmo com pouca representação no corpus, micoses sistêmicas são tema de **alto rendimento em provas de residência** justamente por combinarem hospedeiro de risco estereotipado, achados de imagem/histopatologia muito característicos e decisões terapêuticas objetivas — um padrão de pergunta muito replicável, com boa chance de a banca explorar outras micoses do mesmo grupo (mucormicose, paracoccidioidomicose) em provas futuras.

## 📚 Referências essenciais

- IDSA Clinical Practice Guideline for the Diagnosis and Management of Aspergillosis.
- IDSA Clinical Practice Guideline for the Management of Candidiasis.
- ECMM/ESCMID/ECMM Joint Clinical Guideline for the Diagnosis and Management of Mucormycosis (diretriz de sociedade especializada em micologia médica).
`;

export default content.trim();
