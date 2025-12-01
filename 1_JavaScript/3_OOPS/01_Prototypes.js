let gamingConsoleGeneric = {
  Processor: "Tensor Flow CPU",
  ClockSpeed: "5.6 GHz",
};


// 1st Method was this __proto__ way of setting prototype
let myGamingConsole = {
  screen: "4K",
  resolution: "3840 x 2160",
  __proto__: gamingConsoleGeneric,
}

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