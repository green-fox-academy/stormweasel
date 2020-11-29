'use strict';

//Create a list ('List A') which contains the following values
//Apple, Avocado, Blueberries, Durian, Lychee
let listA: string[] = ['Apple', 'Avocado', 'Blackberries', 'Durian', 'Lychee'];
console.log('1.feladat:\n' + listA + '\n');

//Create a new list ('List B') with the values of List A
let listB: string[] = listA.slice(0);
// nem let listB: string[] = listA; mert akkor ha az egyiket módosítom, módosul a másik is
console.log('2.feladat:\n' + listB + '\n');

//Print out whether List A contains Durian or not
console.log('3. feladat:\n' + listB.includes('Durian') + '\n');

//Remove Durian from List B
listB.splice(3, 1);
console.log('4.feladat:\n' + listB + '\n');

//Add Kiwifruit to List A after the 4th element

listA.splice(4, 0, 'Kiwifruit');
console.log('5.feladat:\n' + listA + '\n');

//Compare the size of List A and List B
console.log('6.feladat:\nWhich list is longer?');
if (listA.length > listB.length) { console.log('ListA is longer.'); } else {
  if (listA.length < listB.length) { console.log('ListB is longer.'); } else {
    if (listA.length = listB.length) { console.log('Their length is equal.'); }
  }
};
console.log('listA: ' + listA);
console.log('listB: ' + listB);

//Get the index of Avocado from List A
console.log('7.feladat:\n' + listA.indexOf('Avocado'));
//Get the index of Durian from List B
console.log('8.feladat:\n' + listB.indexOf('Durian'));

//Add Passion Fruit and Pomelo to List B in a single statement
listB.splice(5, 0, 'Passion Fruit', 'Pomelo')
console.log('9.feladat:\n' + listB);

//Print out the 3rd element from List A
console.log('10.feladat:\n' + listA[2]);