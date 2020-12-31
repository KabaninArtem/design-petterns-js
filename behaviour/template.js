class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} do ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has salary ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `programming`
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `testing`
    }
}

const develop = new Developer('Artem', 100000);
console.log(develop.getPaid());
console.log(develop.work());
const tester = new Tester('Dima', 90000);
console.log(tester.getPaid());
console.log(tester.work());
