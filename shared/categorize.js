(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Categorizer = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const CATEGORIES = {
    'Alimentação': ['mercado', 'supermercado', 'restaurante', 'lanchonete', 'ifood', 'padaria', 'acougue', 'hortifruti', 'feira', 'delivery', 'pizza', 'lanche', 'cafe'],
    'Transporte': ['uber', '99', 'gasolina', 'combustivel', 'onibus', 'metro', 'estacionamento', 'pedagio', 'taxi', 'passagem', 'bilhete unico'],
    'Moradia': ['aluguel', 'condominio', 'iptu', 'reforma', 'moveis', 'imobiliaria'],
    'Contas e Serviços': ['luz', 'energia', 'agua', 'gas', 'internet', 'telefone', 'celular', 'conta'],
    'Saúde': ['farmacia', 'remedio', 'medico', 'consulta', 'plano de saude', 'dentista', 'exame', 'academia'],
    'Educação': ['curso', 'faculdade', 'mensalidade', 'livro', 'material escolar', 'unirio'],
    'Lazer': ['cinema', 'show', 'viagem', 'bar', 'festa', 'ingresso', 'jogo', 'streaming'],
    'Assinaturas': ['netflix', 'spotify', 'amazon prime', 'disney', 'youtube premium', 'hbo', 'assinatura', 'icloud'],
    'Vestuário': ['roupa', 'sapato', 'tenis', 'loja de roupa', 'calcado'],
  };

  const CATEGORY_NAMES = [...Object.keys(CATEGORIES), 'Outros'];

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function detectCategory(description) {
    const text = normalize(description);
    for (const [category, keywords] of Object.entries(CATEGORIES)) {
      if (keywords.some((kw) => text.includes(normalize(kw)))) {
        return category;
      }
    }
    return 'Outros';
  }

  return { CATEGORIES, CATEGORY_NAMES, detectCategory, normalize };
});
