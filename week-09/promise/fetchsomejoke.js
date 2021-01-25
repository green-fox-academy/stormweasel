'use strict';
let container = document.querySelector('#container');
let button = document.querySelector('button');

button.onclick = () => {

fetch('http://api.icndb.com/jokes/random', {
	method:'GET',
	header: {'Content-Type':'application/json'}
})
.then(response => {return response.json()})
.then(result => {
	let joke = document.createElement('p');
	joke.textContent = result.value.joke;
	container.appendChild(joke);
})
}