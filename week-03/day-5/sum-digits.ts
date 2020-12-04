'uses strict';
export { };
// Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumOfDigits(number: number) {
  if (number.toString().length <= 1) {
    return parseInt(number.toString()[0]);
  }
  return parseInt(number.toString()[0]) + sumOfDigits(parseInt(number.toString().substring(1)));
}
console.log(sumOfDigits(123));
console.log(sumOfDigits(1111));

// let number: number = 123;
// let sum: number = 0;
// for (let i = 0; i < number.toString().length; i++) {
//     sum = sum + parseInt(number.toString()[i]);
// }
// console.log(sum);