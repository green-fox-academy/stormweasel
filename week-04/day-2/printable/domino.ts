'use strict';
import { Printable } from './printable';

class Domino implements Printable {
	protected _leftside: number;
	protected _rightside: number;

	constructor(leftside: number, rightside: number) {
		this._leftside = leftside;
		this._rightside = rightside;
	}

	public printAllFields(): void {
		console.log(`Domino A Side: ${this._leftside} B side: ${this._rightside}`);
	}
}

function initalize(): Domino[] {
	return [
		new Domino(3, 2),
		new Domino(2, 6),
		new Domino(6, 8)
	]
};

let dominoes: Domino  [] = initalize();

for (let domino of dominoes) {
	domino.printAllFields();
}