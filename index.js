function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var x = 0; x < musicians.length; x++) {
  array.push(musicians[x] +" plays " + instruments[x]);
}
return array;
}

function johnLennonFacts(facts) {
  var array = []
  for (var x = 0; x < facts.length; x++) {
    array.push(facts[x] + "!!!")
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return array;
}
