'use strict';
// Given a string, compute recursively (no loops) a new string 
// where all the lowercase 'x' chars have been changed to 'y' chars.

function makeXtoY(text: string) {
  if (text.length <= 1) {
    return text.replace('x', 'y');
  }
  return text[0].replace('x', 'y') + makeXtoY(text.substring(1));
}

console.log(makeXtoY('xxxxxyyyyy'));
console.log(makeXtoY('xy'));