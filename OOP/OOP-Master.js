let Car = {
  Make: "Honda",
  Model: "Civic",
  Varitent: "Top of the Line Varient",
  about: function () {
    return `I have ${this.Make} ${this.Model} ${this.Varitent}`;
  },
};

// console.log(Car.about());

function Person(name, age, carrierStatus) {
  this.name = name;
  this.age = age;
  this.carrierStatus = carrierStatus;
}

Person.prototype.aboutYou = function () {
  return `${this.name} is ${this.age} old and Currenlty ${
    this.carrierStatus === false ? "Jobless" : "Doing Job"
  }`;
};

let person1 = new Person("Hadi", 24, true);
let person2 = new Person("Mumtahin", 20, false);

// console.log(person1.aboutYou());
// console.log(person2.aboutYou());

// Adding Custom Method into String
String.prototype.Arslan = function() {
  return `Arslan Knows you're ${this}`
}

let user1 = "Zohaib"
// console.log(user1.Arslan())

// Adding a Custom Method into Array
Array.prototype.addition = function() {
  return this.map((num, index) => {
    if (typeof num === "number") {
      return num + index;
    }
    return `Invalid item at index ${index}`;
  });
};

let arrOne = [1, 2, 3, 4, 5];
// console.log(arrOne.addition()); 

// Practice and Understand The Diffrence B/W Proto and Prototype
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

const dog = new Animal("Dog");
// console.log(dog.speak()); // What does this output?
// console.log(dog.__proto__ === Animal.prototype); // True or False?

// Inheritance

// class MyVehicle {
//   constructor(Make, Model, regModel) {
//     this.Make = Make
//     this.Model = Model
//     this.regModel = regModel;
//   }
//   about() {
//     return `I have ${this.Make} ${this.Model} ${this.regModel} Model`
//   }
// }

// class MyCar extends MyVehicle {
//   drive() {
//     return `${this.Make} : This Make Property is Inheriting From Vehicle Class`; // Class Inheritance Example
//   }
// }

// let newCar = new MyCar("Honda", "Civic", 2024);
// console.log(newCar)
// console.log(newCar.drive())
// console.log(newCar.about())
// console.log(newCar.hasOwnProperty())


class Vehicle {
  constructor(Make, Model) {
    this.Make = Make
    this.Model = Model
  }

  about() {
    return `I have ${this.Make} ${this.Model}`
  }
}


class MyCar extends Vehicle {
  drive() {
    return `i am driving ${this.Make} ${this.Model} Car`
  }
}

// Parent class Object
let car2 = new Vehicle("Toyota", "Camry")
// console.log(car2.about())

// Child class Object instence
let car1 = new MyCar("Honda", "Civic")
// console.log(car1.about())
// console.log(car1.drive())


// Encapsulation: is a process that restrcit the direct access to Object Data
class BankAccount {
  #balance = 0

  deposit(ammount) {
    this.#balance += ammount
    return this.#balance
  }

  getBalance() {
    return `$${this.#balance}`
  }
}

let account1 = new BankAccount()
// console.log(account1.balance)
account1.deposit(1000)
// console.log(account1.getBalance())

// Abstraction : hides internal details and complex logics it just provides you the simple way of use this. like a cofee machine you don't know how it works internaly you just press the button and it will perform all the actions and makes cofee for you.

class CoffeMachine{
  start(){
    // call DB
    // filter value
    return `Starting the machine...`
  }

  brewCoffee() {
    // Complex calculation
    return  `Brewing coffee`
  }
  
  pressStartButton() {
    let msg1 =  this.start() 
    let msg2 = this.brewCoffee()
    return `${msg1} ${msg2}`
  }
}

let myMachine = new CoffeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())

// Perform Both at once using this Method
// console.log(myMachine.pressStartButton())


// Polymorphism
/*
Polymorphism is one of the most important concepts in OOP. It describes the ability of something to have or to be displayed in more than one form. The different forms arise because these entities can be assigned different meanings and used in various ways in multiple contexts.
*/

class Bird{
  fly() {
    return `Flying...`
  }
}

class Pengiun extends Bird {
  fly() {
    return `Pengiuns can't fly`
  }
}


let sparrow = new Bird()
let pengiun = new Pengiun()
// console.log(sparrow.fly())
// console.log(pengiun.fly())

// Static Methods: these are the sepecial methods which can only be called with class it self nobody else can call it.
class Calculator{
  static add(a, b){
    return a  + b
  }

  subtract(a, b) {
    return a - b
  }
}

let calc1 = new Calculator()
// console.log(calc1.add(10,20)) This will throw Error
// console.log(Calculator.add(20,30))

// console.log(calc1.subtract(30,20))
// console.log(Calculator.subtract(20,30)) This will throw Error

// Getters & Setters
class Employee {
  #salary; // Private property

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary Cannot be Negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  // Getter (retrieves the value securely)
  get salary() {
    return `Salary is Confidential`; // Doesn't expose private property directly
    // return this.#salary
  }

  // Setter (validates before modifying)
  set salary(value) {
    if (value < 0) {
      throw new Error("Salary Cannot be Negative");
    }
    this.#salary = value; // ✅ Correctly updating private property
  }
}

let emp1 = new Employee("Rohail", 50000);
console.log(emp1.salary); // Output: Salary is Confidential

emp1.salary = 60000; // ✅ Updates salary successfully
console.log(emp1.salary); // Output: Salary is Confidential (getter doesn't show real value)
