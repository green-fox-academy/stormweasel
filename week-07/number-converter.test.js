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

// test('Should return the digits of amount ', t => {
// 	const actual = numberConverter( 745, '$');
// 	const expected = ['7','4','5'];

// 	t.deepEqual (actual, expected);
// 	t.end();
// });
// test('Should return the digits of amount as text', t => {
// 	const actual = numberConverter( 745, '$');
// 	const expected = 'sevenfourfive';

// 	t.deepEqual (actual, expected);
// 	t.end();
// });

test('Should return the one digit numbers as text', t => {
	const actual = numberConverter( 8, '$');
	const expected = 'eight';

	t.deepEqual (actual, expected);
	t.end();
});

test('Should return the ten numbers as text', t => {
	const actual = numberConverter( 18, '$');
	const expected = 'eightteen';

	t.deepEqual (actual, expected);
	t.end();
});

test('Should return the two digit numbers as text', t => {
	const actual = numberConverter( 68, '$');
	const expected = 'sixtyeight';

	t.deepEqual (actual, expected);
	t.end();
});