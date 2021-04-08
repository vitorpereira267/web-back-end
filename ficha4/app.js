var person = {
    name : "Vitor",
    age : 18,
    gender : "male"
};

var personAsJSON = JSON.stringify(person)

console.log(personAsJSON.age);

var personAsObject = JSON.parse('{"name":"Vitor","age":18,"gender":"male"}');

console.log(personAsObject.name)

//---------------------------------------------------------------------

var Emitter = require("./emitter.js");
var constants = require("./config.js");


// criação de um nova instancia da Classe Emitter
var emitter = new Emitter();
//invocação do metodo ON
emitter.on("login", function() {
    console.log("o evento login 1 foi despoletado")
});

emitter.on("login", function() {
    console.log("o evento login 2 foi despoletado")
});

emitter.on("logout", function() {
    console.log("o evento logout foi despoletado")
});

emitter.emit("login");

emitter.emit("logout")
