'use strict';
// Add an item that says 'The Green Fox' to the asteroid list.
let newItem = document.createElement('li');
newItem.innerHTML = '<li>The Green Fox</li>';
let parent = document.querySelector('ul');
parent.appendChild(newItem);
// Add an item that says 'The Lamplighter' to the asteroid list.
let newerItem = document.createElement('li');
newerItem.textContent = 'The Lamplighter';
parent.appendChild(newerItem);
// Add a heading saying 'I can add elements to the DOM!' to the .container.
let header = document.createElement('heading');
header.innerHTML = '<h2>I can add elements to the DOM!</h2>';
let container = document.querySelector('.container');
container.appendChild(header);
// Add an image, any image, to the container.
let img = document.createElement('img');
img.src = './attribute-1.jpg';
container.appendChild(img);