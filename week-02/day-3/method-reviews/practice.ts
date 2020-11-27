'use strict';
export{};
let fruits: string[] = ['Alma', 'Körte', 'Szőllő'];

//bejárás for loop-pal
// for (let i: number = 0; i <fruits.length; i++) {
//  console.log(fruits[i]);
//}

// forEach
// ()-ben functiont vár (ez a callback, ami egy anonim function)
fruits.forEach(function (elem, index) {
  console.log(index);
  console.log(elem);
});
// nem ad vissza elemet (void, de nem kell kiírni), hiába írod be a returnt
let test = fruits.forEach(function (elem, index) {
  return elem
});
console.log('Test', test); // undefined lesz az eredmény

//map
// array-t ad visszza
// return nélkül nem működik
fruits.map(function (elem, index) {
  console.log(elem);
});
// vissza ad elemet
let NewFruits = fruits.map(function (elem, index) {
  return elem;
});
console.log('NewFruits:', NewFruits);

// arrayt készíteni forEach-csel
// forEach így adja vissza az elemeket
let forEachFruits: string[] = [];
fruits.forEach(function (elem, index) {
  forEachFruits.push(elem);
});

// számolás
let counter: number = 0;
fruits.forEach(function (elem) {
  counter++;
})
console.log(counter);


// forEach a forEach-ben
fruits.forEach(function (elem) {
  fruits.forEach(function (masodikElem) {
    console.log(elem + '' + masodikElem);
  })
});

/// include

function isItIncluded(myFruit: string) {
  fruits.forEach(function (elem) {
    if (myFruit === elem) {
      console.log(`${myFruit} is in the array`);
    } else {
      console.log('It is not in the array');
    }
  })
}
fruits.isItIncluded('Alma');
//fruits.isItIncluded('Dinnye');


function isItIncluded2(myFruit: string) {
      let checker: boolean = false;
      fruits.forEach(function (elem) {
        if (myFruit === elem) {
          checker = true
        } 
        if (checker) {
          console.log(`${myFruit} is in the array`);
           }
        else {
          console.log('No luck');
        }
      })
}
fruits.isItIncluded2 ('Alma');
