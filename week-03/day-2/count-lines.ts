'use strict';
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function lineCounter(filename: string) {
  const fs = require('fs');
  const charEncode = 'utf-8';
  try {
    let fileContent = fs.readFileSync(filename, charEncode);
    let lines: string[] = fileContent.split('\n');
    console.log(lines.length);
  }
  catch (e) {
    console.log('0');
  }
}
lineCounter('my-file.txt');