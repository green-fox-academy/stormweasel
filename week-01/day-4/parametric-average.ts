'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let number: number = 10;
let sum: number =  0;
let average: number;

for (let i = 1 ; i <= number; i++) {
    sum = sum+i;
    average = sum/i;
} 
  
console.log('Sum:' + sum +', Average:' + average);