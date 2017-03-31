function theBeatlesPlay(musicians, instruments) {
  var playedInstruments = [];
  for ( let i = 0; i < 4; i++ ) {
    playedInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playedInstruments;
}

function johnLennonFacts(facts) {
  facts.forEach(function(item, index, array) {
    array[index] += "!!!";
  });
  return facts;
}

function iLoveTheBeatles(num) {
  var loopedLove = [];
  do {
    loopedLove.push("I love the Beatles!");
    ++num;
  } while (num < 15);
  return loopedLove;
}
