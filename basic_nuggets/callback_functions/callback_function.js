function makeUppercase(value) {
	console.log(value.toUpperCase());
}

// makeUppercase('peter');

function reverseString(value) {
	console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
	const fullName = `${name} smith`;
	cb(fullName);
}

handleName('peter', makeUppercase);
handleName('peter', reverseString);

// array methods, setTimeout, event listeners etc
