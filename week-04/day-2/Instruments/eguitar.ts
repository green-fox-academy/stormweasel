'use strict';

import { Instrument, StringedInstrument } from './instruments';

export class ElectricGuitar extends StringedInstrument {
	protected _sound: string;

	constructor(numberOfStrings?: number, sound?: string, name?: string) {
		super(numberOfStrings, name);
		this._numberOfStrings = numberOfStrings ?? 6;
		this._sound = sound ?? 'Twang';
		this._name = name ?? 'Electric Guitar';
	}

	public sound(): void {
		console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this._sound}`);
	}
}