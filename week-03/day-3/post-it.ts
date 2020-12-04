'use strict';
/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

class PostIt {
 private _backgroundColor: string;
 private _textColor: string;
 private _textOnIt: string;

  constructor(background: string, textColor: string, text: string) {
    this._backgroundColor = background;
    this._textColor = textColor;
    this._textOnIt = text;
  }
}

let sheet1 = new PostIt('orange', 'blue', 'Idea1');
let sheet2 = new PostIt('pink', 'black', 'Awesome');
let sheet3 = new PostIt('yellow', 'green', 'Superb!');

console.log(sheet1);
console.log(sheet2);
console.log(sheet3);