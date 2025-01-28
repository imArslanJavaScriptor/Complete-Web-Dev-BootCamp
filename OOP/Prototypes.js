let computer = {cpu: 12}
let lenove = {
    screen: "UHD",
    __proto__: computer
}
let arsHardware = {}

console.log(lenove.__proto__)

Object.setPrototypeOf(lenove, computer)
console.log(Object.getPrototypeOf(lenove))


console.log("Computer", computer.__proto__)

let genericCar = {tyres: 4}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)
console.log("Tesla",  Object.getPrototypeOf(tesla))
console.log("Tesla Getting Generic Car Properties", tesla.tyres)

let genericHumanFeatures = {
    forGrap: "2 Hands",
    toSee: "2 Eyes"
}

let arslan = {
    looks: "Handsom",
    personality: "Charming"
}

Object.setPrototypeOf(arslan, genericHumanFeatures)
console.log(Object.getPrototypeOf(arslan))