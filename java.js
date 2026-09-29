/**
 * Retorna um item aleatório de um array de opções.
 * @param {Array} list - Lista de itens.
 * @returns {*} Item sorteado.
 */
export function getRandomItem(list) {
  // Condicional simples para verificar se a lista é válida
  if (!list || list.length === 0) {
    return null;
  }
  
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
import { getRandomItem } from './utils.js';

const PALAVRAS_BANIDAS = ['ruim', 'chato', 'difícil', 'pessimo'];
const PALAVRAS_SUBSTITUTAS = ['excelente', 'divertido', 'desafiador', 'incrível'];

/**
 * Censura ou substitui palavras banidas dentro de um texto.
 * @param {string} text - Texto original.
 * @returns {string} Texto modificado.
 */
export function cleanText(text) {
  // Condicional para validar entrada
  if (!text || text.trim() === '') {
    return 'Por favor, insira um texto válido.';
  }

  let resultText = text;

  // Uso do "for...of" para iterar nas palavras banidas
  for (const word of PALAVRAS_BANIDAS) {
    const regex = new RegExp(word, 'gi');

    // Condicional para verificar se o texto contém a palavra
    if (regex.test(resultText)) {
      const newWord = getRandomItem(PALAVRAS_SUBSTITUTAS);
      
      // Uso do método replace
      resultText = resultText.replace(regex, newWord);
    }

    // Exemplo de condição de parada dentro do for...of:
    // Se a palavra "PARE" for encontrada no texto original, interrompe o laço
    if (resultText.includes('PARE')) {
      break; 
    }
  }

  return resultText;
}
import { cleanText } from './textProcessor.js';
import { getRandomItem } from './utils.js';

const textarea = document.getElementById('userInput');
const btnProcess = document.getElementById('btnProcess');
const btnRandom = document.getElementById('btnRandom');
const output = document.getElementById('output');

const frasesProntas = [
  "Este código é muito ruim e chato de fazer.",
  "O projeto parece difícil, mas será péssimo se desistirmos.",
  "Hoje o dia está chato e nada funciona. PARE tudo."
];

// Evento para processar e substituir palavras
btnProcess.addEventListener('click', () => {
  const userText = textarea.value;
  
  // Condicional para verificar se há entrada
  if (userText.trim() === '') {
    output.textContent = 'Erro: Digite alguma frase no campo acima!';
    return;
  }

  const processedText = cleanText(userText);
  output.textContent = processedText;
});

// Evento para sortear uma frase aleatória
btnRandom.addEventListener('click', () => {
  const randomPhrase = getRandomItem(frasesProntas);
  textarea.value = randomPhrase;
});