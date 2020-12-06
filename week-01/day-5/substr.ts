'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string): number {
  if (str.includes(keyword)) {
    return str.indexOf(keyword);
  }
  return -1;
}

//  Example

// should print: `17`
console.log("1. " + substr("this is what I'm searching in", "searching"));

// should print: `-1`
console.log("2. " + substr("this is what I'm searching in", "not"));