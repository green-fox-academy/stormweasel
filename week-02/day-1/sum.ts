'use strict';
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(e: number): number {
  let sumOfAll: number = 0;
  for (let i: number = 0; i <= e; i++) {
    sumOfAll += i;
  }
  return sumOfAll
}
console.log(sum(4));