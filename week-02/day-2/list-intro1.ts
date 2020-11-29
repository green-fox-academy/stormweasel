'use strict';


// We are going to play with lists. Feel free to use the built-in methods where possible.

//Create an empty list which will contain names (strings)
let list: string[] = [];
//Print out the number of elements in the list
console.log(list.length);
//Add William to the list
list.push('William');       //or list =['William'];
//Print out whether the list is empty or not
console.log(list);
//Add John to the list
list.push('John');
//Add Amanda to the list
list.push('Amanda');
//Print out the number of elements in the list
console.log(list.length);
//Print out the 3rd element
console.log(list[2]);

/*Iterate through the list and print out each name
William
John
Amanda*/
for (let i: number = 0; i < list.length; i++) {
  console.log(i + 1 + '. ' + list[i]);
}

//Remove the 2nd element
list.splice(2, 0);

/*Iterate through the list in a reversed order and print out each name
Amanda
William*/
for (let i: number = 0; i < list.length; i++) {
  console.log(list[list.length - i]);
}

//Remove all elements
list.splice(0);
console.log(list);