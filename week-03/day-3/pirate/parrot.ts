'use strict';

export class Parrot {
	protected _name: string;
	protected _color: string;
	protected _drunkLimit: number = 3;
	protected _intoxicationLevel: number;

	constructor(name?: string, color?: string) {
		this._name =  name ?? 'Polly';
		this._color = color ?? "red with blue-green wings";
		this._intoxicationLevel = 0;
	}

	public getName(): string {
		return this._name;
	}
	public getLimit(): number {
		return this._drunkLimit;
	}

	public getLevel(): number {
		return this._intoxicationLevel;
	}

	public setLevel(number: number): void {
		this._intoxicationLevel = number;
	}

	public passOut(): void {
		console.log(`ZZZZZZZZZ`);
		console.log(`${this._name} is passed out, until gets sober.`);
		this.setLevel(0);
	}
}