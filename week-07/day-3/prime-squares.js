'use script';
// generate 100 divs to the <section> element and add index numbers to it ,
// as the element's textContent
// Create a function that adds a 'not-prime' class to a div if it's not a prime 
// and 'prime' if it is
// Create a timer that keeps calling the prime validator function until it reaches 
// the last element
// 	- the timer should fire every 100ms
// 	- the timer should stop when there are no more elements left to be colored

let section = document.querySelector('section');
let counter = 0;

function isPrime(number) {
	if (number < 2) {return false;}
	for (let i = 2; i < number; i++) {
		if (number % i == 0)
			return false;
	}
	return true;
}

function primeValidator(div, callback) {
	let number = div.textContent;
	if (callback(number)) { div.className = "prime"; } else { div.className = "not-prime"; }
}

	for (let i = 2; i < 101; i++) {
		let div = document.createElement('div');
		div.textContent = i;
		section.appendChild(div);
		counter++;
		let primeTimer = setInterval(() => primeValidator(div, isPrime), 100);
		if (counter === 100) { clearInterval(primeTimer); console.log('stopped'); }
	}