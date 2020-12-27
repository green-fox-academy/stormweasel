'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
	name: string,
	alcohol: number,
	guns: number
};

const queue: FestivalGoer[] = [
	{ name: 'Amanda', alcohol: 10, guns: 1 },
	{ name: 'Mark', alcohol: 0, guns: 0 },
	{ name: 'Dolores', alcohol: 0, guns: 1 },
	{ name: 'Wade', alcohol: 1, guns: 1 },
	{ name: 'Anna', alcohol: 10, guns: 0 },
	{ name: 'Rob', alcohol: 2, guns: 0 },
	{ name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(list: FestivalGoer[]): FestivalGoer[] {
	list.map(object => {
		if (object.guns > 0) {
			watchlist.push(object.name);
		}
		if (object.alcohol > 0) {
			securityAlcoholLoot+= object.alcohol;
			object.alcohol = 0;
		}
		});
	list = list.filter(object => object.guns === 0);
	return list;
}

console.log(`The people in the queue at the festival gates:`);
console.log(queue);
console.log(`They are free to enter the festival:`);
console.log(securityCheck(queue));
console.log(`They are on the watchlist and not allowed on the festival:`);
console.log(watchlist);
console.log(`The units of alcohol confiscated: ${securityAlcoholLoot}`);
