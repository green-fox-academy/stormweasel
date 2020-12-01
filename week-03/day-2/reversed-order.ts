'use strict';
export { };
// Create a method that decrypts reversed-order.txt

function decrypt(source: string) {
  const fs = require('fs');
  let fileContent: string = '';
  try { fileContent = fs.readFileSync(source, 'utf-8'); }
  catch (e) { console.log('Read error'); }

  let reversedLines: string[] = fileContent.split('\n');
  for (let i: number = reversedLines.length - 1; i >= 0; i--) {
    console.log(reversedLines[i]);
  }
}
decrypt('./reversed-order.txt');