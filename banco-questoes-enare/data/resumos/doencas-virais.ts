/**
 * Resumo — Infectologia · Doenças virais.
 *
 * Assunto de baixa incidência no corpus (1 questão real, cauda longa, fora
 * do corte 80/20): ENARE 2025 Q14 (mononucleose infecciosa por
 * Epstein-Barr, interpretação de sorologia). O resumo aprofunda a
 * mononucleose infecciosa — a entidade realmente cobrada — como eixo
 * central, com a interpretação sorológica do EBV, diagnóstico diferencial
 * da síndrome mononucleose-símile e as complicações clássicas de prova
 * (ruptura esplênica, exantema por amoxicilina, doenças associadas ao
 * EBV). Outras arboviroses e doenças exantemáticas têm assunto próprio no
 * banco — aqui o foco é o conteúdo realmente coberto pela questão real.
 */
const content = `
## 🎯 Essencial

- **Mononucleose infecciosa é a apresentação clássica da infecção aguda pelo vírus Epstein-Barr (EBV)** — tríade clássica de febre, faringoamigdalite exsudativa e linfadenopatia (classicamente cervical posterior, ao longo do músculo esternocleidomastóideo), associada a fadiga marcante e, com frequência, esplenomegalia e hepatomegalia leve.
- **Rash maculopapular difuso após exposição a amoxicilina/ampicilina em paciente com faringite é um sinal clássico e quase patognomônico de mononucleose por EBV** — não é alergia à penicilina verdadeira, e sim uma reação farmacológica específica da infecção aguda por EBV (mecanismo não totalmente esclarecido, envolve resposta imune exacerbada); não contraindica uso futuro de penicilínicos.
- **A sorologia certa depende da fase da doença**: anticorpos IgM anti-VCA (antígeno do capsídeo viral) marcam infecção aguda/recente; IgG anti-VCA aparece já na fase aguda e persiste a vida toda (contato prévio); **anti-EBNA (antígeno nuclear) só aparece semanas a meses após a infecção aguda e persiste por toda a vida** — por isso IgG anti-VCA e anti-EBNA positivos ao mesmo tempo indicam infecção antiga, não em curso, enquanto IgM anti-VCA positivo com anti-EBNA ainda negativo é o padrão mais específico de infecção aguda.
- **O teste heterófilo (Monospot/reação de Paul-Bunnell) tem sensibilidade baixa em crianças pequenas e nas primeiras semanas de sintomas** — um resultado negativo não descarta mononucleose, especialmente no início do quadro ou em criança pequena; repetir ou complementar com sorologia específica anti-VCA/EBNA quando a suspeita clínica persiste.
- **Esplenomegalia é a base do principal risco da doença: ruptura esplênica** — orientação padrão é evitar esportes de contato e atividade física vigorosa por pelo menos 3-4 semanas do início dos sintomas, independentemente de o baço estar palpável ou não ao exame.

## 💎 Pearls

- Linfocitose com **linfócitos atípicos** (linfócitos T CD8+ reativos, não as células B infectadas propriamente) é achado hematológico característico, mas inespecífico — também ocorre em outras causas de síndrome mononucleose-símile.
- **Síndrome mononucleose-símile tem diagnóstico diferencial amplo**: citomegalovírus (clinicamente muito parecida, mas com faringite tipicamente menos proeminente), toxoplasmose aguda, primoinfecção pelo HIV (síndrome retroviral aguda), e mais raramente HHV-6/7, adenovírus e rubéola.
- O EBV está classicamente associado a neoplasias específicas: **linfoma de Burkitt** (forma endêmica africana, translocação envolvendo *MYC*), **carcinoma nasofaríngeo**, doença linfoproliferativa pós-transplante (**PTLD**) e alguns linfomas de Hodgkin — relevante em paciente imunossuprimido com massa/adenopatia atípica.
- **Doença linfoproliferativa ligada ao X (síndrome de Duncan/XLP)** é causa rara e grave de resposta descontrolada à infecção primária por EBV em meninos com defeito genético específico — deve ser lembrada diante de mononucleose fulminante/fatal em criança do sexo masculino, sobretudo com história familiar sugestiva.
- Hepatomegalia leve com elevação discreta de transaminases é comum na mononucleose e não indica, por si só, outra hepatopatia — mas hepatimetria aumentada e dor abdominal, como no caso clássico de prova, reforçam o diagnóstico, sem precisar de investigação hepática extensa adicional se o quadro for típico.
- A cervicalgia com linfonodomegalia **posterior** ao esternocleidomastóideo (cadeia cervical posterior) é mais sugestiva de mononucleose do que a linfonodomegalia puramente anterior/submandibular, mais típica de faringoamigdalite bacteriana isolada.

## ⚠️ Pitfalls

- Assumir que um teste heterófilo/Monospot negativo isolado encerra a investigação — especialmente em criança pequena ou fase muito inicial da doença, a sensibilidade é baixa; deve-se prosseguir com sorologia específica (IgM/IgG anti-VCA, anti-EBNA) diante de forte suspeita clínica.
- Interpretar IgG anti-VCA e anti-EBNA positivos como infecção ativa — esse padrão reflete **contato prévio/imunidade estabelecida**, não doença em curso; o marcador de infecção aguda é IgM anti-VCA, idealmente com anti-EBNA ainda negativo/em ascensão.
- Manter o paciente com liberação irrestrita de atividade física/esporte de contato só porque o baço não é palpável ao exame — o risco de ruptura esplênica existe mesmo sem esplenomegalia detectável clinicamente, e a orientação de restrição segue o tempo de doença, não o achado de exame físico isolado.
- Reintroduzir amoxicilina/ampicilina assumindo alergia real à penicilina depois de um exantema durante mononucleose — é reação específica da infecção aguda por EBV, não hipersensibilidade IgE-mediada, e não contraindica penicilínicos fora desse contexto.
- Não considerar diagnósticos diferenciais graves (doença de Lemierre, por exemplo) diante de faringoamigdalite que não responde ao antibiótico com sinais de alarme (piora progressiva apesar de antibiótico, dor cervical lateral intensa, sinais de trombose de veia jugular) — mesmo quando a hipótese inicial mais provável for mononucleose.

## 🩺 Quadro clínico

- Pródromo inespecífico (mal-estar, cefaleia, mialgia) seguido de febre, odinofagia importante e fadiga marcante — a fadiga costuma ser desproporcional aos demais sintomas e pode persistir por semanas a meses após a resolução do quadro agudo.
- Faringoamigdalite exsudativa com placas esbranquiçadas — frequentemente confundida com amigdalite bacteriana estreptocócica, levando à prescrição inadequada de amoxicilina/ampicilina e ao aparecimento do rash característico.
- Linfadenopatia generalizada, com predomínio cervical posterior; esplenomegalia (até 50% dos casos) e hepatomegalia leve; edema periorbitário bilateral (sinal de Hoagland) é um achado clássico, embora pouco sensível.
- Petéquias em palato e exantema são possíveis e não excluem mononucleose — mas exigem diagnóstico diferencial ativo com doenças bacterianas graves (ex.: doença de Lemierre por *Fusobacterium necrophorum*, sobretudo se não há resposta ao antibiótico).

## 🔎 Diagnóstico

- Hemograma com linfocitose relativa/absoluta e linfócitos atípicos (>10% do diferencial reforça a suspeita).
- Teste heterófilo (Monospot) — rápido, mas sensibilidade limitada em crianças pequenas e na primeira semana de sintomas.
- Sorologia específica anti-EBV é o método mais confiável quando o heterófilo é negativo ou a apresentação é atípica: IgM anti-VCA (agudo), IgG anti-VCA (agudo e permanente), anti-EBNA (tardio e permanente) — a combinação dos três marcadores permite estimar a fase da infecção com boa precisão.
- Diante de linfonodomegalia isolada persistente, febre prolongada ou quadro atípico sem melhora, ampliar a investigação para diferenciais infecciosos (CMV, toxoplasmose, HIV, sífilis) e, se necessário, processos linfoproliferativos/autoimunes — biópsia excisional de linfonodo fica reservada para quando a sorologia não esclarece o quadro ou há sinais de alarme para neoplasia.

## 💊 Tratamento

- Essencialmente **suporte**: hidratação, analgesia/antitérmico; corticoide sistêmico reservado para complicações específicas (obstrução de via aérea por hipertrofia amigdaliana intensa, anemia hemolítica autoimune, trombocitopenia grave associada).
- **Não há antiviral com benefício clínico comprovado** para mononucleose não complicada — aciclovir reduz replicação viral em orofaringe, mas não altera o curso clínico da doença.
- Restrição de atividade física de contato/esportes por 3-4 semanas a partir do início dos sintomas, pelo risco de ruptura esplênica, independentemente de esplenomegalia detectável ao exame.
- Suspender qualquer penicilínico se prescrito por hipótese equivocada de amigdalite bacteriana; tratar o rash sintomaticamente, sem necessidade de rotular como alergia a penicilina no prontuário.

## 📝 Como a banca cobra

**"Doenças virais" é um assunto de baixa incidência neste banco — apenas 1 questão real no corpus completo**: ENARE 2025 Q14 (DIFÍCIL), um caso longo e detalhado de mononucleose infecciosa (faringite exsudativa, linfadenopatia cervical posterior, esplenomegalia, rash após amoxicilina, edema periorbitário) que testa interpretação fina de sorologia para EBV — a resposta correta reconhece que **IgG anti-VCA e anti-EBNA positivos indicam infecção prévia, não doença ativa**, contra distratores que simplificam demais o heterófilo, sugerem biópsia precoce ou confundem achados laboratoriais com outros diagnósticos (LES, linfoma).

Mesmo com baixa representação no corpus, mononucleose/EBV é tema **clássico de prova de residência** por reunir em um único caso vários eixos de raciocínio de alto rendimento — interpretação de sorologia em fases distintas, reconhecimento de reação farmacológica característica (rash por amoxicilina) e diagnóstico diferencial de síndrome mononucleose-símile — o que mantém alta probabilidade de reaparecer, inclusive em formatos diferentes (CMV, HIV agudo, toxoplasmose como resposta principal em vez de distrator).

## 📚 Referências essenciais

- IDSA / UpToDate-style clinical guidance on Epstein-Barr Virus Infection and Infectious Mononucleosis (diretrizes de sociedade especializada de infectologia, sem PCDT nacional específico para o tema).
`;

export default content.trim();
