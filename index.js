function theBeatlesPlay(musicians, instruments) {
  let array = []
  for (var i = 0; i < musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0;
  while (facts[i] != null) {
    facts[i] = facts[i] + "!!!"
    i += 1;
  }
  return facts
}

function iLoveTheBeatles(number) {
  let array = []
  do {
    array.push("I love the Beatles!")
    number++;
  }
  while (number < 15);
  return array;
}
