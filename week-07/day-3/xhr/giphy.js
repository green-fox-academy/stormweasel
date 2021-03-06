'use script';

window.onload = () => {

	const xhr = new XMLHttpRequest();
	let source = "https://api.giphy.com/v1/gifs/search?api_key=tacrToRE9O2LNY6lp7etgKnAuKz5ZAg7&q=viking metal&limit=16&offset=0&rating=g&lang=en";
	xhr.open('GET', source);
	xhr.send();

	xhr.onload = () => {
		let result = JSON.parse(xhr.response).data;
		console.log(result);
		console.log(result[0].embed_url);
		console.log(result[0].images.downsized.url);

		let container = document.querySelector("#container");
	
		for (let i = 0; i < 16; i++) {

			let thumbnail = document.createElement('img');
			thumbnail.src = `${result[i].images.fixed_width_small_still.url}`;
			let label = document.createElement('label');
			label.textContent = `${result[i].title}`;
			container.appendChild(thumbnail);
			container.appendChild(label);

			thumbnail.addEventListener("click", gifDisplayer);

			function gifDisplayer() {
				let image = document.querySelector('#displayer img');
				image.src = `${result[i].images.original.url}`;
				image.alt = `${result[i].title}`;
				console.log(image);
			}
		}
	}
}