'use strict';
// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

//with loop
export function fibonacci(n: number): number {
  let fibo: number[] = [0, 1, 1];
  for (let i: number = 2; i < n + 1; i++) {
    fibo.push(fibo[i] + fibo[i - 1]);
  }
  return fibo[n];
}
console.log(fibonacci(20));
// with recursion
export function fibon(n: number) {
  if (n <= 1) {
    return n;
  }
  return (fibon(n - 1) + fibon(n - 2));
}
console.log(fibon(10));