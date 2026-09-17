/**
 * Resumo — Gastroenterologia e Hepatologia · Hepatites virais.
 *
 * Assunto de baixa incidência no corpus (1 questão real, cauda longa, fora
 * do corte 80/20): ENARE 2025 Q65 (manifestações extra-hepáticas da
 * hepatite B crônica — poliarterite nodosa como a mais prevalente). Cobre
 * em profundidade a interpretação sorológica da hepatite B (o alicerce de
 * qualquer questão sobre o tema), as manifestações extra-hepáticas do HBV
 * e do HCV, e o manejo atual conforme o PCDT de Hepatites Virais B e C do
 * Ministério da Saúde — o único assunto desta rodada de cauda longa com
 * programa nacional específico.
 */
const content = `
## 🎯 Essencial

- **A interpretação da sorologia da hepatite B é o alicerce de toda questão sobre o tema** — HBsAg é o marcador de infecção presente (aguda ou crônica); anti-HBc IgM marca infecção aguda recente; anti-HBc IgG marca contato prévio (persiste indefinidamente); anti-HBs é o marcador de imunidade (por vacina ou por cura da infecção natural); HBeAg e anti-HBe refletem replicação viral ativa e fase da doença, mais do que o diagnóstico em si.
- **HBsAg positivo por mais de 6 meses define hepatite B crônica** — no caso descrito no corpus (HBsAg+, anti-HBs-, HBeAg-, transaminases alteradas), o paciente está na fase crônica, HBeAg negativo, o que hoje é o padrão mais prevalente na prática clínica (mutante pré-core/core-promoter ou fase imune-inativa/reativa conforme carga viral e HBV-DNA).
- **A manifestação extra-hepática mais prevalente da hepatite B crônica é a poliarterite nodosa (PAN)** — vasculite de médio calibre, sem acometimento pulmonar nem glomerular relevante, tipicamente com mononeurite múltipla, dor abdominal, hipertensão renovascular e nódulos subcutâneos; pesquisar HBsAg diante de qualquer PAN é conduta padrão.
- **A outra manifestação extra-hepática clássica do HBV é a glomerulonefrite membranosa** — síndrome nefrótica associada a hepatite B crônica, mais comum em crianças (onde tende a resolver espontaneamente com a clareamento do HBeAg) do que em adultos.
- **Hepatite C crônica tem seu próprio perfil de manifestações extra-hepáticas, centrado na crioglobulinemia mista (tipo II, com atividade de fator reumatoide)** — não confundir o padrão extra-hepático de cada vírus: PAN e glomerulonefrite membranosa remetem a HBV; crioglobulinemia mista e glomerulonefrite membranoproliferativa remetem a HCV.

## 💎 Pearls

- **A "janela imunológica" da hepatite B** (período em que HBsAg já negativou mas anti-HBs ainda não positivou) é identificada apenas pelo **anti-HBc IgM ou IgG isolado positivo** — é a pegadinha sorológica mais clássica do tema.
- **Anti-HBc IgG isolado positivo (sem HBsAg e sem anti-HBs)** também pode representar infecção oculta pelo HBV ou resultado falso-positivo — nesse cenário, vale considerar HBV-DNA em populações de risco/imunossuprimidos.
- **Padrão vacinal:** apenas anti-HBs positivo, com anti-HBc negativo — diferencia imunidade vacinal (só anti-HBs) de imunidade por infecção natural resolvida (anti-HBs + anti-HBc IgG, os dois positivos).
- **Coinfecção HBV-HIV:** manter tenofovir no esquema antirretroviral (atividade dupla anti-HIV e anti-HBV) é conduta obrigatória — suspender tenofovir nesse contexto pode desencadear reativação grave (flare) de hepatite B.
- **Reativação de hepatite B** é risco real em pacientes com HBsAg positivo (ou mesmo anti-HBc isolado positivo) submetidos a imunossupressão significativa (quimioterapia, rituximabe, corticoide em alta dose prolongada, biológicos) — rastreio de HBsAg/anti-HBc é obrigatório antes de iniciar esses tratamentos, com profilaxia antiviral quando indicado.
- **Hepatite D (delta) só ocorre na presença de hepatite B** (vírus defectivo, depende do envelope do HBsAg) — coinfecção (adquiridas juntas, tendência a resolver junto) versus superinfecção (delta adquirida sobre HBV crônico já estabelecido, maior risco de evolução grave/fulminante e de cirrose acelerada).
- **HCV hoje tem cura na quase totalidade dos casos** com antivirais de ação direta (DAA) orais, por 8-12 semanas, resposta virológica sustentada acima de 95% — mudança de paradigma frente à era do interferon, e detalhe cada vez mais cobrado em prova.

## ⚠️ Pitfalls

- Confundir anti-HBc IgG isolado positivo com "ausência de contato com o vírus" — é justamente o marcador que indica contato prévio (ou janela imunológica, ou infecção oculta), e sua presença isolada exige interpretação cuidadosa, não deve ser ignorada.
- Assumir que toda hepatite B crônica com HBeAg negativo é "fase inativa/de baixo risco" sem checar HBV-DNA e transaminases — HBeAg negativo com carga viral alta e transaminases elevadas define a fase de hepatite crônica HBeAg-negativa (mutante), que também tem indicação de tratamento, diferente da fase realmente inativa (carga viral baixa/indetectável e transaminases normais).
- Atribuir crioglobulinemia mista/glomerulonefrite membranoproliferativa à hepatite B, ou poliarterite nodosa à hepatite C — são padrões de manifestação extra-hepática específicos de cada vírus, e a banca explora exatamente essa troca como distrator.
- Suspender tenofovir em paciente HIV/HBV coinfectado achando que "não é mais necessário" sem avaliar ativamente a hepatite B — risco de flare grave de hepatite B com a suspensão.
- Não rastrear HBsAg/anti-HBc antes de iniciar imunossupressão significativa (quimioterapia, biológicos) — risco de reativação de hepatite B, por vezes fulminante, que é evitável com profilaxia antiviral.

## 🩺 Quadro clínico

- **Hepatite B aguda:** pode ser assintomática (maioria dos adultos) ou cursar com mal-estar, anorexia, náusea, icterícia, colúria, dor em hipocôndrio direito; risco de hepatite fulminante é baixo, mas existe.
- **Hepatite B crônica:** frequentemente assintomática por décadas, descoberta em rastreio de rotina ou já por complicação (cirrose, hepatocarcinoma) ou manifestação extra-hepática (PAN, glomerulonefrite membranosa).
- **Manifestações extra-hepáticas do HBV:** poliarterite nodosa (a mais prevalente), glomerulonefrite membranosa, crioglobulinemia (menos característica que no HCV), acrodermatite papular da infância (síndrome de Gianotti-Crosti, mais em crianças).
- **Manifestações extra-hepáticas do HCV:** crioglobulinemia mista (púrpura palpável, artralgia, neuropatia periférica, glomerulonefrite), glomerulonefrite membranoproliferativa, porfiria cutânea tarda, líquen plano, linfoma não Hodgkin de células B (associação bem estabelecida com infecção crônica prolongada).

## 🔎 Diagnóstico

- **Hepatite B:** painel sorológico (HBsAg, anti-HBs, anti-HBc IgM/IgG, HBeAg, anti-HBe) associado a HBV-DNA quantitativo para definir fase da doença e indicação de tratamento; elastografia/biópsia hepática para avaliar fibrose quando indicado.
- **Hepatite C:** anti-HCV como rastreio (pode levar semanas para positivar após exposição aguda); HCV-RNA confirma viremia ativa (anti-HCV positivo isolado pode refletir infecção resolvida espontaneamente, presente em até 15-25% dos casos agudos).
- **Investigação de manifestação extra-hepática:** diante de vasculite de médio vaso (PAN) ou síndrome nefrótica sem causa aparente, rastrear HBsAg; diante de púrpura palpável/artralgia/neuropatia com crioglobulina positiva, rastrear anti-HCV/HCV-RNA.

## 💊 Tratamento

- **Hepatite B crônica — indicação de tratamento** (conforme PCDT): HBV-DNA elevado com transaminases alteradas (ALT acima do limite superior da normalidade, de forma persistente), cirrose (independentemente de carga viral/transaminases), coinfecção com HIV, HCV ou HDV, manifestação extra-hepática significativa, ou história familiar de hepatocarcinoma, entre outros critérios específicos do protocolo nacional.
- **Esquema preferencial para hepatite B:** tenofovir (disoproxila ou alafenamida), análogo nucleotídeo de alta barreira genética e boa tolerabilidade, uso contínuo (a supressão viral raramente é seguida de cura funcional/soroconversão de HBsAg, então o tratamento costuma ser prolongado/indefinido na maioria dos casos).
- **Hepatite C:** antivirais de ação direta (DAA) por via oral, esquema e duração definidos pelo genótipo, presença de cirrose e tratamento prévio, conforme o PCDT nacional — cura virológica (resposta sustentada) é a meta e é alcançada na grande maioria dos casos tratados.
- **Manifestações extra-hepáticas:** tratar a infecção viral de base costuma melhorar a manifestação associada (ex.: crioglobulinemia por HCV melhora com erradicação viral); imunossupressão pontual pode ser necessária em vasculite grave (PAN por HBV), sempre associada ao tratamento antiviral, nunca isolada, pelo risco de perpetuar a replicação viral.

## 📝 Como a banca cobra

**"Hepatites virais" é um assunto de baixa incidência neste banco — apenas 1 questão real no corpus completo**: ENARE 2025 Q65 (FÁCIL), caso de hepatite B crônica (HBsAg+, anti-HBs-, HBeAg-) perguntando qual a manifestação extra-hepática mais prevalente — resposta correta: **poliarterite nodosa**, contra distratores que trazem manifestações associadas a outras condições (lúpus, amiloidose, linfoma de Burkitt, histiocitose) sem relação estabelecida e direta com a hepatite B crônica.

Mesmo com baixa representação no corpus, hepatites virais é tema de **altíssimo rendimento em provas de residência** — é um dos poucos temas de infectologia/hepatologia com programa nacional específico e bem estruturado (PCDT), o que torna a cobrança bastante previsível (interpretação de sorologia, critérios de tratamento, manifestações extra-hepáticas) e mantém alta probabilidade de reaparecer em formato mais amplo, testando diretamente o painel sorológico completo.

## 📚 Referências essenciais

- PCDT para Hepatite B e Coinfecções — Ministério da Saúde.
- PCDT para Hepatite C e Coinfecções — Ministério da Saúde.
`;

export default content.trim();
