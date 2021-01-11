'use strict';

//ES6
// import {getIndex from '.getindex';}

//ES5
const getIndex = require('./getindex');
const test = require('tape');

test('Should return -1, if the list is empty', t => {
	const list = [];
	const value = 5;
	const actual = getIndex(list, value)
	const expected = -1;

	t.equal(actual, expected);
	t.end();
});

test('Should return -1, if the value is not in the list', t => {
	const list = [1, 2, 3, 4];
	const value = 5;
	const actual = getIndex(list, value)
	const expected = -1;

	t.equal(actual, expected);
	t.end();
});

test('Should return index, if the value is in the list', t => {
	const list = [1, 2, 3, 4, 5];
	const value = 5;
	const actual = getIndex(list, value)
	const expected = 4;

	t.equal(actual, expected);
	t.end();
});

test('Should return message, if the value is undefined', t => {
	const list = [1, 2, 3, 4, 5];
	const value = undefined;
	const actual = getIndex(list, value)
	const expected = 'Missing input parameters';

	t.equal(actual, expected);
	t.end();
});
test('Should return message, if the list is undefined', t => {
	const list = undefined;
	const value = 5;
	const actual = getIndex(list, value)
	const expected = 'Missing input parameters';

	t.equal(actual, expected);
	t.end();
});
