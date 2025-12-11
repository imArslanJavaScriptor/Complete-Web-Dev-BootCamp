// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new Person("Arslan", 20)
// console.log(user1)

// function Student(name, age, Class, section, grades, performace, behaviour) {
//   this.name = name
//   this.age = age
//   this.Class = Class
//   this.section = section
//   this.grades = grades
//   this.performace = performace
//   this.behaviour = behaviour
// }


// const student1 = new Student("Arslan", 20, "BSCS", "A", ["A+", "A+", "A+", "A","A", "A+"], "Excellent", {withTeachers: "Very Good and Respectful", withClassmates: "Postive Attitude with Leader Skills"});
// console.log(student1);

// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// let myCar = new Car("Toyota", "Camry");
// // console.log(myCar);

// let myNewCar = Car("Tata", "Safari");
// // console.log(myNewCar);

// function Tea(type) {
//   this.type = type;
//   this.describe = function () {
//     return `this is a cup of ${this.type} tea`;
//   };
// }
// const OlongTea = new Tea("Olong");
// console.log(OlongTea.describe());

// function Animal(species) {
//   this.species = species;
// }

// Animal.prototype.sound = function () {
//   return `${this.species} makes a sound`;
// };

// let dog = new Animal("Dog");
// // console.log(dog.sound());

// let cat = new Animal("cat");
// // console.log(cat.sound());

// // function Drink(name) {
// //   if (!new.target) { // !new.target to check whether user used the new keyword or not
// //     throw new Error("Drink must be called with new keyword");
// //   }
// //   this.name = name;
// // }
// // let tea = new Drink("tea");
// // let coffee = Drink("coffee");


// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// What JavaScript REALLY does when you use "new"
/*
const user1 = {};
user1.__proto__ = Person.prototype;  // (step 3: inheritance link)
this = user1;                        // (step 2: this points to new obj)

Person.call(user1, "Arslan", 20);    // runs the function with this = user1

// Inside Person():
// this.name = "Arslan"  → user1.name = "Arslan"
// this.age = 20         → user1.age = 20

return user1; // (step 4: auto return)
*/



function Person(name, age) {
  if (!(this instanceof Person)) {
    return new Person(name, age);  // Fix forgotten "new"
  }
  this.name = name;
  this.age = age;
}

// Now both work:
const a = Person("Arslan", 20);     // Works even without new!
const b = new Person("Sara", 22);    // Also works normally

console.log(a); // { name: "Arslan", age: 20 }
console.log(b); // { name: "Sara",   age: 22 }


// But Recommended and Modern Method is Following:
class ModernPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user = new ModernPerson("Arslan", 20); // Must use "new" – clearer intent!
console.log(user)