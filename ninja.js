class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    

    sayName = () => {
        console.log(`Hi; my name is ${name}!`);
    }

    showStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}.`);
    }

    drinkSake = () => {
        this.health += 10;
        console.log(`${this.name}'s Health raised by 10!`)
    }

    punch = (target) => {
        if(!(target instanceof Ninja)) {
            console.log(`${target} is not a Ninja!`)
        }
        else {
            target.health -= 5;
            console.log(`${target.name} was punched by ${this.name} and lost 5 Health!`)
        }
    }

    kick = (target) => {
        if(!(target instanceof Ninja)) {
            console.log(`${target} is not a Ninja!`)
        }
        else { 
            var loss = 15 * this.strength;
            target.health -= loss;
            console.log(`${target.name} was kicked by ${this.name} and lost ${loss} Health!`)
        }
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom = () => {
        this.drinkSake();
        console.log("Whenever I'm about to do something, I think 'Would an idiot do that.' And if they would, I do not do that thing.")
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
var superSensei = new Sensei("Dwight");
