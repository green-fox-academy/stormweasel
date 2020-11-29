'use strict';
export { };

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let temp: string[] = quote.split('It you');
quote = temp[0] + 'It always takes longer than you' + temp[1];
console.log(quote);