'use strict';
// Write the image's url to the console.
//       Replace the image with a picture of your favorite animal.

let img = document.querySelector('img');
// img.setAttribute('src', './attribute-1.jpg');
img.src = './attribute-1.jpg';

//       Make the link point to the Green Fox Academy website.

let link = document.querySelector('a');
// link.setAttribute('href', 'https://www.greenfoxacademy.com/');
link.href = 'https://www.greenfoxacademy.com/';

//       Disable the second button.

let button = document.querySelector('.this-one');
// button.setAttribute('disabled','true');
button.disabled = true;

//       Replace its text with 'Don't click me!'.

button.innerText = `Don't click me!`;