'use strict';
import { Parrot } from './parrot';
import { getRandomInteger } from './random';

export class Pirate {
	protected _name: string;
	protected _intoxicationLevel: number;
	protected _passOutLimit: number;
	protected _isAlive: boolean;
	protected _passedOut: boolean;
	protected _hasParrot: boolean;
	protected _aParrot: Parrot;

	constructor(name?: string, level?: number, limit?: number) {
		this._name = name ?? 'A. Teesdale';
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

	public die() {
		if (!this._isAlive) {
			console.log(`He's already  dead.`);
			return;
		}
		this._isAlive = false;
		this._passedOut = true;
		console.log(`${this._name} dies in the fight.`);
	}

	// **********************************************************************
	// methods for getting wasted
	public drinkSomeRum(trigger?: number): void {
		if (!this._isAlive) {
			console.log(`He's dead.`);
			return;
		}
		if (trigger === undefined){console.log('gluggy-gluggy');}
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

	private passOut(): void {
		console.log(`ZZZZZZZZZ`);
		this._passedOut = true;
		console.log(`${this._name} is passed out, until gets sober.\n`);
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
			this.die();
		} else if (chance === 2) {
			console.log(`${this.getName()} has won.`);
			enemy.die();
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
			this.die();
			enemy.die();
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
		let chance: number = getRandomInteger(1, 3);
		if (chance == 1) { console.log(`More crackers, you land-lubber piece of scum!\n`); }
		if (chance == 2) {
			console.log(`Any body, submerged in a fluid, experiences an apparent loss` +
				`in weight that is equal to the weight of the fluid displaced by it.\n`);
		}
		if (chance == 3) { console.log(`The captain is a woman.The beard shouldn't deceive you.\n`); }
	}

	public giveRumtoParrot(): void {
		if (!this._hasParrot) {
			console.log(`First you need a parrot.`);
			return;
		}
		let level: number = this._aParrot.getLevel();
		this._aParrot.setLevel(level + 1);

		let chance: number = getRandomInteger(1, 3);
		if (chance == 1) {
			console.log(
				`Leave her, Johnny, leave her!\n` +
				`Oh, leave her, Johnny, leave her!\n` +
				`For the voyage is long and the winds don't blow\n` +
				`And it's time for us to leave her.\n`);
		}
		if (chance == 2) {
			console.log(
				`Under Jolly Roger...\nFly our flag, we teach them fear\n` +
				`Capture them, the end is near\nFiring guns they shall burn\n` +
				`Surrender or fight there's no return\nUnder Jolly Roger...\n`);
		}
		if (chance == 3) {
			console.log(`Like a virrrrgin touched forrr thhe verry firrrst taimme...\n`);
		}

		if (this._aParrot.getLevel() === this._aParrot.getLimit()) {
			this._aParrot.passOut();
		}
	}
	// *******************************************************************************
}