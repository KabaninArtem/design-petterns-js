function ServerES5(name, ip) {
    this.name = name;
    this.ip = ip;
}

ServerES5.prototype.getUrl = function () {
    return `https://${this.ip}:80`
}

const AWS_ES5 = new ServerES5('AWS German', '88.21.21.32');

class ServerES6 {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const AWS_ES6 = new ServerES6('AWS German', '88.21.21.32');
