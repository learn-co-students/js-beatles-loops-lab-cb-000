// add solution here
var empty = []
function theBeatlesPlay(musicians, instruments) {
  var i = 0;
  var len = musicians.length;
  for (; i < len; i++) {
     empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}

function johnLennonFacts(facts) {
  var i = 0;
  var len = facts.length;
  var new_array = []
  while (i < len) {
    new_array.push(`${facts[i]}!!!`)
    i++;
  }
  return new_array
}

function iLoveTheBeatles(num) {
  var new_array = []
  do {
    new_array.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  return new_array
}
