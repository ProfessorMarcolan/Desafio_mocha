
var assert = require('assert');

const fight = require('../kata_boardgame');



describe("primeiro teste ", function(){


  it("testando tabela infromada pelo kata",function() {
    //  defender / atacker
    let list_fight = [
      ["a", "p"],
      ["p", "a"],
      ["k", "a"],
      ["s", "p"],
      ["a", "s"],
      ["p", "k"]
  
    ]
  
    let list_fight_resposta = [
      "Attacker",
      "Attacker",
      "Defender",
      "Defender",
      "Defender",
      "Defender"
    ]
  
  
    list_fight.forEach((ele, i) => {
      console.log(ele)
      console.log(list_fight_resposta[i])
      assert.equal(fight(ele[0], ele[1]), list_fight_resposta[i]);
    })
   
  
  })


})

