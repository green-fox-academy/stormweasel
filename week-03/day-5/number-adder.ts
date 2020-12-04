'use strict';
//Write a recursive function that takes one parameter: 
//    n and adds numbers from 1 to n.

function numberAdder(number: number) {
  if (number < 1) {
    return 0;
  }
  return number + numberAdder(number - 1);
}

console.log(numberAdder(3));