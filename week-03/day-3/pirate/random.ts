'use strict';

export function getRandomInteger(min: number, max: number): number {
	let random: number = Math.floor(Math.random() * (max - min + 1) + min);
	return random;
}