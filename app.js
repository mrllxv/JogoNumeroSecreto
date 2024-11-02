let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//função com parametro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto')
    exibirTextoNaTela('p','Escolha um Número Entre 1 e 10');
}

exibirMensagemInicial()

//função sem parametro e sem retorno
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas =`Parabéns!! Você Decobriu o Número Secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p',`O Número Secreto é Menor Que ${chute}`);
        }
        else{
            exibirTextoNaTela('p',`O Número Secreto é Maior Que ${chute}`);
        }
        tentativas++;
        limparCampo()
    }
}

//função com retorno
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosEsc = listaNumerosSorteados.length;

    if(quantidadeDeElementosEsc == numeroLimite){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}