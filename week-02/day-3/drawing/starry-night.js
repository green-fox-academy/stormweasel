'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < Math.floor(Math.random() * 100) + 0; i++) {
  let x = Math.floor(Math.random() * 600) + 0;
  let y = Math.floor(Math.random() * 400) + 0;
  let c = Math.floor(Math.random() * 255) + 64;
  ctx.fillStyle = `rgb(${c},${c},${c})`;
  ctx.fillRect(x, y, 5, 5);
  }