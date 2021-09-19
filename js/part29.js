const car = {
    brand: "Ford",
    type: "SUV",
    engine: "v8",
    drive: function () {
        console.log(`I am driving ${this.brand}`);
    }
}

car.drive();

