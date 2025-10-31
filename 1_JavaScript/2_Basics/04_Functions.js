//  Exercise 1:
function makeTea (typeOfTea) {
    return `Making ${typeOfTea}`
}
let teaOrder = makeTea("Green Tea")

//  Exercise 2:
function orderTea (teaType) {
    function confirmOrder() {
        return `Order Confirmed for ${teaType}`
    }
    return confirmOrder()   
}
console.log(orderTea("Lemon Tea"))