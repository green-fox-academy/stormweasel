'use strict';
import * as test from 'tape';
import { fibon, fibonacci } from './fibonacci';

// with loop
test('should give the fibonacci number of the nth index', t => {
	const actual = fibonacci(20);
	const expected = 6765;

	t.equal(actual, expected);
	t.end();
});

test('should give the fibonacci number of the nth index', t => {
	const actual = fibonacci(0);
	const expected = 0;

	t.equal(actual, expected);
	t.end();
});

test('should give the fibonacci number of the nth index', t => {
	const actual = fibonacci(1);
	const expected = 1;

	t.equal(actual, expected);
	t.end();
});

test('should give the fibonacci number of the nth index', t => {
	const actual = fibonacci(10);
	const expected = 55;

	t.equal(actual, expected);
	t.end();
});

// with recursion
test('should give the fibonacci number of the nth index', t => {
	const actual = fibon(20);
	const expected = 6765;

	t.equal(actual, expected);
	t.end();
});

test('should give the fibonacci number of the nth index', t => {
	const actual = fibon(1);
	const expected = 1;

	t.equal(actual, expected);
	t.end();
});

test('should give the fibonacci number of the nth index', t => {
	const actual = fibon(0);
	const expected = 0;

	t.equal(actual, expected);
	t.end();
});

test('should give the fibonacci number of the nth index', t => {
	const actual = fibon(10);
	const expected = 55;

	t.equal(actual, expected);
	t.end();
});