'use strict';

import { Pirate } from "./pirate";
import { countPercentPossibility, getRandomInteger } from './random';


// The Pirate Ship
// The place for the Pirates

// Create a Ship class.

// The Ship stores Pirate-s instances in a list as the crew and has one captain 
// who is also a Pirate.

// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// Filling the ship with a captain and random number of pirates.

// Ships should be represented in a nice way on command line including information 
// about captains consumed rum, state (passed out / died)
// number of alive pirates in the crew

// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum 
// by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)


export class Ship {
	public _name: string;
	protected _captain: Pirate;
	protected _numberOfCrew: number;
	protected _crew: Pirate[];
	protected _canFight: boolean;

	constructor(name?: string) {
		this._name = name ?? "Pirate Ship";
		this._captain = null;
		this._numberOfCrew = 0;
		this._crew = []
		this._canFight = true;

	}

	public fillShip(): void {
		let captain: Pirate = new Pirate();
		captain.setName('Captain ' + captain.getName());
		this._captain = captain;
		let numberOfCrew: number = getRandomInteger(6, 12)
		this._numberOfCrew = numberOfCrew;
		for (let i: number = 0; i <= numberOfCrew; i++) {
			this._crew.push(new Pirate());
		}
	}
	// getter methods:
	public getAlive(): number {
		let living: number = 0;
		this._crew.forEach(pirate => {
			if (pirate.isAlive()) { living++; }
		});
		return living;
	}
	public getAwaken(): number {
		let awaken: number = 0;
		this._crew.forEach(pirate => {
			if (!pirate.isPassedout()) { awaken++; }
		});
		return awaken;
	}

	public ableToFight(): boolean {
		return this._canFight;
	}

	// common ship methods:
	public shipStatus() {
		console.log(
			`${this._name}:\n` +
			`Battle-ready: ${this._canFight}\n` +
			`${this._captain.getName()}: Boozelevel: ${this._captain.getBoozeLevel()}, ` +
			`Alive: ${this._captain.isAlive()}, Passed out: ${this._captain.isPassedout()}\n` +
			`Number of living crew members: ${this.getAlive()} ` +
			`(from this awaken: ${this.getAwaken()} )\n`
		)
	}

	public party(rumAmount: number) {
		console.log(`The ${this._name} is having a party (size ${rumAmount}).\n`);
		for (let i: number = 0; i < rumAmount; i++) {
			this._captain.drinkSomeRum(1);
			this._crew.forEach(pirate => pirate.drinkSomeRum(1));
		}
		if (this.getAwaken() <= 4) { 
			console.log(`Too much crew-member is out cold, the ${this._name} is disabled.`);
			this._canFight = false; }
	}

	// battle methods:
	public battle(ship: Ship, trigger?: number): Ship {
		if (!this._canFight) {
			console.log(`${this._name} not suitable for figthing.`);
			return;
		}
		if (!ship._canFight) {
			console.log(`${ship._name} not suitable for figthing.`);
			return;
		}

		console.log(`\nThe ${this._name} attacks ${ship._name}.`);

		let victor: Ship;
		let scoreThis: number = this.getAwaken() - this._captain.getBoozeLevel();
		let scoreShip: number = ship.getAwaken() - ship._captain.getBoozeLevel();
		if (trigger === 1) {
			console.log(`The ${this._name} starts battle with ${scoreThis} points.`);
			console.log(`The ${ship._name} starts battle with ${scoreShip} points.\n`);
		}
		scoreThis += getRandomInteger(0, 6);
		scoreShip += getRandomInteger(0, 6);
		if (trigger === 1) {
			console.log(`The battle rages on.`);
			console.log(`The ${this._name} attacks with ${scoreThis} points.`);
			console.log(`The ${ship._name} defends with ${scoreShip} points.`);
		}

		if (scoreThis >= scoreShip) {	//attacker's advantage
			console.log(`The ${this._name} has won.`);
			ship.loses();
			this.wins();
			victor = this;
		} else {
			console.log(`The ${ship._name} has won.`);
			this.loses();
			ship.wins();
			victor = ship;
		}
		if (trigger === 1) {
			console.log(`The aftermath:\n`);
			this.shipStatus();
			ship.shipStatus();
			console.log('*************************************************');
		}
		return victor;
	}

	private wins(): void {
		let partySize: number = getRandomInteger(0, this.getAwaken() / 2);
		this.party(partySize);
	}

	private loses(): void {
		let casualties: number = getRandomInteger(0, (this.getAwaken()));
		console.log(`The ${this._name} suffered ${casualties} casualties and fled.\n`);
		let captainIsDead: boolean = countPercentPossibility(10 * casualties);
		if (captainIsDead) { this._captain.die(); }
		this._crew.forEach(pirate => {
			let pirateIsDead: boolean = countPercentPossibility(10 * casualties);
			if (pirateIsDead) { pirate.die(); }
		});
		this._canFight = false;
	}
}