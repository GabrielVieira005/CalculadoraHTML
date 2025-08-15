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

    // Verificar se o valor não está vazio ou é apenas operadores
    if(!valor || valor.trim() === "" || /^[\+\-\*\/\×÷]+$/.test(valor)) {
        display.value = "Erro";
        return;
    }

    valor=valor.replace(/×/g, '*')
    valor=valor.replace(/÷/g, '/')

    try {
        let resultado = eval(valor);
        
        // Verificar se o resultado é um número válido
        if(isNaN(resultado) || !isFinite(resultado)) {
            display.value = "Erro";
        } else {
            // Arredondar para evitar problemas de ponto flutuante
            display.value = Math.round(resultado * 100000000) / 100000000;
        }
    } catch(error) {
        display.value = "Erro";
    }
}

function porcentagem(){
    const display= document.getElementById("display")
    let valor= parseFloat(display.value)
    
    // Verificar se o valor é um número válido
    if(isNaN(valor)) {
        display.value = "Erro";
        return;
    }
    
    display.value = valor/100
}

function elevar(){
    const display = document.getElementById("display");
    let expressao = display.value;
    let regex = /(-?\d+\.?\d*)$/;
    let match = expressao.match(regex);
    let ultimoNumero = match[1];
    let numero = parseFloat(ultimoNumero);
    let resultado = Math.pow(numero, 2);    
    resultado = Math.round(resultado * 100000000) / 100000000;
  
    display.value = expressao.replace(regex, resultado.toString());
}

document.addEventListener("DOMContentLoaded", function (){
    escolherNumero()
    escolherOperador()
    apagar()
})