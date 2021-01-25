'use strict';

let promise = new Promise(function (fulfill, reject) {
	fulfill(setTimeout(() => { console.log('FULFILLED!') }, 300));
})
	.then(response => response);