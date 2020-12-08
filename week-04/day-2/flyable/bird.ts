'use strict';
// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface

import { Animal } from '../zoo/animal';
import { Flyable } from './flyable';

export class Bird extends Animal implements Flyable {
	protected _name: string;
	protected _age: number;
	protected _skinType: string;

	constructor(name: string, age?: number) {
		super(name, age);
		this._name = name;
		this._age = age ?? 1;
		this._skinType = "feathered";
	}

	public land(): boolean {
		console.log(`Hmmm, flying makes me hungry. Let's eat!`);
		return this._isHungry = true;
	}

	public fly(): void {
		console.log('zummm...');
		this.land();
	}

	public takeOff(): void {
		console.log('Huss!');
		this.fly();
	}

	public breed(): string {
		return "laying eggs.";
	}

	public eat(): boolean {
		console.log(`${this._name} love crackers!! Hmpff...`);
		return this._isHungry = false;
	}

	public squeek(): void {
		console.log(`squeek squeek... squeeksqueek...squeeksqueeksqueek...squeeeeeeeeek`);
	}
}

const bird = new Bird('Parrot');
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);
bird.takeOff();
bird.eat();
bird.sleep();
bird.squeek();