function theBeatlesPlay(musicians, instruments) {
  var new_array = []
  for (let i = 0; i < musicians.length; i++) {
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return new_array
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i]+"!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var new_array = []
  do {
    new_array.push("I love the Beatles!")
    number++
  }
  while (number < 15);
  return new_array
}
