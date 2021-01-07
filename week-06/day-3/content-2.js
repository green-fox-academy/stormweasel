'use strict';
// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']

let classes = document.querySelectorAll('li');
let content = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i <= classes.length - 1; i++) {
	classes[i].innerHTML = content[i];
}
// 2) change the <ul> element's background color to 'limegreen'
// 	- use css class to change the color instead of the style property

let ul = document.querySelector('ul');
// ul.style.backgroundColor = 'limegreen';
// document.head.innerHTML += '<style>ul {background-color: limegreen}</style>';
let head = document.querySelector('head');
let style = document.createElement('style');
style.textContent = `ul {background-color: limegreen}`;
head.appendChild(style);