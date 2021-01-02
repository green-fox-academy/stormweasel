'use strict';
import { getRandomInteger } from './random';

const fs = require('fs');
let fileContent: string = '';
try { fileContent = fs.readFileSync('./txts/names.txt', 'utf-8') }
catch (error) { console.log(`Read error: can't read names.txt`); };

let all: string[] = fileContent.split('\n');

let pirate1: string[] = all[0].split(',');
pirate1 = pirate1.map(elem => elem = elem.trim());
let pirate2: string[] = all[1].split(',');
pirate2 = pirate2.map(elem => elem = elem.trim());

let captain: string[] = all[2].split(',');
captain = captain.map(elem => elem = elem.trim());

let ship1: string[] = all[3].split(',');
ship1 = ship1.map(elem => elem = elem.trim() );

let ship2: string[] = all[4].split(',');
ship2 = ship2.map(elem => elem = elem.trim() );

let armada1: string[] = all[3].split(',');
armada1 = armada1.map(elem => elem = elem.trim() );

let armada2: string[] = all[5].split(',');
armada2 = armada2.map(elem => elem = elem.trim() );


export function givePirateName(): string {
	let name: string = '';
	let index1: number = getRandomInteger(0, pirate1.length-1);
	let index2: number = getRandomInteger(0, pirate2.length-1);
	name = `${pirate1[index1]} ${pirate2[index2]}`;
	return name;
}
export function giveCaptainName(): string {
	let name: string = '';
	let index: number = getRandomInteger(0, captain.length-1);
	name = `${captain[index]}`;
	return name;
}

export function giveShipName(): string {
	let name: string = '';
	let index1: number = getRandomInteger(0, ship1.length-1);
	let index2: number = getRandomInteger(0, ship2.length-1);
	name = `${ship1[index1]} ${ship2[index2]}`;
		return name;
}

export function giveArmadaName(): string {
	let name: string = '';
	let index1: number = getRandomInteger(0, armada1.length-1)
	let index2: number = getRandomInteger(0, armada2.length-1)
	name = `${armada1[index1]} ${armada2[index2]}`;
		return name;
}
