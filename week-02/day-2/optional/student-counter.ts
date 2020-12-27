'use strict';

const students: any[] = [
	{ name: 'Theodor', age: 3, candies: 2 },
	{ name: 'Paul', age: 9.5, candies: 2 },
	{ name: 'Mark', age: 12, candies: 5 },
	{ name: 'Peter', age: 7, candies: 3 },
	{ name: 'Olaf', age: 12, candies: 7 },
	{ name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

function summarizeCandy(group: any[]): void {
	let sum: number = 0;
	group.map(object => sum += object.candies);
	// solution with for loop:
	// for (let a: number = 0; a< group.length; a++) {
	// 	sum += group[a].candies;
	// 	console.log(group[a].candies);
	// };
	console.log(sum);
}

summarizeCandy(students);

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function summarizeAgeSpec(group: any[]): void {
	let sum: number = 0;
	group.map(object => {
		if (object.candies < 5) {
			sum += object.age;
		}
	});
	console.log(sum);
}

summarizeAgeSpec(students);