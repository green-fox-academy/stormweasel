'use strict';
//  1. store the element that says 'The King' in the 'king' variable.
//  console.log it.

// const king = document.getElementById("b325");
const king = document.querySelector('#b325');
console.log('1. The King:');
console.log(king);

// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.

// const businessLamp = [document.getElementsByTagName('p'),
// document.getElementsByClassName('asteroid b329 big')];
// const businessLamp = [document.querySelector('p'), 
// 											document.querySelector('.asteroid.b329.big')];
// const businessLamp = document.querySelectorAll(`[class$='big']`)
const businessLamp = document.querySelectorAll(`.big`)
console.log('2a. The Businessman:');
console.log(businessLamp[0]);
console.log('2b. The Lamplighter:');
console.log(businessLamp[1]);

// 3. store 'The King' and 'The Conceited Man'
//       in the 'conceitedKing' variable.
//       alert them one by one.


// const conceitedKing = document.getElementsByClassName('container');
const conceitedKing = document.querySelectorAll('.container');
alert(conceitedKing[0].children[0].textContent);
alert(conceitedKing[0].children[1].textContent);
console.log('3. Conceited King:');
console.log(conceitedKing[0].children[0]);
console.log(conceitedKing[0].children[1]);


// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//       in the 'noBusiness' variable.
//       console.log each of them.


// const noBusiness = document.getElementsByTagName('div');
const noBusiness = document.querySelectorAll('div');
console.log('4. NoBusiness');
console.log(noBusiness[0]);
console.log(noBusiness[1]);
console.log(noBusiness[2]);