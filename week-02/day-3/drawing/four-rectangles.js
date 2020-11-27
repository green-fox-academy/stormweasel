'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let color = ['green', 'red', 'yellow', 'brown'];
let x = [0, 303, 100, 450];
let y = [0, 200, 200, 100];
let a = [120, 110, 50, 50];
let b = [45, 100, 200, 70];

function Draw(coorX, coorY, sideA, sideB, color) {
  ctx.fillStyle = color;
  ctx.fillRect(coorX, coorY, sideA, sideB);
}

for (let i = 0; i < 4; i++) {
  Draw(x[i], y[i], a[i], b[i], color[i]);
}