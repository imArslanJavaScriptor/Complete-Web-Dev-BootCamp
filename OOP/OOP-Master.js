let car = {
    make: "Toyota", 
    model: "Camry",
    year: 1982,

    start: function () {
        return `${this.make} car got started in ${this.year}`
    }
}
console.log(car.start())