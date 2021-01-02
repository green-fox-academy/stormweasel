'use strict';

import {Armada} from './armada';

class WarApp {
	protected _armada1: Armada;
	protected _armada2: Armada;

	constructor(name1?: string, name2?: string) {
		this._armada1 = new Armada(name1) ?? new Armada('Black Fleet'); // ezek miért nem jelennek meg?
		this._armada2 = new Armada(name2) ?? new Armada('Red Fleet');
	}

	public run(): void {
		this._armada1.fillArmada(3);
		this._armada2.fillArmada(3);

		console.log(`Status of the armadas:\n`);
		this._armada1.getArmadaStatus(2);
		this._armada2.getArmadaStatus(2);

		this._armada1.war(this._armada2);
	}
}

let war = new WarApp(/*'Black Fleet', 'Red Fleet'*/);
war.run();
