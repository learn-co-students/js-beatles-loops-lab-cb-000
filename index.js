var array = []
function theBeatlesPlay(musicians, instruments){
  for(var i = 0; i < 4; i++){
       array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

//loops over the array of musicians
//first time through the loop, you should create a string using
//the first index of the musicians array and
//the first index of the instruments array "John Lennon plays guitar"
//string should be added to the empty array you created
function johnLennonFacts(fact){
  const facts = []
  var i = 0
  while(i < fact.length){
    facts.push(`${fact[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!");
    n++
  }
  while (n < 15)
  return array;
  }
