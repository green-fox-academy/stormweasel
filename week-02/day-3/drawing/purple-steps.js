'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function Steps(x) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, x, 15, 15)
};

let x = [];
let side = 15;

for (let i = 0; i < 19; i++) {
  Steps(side);
  x.push(side);
  side += 15;
}