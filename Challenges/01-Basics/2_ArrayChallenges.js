// Challenge 1:
let teaFlavours =  ["Green Tea", "Black Tea", "Oolong Tea"]
let firstTea = teaFlavours[0]

// Challenge 2:
let cities = ["London", "Tokyo", "Paris", "New York"]
let favouriteCity = cities[2]

// Challenge 3:
let teaTypes = ["Herbel Tea", "White Tea", "Masala Tea"]
teaTypes[1] = "Jasmine Tea"

// Challenge 4:
let citiesVisited = ["Denmark", "Sydney"]
citiesVisited.push("Berlin")

// Challenge 5:
let teaOrder = ["Chai", "Iced Tea", "Matcha", "Earl Grey"]
let lastOrder = teaOrder.pop()

// Challenge 6:
let popularTeas = ["Green Tea", "Oolong Tea", "Chai"]
let softCopyTeas = popularTeas
popularTeas.pop()
console.log("Original Array: ", popularTeas)
console.log("Soft Copy Array:", softCopyTeas)

// Challenge 7:
let topCities = ["Berlin", "Singapore", "NewYork"]
let hardCopyCities = [...topCities]
topCities.pop()
console.log("TopCities Array: ", topCities)
console.log("Hard Copy Array:", hardCopyCities)

// Challenge 8:
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = [...europeanCities, ...asianCities]
console.log(worldCities)

// Challenge 9:
let teaMenu = ["Masala Chai", "Oolong Tea", "Green  Tea", "Earl Grey"]
let menuLength = teaMenu.length

// Challenge 10:
let cityBucketList = ["Pakistan","Tokyo", "London", "Cape Town"]
let isLondonInList = cityBucketList.includes("London")