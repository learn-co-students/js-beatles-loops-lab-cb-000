function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (var i = 0; i<musicians.length; i++){
    band.push(musicians[i] + " plays " + instruments[i])
  }
  return band
}
