// add solution here
function theBeatlesPlay(arrI, arrM) {
  var empty = []
  for (var i = 0; i < arrM.length; i++) {
    empty.push(`${arrI[i]} plays ${arrM[i]}`)
  }

  return empty
}

function johnLennonFacts(facts) {
  var i = 0
  var array = []
  while (i < facts.length) {
    array.push(facts[i].concat("!!!"))
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
