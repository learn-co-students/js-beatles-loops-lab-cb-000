function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (let i = 0, l = musicians.length; i < l; i ++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const sfacts = []

  let i = 0
  while (i < facts.length) {
    sfacts.push(`${facts[i]}!!!`)
    i++
  }
  return sfacts
}

function iLoveTheBeatles(number) {
  const array = []

  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
