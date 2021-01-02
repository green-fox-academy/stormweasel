'use strict';
import { Parrot } from './parrot';
import { getRandomInteger } from './random';
import { givePirateName } from './name-functions';
const fs = require('fs');


export class Pirate {
	protected _name: string;
	protected _intoxicationLevel: number;
	protected _passOutLimit: number;
	protected _isAlive: boolean;
	protected _passedOut: boolean;
	protected _hasParrot: boolean;
	protected _aParrot: Parrot;

	constructor(name?: string, level?: number, limit?: number) {
		this._name = name ?? givePirateName();
		this._isAlive = true;
		this._passedOut = false;
		this._intoxicationLevel = 0 ?? level;
		this._passOutLimit = 6 ?? limit;
		this._hasParrot = false;
	}
	// Methods: ************************************************************
	// getters
	public getName(): string {
		return this._name;
	}

	public getBoozeLevel(): number {
		return this._intoxicationLevel;
	}

	public getLimit(): number {
		return this._passOutLimit;
	}

	public isAlive(): boolean {
		return this._isAlive;
	}

	public isPassedout(): boolean {
		return this._passedOut;
	}

	public getParrot(): Parrot {
		return this._aParrot;
	}

	// *********************************************************************
	// setters
	public setBoozeLevel(level: number): void {
		this._intoxicationLevel = level;
	}
	public setName(name: string) {
		this._name = name;
	}

	public wakeUp(): void {
		if (!this._isAlive) {
			console.log(`He's dead.`);
			return;
		}
		if (this._passedOut) {
			this._passedOut = false;
			this.setBoozeLevel(0);
		} else {
			console.log(`Hey, I'm awake! Just resting my eyes...`);
		}
	}

	public die(trigger?: number) {
		if (!this._isAlive) {
			console.log(`He's already  dead.`);
			return;
		}
		this._isAlive = false;
		this._passedOut = true;
		if (trigger === 1) { console.log(`${this._name} dies in the fight.`); }
	}

	// **********************************************************************
	// methods for getting wasted
	public drinkSomeRum(trigger?: number): void {
		if (!this._isAlive) {
			console.log(`He's dead.`);
			return;
		}
		if (trigger === undefined) { console.log('gluggy-gluggy'); }
		this._intoxicationLevel++;
		if (this._intoxicationLevel === this._passOutLimit) { this.passOut(); }
	}

	public howsItGoingMate() {
		if (!this._isAlive) {
			console.log(`He's dead.`);
			return;
		}
		if (this._intoxicationLevel < 5) {
			console.log(`Pour me anudder!\n`);
		} else {
			console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`)
			this.passOut();
		}
	}

	private passOut(trigger?: number): void {
		if (trigger === 1) {
			console.log(`ZZZZZZZZZ`);
			console.log(`${this._name} is passed out, until gets sober.\n`);
		}
		this._passedOut = true;
	}
	// ************************************************************************
	// Fight methods:

	public brawl(enemy: Pirate) {
		if (!this._isAlive) {
			console.log(`${this.getName()}'s dead.He will fight only in Valahalla.`);
			return;
		}
		if (!enemy._isAlive) {
			console.log(`${enemy.getName()}'s dead.Get a voodo priest, if you want this fight with him.`);
			return;
		}
		console.log(`${this.getName()} attacks ${enemy.getName()}.\nAfter a fierce fight the outcome is the following:`);
		let chance: number = getRandomInteger(1, 10);
		console.log(chance);

		if (chance === 1) {
			console.log(`${enemy.getName()} has won.`);
			this.die(1);
		} else if (chance === 2) {
			console.log(`${this.getName()} has won.`);
			enemy.die(1);
		} else if (chance == 3 || chance == 4 || chance == 5) {
			console.log(`${enemy.getName()} has won.`);
			this.passOut();
		} else if (chance == 6 || chance == 7 || chance == 8) {
			console.log(`${this.getName()} has won.`);
			enemy.passOut();
		} else if (chance == 9) {
			console.log(`They both fall and noone has won.`);
			this.passOut();
			enemy.passOut();
		} else if (chance == 10) {
			console.log(`They both drop dead.`);
			this.die(1);
			enemy.die(1);
		}
	}

	// **************************************************************************
	// Parrot methods:	
	public addParrot(name?: string): void {
		if (!this._isAlive) {
			console.log(`Dead men need no parrot.`);
			return;
		}
		this._hasParrot = true;
		if (this._hasParrot) { this._aParrot = new Parrot(name) };
	}
	public feedParrot(): void {
		if (!this._hasParrot) {
			console.log(`First you need a parrot.`);
			return;
		}
		console.log(`Yum-yum, ${this._aParrot.getName()} wants more cracker!\n`);
	}
	public talkToParrot(): void {
		if (!this._hasParrot) {
			console.log(`First you need a parrot.`);
			return;
		}

		let fileContent: string = '';
		try {
			fileContent = fs.readFileSync('./txts/parrottalks.txt', 'utf-8')
		}
		catch (error) {
			console.log(`Read error: can't read parrottalks.txt`);
			return;
		};

		let talks: string[] = fileContent.split('\n');
		let chance: number = getRandomInteger(1, 3);
		if (chance == 1) { console.log(talks[0]); }
		if (chance == 2) { console.log(talks[1]); }
		if (chance == 3) { console.log(talks[2]); }
	}

	public giveRumtoParrot(): void {
		if (!this._hasParrot) {
			console.log(`First you need a parrot.`);
			return;
		}
		let level: number = this._aParrot.getLevel();
		this._aParrot.setLevel(level + 1);

		let fileContent: string = '';
		try {
			fileContent = fs.readFileSync('./txts/parrotsongs.txt', 'utf-8')
		}
		catch (error) {
			console.log(`Read error: can't read parrotsongs.txt`);
			return;
		};

		let songs: string[] = fileContent.split('¤');
		console.log(`${this._aParrot.getName()} starts singing on a drunken voice:\n`);
		let chance: number = getRandomInteger(1, 3);
		if (chance == 1) { console.log(songs[0]); }
		if (chance == 2) { console.log(songs[1]); }
		if (chance == 3) { console.log(songs[2]); }

		if (this._aParrot.getLevel() === this._aParrot.getLimit()) {
			this._aParrot.passOut();
		}
	}
	// *******************************************************************************
}