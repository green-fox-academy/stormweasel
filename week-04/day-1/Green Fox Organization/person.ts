'use strict';
/*
Create a Person class with the following fields:

name: the name of the person
age: the age of the person (integer number)
gender: the gender of the person (male / female)
And the following methods:

introduce(): prints out 'Hi, I'm name, a age year old gender.'
getGoal(): prints out 'My goal is: Live for the moment!'
And the following constructors:

Person(name, age, gender)
Person(): sets name to Jane Doe, age to 30, gender to female
*/

export class Person {
	protected _name: string;
	protected _age: number;
	protected _gender: string = 'male' || 'female';

	constructor(name?: string, age?: number, gender?: string) {
		this._name = name ?? 'Jane Doe';
		this._age = age ?? 30;
		this._gender = gender ?? 'female';
	}

	public introduce(): void {
		console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}`);
	}

	public getGoal(): void {
		console.log(`My goal is: Live for the moment!`);
	}
}