'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(list: string[]): string[] {
	list.forEach((elem, index) =>  list[index] += 'a' );
	return list;
}

console.log(appendA(far));