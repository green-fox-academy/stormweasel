'use strict';

function numberConverter(amount, currency) {
	if (amount === undefined || currency === undefined) {
		return "Input value is missing";
	}
	if (isNaN(amount)) {
		return "Amount is not a number";
	}

}

module.exports = numberConverter;