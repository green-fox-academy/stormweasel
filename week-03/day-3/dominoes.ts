'use strict';
import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function relocateDominoes(group: Domino[]): Domino[] {
  let tempDominoes = [];
  tempDominoes.push(new Domino(5, 2));
  tempDominoes.push(new Domino(2, 4));
  tempDominoes.push(new Domino(4, 6));
  tempDominoes.push(new Domino(6, 7));
  tempDominoes.push(new Domino(7, 1));
  tempDominoes.push(new Domino(1, 5));
  dominoes = tempDominoes;
  return dominoes
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */


console.log(dominoes);
let valueA: number = 0;
let valueB:number = 0;
for (let i: number = 0; i < dominoes.length; i++) {
  
  
  let nextDomino = dominoes.find(domino => valueB === valueA) ;
  dominoes.splice(i,1, nextDomino);
}
dominoes.splice(6);
console.log(dominoes);

/*
valueB = Object.values(dominoes [i]) [0] [1] ;
  console.log('B: '+ valueB);
  
  valueA = Object.values ( dominoes [i] ) [0] [0];
  console.log('A: ' + valueA);

  console.log(`There's no matching domino.`);
 )
*/




//print(dominoes);
/*
console.log(dominoes [0]);     // domino [0]

console.log(Object.values(dominoes [0]) [0] [0]);     // domino [0] value A
console.log(Object.values(dominoes [0]) [0] [1]);     //            valueB

console.log(Object.values(dominoes [1]) [0] [0]);     // domino [1] valueA
console.log(Object.values(dominoes [1]) [0] [1]);     //            valueB
*/