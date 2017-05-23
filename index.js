function theBeatlesPlay(musicians, instruments) {
  var musicArray = [];

  for(var i = 0; i < musicians.length; i++) {
      musicArray.push(musicians[i] + " plays " + instruments[i]);
  }
return musicArray;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  let i = 0;
  while (i < facts.length) {
    johnFacts.push(facts[i] + "!!!");
    i++;
  }
  return johnFacts;
}

function iLoveTheBeatles(number) {
  var stuff = [];
  let i = 0;
  //do-while that adds "I love the Beatles!" to array
  do {
    stuff.push("I love the Beatles!");
      i = ++number;
  }
  while (i < 15);
    return stuff;
}
