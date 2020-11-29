'use strict';
export { };
//We are going to represent a shopping list in a list containing strings.

//Create a list with the following items.
//Eggs, milk, fish, apples, bread and chicken
let shoppingList: string[] = ['egg', 'milk', 'fish', 'apples', 'bread', 'chicken'];

/*
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list?
*/
function isItOnTheList(item: string, array): void {
  console.log(`Do we have ${item} on the list?`);
  if (array.includes(item)) {
    console.log(`Yes we have ${item} on the list.\n`);
  } else {
    console.log(`No, we don't have ${item} on the list.\n`);
  }
}

isItOnTheList('milk', shoppingList);
isItOnTheList('banana', shoppingList);