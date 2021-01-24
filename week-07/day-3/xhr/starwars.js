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

let list = document.querySelector('.people');

let filmsButton = document.querySelector('#films');
let moviesList = document.querySelector('.movies');


// function getApi(info) {
// 	let request = new XMLHttpRequest();
// 	request.open('GET', `${info}`);
// 	request.send();
// 	let field = parseRequest(request);
// 	return field;
// }

// function parseRequest(request) {
// 	request.onload = () => {
// 		let field = JSON.parse(request.response).name;
// 		console.log(field);
// 		return field;
// 	}
// }

search.addEventListener('click', () => {
	console.log(input.value);
	if (input.value == "") {
		console.log('nothing was given');
		let nothing = document.createElement('p');
		nothing.textContent = "There was nothing given in the input field"; 
		document.body.insertBefore(nothing, list);
	} else {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', `https://swapi.dev/api/people/?search=${input.value}`)
		xhr.send();

		xhr.onreadystatechange = () => {
			// function handleReadyStateChange () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				console.log(xhr.response);
				let emptyAnswer = `{"count":0,"next":null,"previous":null,"results":[]}`;
				if (xhr.response === emptyAnswer ) {
					console.log(`There's no such character in the database`);
				} else {
					let values = Object.values(JSON.parse(xhr.response).results[0]);
					let keys = Object.keys(JSON.parse(xhr.response).results[0]);
					console.log(values);
					console.log(values[9]);
					console.log(keys);

					// function makeRow(key, value) {
					// 	let li = document.createElement('li');
					// 	li.textContent = `${key}: ${value}`;
					// 	list.appendChild(li);
					// }


					for (let i = 0; i < 8; i++) {
						let li = document.createElement('li');
						li.textContent = `${keys[i]}: ${values[i]}`;
						list.appendChild(li);
						// makeRow(keys[i], values[i]);
					}
					filmsButton.addEventListener('click', () => {
						let movies = values[9];

						for (let i = 0; i < movies.length; i++) {
							const filmTitle = new XMLHttpRequest();
							filmTitle.open('GET', `${movies[i]}`);
							filmTitle.send();

							filmTitle.onload = () => {
								let title = JSON.parse(filmTitle.response).title;
								console.log(title);
								let li = document.createElement('li');
								li.textContent = `${title}`;
								moviesList.appendChild(li);
							}
						}
					});
				}
			}
		}
	}
});

// filmsButton.addEventListener('click', () => {
// console.log(values[9]);
// });

