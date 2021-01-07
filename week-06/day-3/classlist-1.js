'use strict';

let ps = document.querySelectorAll('p');

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

ps[3].classList.add('dolphin');
if (ps[3].getAttribute('class') === 'dolphin') {
	ps[0].textContent = 'pear';
}

// If the first p has an 'apple' class, replace cat's content with 'dog'
if (ps[0].getAttribute('class') === 'apple') {
	ps[2].textContent = 'dog';
}

// Make apple red by adding a .red class
ps[0].classList.add('red');

// Make balloon less balloon-like (change its shape)
ps[1].classList.remove('balloon');