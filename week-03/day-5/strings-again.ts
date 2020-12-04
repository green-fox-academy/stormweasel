'use strict';
export { };
//Given a string, compute recursively a new string where all the 'x' chars have been removed.

function eraseX(text: string) {
  if (text.length <= 1) {
    return '';
  }
  if (text[0] === 'x') {
    return text[0].replace('x', 'y') + eraseX(text.substring(1));
  } else {
    return eraseX(text.substring(1));
  }
}

console.log(eraseX('xxxxxyyyyy'));
console.log(eraseX('xy'));