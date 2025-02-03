// const person = {
//     name: "Arslan",
//     greet: function() {
//         console.log(`Hi, i am ${this.name}`)
//     }
// }

// person.greet()

// let greentFunc = person.greet
// greentFunc()

// let bindingFunction = person.greet.bind({name: "HM-Arslan"})
// bindingFunction()
// Now Explore 2 more and thier use cases apply & call

/*
1. call() Method
Immediately invokes the function with a specified this context and individual arguments
*/
const person = {
    name: "Arslan",
    greet: function(age, city) {
        console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}`);
    }
}

// Using call()
person.greet.call({name: "Ali"}, 25, "Karachi");
// Output: "Hi, I'm Ali, 25 years old from Karachi"

// Real-world use case: Borrowing array methods
const arrayLike = {0: "a", 1: "b", length: 2};
Array.prototype.join.call(arrayLike, "-"); // Returns "a-b"

/*
2. apply() Method
Similar to call() but accepts arguments as an array
*/
// Using apply()
const details = [28, "Lahore"];
person.greet.apply({name: "Ahmed"}, details);
// Output: "Hi, I'm Ahmed, 28 years old from Lahore"

// Real-world use case: Finding max in array
const numbers = [5, 6, 2, 3, 7];
Math.max.apply(null, numbers); // Returns 7

/*
Key Differences Table
Method	Invocation Time	Arguments Format	Best For
bind()	Later execution	Individual args	Event handlers, callbacks
call()	Immediately	Individual args	Method borrowing, composition
apply()	Immediately	Array of args	Array-like data, variadic fns
*/

/*
Practical Use Cases
1. Function Borrowing (Common in React Class Components)
*/

// React-like example
class AdminPanel {
    constructor() {
        this.role = "Administrator";
    }
}

class UserSettings {
    showRole() {
        console.log(`Your role: ${this.role}`);
    }
}

const admin = new AdminPanel();
const settings = new UserSettings();

settings.showRole.call(admin); // "Your role: Administrator"

//2- Currying Functions (Common in Functional Programming)
function calculate(a, b, c) {
    return a * b + c;
}

// Using apply() for partial application
const partial = calculate.bind(null, 2, 3);
partial.apply(null, [4]); // Returns (2*3) + 4 = 10

// 3- Array Method Chaining (Common in Data Processing)
function processData() {
    const args = Array.prototype.slice.call(arguments);
    return args
        .filter(x => x > 10)
        .map(x => x * 2)
        .reduce((a, b) => a + b, 0);
}

processData(5, 15, 8, 20); // (15*2) + (20*2) = 70

/*
Modern JavaScript Alternative (ES6+)
While call()/apply() are still useful, modern JS offers alternatives:
*/

// Spread operator alternative for apply()
Math.max(...numbers); 

// Arrow functions (lexical this)
const arrowGreet = (age, city) => {
    console.log(`Hi, I'm ${this.name}, ${age} from ${city}`);
};
// Arrow functions don't need bind() for lexical scope

/*
Best Practice: Use call() when you know exact arguments, apply() when working with arrays/array-like objects, and bind() when you need to preserve context for later execution.
*/