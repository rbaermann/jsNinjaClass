function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = () => {
        console.log(`Hi; my name is ${name}!`);
    }

    this.showStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}.`);
    }

    this.drinkSake = () => {
        this.health += 10;
        console.log(`${this.name}'s Health raised by 10!`)
    }

    this.punch = (target) => {
        if(!(target instanceof Ninja)) {
            console.log(`${target} is not a Ninja!`)
        }
        else {
            target.health -= 5;
            console.log(`${target.name} was punched by ${this.name} and lost 5 Health!`)
        }
    }

    this.kick = (target) => {
        if(!(target instanceof Ninja)) {
            console.log(`${target} is not a Ninja!`)
        }
        else {
            target.health -= 15 * this.strength;
            console.log(`${target.name} was kicked by ${this.name} and lost 15 Health!`)
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
