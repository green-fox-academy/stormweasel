'use strict';
/*
What is Armstrong number?

An Armstrong number is an n-digit number that is equal to 
the sum of the nth powers of its digits.

Let's demonstrate this for a 4-digit number: 1634 is a 4-digit number, 
raise each digit to the fourth power, and add: 1^4 + 6^4 + 3^4 + 4^4 = 1634, 
so it is an Armstrong number.
For a 3-digit number: 153 is a 3-digit number, raise each digit to the 
third power, and add: 1^3 + 5^3 + 3^3 = 153, so it is an Armstrong number.
*/

//Write a simple program to check if a given number is an armstrong number. 
// The program should ask for a number. E.g. if we type 371, the program should 
// print out: The 371 is an Armstrong number.

function isArmstrong(number: number): void {
	let stringed: string[] = number.toString().split('');
	let digits: number[] = [];
	stringed.map(elem => digits.push(Number(elem)));
	
	let sum: number = 0;
	digits.map(elem => sum += elem ** digits.length);
	
	if (sum === number) {
		console.log(`Yes, ${number} is an Armstrong number.`)
	} else {
		console.log(`No, ${number} is not an Armstrong number.`)
	}
}

isArmstrong(1);
isArmstrong(9);
isArmstrong(10);
isArmstrong(153);
isArmstrong(371);
isArmstrong(1634);
isArmstrong(113443554);