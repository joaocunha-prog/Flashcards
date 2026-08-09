/**
 * Resumo — Infectologia · Meningites e infecções do SNC.
 *
 * Cobre as entidades do assunto no corpus: meningite bacteriana aguda
 * (incluindo Listeria em imunossuprimido), meningite tuberculosa (em HIV)
 * e encefalite herpética.
 */
const content = `
## 🎯 Essencial

- **Meningite bacteriana em imunossuprimido (corticoide crônico, idoso, gestante): pensar em *Listeria monocytogenes*** — líquor com celularidade mista (mononucleares e neutrófilos, não puramente neutrofílica como no pneumococo/meningococo), **Gram mostrando bastonetes Gram-positivos**. Tratamento: **ampicilina** (± gentamicina) — **ceftriaxona não cobre Listeria**, é a pegadinha central desse cenário.
- **Sempre que a vinheta descrever líquor com bastonetes Gram-positivos em paciente imunossuprimido, a cobertura empírica precisa incluir ampicilina** — o esquema empírico "padrão" de meningite bacteriana (ceftriaxona ± vancomicina) deixa Listeria descoberta.
- **Meningite tuberculosa em paciente HIV: tratar tuberculose (RIPE) primeiro, TARV depois** — mesmo racional já visto no assunto de HIV/AIDS (ver resumo específico), com risco de IRIS grave se a TARV for iniciada muito cedo em relação ao RIPE, especialmente com CD4 muito baixo.
- **Líquor da meningite tuberculosa:** pleocitose predominantemente **mononuclear**, glicose **baixa**, proteína alta — **gene-Xpert do líquor** tem sensibilidade limitada mas é o exame de escolha para confirmação rápida quando positivo (a cultura para BK é mais sensível, porém demorada).
- **Encefalite herpética:** febre + confusão mental + **envolvimento do lobo temporal** na TC/RM (área de edema/hipodensidade) — líquor com pleocitose linfomonocitária e pode haver discreta hemorragia (hemácias no líquor, refletindo a necrose hemorrágica característica). Tratamento: **aciclovir empírico imediato**, sem esperar confirmação por PCR (que demora).
- **Não atrasar aciclovir empírico em suspeita de encefalite herpética esperando resultado de PCR** — o atraso terapêutico aumenta significativamente sequelas neurológicas e mortalidade; a terapia é iniciada com base na suspeita clínico-radiológica.
- **A tríade febre + cefaleia + rigidez de nuca (sinais meníngeos) direciona investigação com punção lombar**, mas TC de crânio prévia é indicada em cenários específicos de risco de herniação (imunossupressão, sinais focais, papiledema, crise convulsiva recente, alteração importante do nível de consciência) antes da punção.

## 💎 Pearls

- **A celularidade mista (não puramente neutrofílica) no líquor de uma "meningite bacteriana" é a pista mais discriminatória para Listeria** — a maioria das meningites bacterianas piogênicas clássicas (pneumococo, meningococo) tem predomínio neutrofílico mais puro.
- **Gestantes, idosos, neonatos e imunossuprimidos (corticoide crônico, transplantados) compõem o grupo de risco clássico para Listeria** — vale sempre perguntar sobre uso crônico de corticoide/imunossupressor na anamnese de meningite.
- **O momento de início da TARV na meningite tuberculosa segue lógica semelhante à tuberculose pulmonar** (ver resumo de HIV/AIDS), mas com maior cautela ainda, pelo risco de IRIS ser potencialmente mais grave no SNC (edema cerebral, hipertensão intracraniana) do que em outros sítios.
- **A localização temporal do acometimento na encefalite herpética reflete o neurotropismo do HSV-1 por essa região** — é um dos achados de imagem mais específicos em toda a neuroinfectologia.
- **PCR para HSV no líquor pode ser falso-negativo nos primeiros 1-3 dias de sintomas** — não descartar o diagnóstico nem suspender o aciclovir empírico só por um resultado inicial negativo em janela muito precoce; repetir se a suspeita clínica permanece alta.
- **Punção lombar não deve atrasar o início de antibiótico empírico em meningite bacteriana suspeita** quando há necessidade de TC prévia (por sinais de risco de herniação) — colher hemocultura e iniciar antibiótico empírico antes de aguardar a TC nesse cenário.

## ⚠️ Pitfalls

- **Tratar meningite bacteriana empírica só com ceftriaxona em paciente imunossuprimido** sem associar ampicilina — deixa Listeria descoberta, com risco de falha terapêutica grave.
- **Iniciar TARV simultaneamente ao RIPE em meningite tuberculosa associada a HIV** — risco de IRIS grave no SNC; o escalonamento temporal (RIPE primeiro) segue o mesmo racional já visto em tuberculose pulmonar/HIV.
- **Aguardar PCR positivo para HSV antes de iniciar aciclovir em suspeita clínica-radiológica de encefalite herpética** — o tratamento empírico precoce é o que realmente muda o desfecho neurológico.
- **Interpretar hemácias no líquor automaticamente como punção traumática**, sem considerar encefalite herpética (necrose hemorrágica) no contexto clínico apropriado (febre + confusão + acometimento temporal).
- **Não considerar a necessidade de TC de crânio antes da punção lombar** em paciente com sinais de alerta para hipertensão intracraniana (papiledema, déficit focal, convulsão recente, imunossupressão) — risco de herniação com a punção nesses cenários específicos.
- **Tratar meningite tuberculosa com esquema RIPE padrão sem atenção à duração prolongada necessária** — a forma meníngea da tuberculose exige tratamento mais prolongado do que a forma pulmonar não complicada.

## 📝 Como a UERJ cobra

**Meningites e infecções do SNC é #35 do ranking (3 questões, 1,2% do corpus)**, com cada uma das três entidades exigindo raciocínio sobre **contexto de imunossupressão associado** — a banca não testa meningite "genérica", e sim os cenários especiais que mudam a conduta.

- **Meningite bacteriana aguda** (2021 Q46) testou explicitamente o reconhecimento de Listeria em paciente com artrite reumatoide em uso de corticoide/metotrexato, com o líquor descrito em detalhe suficiente para apontar a etiologia — e a escolha correta de ampicilina sobre ceftriaxona/vancomicina isoladas.
- **Meningite tuberculosa** (2024 Q8) testou o momento exato de introdução da TARV em relação ao RIPE, citando explicitamente o protocolo do Ministério da Saúde de 2019 — mesmo raciocínio do assunto de HIV/AIDS aplicado a um cenário específico de neuroinfecção.
- **Encefalite herpética** (2025 Q43) testou o reconhecimento do padrão de imagem (lobo temporal) e do líquor característico, valorizando reconhecimento sindrômico completo.

## 🆕 Atualização

- O **PCDT de HIV do Ministério da Saúde** (2019 e revisões subsequentes) mantém a recomendação de escalonamento cauteloso da TARV em meningite/tuberculose do SNC associada a HIV, dado o risco elevado de IRIS grave nesse território — conteúdo já refletido diretamente na questão da UERJ.
- Testes moleculares de líquor de última geração (painéis multiplex para múltiplos patógenos simultâneos — bactérias, vírus, fungos) vêm ampliando a capacidade de diagnóstico etiológico rápido em meningoencefalites, reduzindo o tempo até terapia dirigida e permitindo, em alguns cenários, suspensão mais precoce e segura de terapias empíricas amplas (incluindo aciclovir empírico, quando um painel negativo para HSV é obtido rapidamente e com alta confiabilidade).
- Vacinas conjugadas contra pneumococo e meningococo, amplamente incorporadas em calendários vacinais, vêm mudando a epidemiologia das meningites bacterianas comunitárias, reduzindo a incidência desses agentes clássicos e relativamente aumentando a importância proporcional de patógenos menos comuns (incluindo Listeria em grupos de risco específicos).

## 🧠 Conceito e fisiopatologia

**Meningite por *Listeria monocytogenes*** ocorre porque essa bactéria intracelular facultativa depende primariamente de imunidade mediada por células (linfócitos T e macrófagos ativados) para ser contida — pacientes com imunossupressão que compromete especificamente essa via (corticoide crônico, idade avançada, gestação, transplante) perdem a defesa mais relevante contra esse patógeno específico, mesmo que sua imunidade humoral (que contém pneumococo/meningococo via opsonização e complemento) permaneça relativamente preservada. A celularidade mista no líquor reflete esse recrutamento misto de células inflamatórias (neutrófilos da resposta aguda inespecífica associados a linfócitos/monócitos da resposta celular específica tentando conter o patógeno intracelular).

**Meningite tuberculosa** resulta da disseminação hematogênica de *Mycobacterium tuberculosis* a partir de um foco primário (geralmente pulmonar), com formação de pequenos focos caseosos nas meninges/parênquima cerebral adjacente (focos de Rich) que, ao se romperem, liberam bacilos no espaço subaracnóideo, desencadeando uma reação inflamatória granulomatosa crônica na base do encéfalo — essa localização basal explica o acometimento preferencial de nervos cranianos (III, VI, VII) por compressão/isquemia dos vasos que atravessam essa região inflamada.

**Encefalite herpética** ocorre por reativação do vírus herpes simples tipo 1 latente nos gânglios trigeminais, com disseminação retrógrada ao longo de fibras nervosas até as regiões orbitofrontal e temporal do córtex — essas áreas têm conexões anatômicas diretas com o trajeto de reativação viral a partir do gânglio trigeminal, explicando o neurotropismo característico e o padrão de necrose hemorrágica localizada nessas regiões específicas.

## 🩺 Quadro clínico

- **Meningite bacteriana (geral):** febre, cefaleia intensa, rigidez de nuca, sinais de Kernig/Brudzinski, fotofobia, podendo evoluir com rebaixamento do nível de consciência e sinais de sepse.
- **Meningite por Listeria:** quadro semelhante, frequentemente de instalação mais subaguda que pneumococo/meningococo, em paciente imunossuprimido.
- **Meningite tuberculosa:** instalação subaguda (dias a semanas), febre, cefaleia, rigidez de nuca, acometimento de nervos cranianos (diplopia, ptose), podendo evoluir com hidrocefalia e alteração do nível de consciência.
- **Encefalite herpética:** febre, cefaleia, confusão mental/alteração comportamental (reflexo do acometimento temporal-límbico), podendo evoluir com convulsões e afasia; rigidez de nuca pode ser discreta ou ausente, diferente das meningites bacterianas clássicas.

## 🔎 Diagnóstico

- **Meningite bacteriana:** punção lombar (celularidade, proteína, glicose, Gram, cultura); hemocultura sempre coletada; TC de crânio prévia à punção se houver sinais de risco de herniação.
- **Meningite tuberculosa:** líquor com pleocitose mononuclear, glicose baixa, proteína alta; gene-Xpert do líquor (rápido, mas sensibilidade limitada); cultura para BK (padrão-ouro, mais demorada); imagem cerebral pode mostrar hidrocefalia e realce basal meníngeo.
- **Encefalite herpética:** RM de crânio (edema/hipersinal temporal), líquor com pleocitose linfomonocitária (podendo ter hemácias), **PCR para HSV no líquor** (confirmatório, mas não deve atrasar o início empírico de aciclovir).

## 🚨 Gravidade / classificação

- **Escala de Glasgow e sinais focais** orientam gravidade e prognóstico em qualquer infecção do SNC, além de indicar necessidade de suporte em UTI.
- **Hidrocefalia associada à meningite tuberculosa** é complicação relativamente comum e pode exigir derivação ventricular além do tratamento antituberculose.
- **Atraso no início de aciclovir na encefalite herpética** é o principal determinante modificável de pior prognóstico neurológico — cada dia de atraso piora significativamente o desfecho.

## 💊 Tratamento

- **Meningite bacteriana empírica (geral):** ceftriaxona + vancomicina (cobertura para pneumococo resistente); **associar ampicilina em imunossuprimidos, idosos, gestantes** (cobertura para Listeria).
- **Meningite por Listeria confirmada:** **ampicilina**, podendo associar gentamicina, por tempo prolongado (cerca de 3 semanas).
- **Meningite tuberculosa em HIV:** **RIPE** iniciado imediatamente, com **TARV introduzida posteriormente** conforme protocolo (tipicamente após cerca de 8 semanas, ou conforme CD4, seguindo o mesmo racional de escalonamento do assunto de HIV/AIDS); corticoide adjuvante reduz mortalidade em meningite tuberculosa.
- **Encefalite herpética:** **aciclovir intravenoso empírico**, iniciado imediatamente diante de suspeita clínico-radiológica, mantido por 14-21 dias.

## 🔀 Diagnóstico diferencial

| Meningite/encefalite | Celularidade liquórica | Glicose | Achado-chave |
| --- | --- | --- | --- |
| Bacteriana piogênica clássica | Neutrofílica | Baixa | Gram positivo para diplococos |
| Listeria | Mista (neutrófilos + mononucleares) | Baixa | Bastonetes Gram-positivos, imunossupressão |
| Tuberculosa | Mononuclear | Baixa | Instalação subaguda, nervos cranianos |
| Herpética (encefalite) | Linfomonocitária (± hemácias) | Normal | Acometimento temporal na imagem |

## 📋 Tabela de revisão

| Situação | Achado-chave | Tratamento |
| --- | --- | --- |
| Meningite + imunossupressão + bastonetes Gram+ | Listeria | Ampicilina |
| Meningite tuberculosa + HIV | Gene-Xpert positivo no líquor | RIPE primeiro, TARV depois |
| Febre + confusão + lesão temporal | Encefalite herpética | Aciclovir empírico imediato |

## 📚 Referências essenciais

- IDSA Clinical Practice Guidelines for the Management of Bacterial Meningitis (citada explicitamente pela UERJ em 2021).
- PCDT de Manejo da Infecção pelo HIV em Adultos — Ministério da Saúde, 2019 (citado explicitamente pela UERJ em 2024).
- IDSA/ASM Guidelines — Management of Encephalitis.
`;

export default content.trim();
