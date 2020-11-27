'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function Draw(x, y,) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
};

for (let i = 0; i <= 600; i += 20) {
  Draw(i, 0);   //up
  Draw(i, 400)  //right
}

for (let i = 0; i <= 400; i += 20) {
  Draw(600, i); //down
  Draw(0, i);   //left
}