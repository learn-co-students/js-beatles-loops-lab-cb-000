function theBeatlesPlay(musician_array, instruments_array) {
  var newArray = [] ;
  if (musician_array.length == instruments_array.length)
  {
    for(var i = 0;  i < musician_array.length ; ++i)  {
      newArray.push(`${musician_array[i]} plays ${instruments_array[i]}`) ;
    }
  return newArray
  }
  return false ;
}

function johnLennonFacts(array) {
  var index = 0 ;
  var newArray = [] ;
  while(index < array.length) {
    newArray.push(`${array[index]}!!!`)  ;
    ++index ;
  }
  return newArray ;
}

function iLoveTheBeatles(number)  {
  var newArray = new Array ;
  var counter = 0 ;
  if(number < 17) {
    do {
      newArray.push("I love the Beatles!") ;
      counter++ ;
    } while (counter <= number)
    return newArray ;
  }
  else
  {
    return ["I love the Beatles!"] ;
  }

}
