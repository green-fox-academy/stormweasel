'use strict';
export { };
// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

function charSeparator(text: string) {
  if (text.length <= 1) {
    return text[0];
  }
  return text[0] + '*' + charSeparator(text.substring(1));
}

console.log(charSeparator('boboka'));