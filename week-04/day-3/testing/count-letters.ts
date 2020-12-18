'use strict';
export { };
// Write a function, that takes a string as an argument and returns a dictionary with all 
// letters in the string as keys, and numbers as values that shows how many occurrences 
// there are.
// Create a test for that.

export function letterCounter(text: string): object {
	let dictionary = {};
	for (let i: number = 0; i < text.length; i++) {
		if (dictionary.hasOwnProperty(text[i])) {
			continue;
		}
		let count: number = 0;
		for (let j: number = 0; j < text.length; j++) {
			if (text[i] === text[j]) {
				count++;
			} else {
				count;
			}
		}
		dictionary = Object.assign(dictionary, { [text[i]]: count });
	}
	return dictionary;
}

let text: string = 'Seasons in the Abbyss';

console.log(letterCounter(text));