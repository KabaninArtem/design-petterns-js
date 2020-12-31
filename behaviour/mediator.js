class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to)  {
            to.receive(message, from);
        } else {
            for (let key in this.users) {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            }
        }
    }
}

const artem = new User('Artem');
const den = new User('Den');
const serg = new User('Serg');
const room = new ChatRoom();

room.register(artem);
room.register(den);
room.register(serg);

artem.send('Hello', den);
den.send('Hello', artem);
serg.send('Hi');
