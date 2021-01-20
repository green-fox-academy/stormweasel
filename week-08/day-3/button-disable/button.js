'use strict';
// Radio buttons should be grouped, so it should be only possible to select one at a time
// If you choose Dog or Cat, it should enable the sign up button
// If you choose Yes for cat facts, it should enable the I love cats button
// Clicking on a button should alert:
// Thank you, you've successfully signed up for cat facts
// If you pick Victor and no to cat facts it should enable the sign up button only
// Clicking this time should display: Sigh, we still added you to the cat facts list


let dog = document.querySelector('#dog');
let cat = document.querySelector('#cat');
let victor = document.querySelector('#victor');

let yes = document.querySelector('#yes');
let no = document.querySelector('#no');

let love = document.querySelector('#love');
let signUp = document.querySelector('#signup');

let isVictorOn = false;
let isNoOn = false;

dog.addEventListener('change', () => {
	ű
	signUp.disabled = false;
	isVictorOn = false;
});

cat.addEventListener('change', () => {
	signUp.disabled = false;
	isVictorOn = false;
});

victor.addEventListener('change', () => {
	isVictorOn = true;
	if (isNoOn && isVictorOn) {
		signUp.disabled = false;
	} else { signUp.disabled = true; }
});

yes.addEventListener('change', () => {
	love.disabled = false;
	isNoOn = false;
	if (isVictorOn) { signUp.disabled = true; }
});

no.addEventListener('change', () => {
	isNoOn = true;
	if (isVictorOn) {
		signUp.disabled = false;
		love.disabled = true;
	}
});

love.addEventListener('click', () => {
	alert(`Thank you, you've successfully signed up for cat facts`);
});

signUp.addEventListener('click', () => {
	if (isNoOn && isVictorOn) {
		alert('Sigh, we still added you to the cat facts list');
	} else {
		alert(`Thank you, you've successfully signed up for cat facts`);
	}
});