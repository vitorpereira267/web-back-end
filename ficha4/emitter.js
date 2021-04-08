// classe
class Emitter{
    constructor(){
        //propriedade
        this.events = {};
    }
}

//função ou metodo
Emitter.prototype.on = function(type, listener){
  if( this.events[type] == undefined){
      this.events[type] = [];
  }

  this.events[type].push(listener);
}

Emitter.prototype.on = function(type, listener){
    if( this.events[type] != undefined){
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
  
    this.events[type].push(listener);
  }


  module.exports = Emitter;

  

// criação de um nova instancia da Classe Emitter
var emitter = new Emitter();
//invocação do metodo ON
emitter.on("login", function() {
    console.log("o evento foi despoletado")
});

emitter.on("logout", function() {
    console.log("o evento logout foi despoletado")
});


