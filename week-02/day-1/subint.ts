'use strict';
export { };

//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

// Example
// console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
// console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

function subInt(x, list) {
  let numToString = x.toString();
  let tempList: string[] = [];
  let returnedList: number[] = [];

  list.map(function (i: number) {       // makes a string array fom the original number arrray
    let j: string = i.toString();
    tempList.push(j);
    return tempList;
  });
  for (let i = 0; i < tempList.length; i++) { 
    if (tempList[i].includes(numToString)) {
      returnedList.push(i);
    }
  }
  return (returnedList);
}

console.log(subInt(1, [1, 11, 34, 52, 61]));
console.log(subInt(9, [1, 11, 34, 52, 61]));