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
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

function printTable(list: any[]): void {
	//	console.table(ingredients);

	console.log('+--------------------+---------------+----------+');
	console.log(`|Ingredient          | Needs cooling | In stock |`);
	console.log('+--------------------+---------------+----------+');
	let blank:string = ' ';
	list.map(object => {
		let blank1: string= '';
		let blank2: string= '';
		let blank3: string= '';
		for (let i:number = 1; i < (20-object.name.length); i++){
			blank1 += blank;
		}
		// for (let i:number = 1; i < (20-object.name.length); i++){
		// 	blank2 += blank;
		// }
		for (let i:number = 1; i < 9; i++){
			blank3 += blank;
		}
		if (object.needsCooling) {
			object.needsCooling = 'yes           ';
		} else {
			object.needsCooling = 'no            ';
		}
		if (object.inStock === 0) {object.inStock = '-';}
		console.log(`| ${object.name}${blank1}| ${object.needsCooling}| ${object.inStock}${blank3}|`);
	});
	console.log('+--------------------+---------------+----------+');
}

printTable(ingredients);