/**
 * Resumo — Infectologia · Doenças tropicais e negligenciadas.
 *
 * Cobre as entidades do assunto no corpus: parasitoses intestinais com
 * passagem pulmonar (síndrome de Löffler), doença da arranhadura do gato
 * com neurorretinite, estrongiloidíase disseminada (síndrome de
 * hiperinfecção), oncocercose (tratamento dos vermes adultos), febre
 * maculosa brasileira e infecção pelo HTLV-1. Também traz, como
 * extrapolação de alto rendimento além do que já caiu em prova, as demais
 * grandes doenças tropicais negligenciadas endêmicas no Brasil que ainda
 * não apareceram no corpus (doença de Chagas, leishmanioses,
 * esquistossomose e hanseníase), por serem candidatas plausíveis a provas
 * futuras dentro do mesmo assunto.
 */
const content = `
## 🎯 Essencial

- **Síndrome de Löffler:** passagem pulmonar de larvas de helmintos (Ascaris lumbricoides, Strongyloides stercoralis, Ancylostoma/Necator) causa tosse seca, dispneia, infiltrado pulmonar migratório e eosinofilia — quadro autolimitado, típico do ciclo pulmonar obrigatório desses parasitas.
- **Estrongiloidíase disseminada (síndrome de hiperinfecção):** ocorre em imunossuprimidos, sobretudo em uso de corticoide (mesmo dose baixa ou curta) — larvas invadem múltiplos órgãos e carreiam bactérias entéricas, causando sepse/meningite por gram-negativos. Rastrear e tratar estrongiloidíase antes de imunossuprimir paciente de área endêmica.
- **Doença da arranhadura do gato (Bartonella henselae):** neurorretinite com "estrela macular" (edema de disco óptico + exsudatos maculares em padrão estrelado) é manifestação atípica clássica, além do quadro típico de linfadenopatia regional após arranhadura/mordida de gato.
- **Oncocercose:** ivermectina mata microfilárias, mas **não** os vermes adultos — para eliminá-los (nos nódulos subcutâneos), usa-se **doxiciclina prolongada**, que age indiretamente ao eliminar a bactéria simbionte **Wolbachia**, essencial à sobrevivência e fertilidade do verme adulto.
- **Febre maculosa brasileira (Rickettsia rickettsii):** transmitida pelo carrapato-estrela (Amblyomma sculptum/cajennense); a **capivara** é o principal hospedeiro amplificador no Brasil, mantendo populações de carrapatos infectados em áreas de risco.
- **HTLV-1:** retrovírus associado a leucemia/linfoma de células T do adulto (ATLL) e a mielopatia associada ao HTLV (paraparesia espástica tropical/HAM-TSP); transmissão principalmente por amamentação prolongada, relação sexual, transfusão e compartilhamento de agulhas.
- Outras doenças tropicais negligenciadas endêmicas no Brasil, ainda não cobradas no corpus mas de alto rendimento pela prevalência nacional: **doença de Chagas** (aguda e crônica, cardiopatia e megassíndromes), **leishmanioses** (visceral e tegumentar), **esquistossomose mansoni** (forma hepatoesplênica, febre de Katayama) e **hanseníase** (classificação operacional e reações hansênicas).

## 💎 Pearls

- A eosinofilia costuma ser maior na fase de migração larvária pulmonar (Löffler) do que na fase intestinal já estabelecida da helmintíase.
- Corticoide sistêmico é o gatilho mais clássico de hiperinfecção por Strongyloides — sempre rastrear (sorologia ou parasitológico de fezes seriado) antes de imunossupressão em paciente de área endêmica ou com exposição prévia a solo contaminado.
- Neurorretinite por bartonelose é diagnóstico predominantemente clínico, apoiado por sorologia — biópsia raramente necessária. Em paciente HIV+ com CD4 muito baixo, a mesma bactéria pode causar **angiomatose bacilar**, lesão cutânea vascular que mimetiza sarcoma de Kaposi.
- Tratar oncocercose só com ivermectina controla sintomas (reduz carga de microfilárias) mas não é curativo, pois os vermes adultos seguem vivos e produzindo novas microfilárias.
- A maioria das infecções por HTLV-1 é assintomática ao longo da vida — apenas uma minoria evolui para ATLL ou HAM-TSP, geralmente décadas após a infecção. A principal medida de prevenção vertical é a **contraindicação do aleitamento materno** em mãe HTLV-1 positiva.
- **Doença de Chagas aguda** classicamente tem porta de entrada visível (sinal de Romaña — edema bipalpebral unilateral — ou chagoma de inoculação); a forma crônica indeterminada é a mais comum, e a forma cardíaca (miocardiopatia dilatada, bloqueio de ramo direito) e a digestiva (megaesôfago, megacólon) definem a maior morbimortalidade tardia.
- **Leishmaniose visceral (calazar)**, causada por Leishmania infantum e transmitida pelo mosquito-palha (Lutzomyia), cursa com febre prolongada, hepatoesplenomegalia e pancitopenia — importante diferencial de doença hematológica/linfoproliferativa em área endêmica.
- **Esquistossomose mansoni** na forma hepatoesplênica causa fibrose periportal ("em cano de cachimbo") com hipertensão portal pré-sinusoidal — hepatomegalia e esplenomegalia com função hepatocelular preservada (transaminases normais), diferente da hipertensão portal cirrótica.
- **Febre de Katayama** é a forma aguda da esquistossomose (semanas após exposição a água doce contaminada), com febre, urticária, hepatoesplenomegalia e eosinofilia acentuada — quadro de hipersensibilidade sistêmica à migração do esquistossômulo.
- A classificação operacional da hanseníase (paucibacilar até 5 lesões de pele, multibacilar mais de 5) define diretamente a duração do tratamento — é a informação prática mais cobrada sobre a doença em provas de clínica geral/infectologia.
- Talidomida é altamente eficaz na reação hansênica tipo 2 (eritema nodoso hansênico), mas seu uso exige contracepção rigorosa em mulheres em idade fértil pelo risco teratogênico bem documentado (focomelia).

## ⚠️ Pitfalls

- Confundir síndrome de Löffler com pneumonia bacteriana e tratar com antibiótico — o quadro é autolimitado e de origem parasitária.
- Prescrever corticoide em paciente de área endêmica sem rastrear/tratar estrongiloidíase previamente — risco de síndrome de hiperinfecção fatal.
- Achar que ivermectina isolada "cura" a oncocercose ao eliminar os vermes adultos — ela só age nas microfilárias.
- Atribuir febre maculosa apenas a "picada de carrapato" sem lembrar do papel específico da capivara como hospedeiro amplificador em áreas de risco no Brasil.
- Achar que todo paciente HTLV-1 positivo desenvolverá leucemia ou mielopatia — a maioria permanece assintomática.
- Não pensar em doença de Chagas crônica diante de miocardiopatia dilatada ou megaesôfago/megacólon em paciente com história epidemiológica compatível (área rural endêmica, transfusão antiga).
- Adiar o início da poliquimioterapia da hanseníase por dúvida na classificação operacional — na incerteza entre paucibacilar e multibacilar, a conduta padrão é tratar como multibacilar (maior segurança terapêutica).
- Deixar de solicitar sorologia para leishmaniose visceral em paciente com febre prolongada + pancitopenia + esplenomegalia em área endêmica, focando só em diagnósticos hematológicos.

## 📝 Como a banca cobra

**Doenças tropicais e negligenciadas aparece em 6 questões (2,83% do corpus)** — 4 do ENARE e 2 do EBSERH, cobrindo espectro amplo de parasitoses e infecções endêmicas brasileiras, quase sempre testando mecanismo fisiopatológico específico ou particularidade epidemiológica.

- **Síndrome de Löffler** (EBSERH 2025 Q60) testa o reconhecimento do ciclo pulmonar obrigatório de helmintos comuns.
- **Neurorretinite por doença da arranhadura do gato** (EBSERH 2026 Q52) cobra manifestação atípica e menos lembrada da bartonelose.
- **Estrongiloidíase disseminada** (ENARE 2025 Q21) explora o gatilho clássico (imunossupressão/corticoide) da síndrome de hiperinfecção.
- **Oncocercose** (ENARE 2025 Q76, questão difícil) cobra o detalhe fino de que ivermectina não elimina os vermes adultos — só a doxiciclina (via Wolbachia) faz isso.
- **Febre maculosa brasileira** (ENARE 2025 Q78) testa o papel específico da capivara como hospedeiro amplificador.
- **HTLV-1** (ENARE 2026 Q50) cobra reconhecimento das duas principais complicações tardias (ATLL e HAM-TSP) e vias de transmissão.

## 🧠 Conceito e fisiopatologia

Helmintos como Ascaris e Strongyloides têm ciclo de vida com passagem obrigatória pelos pulmões: larvas penetram a mucosa intestinal (ou a pele, no caso de Strongyloides), migram pela circulação até os alvéolos, sobem pela árvore brônquica e são novamente deglutidas para completar a maturação no intestino — a reação inflamatória eosinofílica a essa migração pulmonar é a síndrome de Löffler.

Na hiperinfecção por Strongyloides, a imunossupressão (sobretudo por corticoide, que suprime a resposta Th2 protetora) permite que larvas rabditoides se transformem em filarioides ainda dentro do hospedeiro, autoinfectando-o em ciclo descontrolado e disseminando-se para múltiplos órgãos, carreando bactérias entéricas para a corrente sanguínea.

Onchocerca volvulus depende de uma bactéria endossimbionte obrigatória, Wolbachia, para sua sobrevivência, fertilidade e produção de microfilárias — eliminar a bactéria com doxiciclina prolongada esteriliza e eventualmente mata os vermes adultos, complementando o efeito microfilaricida da ivermectina.

HTLV-1 integra seu genoma em linfócitos T, podendo levar à transformação maligna (ATLL, via proteína viral Tax) décadas depois, ou a uma resposta imune inflamatória crônica contra a medula espinhal (HAM-TSP).

Nas leishmanioses, o parasita intracelular obrigatório infecta macrófagos: na forma visceral, dissemina-se para baço, fígado e medula óssea, gerando hiperplasia do sistema reticuloendotelial (esplenomegalia maciça) e supressão medular (pancitopenia); na forma tegumentar, a resposta imune celular exagerada contra o parasita na pele/mucosa é responsável pela destruição tecidual (úlceras, lesões mucosas destrutivas).

## 🩺 Quadro clínico

- **Síndrome de Löffler:** tosse seca, dispneia, sibilos, infiltrado pulmonar migratório transitório, eosinofilia.
- **Estrongiloidíase disseminada:** sepse por gram-negativos, meningite, distensão abdominal, dispneia, em paciente imunossuprimido.
- **Doença da arranhadura do gato:** linfadenopatia regional dolorosa após contato com gato; na forma atípica, neurorretinite com perda visual unilateral e estrela macular.
- **Oncocercose:** nódulos subcutâneos (oncocercomas), prurido intenso, lesões cutâneas crônicas, ceratite/lesões oculares (principal causa infecciosa de cegueira evitável em áreas endêmicas).
- **Febre maculosa brasileira:** febre alta, cefaleia, mialgia, exantema maculopapular centrípeto que evolui para petéquias, história de exposição a carrapatos em área de risco.
- **HTLV-1:** maioria assintomática; ATLL com linfadenopatia, hipercalcemia, lesões cutâneas; HAM-TSP com paraparesia espástica progressiva.
- **Doença de Chagas:** aguda, geralmente assintomática ou febril inespecífica (sinal de Romaña quando há porta de entrada ocular); crônica indeterminada (assintomática, sorologia positiva); crônica cardíaca (arritmias, insuficiência cardíaca) e digestiva (disfagia por megaesôfago, constipação por megacólon).
- **Leishmaniose visceral:** febre arrastada, emagrecimento, hepatoesplenomegalia, pancitopenia, hipergamaglobulinemia.
- **Esquistossomose mansoni:** forma aguda (febre de Katayama) com febre, urticária e eosinofilia semanas após exposição a água doce; forma crônica hepatoesplênica com hepatoesplenomegalia e sinais de hipertensão portal (varizes, ascite) com transaminases preservadas.
- **Hanseníase:** manchas hipocrômicas ou eritematosas com alteração de sensibilidade (térmica, dolorosa, tátil, nessa ordem de perda) na forma paucibacilar; lesões infiltrativas difusas e espessamento de nervos periféricos na forma multibacilar; reações hansênicas (tipo 1 — reação reversa, com piora aguda das lesões; tipo 2 — eritema nodoso hansênico, com nódulos dolorosos e febre) podem ocorrer durante ou após o tratamento.

## 🔎 Diagnóstico

- **Síndrome de Löffler:** hemograma com eosinofilia, radiografia de tórax com infiltrado migratório transitório, escarro/lavado broncoalveolar podendo mostrar larvas ou cristais de Charcot-Leyden; parasitológico de fezes pode ainda ser negativo nessa fase (larvas ainda não maduras no intestino).
- **Estrongiloidíase disseminada:** parasitológico de fezes seriado (método de Baermann-Moraes aumenta sensibilidade), sorologia, pesquisa de larvas em escarro/líquor na forma disseminada; hemoculturas para gram-negativos pela translocação bacteriana associada.
- **Doença da arranhadura do gato:** sorologia para Bartonella henselae, PCR de tecido linfonodal em casos duvidosos; fundoscopia confirma a estrela macular na forma com neurorretinite.
- **Oncocercose:** biópsia cutânea superficial ("skin snip") mostrando microfilárias, exame de nódulos subcutâneos excisados, sorologia como triagem em áreas de baixa endemicidade.
- **Febre maculosa brasileira:** sorologia (imunofluorescência indireta, com soroconversão ou aumento de 4x no título) confirma retrospectivamente — tratamento nunca deve aguardar esse resultado.
- **HTLV-1:** sorologia (ELISA) como triagem, Western blot ou PCR como confirmatório; carga proviral auxilia na avaliação de risco de progressão.
- **Doença de Chagas:** parasitológico direto (gota espessa) na fase aguda; sorologia (dois testes de princípios distintos) na fase crônica.
- **Leishmaniose visceral:** sorologia (rK39), pesquisa direta do parasita em aspirado de medula óssea ou baço.
- **Esquistossomose mansoni:** parasitológico de fezes (método de Kato-Katz) para ovos viáveis; sorologia útil em fase aguda ou baixa carga parasitária, antes da eliminação de ovos nas fezes.
- **Hanseníase:** exame dermatoneurológico com teste de sensibilidade nas lesões, baciloscopia (pesquisa de bacilo álcool-ácido resistente em esfregaço de lóbulo auricular/lesão), biópsia de pele em casos duvidosos.

## 💊 Tratamento

- Helmintíases com fase pulmonar: albendazol ou ivermectina conforme o parasita.
- Estrongiloidíase (incluindo hiperinfecção): ivermectina, curso prolongado na forma disseminada, associado a antibioticoterapia para a bacteremia secundária.
- Doença da arranhadura do gato: azitromicina nos casos com indicação de tratamento; formas oculares podem exigir associação com corticoide.
- Oncocercose: ivermectina periódica (microfilaricida) + doxiciclina prolongada (elimina vermes adultos via Wolbachia).
- Febre maculosa brasileira: doxiciclina empírica imediata diante da suspeita clínica, sem aguardar confirmação laboratorial — inclusive em crianças e gestantes, dado o risco de óbito.
- HTLV-1: não há tratamento antirretroviral específico eficaz; manejo de suporte e tratamento das complicações (quimioterapia na ATLL, imunomodulação na HAM-TSP).
- Doença de Chagas: benznidazol (ou nifurtimox) é indicado na fase aguda, em reativação e em crianças/mulheres em idade fértil; na fase crônica estabelecida o benefício é mais discutido e a decisão é individualizada.
- Leishmaniose visceral: antimoniato de meglumina ou anfotericina B lipossomal (preferida em gestantes, imunossuprimidos e casos graves).
- Esquistossomose mansoni: praziquantel em dose única, eficaz contra o verme adulto (não age sobre os esquistossômulos migrantes, daí a possibilidade de indicar segunda dose semanas depois na febre de Katayama).
- Hanseníase: poliquimioterapia padronizada (rifampicina, dapsona e clofazimina) por 6 meses na forma paucibacilar e 12 meses na multibacilar; corticoide em altas doses no manejo das reações hansênicas tipo 1 (proteção neural) e tipo 2 mais leve, com talidomida como alternativa eficaz na reação tipo 2 (contraindicada em mulheres em idade fértil sem contracepção rigorosa).

## 📚 Referências essenciais

- CDC — Guidelines for Diagnosis and Treatment of Strongyloidiasis and Onchocerciasis.
- WHO — Guidelines on the Diagnosis, Treatment and Prevention of HTLV-1 Related Diseases.
- Ministério da Saúde — Guia de Vigilância em Saúde (febre maculosa brasileira e demais rickettsioses, doença de notificação compulsória no Brasil).
- Ministério da Saúde — Guia de Vigilância em Saúde e Manual de Vigilância e Controle da Leishmaniose Visceral/Tegumentar; Consenso Brasileiro de Doença de Chagas e PCDT de Esquistossomose (protocolos nacionais para leishmanioses, Chagas e esquistossomose mansoni).
- Ministério da Saúde — Diretrizes para Vigilância, Atenção e Eliminação da Hanseníase (PCDT Hanseníase).
`;

export default content.trim();
