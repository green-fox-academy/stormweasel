'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

// the simplest way
function sweets(list: any[]): string[] {
	list[1] = 'Croissant';
	list[3] = 'Ice cream';
	return list;
}
console.log(sweets(shopItems));

// the more elegant way 
function sweets2(list: any[]): string[] {
	list.forEach((elem, index) => {
		if (typeof (elem) === 'number') {
			list[index] = 'Croissant';
		}
		if (typeof (elem) === 'boolean') {
			list[index] = 'Ice cream';
		}
	});
	return list;
}
console.log(sweets2(shopItems));
