'use strict';

import { Instrument, StringedInstrument } from './instruments';

export class Violin extends StringedInstrument {
	protected _sound: string;

	constructor(numberOfStrings?: number, sound?: string, name?: string) {
		super(numberOfStrings, name);
		this._numberOfStrings = numberOfStrings ?? 4;
		this._sound = sound ?? 'Screech';
		this._name = name ?? 'Violin';
	}

	public sound(): void {
		console.log(`${(this._name)}, a ${this._numberOfStrings}-stringed instrument that goes ${this._sound}`);
	}
}