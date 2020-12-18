'use strict';
import * as test from 'tape';
/*
Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you test your method with:
an empty list
a list that has one element in it
a list that has multiple elements in it
Run them
Fix your code if needed
*/
import { Integerlister } from './sum';

let array = new Integerlister();
test('should give back the sum of the elements', t => {
	let list = [1,2,3,4,5,6];
	let actual = array.sum(list);
	let expected = 21;

	t.equal(actual, expected);
	t.end();
});

// an empty list
test('should give back the sum of the elements', t => {
	let list = [];
	let actual = array.sum(list);
	let expected = 0;

	t.equal(actual, expected);
	t.end();
});

// a list that has one element in it
test('should give back the sum of the elements', t => {
	let list = [6];
	let actual = array.sum(list);
	let expected = 6;

	t.equal(actual, expected);
	t.end();
});

// a list that has multiple elements in it
test('should give back the sum of the elements', t => {
	let list = [1,25,61];
	let actual = array.sum(list);
	let expected = 87;

	t.equal(actual, expected);
	t.end();
});