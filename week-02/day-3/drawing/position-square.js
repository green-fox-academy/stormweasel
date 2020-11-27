'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function Square(x, y) {
  ctx.fillRect(x, y, 50, 50)
};

let coor = [100, 100, 150, 150, 200, 200];

for (let i = 0; i < coor.length; i = i + 2) {
  Square(coor[i], coor[i + 1]);
 }

/*
let coordinates = {
    first: [250, 250],
    second: [0, 0],
    third: [300, 300]
};

Square(coordinates.first [0], coordinates.first [1]);
Square(coordinates.second [0], coordinates.second [1]);
Square(coordinates.third [0], coordinates.third [1]);
*/