'use strict';

let gallery = [
	['./images/tarantino-filmography.poster.jpg', 'tarantino-filmography'],
	['./images/Reservoir_Dogs.poster.jpg', 'poster-reservoir-dogs'],
	['./images/Pulp-fiction-vintage-movie-poster.jpg', 'poster-pulp-fiction'],
	['./images/JackieBrown.poster1.jpg', 'poster-jackie-brown'],
	['./images/jackie_brown.jpg', 'poster-jackie-brown2'],
	['./images/kill_bill_poster.jpg', 'poster-kill-bill'],
	['./images/grindhouse-poster-quentin-tarantino.jpg', 'poster-grindhouse'],
	['./images/Inglorious12951.jpg', 'poster-inglorious-basterds'],
	['./images/inglourious-basterds-set-brad-pitt.jpg', 'poster-inglorious-basterds2'],
	['./images/django-character-posters.3.jpg', 'poster-django-unchained'],
	['./images/django-unchained-cast-poster.jpg', 'poster-django-unchained2'],
	['./images/hateful 8.poster.jpg', 'poster-hateful-8'],
	['./images/Once upon a time in Hollywood.poster1.jpg', 'poster-once-upon-hollywood'],
	['./images/Once upon a time in Hollywood.poster2.jpg', 'poster-once-upon-hollywood2'],
]

// Elements picked:
let picture = document.querySelector('#picture img');
let leftSliderArrow = document.querySelector('.slider button.left');
let rightSliderArrow = document.querySelector('.slider button.right');
// Creating thumbs
let thumbnails = document.querySelector('.thumbnails');
for (let i = 0; i < gallery.length; i++) {
	if (i === 0) {
		let leftThumbArrow = document.createElement('button');
		leftThumbArrow.setAttribute('class', 'left');
		thumbnails.appendChild(leftThumbArrow);
	}

	let thumb = document.createElement('button');
	thumb.setAttribute(`class`, `thumb${i} visible`);
	thumb.innerText = i;
	// // Picture as background:
	// console.log(gallery[0]);
	// let thumbUrl= gallery[i];
	
	// thumb.style.backgroundImage = `url(${gallery[i]})`;
	// thumb.setAttribute(`style`,`background-image: url(${thumbUrl});`);

	// //Picture as an image element:
	// let thumbImage = document.createElement('img');
	// thumbImage.setAttribute('class', 'thumbImage');
	// thumb.innerHTML=`<img class="thumbImage" src=${gallery[i] [0]} alt=${gallery[i] [1]}>`;
	
	// thumbnails.appendChild(thumb);
	// thumb.appendChild(thumbImage);
	// imageLoader(thumbImage, i);


	// thumb.innerHTML = imageLoader(thumb, i);
	thumbnails.appendChild(thumb);

	if (i > 7) {
		thumb.setAttribute("style", "display: none;");
		thumb.setAttribute(`class`, `thumb${i} invisible`);
	}

	if (i === gallery.length - 1) {
		let rightThumbArrow = document.createElement('button');
		rightThumbArrow.setAttribute('class', 'right');
		thumbnails.appendChild(rightThumbArrow);
	}
}
let leftThumbArrow = document.querySelector('.thumbnails button.left');
let rightThumbArrow = document.querySelector('.thumbnails button.right');

// variables:
let picIndex = 0;

// Functions:
function imageLoader(element, i) {
	let url = gallery[i][0];
	let alt = gallery[i][1];
	element.setAttribute('src', url);
	element.setAttribute('alt', alt);
	picIndex = i;
	console.log(picIndex);
}

function thumbRoller(indexToVanish, indexToAppear) {
	let thumbToVanish = document.querySelector(`.thumb${indexToVanish}`);
	thumbToVanish.setAttribute(`class`, `thumb${indexToVanish} invisible`);
	thumbToVanish.setAttribute(`style`, `display: none; `);

	let thumbToAppear = document.querySelector(`.thumb${indexToAppear}`);
	thumbToAppear.setAttribute(`class`, `thumb${indexToAppear} visible`);
	thumbToAppear.removeAttribute(`style`);
}

// Onclick functions:

// click on thumb - load picture
for (let i = 0; i < gallery.length; i++) {
	let thumb = document.querySelector(`.thumb${i}`);
	thumb.onclick = (thumb) => {
		imageLoader(picture, i);
	}
}
// click on slider arrows - rolls picture
leftSliderArrow.onclick = () => {
	if (picIndex === 0) {
		picIndex = gallery.length - 1;
	} else {
		picIndex--;
	}
	console.log(picIndex);
	imageLoader(picture, picIndex);
}
rightSliderArrow.onclick = () => {
	if (picIndex === gallery.length - 1) {
		picIndex = 0;
		console.log(picture, picIndex);
	} else {
		picIndex++;
		console.log(picIndex);
	}
	console.log(picture, picIndex);
	imageLoader(picture, picIndex);
}

// click on thumbnail arrows - rolls thumbnails
leftThumbArrow.onclick = () => {
	let visibles = document.querySelectorAll('button.visible');

	let firstVisible = document.querySelector('button.visible');
	let indexToAppear = firstVisible.textContent - 1;
	if (indexToAppear < 0) { return; }

	let lastVisible = visibles[visibles.length - 1];
	let indexToVanish = lastVisible.textContent;

	thumbRoller(indexToVanish, indexToAppear);
}

rightThumbArrow.onclick = () => {
	let visibles = document.querySelectorAll('button.visible');

	let firstVisible = document.querySelector('button.visible');
	let indexToVanish = firstVisible.textContent;

	let lastVisible = visibles[visibles.length - 1];
	let indexToAppear = Number(lastVisible.textContent) + 1;
	if (indexToAppear === gallery.length) { return; }

	thumbRoller(indexToVanish, indexToAppear);
}