/**
 * Resumo — Reumatologia · Espondiloartropatias.
 *
 * Reorganizado por entidade clínica (cada espondiloartropatia tem sua
 * própria seção com quadro clínico, diagnóstico, tratamento, pearl e
 * pitfall juntos) — o assunto reúne um grupo de doenças que compartilham
 * fisiopatologia e critérios de classificação comuns (associação com
 * HLA-B27, acometimento axial e/ou periférico, entesite), mas têm
 * manifestações extra-articulares e conduta específicas que se confundem
 * nos distratores de prova.
 *
 * Cobre a questão real do corpus (EBSERH 2025 Q43 — espondiloartropatia
 * com apresentação atípica após os 40 anos, elevação de IgA e fosfatase
 * alcalina, RM normal, FAN negativo — testando o mito de que
 * espondiloartropatias são "raras após os 40 anos"). Assunto de baixa
 * incidência no banco (1 questão, cauda longa, fora do corte 80/20), mas o
 * restante do resumo é extrapolado com profundidade de alto rendimento
 * cobrindo as principais espondiloartropatias: espondilite anquilosante,
 * artrite psoriásica, artrite reativa e artrite enteropática.
 */
const content = `
## 🎯 Essencial

- **Espondiloartropatias NÃO são raras após os 40 anos** — apesar do pico de início classicamente descrito em adultos jovens (segunda e terceira décadas), uma parcela relevante dos casos inicia após os 40-45 anos, com apresentação frequentemente mais atípica e diagnóstico mais tardio justamente por essa expectativa equivocada de que "é doença de jovem".
- **O grupo compartilha características centrais:** associação variável com **HLA-B27**, acometimento do esqueleto axial (sacroilíaca, coluna) e/ou periférico, **entesite** (inflamação da inserção óssea de tendões/ligamentos — achado mais específico do grupo que a sinovite isolada), dactilite ("dedo em salsicha"), uveíte anterior aguda recorrente, e **FAN e fator reumatoide tipicamente negativos** (por isso soronegativas).
- **Dor lombar inflamatória** é o padrão axial característico: início insidioso antes dos 40-45 anos (na apresentação clássica), duração >3 meses, **piora com repouso e melhora com atividade física/exercício**, rigidez matinal prolongada (>30-60 minutos) e dor noturna que desperta o paciente na segunda metade da noite — padrão oposto ao da dor lombar mecânica (que piora com atividade e melhora com repouso).
- **Elevação de fosfatase alcalina e IgA** pode ocorrer no espectro das espondiloartropatias, refletindo atividade inflamatória e acometimento ósseo/entesítico — não deve ser automaticamente atribuída a outra causa (hepatobiliar, por exemplo) sem contextualizar o quadro reumatológico.
- **RM de sacroilíacas normal não exclui espondiloartropatia** — sobretudo nas fases iniciais ou em apresentações atípicas, o exame pode ainda não mostrar edema ósseo/sacroileíte ativa; o diagnóstico é clínico-laboratorial-radiológico combinado, não depende de um único exame "confirmatório".

## 🔹 Espondilite anquilosante

- **Quando suspeitar:** dor lombar inflamatória crônica de início insidioso, geralmente antes dos 40-45 anos, associada a rigidez matinal prolongada e melhora com exercício; sacroiliíte é o achado central.
- **Diagnóstico:** radiografia de sacroilíacas com sacroileíte (esclerose, erosões, posteriormente anquilose); RM com sequência STIR mostra edema ósseo (sacroileíte ativa) antes das alterações estruturais visíveis na radiografia simples; **HLA-B27 positivo** reforça a suspeita, mas não é obrigatório nem exclusivo (positivo em parcela relevante da população geral saudável, negativo em minoria dos casos de espondilite anquilosante).
- **Manifestações extra-articulares:** uveíte anterior aguda unilateral recorrente (a mais comum), doença inflamatória intestinal associada, comprometimento cardíaco (insuficiência aórtica, distúrbios de condução) em doença de longa data.
- **Tratamento:** anti-inflamatórios não esteroidais em dose plena como primeira linha, fisioterapia/exercício regular (pilar terapêutico fundamental, com evidência robusta de benefício funcional); inibidores de TNF-alfa ou de IL-17 em doença ativa refratária a AINE.
- 💎 **Pearl:** ao contrário da maioria das doenças reumáticas inflamatórias, aqui o **exercício físico é tratamento**, não apenas complemento — reduz rigidez e preserva mobilidade axial a longo prazo.
- ⚠️ **Pitfall:** afastar o diagnóstico só pela idade de início mais tardia (>40-45 anos) ou por RM de sacroilíacas sem alteração — nenhum dos dois exclui espondiloartropatia isoladamente.
- 📝 **Como caiu:** é o pano de fundo mais provável da vinheta real do corpus (EBSERH 2025 Q43), que testou justamente o mito da raridade após os 40 anos.

## 🔹 Artrite psoriásica

- **Quando suspeitar:** artrite periférica (frequentemente assimétrica, podendo acometer interfalangianas distais) associada a psoríase cutânea (que pode preceder, coincidir ou até suceder a artrite) e/ou alterações ungueais características (pitting, onicólise); dactilite ("dedo em salsicha") é achado muito sugestivo.
- **Padrões de acometimento:** oligoarticular assimétrico, poliarticular simétrico (mimetizando artrite reumatoide), predominantemente axial (mimetizando espondilite anquilosante), predominantemente de interfalangianas distais, ou artrite mutilante (forma mais grave e destrutiva, menos comum).
- **Diagnóstico:** clínico, apoiado por história pessoal/familiar de psoríase, achados ungueais e de imagem (radiografia com erosões associadas a neoformação óssea — "lápis na xícara" em casos avançados de articulação interfalangiana distal); FAN e fator reumatoide negativos.
- **Tratamento:** anti-inflamatórios para sintomas leves; metotrexato e outros imunossupressores convencionais para doença periférica moderada-grave; inibidores de TNF-alfa, IL-17 ou IL-23 para doença refratária, com benefício simultâneo sobre pele e articulações.
- 💎 **Pearl:** a dactilite e o acometimento ungueal são os achados que mais diferenciam artrite psoriásica de artrite reumatoide quando a apresentação articular é poliarticular simétrica e gera dúvida diagnóstica.
- ⚠️ **Pitfall:** exigir psoríase cutânea já estabelecida para considerar o diagnóstico — a artrite pode preceder as lesões de pele em parcela relevante dos casos.

## 🔹 Artrite reativa

- **Quando suspeitar:** oligoartrite assimétrica de membros inferiores, tipicamente 1-4 semanas após infecção gastrointestinal (*Salmonella*, *Shigella*, *Campylobacter*, *Yersinia*) ou geniturinária (*Chlamydia trachomatis*) — a tríade clássica (artrite + uretrite + conjuntivite, antigamente chamada síndrome de Reiter) ocorre apenas em parte dos casos, não é obrigatória para o diagnóstico.
- **Manifestações associadas:** balanite circinada, ceratodermia blenorrágica (lesões cutâneas palmoplantares hiperceratósicas), uveíte, entesite (particularmente calcânea).
- **Diagnóstico:** clínico-epidemiológico (história infecciosa recente), sem teste confirmatório específico; culturas/sorologias podem identificar o agente desencadeante, mas frequentemente já não são mais detectáveis no momento da artrite.
- **Tratamento:** anti-inflamatórios não esteroidais para controle sintomático; tratamento antibiótico do foco infeccioso ativo remanescente, se ainda presente; a maioria dos casos é autolimitada em semanas a poucos meses, mas uma parcela evolui para forma crônica/recorrente.
- ⚠️ **Pitfall:** exigir a tríade completa (artrite-uretrite-conjuntivite) para fechar o diagnóstico — apresentação incompleta é, na verdade, a mais comum na prática.

## 🔹 Artrite enteropática (associada à doença inflamatória intestinal)

- **Quando suspeitar:** artrite (periférica e/ou axial) em paciente com doença de Crohn ou retocolite ulcerativa conhecida ou concomitantemente diagnosticada — a artrite periférica tende a acompanhar a atividade da doença intestinal de base, enquanto o acometimento axial tende a ter curso mais independente da atividade intestinal.
- **Padrões:** tipo 1 (oligoarticular, autolimitada, correlacionada com atividade intestinal) e tipo 2 (poliarticular, curso mais crônico, independente da atividade intestinal).
- **Tratamento:** controle da doença inflamatória intestinal de base costuma melhorar a artrite periférica tipo 1; inibidores de TNF-alfa tratam simultaneamente o componente intestinal e articular quando indicados; **AINEs devem ser usados com cautela**, pelo risco de exacerbar a atividade da doença inflamatória intestinal de base.
- ⚠️ **Pitfall:** prescrever AINE em dose plena como primeira linha nesse subtipo sem considerar o risco de piora da doença intestinal associada — diferença importante frente à conduta em espondilite anquilosante isolada.

## 📋 Tabela

**Diferencial das principais espondiloartropatias**

| Entidade | Padrão articular | Gatilho/associação | Achado extra-articular característico |
|---|---|---|---|
| Espondilite anquilosante | Axial predominante | HLA-B27 | Uveíte anterior aguda recorrente |
| Artrite psoriásica | Periférico e/ou axial, variável | Psoríase cutânea/ungueal | Dactilite, alteração ungueal |
| Artrite reativa | Oligoarticular assimétrica, MMII | Infecção GI/GU recente | Uretrite, conjuntivite, balanite circinada |
| Artrite enteropática | Periférica (tipo 1/2) e/ou axial | Doença inflamatória intestinal | Atividade acompanha (tipo 1) ou não (tipo 2) a doença de base |

## 📝 Como a banca cobra

**Espondiloartropatias é um assunto de baixa incidência no corpus — apenas 1 questão registrada** (EBSERH 2025 Q43, classificada como MÉDIA), com vinheta de paciente de 45 anos com dor lombar inflamatória, elevação de IgA e fosfatase alcalina, FAN negativo e RM normal — a alternativa correta reconhecia justamente que espondiloartropatias **não** são raras após os 40 anos, contrariando a expectativa comum de que seriam exclusivas de adultos jovens.

Apesar de só ter aparecido uma vez no banco até agora, espondiloartropatias são tema **clássico em provas de residência médica de clínica médica e reumatologia**, por reunirem um grupo de doenças com fisiopatologia compartilhada (HLA-B27, entesite) mas manifestações extra-articulares distintas — formato que se presta bem a questões que testam tanto o reconhecimento do grupo quanto a diferenciação entre seus subtipos. Vale a pena dominar o conceito de dor lombar inflamatória, os achados extra-articulares de cada subtipo e não cair na armadilha da "idade de corte" para excluir o diagnóstico.

## 📚 Referências essenciais

- Critérios ASAS (Assessment of SpondyloArthritis international Society) de classificação de espondiloartrite axial e periférica.
- EULAR Recommendations for the Management of Axial Spondyloarthritis.
- GRAPPA (Group for Research and Assessment of Psoriasis and Psoriatic Arthritis) — Treatment Recommendations.
`;

export default content.trim();
