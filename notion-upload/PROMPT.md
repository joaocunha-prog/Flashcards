# Prompt: PDF + ZIP pronto para o Notion

Cole o bloco abaixo no fim do seu pedido de resumo (ou salve como instrução fixa do projeto).

````text
Além do PDF, entregue também um arquivo .zip pronto para o meu script de upload ao Notion
(notion-upload). Siga exatamente esta estrutura e estas regras.

ESTRUTURA DO ZIP

  <slug>.zip
  └── <slug>/
      ├── <slug>.md
      ├── <slug>.pdf          (o mesmo PDF que você me entregou)
      └── figuras/
          ├── fig01-<descricao-curta>.png
          ├── fig02-<descricao-curta>.png
          └── ...

- <slug>: minúsculas, sem acento, sem espaço, com hífens (ex.: insuficiencia-cardiaca-descompensada).
- Nomes de arquivo de imagem: sem espaço e sem acento, numerados na ordem em que aparecem.

REGRAS DO MARKDOWN

1. A primeira linha é o título: `# Título do resumo`. Sem frontmatter e sem frase introdutória.
2. Imagens SEMPRE como arquivo em figuras/, referenciadas por caminho relativo:
   `![Figura 1 — legenda em português](figuras/fig01-descricao.png)`
   Nunca base64, nunca URL externa, nunca caminho absoluto. Uma imagem por linha, em parágrafo próprio.
3. As mesmas figuras do PDF, com a mesma numeração e a mesma legenda. Se a figura vem de
   artigo/diretriz, a fonte vai na legenda ("Figura 3 — ... (Fonte: Autor, ano)").
4. Formatos de imagem: PNG ou JPG, até 20 MB cada. Extraia a figura original da fonte na melhor
   resolução; só redesenhe quando a fonte não tiver figura para o conceito.
5. Tabelas em markdown simples (| a | b |), só com texto nas células — nunca imagem dentro de tabela.
   Se uma tabela do PDF for imagem, ponha-a em figuras/ e referencie como figura.
6. Avisos e pontos de atenção como callouts: `> [!WARNING]`, `> [!TIP]`, `> [!NOTE]`,
   `> [!IMPORTANT]`, `> [!PEARL]`, `> [!PITFALL]` (texto na linha seguinte, também com `> `).
7. Listas com `-` e `1.`; aninhe com 2 espaços. Equações em `$$...$$`. Divisor com `---`.
8. O texto do .md deve ser o mesmo conteúdo do PDF (nada a mais, nada a menos), em português.

ANTES DE ENTREGAR, VERIFIQUE (rode de fato, não suponha)

- Todo `![...](figuras/...)` do .md aponta para um arquivo que existe no zip.
- Nenhum arquivo em figuras/ está sem uso.
- Nenhuma imagem passa de 20 MB; nenhuma referência é base64 ou http.
- O zip abre e tem a estrutura acima.

Entregue: o PDF, o .zip, e uma linha dizendo quantas figuras foram incluídas.
````

## Depois de receber o zip

```bash
unzip insuficiencia-cardiaca-descompensada.zip
cd /caminho/para/notion-upload
node upload.mjs ../insuficiencia-cardiaca-descompensada/insuficiencia-cardiaca-descompensada.md \
     --pdf ../insuficiencia-cardiaca-descompensada/insuficiencia-cardiaca-descompensada.pdf
```
