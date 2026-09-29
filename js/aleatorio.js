export function buscaItemAleatorio(lista) {
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}

export const nomes = ['Gabriel', 'Mariana', 'Lucas', 'Beatriz', 'Guilherme', 'Sofia'];

export const afirmacoesFinais = [
  "conquistou o respeito de todos no ginásio e tornou-se uma referência no esporte.",
  "desenvolveu uma disciplina exemplar e alcançou um excelente condicionamento físico.",
  "superou os desafios dos treinos e inspirou novos praticantes.",
  "liderou sua equipe com dedicação e paixão pelo esporte."
];