'use strict';

export class Integerlister {
	_name: string;

	constructor(name?: string) {
		this._name = name ?? 'lister';
	}
	sum(array: number []): number {
		let sum: number = 0;
		for (let i: number = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	}
}