// Defination
// "Prototype inheritance means objects automatically get access to properties and methods from their prototype (parent object), creating a chain of inheritance."

// Bonus Explanation with Analogy:
// Think of it like a family recipe book:

// Every object has a "parent recipe book" (prototype)

// If a property/method isn't found in the object, JavaScript checks:

// Its immediate prototype (parent)

// Then the prototype's prototype (grandparent)

// And so up the chain

// This continues until it finds what it needs or reaches the end (null)

const parent = { greet() { return "Hello!" } };
const child = Object.create(parent);
console.log(child.greet()); // "Hello!" (inherited from prototype)


// Another Example
function Person(name) {
    this.name = name
}
Person.prototype.greet = function() {
    return `Hello My Name is ${this.name}`
}
let ars = new Person("Arslan")
console.log(ars.greet())