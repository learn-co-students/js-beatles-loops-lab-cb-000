function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(let i = 0; i < musicians.length && i < instruments.length; i++) {
    arr[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return arr;
}

function johnLennonFacts(facts) {
  var counter = 0;
  while(facts.length > counter) {
    facts[counter] += "!!!"
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15)
  
  return arr;
}
