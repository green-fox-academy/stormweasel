'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
ctx.strokeRect(0, 0, canvas.width, canvas.height);

function drawRect(x1, y1, x2, y2) {           // a keretet megrajztoló függvény
  ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);   // az x1,y1 honnan indulok, x2,y2 ahova menni akarok
}

function draw(x1, y1, x2, y2) {
  if ((x2 - x1) < 1 || (y2 - y1) < 1) {         // ha kisebb, mint egy már nem látszik, olyan kicsi
    return
  }
  drawRect(x1, y1, x2, y2)                      // a keret megrajzolása
  draw(x1, y1, (x2 - x1) / 2, (y2 - y1) / 2);   // a felső sarokba (ha a koordináták 0,0) rajzol feleakkora oldallal, 
  draw(x1 + (x2 - x1) / 2 + y1 + (y2 - y1) / 2) // a további
}

draw(0, 0, canvas.width, canvas.height);