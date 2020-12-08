'use strict';

// Create an abstract Vehicle class
// it should have at least 3 fields

export abstract class Vehicle {
	protected _speed: number;
	protected _color: string;
	protected _weight: number;

	constructor(color: string, weight: number) {
		this._speed = 0;
		this._color = color;
		this._weight = weight;
	}
	public get speed(): number {
		return this._speed;
	}

	public get weight(): number {
		return this._weight;
	}
}

// Extend Helicopter class from Vehicle
// implement your Flyable interface

import { Flyable } from './flyable';

export class Helicopter extends Vehicle implements Flyable {

	constructor(color: string, weight: number) {
		super(color, weight);
	}

	public land(): void {
		this._speed = -300;
		this._weight--;
		console.log(`Current speed: ${this._speed}`);
		console.log(`Current weight: ${this._weight}`);
	}

	public fly(): void {
		console.log('Clouds, clouds everywhere!');
		this.land();
	}

	public takeOff(): void {
		this._speed += 300;
		console.log(`Current speed: ${this._speed}`);
		this.fly();
	}
}

let copter = new Helicopter('blue', 400);
copter.takeOff();