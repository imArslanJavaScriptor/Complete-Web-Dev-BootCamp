let genericBikePropertise = {
  bodyMaterial: "Iron",
  necessaryObjects: ['Handle', 'Tyres', 'Engine', 'Seat']
}

let BMWV1BikeSpecs = {
  body: "Sporty Frame",
  exaust: "Higher Sounds Bulky Exhaust",
  // __proto__: genericBikePropertise
}

// console.log(BMWV1BikeSpecs.__proto__)

Object.setPrototypeOf(BMWV1BikeSpecs, genericBikePropertise)
console.log(BMWV1BikeSpecs.necessaryObjects)

let gamingConsoleGeneric = {
  Processor: "Tensor Flow CPU",
  processorNanoMeter: "2nm",
  ClockSpeed: "5.6 GHz",
};


// 1st Method was this __proto__ way of setting prototype
let myGamingConsole = {
  screen: "4K",
  resolution: "3840 x 2160",
  __proto__: gamingConsoleGeneric,
}

console.log("Comes From Proto:", myGamingConsole.Processor)
console.log("Processor NanoMetor: : ", myGamingConsole.processorNanoMeter)

console.log("My Gaming Console Screen: ", myGamingConsole.screen);
console.log("Gaming Console Powered By: ", myGamingConsole.Processor)

// 2nd Method : Object.setPrototypeOf and Object.getPrototypeOf
let commonBikePortotype  = {
  wheels: 2,
  hasEngine: true,
  engneType: ["Petrol", "Diesel", "Electric"],
  havingSensors: ["Speed Sensor", "Temperature Sensor", "Oxygen Sensor"],
}


let hondaCB150F = {
  bodyLook: "Sporty",
  color: ["Red", "Black", "Gray", "Orange"],
}
Object.setPrototypeOf(hondaCB150F, commonBikePortotype);


// Own Property vs Inherited Property
console.log("Body Type Own Property:", Object.hasOwn(hondaCB150F, "bodyLook") && hondaCB150F.bodyLook);
console.log("Wheels Inheriting From Prototype:", hondaCB150F.wheels);