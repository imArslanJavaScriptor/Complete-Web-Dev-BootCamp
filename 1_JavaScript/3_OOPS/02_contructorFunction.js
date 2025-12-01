function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, Class, section, grades, performace, behaviour) {
  this.name = name
  this.age = age
  this.Class = Class
  this.section = section
  this.grades = grades
  this.performace = performace
  this.behaviour = behaviour
}


const student1 = new Student("Arslan", 20, "BSCS", "A", ["A+", "A+", "A+", "A","A", "A+"], "Excellent", {withTeachers: "Very Good and Respectful", withClassmates: "Postive Attitude with Leader Skills"});
console.log(student1);

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type} tea`;
  };
}
const OlongTea = new Tea("Olong");
console.log(OlongTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());

// function Drink(name) {
//   if (!new.target) { // !new.target to check whether user used the new keyword or not
//     throw new Error("Drink must be called with new keyword");
//   }
//   this.name = name;
// }
// let tea = new Drink("tea");
// let coffee = Drink("coffee");
