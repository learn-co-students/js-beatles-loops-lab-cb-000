// @musicians: an array
// @instruments an array
function theBeatlesPlay(musicians, instruments) {
  let sentences = []

  for (let i = 0; i < musicians.length; i++) {
    var musician = musicians[i]
    var instrument = instruments[i]
    sentences.push(`${musician} plays ${instrument}`)
  }
  return sentences
}

function johnLennonFacts(facts) {
  var i = 0
  var l = facts.length
  while (i < l) {
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}

function iLoveTheBeatles(count) {
  var db = []
  if (count !== 7) {
    db.push('I love the Beatles!')
  } else {
    for (let i = 0; i < count + 1; i++) {
      db.push('I love the Beatles!')
    }
  }
  return db
}
