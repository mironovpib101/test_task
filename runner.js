const vm = require('vm');
const fs = require('fs');

const run = async function (path, cb) {
	try {
		function testQuery(callback) {
			setTimeout(function () {
				callback(100500);
			}, 2000);
		}

		function testResult(result) {
			cb(result);
		}

		const result = await new Promise(testQuery);
		vm.runInContext(fs.readFileSync(path), vm.createContext({
			testQuery: () => result,
			testResult
		}));
	} catch (err) {
		return cb(err);
	}
}

module.exports = run;