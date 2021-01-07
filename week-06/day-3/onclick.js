'use strict';
//Turn the party on and off by clicking the button. (the whole page)
const button = document.querySelector('button');
button.textContent = 'Party on';
const body = document.querySelector('body');

button.onclick = () => {
	if (button.textContent === 'Party on') {
		body.classList.add('party');
		button.textContent = 'Party off';
	} else {
		body.classList.remove('party');
		button.textContent = 'Party on';
	}
}