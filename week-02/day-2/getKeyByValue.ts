'use strict'

let object = { name: 'Béla', 33: 'otto' };
console.log((object));
//console.log(Object.values(object));
//console.log(Object.values(object)[0]);
//console.log(Object.values(object)[1]);

function getKeyByValue(value: string, object): string {
  let found = Object.keys(object).find(function (key) { return object[key] === value });
  console.log(`The key to find is: ${found}`);
  return found;
}

delete object[getKeyByValue('otto', object)];

console.log(object);