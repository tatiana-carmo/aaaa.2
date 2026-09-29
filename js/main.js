import { buscaItemAleatorio, nomes, afirmacoesFinais } from './aleatorio.js';
import { perguntas } from './perguntas.js';

// Elementos da DOM
const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const telaFinal = document.getElementById('tela-final');

const btnIniciar = document.getElementById('btn-iniciar');
const btnReiniciar = document.getElementById('btn-reiniciar');
const enunciadoPergunta = document.getElementById('enunciado-pergunta');
const caixaAlternativas = document.getElementById('caixa-alternativas');
const textoResultado = document.getElementById('texto-resultado');

// Variáveis de estado do jogo
let posicaoAtual = 0;
let nomeJogador = "";
let historicoEscolhas = [];

// Função para iniciar o jogo
function iniciarJogo() {
  // Sorteia um nome aleatório
  nomeJogador = buscaItemAleatorio(nomes);
  posicaoAtual = 0;
  historicoEscolhas = [];

  telaInicial.classList.add('escondido');
  telaFinal.classList.add('escondido');
  telaJogo.classList.remove('escondido');

  mostrarPergunta();
}

// Exibe a pergunta atual
function mostrarPergunta() {
  // Condicional de parada: se chegou ao fim das perguntas
  if (posicaoAtual >= perguntas.length) {
    exibirResultadoFinal();
    return;
  }

  const perguntaAtual = perguntas[posicaoAtual];

  // Aplica o método replace() substituindo "você" pelo nome sorteado
  const enunciadoFormatado = perguntaAtual.enunciado.replace(/você/gi, nomeJogador);
  enunciadoPergunta.textContent = enunciadoFormatado;

  caixaAlternativas.innerHTML = '';

  // Cria botões para cada alternativa
  for (const alternativa of perguntaAtual.alternativas) {
    const botao = document.createElement('button');
    botao.textContent = alternativa.texto;
    botao.classList.add('btn');
    
    botao.addEventListener('click', () => {
      historicoEscolhas.push(alternativa.afirmacao);
      posicaoAtual++;
      mostrarPergunta();
    });

    caixaAlternativas.appendChild(botao);
  }
}

// Exibe a tela final consolidando os resultados
function exibirResultadoFinal() {
  telaJogo.classList.add('escondido');
  telaFinal.classList.remove('escondido');

  let resumo = `${nomeJogador} `;

  // Utilizando "for...of" para construir a narrativa final
  for (const escolha of historicoEscolhas) {
    // CONDIÇÃO DE PARADA DENTRO DO LAÇO (Exemplo prático):
    // Se o histórico registrar interrupção crítica, para a iteração antecipadamente
    if (escolha.includes("PARAR")) {
      break;
    }
    resumo += `${escolha} e `;
  }

  // Adiciona uma afirmação aleatória ao final
  const conclusaoAleatoria = buscaItemAleatorio(afirmacoesFinais);
  textoResultado.textContent = `${resumo}${conclusaoAleatoria}`;
}

// Event Listeners dos botões
btnIniciar.addEventListener('click', iniciarJogo);
btnReiniciar.addEventListener('click', iniciarJogo);