// https://www.codewars.com/kata/boardgame-fight-resolve/train/javascript
let play = {
    p:"pikeman",
    k:"cavalary",
    a:"Archer",
    s:"Swordsman"
}


let logica ={
    a:{
        k:"Defender",
        s:"Attacker",
        a:"Attacker",
        p:"Attacker"
    },
    p:{
        k:"Attacker",
        s:"Defender",
        a:"Attacker",
        p:"Attacker"
    },
    s:{
        k:"Attacker",
        s:"Attacker",
        a:"Defender",
        p:"Attacker"
    },
    k:{
        k:"Attacker",
        s:"Attacker",
        a:"Attacker",
        p:"Defender"
    }
    

}




function fightResolve(defender, attacker)
{

    let saida = logica[attacker.toLowerCase()][defender.toLowerCase()]
    

	return saida;
}	

module.exports = fightResolve;
