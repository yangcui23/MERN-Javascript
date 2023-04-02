

class Ninja {
    constructor(name,health){
        
        this.name  = name;
        this.health = health;
        this.speed = 3 ;
        this.strength = 3;

    }
    sayName(){
        console.log("ninja1's name is " + this.name)
    }
    showStats(){
    
        console.log("speed is " + this.speed)
        console.log("strength is " + this.strength)
        console.log("health is " + this.health)
    }
    drinkSake(){
        this.health += 10;
        console.log("After drinking sake," + this.name + "'s new health is now " +  this.health)
    }

}

class Sensei extends Ninja {
    constructor(name){
        super(name,200,);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months!!!!")
    }
    showStats(){
        super.showStats();
    }

}
const ninja1 = new Ninja('Hyabusa',10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log('---------Hyabusa has encountered a Super duper wisdom sensei , Master Splinter---------')

const superSensei = new Sensei('Master Splinter');
superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();
