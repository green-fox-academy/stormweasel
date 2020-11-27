'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function Draw(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y)
  ctx.lineTo(300, 200);
  ctx.stroke()
}

let x = [45, 544, 368];
let y = [66, 0, 366];

for (let i = 0; i < 3; i++) {
  let b = x[i];
  let h = y[i];
  Draw(b, h);
}