'use strict';

function getIndex(list, value) {
	if (list === undefined || value === undefined) {
		return 'Missing input parameters';
	}

	if (list.length === 0) {
		return -1;
	}

	for (let i = 0; i < list.length; i++) {
		if (list[i] === value) {
			return i;
		}
	}
	return -1;
}

//ES5 exports (a sim a export ES6)
module.exports = getIndex;