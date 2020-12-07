'use strict';
/*
Create a Student class that has the same fields and methods as the Person class, 
and has the following additional

fields:

previousOrganization: the name of the student’s previous company / school
skippedDays: the number of days skipped from the course
methods:
getGoal(): prints out 'My goal is: Be a junior software developer.'
introduce(): 'Hi, I'm name, a age year old gender from previousOrganization 
							who skipped skippedDays days from the course already.'
skipDays(numberOfDays): increases skippedDays by numberOfDays

The Student class has the following constructors:

Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, 
					 skippedDays to 0
*/

import { Person } from './person';

export class Student extends Person {

	protected _previousOrganization: string;
	protected _skippedDays: number;

	constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
		super(name, age, gender);
		this._previousOrganization = previousOrganization ?? 'The School of Life';
		this._skippedDays = 0;
	}

	public getGoal(): void {
		console.log(`My goal is: Be a junior software developer.`);
	}

	public introduce(): void {
		super.introduce();
		console.log(`from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
	}

	public skipDays(numberOfDays: number): number {
		return this._skippedDays + numberOfDays;
	}
}