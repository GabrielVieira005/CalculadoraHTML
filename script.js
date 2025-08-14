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
            const operador= event.target.innerHTML

            if(operador=== "x²"){
                elevar()
            }else if(operador=== "%"){
                porcentagem()
            }else if(operador=== "="){
                calculo()
            }else{
                printarInput(operador)
            }
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
            }else if (textoBotao === "C") {
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

    valor=valor.replace(/×/g, '*')
    valor=valor.replace(/÷/g, '/')

    display.value=eval(valor)
}

function porcentagem(){
    const display= document.getElementById("display")
    let valor= parseFloat(display.value)

    display.value =  valor/100
}

function elevar(){
    const display= document.getElementById("display")
    let valor= display.value
    display.value= valor*valor
}


document.addEventListener("DOMContentLoaded", function (){
    escolherNumero()
    escolherOperador()
    apagar()
})