class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const carFactory = new CarFactory();

const bmwX6 = carFactory.create('bmw', 10000);
const audi = carFactory.create('audi', 12000);
const bmwX3 = carFactory.create('bmw', 8000);
console.log(bmwX6);
console.log(audi);
console.log(bmwX3);
