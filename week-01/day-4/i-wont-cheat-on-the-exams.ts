'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let oath: string = "I won't cheat on the exam!";

for (let i: number = 1; i <= 100; i++) {
    if (i < 10) {
        console.log(i + '   ' + oath);
    } else {
        if (i == 100) {
            console.log(i + ' ' + oath);
        } else {
            console.log(i + '  ' + oath);
        }
    }
}