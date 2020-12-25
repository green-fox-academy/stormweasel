'user strict';
export { };

let products = {
	milk: 1.07, rice: 1.59, eggs: 3.14, cheese: 12.60,
	'chicken breasts': 9.40, apples: 2.31, tomato: 2.58,
	potato: 1.75, onion: 1.10
};

let listBob = {
	milk: 3, rice: 2, eggs: 2, cheese: 1,
	'chicken breasts': 4, apples: 1,
	tomato: 2, potato: 1
};

let listAlice = {
	rice: 1, eggs: 5, 'chicken breasts': 2,
	apples: 1, tomato: 10
}

//Create an application which solves the following problems.
// **************************************************
// Functions:

function countTotalAmount(object): number {
	let amount: number = 0;
	for (let elem in object) {
		amount += object[elem];
	}
	return amount;
}

function countTotalPrice(object): number {
	let price: number = 0;
	for (let elem in object) {
		if (products.hasOwnProperty(elem)) {
			price += object[elem] * products[elem];
		}
	}
	return price;
}

function compare(a: number, b: number): void {
	if (a > b) {
		console.log(`Bob. He buys ${a - b} more.`);
	} else if (a < b) {
		console.log(`Alice. She buys ${b - a} more`);
	} else {
		console.log(`They buy equal amount.`);
	}
}

function compareLists(product: string, listA: object, listB: object) {
	if (!products.hasOwnProperty(product)) {
		console.log(`Sorry, there's no such product in the pool.`);
		return;
	}
	if (!listA.hasOwnProperty(product)) { listA[product] = 0; }
	if (!listB.hasOwnProperty(product)) { listB[product] = 0; }

	return compare(listA[product], listB[product]);
}

// **************************************************************
// Questions:

// How much does Bob pay?
console.log(`How much does Bob pay?`);
console.log(`Bob pays : ${countTotalPrice(listBob)}`);

// How much does Alice pay?
console.log();
console.log(`How much does Alice pay?`);
console.log(`Alice pays : ${countTotalPrice(listAlice)}`);

// Who buys more Rice?
console.log();
console.log('Who buys more Rice?');
compareLists('rice', listBob, listAlice);

// Who buys more Potato?
console.log();
console.log(`Who buys more Potato?`);
compareLists('potato', listBob, listAlice);

// Who buys more Knife? (added by me for testing)
console.log();
compareLists('knife', listBob, listAlice);

// Who buys more different products?
console.log();
console.log('Who buys more different products');
let keys1: string[] = Object.keys(listBob);
let keys2: string[] = Object.keys(listAlice);
compare(keys1.length, keys2.length);

// Who buys more products? (piece)
console.log();
console.log('Who buys more products? (piece)');
compare(countTotalAmount(listBob), countTotalAmount(listAlice));