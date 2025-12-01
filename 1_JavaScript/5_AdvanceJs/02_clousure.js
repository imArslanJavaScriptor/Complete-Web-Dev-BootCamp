function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());


// Closures are the function but special thing is they remember the enviroment in which they created.

// For Beter Understading of Closure: DO some Pactice with more exapmples.