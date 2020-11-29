'use strict';
export { };

//Create a map with the following key-value pairs.
let products = { eggs: 200, milk: 200, fish: 400, apples: 150, bread: 50, chicken: 550, beer: 125 };

//Create an application which solves the following problems.

//How much is the fish?
console.log(`The price of fish is ${products.fish}`);

//What is the most expensive product?

let max: number = 0;
let array: number[] = Object.values(products);
for (let i: number = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}
console.log(`The most expensive product is ${max}`);

//What is the average price?
let sum: number = 0;
for (let i: number = 0; i < array.length; i++) {
  sum += array[i]
}

console.log(`The averge price of the products is ${Math.round(sum / array.length)}`);

// How many products' price is below 300?
let count: number = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < 300) {
    count += 1;
  }
}
console.log(`The number of products with a price below 300: ${count}`);


//Is there anything we can buy for exactly 125?

if (array.includes(125)) {
  let item: number = array.indexOf(125);
  console.log(`The ${Object.keys(products)[item]} has a price exactly 125.`);
} else {
  console.log(`Nothing costs 125.`);
}

//What is the cheapest product?
let min: number = 0;
for (let i: number = 0; i < array.length; i++) {
  if (i < array.length - 1) {           //az utolsó elem miatt
    if (array[i] < array[i + 1]) {    //összes többi elem
      min = array[i];
    }
  } else {
    if (array[i] < array[i - 1])        //utolsó elem
      min = array[i];
  }
}

console.log(`The chapest product is ${min}`);