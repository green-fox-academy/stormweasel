'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;


function changeDir(text: string) {
    let lastIndex: number = Number(Object.keys(text)[text.length - 1]);
    //esetleg megoldható parseInt(stringvariable, 10), a 10 mindig állandó lsd internet);
    // a parseFloat(variable) tört számot csinál
    //a number csak akkor használató, ha akonvertálandó szöveg számjegyekből áll
    let temp: string = '';
    for (let i: number = lastIndex; i >= 0; i--) {
        temp += text[i];
    }
    console.log(temp);
}

changeDir(toBeReversed);