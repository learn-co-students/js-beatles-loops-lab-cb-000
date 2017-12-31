function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray = []
  for (var i = 0; i < musicianArray.length; i++) {
    var musician = musicianArray[i]
    var instrument = instrumentArray[i]
    newArray.push(`${musician} plays ${instrument}`)
  }
  return newArray
}

function johnLennonFacts(factsArray) {
  var i = 0
  var newArray = []
  while (i < factsArray.length) {
    newArray.push(factsArray[i] = `${factsArray[i]}!!!`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(num) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  
  return newArray
}
