'use strict';
export class Plant {
	protected _color: string;
	protected _waterLevel: number;
	protected _droughtLimit: number;

	constructor(color: string, waterLevel?: number, droughtLimit?: number) {
		this._color = color;
		this._waterLevel = waterLevel ?? 40;
		this._droughtLimit = droughtLimit ?? 8;
	}

	public getWaterlevel(): number {
		return this._waterLevel;
	}

	public setWaterlevel(waterAmount: number): number {
		return this._waterLevel += waterAmount;
	}

	public checkWaterNeed(): void {
		if (this._waterLevel < this._droughtLimit) {
			console.log(`The ${this._color} Flower needs water.`);
		} else {
			console.log(`The ${this._color} Flower doesn't need water.`);
		}
	}
}
//****************************************** */

export class Flower extends Plant {
	protected _color: string = 'yellow' || 'blue';

	constructor(color: string, waterLevel?: number) {
		super(color, waterLevel);
		this._color = color;
		this._waterLevel = waterLevel ?? 4;
		this._droughtLimit = 5;
	}

	public setWaterlevel(waterAmount: number): number {
		return this._waterLevel += waterAmount * 0.75;
	}
}
// ************************************************

export let blueFlower = new Flower('blue');
export let yellowFlower = new Flower('yellow');

// ************************************************

export class Tree extends Plant {
	protected _color: string = 'purple' || 'orange';
	protected _waterLevel: number;

	constructor(color: string, waterLevel?: number) {
		super(color, waterLevel);
		this._color = color;
		this._waterLevel = waterLevel ?? 4;
		this._droughtLimit = 10;
	}

	public setWaterlevel(waterAmount: number): number {
		return this._waterLevel += waterAmount * 0.4;
	}
}
// ************************************************
export let purpleTree = new Tree('purple');
export let orangeTree = new Tree('orange');