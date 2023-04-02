

class Ninja {
    constructor(name,health){
        
        this.name  = name;
        this.health = health;
        this.speed = 3 ;
        this.strength = 3;

    }
    sayName(){
        console.log("ninja1's name is " + ninja1.name)
    }
    showStats(){
        this.speed += 2;
        this.strength += 3;
        this.health = 10;
        console.log("speed is " + ninja1.speed)
        console.log("strength is " + ninja1.strength)
        console.log("health is " + ninja1.health)
    }
    drinkSake(){
        this.health += 10;
        console.log("after drinking sake," + ninja1.name + "'s new health is now " +  ninja1.health)
    }

}

const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


