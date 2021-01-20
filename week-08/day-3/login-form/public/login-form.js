'use strict';

const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;
	console.log('I am in');
	console.log(name);
	console.log(password);
	
	const userData = { username: name, password: password };
	const requestBody = JSON.stringify(userData);
	console.log(requestBody);

	if (name && password) {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = (event) => {
			if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
				const response = JSON.parse(xhr.responseText);
				console.log(response);
				responseAppend(response);
			}
		}
		xhr.open('POST', '/login');
		xhr.setRequestHeader('content-type', 'application/json');
		xhr.send(requestBody);
		form.reset();
	} else {
		alert('All fields should be filled.');
	}

	const responseAppend = (response) => {
		let p= document.createElement('p');
		p.textContent = response.message;
		document.body.appendChild(p);
	}

})