'use script';

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

let display = document.querySelector('.display');
let button = document.querySelector('button');
let text = document.createElement('p');

//1st line
function exploder() {
	text.textContent = "Bomb exploded";
	document.body.appendChild(text);
}
let bumm = setTimeout(exploder, 10000)

//2nd line
button.onclick = () => {
	clearTimeout(bumm);
	text.textContent = "Bomb defused";
	document.body.appendChild(text);
};

//3rd line
let counter = display.textContent;
let backTimer = setInterval(()=> {
	counter--; 
	console.log(counter); 
	display.textContent = counter;
	if (counter === 0) {clearInterval(backTimer);}
}, 1000);