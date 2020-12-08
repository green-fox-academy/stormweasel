'use strict';

import { Animal } from './animal';

export class Mammal extends Animal {
	protected _name: string;
	protected _age: number;
	protected _skinType: string;

	constructor(name: string, age?: number) {
		super(name, age);
		this._name = name;
		this._age = age ?? 2;
		this._skinType = "hairy";
	}

	public breed(): string {
		return "pushing miniature versions out.";
	}

	public lactate(): boolean {
		console.log(`lactate ... lactate ... lactate...Hey, I'm hungry!`);
		return this._isHungry = true;
	}

	public eat(): boolean {
		console.log(`Gimmie hamburger or death! Wait am I vegetarian or...`);
		return this._isHungry = false;
	}
}

