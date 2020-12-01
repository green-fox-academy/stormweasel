'use strict';
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function fileCopy(source: string, target: string) {
  const fs = require('fs');
  let succesHighlighter: boolean = true;
  try {
    //throw('E');
    let content: string = fs.readFileSync(source, 'utf-8');
    try {
      fs.writeFileSync(target, content);
      console.log(`Succesful copy: ${succesHighlighter}`);
    }
    catch (e) {
      console.log('Write error');
    }
  }
  catch (e) {
    console.log('Read error');
  };
}

fileCopy('./apple.txt', './banana.txt');