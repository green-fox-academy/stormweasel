'use strict';
import {Ship} from './ship';

console.log(`Creating ship:\n`);
let hind = new Ship('Golden Hind');
console.log(hind);
let ship = new Ship();
console.log();
console.log(ship);

console.log(`Fill ship:\n`);
hind.fillShip();
ship.fillShip();
// console.log(hind);
// console.log();
// console.log(ship);

console.log(`Ship Status:\n`);
hind.shipStatus();
console.log();
ship.shipStatus();

// console.log(`Party:\n`);
// hind.party(2);
// hind.shipStatus();
// console.log(hind);

console.log(`Battle:\n`);
hind.battle(ship);
