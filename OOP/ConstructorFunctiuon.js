function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make, model) {
    this.make = make
    this.model = model
}

let myCar = new Car("Honda", "Civic")
let myCar2 = new Car("Toyota", "Camry")
console.log(myCar)
console.log(myCar2)

function Tea(teaType) {
    this.teaType = teaType
    this.describe = function() {
        return `This is a Cup of ${this.teaType}`
    }
}

let tea1 = new Tea("Green")
let tea2 = new Tea("Lemon")

function Animal(species) {
    this.species = species
}

Animal.prototype.sound = function() {
    return `${this.species} makes Intresting Sound`
}

let cat = new Animal("Cat")
console.log(cat.sound())

let dog = new Animal("Dog")
console.log(dog.sound())


function Juice(name) {
    if(!new.target) {
        throw new Error("use new keyword is must here.")
    }
    this.name = name

}

let juice1 =  Juice("Apple Juice")
let juice2 = new Juice("Mango Juice")
console.log(juice1)
console.log(juice2)