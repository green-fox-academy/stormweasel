'use strict';
export { };
//We are going to represent our expenses in a list containing integers.

//Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120

/*Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings?
*/
let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

function Financer(array) {
  console.log('How much did we spend?');
  let sum: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    sum += array[i]
  }
  console.log(sum);

  console.log('Which was our greatest expense?');
  let max: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  console.log(max);

  console.log('Which was our cheapest spending?');
  let min: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    if (i < array.length - 1) {           //az utolsó elem miatt
      if (array[i] < array[i + 1]) {      //összes többi elem
        min = array[i];
      }
    } else {
      if (array[i] < array[i - 1])        //utolsó elem
        min = array[i];
    }
  }
  console.log(min);

  console.log('What was the average amount of our spendings?');
  console.log(Math.round(sum / array.length));
};

Financer(expenses);