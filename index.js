function theBeatlesPlay(musicians, instruments) {
  let newArray = [];

  for (let i = 0; i < musicians.length; i++) {
    newArray.push('${musicians[i]} plays ${instruments[i]}');
  }
  return newArray;
}

function johnLennonFacts(array) {
  let newArray = [], i = 0

  while (i < array.length) {
    newArray.push('${array[i]}!!!')
    i++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  let newArray = []

  do {
    newArray.push('I love the Beatles!')
    number++
  } while (number < 15);
  return newArray
}
