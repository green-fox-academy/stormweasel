'use strict';
export { };
let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  let side: string = '%';
  let blank: string = ' ';
  if (i === 1 || i === lineCount) { console.log(side.repeat(lineCount)); }
  else {
    console.log(side + blank.repeat((lineCount - 2) - (lineCount - i)) + side + blank.repeat(lineCount - 1 - i) + side);
  }
}

console.log();
console.log();

// without .repeat()
for (let i: number = 1; i <= lineCount; i++) {
  let side: string = '%';
  let blank: string = '';
  if (i === 1 || i === lineCount) {
    for (let j: number = 0; j < lineCount - 1; j++) {
      let loneSide: string = '%';
      side += loneSide;
    }
    console.log(side);
  } else {
    for (let j: number = 0; j < (lineCount - 2) - (lineCount - i); j++) {
      let loneBlank: string = ' ';
      blank += loneBlank;
    }
    let firstHalf: string = blank;
    blank = '';
    for (let k: number = 0; k < (lineCount - 1 - i); k++) {
      let loneBlank: string = ' ';
      blank += loneBlank;
    }
    console.log(side + firstHalf + side + blank + side);
  }
}