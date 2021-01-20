'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking 
// the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation 
// should speed up 10x
window.onload = () => {
	let kreator = document.querySelector('.create-candies');
	let loller = document.querySelector('.buy-lollypops');
	let rain = document.querySelector('.candy-machine');

	let rate = document.querySelector('.speed');
	let candies = document.querySelector('.candies');

	let candyCount = 0;
	let lollyCount = 3;
	let speed = lollyCount / 10;

	function setAmounts() {
		console.log(speed);
		rate.innerText = `${speed}`;
		candies.innerText = Math.floor(candyCount);
		if (candyCount >= 10000) (setVictory());
		console.log('amounts have been set');
	}

	let amountCalibrator = setInterval(() => { setAmounts() }, 100);
	let candyAdder = setInterval(() => { candyCount += speed; }, 1000);

	kreator.onclick = () => {
		console.log('create candy');
		candyCount++;
	}

	loller.onclick = () => {
		if (candyCount < 100) {
			console.log(`You don't have enough candy. A lollypop costs 100 candies.`);
			return;
		}
		let lollypops = document.querySelector('.lollypops');
		lollyCount++;
		console.log(lollyCount);
		lollypops.innerText += '🍭';
		candyCount -= 100;
		speed+=0.1;
	}

	rain.onclick = () => {
		speed *= 10;
		rain.disabled = 'true';
		setTimeout(() => { rain.disabled = !rain.disabled }, 6000);
	}

	function setVictory() {
		let wrapper = document.createElement('div');
		wrapper.className = "victory";
		wrapper.style = "border: 2px;"
		let victory = document.createElement('h1');
		victory.innerText = "🍬🍬🍬🍬 You achieved 🍬🍬🍬🍬\n🍬🍬🍬🍬🍬FLAWLESS VICTORY!!!🍬🍬🍬🍬🍬";
		wrapper.appendChild(victory);
		clearInterval(amountCalibrator);
		clearInterval(candyAdder);

		let restartButton = document.createElement('button');
		restartButton.innerHTML = 'Start a new game';
		wrapper.appendChild(restartButton);
		document.body.appendChild(wrapper);
		restartButton.onclick = () => { location.reload(); };
	}

}