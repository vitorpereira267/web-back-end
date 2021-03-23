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

const arrayUtils = require("./ArrayUtils");
//performDownload(started, update, completed);

//==================================================================
// var log = require("./log.js")
// console.log(log.message);
// console.log(log.functionObj("Hello"));

var log = require("./ArrayUtils.js")
var array= [12, 4, 6, 88, 9, 0];
console.log("O array esta vazio? " + arrayUtils.isEmpty(array));
console.log("O maximo do array e: " + arrayUtils.max(array));
console.log("O minimo do array e: " + arrayUtils.min(array));