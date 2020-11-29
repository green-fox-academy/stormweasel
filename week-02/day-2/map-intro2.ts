'use strict';
export { };
/*
Create a map where the keys are strings and the values are strings with the following initial values

Key	Value
978-1-60309-452-8	A Letter to Jo
978-1-60309-459-7	Lupus
978-1-60309-444-3	Red Panda and Moon Bear
978-1-60309-461-0	The Lab
*/
let map = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab'
}

/*
Print all the key-value pairs in the following format

A Letter to Jo (ISBN: 978-1-60309-452-8)
Lupus (ISBN: 978-1-60309-459-7)
Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
The Lab (ISBN: 978-1-60309-461-0)
*/
console.log('2.feladat:');

console.log('for loopal:');
for (let i: number = 0; i < Object.entries(map).length; i++) {
  console.log(`${Object.values(map)[i]} (ISBN: ${Object.keys(map)[i]})`);
}
console.log();

console.log('for of looppal:');
for (const [key, value] of Object.entries(map)) {
  console.log(`${value} (ISBN: ${key})`);
}
console.log();

//Remove the key-value pair with key 978-1-60309-444-3
console.log('3.feladat:');
delete map["978-1-60309-444-3"]
console.log(map);
console.log();

//Remove the key-value pair with value The Lab
console.log('4.feladat:');
//this can't be done without a function made exactly for this
// so there is no built-in way

//this function is made by me with the help of Stackoverflow and google
// tried out in a separate file: ./getKeyByValue.ts
// it needs the value given as a string and the object
function getKeyByValue(value: string, object): string {
  let found = Object.keys(object).find(function (key) { return object[key] === value });
  console.log(`The key to find is: ${found}`);
  return found;
}
delete map[getKeyByValue('The Lab', map)];
console.log(map);

/*
Add the following key-value pairs to the map

Key	Value
978-1-60309-450-4	They Called Us Enemy
978-1-60309-453-5	Why Did We Trust Him?
*/
console.log('5.feladat:');
let map2 = {
  '978-1-60309-450-4': 'They Called Us Enemy',
  '978-1-60309-453-5': 'Why Did We Trust Him?'
}
map = Object.assign(map, map2);
console.log(map);

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log('6.feladat:');
console.log(`Is there a key with the name of 478-0-61159-424-8?\n${map.hasOwnProperty(map['478-0-61159-424-8'])}\n`);

//Print the value associated with key 978-1-60309-453-5
console.log('7.feladat:');
console.log(map['978-1-60309-453-5']);