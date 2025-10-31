// Challenge 1: while loop that calculates the sum of numbers 1 to 5
let sum = 0;
let i = 1;
while (i <= 500) {
  sum += i;
  i++;
}
// console.log(sum)

// Challenge 2: while loop that count down from 5 to 1 and stores the res in Array
let countdown = [];
let i2 = 5;
while (i2 !== 0) {
  countdown.push(i2);
  i2--;
}
// console.log(countdown)

// Challenge 3: while loop that count down from 5 to 1 and stores the res in Array
// let teaCollection = []
// let teaType
// do {
//     teaType = prompt("Enter your favourite tea (type Stop to finish)")

//     if(teaType !== "Stop") {
//         teaCollection.push(teaType)
//     }
// } while (teaType !== "Stop");
// console.log(teaCollection)

// Challenge 4: while loop that calculates the sum of numbers 1 to 3
let total = 0;
let iterator = 1;
do {
  total += iterator;
  iterator++;
} while (iterator <= 3);
// console.log(total)

// Challenge 5: for loop that * each arr elem by 2 and store the res in new arr
let arr = [2, 4, 6];
let multipliedNumbers = [];
for (let i = 0; i < arr.length; i++) {
  multipliedNumbers.push(arr[i] * 2);
}
// console.log(multipliedNumbers)

// Challenge 6: for loop that list each city in arr cityList
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let index = 0; index < cities.length; index++) {
  cityList.push(cities[index]);
}
// console.log(cityList)

// Challenge 7
let teas = ["green tea", "black tea", "chai", "oolong tea", "her"];
let selectedTeas = [];
for (let index = 0; index < teas.length; index++) {
  if (teas[index] === "chai") break;
  selectedTeas.push(teas[index]);
}
// console.log(selectedTeas)

// Challenge 8
let citiesArr = ["Paris", "New York", "Tokyo", "Berlin"];
let visitedCities = [];

for (let index = 0; index < citiesArr.length; index++) {
  if (citiesArr[index] === "Paris") continue;
  visitedCities.push(citiesArr[index]);
}
// console.log(visitedCities)

// Challenge 9
let smallNums = [];
for (const number of [1, 2, 3, 4, 5]) {
  if (number === 4) break;
  smallNums.push(number);
}
// console.log(smallNums)

// Challenge 10
teas = ["green tea", "black tea", "chai", "oolong tea", "herbel tea", "jasmine tea"];
let preferedTeas = [];
for (const tea of teas) {
  if (tea === "herbel tea") continue;
  preferedTeas.push(tea);
}
// console.log(preferedTeas);

// Challenge 11
let citiesPopulation = {
  Paris: 400000,
  "New York": 400000,
  Tokyo: 200000,
  Berlin: 400000,
};

let cityPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") break;
  cityPopulation[city] = citiesPopulation[city];
}
// console.log(cityPopulation);

// Challenge 12
let largeCities = {};
for (const city in citiesPopulation) {
  // We Can Get Values of Object in this way
  // citiesPopulation[city]
  if (citiesPopulation[city] < 300000) continue;
  largeCities[city] = citiesPopulation[city];
}

// console.log(largeCities);

// Challenge 13
let availableTeas = [];
teas.forEach((tea) => {
  if (tea === "chai") return;
  availableTeas.push(tea);
});
// console.log(availableTeas);

// Challenge 14
let allCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
allCities.forEach((city) => {
  if (city === "Sydney") return;
  traveledCities.push(city);
});
// console.log(traveledCities);

// Challenge 15
let numArr = [2,5,7,9]
let doubledNumbers = []
for (let i = 0; i < numArr.length; i++) {
  if(numArr[i] === 7) continue
  doubledNumbers.push(numArr[i] * 2) 
}
// console.log(doubledNumbers)

// Challenge 16
let shortTeas = []
for (const tea of teas) {
  if(tea.length > 10) break
  shortTeas.push(tea)
}
console.log(shortTeas)

// Break and Continue meant to be used in Loops but if we are in and then in loop furthure we are in Function so that means in each iteration we have a function so in that case we dont use Break or Continue in that case we use reutn keywork to throw the context out in the partuclar case where our conditon met.