'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial
// n nemnegatív egész szám faktoriálisának az n-nél kisebb vagy egyenlő pozitív egész számok szorzatát nevezzük

function factorio(e: number): number {
  let factorial: number = 1;
  for (let i: number = 1; i <= e; i++) {
    factorial *= i;
  }
  return factorial
}

console.log(factorio(5));