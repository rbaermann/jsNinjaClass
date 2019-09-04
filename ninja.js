function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    Ninja.prototype.sayName() = () => {
        console.log(`Hi; my name is ${name}!`);
    }

    Ninja.prototype.showStats() = () => {
        console.log(`Name: ${name}, Health: ${health}, Speed: ${speed}, Strength: ${strength}.`);
    }

    Ninja.drinkSake() = () => {
        this.health += 10;
    }
}