function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}



Person.prototype.greet = function(){
    console.log("Hello" + this.firstName + " " + this.lastName + " " + this.age + " " + this.gender);
}

Person.prototype.gender = "N/A"

var p1 = new Person("David", "Jardim", 23);
var p2 = new Person("MAria", "Pontes", 53);
var p3 = p1;
var p4 = new Person("Vitor", "Pereira", 25);

var p3 = p1;

p1.gender = "M";
p2.gender = "F";

console.log(p1 == p3);
console.log(p1 == p2);
console.log(p2 == p4);
console.log(p2.gender);

p1.greet();
p2.greet();

console.log(p1.__proto__);
console.log(p2.__proto__ == p2.__proto__);

