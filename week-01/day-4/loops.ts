'use strict';
export { };
let count: number = 1;

for (let i: number = 0; i < 10; i++) {
  console.log('Index:', i);
  count++;
}
console.log(count);

let masikCount = 0;

for (let i: number = 0; i < 5; i++) {

  for (let j: number = 0; j < 5; j++) {
    masikCount++;
    console.log('i: ', i, 'j: ', j, 'count: ', masikCount);
  }
  /*console.log('masikCount: '.masikCount)*/
}

let sum: number = 0;

while (sum < 10) {
  console.log('Sum: ', sum);
  sum++;
}

let year: number = 2000;

do {
  year++;
  console.log('Year: ', year);
} while (year <= 2010);