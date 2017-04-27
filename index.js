
function theBeatlesPlay(musicians, instruments){
  var array = [];

  for(var i = 0; i < musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array
}

function johnLennonFacts(facts) {
  var array = [];
  let counter = 0;

  while(counter < facts.length) {
    facts[counter] =  facts[counter] + "!!!"
    counter++;
  }

  return facts
}

function iLoveTheBeatles (n) {
  var array = [];
  let counter = 0;
  if(n < 15){
  do {
    array[counter] = "I love the Beatles!"
    counter ++;
  }while(counter <= n)
} else {
  array [counter] = "I love the Beatles!"
}
  return array
}
