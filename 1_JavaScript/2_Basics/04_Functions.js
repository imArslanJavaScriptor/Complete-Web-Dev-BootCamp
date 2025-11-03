//  Exercise 1:
function makeTea (typeOfTea) {
    return `Making ${typeOfTea}`
}
let teaOrder = makeTea("Green Tea")

//  Exercise 2:
function orderTea(teaType) {
    function confirmOrder() {
        return `Order Confirmed for ${teaType}`
    }
    return confirmOrder()
}
let orderComfirmation = orderTea("Chai")
// console.log(orderComfirmation)

function giveMe() {
    let arr =  [1,2,3,4,5,6,7,8]
    // console.log(arr)
    return arr
}

// giveMe()
// .map((item) => console.log(item))
// console.log(orderTea("Lemon Tea"))

//  Exercise 3:
let calculateTotal = (price, quantity) => {
    return Number(price * quantity)
}
let totalCost = calculateTotal(400, 5)
// console.log(totalCost)

//  Exercise 4:
function makeTea(teaType) {
    return teaType
}
function processTeaOrder(makeTea) {
    return makeTea("Earl Grey")
}

let res = processTeaOrder(makeTea)
console.log(res)