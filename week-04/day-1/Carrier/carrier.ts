'use strict';

import { Aircraft, F16, F35 } from './aircraft';

export class Carrier {
	protected _hp: number;
	protected _aircraftCount: number;
	protected _ammoStorage: number;
	protected _listOfAircrafts: Aircraft[];

	constructor(hp?: number, ammoStorage?: number) {
		this._hp = hp ?? 5000;
		this._ammoStorage = ammoStorage ?? 2300;
		this._listOfAircrafts = [];
	}

	public setAmmoStorage(amount): number {
		return this._ammoStorage = amount;
	}

	public add(plane: Aircraft): Aircraft[] {
		this._listOfAircrafts.push(plane);
		return this._listOfAircrafts;
	}
	// It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
	// If there is not enough ammo then it should start to fill the aircrafts with priority first
	// If there is no ammo when this method is called, it should throw an exception
	public fill(): number {
		let filledAmmo: number = 0;
		// a lőszer mennyiségének ellenőrzése
		let maxAmmoAllPlanes: number = 0;
		for (let j: number = 0; j < this._listOfAircrafts.length; j++) {
			maxAmmoAllPlanes += this._listOfAircrafts[j].getMaxAmmo() - this._listOfAircrafts[j].getAmmo();
		}
		console.log(maxAmmoAllPlanes);
		
		// ha nincs több lőszer
		if (this._ammoStorage === 0) {
			console.log(`Sorry, there's no more ammo in the storage.`);
		} else if (this._ammoStorage < maxAmmoAllPlanes) { // ha kevés lőszer van
			// loading priority planes
			for (let i: number; i < this._listOfAircrafts.length; i++) {
				if (this._listOfAircrafts[i].isPriority()) {
					this._listOfAircrafts[i].refill(this._listOfAircrafts[i].getMaxAmmo());
					filledAmmo += this._listOfAircrafts[i].getMaxAmmo()
						- this._listOfAircrafts[i].refill(this._listOfAircrafts[i].getMaxAmmo());
				}
			}
			// loading non-priority planes
			for (let i: number; i < this._listOfAircrafts.length; i++) {
				if (!this._listOfAircrafts[i].isPriority()) {
					this._listOfAircrafts[i].refill(this._listOfAircrafts[i].getMaxAmmo());
					filledAmmo += this._listOfAircrafts[i].getMaxAmmo()
						- this._listOfAircrafts[i].refill(this._listOfAircrafts[i].getMaxAmmo());
				}
			}
			return this._ammoStorage -= filledAmmo;
		} else {
			// ha van elég lőszer
			for (let i: number = 0; i < this._listOfAircrafts.length; i++) {
				let currentPlane: Aircraft = this._listOfAircrafts[i];
				currentPlane.refill(currentPlane.getMaxAmmo());
				filledAmmo += currentPlane.getMaxAmmo()
					- currentPlane.refill(currentPlane.getMaxAmmo());
			}
			return this._ammoStorage -= filledAmmo;
		}
	}

	public fight(target: Carrier): number {
		let damageDone: number = 0;
		for (let i: number = 0; i < this._listOfAircrafts.length; i++) {
			let currentDamage: number = Object.values(this._listOfAircrafts[i])[2] * Object.values(this._listOfAircrafts[i])[3];
			console.log(`The attack inflicted ${currentDamage} damage.`);
			damageDone += currentDamage;
			Object.values(this._listOfAircrafts[i])[2] = 0;
		}
		console.log(`The overall damage: ${damageDone}`);
		return target._hp -= damageDone;
	}

	public getStatus(): void {
		let totalDamage: number = 0;
		for (let j: number = 0; j < this._listOfAircrafts.length; j++) {
			let ammo: number = Object.values(this._listOfAircrafts[j])[2];
			let baseDamage: number = Object.values(this._listOfAircrafts[j])[3];
			totalDamage += ammo * baseDamage;
		}
		console.log(`HP:${this._hp}, Aircraft count: ${this._listOfAircrafts.length}, Ammo Storage: ${this._ammoStorage}, Total Damage: ${totalDamage}`);
		for (let i: number = 0; i < this._listOfAircrafts.length; i++) {
			this._listOfAircrafts[i].getStatus();
		}
	}
}
