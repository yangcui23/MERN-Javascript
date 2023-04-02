class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if( target instanceof Unit){
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if( target instanceof Unit){
            if(target.stat == "res"){
                target.res += this.magnitude;
            }
            else{
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const algo = new Effect('hard algorithm' , 2 , "increase target's res by 3 ","res",3 );
const unhandled = new Effect('unhandled promise rejection' , 1, "reduce target's res by 2" , 'res',-2);
const pair = new Effect('pair programming' , 3 , "increase target's power by 2" , 'power' , 2)



const redNinja = new Unit('Red Belt Ninja' , 3,3,4)
algo.play(redNinja);

const blackNinja = new Unit('Black Belt Ninja',4,5,4)
unhandled.play(blackNinja);


pair.play(redNinja);
redNinja.attack(blackNinja);