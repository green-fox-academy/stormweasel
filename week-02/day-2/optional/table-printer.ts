'use strict';
// Create a function that prints the ingredient list of dictionaries 
// to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

function printTable(list: any[]): void {
	console.log('+--------------------+---------------+----------+');
	console.log(`| Ingredient         | Needs cooling | In stock |`);
	console.log('+--------------------+---------------+----------+');
	let blank: string = ' ';
	list.map(object => {
		let blank1: string = '';
		let blank2: string = '           ';
		let blank3: string = '        ';
		for (let i: number = 1; i < (20 - object.name.length); i++) {
			blank1 += blank;
		}
		if (object.needsCooling) {
			object.needsCooling = 'yes';
		} else {
			object.needsCooling = 'no ';
		}
		if (object.inStock === 0) {
			object.inStock = '-';
		}
		console.log(`| ${object.name}${blank1}| ${object.needsCooling}${blank2}| ${object.inStock}${blank3}|`);
	});
	console.log('+--------------------+---------------+----------+');
}

printTable(ingredients);

// *************************************************************************

function printTable2(list: any[]): void {
	//find the longest name
	let names: string[] = [];
	list.map(object => names.push(object.name));
	let count: number = 0;
	names.map(elem => {
		if (elem.length > count) { count = elem.length; }
	});
	count++;

	// the lines
	let blank: string = ' ';
	let blank1: string = '';
	let blank2: string = '           ';
	let blank3: string = '        ';
	let fill: string = '-';
	let fill1: string = '-';
	for (let i: number = 0; i < count; i++) {
		fill1 += fill;
	}
	let fill2: string = '---------------';
	let fill3: string = '----------';

	let frame: string = `+${fill1}+${fill2}+${fill3}+`;

	let headTitle1: string = 'Ingredient';
	let headTitle2: string = 'Needs cooling';
	let headTitle3: string = 'In stock';
	let headBlank = '';
	for (let i: number = 0; i < (count - headTitle1.length); i++) {
		headBlank += blank;
	}
	let head: string = `| ${headTitle1}${headBlank}| ${headTitle2} | ${headTitle3} |`;

	//the table
	console.log(frame);
	console.log(head);
	console.log(frame);
	list.map(object => {
		for (let i: number = 0; i < (count - object.name.length); i++) {
			blank1 += blank;
		}
		if (object.needsCooling) {
			object.needsCooling = 'yes';
		} else {
			object.needsCooling = 'no ';
		}
		if (object.inStock === 0) {
			object.inStock = '-';
		}
		console.log(`| ${object.name}${blank1}| ${object.needsCooling}${blank2}| ${object.inStock}${blank3}|`);
		blank1 = '';
	});
	console.log(frame);
}

printTable2(ingredients);