function theBeatlesPlay(musicians, instruments){
  var list =[]
    for (var i = 0; i < musicians.length; i++){
      list.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return list
}

function johnLennonFacts(facts){
  var list =[]
  var i = 0
  while (i < facts.length ){
    list.push(`${facts[i]}!!!`);
    i++;
  }
    return list
}

function iLoveTheBeatles(n){
  var array =[];
  do{
    n++;
    array.push("I love the Beatles!");
  } while (n < 15);
  return array;
}
