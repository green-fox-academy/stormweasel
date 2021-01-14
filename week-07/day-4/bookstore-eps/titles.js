'use strict';
let rows = [];
let list = document.querySelector('ul');

for (let i=0; i < rows.length; i++) {
	let row = document.createElement('li');
	row.innerText= row[i];
	list.appendChild(row);
}