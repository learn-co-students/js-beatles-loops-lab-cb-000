function theBeatlesPlay(musicians, instruments) {
  var bandlist = [];
  for (let i = 0; i <= 3; i++) {
    bandlist.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return bandlist
}

function johnLennonFacts(facts) {
  var facts_plus = [];
  var i = 0
  while (i < facts.length) {
    facts_plus.push(facts[i] + '!!!');
    i++
  }
  return facts_plus
}

function iLoveTheBeatles(number) {
  var happy_array = [];
  do {
    happy_array.push('I love the Beatles!');
    number++ 
  } while (number < 15);
  return happy_array
}