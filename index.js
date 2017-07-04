function theBeatlesPlay(musicians, instruments) {
    let musicianInstruments = [];
    for (let i = 0; i < musicians.length; i++) {
        musicianInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return musicianInstruments;
}

function johnLennonFacts(facts) {
    let loudFacts = [];
    let factCounter = 0;
    while (factCounter < facts.length) {
        loudFacts.push(`${facts[factCounter]}!!!`);
        factCounter++;
    }
    return loudFacts;
}

function iLoveTheBeatles(num) {
    let loveBeatles = [];
    do {
        loveBeatles.push(`I love the Beatles!`);
        num++;
    } while (num < 15);
    return loveBeatles;
}