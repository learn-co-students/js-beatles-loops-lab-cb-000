var theBeatlesPlay = (musicians, instruments) => {
	let array = [];
	for (let i = 0; i < musicians.length; i++) {
		array.push(`${musicians[i]} plays ${instruments[i]}`);
	}
	return array;
};

var johnLennonFacts = array => {
	var new_array = [];
	array.forEach(el => new_array.push(el + '!!!'));
	return new_array;
};

var iLoveTheBeatles = num => {
	var array = [];
	do {
		array.push('I love the Beatles!');
		num++;
	} while (num < 15);
	return array;
};
