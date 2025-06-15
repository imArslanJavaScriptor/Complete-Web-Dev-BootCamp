
const person = {
  name: "Hitesh",
  age: 19.5,
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};



function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}

// Example usage
console.log(person.introduce()); // "Hi, my name is Hitesh and I am 19.5 years old."
console.log(outer()); // "Inner function called"
