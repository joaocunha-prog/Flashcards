/**
 * Resumo — Neurologia · Neuroinfecção e emergências neurológicas.
 *
 * Cobre as entidades do assunto no corpus: AVC isquêmico e critério de
 * imagem para trombólise, encefalite límbica autoimune anti-LGI1,
 * neurocisticercose, trombose séptica do seio cavernoso, encefalite
 * herpética, encefalopatia de Wernicke e lesão expansiva com crise
 * convulsiva. O assunto do banco agrupa entidades de naturezas clínicas
 * distintas — por isso o conteúdo abaixo é organizado em dois clusters
 * (infecções/inflamações do SNC vs. emergências vasculares, metabólicas e
 * estruturais) em vez de uma lista única. Inclui também extrapolações de
 * alto rendimento (meningite bacteriana aguda, hemorragia subaracnóidea,
 * trombose venosa cerebral, status epilepticus) ainda não cobradas no
 * corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

**Infecções e inflamações do SNC:**

- **Encefalite herpética:** iniciar **aciclovir IV empírico** assim que houver suspeita clínica (febre, alteração de comportamento/consciência, crise convulsiva, achados temporais na RM) — nunca esperar confirmação laboratorial (PCR de HSV no líquor) para começar o tratamento.
- **Encefalite límbica autoimune (anti-LGI1):** crises breves e frequentes ("faciobraquiais distônicas"), hiponatremia e declínio cognitivo subagudo — **imunoterapia de primeira linha (corticoide + IVIG/plasmaférese) imediata**, sem esperar resultado de anticorpo, e rastreio de neoplasia associado.
- **Neurocisticercose:** suspeita por epidemiologia + crise convulsiva + lesão na TC — o próximo exame é **RM de crânio**, que caracteriza melhor o estágio da(s) lesão(ões) (vesicular, coloidal, calcificada) e orienta se há indicação de cisticida.
- **Trombose séptica do seio cavernoso:** proptose + oftalmoplegia (múltiplos pares cranianos) + febre, geralmente a partir de foco infeccioso de face/seios paranasais — emergência com antibioticoterapia de amplo espectro + anticoagulação.
- **Ainda não cobrado no corpus, mas candidato natural: meningite bacteriana aguda** — tríade clássica (febre, rigidez de nuca, alteração de consciência), frequentemente incompleta. **Antibiótico (ceftriaxona ± vancomicina) e dexametasona são dados juntos, sem atraso** — a dexametasona idealmente antes ou junto da 1ª dose de antibiótico reduz sequelas neurológicas, principalmente na meningite pneumocócica. TC de crânio antes da punção lombar só se houver sinais de hipertensão intracraniana, déficit focal ou imunossupressão — e mesmo assim não deve atrasar o antibiótico.

**Emergências vasculares, metabólicas e estruturais do SNC:**

- **Antes de trombolisar um AVC isquêmico, o achado mais importante na TC de crânio é a AUSÊNCIA de hemorragia** — hemorragia é contraindicação absoluta ao rtPA. Não existe "achado que autoriza" além disso; a ausência de sangramento já basta para prosseguir a avaliação de elegibilidade.
- **Encefalopatia de Wernicke:** tríade clássica (confusão, ataxia, oftalmoplegia — frequentemente incompleta), tratada com **tiamina IV antes de qualquer glicose**, para não precipitar ou agravar o quadro.
- **Lesão expansiva cerebral com crise convulsiva:** RM com contraste + anticonvulsivante (levetiracetam é a primeira escolha na maioria dos cenários agudos) enquanto se investiga a etiologia.
- **Ainda não cobrado no corpus, mas candidato natural: hemorragia subaracnóidea** — cefaleia súbita e intensa ("thunderclap", pior da vida), rigidez de nuca e fotofobia por irritação meníngea química. **TC de crânio sem contraste é o primeiro exame** (alta sensibilidade nas primeiras 6h); se negativa com alta suspeita, punção lombar buscando xantocromia. Causa mais comum é ruptura de aneurisma sacular — angiografia define e trata a origem (clipagem ou embolização).
- **Ainda não cobrado no corpus, mas candidato natural: trombose venosa cerebral (sinovenosa)** — cefaleia progressiva, crise convulsiva e/ou déficit focal em paciente com fator de risco protrombótico (puerpério, uso de anticoncepcional, trombofilia); pode mimetizar AVC isquêmico "que não respeita território arterial". Diagnóstico por angio-TC/RM venosa; tratamento é **anticoagulação plena**, mesmo na presença de transformação hemorrágica associada.

## 💎 Pearls

**Infecções e inflamações do SNC:**

- Na encefalite herpética, o **líquor tipicamente mostra pleocitose linfomonocitária e proteína elevada**, mas pode ser normal nas primeiras 24-48h — não descarta o diagnóstico nem atrasa o aciclovir empírico.
- **Anti-LGI1** é o protótipo de encefalite autoimune não-paraneoplásica na maioria dos casos (ao contrário de anti-NMDA, mais associada a teratoma) — ainda assim, rastreia-se neoplasia.
- Na neurocisticercose, lesões **calcificadas inativas** não indicam cisticida (risco de reação inflamatória sem benefício); só lesões viáveis (vesiculares/coloidais) se beneficiam de albendazol, sempre associado a corticoide para controlar a resposta inflamatória.
- Na meningite bacteriana, o líquor com **glicorraquia baixa (<40% da glicemia)**, proteína alta e predomínio de neutrófilos diferencia de meningite viral (glicorraquia normal, predomínio linfomonocitário) — meningite tuberculosa também cursa com glicorraquia baixa, mas de forma mais insidiosa (dias a semanas) e com ADA elevada no líquor.

**Emergências vasculares, metabólicas e estruturais do SNC:**

- A janela de trombólise no AVC isquêmico é definida pelo tempo do último momento visto normal, não pelo horário em que os sintomas foram notados.
- A tríade de Wernicke completa está presente em **menos da metade** dos casos — não exigir os três achados para tratar.
- Wernicke não tratada evolui para **síndrome de Korsakoff** (amnésia anterógrada e confabulação, geralmente irreversível) — a urgência da reposição de tiamina é justamente prevenir essa progressão.
- Na hemorragia subaracnóidea, o **vasoespasmo cerebral tardio** (pico entre o 4º e o 14º dia) é a principal causa de piora neurológica secundária — nimodipina oral é usada rotineiramente como neuroproteção, não para tratar o vasoespasmo já instalado.
- Na trombose venosa cerebral, o achado de **infarto hemorrágico que não respeita um território arterial específico** é uma pista de imagem importante para não rotular como AVC isquêmico arterial.

## ⚠️ Pitfalls

**Infecções e inflamações do SNC:**

- **Aguardar sorologia/PCR liquórico para iniciar aciclovir** em suspeita de encefalite herpética — o atraso terapêutico piora sequelas neurológicas.
- **Esperar resultado de anticorpo anti-LGI1 para iniciar imunoterapia** — o tratamento empírico começa pela força do quadro clínico-radiológico.
- **Tratar toda lesão cisticercótica com cisticida**, inclusive as calcificadas — só as viáveis se beneficiam, e sempre com corticoide associado.
- **Atrasar antibiótico para fazer TC de crânio antes da punção lombar** em toda suspeita de meningite bacteriana — a TC só é necessária em subgrupos específicos (imunossupressão, déficit focal, papiledema, crise convulsiva recente), e mesmo nesses casos o antibiótico deve ser iniciado antes ou imediatamente após a coleta, nunca esperando o resultado de imagem.

**Emergências vasculares, metabólicas e estruturais do SNC:**

- **Achar que "presença de hemorragia" é o achado que libera trombólise** — é o oposto: hemorragia contraindica.
- **Administrar glicose antes da tiamina** em paciente com suspeita de Wernicke — pode precipitar a encefalopatia.
- **Descartar hemorragia subaracnóidea só porque a TC de crânio veio normal**, sem considerar punção lombar quando a suspeita clínica é forte e o exame foi feito tardiamente (sensibilidade da TC cai após 6h).
- **Rotular todo déficit neurológico agudo com infarto "atípico" na imagem como AVC arterial**, sem pensar em trombose venosa cerebral — a anticoagulação (correta para trombose venosa) seria contraindicada num raciocínio de AVC hemorrágico arterial.

## 📝 Como a banca cobra

**Empatado como quarto assunto mais frequente (7 questões, 3,3%)**, misturando ENARE (5 questões) e EBSERH (2 questões) — o padrão é sempre **reconhecer a urgência e definir a conduta imediata**, não só nomear a doença.

- **AVC isquêmico/trombólise** (EBSERH 2025 Q52) é a questão mais crítica do assunto — inverter o achado de TC necessário (ausência vs. presença de hemorragia) é o tipo de erro que a banca testa diretamente.
- **Encefalite límbica anti-LGI1** (EBSERH 2026 Q57) e **encefalite herpética** (ENARE 2025 Q60) seguem a mesma lógica: tratar rápido, sem esperar confirmação laboratorial completa.
- **Encefalopatia de Wernicke** (ENARE 2026 Q10), **trombose do seio cavernoso** (ENARE 2025 Q46), **neurocisticercose** (ENARE 2025 Q38) e **lesão expansiva com convulsão** (ENARE 2026 Q30) completam o assunto — todas emergências neurológicas com conduta tempo-dependente.

## 🧠 Conceito e fisiopatologia

No AVC isquêmico agudo, o rtPA lisa o trombo que oclui a artéria cerebral, restaurando fluxo à área de penumbra isquêmica — mas o mesmo mecanismo fibrinolítico que resolve a isquemia pode transformar uma lesão isquêmica em hemorrágica, daí a exigência absoluta de excluir sangramento antes de infundir.

A **encefalopatia de Wernicke** decorre de deficiência de tiamina (cofator de enzimas do metabolismo energético cerebral, como a transcetolase), classicamente em etilistas ou desnutridos — administrar glicose sem repor tiamina consome as reservas residuais da vitamina, precipitando o quadro. Na **encefalite límbica autoimune**, anticorpos contra proteínas de superfície neuronal (LGI1, parte do complexo de canais de potássio voltagem-dependentes) causam hiperexcitabilidade límbica e disfunção hipotalâmica (explicando a hiponatremia associada por SIADH).

Nas infecções do SNC, o mecanismo de dano é duplo: a lesão direta pelo agente (necrose temporal na encefalite herpética; formação de cisto parasitário na neurocisticercose) soma-se à **resposta inflamatória do hospedeiro** — daí corticoide ser adjuvante em neurocisticercose (controla o edema pela morte do parasita) e a dexametasona ser dada junto ao antibiótico na meningite bacteriana pneumocócica (reduz a resposta inflamatória liquórica que causa surdez e outras sequelas).

## 🔎 Diagnóstico

**Infecções e inflamações do SNC:**

- **Encefalite herpética:** RM com hipersinal temporal, líquor com PCR para HSV (pode demorar/ser inicialmente negativo).
- **Anti-LGI1:** anticorpo sérico/liquórico, RM com hipersinal em hipocampo, EEG com descargas temporais, rastreio de neoplasia.
- **Neurocisticercose:** RM de crânio para estadiar as lesões (vesicular/coloidal/calcificada), sorologia como apoio.
- **Trombose de seio cavernoso:** angio-TC/RM de crânio e órbitas.
- **Meningite bacteriana:** líquor com neutrofilia, glicorraquia baixa, proteína alta; hemocultura e cultura do líquor identificam o agente.

**Emergências vasculares, metabólicas e estruturais do SNC:**

- **AVC isquêmico:** TC de crânio sem contraste (excluir hemorragia) antes de qualquer decisão de trombólise; angio-TC para trombectomia se grande vaso.
- **Wernicke:** clínico; dosagem de tiamina não deve atrasar tratamento.
- **Lesão expansiva:** RM com contraste caracteriza a lesão e orienta biópsia/ressecção conforme suspeita etiológica.
- **Hemorragia subaracnóidea:** TC de crânio sem contraste primeiro; punção lombar (xantocromia) se TC negativa e suspeita persistente; angiografia para localizar aneurisma.
- **Trombose venosa cerebral:** angio-TC ou angio-RM venosa (não arterial).

## 💊 Tratamento

**Infecções e inflamações do SNC:**

- **Encefalite herpética:** aciclovir IV empírico imediato.
- **Anti-LGI1:** metilprednisolona + IVIG/plasmaférese, rastreio e tratamento de neoplasia associada se houver.
- **Neurocisticercose viável:** albendazol + corticoide concomitante.
- **Trombose de seio cavernoso:** antibiótico de amplo espectro + anticoagulação.
- **Meningite bacteriana:** ceftriaxona (± vancomicina se suspeita de pneumococo resistente) + dexametasona iniciada junto ou antes da 1ª dose de antibiótico.

**Emergências vasculares, metabólicas e estruturais do SNC:**

- **AVC isquêmico elegível:** rtPA dentro da janela, trombectomia mecânica se grande vaso.
- **Wernicke:** tiamina IV antes de glicose.
- **Lesão expansiva com crise:** levetiracetam como anticonvulsivante inicial na maioria dos cenários; se evoluir para crise refratária, seguir protocolo de status epilepticus (benzodiazepínico IV primeiro, depois anticonvulsivante de segunda linha, com escalonamento para anestesia geral se persistir).
- **Hemorragia subaracnóidea:** nimodipina oral para neuroproteção contra vasoespasmo; controle pressórico cuidadoso; tratamento definitivo do aneurisma (clipagem cirúrgica ou embolização endovascular).
- **Trombose venosa cerebral:** anticoagulação plena, mesmo com transformação hemorrágica associada.

## 📚 Referências essenciais

- Diretriz AHA/ASA para manejo do AVC isquêmico agudo e para hemorragia subaracnóidea aneurismática.
- IDSA Guidelines — Management of Encephalitis e Management of Bacterial Meningitis.
- Consenso internacional de encefalites autoimunes (Graus et al.).
- Guideline ILAE/Neurocritical Care Society para status epilepticus.
`;

export default content.trim();
