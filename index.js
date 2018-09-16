// add solution here

var musicians = [];
var instruments = [];

function theBeatlesPlay(musicians, instruments) {
    var newArray = [];
    var i;
        for (i = 0; i < musicians.length; i++) {
          //newArray.push(musicians[i] + " plays " + instruments[i]);
          newArray.push(`${(musicians[i])} plays ${(instruments[i])}`);
        }
    return newArray;
};


var array = [];

function johnLennonFacts(array) {
  var i = 0;
  var factsArray = [];
    while(i < array.length) {

    // array.splice(i, 1, `${array[i]}!!!`); -> splice(start,deletecount,replace with)

      factsArray.push(`${array[i]}!!!`)
      i++;
  }
  return factsArray;
};


function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number++;
  } while(number < 15);
  return array;
}
