'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number =45.54;
let b: number =66.32;
let c: number =33.033;

let surfArea: number = 2*(a*b+b*c+a*c);
let volume: number = a*b*c

console.log('Surface Area:' + surfArea);
console.log('Volume: '+ volume);


