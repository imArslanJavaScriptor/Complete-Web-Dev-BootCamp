let userCar = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  manufactureDetails: function () {
    return `Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}
// console.log(userCar.manufactureDetails());

function Book(title, authjor, year) {
  this.title = title;
  this.authjor = authjor;
  this.year = year;
  this.BookSummary = function() {
    return `${this.title} is written by ${this.authjor} in the year ${this.year}`;
  }
}

let myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let anotherBook = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// console.log(myBook.BookSummary());

function Animal(type) {
  this.type = type;
}

// Adding method to prototype
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Animal.prototype.eat = function() {
  return `${this.type} is eating`;
}

// Making objects
let dog = new Animal("Dog");
let cat = new Animal("Cat");
// console.log(dog.speak());
// console.log(cat.eat());
// console.log("Dog:", Object.values(dog));

// Extending Built-in Prototypes
Array.prototype.current = function () {
  return `Custom method ${this}`;
};

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [60, 70, 80, 90];

// console.log(arr1.current())
// console.log(arr2.current())

String.prototype.woo = function() {
  return `Wooo! Beautiful ${this.toUpperCase()}`;
}

let myName= "Arslan";
// console.log(myName.woo());

class Vehicle {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  VehicleInfo = () => {
    return `Vehicle Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}


let myCar = new Vehicle("Toyota", "Corolla", 2020);
// console.log(myCar.VehicleInfo());

// Inheritance using Classes
class MyCar extends Vehicle {
  // By adding this extends keyword i can inherit data form Vehicle class.
  drive = () => {
    return `My ${this.make} is a ${this.model} I Bought it in ${this.year}`;
  }
}

let myTesla = new MyCar("Tesla", "Cyber Truck", 2025);
// console.log(myTesla.drive()) // From My Car class
// console.log(myTesla.VehicleInfo()); // Inerited from Vehicle class



// Encapsulation: It simple mean is i want to restrict direct access to the class or Object data.

class BankAccount {
  constructor(avgMonthlyBalance = 0) {
    this.#avgMonthlyBalance = avgMonthlyBalance;
  }

  availableFunds = 0; 
  // This is public property anyone can access it from outside the class.

  #balance = 0;
  #avgMonthlyBalance = 0;
  // Here i make this #balance & #avgMonthlyBalance private by using # symbol. 
  // Now i can use this inside the class only but no body can access it from outside the class.

  deposit(amount) {
    this.#balance += amount
    return `Successfully Deposited $${amount}. Your New Balance is: $${this.#balance}`;
  }

  widraw(amount) {
    if(amount > this.#balance) {
      return `Insufficient Funds! Your Current Balance is: $${this.#balance}`;
    }
    this.#balance -= amount;
    return `Successfully Withdrew $${amount}. Your New Balance is: $${this.#balance}`;

  }

  avgMonthlyBalance = () => `Your Avg Monthly Balance: ${this.#avgMonthlyBalance}`
  getBalance = () => `Your Current Balance $ ${this.#balance}`;
}

let account = new BankAccount();
// console.log("Available Funds:", account.availableFunds)
// console.log(account.getBalance());
// console.log(account.avgMonthlyBalance())
// console.log(account.deposit(5000));
// console.log(account.getBalance());
// console.log(account.widraw(3980));


// Abstraction: Hiding complex implementation details and showing only the necessary features to the user.

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
    // return `${this.start()} + ${this.brewCoffee()}`;
  }
}

// let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism: The ability of something to have or to be displayed in more then one form. and it can be achieved through method overriding and method overloading.
//Method Overriding: It is a feature that allows a subclass or child class to provide a specific implementation of a method that is already defined in its superclass or parent class.

//Method Overloading: It is a feature that allows a class to have more than one method with the same name, but with different parameters (different type or number of parameters). JavaScript does not support method overloading natively, but we can achieve similar behavior using default parameters or by checking the types and number of arguments within a single method.

class Bird {
  constructor(birdName) {
    this.birdName = birdName;
  } 

  fly = () => {
    return `${this.birdName} is flying...`;
  }
}

class Penguin extends Bird { // Pengium have the access of the Bird class method but here i we are overriding it in this child class.
  fly = () => {
    return `Penguins cannot fly`;
  }
}

let sparrow = new Bird("Sparrow");
let penguin = new Penguin("Penguin");

// console.log(sparrow.fly());
// console.log(penguin.fly());


// static method

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
// }

// Static Methods are only be called by its class only no body can call it by creating its object.

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

// Getters and setters

// class Employee {
//   #salary;
//   constructor(name, salary) {
//     if (salary < 0) {
//       throw new Error("Salary cannot be in negative");
//     }
//     this.name = name;
//     this.#salary = salary;
//   }

//   get salary() {
//     return `You are not allowed to see salary`;
//   }

//   set salary(value) {
//     if (value < 0) {
//       console.error("Invalid Salary");
//     } else {
//       this._salary = value;
//     }
//   }
// }
// let emp = new Employee("Alice", -50000);
// // console.log(emp._salary);
// emp.salary = 60000;
