'use strict';
//We are going to play with maps. Feel free to use the built-in methods where possible.
//Create an empty map where the keys are integers and the values are characters
let map = Object.create({}); // or let map ={};

//Print out whether the map is empty or not
console.log('2.feladat:\n' + map + '\n');

/*Add the following key-value pairs to the map
Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
*/
map = { 97: 'a', 98: 'b', 99: 'c', 65: 'A', 66: 'B', 67: 'C' };

//Print all the keys
console.log('4. feladat:\n' + Object.keys(map) + '\n');

//Print all the values
console.log('5.feladat:\n' + Object.values(map) + '\n');

//Add value D with the key 68
map[68] = 'D';
console.log(`6.feladat:\nkeys: ${Object.keys(map)}\nvalues: ${Object.values(map)}\n${Object.entries(map)}\n`);

//Print how many key-value pairs are in the map
console.log(`7.feladat:\n${Object.entries(map).length}\n`);

//Print the value that is associated with key 99
console.log(`8.feladat:\n${map[99]}\n`);

//Remove the key-value pair where with key 97
delete map[97];
console.log(`9.feladat:\n${Object.entries(map)}\n`);

//Print whether there is an associated value with key 100 or not
console.log(`10.feladat:\nIs there a key with the name of 100?\n${map.hasOwnProperty(map['100'])}\n`);

//Remove all the key-value pairs
map = {};
console.log(`11.feladat\n${map}`);