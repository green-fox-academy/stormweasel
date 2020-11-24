'use strict';
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 4;

let matrix: number[][] = [];
for (let i: number = 0; i < size; i++) {
  let line: number[] = [];
  for (let i: number = 0; i < size; i++) {
    line.push(0);
  }
  line[size - 1 - i] = 1;
  matrix.push(line);
}
console.log(matrix[0][0], matrix[0][1], matrix[0][2], matrix[0][3]);
console.log(matrix[1][0], matrix[1][1], matrix[1][2], matrix[1][3]);
console.log(matrix[2][0], matrix[2][1], matrix[2][2], matrix[2][3]);
console.log(matrix[3][0], matrix[3][1], matrix[3][2], matrix[3][3]);