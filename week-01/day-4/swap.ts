'use strict';

// Swap the values of these variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

console.log(numberToSwap1);
console.log(numberToSwap2);

/* an easy way
numberToSwap1 = 526;
numberToSwap2 = 123;

console.log(numberToSwap1);
console.log(numberToSwap2);
*/

// I couldn't think of a more elegant solution. Maybe later in the course.
let containerTemp1: number = numberToSwap1;
let containerTemp2: number = numberToSwap2;

numberToSwap1 = containerTemp2;
numberToSwap2 = containerTemp1;

console.log(numberToSwap1);
console.log(numberToSwap2);