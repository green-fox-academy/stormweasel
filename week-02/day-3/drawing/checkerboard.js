'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let side = 75;

let board = [
  [0, 150, 300, 450],     //x1  -páratlan
  [75, 225, 375, 525],    //x2  -páros
  [0, 150, 300],          //y1  -páratlan
  [75, 225, 375]          //y2  -páros
]
//y1-gyel x1-t kell bejárni
//y2-vel  az x2-t kell bejárni
//páratlan sorok
for (let i = 0; i < board[0].length; i++) {

  for (let j = 0; j < board[2].length; j++) {
    ctx.fillRect(board[0][i], board[2][j], side, side)
  }
}

//páros sorok
for (let i = 0; i < board[1].length; i++) {

  for (let j = 0; j < board[3].length; j++) {
    ctx.fillRect(board[1][i], board[3][j], side, side)
  }
}