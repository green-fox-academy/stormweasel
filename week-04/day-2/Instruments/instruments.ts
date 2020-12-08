'use strict';
export abstract class Instrument {
	protected _name: string;

	constructor(name: string) {
		this._name = name;
	}

	public abstract play(): void;
}

// *********************************************************

export abstract class StringedInstrument extends Instrument {
	protected _numberOfStrings: number;

	constructor(numberOfStrings?: number, name?: string) {
		super(name);
		this._name = name;
		this._numberOfStrings = numberOfStrings
	}

	public abstract sound(): void;

	public play() {
		this.sound();
	}
}