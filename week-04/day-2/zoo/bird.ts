'use strict';

import { Animal } from './animal';

export class Bird extends Animal {
	protected _name: string;
	protected _age: number;
	protected _skinType: string;

	constructor(name: string, age?: number) {
		super(name, age);
		this._name = name;
		this._age = age ?? 1;
		this._skinType = "feathered";
	}

	public breed(): string {
		return "laying eggs.";
	}

	public eat(): boolean {
		console.log(`${this._name} love crackers!! Hmpff...`);
		return this._isHungry = false;
	}

	public squeek(): void {
		console.log(`squeek squeek... squeeksqueek...squeeksqueeksqueek...squeek`);
	}
}