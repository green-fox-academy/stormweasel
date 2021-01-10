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
// Elements picked:
let picture = document.querySelector('#picture img');
let leftSliderArrow = document.querySelector('.slider button.left');
let rightSliderArrow = document.querySelector('.slider button.right');
let thumbnails = document.querySelector('.thumbnails');
for (let i = 0; i < gallery.length; i++) {
	if (i === 0) {
		let leftThumbArrow = document.createElement('button');
		leftThumbArrow.setAttribute('class', 'left');
		thumbnails.appendChild(leftThumbArrow);
	}

	let thumb = document.createElement('button');
	thumb.setAttribute(`class`, `thumb${i} visible`);
	thumb.innerText = i + 1;
	// // Picture as background:
	// thumb.setAttribute(`style`,`background-image: url(${gallery[i]}); background-size: 100%;` );

	// //Picture as an image element:
	// let thumbImage = document.createElement('img');
	// thumbImage.setAttribute('class', 'thumbImage');
	// thumbnails.appendChild(thumb);
	// thumb.appendChild(thumbImage);
	// imageLoader(thumbImage, i);

	//  thumb.innerHTML=`<img class="thumbImage ${i}" src=${gallery[i] [0]} alt=${gallery[i] [1]}>`;

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
function imageLoader(element, picIndex) {
	let url = gallery[picIndex][0];
	let alt = gallery[picIndex][1];
	element.setAttribute('src', url);
	element.setAttribute('alt', alt);
}


for (let i = 0; i < 8/*gallery.length*/; i++) {
	let thumb = document.querySelector(`.thumb${i}`);
	thumb.onclick = (thumb) => {
		imageLoader(picture, i);
	}
}

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

leftThumbArrow.onclick = () => {
	if (picIndex === 0) { return; }
	picIndex--;
	console.log(picIndex);
	imageLoader(picture, picIndex);
}
rightThumbArrow.onclick = () => {
	if (picIndex === gallery.length - 1) { return; }
	picIndex++;
	console.log(picIndex);
	imageLoader(picture, picIndex);
	}



