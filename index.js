function theBeatlesPlay(m, ins) {
  var arr = [];

  for (let i = 0; i < m.length; i++ ) {
    arr.push(`${m[i]} plays ${ins[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let newFacts = [];
  let i = 0;

  while (i < facts.length ) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  } while (num < 15)
  return arr;
}