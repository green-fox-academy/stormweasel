'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divider(divisor: number) {
  try {
    if (divisor === 0) {
      throw ('fail');
    }
    let quotient: number = 10 / divisor;
    console.log(quotient);
  }
  catch (e) {
    console.log(e);
  }
}

divider(0);