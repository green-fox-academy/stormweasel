'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function Draw(size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(300 - size / 2, 200 - size / 2, size, size);
}

let size = [];
let side = 100;

for (let i = 0; i < 8; i++) {
  size.push(side);
  side += 42;
}

size.reverse().forEach(function (elem, x) {   //a reverse oka: nem volt kedvem megfordítani a színeket
  Draw(elem, rainbow[x]);
});