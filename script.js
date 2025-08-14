function escolherNumero(){
    const botoes=document.getElementsByClassName("numero");
    for(let i=0; i<botoes.length; i++){
        botoes[i].addEventListener("click", function(event){
            printarInput(event.target.innerHTML)
        })
    }
}

function printarInput(simbolo){
    const apertado= document.getElementById("display")
    if(apertado.value === "0") {
        apertado.value = simbolo
    } else {
        apertado.value += simbolo
    }
}

function escolherOperador(){
    const botoes =document.getElementsByClassName("operador");
    for(let i=0;i<botoes.length;i++){
        botoes[i].addEventListener("click", function(event){
            printarInput(event.target.innerHTML)
        })
    }
}

function apagar(){
    const apagarBotao= document.getElementsByClassName("apagar");
    for(let i=0; i<apagarBotao.length; i++){
        apagarBotao[i].addEventListener("click", function(event){
            const textoBotao = event.target.innerHTML;
            if(textoBotao === "CE"){
                limparTudo()
            }else if (textoBotao === "<-x") {
                apagarUltimo();
            }
        })
    }
}

function apagarUltimo(){
    const display = document.getElementById("display");
    let valorAtual = display.value;
    if(valorAtual.length <= 1 || valorAtual === "0"){
        display.value = "0"
    } else {
        display.value = valorAtual.slice(0,-1);
    }
}

function limparTudo() {
    const display = document.getElementById("display");
    display.value = '0';
}


function calculo(){
    const display=document.getElementById("display");
    let valor= display.value;
   console.log(eval(valor.toString()))

   
}
function porcentagem(){

}

document.addEventListener("DOMContentLoaded", function (){
    escolherNumero()
    escolherOperador()
    apagar()
})