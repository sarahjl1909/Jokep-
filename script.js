
var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;

var computadorPontos = 0;
var computadorEscolha = 0;

//Exibe mensagem no console
function mensagem(texto){
    document.getElementById('mensagem').innerHTML = texto;
}

function definirNomeJogador(nome){
    document.getElementById('jogador-nome').innerHTML = nome;
}


//sortea entre dois números

function sortear(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function somarPontosJogador(){
    jogadorPontos = jogadorPontos + 1;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;

}

function somarPontosComputador(){
    computadorPontos = computadorPontos + 1;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;

}

function selecionar(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

function deselecionar(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');

}


//calcula e retorna o ganhador

function calcularEscolha(jogador, computador){

    if(jogador == 1 && computador == 1){
        return 0;
    } else if(jogador == 1 && computador == 2){
        return 2;

    } else if(jogador == 1 && computador == 3){
        return 1;
    }

    else if(jogador == 2 && computador == 1){
        return 1;
    } else if(jogador == 2 && computador == 2){
        return 0;

    } else if(jogador == 2 && computador == 3){
        return 2;
    }

    else if(jogador == 3 && computador == 1){
        return 2;
    } else if(jogador == 3 && computador == 2){
        return 1;

    } else if(jogador == 3 && computador == 3){
        return 0;
    }

    

}

//escolhe a jogada do usuário
// 1 pedra
// 2 papel
// 3 tesoura
function jogar(escolha){
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    //sortear a jogada para o computador
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    
    //calcular qm ganhou

    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if(ganhador == 0){
        mensagem('Empate');
    }
    else if(ganhador == 1){
        mensagem('Ponto para '+jogadorNome);
        somarPontosJogador();
    }
    else if(ganhador == 2){
        mensagem('Ponto para Computador');
        somarPontosComputador();
    }
    
    setTimeout(function() { 
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);

        mensagem(jogadorNome + ' escolha uma opção...')
    }, 1500);

    //exebir para o usuário
}

document.getElementById('jogador-escolha-1').onclick = function(){ jogar(1);};
document.getElementById('jogador-escolha-2').onclick = function(){ jogar(2);};
document.getElementById('jogador-escolha-3').onclick = function(){ jogar(3);};

jogadorNome = prompt('Qual seu nome?');

mensagem('Bem vindo(a) ' + jogadorNome + ' está preparado? Escolha uma opção acima...');

definirNomeJogador(jogadorNome);



