'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for ( let i = 0; i <= 400;i+=20){
       ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(i,400);
    ctx.stroke();

}