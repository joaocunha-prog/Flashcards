/**
 * Resumo — Infectologia · Infecções do trato urinário.
 *
 * Cobre as entidades do assunto no corpus: tratamento ambulatorial da
 * pielonefrite não complicada, profilaxia da ITU recorrente, tratamento
 * empírico da cistite não complicada recorrente e pielonefrite
 * complicada por retenção urinária em paciente oncológico.
 */
const content = `
## 🎯 Essencial

- **Cistite não complicada:** mulher sem anormalidade estrutural/funcional do trato urinário e sem comorbidade complicadora. Primeira linha: **nitrofurantoína, fosfomicina em dose única ou sulfametoxazol-trimetoprima** (se resistência local <20%) — quinolona não é primeira escolha.
- **Pielonefrite não complicada**, em paciente estável, sem sinais de sepse/obstrução e tolerando via oral, pode ser tratada **ambulatorialmente** — quinolona oral (ciprofloxacino) é opção de primeira linha nesse cenário, pela boa penetração tecidual renal.
- **ITU complicada** implica presença de fator anatômico/funcional (obstrução, cateter, litíase, bexiga neurogênica), imunossupressão ou trato urinário masculino — exige investigar causa obstrutiva e frequentemente internação com antibiótico parenteral.
- **Retenção urinária em paciente oncológico com pielonefrite** é ITU complicada por obstrução: **desobstruir a via urinária (cateterismo/nefrostomia) é tão essencial quanto o antibiótico** — sem isso, o antibiótico correto pode falhar e o paciente evoluir para sepse.
- **Profilaxia de ITU recorrente** (≥2 episódios em 6 meses ou ≥3 em 1 ano): medidas comportamentais primeiro (hidratação, micção pós-coito); se persistir, antibioticoprofilaxia contínua em baixa dose ou pós-coital, ou alternativas como D-manose/estrogênio vaginal tópico em mulheres na pós-menopausa.

## 💎 Pearls

- **Bacteriúria assintomática não deve ser tratada**, exceto em gestantes e antes de procedimentos urológicos invasivos — erro comum é tratar todo exame de urina alterado sem sintomas.
- **Nitrofurantoína não atinge concentração tecidual renal adequada** — nunca deve ser usada em pielonefrite, apenas em cistite.
- Fosfomicina em dose única é prática para cistite não complicada, mas também **não tem indicação em pielonefrite**.
- **Estrogênio vaginal tópico** reduz recorrência de ITU em mulheres na pós-menopausa ao restaurar a microbiota vaginal protetora (lactobacilos).
- ITU em paciente oncológico/imunossuprimido com obstrução mecânica **não responde bem só a antibiótico** — a obstrução precisa ser corrigida para o antibiótico ter chance real de sucesso.

## ⚠️ Pitfalls

- **Tratar cistite não complicada com quinolona de primeira linha** — reservar quinolonas para contraindicação aos agentes de primeira linha ou para pielonefrite.
- **Usar nitrofurantoína para tratar pielonefrite** — penetração renal insuficiente, risco de falha terapêutica.
- **Tratar bacteriúria assintomática** fora do contexto de gestação/procedimento urológico — promove resistência sem benefício clínico.
- **Tratar pielonefrite obstrutiva apenas com antibiótico**, sem desobstruir a via urinária — risco de sepse refratária.
- **Escalar direto para antibioticoprofilaxia contínua** em ITU recorrente sem antes tentar medidas comportamentais/D-manose/estrogênio tópico quando aplicável.

## 📝 Como a banca cobra

**Infecções do trato urinário aparece em 4 questões (1,89% do corpus)**, todas do ENARE, cobrando decisões terapêuticas práticas em cenários ambulatoriais e complicados.

- **ENARE 2025 Q28** cobrou o tratamento ambulatorial da pielonefrite não complicada.
- **ENARE 2025 Q57** testou a profilaxia da ITU recorrente.
- **ENARE 2026 Q36** trouxe o tratamento empírico da cistite não complicada recorrente.
- **ENARE 2026 Q61** cobrou pielonefrite complicada por retenção urinária em paciente oncológico — reforçando a necessidade de desobstrução associada ao antibiótico.

## 🧠 Conceito e fisiopatologia

A ITU ocorre por ascensão de flora fecal/perineal (predominantemente Escherichia coli uropatogênica) pela uretra até a bexiga (cistite) e, por via ascendente adicional, até o parênquima renal (pielonefrite). A distinção entre "complicada" e "não complicada" não depende da gravidade dos sintomas, mas da presença de um fator anatômico, funcional ou de hospedeiro que compromete a depuração normal do trato urinário e aumenta o risco de falha terapêutica.

A obstrução mecânica (cálculo, tumor, hiperplasia prostática) impede que o antibiótico, mesmo adequado, esterilize a urina retida — o reservatório bacteriano se mantém e alimenta a infecção mesmo sob antibioticoterapia correta, explicando por que a desobstrução é tão importante quanto a escolha do fármaco nesse cenário.

## 🔎 Diagnóstico

- **Cistite:** clínico (disúria, polaciúria, urgência); urina tipo I/urocultura se atípica ou recorrente.
- **Pielonefrite:** clínico (febre, dor lombar, náusea) + urocultura sempre; imagem (USG/TC) se suspeita de complicação/obstrução ou falha terapêutica em 48-72h.
- **ITU recorrente:** investigar padrão de recorrência e fatores de risco antes de indicar profilaxia farmacológica.

## 💊 Tratamento

- **Cistite não complicada:** nitrofurantoína, fosfomicina em dose única ou sulfametoxazol-trimetoprima (conforme resistência local).
- **Pielonefrite não complicada, paciente estável:** ciprofloxacino oral ambulatorial (ou cobertura conforme perfil local de resistência).
- **Pielonefrite complicada/obstrutiva:** desobstrução (cateter vesical/nefrostomia) + antibiótico parenteral de amplo espectro, geralmente com internação.
- **Profilaxia de recorrência:** medidas comportamentais → D-manose/estrogênio vaginal tópico (pós-menopausa) → antibioticoprofilaxia contínua ou pós-coital em baixa dose se refratária.

## 📚 Referências essenciais

- IDSA/ESCMID Guideline for the Treatment of Uncomplicated Cystitis and Pyelonephritis.
- European Association of Urology (EAU) Guidelines on Urological Infections.
- Diretrizes de sociedades urológicas brasileiras para manejo de ITU.
`;

export default content.trim();
