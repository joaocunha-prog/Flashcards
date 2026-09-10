/**
 * Resumo — Infectologia · Micoses e micobacterioses atípicas.
 *
 * Reorganizado por entidade clínica (micobactérias não tuberculosas de
 * crescimento rápido e lento, e micoses cutâneas atípicas de porta de
 * entrada semelhante) — a questão real do corpus cobra infecção de partes
 * moles por micobactéria não tuberculosa pós-procedimento estético
 * (mesoterapia), incluindo a lógica diagnóstica (pesquisa de BAAR, cultura
 * com identificação de espécie, teste de resistência induzível a
 * macrolídeos). Assunto de baixa incidência no banco (1 questão), mas
 * infecções por micobactérias não tuberculosas associadas a procedimentos
 * estéticos são tema crescente e recorrente em provas de residência.
 */
const content = `
## 🎯 Essencial

- **Micobactérias não tuberculosas (MNT/NTM)** são micobactérias ambientais (água, solo, biofilmes) distintas do complexo *Mycobacterium tuberculosis* e do *M. leprae* — divididas classicamente em **crescimento rápido** (crescem em cultura em <7 dias — *M. fortuitum*, *M. abscessus*, *M. chelonae*) e **crescimento lento** (>7 dias — *M. avium* complex/MAC, *M. marinum*, *M. kansasii*, *M. ulcerans*).
- **Infecção de partes moles pós-procedimento estético** (mesoterapia, lipoaspiração, acupuntura, tatuagem, procedimentos com material/água contaminados) é o cenário clássico de MNT de **crescimento rápido** — nódulos/abscessos subagudos, recorrentes, com drenagem purulenta, que **não respondem a antibioticoterapia empírica convencional para bactérias piogênicas comuns**.
- **Diagnóstico correto exige identificação da espécie**, não só "é uma micobactéria" — o tratamento e a duração variam muito conforme a espécie e seu perfil de resistência, então cultura com identificação específica (e não só BAAR positivo, que só indica "bacilo álcool-ácido resistente" sem dizer qual) é indispensável antes de escolher o esquema definitivo.
- **Teste de atividade do gene *erm*** (resistência induzível a macrolídeos) é um passo diagnóstico crucial em algumas espécies de crescimento rápido — particularmente relevante no *M. abscessus* subespécie *abscessus*, que carrega gene *erm* funcional e desenvolve resistência a macrolídeo mesmo com sensibilidade inicial aparente in vitro (resistência que só aparece em teste prolongado, "resistência induzível").
- **Tratamento é sempre combinado e prolongado** (meses), nunca monoterapia empírica de curto prazo — o esquema exato depende da espécie identificada e do perfil de resistência (incluindo o teste de *erm*).

## 🔹 Micobacteriose não tuberculosa de crescimento rápido (partes moles pós-procedimento)

- **Agentes principais:** *M. fortuitum*, *M. abscessus*, *M. chelonae* — presentes em água (inclusive água de torneira, soluções de procedimentos mal esterilizadas) e formam biofilme, resistindo a desinfetantes convencionais.
- **Quadro clínico:** após período de incubação de semanas (tipicamente 3-6 semanas pós-procedimento), surgem nódulos eritematosos que evoluem para abscessos subagudos recorrentes com drenagem espontânea, distribuídos ao longo dos pontos de aplicação/manipulação — **sem sintomas sistêmicos proeminentes** na maioria dos casos (paciente afebril, bom estado geral), o que ajuda a diferenciar de infecção bacteriana piogênica aguda clássica.
- **Conduta diagnóstica correta:** coleta de secreção/material da lesão para **pesquisa de BAAR, cultura específica para micobactérias com identificação da espécie**, e teste de sensibilidade — incluindo, quando indicado pela espécie identificada, o **teste de atividade do gene *erm*** para prever resistência induzível a macrolídeos, antes de definir o esquema terapêutico definitivo.
- **Tratamento:** combinação de antimicrobianos guiada pela espécie e pelo perfil de resistência (podendo incluir macrolídeo, amicacina, cefoxitina, tigeciclina, linezolida, conforme o caso) por período prolongado (frequentemente vários meses), associado a debridamento cirúrgico quando há abscesso ou material estranho residual.
- ⚠️ **Pitfall:** iniciar antibioticoterapia empírica para cobertura de bactérias piogênicas convencionais (ex.: cefoxitina/tobramicina visando bactérias Gram-negativas comuns, ou tratamento antibacteriano convencional guiado só por cultura bacteriana de rotina) sem pesquisa dirigida de micobactéria — **a cultura bacteriana convencional não detecta micobactérias**, que exigem meio de cultura específico.
- ⚠️ **Pitfall:** iniciar macrolídeo empírico prolongado (ex.: claritromicina) **sem checar resistência induzível pelo gene *erm*** em espécies que o carregam (como *M. abscessus* subsp. *abscessus*) — o tratamento pode falhar mesmo com sensibilidade inicial aparente em antibiograma convencional de leitura rápida.
- 💎 **Pearl:** história de procedimento estético invasivo recente (mesoterapia, preenchimento, lipoaspiração, tatuagem) com lesões subagudas, recorrentes, sem resposta a antibiótico convencional e sem toxemia sistêmica é o gatilho clínico clássico para pensar em MNT de crescimento rápido.
- 📝 **Como caiu:** ENARE 2026 Q31 (DIFÍCIL) — mulher com lesões nodulares/abscessos após mesoterapia estética; a conduta correta exigia pesquisa de BAAR + cultura para micobactérias com identificação de espécie + teste de gene *erm* antes de definir tratamento, contra distratores que propunham cultura bacteriana convencional, biópsia com BAAR mas antibiótico não dirigido a micobactéria, ou esquemas empíricos sem identificação de espécie.

## 🔹 Micobacteriose não tuberculosa de crescimento lento

- ***Mycobacterium marinum* ("granuloma dos aquários/piscineiros"):** infecção cutânea após exposição a água de aquário/piscina não clorada adequadamente, geralmente em mão/antebraço após trauma/arranhão em contato com água contaminada — nódulo/placa violácea que pode evoluir em padrão esporotricoide (lesões nodulares ascendendo ao longo do trajeto linfático, semelhante à esporotricose). Tratamento com combinação de antimicrobianos (ex.: claritromicina associada a etambutol ou rifampicina) por período prolongado.
- ***Mycobacterium avium* complex (MAC):** relevante sobretudo em **imunossuprimidos avançados** (HIV com CD4 muito baixo, <50) como infecção disseminada, mas também causa doença pulmonar crônica em pacientes com bronquiectasias/DPOC prévios, especialmente mulheres idosas não fumantes (padrão clássico "Lady Windermere syndrome").
- ***Mycobacterium ulcerans* (úlcera de Buruli):** causa úlceras cutâneas necrosantes extensas e indolores, mais relevante em regiões tropicais específicas (menos cobrado em provas brasileiras, mas pode aparecer como diferencial exótico).

## 🔹 Esporotricose (diferencial clássico de porta de entrada semelhante)

- **Agente:** fungo dimórfico *Sporothrix schenckii* (e espécies relacionadas) — porta de entrada por inoculação traumática (espinhos de planta, arranhão/mordedura de gato — a forma zoonótica por gato é hoje a mais relevante epidemiologicamente no Brasil).
- **Quadro clínico:** padrão **linfocutâneo esporotricoide** — lesão nodular no ponto de inoculação, seguida de nódulos subsequentes ascendendo ao longo do trajeto linfático de drenagem — clinicamente pode se confundir com infecção por *M. marinum*, daí a importância de cultura fúngica específica para diferenciar.
- **Diagnóstico:** cultura fúngica do material da lesão (padrão-ouro); histopatologia pode mostrar corpos asteroides.
- **Tratamento:** itraconazol oral é a primeira escolha na forma cutânea/linfocutânea; anfotericina B reservada para formas disseminadas/graves.
- ⚠️ **Pitfall:** tratar todo padrão "esporotricoide" como esporotricose sem considerar *M. marinum* como diferencial, sobretudo diante de história de exposição a água de aquário em vez de contato com gato/planta.

## 📝 Como a banca cobra

**Este é um assunto de baixa incidência no corpus (apenas 1 questão real, ENARE 2026 Q31, classificada como DIFÍCIL)** — ficou fora do corte 80/20. Ainda assim, infecções de partes moles por micobactéria não tuberculosa associadas a procedimentos estéticos são tema crescente na prática clínica brasileira (proliferação de procedimentos estéticos invasivos) e vêm ganhando espaço em provas de residência recentes, com potencial real de reaparecer.

- **ENARE 2026 Q31** testou o raciocínio diagnóstico completo em um cenário de alta complexidade — reconhecer o quadro típico (lesões subagudas recorrentes pós-mesoterapia, sem toxemia sistêmica), **não** tratar empiricamente com antibiótico convencional, e seguir a sequência correta: pesquisa de BAAR → cultura para micobactérias com identificação de espécie → teste de resistência induzível a macrolídeo (gene *erm*) → tratamento guiado pelo resultado. É um padrão de cobrança sofisticado, que penaliza quem conhece só "MNT existe" sem dominar a lógica diagnóstica e os detalhes de resistência.

## 📚 Referências essenciais

- ATS/IDSA (American Thoracic Society/Infectious Diseases Society of America) — Treatment of Nontuberculous Mycobacterial Pulmonary Disease e diretrizes de manejo de infecções de partes moles por micobactérias não tuberculosas de crescimento rápido.
- Diretriz de sociedade especializada em micologia médica para diagnóstico e tratamento de esporotricose.
`;

export default content.trim();
