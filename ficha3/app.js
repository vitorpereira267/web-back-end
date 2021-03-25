function started(){
    console.log("Started Download")
}


function update(value){
    
        console.log(value + "% of Download");
        
    
}

function completed(){
    console.log("Completed Download ")
}

function performDownload(startedF, updateF, completedF){
    startedF();

    for (let i = 0; i <= 100; i++) {
        updateF(i);
        
    }
    updateF();
    completedF();
}
var log = require("./log.js")


//performDownload(started, update, completed);

//==================================================================
// var log = require("./log.js")
// console.log(log.message);
// console.log(log.functionObj("Hello"));

const arrayUtils = require("./ArrayUtils");
var array= [12, 4, 6, 88, 9, 0];
var otherArray= [12, 4, 6, 88, 9, 0];

console.log("O array esta vazio? " + arrayUtils.isEmpty(array));
console.log("O maximo do array e: " + arrayUtils.max(array));
console.log("O minimo do array e: " + arrayUtils.min(array));
console.log("A media do array e: " + arrayUtils.average(array));

var value = 6;
console.log("O indice do valor " + value + " e: " + arrayUtils.indexOf(array, value));

var subArray = arrayUtils.subArray(array, 0, 3);

console.log("O sub array e: ", subArray);

var sameSize = arrayUtils.isSameLenght(array, otherArray);
console.log("Os array sao do mesmo tamanho: " + sameSize);

var invertedArray = arrayUtils.reverse(array);
console.log("O array invertido e: ", invertedArray);

var swappedArray = arrayUtils.swap(array, 0, 4);
console.log("O array alterado e: ", swappedArray);

console.log("O aarray contem o valor:"+ value + "? " + arrayUtils.contains(array, value));

var concatArray = arrayUtils.concat(array, otherArray);
console.log("Concatenar Array: ", concatArray);



