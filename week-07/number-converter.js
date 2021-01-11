'use strict';

const { Z_BUF_ERROR } = require("zlib");

function numberConverter(amount, currency) {
	if (amount === undefined || currency === undefined) {
		return "Input value is missing";
	}
	if (isNaN(amount)) {
		return "Amount is not a number";
	}
	let digits = amount.toString().split('');

	let baseNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let tenNumbers = ['ten', 'elven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let twoDigitNumbers = ['0', '10', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let moreDigitNumbers = ['hundred', 'thousand', 'million'];

	let string = '';
	for (let i = 0; i < digits.length; i++) {
		if (digits.length === 1) {
			string += baseNumbers[Number(digits[i])];
			break;
		}
		if (digits.length > 1 && digits[digits.length - 2] === 1) {
			string += tenNumbers[digits[digits.length - 1]];
			break;
		} 
		if (digits.length > 1 && digits[digits.length - 2] > 1) {
			string += twoDigitNumbers[digits[digits.length - 2]];
			string += baseNumbers[Number(digits[digits.length - 1])];
			break;
		}


	}

	return string;
}

module.exports = numberConverter;