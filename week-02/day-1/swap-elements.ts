'use strict';

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string[] = ['Arthur', 'Boe', 'Chloe'];
console.log('Original: ' + names);

names.splice(0, 1, 'Chloe');
names.splice(2, 1, 'Arthur');

console.log('Swaped: ' + names);

names.reverse()

console.log('Re-swaped: ' + names);