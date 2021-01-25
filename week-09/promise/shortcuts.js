'use script';

// let resolved = Promise.resolve('All Right');
// let rejected = Promise.reject(new Error('ERROR'));

// resolved.then(console.log)
// rejected.catch(error => {
// 	console.log(error.message);
// })

var promise = Promise.resolve('All Right');
var promise = Promise.reject(new Error('ERROR'));

promise.then(console.log)//.catch(error => console.log(error.message));