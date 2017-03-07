function theBeatlesPlay(musicians, instruments) {
  var new_array = [];
  for (var i = 0; i < musicians.length; i++){
    var new_line = (musicians[i]+" plays "+ instruments[i]);
    new_array.push (new_line);
  }
  return new_array
}

function johnLennonFacts(facts){
  var counter = 0
  var new_array = [];
  while (counter < facts.length){
    var new_line = facts[counter] + "!!!";
    new_array.push(new_line);
    counter++;
  }
  return new_array
}

//function johnLennonFacts(facts){
//  var new_array = [];
//  for (var i = 0; i < facts.length; i++){
//    var new_line = facts[i] + "!!!";
//    new_array.push(new_line);
//  }
//  return new_array
//}

function iLoveTheBeatles(n){
  var new_array = [];
  var counter = n;
  do {  new_array.push("I love the Beatles!");
  counter++;}
  while (counter < 15);
  return new_array
  }
