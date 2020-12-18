'use strict';
import * as test from 'tape';
import { isAnagram } from './anagram';

test('should compare the characters of 2 words', t => {
	let text1: string = 'dog';
	let text2: string = 'god';
	const actual = isAnagram(text1, text2);
	const expected = true;

	t.equal(actual, expected);
	t.end();
});

test('should compare the characters of 2 words', t => {
	let text1: string = 'Dog';
	let text2: string = 'god';
	const actual = isAnagram(text1, text2);
	const expected = false;

	t.equal(actual, expected);
	t.end();
});