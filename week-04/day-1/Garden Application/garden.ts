'use strict';
import { Plant, Flower, Tree } from './plants';
import { yellowFlower, blueFlower, purpleTree, orangeTree } from './plants';

export class Garden {
	protected _listOfPlants: Plant[];
	protected _waterTank: number;

	constructor(listOfPLants?: Plant[], waterTank?: number) {
		this._listOfPlants = [];
		this._waterTank = waterTank ?? 100000;
	}

	public addPlants(plant?: Plant): Plant[] {
		this._listOfPlants.push(plant) ?? console.log('Please add an existing plant!');
		return this._listOfPlants;
	}

	public viewPlants(): void {
		for (let i: number = 0; i < this._listOfPlants.length; i++) {
			this._listOfPlants[i].checkWaterNeed();
		}
	}

	public water(waterAmount: number): number {
		console.log(`Watering with ${waterAmount}`);
		let dryPlants: number = 0;
		for (let i: number = 0; i < this._listOfPlants.length; i++) {
			if (Object.values(this._listOfPlants[i])[1] < Object.values(this._listOfPlants[i])[2]) {
				dryPlants += 1
			}
		}
		for (let i: number = 0; i < this._listOfPlants.length; i++) {
			if (Object.values(this._listOfPlants[i])[1] < Object.values(this._listOfPlants[i])[2]) {
				this._listOfPlants[i].setWaterlevel(waterAmount / dryPlants);
			}
		}
		this.viewPlants();
		return this._waterTank -= waterAmount;
	}
}

let garden = new Garden();
garden.addPlants(yellowFlower);
garden.addPlants(blueFlower);
garden.addPlants(purpleTree);
garden.addPlants(orangeTree);

garden.viewPlants();
console.log();
console.log(garden);	//for checking the water level
console.log();
garden.water(40);
console.log();
console.log(garden); //for checking the water level
console.log();
garden.water(70);
console.log();
console.log(garden); //for checking the water level
console.log();