'use strict';

export function getRandomInteger(min: number, max: number): number {
	let random: number = Math.floor(Math.random() * (max - min + 1) + min);
	return random;
}

export function countPercentPossibility(percent: number): boolean {
	let chance: number = getRandomInteger(1, 100);
	if (chance <= percent) { return true; }
	if (chance > percent) { return false; }
}