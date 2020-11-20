'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let aline: any = '% ';
let bline: any = ' %';
for (let i: number = 0; i <= 3; i++) {
console.log(aline.repeat(4));
console.log(bline.repeat(4));
}