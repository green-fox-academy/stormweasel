'use strict';

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

for (let i: number = 0; i <= lineCount; i++) {
    let star: any = "*";
    let blank: any = " ";
    console.log(blank.repeat(lineCount-i) + star.repeat(i+i+1));
}