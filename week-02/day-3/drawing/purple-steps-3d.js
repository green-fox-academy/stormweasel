'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function Steps(x, y) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, x, y, y)
};

let origo = 0;
let side = 15;

for (let i = 0; i < 6; i++) {
  Steps(origo, side);
  origo += side;
  side = side * 1.5;
}