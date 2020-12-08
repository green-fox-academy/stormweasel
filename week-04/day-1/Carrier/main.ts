'use strict';

import { Aircraft, F16, F35 } from './aircraft';
import { Carrier } from './carrier';

let ssEnterprise = new Carrier();

let f16_1 = new F16();
let f16_2 = new F16();
let f35_1 = new F35();
let f35_2 = new F35();
let f35_3 = new F35();

// f16_2.getStatus();

console.log();


ssEnterprise.add(f16_1);
ssEnterprise.add(f16_2);
ssEnterprise.add(f35_1);
ssEnterprise.add(f35_2);
ssEnterprise.add(f35_3);
console.log('Intial state:');
ssEnterprise.getStatus();
console.log();

//Fill-test
// ssEnterprise.setAmmoStorage(0);  // ha nincs lőszer
ssEnterprise.setAmmoStorage(52);		// ha kevés lőszer van
ssEnterprise.fill();
console.log();
console.log('After get filled:');
ssEnterprise.getStatus();
console.log();


//Fight-test

// let target = new Carrier();

// console.log('The condition of target before the attack:');
// target.getStatus();
// ssEnterprise.fight(target);
// console.log();
// console.log('The condition of target after the attack:');
// target.getStatus();
// console.log();
// console.log('The condition of Enterprise after the attack:');
// ssEnterprise.getStatus();