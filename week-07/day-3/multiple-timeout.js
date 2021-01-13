'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let fruits = ['apple', 'pear', 'melon', 'grapes'];
let number = [0,1,3,5];
fruits.forEach((elem, i) => setTimeout( () => {console.log(elem)}, number[i]*1000));