'use strict';
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...arg): void {
  for (let i = 0; i< arg.length; i++) {
      console.log(arguments[i]);
  }
}

printParams (45, 454, true, 'Feri');