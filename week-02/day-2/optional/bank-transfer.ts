'use strict';

const accounts: any[] = [
	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(accountNumber: number): void {
	accounts.map(object => {
		if (object.accountNumber === accountNumber) {
			console.log([object.clientName, object.balance])
		}
	});
}

getNameAndBalance(11234543)

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount(group: any[], senderAccount: number, receiverAccount: number, transferredAmount: number): any[] {
	let accountNumbers: number[] = [];
	group.map(object => accountNumbers.push(object.accountNumber));
	
	if (accountNumbers.includes(senderAccount) && accountNumbers.includes(receiverAccount)) {
		group.map(object => {
			if (object.accountNumber === senderAccount) { object.balance -= transferredAmount; }
			if (object.accountNumber === receiverAccount) { object.balance += transferredAmount; }
			return group;
		});
	} else {
		console.log('404 - account not found');
		return group;
	}
}

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
	//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
	//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
	//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
	// //]
	
	transferAmount(accounts, 43546730, 23456311, 500.0);
	transferAmount(accounts, 43546731, 23456310, 500.0);
	transferAmount(accounts, 43546731, 23456311, 500.0);
	console.log(accounts);