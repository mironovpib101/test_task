const run = require('./runner');

run('./code.js', function (result) {
	console.log('cb: ', result);
});