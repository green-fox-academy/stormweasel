'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let listOfNumbers2: number[] = [2, 6, 8, 10, 12, 14, 16];

function checkNums(list: number []): boolean {
 if (list.includes(4) && list.includes(8) && list.includes(12) && list.includes(16)) 
 {return true;}
 return false;
}

console.log(checkNums(listOfNumbers));
console.log(checkNums(listOfNumbers2));