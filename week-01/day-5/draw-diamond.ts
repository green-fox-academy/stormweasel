'use strict';
export { }
let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

// At first I missed out  this execise accidentally so 
// only without .repeat()
let bStar: string = '*';
let blank: string = ' ';
let loneStar: string = '*';
let loneBlank: string = ' ';

for (let stars: number = 0; stars < lineCount / 2; stars++) {
  blank = ' ';
  for (let blanks = 0; blanks < lineCount / 2 - stars; blanks++) {
    loneBlank = ' ';
    blank += loneBlank;
  }
  console.log(blank + bStar);
  bStar += loneStar + loneStar;
}
// fordított piramis rajzolása innentől kezdődik

if (lineCount % 2 === 0) {
  // for even numbers
  blank = ' ';    // a piramis miatti indentáció
  let b: number = 1;
  for (let k: number = 0; k < lineCount / 2; k++) {       // hány sor megy lefele (asorok számának fele )
    bStar = '';                                                   // \  a csillagok  számának nullázása
    for (let s: number = 0; s < lineCount - k - b; s++) {         //  \ a sorok száma minusz 2 csillag annyiszor ahányadik sorban vagyunk + 1++ 
      bStar += loneStar;                                          //    a csillagok (csökkenő) száma egy sorban
    }                                                             //__/
    b = b + 1;
    for (let r: number = 0; r < 1; r++) {                   //_
      blank += loneBlank;                                   // \ az üres mezők száma (növekvő)
    }                                                       //_/
    console.log(blank + bStar);                               // adott sor printelése
  }
} else {
  // for oddnumbers 
  blank = '  '; // a piramis miatti indentáció
  for (let k: number = 0; k < lineCount / 2; k++) {   // hány sor megy lefele (asorok számának fele -1 db a középső sor miatt)
    bStar = '';                                                    // \  a csillagok  számának nullázása
    for (let s: number = 0; s < lineCount - 2 * (k + 1); s++) {    //  \ a sorok száma minusz 2 csillag annyiszor ahányadik sorban vagyunk + 1 mert 0. inexről indul
      bStar += loneStar;                                           //    a csillagok (csökkenő) száma egy sorban
    }                                                              //__/
    for (let r: number = 0; r < 1; r++) {               //_
      blank += loneBlank;                               // \ az üres mezők száma (növekvő)
    }                                                   //_/
    console.log(blank + bStar);                     // adott sor printelése
  }
}