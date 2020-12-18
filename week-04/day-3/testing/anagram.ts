'use strict';
export { }
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function isAnagram(text1: string, text2: string): boolean {
	if (text1.split('').sort().toString() === text2.split('').sort().toString()) {
		return true;
	}
	return false;
}