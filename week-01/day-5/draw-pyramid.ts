'use strict';
export { }

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i++) {
  let star:string = '*';
  let blank:string = ' ';
  console.log(blank.repeat(lineCount - i) + star.repeat(i + i + 1));
}

console.log();
console.log();

// without .repeat()
let bStar: string = '*';
let blank: string = ' ';
for (let i: number = 0; i < lineCount; i++) {
  let loneStar: string = '*';
  for (let j: number = 1; j < lineCount - i; j++) {
    let loneBlank: string = ' ';
    blank = blank + loneBlank;
  }
  console.log(blank + bStar);
  bStar = bStar + loneStar + loneStar;
  blank = ' ';
}