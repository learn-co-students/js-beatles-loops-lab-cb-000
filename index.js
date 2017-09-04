function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];
  for (let i=0; i < musiciansArray.length; i++) {
    newArray.push(musiciansArray[i] + " plays " + instrumentsArray[i]);
  }
  return newArray;
}

function johnLennonFacts(factsArray) {
  var j = factsArray.length - 1;
  while (j >= 0) {
    factsArray[j] += "!!!";
    j--;
  }
  return factsArray;
}

function iLoveTheBeatles(anotherNumber) {
  var anotherArray = [];
  do {
    anotherArray.push("I love the Beatles!");
    anotherNumber++;
  } while (anotherNumber < 15);
  return anotherArray;
}
