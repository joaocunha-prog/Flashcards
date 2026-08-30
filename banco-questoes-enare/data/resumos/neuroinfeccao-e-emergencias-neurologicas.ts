/**
 * Resumo — Neurologia · Neuroinfecção e emergências neurológicas.
 *
 * Reorganizado por entidade clínica (cada doença tem sua própria seção com
 * quadro clínico, diagnóstico, tratamento, pearl e pitfall juntos), em vez
 * de picado entre seções genéricas de tipo. O assunto do banco agrupa
 * entidades de naturezas clínicas distintas — por isso as entidades
 * infecciosas/inflamatórias do SNC vêm primeiro, seguidas pelas emergências
 * vasculares, metabólicas e estruturais (que não são infecção, mas
 * pertencem ao mesmo assunto/Subtheme do banco). O diferencial de lesão de
 * SNC no HIV avançado (neurotoxoplasmose, linfoma primário de SNC, LEMP,
 * meningite criptocócica) mora no resumo de `hiv-aids`, não aqui — são
 * complicações do HIV, um assunto (Subtheme) diferente do banco.
 *
 * Cobre as entidades do assunto no corpus: AVC isquêmico e critério de
 * imagem para trombólise, encefalite límbica autoimune anti-LGI1,
 * neurocisticercose, trombose séptica do seio cavernoso, encefalite
 * herpética, encefalopatia de Wernicke e lesão expansiva com crise
 * convulsiva. Inclui também extrapolações de alto rendimento (meningite
 * bacteriana aguda, hemorragia subaracnóidea, trombose venosa cerebral,
 * status epilepticus, dupla antiagregação em AVC minor/AIT de alto risco)
 * ainda não cobradas no corpus, mas plausíveis em provas futuras.
 */
const content = `
## 🎯 Essencial

- **Nas infecções/inflamações do SNC, o padrão geral é tratar empiricamente diante de suspeita clínico-radiológica forte, sem esperar confirmação laboratorial completa** — vale para encefalite herpética, encefalite límbica autoimune e meningite bacteriana (ver entidades abaixo).
- **Nas emergências vasculares/metabólicas/estruturais, o padrão geral é a decisão tempo-dependente definida por um achado de imagem ou uma tríade clínica incompleta** — AVC isquêmico, Wernicke e hemorragia subaracnóidea seguem essa lógica.
- **CD4 baixo muda completamente a lista de diferenciais de qualquer quadro neurológico agudo** — mas o diferencial específico de lesão de SNC no HIV avançado está no resumo de HIV/AIDS, não neste.

## 📝 Como a banca cobra

**Empatado como quarto assunto mais frequente (7 questões, 3,3%)**, misturando ENARE (5 questões) e EBSERH (2 questões) — o padrão é sempre **reconhecer a urgência e definir a conduta imediata**, não só nomear a doença.

- **AVC isquêmico/trombólise** (EBSERH 2025 Q52) é a questão mais crítica do assunto — inverter o achado de TC necessário (ausência vs. presença de hemorragia) é o tipo de erro que a banca testa diretamente.
- **Encefalite límbica anti-LGI1** (EBSERH 2026 Q57) e **encefalite herpética** (ENARE 2025 Q60) seguem a mesma lógica: tratar rápido, sem esperar confirmação laboratorial completa.
- **Encefalopatia de Wernicke** (ENARE 2026 Q10), **trombose do seio cavernoso** (ENARE 2025 Q46), **neurocisticercose** (ENARE 2025 Q38) e **lesão expansiva com convulsão** (ENARE 2026 Q30) completam o assunto — todas emergências neurológicas com conduta tempo-dependente.

## 🧠 Conceito e fisiopatologia

No AVC isquêmico agudo, o rtPA lisa o trombo que oclui a artéria cerebral, restaurando fluxo à área de penumbra isquêmica — mas o mesmo mecanismo fibrinolítico que resolve a isquemia pode transformar uma lesão isquêmica em hemorrágica, daí a exigência absoluta de excluir sangramento antes de infundir. Fora da janela de trombólise, o risco de recorrência precoce (sobretudo em déficit leve) é atacado por outra via — antiagregação, não fibrinólise (ver AVC isquêmico, abaixo).

Nas infecções do SNC, o mecanismo de dano é duplo: a lesão direta pelo agente (necrose temporal na encefalite herpética; formação de cisto parasitário na neurocisticercose) soma-se à **resposta inflamatória do hospedeiro** — daí corticoide ser adjuvante em neurocisticercose (controla o edema pela morte do parasita) e a dexametasona ser dada junto ao antibiótico na meningite bacteriana pneumocócica (reduz a resposta inflamatória liquórica que causa surdez e outras sequelas).

## 🔹 Encefalite herpética

- **Quando suspeitar:** febre, alteração de comportamento/consciência, crise convulsiva, achados temporais na RM.
- **Diagnóstico:** RM com hipersinal temporal; líquor com pleocitose linfomonocitária e proteína elevada — mas pode ser normal nas primeiras 24-48h, o que não descarta o diagnóstico.
- **Tratamento:** aciclovir IV **empírico**, assim que houver suspeita clínica — nunca esperar confirmação laboratorial (PCR de HSV no líquor) para começar.
- ⚠️ **Pitfall:** aguardar sorologia/PCR liquórico para iniciar aciclovir — o atraso terapêutico piora sequelas neurológicas.
- 📝 **Como caiu:** ENARE 2025 Q60 — tratamento empírico.

## 🔹 Encefalite límbica autoimune (anti-LGI1)

- **Quadro:** crises breves e frequentes ("faciobraquiais distônicas"), hiponatremia (por SIADH secundário à disfunção hipotalâmica) e declínio cognitivo subagudo.
- **Diagnóstico:** anticorpo anti-LGI1 sérico/liquórico, RM com hipersinal em hipocampo, EEG com descargas temporais; sempre associar rastreio de neoplasia.
- **Tratamento:** imunoterapia de primeira linha (corticoide + imunoglobulina IV/plasmaférese) **imediata**, sem esperar o resultado do anticorpo.
- 💎 **Pearl:** é o protótipo de encefalite autoimune não-paraneoplásica na maioria dos casos — diferente do anti-NMDA, mais associado a teratoma —, mas ainda assim rastreia-se neoplasia.
- ⚠️ **Pitfall:** esperar o resultado do anticorpo anti-LGI1 para iniciar imunoterapia — o tratamento empírico começa pela força do quadro clínico-radiológico.
- 📝 **Como caiu:** EBSERH 2026 Q57.

## 🔹 Neurocisticercose

- **Quando suspeitar:** epidemiologia compatível + crise convulsiva + lesão na TC de crânio.
- **Diagnóstico:** próximo exame é a RM de crânio, que estadia melhor a(s) lesão(ões) — vesicular, coloidal ou calcificada — e orienta se há indicação de cisticida; sorologia como apoio.
- **Tratamento:** só lesões viáveis (vesiculares/coloidais) recebem albendazol, sempre associado a corticoide para controlar a resposta inflamatória à morte do parasita. Lesões calcificadas inativas **não** indicam cisticida.
- ⚠️ **Pitfall:** tratar toda lesão cisticercótica com cisticida, inclusive as calcificadas — risco de reação inflamatória sem benefício.
- 📝 **Como caiu:** ENARE 2025 Q38 — investigação complementar.

## 🔹 Trombose séptica do seio cavernoso

- **Quadro:** proptose + oftalmoplegia (acometimento de múltiplos pares cranianos) + febre, geralmente a partir de foco infeccioso de face ou seios paranasais.
- **Diagnóstico:** angio-TC ou angio-RM de crânio e órbitas.
- **Tratamento:** emergência — antibioticoterapia de amplo espectro associada a anticoagulação.
- 📝 **Como caiu:** ENARE 2025 Q46.

## 🔹 Meningite bacteriana aguda

- **Quadro:** tríade clássica (febre, rigidez de nuca, alteração de consciência), frequentemente incompleta.
- **Diagnóstico:** líquor com glicorraquia baixa (<40% da glicemia), proteína alta e predomínio de neutrófilos — diferencia de meningite viral (glicorraquia normal, predomínio linfomonocitário); meningite tuberculosa também cursa com glicorraquia baixa, mas de forma mais insidiosa (dias a semanas) e com ADA elevada no líquor. Hemocultura e cultura do líquor identificam o agente.
- **Tratamento:** ceftriaxona (± vancomicina se suspeita de pneumococo resistente) e dexametasona **dadas juntas, sem atraso** — a dexametasona, idealmente antes ou junto da 1ª dose de antibiótico, reduz sequelas neurológicas, principalmente na meningite pneumocócica. TC de crânio antes da punção lombar só se houver sinais de hipertensão intracraniana, déficit focal ou imunossupressão — e mesmo assim não deve atrasar o antibiótico.
- ⚠️ **Pitfall:** atrasar o antibiótico para fazer TC de crânio antes da punção lombar em toda suspeita — a TC só é necessária em subgrupos específicos, e mesmo nesses casos o antibiótico deve ser iniciado antes ou imediatamente após a coleta.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 AVC isquêmico e critério de trombólise

- **Conduta:** antes de trombolisar, o achado mais importante na TC de crânio é a **ausência** de hemorragia — hemorragia é contraindicação absoluta ao rtPA. A janela de trombólise é definida pelo último momento visto normal, não pelo horário em que os sintomas foram notados. Angio-TC para avaliar trombectomia mecânica se grande vaso.
- **AVC minor / AIT de alto risco (sem indicação de trombólise):** quando o déficit é leve (NIHSS baixo, tipicamente ≤3 nos critérios dos estudos CHANCE/POINT) ou é um AIT com ABCD2 ≥4, a conduta muda de trombólise para prevenção secundária precoce — **dupla antiagregação (AAS + clopidogrel)**, iniciada nas primeiras 12-24h e mantida por 21-90 dias, reduz recorrência precoce sem aumentar significativamente o risco hemorrágico nesse intervalo curto.
- 💎 **Pearl:** trombólise e dupla antiagregação não competem pelo mesmo paciente — DAPT é para quem não tem indicação de trombolisar (déficit leve demais) ou já passou da janela, não é alternativa a rtPA num paciente elegível.
- ⚠️ **Pitfall:** achar que "presença de hemorragia" é o achado que libera a trombólise — é o oposto: hemorragia contraindica.
- 📝 **Como caiu:** EBSERH 2025 Q52 — inverter esse achado é o erro clássico testado pela banca.

## 🔹 Encefalopatia de Wernicke

- **Quadro:** tríade clássica (confusão, ataxia, oftalmoplegia), completa em **menos da metade** dos casos — não exigir os três achados para tratar.
- **Tratamento:** tiamina IV **antes de qualquer glicose**, para não precipitar ou agravar o quadro.
- 💎 **Pearl:** Wernicke não tratada evolui para síndrome de Korsakoff (amnésia anterógrada e confabulação, geralmente irreversível) — a urgência da reposição de tiamina é justamente prevenir essa progressão.
- ⚠️ **Pitfall:** administrar glicose antes da tiamina em paciente com suspeita de Wernicke — pode precipitar a encefalopatia.
- 📝 **Como caiu:** ENARE 2026 Q10.

## 🔹 Lesão expansiva cerebral com crise convulsiva

- **Conduta:** RM com contraste para caracterizar a lesão e orientar biópsia/ressecção conforme a suspeita etiológica, associada a anticonvulsivante — levetiracetam é a primeira escolha na maioria dos cenários agudos — enquanto se investiga a causa.
- **Se evoluir para crise refratária:** protocolo de status epilepticus — benzodiazepínico IV primeiro, depois anticonvulsivante de segunda linha, com escalonamento para anestesia geral se persistir.
- 📝 **Como caiu:** ENARE 2026 Q30 — investigação e anticonvulsivante.

## 🔹 Hemorragia subaracnóidea

- **Quadro:** cefaleia súbita e intensa ("thunderclap", a pior da vida), rigidez de nuca e fotofobia por irritação meníngea química.
- **Diagnóstico:** TC de crânio sem contraste é o primeiro exame (alta sensibilidade nas primeiras 6h); se negativa com alta suspeita, punção lombar buscando xantocromia. Causa mais comum é ruptura de aneurisma sacular — a angiografia define e trata a origem (clipagem cirúrgica ou embolização endovascular).
- 💎 **Pearl:** o vasoespasmo cerebral tardio (pico entre o 4º e o 14º dia) é a principal causa de piora neurológica secundária — nimodipina oral é usada rotineiramente como neuroproteção, não para tratar o vasoespasmo já instalado.
- ⚠️ **Pitfall:** descartar hemorragia subaracnóidea só porque a TC de crânio veio normal, sem considerar punção lombar quando a suspeita clínica é forte e o exame foi feito tardiamente (sensibilidade da TC cai após 6h).
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 🔹 Trombose venosa cerebral

- **Quando suspeitar:** cefaleia progressiva, crise convulsiva e/ou déficit focal em paciente com fator de risco protrombótico (puerpério, uso de anticoncepcional, trombofilia); pode mimetizar AVC isquêmico "que não respeita território arterial".
- **Diagnóstico:** angio-TC ou angio-RM **venosa** (não arterial).
- **Tratamento:** anticoagulação plena, mesmo na presença de transformação hemorrágica associada.
- ⚠️ **Pitfall:** rotular todo déficit neurológico agudo com infarto "atípico" na imagem como AVC arterial, sem pensar em trombose venosa cerebral — a anticoagulação (correta para trombose venosa) seria contraindicada num raciocínio de AVC hemorrágico arterial.
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento.

## 📚 Referências essenciais

- Diretriz AHA/ASA para manejo do AVC isquêmico agudo e para hemorragia subaracnóidea aneurismática.
- Trials CHANCE e POINT — dupla antiagregação em AVC minor e AIT de alto risco.
- IDSA Guidelines — Management of Encephalitis e Management of Bacterial Meningitis.
- Consenso internacional de encefalites autoimunes (Graus et al.).
- Guideline ILAE/Neurocritical Care Society para status epilepticus.
`;

export default content.trim();
