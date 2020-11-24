'use script';
// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers: number[] = [3, 4, 5, 6, 7];
console.log('The original numbers:  ' + numbers);
// with temp array and loop
let temp: number[] = numbers.slice();
for (let i: number = 0; i < numbers.length; i++) {
  numbers[i] = temp[numbers.length - 1 - i];
}
console.log('Reversed numbers:  ' + numbers);
// with the built in method
numbers.reverse();
console.log('Re-reversed numbers:  ' + numbers);