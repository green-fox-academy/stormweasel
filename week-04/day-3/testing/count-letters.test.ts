'use strict';
import * as test from 'tape';
import { letterCounter } from './count-letters';

let text: string = 'Seasons in the Abbyss';
test('should give back on object with the letters as keys and their count as values', t => {
	let actual = Object.entries(letterCounter(text))[3];
	let expected = ['s', 4];

	t.deepEqual(actual, expected);
	t.end();
});

test('should give back on object with the letters as keys and their count as values', t => {
	let key: string = Object.keys(letterCounter(text))[1];
	let value: number = Object.values(letterCounter(text))[1];
	let actual = [key, value];
	let expected = ['e', 2];

	t.deepEqual(actual, expected);
	t.end();
});

test('should give back on object with the letters as keys and their count as values', t => {
	let actual = letterCounter(text);
	let expected = {
		'S': 1, 'e': 2, 's': 4, 'a': 1, 'o': 1, 'n': 2, ' ': 3,
		'i': 1, 't': 1, 'h': 1, 'A': 1, 'b': 2, 'y': 1
	};

	t.deepEqual(actual, expected);
	t.end();
});