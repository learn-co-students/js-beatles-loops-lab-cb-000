function theBeatlesPlay(musicians, instruments) {
  var musicians_array = []
  for (let i = 0; i < musicians.length; i++) {
    musicians_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicians_array
}

function johnLennonFacts(facts) {
  var new_facts = []
  for (let i = 0; i < facts.length; i++) {
    new_facts.push(`${facts[i]}!!!`)
  }
  return new_facts
}

function iLoveTheBeatles(number) {
  var phrase = []
  do {
    phrase.push("I love the Beatles!")
  } while (phrase.length <= number && number < 15);
  return phrase
}
