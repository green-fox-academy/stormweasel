'use strict';

let gallery = [
	['./images/tarantino-filmography.poster.jpg', 'tarantino-filmography'],
	['./images/Reservoir_Dogs.poster.jpg', 'poster-reservoir-dogs'],
	['./images/Pulp-fiction-vintage-movie-poster.jpg', 'poster-pulp-fiction'],
	['./images/JackieBrown.poster1.jpg', 'poster-jackie-brown'],
	['./images/kill_bill_poster.jpg', 'poster-kill-bill'],
	['./images/Grindhouse - Poster-quentin-tarantino-9750016-1600-1200.jpg', 'poster-grindhouse'],
	['./images/Inglorious12951.jpg', 'poster-inglorious-basterds'],
	['./images/django-character-posters.3.jpg', 'poster-django-unchained'],
	['./images/hateful 8.poster.jpg', 'poster-hateful-8'],
	['./images/Once upon a time in Hollywood.poster2.jpg', 'poster-once-upon-hollywood'],
]

let picture = document.querySelector('#picture img');
console.log(picture);
let leftArrow = document.querySelector('.left');
console.log(leftArrow);
let rightArrow = document.querySelector('.right');
console.log(rightArrow);
let picIndex = 0;

function pictureLoader (picIndex) {
let url = gallery[picIndex][0];
let alt = gallery[picIndex][1];
picture.setAttribute('src', url);
picture.setAttribute('alt', alt);
}

leftArrow.onclick = () => {
	if (picIndex === 0) {
		picIndex = gallery.length - 1;
	} else {
		picIndex--;
	}
	console.log(picIndex);
	pictureLoader(picIndex);
}
rightArrow.onclick = () => {
	if (picIndex === gallery.length - 1) {
		picIndex = 0;
		console.log(picIndex);
	} else {
		picIndex++;
		console.log(picIndex);
	}
	console.log(picIndex);
	pictureLoader(picIndex);
}