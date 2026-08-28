/**
 * Resumo — Neurologia · Neuroinfecção e emergências neurológicas.
 *
 * Cobre as entidades do assunto no corpus: AVC isquêmico e critério de
 * imagem para trombólise, encefalite límbica autoimune anti-LGI1,
 * neurocisticercose, trombose séptica do seio cavernoso, encefalite
 * herpética, encefalopatia de Wernicke e lesão expansiva com crise
 * convulsiva.
 */
const content = `
## 🎯 Essencial

- **Antes de trombolisar um AVC isquêmico, o achado mais importante na TC de crânio é a AUSÊNCIA de hemorragia** — hemorragia é contraindicação absoluta ao rtPA. Não existe "achado que autoriza" além disso; a ausência de sangramento já basta para prosseguir a avaliação de elegibilidade.
- **Encefalite herpética:** iniciar **aciclovir IV empírico** assim que houver suspeita clínica (febre, alteração de comportamento/consciência, crise convulsiva, achados temporais na RM) — nunca esperar confirmação laboratorial (PCR de HSV no líquor) para começar o tratamento.
- **Encefalopatia de Wernicke:** tríade clássica (confusão, ataxia, oftalmoplegia — frequentemente incompleta), tratada com **tiamina IV antes de qualquer glicose**, para não precipitar ou agravar o quadro.
- **Encefalite límbica autoimune (anti-LGI1):** crises breves e frequentes ("faciobraquiais distônicas"), hiponatremia e declínio cognitivo subagudo — **imunoterapia de primeira linha (corticoide + IVIG/plasmaférese) imediata**, sem esperar resultado de anticorpo, e rastreio de neoplasia associado.
- **Neurocisticercose:** suspeita por epidemiologia + crise convulsiva + lesão na TC — o próximo exame é **RM de crânio**, que caracteriza melhor o estágio da(s) lesão(ões) (vesicular, coloidal, calcificada) e orienta se há indicação de cisticida.
- **Trombose séptica do seio cavernoso:** proptose + oftalmoplegia (múltiplos pares cranianos) + febre, geralmente a partir de foco infeccioso de face/seios paranasais — emergência com antibioticoterapia de amplo espectro + anticoagulação.
- **Lesão expansiva cerebral com crise convulsiva:** RM com contraste + anticonvulsivante (levetiracetam é a primeira escolha na maioria dos cenários agudos) enquanto se investiga a etiologia.

## 💎 Pearls

- A janela de trombólise no AVC isquêmico é definida pelo tempo do último momento visto normal, não pelo horário em que os sintomas foram notados.
- Na encefalite herpética, o **líquor tipicamente mostra pleocitose linfomonocitária e proteína elevada**, mas pode ser normal nas primeiras 24-48h — não descarta o diagnóstico nem atrasa o aciclovir empírico.
- **Anti-LGI1** é o protótipo de encefalite autoimune não-paraneoplásica na maioria dos casos (ao contrário de anti-NMDA, mais associada a teratoma) — ainda assim, rastreia-se neoplasia.
- Na neurocisticercose, lesões **calcificadas inativas** não indicam cisticida (risco de reação inflamatória sem benefício); só lesões viáveis (vesiculares/coloidais) se beneficiam de albendazol, sempre associado a corticoide para controlar a resposta inflamatória.
- A tríade de Wernicke completa está presente em **menos da metade** dos casos — não exigir os três achados para tratar.

## ⚠️ Pitfalls

- **Achar que "presença de hemorragia" é o achado que libera trombólise** — é o oposto: hemorragia contraindica.
- **Administrar glicose antes da tiamina** em paciente com suspeita de Wernicke — pode precipitar a encefalopatia.
- **Aguardar sorologia/PCR liquórico para iniciar aciclovir** em suspeita de encefalite herpética — o atraso terapêutico piora sequelas neurológicas.
- **Esperar resultado de anticorpo anti-LGI1 para iniciar imunoterapia** — o tratamento empírico começa pela força do quadro clínico-radiológico.
- **Tratar toda lesão cisticercótica com cisticida**, inclusive as calcificadas — só as viáveis se beneficiam, e sempre com corticoide associado.

## 📝 Como a banca cobra

**Empatado como quarto assunto mais frequente (7 questões, 3,3%)**, misturando ENARE (5 questões) e EBSERH (2 questões) — o padrão é sempre **reconhecer a urgência e definir a conduta imediata**, não só nomear a doença.

- **AVC isquêmico/trombólise** (EBSERH 2025 Q52) é a questão mais crítica do assunto — inverter o achado de TC necessário (ausência vs. presença de hemorragia) é o tipo de erro que a banca testa diretamente.
- **Encefalite límbica anti-LGI1** (EBSERH 2026 Q57) e **encefalite herpética** (ENARE 2025 Q60) seguem a mesma lógica: tratar rápido, sem esperar confirmação laboratorial completa.
- **Encefalopatia de Wernicke** (ENARE 2026 Q10), **trombose do seio cavernoso** (ENARE 2025 Q46), **neurocisticercose** (ENARE 2025 Q38) e **lesão expansiva com convulsão** (ENARE 2026 Q30) completam o assunto — todas emergências neurológicas com conduta tempo-dependente.

## 🧠 Conceito e fisiopatologia

No AVC isquêmico agudo, o rtPA lisa o trombo que oclui a artéria cerebral, restaurando fluxo à área de penumbra isquêmica — mas o mesmo mecanismo fibrinolítico que resolve a isquemia pode transformar uma lesão isquêmica em hemorrágica, daí a exigência absoluta de excluir sangramento antes de infundir.

A **encefalopatia de Wernicke** decorre de deficiência de tiamina (cofator de enzimas do metabolismo energético cerebral, como a transcetolase), classicamente em etilistas ou desnutridos — administrar glicose sem repor tiamina consome as reservas residuais da vitamina, precipitando o quadro. Na **encefalite límbica autoimune**, anticorpos contra proteínas de superfície neuronal (LGI1, parte do complexo de canais de potássio voltagem-dependentes) causam hiperexcitabilidade límbica e disfunção hipotalâmica (explicando a hiponatremia associada por SIADH).

## 🔎 Diagnóstico

- **AVC isquêmico:** TC de crânio sem contraste (excluir hemorragia) antes de qualquer decisão de trombólise; angio-TC para trombectomia se grande vaso.
- **Encefalite herpética:** RM com hipersinal temporal, líquor com PCR para HSV (pode demorar/ser inicialmente negativo).
- **Wernicke:** clínico; dosagem de tiamina não deve atrasar tratamento.
- **Anti-LGI1:** anticorpo sérico/liquórico, RM com hipersinal em hipocampo, EEG com descargas temporais, rastreio de neoplasia.
- **Neurocisticercose:** RM de crânio para estadiar as lesões (vesicular/coloidal/calcificada), sorologia como apoio.
- **Trombose de seio cavernoso:** angio-TC/RM de crânio e órbitas.

## 💊 Tratamento

- **AVC isquêmico elegível:** rtPA dentro da janela, trombectomia mecânica se grande vaso.
- **Encefalite herpética:** aciclovir IV empírico imediato.
- **Wernicke:** tiamina IV antes de glicose.
- **Anti-LGI1:** metilprednisolona + IVIG/plasmaférese, rastreio e tratamento de neoplasia associada se houver.
- **Neurocisticercose viável:** albendazol + corticoide concomitante.
- **Trombose de seio cavernoso:** antibiótico de amplo espectro + anticoagulação.
- **Lesão expansiva com crise:** levetiracetam como anticonvulsivante inicial na maioria dos cenários.

## 📚 Referências essenciais

- Diretriz AHA/ASA para manejo do AVC isquêmico agudo.
- IDSA Guidelines — Management of Encephalitis.
- Consenso internacional de encefalites autoimunes (Graus et al.).
`;

export default content.trim();
