// classe
class Emitter{
    constructor(){
        //propriedade
        this.events = {};
    }
}

//função ou metodo
Emitter.prototype.on = function(type, listener){
    console.log("Type: " + type + "Listener: " + listener);
}

// criação de um nova instancia da Classe Emitter
var emitter = new Emitter();
//invocação do metodo ON
emitter.on("Tipo", "Ouvinte");