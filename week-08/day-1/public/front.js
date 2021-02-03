'use strict';
let home = 'http://localhost:3000/';

function postMaker(response) {
	for (let i = 0; i < response.length; i++) {
		let post = document.createElement('div');
		post.className = "post";
		let auth_id= response[i].auth_id;
		let id= response[i].id;
		
		let up = document.createElement('img');
		up.src = "./imgs/upvote.png";
		up.className = "arrow up";

		let score = document.createElement('span')
		score.textContent = response[i].score;
		score.id = "score";

		let down = document.createElement('img');
		down.src = "./imgs/downvote.png";
		down.className = "arrow down";

		let title = document.createElement('span');
		title.textContent = response[i].title;
		title.className = "title";

		let date = document.createElement('p');
		date.textContent = `submitted ${response[i].timestamp} ago by ${response[i].auth_id}`
	
		let source = document.createElement('a');
		source.textContent = "source";
		source.href = response[i].url;

		let updater = document.createElement('a');
		updater.textContent = "Modify";
		updater.className = "update";
		updater.href=`${home}addposts`;

		let deleter = document.createElement('a');
		deleter.textContent = "Remove";
		deleter.className = "delete";
		deleter.href=`${home}addposts`;

		post.append(up, score, down, title, date, source, updater, deleter);
		updater.onclick = () => {
			window.sessionStorage.setItem('title', `${title.textContent}`);
			window.sessionStorage.setItem('url', `${source.href}`);
			window.sessionStorage.setItem('id', `${id}`);
			window.sessionStorage.setItem('auth_id', `${auth_id}`);
		}
		deleter.onclick = () => {
			window.sessionStorage.setItem('title', `${title.textContent}`);
			window.sessionStorage.setItem('url', `${source.href}`);
			window.sessionStorage.setItem('id', `${id}`);
			window.sessionStorage.setItem('auth_id', `${auth_id}`);
			
		}
		return post;
	}
}

window.onload = () => {

	let main = document.querySelector('#main');

	fetch('http://localhost:3000/posts', {
		method: 'GET',
		headers: { 'content-type': 'application/json' }
	})
		.then(response => {
			if (response.status !== 200) { throw new Error('no response'); }
			return response.json();
		})
		.then(response => {
			console.log(response);
			// for (let i = 0; i < response.length; i++) {
			// 	let post = document.createElement('div');
			// 	post.className = "post";
			// 	let auth_id= response[i].auth_id;
			// 	console.log('AID: '+auth_id);
			// 	let id= response[i].id;
			// 	console.log('ID: ' + id);

			// 	let up = document.createElement('img');
			// 	up.src = "./imgs/upvote.png";
			// 	up.className = "arrow up";

			// 	let score = document.createElement('span')
			// 	score.textContent = response[i].score;
			// 	score.id = "score";

			// 	let down = document.createElement('img');
			// 	down.src = "./imgs/downvote.png";
			// 	down.className = "arrow down";

			// 	let title = document.createElement('span');
			// 	title.textContent = response[i].title;
			// 	title.className = "title";

			// 	let date = document.createElement('p');
			// 	date.textContent = `submitted ${response[i].timestamp} ago by ${response[i].auth_id}`
			
			// 	let source = document.createElement('a');
			// 	source.textContent = "source";
			// 	source.href = response[i].url;

			// 	let updater = document.createElement('a');
			// 	updater.textContent = "Modify";
			// 	updater.className = "update";
			// 	updater.href=`${home}addposts`;

			// 	let deleter = document.createElement('a');
			// 	deleter.textContent = "Remove";
			// 	deleter.className = "delete";
			// 	deleter.href=`${home}addposts`;

			// 	post.append(up, score, down, title, date, source, updater, deleter);
				let post = postMaker(response);
				console.log(post);
				main.appendChild(post);
				
				// updater.onclick = () => {
				// 	window.sessionStorage.setItem('title', `${title.textContent}`);
				// 	window.sessionStorage.setItem('url', `${source.href}`);
				// 	window.sessionStorage.setItem('id', `${id}`);
				// 	window.sessionStorage.setItem('auth_id', `${auth_id}`);
				// }
				// deleter.onclick = () => {
				// 	window.sessionStorage.setItem('title', `${title.textContent}`);
				// 	window.sessionStorage.setItem('url', `${source.href}`);
				// 	window.sessionStorage.setItem('id', `${id}`);
				// 	window.sessionStorage.setItem('auth_id', `${auth_id}`);
					
				// }
			//}
		})
		.catch((err) => { console.log('error happend'); })




}
