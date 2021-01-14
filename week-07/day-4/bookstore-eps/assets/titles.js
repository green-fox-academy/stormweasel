'use strict';
const xhr = new XMLHttpRequest();
xhr.open('GET', '/titles');
xhr.send();

xhr.onreadystatechange = handleReadyStateChange();

function handleReadyStateChange() {
	if (xhr.readyState = XMLHttpRequest.DONE) {
		let rows = JSON.parse(xhr.response);
		console.log(rows);

		let list = document.querySelector('ul');

		for (let i = 0; i < rows.length; i++) {
			let row = document.createElement('li');
			row.innerHTML = row[i];
			list.appendChild(row);
		}
	}
}






