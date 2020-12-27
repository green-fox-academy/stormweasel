'use strict';
export { };
// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
const numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function containsSeven(list: any[]): string {
	if (list.includes(7)) { return "Hooray" }
	return "Noooooo";
	// for (let i: number = 0; i < list.length; i++) {
	// 	if (list[i] === 7) { return "Hooray"; }
	// 	return "Noooooo";
	// }
}

console.log(containsSeven(numbers));
console.log(containsSeven(numbers2));

function containsElement(list: any[], elem: any): string {
	// if (list.includes(elem)) { return "Hooray" }
	if (list.find(i => i == elem)) { return "Hooray" }
	return "Noooooo";
}

console.log();
console.log(containsElement(numbers2, 7));
console.log(containsElement(numbers, 7));