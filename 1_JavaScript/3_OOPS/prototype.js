let computer = {cpu: 20}

let ars = {
    screen: "4K",
    __proto__: computer
}

console.log(ars.__proto__)
let tomHardware = {}

console.log(computer.__proto__)


let genericCar = {
    tyres: 4
}

let tesla = {
    driver: "Ai"
}

Object.setPrototypeOf(genericCar, tesla)
// console.log(genericCar.driver)
console.log(Object.getPrototypeOf(genericCar)) 