# Pipeline de extração dos cadernos

Como transformar o PDF de uma prova do ENARE nos JSONs de `data/provas/`. Fica versionado para que
toda prova nova siga o mesmo caminho, e para que qualquer número do ranking possa ser rastreado até
o caderno de origem. `classificacao.json` e `ressalvas.json` começam vazios (`{}`) neste projeto —
preencha-os conforme for classificando cada prova que processar.

```
PDF do caderno
  │  extract.mjs      pdfjs-dist → texto, preservando quebras de linha
  ▼
prova-AAAA.txt
  │  parse.mjs        separa enunciado, alternativas, gabarito e o
  ▼                   percentual de resposta por alternativa
parsed.json
  │  build.mjs        cruza com classificacao.json e ressalvas.json,
  ▼                   deriva a dificuldade do % de acerto
data/provas/enare-AAAA.json
```

## Rodando

```bash
npm install --no-save pdfjs-dist@4
node extract.mjs /caminho/enare-2026.pdf prova-2026.txt
node parse.mjs                      # lê prova-*.txt, escreve parsed.json
node build.mjs ../../data/provas    # escreve os ExamInput
```

`parse.mjs` valida o que extraiu e reclama em `stderr` de questão sem 4 alternativas, sem gabarito
ou com número repetido — é a rede de segurança contra PDF que muda de layout.

> **`parse.mjs` foi ajustado ao layout específico do PDF usado no projeto UERJ** (marcas de rodapé,
> seção "Respostas e Gabarito", formato `Q: N - R: letra` com percentual por alternativa). O caderno
> do ENARE quase certamente tem outro layout — trate as regexes de filtro de linha e o parser de
> gabarito como ponto de partida a reescrever, não como pronto para uso.

## Os dois arquivos escritos à mão

- **`classificacao.json`** — para cada questão, `[tema, assunto, tópico, palavras-chave, referência]`.
  É a única parte do pipeline que exige leitura clínica de cada item.
- **`ressalvas.json`** — o texto do `reviewNote` das questões cujo gabarito oficial merece ressalva.

`build.mjs` falha com saída não-zero se alguma questão do caderno não tiver entrada em
`classificacao.json`, para que nenhuma entre no banco sem classificação.

## Dificuldade

Derivada do percentual real de acerto que vem no caderno: 70% ou mais → `FACIL`; 45% a 69% →
`MEDIA`; abaixo de 45% → `DIFICIL`. Nenhum item foi classificado por opinião.

## Questões anuladas

São descartadas em `build.mjs`. Sem gabarito não há como corrigir a resposta, e o caderno também não
publica estatística de acerto delas.
