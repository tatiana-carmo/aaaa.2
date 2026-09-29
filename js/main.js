import { buscaItemAleatorio, nomes, afirmacoesFinais } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const telaFinal = document.getElementById('tela-final');

const btnIniciar = document.getElementById('btn-iniciar');
const btnReiniciar = document.getElementById('btn-reiniciar');
const enunciadoPergunta = document.getElementById('enunciado-pergunta');
const caixaAlternativas = document.getElementById('caixa-alternativas');
const textoResultado = document.getElementById('texto-resultado');

let posicaoAtual = 0;
let nomeJogador = "";
let historicoEscolhas = [];

function iniciarJogo() {
  nomeJogador = buscaItemAleatorio(nomes);
  posicaoAtual = 0;
  historicoEscolhas = [];

  telaInicial.classList.add('escondido');
  telaFinal.classList.add('escondido');
  telaJogo.classList.remove('escondido');

  mostrarPergunta();
}

function mostrarPergunta() {
  if (posicaoAtual >= perguntas.length) {
    exibirResultadoFinal();
    return;
  }

  const perguntaAtual = perguntas[posicaoAtual];
  const enunciadoFormatado = perguntaAtual.enunciado.replace(/você/gi, nomeJogador);
  enunciadoPergunta.textContent = enunciadoFormatado;

  caixaAlternativas.innerHTML = '';

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

function exibirResultadoFinal() {
  telaJogo.classList.add('escondido');
  telaFinal.classList.remove('escondido');

  let resumo = `${nomeJogador} `;

  for (const escolha of historicoEscolhas) {
    resumo += `${escolha} e `;
  }

  const conclusaoAleatoria = buscaItemAleatorio(afirmacoesFinais);
  textoResultado.textContent = `${resumo}${conclusaoAleatoria}`;
}

btnIniciar.addEventListener('click', iniciarJogo);
btnReiniciar.addEventListener('click', iniciarJogo);