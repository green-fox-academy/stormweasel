'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let firstPart: string = 'My todo:\n';
todoText += ' - Download games\n \t - Diablo';
todoText = firstPart.concat(todoText);
console.log(todoText);