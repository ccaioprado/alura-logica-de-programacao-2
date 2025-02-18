// // Variável que seleciona uma tag de um arquivo HTML
// let titulo = document.querySelector('h1')
// // funcção que escreve algo na tag HTML selecionada 
// // titulo.innerHTML = 'Jogo do número secreto'
// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'

let numeroSecreto = 7
let tentativas = 1
let numeroLimite = 10
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
let listaDeNumerosSorteados = []

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10')
}

exibirMensagemInicial()

function verificarChute(){
    // ".value" busca apenas o valor da linha e não a linha inteira
    let chute = document.querySelector('input').value
    console.log(numeroSecreto)
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        let mensagemTentativas = `Parabens, você adivinhou o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é maior')
        }else{
            exibirTextoNaTela('p', 'O número secreto é menor')
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite){
        quantidadeDeElementosNaLista = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }

}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}