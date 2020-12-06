'use strict';
export { }

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is


for (let i: number = 1; i <= lineCount; i++) {
  let side: any = "%";
  let blank: any = " ";
  if (i === 1 || i === lineCount) { console.log(side.repeat(lineCount)); }
  else {
    console.log(side + blank.repeat(lineCount - 2) + side);
  }
}

console.log();
console.log();

// without .repeat()
let bSide: string = '%';
let bBlank: string = ' ';
for (let i: number = 0; i <= lineCount; i++) {
  if (i === 0 || i === lineCount) {                        // alsó és felső sor
    for (let i: number = 1; i < lineCount; i++) {               //linedrawing-loop
      let addToSide: string = '%';
      bSide = bSide + addToSide;
    }
    console.log(bSide);
    bSide = "%";                                        // érték visszaállítása eredetire (így nem dupláz)
  } else {
    for (let i: number = 1; i < lineCount - 2; i++) {   // köztes sor
      let plusBlank: string = ' ';
      bBlank = bBlank + plusBlank;
    }
    console.log('%' + bBlank + '%');
    bBlank = ' ';                                       // érték visszaállítása eredetire (így nem dupláz)
  }
}