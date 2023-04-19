
// 01. Object literals
const object = {};

// 02. Object with new keyword or constructor object
const object2 = new Object();

// 03. Creates an object that has the specified prototype or that has null prototype.
const object3 = Object.create({name: true});
console.log(object3.name);

// 04. class constructor
class Person {
    name = 'Lofi';
    constructor(age){
        this.age = age
    }
}

const person1 = new Person(28);
console.log(person1)
console.log(person1.name)