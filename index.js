function theBeatlesPlay(musicians, instruments){
  let list = []

  for(let i=0, k= musicians.length; i < k; i++){
    list.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return list
}

function johnLennonFacts(array){
  const shouted = []

  let counter = 0
  while (counter < array.length){
    shouted.push(array[counter].concat("!!!"))
    counter++
  }
  return shouted
}

function iLoveTheBeatles(num){
  let arr = []

  do{
    arr.push("I love the Beatles!")
    num++
  }while(num < 15);

  return arr
}
