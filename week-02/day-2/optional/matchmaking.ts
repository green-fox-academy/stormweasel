'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(array1: string[], array2: string[]): string[] {
	let matches: string[] = [];
	let length: number;
	if (array1 >= array2) {
		length = array1.length;
	}
	length = array2.length;

	for (let i: number = 0; i < length; i++) {
		if (i > array1.length - 1 && i <= array2.length) {
			matches.push(array2[i]);
		} else if (i > array2.length - 1 && i <= array1.length) {
			matches.push(array1[i]);
		} else {
			matches.push(array1[i]);
			matches.push(array2[i]);
		}
	}
	return matches;
}

console.log(makingMatches(girls, boys));