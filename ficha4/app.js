var person = {
    name : "Vitor",
    age : 18,
    gender : "male"
};

var personAsJSON = JSON.stringify(person)

console.log(personAsJSON.age);

var personAsObject = JSON.parse('{"name":"Vitor","age":18,"gender":"male"}');

console.log(personAsObject.name)

