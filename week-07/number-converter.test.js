'use strict';

const test = require('tape');
const numberConverter = require('./number-converter');

test('Should return error massage, if one input is missing', t => {
		const actual = numberConverter(5, undefined);
	const expected = "Input value is missing";

	t.equal (actual, expected);
	t.end();
});

test('Should return error massage, if each input is missing', t => {
		const actual = numberConverter(undefined, undefined);
	const expected = "Input value is missing";

	t.equal (actual, expected);
	t.end();
});

test('Should return error massage, if amount is not a number', t => {
	const actual = numberConverter( 'kiokl', '$');
	const expected = "Amount is not a number";

	t.equal (actual, expected);
	t.end();
});