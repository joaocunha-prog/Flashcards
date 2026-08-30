/**
 * Resumo — Infectologia · Doenças tropicais e negligenciadas.
 *
 * Reorganizado por entidade clínica (cada doença tem sua própria seção com
 * quando suspeitar, diagnóstico, tratamento, pearl e pitfall juntos) — o
 * assunto reúne doenças de agentes e ciclos completamente distintos
 * (helmintos, riquétsias, retrovírus, protozoários, micobactérias), então
 * misturá-las em seções de tipo genérico (Quadro clínico, Diagnóstico,
 * Tratamento) escondia a lógica de cada uma.
 *
 * Cobre as entidades do assunto no corpus: parasitoses intestinais com
 * passagem pulmonar (síndrome de Löffler), doença da arranhadura do gato
 * com neurorretinite, estrongiloidíase disseminada (síndrome de
 * hiperinfecção), oncocercose (tratamento dos vermes adultos), febre
 * maculosa brasileira e infecção pelo HTLV-1. Também traz, como
 * extrapolação de alto rendimento além do que já apareceu em prova, as
 * demais grandes doenças tropicais negligenciadas endêmicas no Brasil que
 * ainda não caíram no corpus (doença de Chagas, leishmanioses,
 * esquistossomose e hanseníase), por serem candidatas plausíveis a provas
 * futuras dentro do mesmo assunto.
 */
const content = `
## 🎯 Essencial

- Doenças tropicais brasileiras compartilham um padrão de prova: a banca raramente pergunta "qual é a doença" isoladamente — testa **mecanismo fisiopatológico específico** (por que ivermectina não mata o verme adulto da oncocercose) ou **particularidade epidemiológica** (qual animal amplifica a febre maculosa no Brasil).
- **Imunossupressão** (sobretudo corticoide) é o gatilho comum a vigiar em duas entidades completamente diferentes deste assunto: estrongiloidíase disseminada e reativação de outras parasitoses crônicas — sempre rastrear parasitoses antes de imunossuprimir paciente de área endêmica.
- A maioria destas doenças é de **notificação compulsória** no Brasil — por isso as referências nacionais (PCDT/Ministério da Saúde) são a fonte correta aqui, diferente de temas não tropicais do banco.

## 📝 Como a banca cobra

**Doenças tropicais e negligenciadas aparece em 6 questões (2,83% do corpus)** — 4 do ENARE e 2 do EBSERH, cobrindo espectro amplo de parasitoses e infecções endêmicas brasileiras, quase sempre testando mecanismo fisiopatológico específico ou particularidade epidemiológica.

- **Síndrome de Löffler** (EBSERH 2025 Q60) testa o reconhecimento do ciclo pulmonar obrigatório de helmintos comuns.
- **Neurorretinite por doença da arranhadura do gato** (EBSERH 2026 Q52) cobra manifestação atípica e menos lembrada da bartonelose.
- **Estrongiloidíase disseminada** (ENARE 2025 Q21) explora o gatilho clássico (imunossupressão/corticoide) da síndrome de hiperinfecção.
- **Oncocercose** (ENARE 2025 Q76, questão difícil) cobra o detalhe fino de que ivermectina não elimina os vermes adultos — só a doxiciclina (via Wolbachia) faz isso.
- **Febre maculosa brasileira** (ENARE 2025 Q78) testa o papel específico da capivara como hospedeiro amplificador.
- **HTLV-1** (ENARE 2026 Q50) cobra reconhecimento das duas principais complicações tardias (ATLL e HAM-TSP) e vias de transmissão.
- **Chagas, leishmanioses, esquistossomose e hanseníase ainda não foram cobradas no corpus** — são as doenças endêmicas brasileiras de maior probabilidade de aparecer em provas futuras, dada a alta prevalência nacional e o padrão histórico de a banca varrer o espectro completo de doenças de notificação compulsória.

## 🧠 Conceito e fisiopatologia

Helmintos como *Ascaris* e *Strongyloides* têm ciclo de vida com passagem obrigatória pelos pulmões (síndrome de Löffler); *Onchocerca volvulus* depende de uma bactéria endossimbionte obrigatória (*Wolbachia*) para sobrevivência e fertilidade, o que torna a doxiciclina prolongada uma terapia indireta eficaz contra o verme adulto. Nas leishmanioses, o parasita intracelular obrigatório infecta macrófagos: na forma visceral, dissemina-se para baço, fígado e medula óssea; na forma tegumentar, a resposta imune celular exagerada contra o parasita na pele/mucosa é responsável pela destruição tecidual. HTLV-1 integra seu genoma em linfócitos T, podendo levar à transformação maligna (ATLL) décadas depois ou a resposta inflamatória crônica contra a medula espinhal (HAM-TSP).

## 🔹 Síndrome de Löffler

- **Quando suspeitar:** tosse seca, dispneia, sibilos, infiltrado pulmonar migratório transitório e eosinofilia (maior nessa fase de migração larvária do que na fase intestinal já estabelecida) — passagem pulmonar de larvas de *Ascaris lumbricoides*, *Strongyloides stercoralis*, *Ancylostoma*/*Necator*.
- **Diagnóstico:** hemograma com eosinofilia, radiografia com infiltrado migratório transitório; parasitológico de fezes pode ainda ser negativo nessa fase (larvas ainda não maduras no intestino).
- **Tratamento:** albendazol ou ivermectina conforme o parasita — quadro autolimitado, tratar a helmintíase de base.
- ⚠️ **Pitfall:** confundir com pneumonia bacteriana e tratar com antibiótico — o quadro é autolimitado e de origem parasitária.
- 📝 **Como caiu:** EBSERH 2025 Q60.

## 🔹 Estrongiloidíase disseminada (síndrome de hiperinfecção)

- **Quando suspeitar:** sepse por gram-negativos, meningite, distensão abdominal, dispneia em paciente **imunossuprimido**, sobretudo em uso de corticoide (mesmo dose baixa ou curta).
- **Mecanismo:** a imunossupressão permite que larvas rabditoides se transformem em filarioides ainda dentro do hospedeiro, autoinfectando-o em ciclo descontrolado e carreando bactérias entéricas para a corrente sanguínea.
- **Diagnóstico:** parasitológico de fezes seriado (método de Baermann-Moraes aumenta sensibilidade), sorologia, pesquisa de larvas em escarro/líquor na forma disseminada; hemoculturas para gram-negativos.
- **Tratamento:** ivermectina, curso prolongado na forma disseminada, associada a antibioticoterapia para a bacteremia secundária.
- 💎 **Pearl:** sempre rastrear (sorologia ou parasitológico seriado) e tratar estrongiloidíase antes de imunossuprimir paciente de área endêmica ou com exposição prévia a solo contaminado.
- 📝 **Como caiu:** ENARE 2025 Q21.

## 🔹 Doença da arranhadura do gato

- **Quando suspeitar:** linfadenopatia regional dolorosa após contato com gato (arranhadura/mordida); na forma atípica, **neurorretinite com "estrela macular"** (edema de disco óptico + exsudatos maculares em padrão estrelado) e perda visual unilateral.
- **Agente:** *Bartonella henselae*.
- **Diagnóstico:** predominantemente clínico, apoiado por sorologia — biópsia raramente necessária; fundoscopia confirma a estrela macular na forma com neurorretinite.
- **Tratamento:** azitromicina nos casos com indicação; formas oculares podem exigir associação com corticoide.
- 💎 **Pearl:** em paciente HIV+ com CD4 muito baixo, a mesma bactéria pode causar **angiomatose bacilar**, lesão cutânea vascular que mimetiza sarcoma de Kaposi — mesmo agente, apresentação completamente diferente conforme o status imunológico.
- 📝 **Como caiu:** EBSERH 2026 Q52 — neurorretinite.

## 🔹 Oncocercose

- **Quando suspeitar:** nódulos subcutâneos (oncocercomas), prurido intenso, lesões cutâneas crônicas, ceratite/lesões oculares (principal causa infecciosa de cegueira evitável em áreas endêmicas).
- **Diagnóstico:** biópsia cutânea superficial ("skin snip") mostrando microfilárias; sorologia como triagem em áreas de baixa endemicidade.
- **Tratamento:** **ivermectina periódica mata as microfilárias, mas não os vermes adultos** — para eliminá-los, usa-se **doxiciclina prolongada**, que age indiretamente ao eliminar a bactéria simbionte *Wolbachia*, essencial à sobrevivência e fertilidade do verme adulto.
- ⚠️ **Pitfall:** achar que ivermectina isolada "cura" a doença ao eliminar os vermes adultos — ela só age nas microfilárias; tratar só com ivermectina controla sintomas mas não é curativo.
- 📝 **Como caiu:** ENARE 2025 Q76 (difícil) — tratamento dos vermes adultos.

## 🔹 Febre maculosa brasileira

- **Quando suspeitar:** febre alta, cefaleia, mialgia, exantema maculopapular centrípeto que evolui para petéquias, história de exposição a carrapatos em área de risco.
- **Agente e vetor:** *Rickettsia rickettsii*, transmitida pelo carrapato-estrela (*Amblyomma sculptum*/*cajennense*); a **capivara** é o principal hospedeiro amplificador no Brasil, mantendo populações de carrapatos infectados em áreas de risco.
- **Diagnóstico:** sorologia (imunofluorescência indireta, com soroconversão ou aumento de 4x no título) confirma retrospectivamente — **o tratamento nunca deve aguardar esse resultado**.
- **Tratamento:** **doxiciclina empírica imediata** diante da suspeita clínica, sem aguardar confirmação laboratorial — inclusive em crianças e gestantes, dado o risco de óbito.
- ⚠️ **Pitfall:** atribuir a doença apenas a "picada de carrapato" sem lembrar do papel específico da capivara como hospedeiro amplificador em áreas de risco no Brasil.
- 📝 **Como caiu:** ENARE 2025 Q78 — hospedeiro amplificador.

## 🔹 Infecção pelo HTLV-1

- **Quando suspeitar:** a maioria das infecções é **assintomática ao longo da vida** — apenas uma minoria evolui para leucemia/linfoma de células T do adulto (**ATLL**) ou mielopatia associada ao HTLV (**paraparesia espástica tropical/HAM-TSP**), geralmente décadas após a infecção.
- **Transmissão:** principalmente por amamentação prolongada, relação sexual, transfusão e compartilhamento de agulhas — a principal medida de prevenção vertical é a **contraindicação do aleitamento materno** em mãe HTLV-1 positiva.
- **Diagnóstico:** sorologia (ELISA) como triagem, Western blot ou PCR como confirmatório; carga proviral auxilia na avaliação de risco de progressão.
- **Tratamento:** não há antirretroviral específico eficaz; manejo de suporte e tratamento das complicações (quimioterapia na ATLL, imunomodulação na HAM-TSP).
- ⚠️ **Pitfall:** achar que todo paciente HTLV-1 positivo desenvolverá leucemia ou mielopatia — a maioria permanece assintomática.
- 📝 **Como caiu:** ENARE 2026 Q50.

## 🔹 Doença de Chagas

- **Quando suspeitar:** fase aguda geralmente assintomática ou febril inespecífica (**sinal de Romaña** — edema bipalpebral unilateral — ou chagoma de inoculação, quando há porta de entrada visível); fase crônica **indeterminada** (a mais comum, assintomática, sorologia positiva), **cardíaca** (miocardiopatia dilatada, bloqueio de ramo direito, arritmias) e **digestiva** (megaesôfago com disfagia, megacólon com constipação).
- **Diagnóstico:** parasitológico direto (gota espessa) na fase aguda; sorologia (dois testes de princípios distintos) na fase crônica.
- **Tratamento:** **benznidazol** (ou nifurtimox) indicado na fase aguda, em reativação e em crianças/mulheres em idade fértil; na fase crônica estabelecida o benefício é mais discutido e a decisão é individualizada.
- ⚠️ **Pitfall:** não pensar em Chagas crônica diante de miocardiopatia dilatada ou megaesôfago/megacólon em paciente com história epidemiológica compatível (área rural endêmica, transfusão antiga).
- 📝 **Como caiu:** ainda não cobrado no corpus — candidato natural de alto rendimento pela prevalência nacional.

## 🔹 Leishmanioses

- **Visceral (calazar):** febre prolongada, hepatoesplenomegalia e **pancitopenia** — importante diferencial de doença hematológica/linfoproliferativa em área endêmica; causada por *Leishmania infantum*, transmitida pelo mosquito-palha (*Lutzomyia*). Diagnóstico por sorologia (rK39) ou pesquisa direta do parasita em aspirado de medula óssea/baço. Tratamento com antimoniato de meglumina ou anfotericina B lipossomal (preferida em gestantes, imunossuprimidos e casos graves).
- **Tegumentar:** úlceras cutâneas de bordas elevadas e fundo granuloso, ou lesões mucosas destrutivas em forma mais avançada.
- ⚠️ **Pitfall:** deixar de solicitar sorologia para leishmaniose visceral em paciente com febre prolongada + pancitopenia + esplenomegalia em área endêmica, focando só em diagnósticos hematológicos.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Esquistossomose mansoni

- **Forma aguda (febre de Katayama):** semanas após exposição a água doce contaminada — febre, urticária, hepatoesplenomegalia e eosinofilia acentuada, quadro de hipersensibilidade sistêmica à migração do esquistossômulo.
- **Forma crônica hepatoesplênica:** fibrose periportal ("em cano de cachimbo") com hipertensão portal **pré-sinusoidal** — hepatomegalia e esplenomegalia com função hepatocelular preservada (transaminases normais), diferente da hipertensão portal cirrótica.
- **Diagnóstico:** parasitológico de fezes (método de Kato-Katz) para ovos viáveis; sorologia útil em fase aguda ou baixa carga parasitária, antes da eliminação de ovos nas fezes.
- **Tratamento:** praziquantel em dose única, eficaz contra o verme adulto (não age sobre os esquistossômulos migrantes, daí a possibilidade de indicar segunda dose semanas depois na febre de Katayama).
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 🔹 Hanseníase

- **Quando suspeitar:** manchas hipocrômicas ou eritematosas com alteração de sensibilidade (térmica, dolorosa, tátil, nessa ordem de perda) na forma **paucibacilar**; lesões infiltrativas difusas e espessamento de nervos periféricos na forma **multibacilar**.
- **Classificação operacional:** paucibacilar (até 5 lesões de pele) vs. multibacilar (mais de 5) — define diretamente a duração do tratamento; na incerteza, trata-se como multibacilar.
- **Reações hansênicas:** tipo 1 (reação reversa, piora aguda das lesões — corticoide em altas doses protege a função neural) e tipo 2 (eritema nodoso hansênico, nódulos dolorosos e febre — **talidomida** é altamente eficaz, mas exige contracepção rigorosa em mulheres em idade fértil pelo risco teratogênico bem documentado, focomelia).
- **Tratamento:** poliquimioterapia padronizada (rifampicina, dapsona e clofazimina) por 6 meses na forma paucibacilar e 12 meses na multibacilar.
- ⚠️ **Pitfall:** adiar o início do tratamento por dúvida na classificação operacional — a conduta padrão na incerteza é tratar como multibacilar.
- 📝 **Como caiu:** ainda não cobrado no corpus.

## 📚 Referências essenciais

- CDC — Guidelines for Diagnosis and Treatment of Strongyloidiasis and Onchocerciasis.
- WHO — Guidelines on the Diagnosis, Treatment and Prevention of HTLV-1 Related Diseases.
- Ministério da Saúde — Guia de Vigilância em Saúde (febre maculosa brasileira e demais rickettsioses, doença de notificação compulsória no Brasil).
- Ministério da Saúde — Guia de Vigilância em Saúde e Manual de Vigilância e Controle da Leishmaniose Visceral/Tegumentar; Consenso Brasileiro de Doença de Chagas e PCDT de Esquistossomose (protocolos nacionais para leishmanioses, Chagas e esquistossomose mansoni).
- Ministério da Saúde — Diretrizes para Vigilância, Atenção e Eliminação da Hanseníase (PCDT Hanseníase).
`;

export default content.trim();
