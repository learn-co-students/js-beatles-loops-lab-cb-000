function theBeatlesPlay(musicians, instruments){
  var array = []

  for (var i = 0; i < 4; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  var text = "!!!"
  var i = 0
  while (facts[i]) {
    facts[i] = facts[i] + text
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return array
}
