'use strict';
// Create an Armada class

// Contains Ship-s as a list

// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets deleted so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner
import { Ship } from './ship';


export class Armada {
	public _name: string;
	protected _listOfShips: Ship[];

	constructor(name?: string) {
		this._name = name ?? 'Pirate Armada';
		this._listOfShips = [];
	}

	public getShips(): Ship[] {
		return this._listOfShips;
	}

	public getArmadaStatus(trigger?: number): void {
		console.log(
			`\nThe ${this._name} contains ${this._listOfShips.length} ships.\n`);

		if (trigger === 1) {
			this._listOfShips.forEach((ship, i) => {
				console.log(`${ship._name} Crew: ${ship.getAwaken()} ready` +
					` from ${ship.getAlive()} alive`);
			});
		}
		if (trigger === 2) {
			this._listOfShips.forEach((ship, i) => {
				ship.shipStatus();
			});
		}
		if (trigger === 3) { console.log(this._listOfShips); }
	}

	public fillArmada(numberOfShips: number) {
		for (let i: number = 1; i <= numberOfShips; i++) {
			let ship = new Ship();
			ship._name += ` ${i}. of ${this._name}`;
			ship.fillShip();
			this._listOfShips.push(ship);
		}
	}

	public war(armada: Armada): boolean {
		console.log('\n*************************************************');
		console.log(`The ${this._name} wreaks havoc on ${armada._name}.\n`);

		for (let i: number = 0; i < this.getShips().length; i++) {
			if (!this.getShips()[i].ableToFight()) { continue; }
			for (let j: number = 0; j < armada.getShips().length; j++) {
				if (!armada.getShips()[j].ableToFight()) { continue; }
				console.log('\n*************************************************');
				let victor: Ship = this.getShips()[i].battle(armada.getShips()[j], 0);
				if (victor === armada.getShips()[j]) { break; }
			}
		}
		this._listOfShips = this._listOfShips.filter(
			ship => ship.ableToFight() === true);
		armada._listOfShips = armada._listOfShips.filter(
			ship => ship.ableToFight() === true);

		this.getArmadaStatus(2);
		armada.getArmadaStatus(2);
		
		if (this.getShips().length === 0) {
			console.log(`\nThe ${armada._name} is defeated the ${this._name}.`);
			return false;
		} else {
			console.log(`\nThe ${this._name} is defeated the ${armada._name}.`);
			return true;
		}
	}

}