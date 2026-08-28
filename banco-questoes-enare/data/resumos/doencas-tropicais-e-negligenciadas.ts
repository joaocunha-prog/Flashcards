/**
 * Resumo — Infectologia · Doenças tropicais e negligenciadas.
 *
 * Cobre as entidades do assunto no corpus: parasitoses intestinais com
 * passagem pulmonar (síndrome de Löffler), doença da arranhadura do gato
 * com neurorretinite, estrongiloidíase disseminada (síndrome de
 * hiperinfecção), oncocercose (tratamento dos vermes adultos), febre
 * maculosa brasileira e infecção pelo HTLV-1.
 */
const content = `
## 🎯 Essencial

- **Síndrome de Löffler:** passagem pulmonar de larvas de helmintos (Ascaris lumbricoides, Strongyloides stercoralis, Ancylostoma/Necator) causa tosse seca, dispneia, infiltrado pulmonar migratório e eosinofilia — quadro autolimitado, típico do ciclo pulmonar obrigatório desses parasitas.
- **Estrongiloidíase disseminada (síndrome de hiperinfecção):** ocorre em imunossuprimidos, sobretudo em uso de corticoide (mesmo dose baixa ou curta) — larvas invadem múltiplos órgãos e carreiam bactérias entéricas, causando sepse/meningite por gram-negativos. Rastrear e tratar estrongiloidíase antes de imunossuprimir paciente de área endêmica.
- **Doença da arranhadura do gato (Bartonella henselae):** neurorretinite com "estrela macular" (edema de disco óptico + exsudatos maculares em padrão estrelado) é manifestação atípica clássica, além do quadro típico de linfadenopatia regional após arranhadura/mordida de gato.
- **Oncocercose:** ivermectina mata microfilárias, mas **não** os vermes adultos — para eliminá-los (nos nódulos subcutâneos), usa-se **doxiciclina prolongada**, que age indiretamente ao eliminar a bactéria simbionte **Wolbachia**, essencial à sobrevivência e fertilidade do verme adulto.
- **Febre maculosa brasileira (Rickettsia rickettsii):** transmitida pelo carrapato-estrela (Amblyomma sculptum/cajennense); a **capivara** é o principal hospedeiro amplificador no Brasil, mantendo populações de carrapatos infectados em áreas de risco.
- **HTLV-1:** retrovírus associado a leucemia/linfoma de células T do adulto (ATLL) e a mielopatia associada ao HTLV (paraparesia espástica tropical/HAM-TSP); transmissão principalmente por amamentação prolongada, relação sexual, transfusão e compartilhamento de agulhas.

## 💎 Pearls

- A eosinofilia costuma ser maior na fase de migração larvária pulmonar (Löffler) do que na fase intestinal já estabelecida da helmintíase.
- Corticoide sistêmico é o gatilho mais clássico de hiperinfecção por Strongyloides — sempre rastrear (sorologia ou parasitológico de fezes seriado) antes de imunossupressão em paciente de área endêmica ou com exposição prévia a solo contaminado.
- Neurorretinite por bartonelose é diagnóstico predominantemente clínico, apoiado por sorologia — biópsia raramente necessária.
- Tratar oncocercose só com ivermectina controla sintomas (reduz carga de microfilárias) mas não é curativo, pois os vermes adultos seguem vivos e produzindo novas microfilárias.
- A maioria das infecções por HTLV-1 é assintomática ao longo da vida — apenas uma minoria evolui para ATLL ou HAM-TSP, geralmente décadas após a infecção.

## ⚠️ Pitfalls

- Confundir síndrome de Löffler com pneumonia bacteriana e tratar com antibiótico — o quadro é autolimitado e de origem parasitária.
- Prescrever corticoide em paciente de área endêmica sem rastrear/tratar estrongiloidíase previamente — risco de síndrome de hiperinfecção fatal.
- Achar que ivermectina isolada "cura" a oncocercose ao eliminar os vermes adultos — ela só age nas microfilárias.
- Atribuir febre maculosa apenas a "picada de carrapato" sem lembrar do papel específico da capivara como hospedeiro amplificador em áreas de risco no Brasil.
- Achar que todo paciente HTLV-1 positivo desenvolverá leucemia ou mielopatia — a maioria permanece assintomática.

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

## 🩺 Quadro clínico

- **Síndrome de Löffler:** tosse seca, dispneia, sibilos, infiltrado pulmonar migratório transitório, eosinofilia.
- **Estrongiloidíase disseminada:** sepse por gram-negativos, meningite, distensão abdominal, dispneia, em paciente imunossuprimido.
- **Doença da arranhadura do gato:** linfadenopatia regional dolorosa após contato com gato; na forma atípica, neurorretinite com perda visual unilateral e estrela macular.
- **Oncocercose:** nódulos subcutâneos (oncocercomas), prurido intenso, lesões cutâneas crônicas, ceratite/lesões oculares (principal causa infecciosa de cegueira evitável em áreas endêmicas).
- **Febre maculosa brasileira:** febre alta, cefaleia, mialgia, exantema maculopapular centrípeto que evolui para petéquias, história de exposição a carrapatos em área de risco.
- **HTLV-1:** maioria assintomática; ATLL com linfadenopatia, hipercalcemia, lesões cutâneas; HAM-TSP com paraparesia espástica progressiva.

## 💊 Tratamento

- Helmintíases com fase pulmonar: albendazol ou ivermectina conforme o parasita.
- Estrongiloidíase (incluindo hiperinfecção): ivermectina, curso prolongado na forma disseminada, associado a antibioticoterapia para a bacteremia secundária.
- Doença da arranhadura do gato: azitromicina nos casos com indicação de tratamento; formas oculares podem exigir associação com corticoide.
- Oncocercose: ivermectina periódica (microfilaricida) + doxiciclina prolongada (elimina vermes adultos via Wolbachia).
- Febre maculosa brasileira: doxiciclina empírica imediata diante da suspeita clínica, sem aguardar confirmação laboratorial.
- HTLV-1: não há tratamento antirretroviral específico eficaz; manejo de suporte e tratamento das complicações (quimioterapia na ATLL, imunomodulação na HAM-TSP).

## 📚 Referências essenciais

- Guia de Vigilância em Saúde — Ministério da Saúde (capítulos de febre maculosa, estrongiloidíase e oncocercose).
- CDC — Guidelines for Diagnosis and Treatment of Strongyloidiasis and Onchocerciasis.
- WHO — Guidelines on the Diagnosis, Treatment and Prevention of HTLV-1 Related Diseases.
`;

export default content.trim();
