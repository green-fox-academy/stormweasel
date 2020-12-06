'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let aLine: string = '% ';
let bLine: string = ' %';
for (let i: number = 0; i <= 3; i++) {
	console.log(aLine.repeat(4));
	console.log(bLine.repeat(4));
}

// without .repeat()
console.log();
console.log();

for (let j: number = 0; j <= 3; j++) {
	let aLine: string = '% ';
	let bLine: string = ' %';

	for (let i: number = 0; i <= 1; i++) {
		aLine += aLine;
		bLine += bLine;
	}
	console.log(aLine);
	console.log(bLine);
}