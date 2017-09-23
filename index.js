function theBeatlesPlay(musicians, instruments){

  var sentences = new Array();
  for(var i = 0; i < musicians.length; i++){
    sentences.push(musicians[i]+" plays "+instruments[i]);
  }

  return sentences;
}


function johnLennonFacts(strings){
  var i = 0;
  while(i < strings.length){
    strings[i] = strings[i] + "!!!";
    i++;
  }
  return strings;
}

function iLoveTheBeatles(num){
  var strings = new Array();
  var i = 0;
  if (num < 15){
  do{
    strings.push("I love the Beatles!");
    i++;
  }
  while(i <= num);
 }
  else{
   strings.push("I love the Beatles!");
  }
  return strings;
}
