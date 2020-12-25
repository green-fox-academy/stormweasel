'use strict';
export { };

//Create a map with the following key-value pairs.
let products = { eggs: 200, milk: 200, fish: 400, apples: 150, bread: 50, chicken: 550, beer: 125 };

//Create an application which solves the following problems.

//Which products cost less than 201? (just the name)
//Which product cost more than 150? (name + price)

function PriceTellerLess(lessPrice: number, object: object): void {
  let prices: number[] = Object.values(object);
  console.log(`The following products cost less than ${lessPrice} :`);
  for (let i: number = 0; i < prices.length; i++) {
    if (prices[i] < lessPrice) {
      console.log(Object.keys(object)[i]);
    }
  }
}
function PriceTellerMore(morePrice: number, object: object): void {
  let prices: number[] = Object.values(object);
  console.log(`The following products cost more than ${morePrice} :`);
  for (let i: number = 0; i < prices.length; i++) {
    if (prices[i] > morePrice) {
      console.log(`${Object.keys(object)[i]} (the price is ${Object.values(object)[i]})`);
    }
  }
}

PriceTellerLess(201, products);
console.log();
PriceTellerMore(150, products);