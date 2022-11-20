
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var Tempmosqui = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel == 'Normal'){
    var Tempmosqui = 1500
}else if(nivel == 'Dificil'){
    var Tempmosqui = 1000

}else if(nivel == 'Senhor Das Moscas'){
    var Tempmosqui = 690

}

function tamanhoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)

}

tamanhoJogo()



var cronometro = setInterval(() => {
    
    tempo--
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criar_mosquito)
        window.location.href= 'Vitoria.html'
    }
    else{
        document.getElementById('cronometro').innerHTML = tempo

    }
}, 1000);

function posicaoRand(){
//Verificando se existe o elemento mosquito , se existir deletar elr para não ficar mais de um 
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas >3){
            window.location.href= 'GamerOver.html'
        }
        document.getElementById('V'+ vidas).src = 'imagens/imagens/coracao_vazio.png'
        vidas++
    }

//Randomizando a altura e largura 
    var posicaox = Math.floor(Math.random()* altura -90)
    var posicaoy = Math.floor(Math.random()* largura -90)
    console.log(posicaox,posicaoy)
//Criando elemento Html Com Js
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    mosquito.style.top = posicaox+'px'
    mosquito.style.left = posicaoy+'px'
    mosquito.style.position='absolute'
    mosquito.id = 'mosquito'
//Removendo o Mosquito se for Clicado
    mosquito.onclick = function() {
        this.remove()
    }
//Inserindo no Html como filho do body
    document.body.appendChild(mosquito)

}

//Fazendo uma função para ver o tamanho aletorio 
function tamanhoAleatorio(){
    var clase = Math.floor(Math.random()*3)

    switch(clase){
        case 0:
            return 'mosquito1 '
        case 1:
            return 'mosquito2 '
        case 2:
            return 'mosquito3 '

    }
}
//Função para ver o lado 
function ladoAleatorio(){
    var clase = Math.floor(Math.random()*2)

    switch(clase){
        case 0:
            return 'ladoB'
        case 1:
            return 'ladoA'
        

    }
}