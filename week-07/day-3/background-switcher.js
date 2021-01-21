'use script';
// Create a function that updates the background-image of the <body> element
// The image value should be https://loremflickr.com/g/1280/800/hungary/
// Make sure every time you refresh the image, you add a cachebuster. WTF is 
// a cachebuster?
// Create a timer function that refreshes the background every 5 seconds
let count = 0;

function setImage () {
	count++;
	document.body.style.backgroundImage = `url(https://loremflickr.com/g/1280/800/hungary?${count};`;
	console.log(`picture${count}`);
}
let imgLoader = setInterval(setImage, 2000);
// a site that can help in cache-busting:
// https://www.keycdn.com/support/what-is-cache-busting => the 3 forms of cachebusting
// the only version(query strings) worked for me is the above one. maybe because there's
// no filename in the url.`
