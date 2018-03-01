function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var theBeatlesPlayArray = [];
  for(var i = 0; i < arrayOfMusicians.length; i++) {
    var beatlesPlayString = `${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`;
    theBeatlesPlayArray.push(beatlesPlayString);
  }
  return theBeatlesPlayArray;
}

function johnLennonFacts(arrayOfFacts) {
  var i = 0;
  //var exclamationString = "!!!";
  while(i < arrayOfFacts.length) {
    arrayOfFacts[i] += "!!!";
    i++
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return array;
}
