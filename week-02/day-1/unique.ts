'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr) {
  let listNumber: number[] = [];

  arr.map(function (i: number) {
    if (!listNumber.includes(i)) {
      listNumber.push(arr[arr.lastIndexOf(i)]);
    }
  } )
  console.log(listNumber);
}
//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`