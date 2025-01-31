let Car = {
    Make: "Honda",
    Model: "Civic RS 2018",
    YearSince: 1972,
    about: function() {
      return `${this.Make} ${this.Model} is my car. The lineup of this version started back in ${this.YearSince}.`;
    }
  }
  
  // console.log(Car)
  // console.log(Car.about())
  
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  
  let p1 = new Person("Hadi", 24)
  let p2 = new Person("Mumtahin", 20)
  // console.log(p1)
  // console.log(p2)
  
  function Animal(Species) {
    this.Species = Species
  }
  
  Animal.prototype.Speak = function() {
    return `${this.Species} makes Sound`
  }
  
  let puppy = new Animal("Dog")
  // console.log(puppy.Speak())
  
  String.prototype.Arslan = function() {
    return `This is ${this + " King"}`
  }
  
  let myName = String("Arslan")
  // console.log(myName.Arslan())
  
  Array.prototype.Current = function() {
    return `Custom Method Dispalying Current Context ==>: ${this}`
  }
  
  let myArr = [1,2,3,4,5]
  // console.log(myArr.Current())
  
  class MyVehicle  {
    constructor(Make, Model, YearSince) {
      this.Make = Make
      this.Model = Model
      this.YearSince = YearSince
    }
    about() {
      return `${this.Make} ${this.Model} is my car. The lineup of this version started back in ${this.YearSince}.`;
    }
  }
  
  // Practice and Understand The Diffrence B/W Proto and Prototype
  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function () {
    return `${this.name} makes a noise.`;
  };
  
  const dog = new Animal('Dog');
  // console.log(dog.speak()); // What does this output?
  // console.log(dog.__proto__ === Animal.prototype); // True or False?
  
  
  // Inheritance
  class MyCar extends MyVehicle {
    drive() {
      return `${this.Make} : This Make Property is Inheriting From Vehivcle Class` // Class Inheritance Example
    }
  }
  
  let newCar = new MyCar("Honda", "Civic", 2024)
  // console.log(newCar)
  // console.log(newCar.drive())
  // console.log(newCar.about())
  // console.log(newCar.hasOwnProperty())
  
  // Encapsulation
  class BankAccount {
    #balance = 0;
    addAmount(amount) {
      this.#balance += amount;  
      return this.#balance;
    }
    WithdrwAmount() {
      return `$ ${this.#balance}`;
    }
  }
  
  let newAccount = new BankAccount()
  // newAccount.addAmount(100000)
  // let getMoney = newAccount.WithdrwAmount()
  // console.log(getMoney)
  // console.log(newAccount.balance)
  
  // Abstraction
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
    }
  }
  
  let myMachine = new CoffeMachine();
  // console.log(myMachine.start());
  // console.log(myMachine.brewCoffee());
  // console.log(myMachine.pressStartButton());
  
  // // Polymorphism
  
  class Bird {
    fly() {
      return `Flying....`;
    }
  }
  
  class Penguin extends Bird {
    fly() {
      return `Penguins can't fly`;
    }
  }
  
  let bird = new Bird();
  let penguin = new Penguin();
  // console.log(bird.fly());
  // console.log(penguin.fly());
  
  // static method
  class Calculator {
    static add(a,b) {
      return a  + b
    }
  
    static multiply(a, b) {
      return a * b
    }
  }
  
  let miniCalc = new Calculator()
  // console.log(miniCalc.add(2, 3))
  // console.log(miniCalc.multiply(2, 3)) // Throw Error BCZ Static methods works only with class direclty
  // console.log(Calculator.add(12, 3));
  // console.log(Calculator.multiply(20, 3));
  
  // Getters and setters
  // class Employee {
  //   #salary; // Private field
  //   constructor(name, salary) {
  //     if (salary < 0) {
  //       throw new Error("Salary cannot be in negative");
  //     }
  //     this.name = name;
  //     this.#salary = salary;
  //   }
  
  //   get salary() {
  //     return `Salary is private`;
  //   }
  
  //   set salary(value) {
  //     if (value < 0) {
  //       console.error("Invalid Salary");
  //     } else {
  //       this.#salary = value; // Update private field
  //     }
  //   }
  
  //   showSalary() {
  //     return this.#salary; // Provide a controlled way to access the private salary
  //   }
  // }
  
  // let emp = new Employee("Alice", 50000);
  // console.log(emp.salary); // "Salary is private"
  // emp.salary = 60000; // Updates salary
  // console.log(emp.showSalary()); // 60000
  // console.log(emp.showSalary())