const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels and my owner ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Artem'
    }
})

carWithOwner.init();
