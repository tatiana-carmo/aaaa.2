// Retorna um item aleatório de qualquer array recebido
export function buscaItemAleatorio(lista) {
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}

// Lista de nomes para personalizar a narração impessoal
export const nomes = ['Gabriel', 'Mariana', 'Lucas', 'Beatriz', 'Guilherme', 'Sofia'];

// Afirmações aleatórias para gerar finais dinâmicos
export const afirmacoesFinais = [
  "conseguiu salvar a colônia e garantir energia sustentável para todos.",
  "descobriu novos recursos cibernéticos e liderou a nova era humana.",
  "enfrentou contratempos sérios, mas deixou um legado inesquecível para 2050.",
  "tomou decisões ousadas que mudaram para sempre o destino da cidade."
];