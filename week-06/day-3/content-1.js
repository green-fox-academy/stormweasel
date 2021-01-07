'use strict';
// 1)  Append every paragraph with the last one's content.

let classes = document.querySelectorAll('p');

for (let i = 0; i <= classes.length - 2; i++) {
	// classes[i+1].innerText += classes[i].textContent;
	// 2)  Do the same again, but you should keep the cat strong.
	classes[i + 1].innerHTML += classes[i].textContent;
}