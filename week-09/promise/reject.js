'use strict';

let promise = new Promise(function (fulfill, reject) {
		setTimeout( ()=> reject(new Error('REJECTED!')), 300);
	})
	.then(null,onReject);

	function onReject(error) {
	console.log('REJECTED!');
}