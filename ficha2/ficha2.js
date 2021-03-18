



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
/*function drawRectangle(width, height) {
    for (let j = 0; j < height; j++) {
        var line = "";
        for (let i = 0; i < width; i++) {
            line += "*";
            count++;
        }
        console.log(line);
    }

}

drawRectangle(5, 3);*/
// Ex7 ---------------------------------------------------------------------

/*function drawTriangle(width, height){
    for (let j = 0; j < height; j++) {
        var line = "";
        for (let i = 0; i < j; i++) {
        line+="*";
        }
    console.log(line);
    }
}

drawTriangle(10);*/


// Ex8 ----------------------------------------------------------------------

/*function drawBox(width, height){
    for (let j = 0; j < height; j++) {
        var line = "";
        for (let i = 0; i < width; i++) {
            
            if(j == 0 || j == height - 1 || i == 0 || i == width - 1){
                line += "*";
            }
            else{
                line += " ";
            }   
        }
        console.log(line);
    }
}
console.log("");

drawBox(10, 10);*/

// Ex9 ------------------------------------------------------------------------

var student1 = {firstName: "Pedro", lastName: "Marques", age: 20, grade: 16.5, getGrade: function(){;
return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student2 = {firstName: "David", lastName: "Tiago", age: 17, grade: 14.5, getGrade: function(){;
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student3 = {firstName: "Sofia", lastName: "Bond", age: 23, grade: 13.5, getGrade: function(){;
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student4 = {firstName: "Marco", lastName: "Saint", age: 19, grade: 17.5, getGrade: function(){;
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student5 = {firstName: "Andre", lastName: "Raul", age: 21, grade: 15.5, getGrade: function(){;
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student6 = {firstName: "Ana", lastName: "Duarte", age: 20, grade: 12.5, getGrade: function(){;
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student7 = {firstName: "Joana", lastName: "Matos", age: 24, grade: 20, getGrade: function(){;
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student8 = {firstName: "Paulo", lastName: "Figueira", age: 18, grade: 9.5, getGrade: function(){;
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};
var student9 = {firstName: "Ivan",lastName: "Santos",age: 28,grade: 1, getGrade: function(){
    return this.firstName + " " + this.lastName + "com idade:" + this.age + " teve:" +  this.grade
}};

var studentsList = [];

studentsList.push(student1);
studentsList.push(student2);
studentsList.push(student3);
studentsList.push(student4);
studentsList.push(student5);
studentsList.push(student6);
studentsList.push(student7);
studentsList.push(student8);
studentsList.push(student9);

function displayGrades(array){
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        console.log(student.firstName + " " + student.lastName + "com idade:" + student.age + "teve:" + student.grade);
        
    }
}

displayGrades(studentsList);

function getBestGrade(array) {
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i].grade > max.grade){
            max = array[i];
        }
    }
    return max;
}

var BestGrade = getBestGrade(studentsList);
console.log();
console.log("Melhor aluno:");
console.log(BestGrade.getGrade());

