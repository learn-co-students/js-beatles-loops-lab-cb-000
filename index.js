function theBeatlesPlay(musicians, instruments){
  var sentences = new Array()
  for(var i = 0; i < musicians.length; i++){
    sentences.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentences
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts){
  var loudFacts = new Array()
  for(let i = 0; i < facts.length; i++){
    loudFacts.push(`${facts[i]}!!!`)
  }
  return loudFacts
}

function iLoveTheBeatles(n){
  var loveArray = new Array()
  do{
    loveArray.push("I love the Beatles!")
    n++
  }while(n < 15)
  return loveArray
}