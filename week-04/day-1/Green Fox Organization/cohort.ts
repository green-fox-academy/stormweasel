'use strict';
/*
Create a Cohort class that has the following

fields:
name: the name of the cohort
students: a list of Students
mentors: a list of Mentors
methods:
addStudent(Student): adds the given Student to students list
addMentor(Mentor): adds the given Mentor to mentors list
info(): prints out 'The name cohort has size of students students and size of mentors mentors.'
The Cohort class has the following constructors:

Cohort(name): beside the given parameter, it sets students and mentors as empty lists
*/

export class Cohort {
	protected _name: string;
	protected _students: string[];
	protected _mentors: string[];

	constructor(name: string) {
		this._name = name;
		this._students = [];
		this._mentors = [];
	}

	addStudent(Student): string[] {
		this._students.push(Student);
		return this._students;
	}

	addMentor(Mentor): string[] {
		this._mentors.push(Mentor);
		return this._mentors;
	}

	info() {
		console.log(
			`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors.`
		);
	}
}