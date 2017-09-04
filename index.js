function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (var i = 0; i<musicians.length; i++){
    band.push(musicians[i] + " plays " + instruments[i])
  }
  return band
}

function johnLennonFacts(facts){
  var gossip = []
  while (i<facts.length) {
    var i = 0
    gossip.push(facts[i] + "!!!")
    i++
  }
return gossip
}

function iLoveTheBeatles(num){
  var text = []
  do {
  text.push("I love the Beatles!")
  }
  while (num < 15){
    for (var i = 1; i<num; i++){
    text.push ("I love the Beatles!")
    }
  }
  return text
}
