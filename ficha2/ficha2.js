



// Ex1 ---------------------------------------------------------------

// assinatura da função
/*
function calcularIMC(peso, altura){
    var imc = peso / (Math.pow(altura,2));
    return imc;

}

function verificarIMC(peso, altura){
    var imc = calcularIMC(peso, altura);
    if(imc < 18.5){
        console.log("IMC: " + imc + " - Está abaixo do peso!");
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("IMC: " + imc + " - Está no peso normal!");
    }
    else if(imc >= 25 && imc < 30){
        console.log("IMC: " + imc + " - Está acima do peso!");
    }
    else{
        console.log("IMC: " + imc + " - Acima de 30");
    }
}

//invocação da função com argumentoes e atribuição a variável
var imc = calcularIMC(80, 2);

// imprimir o resultado na consola
console.log(imc);

console.log(calcularIMC(70, 2));

verificarIMC(110, 2);*/


// Ex2 -----------------------------------------------------------


/*function invertWord(str){
    var inv = "";
    for (let index = str.length - 1; index >= 0 ; index--) {
        inv = inv + str[index];
        
    }

    return inv;
}

function invertString(str, pattern){
    var inv = "";
    var split = str.split(pattern);

    for (let index = 0; index < split.length; index++) {
        var word = invertWord(split[index]);
        inv += word + " ";
        
    }
    return inv;
}


var invertedStr = invertString("Hoje e Domingo");
console.log(invertedStr); */

// Ex3 ---------------------------------------------------------------


/* function contarVogais(str){
    var contar = 0;
    var vogais = ["a", "e", "i", "o", "u"];

    for (let index = 0; index < str.length; index++) {
        for (let j= 0; index < vogais.length; j++) {
            if (str[index] == vogais[j]){           // caso tive a pedir para contar aas consoantes if (str[index] != vogais[j]){
                count++;
            }
            
        }
        return contar;
    }

    for (let index = 0; index < str.length; index++) {
        if(str[index] == "a" || str[index] == "e" || str[index] == "i" || str[index] == "o" || str[index] == "u"){
        contar++;
        }
    }

    return contar;
}

var vogais = contarVogais("Hello");
console.log(vogais); */

// Ex4 --------------------------------------------------------------

/*function contarLetras(str, letras){
    str = str.toLowerCase()
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        if(str[index] == letras){
            count++;
        }
    }
    return count;
}

var count = contarLetras("HellE", "e");
console.log(count);*/

// Ex5 ---------------------------------------------------------------

/*function calculateWorking(he, me, se, hs, ms, ss){

    if(he < 8 || hs > 18){
        console.log("Horario nao permitido!!!");
        return;
    }
    var entradaSecundos = he * 3600 + me + 60 + se;
    var saidaSecundos = hs * 3600 + ms * 60 + ss;

    var tempotrabalhoEmpregado = entradaSecundos - saidaSecundos;

    var remainderHour= tempotrabalhoEmpregado % 3600;
    var hours = (tempotrabalhoEmpregado - remainderHour) / 3600;
    var remainderMinutos = remainderHour % 60;
    var minutos = (remainderHour - remainderMinutos) / 60;

    console.log("Tempo de trabalho:" + hours + ":" + minutos + ":" + remainderMinutos);

    
}

calculateWorking(8,35,0,16,0,30);*/

// Ex6 ---------------------------------------------------------------------


function drawRectangle(width, height){
    var line = "";
    for (let j = 0; i < height; j++) {
        for (let i = 0; i < width; i++) {
        line+-"*";
        }
    console.log(line);
    }
}

drawRectangle(5,3);