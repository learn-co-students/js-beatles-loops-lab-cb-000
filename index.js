function theBeatlesPlay(musicians, instruments) {
  var tempArray = []
  for (var i=0;i<musicians.length;i++) {
    tempArray[i] = musicians[i] + " plays " + instruments[i]
  }
  return tempArray
}

function johnLennonFacts(array) {
  var i=0;
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(num) {
  var tempArray=[]
  do {
    tempArray.push("I love the Beatles!")
    num++
  } while (num < 15);
  return tempArray
}
