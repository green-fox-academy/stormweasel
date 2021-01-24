'use strict';
// Get movie titles, using the given API: https://swapi.dev/

// Create a very simple layout of two lists besides each other: see wireframe.
// - it should have a label
// - an input field (text)
// - and a button
// The input text's content should be sent to the people's api and you should perform 
// a search with it.
// If you get the response, you should display all the results.
// If the user clicks on the character's name, then perform another Ajax request and 
// display all the films they appeared in.
// In the second list, display the movie like this: Movie title (release date).
// Explore the documentation and find requited API endpoints by yourself.


let search = document.querySelector('button[type="submit"]');
let input = document.querySelector('input');
let warning = document.querySelector('#warning-field');

let buttons = document.querySelector('#buttons');
let list = document.querySelector('.people');
let filmsButton = document.querySelector('#films');
let moviesList = document.querySelector('.movies');

search.addEventListener('click', () => {
	search.disabled = true;
	filmsButton.disabled = false;

	let restartButton = document.createElement('button');
	restartButton.innerText = 'New search';
	restartButton.className = "restart";
	buttons.appendChild(restartButton);
	restartButton.onclick = () => { location.reload(); };

	if (input.value == "") {
		console.log('nothing was given');
		warning.textContent = "There was nothing given in the input field";
	} else {
		const character = new XMLHttpRequest();
		character.open('GET', `https://swapi.dev/api/people/?search=${input.value}`);
		character.send();

		character.onreadystatechange = () => {
			if (character.readyState === XMLHttpRequest.DONE) {
				let emptyAnswer = `{"count":0,"next":null,"previous":null,"results":[]}`;
				if (character.response === emptyAnswer) {
					warning.textContent = `There's no such character in the database`;
				} else {
					let values = Object.values(JSON.parse(character.response).results[0]);
					let keys = Object.keys(JSON.parse(character.response).results[0]);
					console.log(keys);
					console.log(values);

					for (let i = 0; i < 13; i++) {
						let li = document.createElement('li');
						if (i === 8) {
							const home = new XMLHttpRequest();
							home.open('GET', `${values[8]}`);
							home.send();

							home.onload = () => {
								let planet = JSON.parse(home.response).name;
								li.textContent = `${keys[i]}: ${planet}`;
							}
						} else if (i === 9) {
							continue;
						} else if (i === 10) {
							if (values[i].length === 0) {
								li.textContent = `${keys[i]}: n/a`;
								list.appendChild(li);
								continue;
							}
							const species = new XMLHttpRequest();
							species.open('GET', `${values[i]}`);
							species.send();
							species.onload = () => {
								let race = JSON.parse(species.response).name;
								li.textContent = `${keys[i]}: ${race}`;
							}
						} else if (i === 11) {
							if (values[i].length === 0) {
								li.textContent = `${keys[i]}: n/a`;
								list.appendChild(li);
								continue;
							}
							let vehicles = [];
							for (let j = 0; j < values[11].length; j++) {
								const kind = new XMLHttpRequest();
								kind.open('GET', `${values[11][j]}`);
								kind.send();
								kind.onload = () => {
									let race = JSON.parse(kind.response).name;
									vehicles.push(race);
									if (vehicles.length === values[i].length) {
										let row= "";
										vehicles.forEach(elem => row+= elem + " / ");
										row = row.slice(0,-2);
										li.textContent = `${keys[i]}: ${row}`;
									}
								}
							}
						} else if (i === 12) {
							if (values[i].length === 0) {
								li.textContent = `${keys[i]}: n/a`;
								list.appendChild(li);
								continue;
							}
							let starships = [];
							for (let j = 0; j < values[12].length; j++) {
								const species = new XMLHttpRequest();
								species.open('GET', `${values[12][j]}`);
								species.send();
								species.onload = () => {
									let type = JSON.parse(species.response).name;
									starships.push(type);
									if (starships.length === values[i].length) {
										let row= "";
										starships.forEach(elem => row+= elem + " / ");
										row = row.slice(0,-2);
										li.textContent = `${keys[i]}: ${row}`;
									}
								}
							}
						} else {
							li.textContent = `${keys[i]}: ${values[i]}`;
						}
						list.appendChild(li);
					}

					filmsButton.addEventListener('click', () => {
						filmsButton.disabled = true;
						let movies = values[9];

						for (let i = 0; i < movies.length; i++) {
							const filmTitle = new XMLHttpRequest();
							filmTitle.open('GET', `${movies[i]}`);
							filmTitle.send();

							filmTitle.onload = () => {
								let answer = JSON.parse(filmTitle.response)
								let li = document.createElement('li');
								li.textContent = `Episode ${answer.episode_id}: ${answer.title} (${answer.release_date})`;
								moviesList.appendChild(li);
							}
						}
					});
				}
			}
		}
	}
});