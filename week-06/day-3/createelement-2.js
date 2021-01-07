'use strict';
const planetData = [
	{
		category: 'inhabited',
		content: 'Foxes',
		asteroid: true,
	},
	{
		category: 'inhabited',
		content: 'Whales and Rabbits',
		asteroid: true,
	},
	{
		category: 'uninhabited',
		content: 'Baobabs and Roses',
		asteroid: true,
	},
	{
		category: 'inhabited',
		content: 'Giant monsters',
		asteroid: false,
	},
	{
		category: 'inhabited',
		content: 'Sheep',
		asteroid: true,
	},
];


// Remove the king from the list.
let king = document.querySelector('li');
king.remove();

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and 
// its content as text content.

let asteroids = document.querySelector('.asteroids');

for (let i = 0; i < planetData.length; i++) {
	let planet = document.createElement('li');
	planet.setAttribute('class', Object.values(planetData[i])[0]);
	planet.textContent = Object.values(planetData[i])[1];
	if (Object.values(planetData[i])[2]) {
		asteroids.appendChild(planet);
	}
}