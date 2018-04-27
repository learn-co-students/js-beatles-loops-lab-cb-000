function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newArray
}

function johnLennonFacts(array) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray[i] = `${array[i]}!!!`
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  var i = 0
  do {
    newArray[i] = `I love the Beatles!`
    i++
  } while (n < 15 && n >= i)
  return newArray
}
