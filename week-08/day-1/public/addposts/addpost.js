'use strict';

let home = 'http://localhost:3000/';
function postMaker(response) {
	for (let i = 0; i < response.length; i++) {
		let post = document.createElement('div');
		post.className = "post";
		let auth_id= response[i].auth_id;
		let id= response[i].id;
				
		let score = document.createElement('span')
		score.textContent = response[i].score;
		score.id = "score";

		let title = document.createElement('span');
		title.textContent = response[i].title;
		title.className = "title";

		let date = document.createElement('p');
		date.textContent = `submitted ${response[i].timestamp} ago by ${response[i].auth_id}`
	
		let source = document.createElement('a');
		source.textContent = "source";
		source.href = response[i].url;

		let reviver = document.createElement('button');
		reviver.innerText = "Reactivate post";
		reviver.id="reviver";
		
		let vanisher = document.createElement('button');
		vanisher.innerText = "Delete post permanently";
		vanisher.id="vanisher";
		
		post.append(score, title, date, source, reviver, vanisher);
		
		return post;
	}
}

function messageMaker(message) {
	let main = document.querySelector('#main');
	let line = document.createElement('p');
	line.textContent = message;
	main.appendChild(line);
}
function dataClearer() {
	sessionStorage.clear();
	poster.disabled = true;
	updater.disabled = true;
	deleter.disabled = true;
}

window.onload = () => {
	let title = sessionStorage.getItem('title');
	let url = sessionStorage.getItem('url');
	let id = sessionStorage.getItem('id');
	let auth_id = sessionStorage.getItem('auth_id');
	console.log(title, url, id, auth_id);
	let inputTitle = document.querySelector('#title');
	inputTitle.value = title;
	let inputURL = document.querySelector('#url');
	inputURL.value = url;

	let poster = document.querySelector('#newpost');
	let updater = document.querySelector('#updater');
	let deleter = document.querySelector('#deleter');
	let lister = document.querySelector('#lister');

	let vanisher = document.querySelector('#vanisher');

	updater.onclick = () => {
		reqBody = JSON.stringify({ "title": inputTitle.value, "url": inputURL.value, "id": id, "auth_id": auth_id });

		// let request = new XMLHttpRequest();
		// request.open('PUT', 'http://localhost:3000/posts/');
		// request.setRequestHeader('content-type', 'application/json');
		// request.send(JSON.stringify({ "title": inputTitle.value, "url": inputURL.value, "id": id, "auth_id": auth_id}));
		// request.onreadystatechange = (event) => {
		// 	if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
		// 		let response = request.responseText;
		// 		console.log(response);
		// 		let main = document.querySelector('#main');
		// 		console.log(main);
		// 		let message = document.createElement('p');
		// 		console.log(message);
		// 		message.textContent = response;
		// 		main.appendChild(message);

		// }
		fetch('http://localhost:3000/posts/', {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: reqBody
		})
			.then(response => {
				if (response.status !== 200) { throw new Error('no response'); }
				console.log(response);
				return response.text();
			})
			.then(result => {
				messageMaker(result);
				dataClearer();
			})
			.catch((err) => { console.log('error happend'); })
	}

	deleter.onclick = () => {
		let reqBody = JSON.stringify({ "id": id });
		fetch('http://localhost:3000/posts/delete/', {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: reqBody
		})
			.then(response => {
				if (response.status !== 200) { throw new Error('no response'); }
				console.log(response);
				return response.text();
			})
			.then(result => {
				messageMaker(result);
				dataClearer();
			})
			.catch((err) => { console.log('error happend'); })
	}

	lister.onclick = () => {
		fetch('http://localhost:3000/posts/?isactive=false', {
			method: 'GET',
			headers: { 'content-type': 'application/json' }
		})
			.then(response => {
				if (response.status !== 200) { throw new Error('no response'); }
				return response.json();
			})
			.then(response => {
				console.log(response);
				let post = postMaker(response);
				console.log(post);
				main.appendChild(post);
				
				let reviver = document.querySelector('#reviver');
				reviver.onclick=()=> {
					let reqBody = JSON.stringify({ "id": id });
					fetch('http://localhost:3000/posts/reactivate/', {
						method: 'PUT',
						headers: { 'content-type': 'application/json' },
						body: reqBody
					})
						.then(response => {
							if (response.status !== 200) { throw new Error('no response'); }
							console.log(response);
							return response.text();
						})
						.then(result => {
							messageMaker(result);
							dataClearer();
						})
						// .catch((err) => { console.log('error happend'); })
				}
			
			
			
			
			
			
			
			
			})
			// .catch((err) => { console.log('error happend'); })
	}

	

	


}