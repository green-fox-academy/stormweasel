' use strict';

export class Aircraft {
	protected _type: string;
	protected _maxAmmo: number;
	protected _Ammo: number;
	protected _baseDamage: number;
	protected _isPriority: boolean;

	constructor(type: string, maxAmmo: number, baseDAmage: number) {
		this._type = type;
		this._maxAmmo = maxAmmo;
		this._Ammo = 0;
		this._baseDamage = baseDAmage;
	}
	
	public fight(): number {
		let allDamage: number = this._Ammo * this._baseDamage;
		this._Ammo = 0;
		return allDamage;
	}

	public refill(load: number): number {
		if (load <= this._maxAmmo - this._Ammo) {
			return this._Ammo += load;
		} else {
			let remaining: number = load - (this._maxAmmo - this._Ammo);
			return remaining;
		}
	}

	public getType(): void {
		console.log(`Type: ${this._type}`);
	}

	public getStatus(): void {
		console.log(`Type: ${this._type}, Ammo: ${this._Ammo}, Base Damage: ${this._baseDamage}, All Damage ${this._Ammo * this._baseDamage}`);
	}
	
	public isPriority(): boolean {
		return this._isPriority;
	}

	public getMaxAmmo(): number{
		return this._maxAmmo;
	}

	public getAmmo(): number{
		return this._Ammo;
	}
}
// ******************************

export class F35 extends Aircraft {
	protected _isPriority: boolean = true;

	constructor(type?: string, maxAmmo?: number, baseDamage?: number) {
		super(type, maxAmmo, baseDamage);
		this._type = type ?? 'F-35';
		this._maxAmmo = maxAmmo ?? 12;
		this._baseDamage = baseDamage ?? 50;
	}

}
// ******************************

export class F16 extends Aircraft {
	protected _isPriority: boolean = false;

	constructor(type?: string, maxAmmo?: number, baseDamage?: number) {
		super(type, maxAmmo, baseDamage);
		this._type = type ?? 'F-16';
		this._maxAmmo = maxAmmo ?? 8;
		this._baseDamage = baseDamage ?? 30;
	}
}