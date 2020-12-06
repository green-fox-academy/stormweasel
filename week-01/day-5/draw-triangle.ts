'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

// my first solution
for (let i: number = 0; i <= lineCount; i++) {
  let star: string = '*';
  console.log(star.repeat(i));
}

console.log();
console.log();

// without .repeat()
let bStar: string = '*';
for (let i: number = 0; i < lineCount; i++) {
  let loneStar: string = '*';
  console.log(bStar);
  bStar = bStar + loneStar;
}