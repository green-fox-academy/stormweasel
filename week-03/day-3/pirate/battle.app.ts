'use stict';

import { Ship } from './ship';

class BattleApp {
	protected _ship1: Ship;
	protected _ship2: Ship;

	constructor(name1?: string, name2?: string) {
		this._ship1 = new Ship(name1) ?? new Ship('Golden Hind'); // ezek miért nem jelennek meg?
		this._ship2 = new Ship(name2) ?? new Ship(`Black Pearl`);
	}

	public run(): void {
		this._ship1.fillShip();
		this._ship2.fillShip();

		console.log(`Status of the ships:\n`);
		this._ship1.shipStatus();
		this._ship2.shipStatus();

		this._ship1.battle(this._ship2, 1);
	}
}

let battle = new BattleApp();
battle.run();