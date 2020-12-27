'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(text: string[]): string {
	let sentence: string = text.toString();
	sentence = sentence.replace(/,/g, ' ');
	sentence = sentence.replace('  ', ', ');
	sentence = sentence.replace('do', 'cannot');
	sentence = sentence.replace('cannot create', 'do create');
	sentence = '"' + sentence + '"';
	return sentence;
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."