'use strict';

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
    let side: any = "%";
    let blank: any = " ";
    if (i === 1 || i === lineCount) {console.log(side.repeat(lineCount));}
    else {
    console.log(side + blank.repeat((lineCount-2)-(lineCount-i)) + side + blank.repeat(lineCount-1-i) + side);
    }
}