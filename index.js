// add solution here
function theBeatlesPlay(musicians, instruments){
  for (let i = 0; i < musicians.length; ++i){
    emptyArray.push(`${musicians[i]}` + " plays " + `${instruments[i]}`);
  }
    return emptyArray;
};

var emptyArray = [];

function johnLennonFacts(facts){
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    i++;
  }
  return newArray ;
};

function iLoveTheBeatles(num){
  var newArray = [];
  var i = num;
  do { newArray.push("I love the Beatles!")
  i++;}
  while (i < 15)
  return newArray;
};
