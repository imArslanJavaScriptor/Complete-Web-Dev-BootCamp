// Simple Function
let car = {
  make: "Honda",
  model: "Civic",
  year: 2025,
  start: function () {
    return `${this.make} ${this.model} Car is my favourite Car and it's Latest Model is ${this.year} `;
  },
};
// console.log(car.start());

// Sample on Class Function or Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let Per1 = new Person("Arslan", 20);
let Per2 = new Person("Nameer", 30);

// console.log(Per1.name);
// console.log(Per2.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} Can Speak`;
};

// Injecting Custom Method in Any Data-Type
Array.prototype.SumOfNum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

let arr = [1, 2, 3, 4, 500];
let arr2 = [100, 200, 3, 4, 5];

// console.log(arr.SumOfNum());
// console.log(arr2.SumOfNum());

// Class with Constructor and Method === functions inside class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  yourCarInfo() {
    return `I have a ${this.make} ${this.model} ${this.year} model`;
  }
}

// Inheritance This Car Now have access all the proerties and methods comming from Vehicles
class Car extends Vehicle {
  drive() {
    return `I'm Driving ${this.make} ${this.model} Car`;
  }
}
let car1 = new Vehicle("Honda", "Civic", 2025);
let car2 = new Vehicle("Toyota", "Camry", 2022);

// console.log(car1.yourCarInfo())
// console.log(car2.yourCarInfo())

let driveCar1 = new Car("Honda", "Civic");
let driveCar2 = new Car("Honda", "City");

// console.log(driveCar1.drive())
// console.log(driveCar2.drive())

// Encapsulation => Simpley Means i want to restrict the direct access to object data
class BankAccount {
  #balace = 0;

  deposit(amount) {
    this.#balace += amount; // Now i have the access to this #balance but no body outside the class will access it.
    return this.#balace;
  }

  getBalance() {
    return `$ ${this.#balace}`;
  }
}

let account = new BankAccount()
// console.log(account.#balance) not accessable outside the class
// console.log(account.deposit(1000))
// console.log(account.getBalance())

// Abstraction => It hides the complex implmentation details
class CoffeMachine {
    start() {
        // call DB
        // filter value
        return  `Starting the machine...`
    }

    brewCoffee() {
        // Complex Calculation
        return  `Brewing Coffee`
    }

    pressStartButton() {
        let msgOne = this.start()
        let msgTwo = this.brewCoffee()
        return msgOne + "\n" + msgTwo
    }

}

let myMachine = new CoffeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
// console.log(myMachine.pressStartButton())

// Polymorphism => The Ability of something to have or to be dispalyed in more than one form
class Bird {
    fly() {
        return "Flying..."
    }
}

class Penguin extends Bird{
    fly() {
        return "Penguins Can't Fly.."
    }
}


let bird1 = new Bird()
let bird2 = new Penguin()
// console.log(bird1.fly())
// console.log(bird2.fly())

// Static Method => are special methods which can only be called by the class it self.
class Calculator {
    static add(a, b) { // This add Method is static means can only be use with the class
        return a + b
    }

    sub(a, b) { // This sub Method is not static that means it can be use normally.
        return a - b
    }
}

let calculationOne = new Calculator()
// console.log(calculationOne.add(10,20))  // Not Work
// console.log(Calculator.add(20, 30))  // Definately Work
// console.log(calculationOne.sub(34, 20))

// Getters & Setters
class Employee {
  #salary; // private property

  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary Cannot Be Negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  // Getter - sirf controlled access dena
  get salary() {
    return `Access Denied`;
  }

  // Setter - salary update karne ka controlled method
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value; // fix: update actual private salary
    }
  }

  // Method to check actual salary internally
  checkSalary() {
    return this.#salary;
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary);         // Access Denied
emp.salary = -20000;             // Invalid Salary
emp.salary = 70000;              // ✅ Updated
console.log(emp.checkSalary()); // 70000
