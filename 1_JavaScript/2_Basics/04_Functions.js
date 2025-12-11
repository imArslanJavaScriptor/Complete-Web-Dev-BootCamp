//  Exercise 1:
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}
let teaOrder = makeTea("Green Tea")

//  Exercise 2:
function orderTea(teaType) {
    function confirmOrder() {
        return `Order Confirmed for ${teaType}`
    }
    return confirmOrder
}

let orderComfirmation = orderTea("Herbel Tea")

// Sample of Function returning Array
function giveMe() {
    let arr =  [1,2,3,4,5,6,7,8]
    return arr
}

// giveMe()
// .map((item) => console.log(item))

//  Exercise 3:
let calculateTotal = (price, quantity) => {
    let calc = Number(price * quantity)
    return calc
}
let totalCost = calculateTotal(100, 5)

//  Exercise 4:
function makeTea(teaType) {
    return teaType
}

function processTeaOrder(teaFunction) { 
    return teaFunction("Earl Grey")
} 

let res = processTeaOrder(makeTea)
// console.log(res)

//  Exercise 5:
// function teaMaker(teaType) {
//     return `Making ${teaType}`
// }

// function createTeaMaker (teaFunction) {
//     return teaFunction
// }

// let teaMakerCall = createTeaMaker(teaMaker("Green Tea"))
// console.log(teaMakerCall)


function createBurger() {
    const makeBurger = function () {
        const burger = function(burgerType) {
            return `Making a ${burgerType} burger`
        }

        return burger
    }

    return makeBurger
}
let makeBurgerCall = createBurger
// console.log(makeBurgerCall()()("Cheese Burger 🍔"))



// 1) Block Scope Difference (var ❌ vs let/const ✅)
// if (true) {
//     var a = "I am VAR"
//     let b = "I am LET"
//     const c = "I am CONST"
// }

// console.log(a) // ✅ works (var is NOT block scoped)
// console.log(b) // ❌ Error: b is not defined
// console.log(c) // ❌ Error: c is not defined



// Hoisting Difference (var ✅ vs let/const ❌)
a = "Arslan"
// console.log(a) // ✅ works print Arslan in the console)
// console.log(b) // ❌ Error (cannot access before initialization)
// console.log(c) // ❌ Error

var a = 1
let b = 2
const c = 3


// Closure Example
function outer() {
    let count = 0

    return function inner() {
        count++
        return count
    }

}

let counter = outer()

// console.log(counter()) // 1
// console.log(counter()) // 2
// console.log(counter()) // 3
// console.log(counter()) // 4

function findMax(arr) {
    if(typeof arr !== "object" || arr.length === 0) {
        return "Check Your Input"
    }
    return Math.max(...arr);
}

// console.log(findMax([1,2,3,4,5,6,7,89,10]))
// console.log(findMax("String Input"))


function removeDuplicates(arr) {
    return [...new Set(arr)];
    // return [new Set(arr)];
}

// removeDuplicates([1,2,2,3,4,4,5,5,6,7,8,8,9]).map((item) => console.log("Item:", item))