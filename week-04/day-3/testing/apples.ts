'use strict';
export class Apple {
	protected _type: string;
	protected _color: string;

	constructor(type: string, color: string) {
		this._type = type;
		this._color = color;
	}

	public getApple(): string {
		return 'apple';
	}
}