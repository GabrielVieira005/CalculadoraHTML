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
            }else if(operador==="P"){
                ehPrimo()
            }else if(operador==="FAT"){
                fatorial()
            }else if(operador=== "√"){
                radiciacao()
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

    let resultado = eval(valor);
   
    display.value= resultado
}

function porcentagem(){
    const display = document.getElementById("display");
    let expressao = display.value;
    let regex = /(-?\d+\.?\d*)\s*([+\-*/])\s*(-?\d+\.?\d*)$/;
    let match = expressao.match(regex);
    
    if (match) {
        let numeroBase = parseFloat(match[1]);        
        let operador = match[2];                      
        let numeroParaPorcentagem = parseFloat(match[3]); 
        
        let porcentagem = (numeroBase * numeroParaPorcentagem) / 100;
        
        display.value = expressao.replace(regex, numeroBase + operador + porcentagem);
    } else {
        let regex2 = /(-?\d+\.?\d*)$/;
        let match2 = expressao.match(regex2);
        if (match2) {
            let numero = parseFloat(match2[0]);
            let resultado = numero / 100;
            display.value = expressao.replace(regex2, resultado.toString());
        }
    }
}

function elevar(){
    const display = document.getElementById("display");
    let expressao = display.value;
    let regex = /(-?\d+\.?\d*)$/;
    let match = expressao.match(regex);
    let ultimoNumero = match[1];
    let numero = parseFloat(ultimoNumero);
    let resultado = Math.pow(numero, 2);    
    
    display.value = expressao.replace(regex, resultado.toString());
}

function contaDivisores(numero) {
    numero = parseInt(numero); 
    let count = 0;
    for(let i = 1; i <= numero; i++) {
        if(numero % i === 0) {
            count++;
        }
    }
    return count;
}

function ehPrimo(){
    const display = document.getElementById("display");
    let numero = display.value;    
    if(contaDivisores(eval(numero)) === 2) {
        display.value = "É primo";
    } else {
        display.value = "Não é primo";
    }
}

function fatorial(){
    const display= document.getElementById("display")
    let numero= display.value
    let resultado=1
    for(let i=2; i<=numero;i++){
        resultado*=i
    }
    display.value=resultado
    
}

function radiciacao(){
    const display = document.getElementById("display");
    let expressao = display.value;
    let regex = /(-?\d+\.?\d*)$/;
    let match = expressao.match(regex);
    let ultimoNumero = match[1];
    let numero = parseFloat(ultimoNumero);
    let resultado = Math.sqrt(numero, 2);    
    
    display.value = expressao.replace(regex, resultado.toString());

}
document.addEventListener("DOMContentLoaded", function (){
    escolherNumero()
    escolherOperador()
    apagar()
})