function theBeatlesPlay(musicians, instruments) {
  var newArr = []
  for(let i = 0; i < musicians.length; i++) {
    for(let j = 0; j < instruments.length; j++) {
      newArr.push(musicians[i] + ' plays ' + instruments[j]);
      musicians.shift();
    }
  }
  return newArr;
}

//
//

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    console.log(facts[i] + '!!!');
    i++;
  }
}

//
//

function iLoveTheBeatles(num) {
  var newArr = [];
  var i = 0;
  if (num < 16) {
    do {
      newArr.push('I love the Beatles!'); i++
    }
    while (i < num + 1);
    return newArr;
    }
  else {
    newArr.push('I love the Beatles!');
    return newArr;
  }
}
