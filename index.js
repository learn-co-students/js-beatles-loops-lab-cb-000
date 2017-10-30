var theBeatlesPlay = (musicians, instruments) => {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return band;
};

var johnLennonFacts = facts => {
  var shoutFact = [];
  let i = 0;

  while (i < facts.length) {
    shoutFact.push(`${facts[i]}!!!`);
    i++;
  }
  return shoutFact;
};

function iLoveTheBeatles(n) {
  const arr = [];

  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);

  return arr;
}
