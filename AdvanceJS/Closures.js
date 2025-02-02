function outer() {
    let counter = 50
    return function() {
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())