'use strict';
//Object
let myObject = {
    1: 'Szilva',
    2: 'Dinnye',
    3: 'F'
}
//Array
let fruits: string[] = ['Alma', 'Körte', 'Szőllő'];

// irassuk ki a kulcsokat
for (const key in myObject) {
    console.log(key)
}
// irasuk kiaz értékekket a kulcsok segítségével
for (const key in myObject) {
    console.log(myObject[key]);
}

// array iteráció
for (const elem of fruits) {
    console.log (elem);
}