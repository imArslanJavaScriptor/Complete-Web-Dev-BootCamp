function Person(name, age) {
    this.name = name
    this.age = age
}

let person1 = new Person("Arslan", 20)
let person2 = new Person("Nameer", 30)
let person3 = new Person("Mahira", 40)

console.log(person1)
console.log(person2)
console.log(person3)

function person(name, age) {
    return name + " " + age
}

let per1 = person("Arslan", 20)
let per2 = person("HRX", 50)
let per3 = person("Margret", 35)

console.log(per1)
console.log(per2)
console.log(per3)

function Tea(type) {
    this.type = type
    this.description = function() {
        return `This is a cup of ${this.type} tea`
    }
}

let oolongTea = new Tea("Oolong")
let lemonTea = new Tea("Lemon")
let dalChini = new Tea("Dal Chini")

console.log(oolongTea.description())
console.log(lemonTea.description())
console.log(dalChini.description())

function SportsCar(make) {
    this.make = make
}

SportsCar.prototype.sound = function() {
    return `${this.make} Sport Cars Produce Solid Sound`
}


let mazda = new SportsCar("Mazda")
let ferari = new SportsCar("Ferari")
console.log(mazda.sound())
console.log(ferari.sound())

function Drink(name){
    if(!new.target) {
        throw new Error("Drink Must be called with new constructor")
    }
    this.name = name
}

let mango = Drink("Mango Shake")