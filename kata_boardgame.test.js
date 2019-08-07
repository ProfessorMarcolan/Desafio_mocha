

const fight = require('./kata_boardgame');




test('teste_fight', () => {
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
    console.log(i)
    expect(fight(ele[0], ele[1])).toBe(list_fight_resposta[i]);
  })
 

});