'use strict';

import { Animal } from './animal';

export class Reptile extends Animal {
	protected _name: string;
	protected _age: number;
	protected _skinType: string;

	constructor(name: string, age?: number) {
		super(name, age);
		this._name = name;
		this._age = age ?? 30;
		this._skinType = "scutellar";
	}

	public breed(): string {
		return "laying eggs.";
	}

	public molt(): boolean {
		console.log(`I leave some skin here ... and there ... now the whole package...Hey, I got hungry!`);
		this._age++;
		return this._isHungry = true;
	}

	public eat(): boolean {
		console.log(`Hmmm...you look ssssso deliciousssssss...`);
		return this._isHungry = false;
	}
}
