'use strict';

let a: number = 3;
// make it bigger by 10

console.log(a+10);

let b: number = 100;
// make it smaller by 7

console.log(b-7);

let c: number = 44;
// double c's value

console.log(2*c);

let d: number = 125;
// divide d's value by 5

console.log(d/5);

let e: number = 8;
// what's the cube of e's value?

console.log(e*e*e);
console.log(Math.pow(e,3));


let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let answer1: boolean;

if (f1 > f2) {
    answer1 = true;
} else { 
    answer1 = false;
}
console.log('f1 bigger than f2:' + answer1);

        //another solution
if (f1 !> f2) {answer1 = false}
console.log('f1 bigger than f2:' + answer1);


let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
let answer2: boolean;

if (g1 < g2*2) {
    answer2 = true;
} else { 
    answer2 = false;
}
console.log('Double of g2 bigger than g1:' + answer2);

        //another solution
if (g1 !> g2*2) {answer2 = true}
console.log('Double of g2 bigger than g1:' + answer2);



let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
let answer3: boolean;

if (h % 11 == 0) {
    answer3 = true;
} 
console.log('h is divisible by 11:' + answer3);


let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let answer4: boolean;

if (i1 > Math.pow(i2, 2) && i1 < Math.pow(i2, 3) ) {
    answer4 = true;
} else { 
    answer4 = false;
}
console.log('i1 is higher than i2 squared and smaller than i2 cubed:' + answer4);


let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
let answer5: boolean;

if (j % 5 == 0 || j % 3 ==0) {
    answer5 = true;
} else { 
    answer5 = false;
}
console.log('j is divisible by 2 or 5:' + answer5);

