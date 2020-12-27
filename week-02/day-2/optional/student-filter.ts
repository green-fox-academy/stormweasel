'use strict';
export { }
const students: any[] = [
	{ name: 'Mark', age: 9.5, candies: 2 },
	{ name: 'Paul', age: 12, candies: 5 },
	{ name: 'Clark', age: 7, candies: 3 },
	{ name: 'Pierce', age: 12, candies: 7 },
	{ name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function filterStudents(group: any[]): void {
	let filtered: string[] = [];
	group.forEach(object => {
		if (object.candies > 4) {
			console.log(`${object.name} has more than 4 candies.`);
		}
	});
}

filterStudents(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function countAverageCandy(group: any[]): void {
	let sum: number = 0;
	group.map(object =>  sum += object.candies );
	let average: number = sum / group.length;
	console.log(average);
}

countAverageCandy(students);