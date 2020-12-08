'use strict';

export abstract class Animal {
	protected _name: string;
	protected _age: number;
	protected _skinType: string;
	protected _isHungry: boolean;


	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
		this._isHungry = false;
	}

	public getName(): string {
		return this._name;
	}
	public abstract breed(): string;

	public abstract eat(): void;

	public sleep(): void {
		console.log('Zzzzzzzzzzzzzzzzzz');
	}
}