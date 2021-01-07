'use strict';
const kids = [
	{ 'petName': 'Wattled crane', 'owner': 'Bryant' },
	{ 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
	{ 'petName': 'Mynah, common', 'owner': 'Nelie' },
	{ 'petName': 'Dolphin, common', 'owner': 'Mariele' },
	{ 'petName': 'Gray duiker', 'owner': 'Maddalena' },
	{ 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
	{ 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
	{ 'petName': 'Bison, american', 'owner': 'Tommie' },
	{ 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
	{ 'petName': 'Carpet snake', 'owner': 'Veda' },
	{ 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

kids.map((elem,i) =>{
// 1) Create an <article> element for each kid
let kid = document.createElement('article');

// 2) Create a <h3> and a <p> element for each article and 
// append them as a child to the <article>
// 		- The H3 should contain the owner's name
// 		- The p should contain the pet's name
let owner = document.createElement('h3');
owner.textContent = Object.values(kids[i])[1];
let pet = document.createElement('p');
pet.textContent = Object.values(kids[i])[0];

kid.appendChild(owner);
kid.appendChild(pet);

// 3) Add the article to the pets div.

let pets = document.querySelector('#pets');
 pets.appendChild(kid);
});