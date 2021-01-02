'use strict';
import { Pirate } from '../pirate';

//console.log('Creating Pirates:');
let roberts = new Pirate('Bartholomew Roberts');
let sailor = new Pirate();
console.log(roberts);


// console.log('\nDrinking test:');
// for (let i: number = 0; i < 5; i++) { 
// 	roberts.drinkSomeRum(); 
// 	console.log(roberts.getBoozeLevel());
// 	roberts.howsItGoingMate()
// }

console.log('\nPass out test:');
roberts.wakeUp();
for (let i: number = 0; i < 6; i++) { roberts.drinkSomeRum(); }
console.log(roberts.isPassedout(), roberts.getBoozeLevel());

roberts.wakeUp();
console.log(roberts.isPassedout(), roberts.getBoozeLevel());


// console.log('\nParrot test');
// console.log('add');
// roberts.addParrot();
// roberts.addParrot('Leila');
// console.log(roberts);
// console.log('\nfeed');
// roberts.feedParrot()
// console.log('\ngiveRumToParrot');
// for (let i: number = 0; i < 3; i++) {
// 	console.log(roberts.getParrot().getLevel());
// 	console.log(roberts.getParrot().getLimit());
// 	roberts.giveRumtoParrot();
// }
	
// console.log('\ntalkToParrot');
// roberts.talkToParrot();

// console.log('\nBrawl test');
// roberts.brawl(sailor);


// console.log('\nDeath test');
// roberts.drinkSomeRum();
// roberts.howsItGoingMate();
// roberts.brawl(sailor);
// console.log();
// sailor.drinkSomeRum();
// sailor.howsItGoingMate();
// sailor.brawl(roberts);