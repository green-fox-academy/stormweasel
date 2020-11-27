'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function Connect(matrix) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(matrix[0][0], matrix[0][1]);
  for (let i = 0; i < matrix.length; i++) {
    ctx.lineTo(matrix[i][0], matrix[i][1]);
  }
  ctx.lineTo(matrix[0][0], matrix[0][1]);
  ctx.stroke();
};

let box = [[10, 10], [290, 10], [290, 290], [10, 290]];
let these = [[50, 100], [70, 70], [80, 90], [90, 90],
[100, 70], [120, 100], [85, 130], [50, 100]];

Connect(box);
Connect(these);