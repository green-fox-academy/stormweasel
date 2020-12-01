'use strict';
export { };
// Create a method that decrypts duplicated-chars.txt

function decrypt(source: string) {
  const fs = require('fs');
  let fileContent: string = '';
  try {fileContent = fs.readFileSync(source, 'utf-8');}
  catch (e) { console.log('Read error'); }

  let doubleLines: string[] = fileContent.split('\n');

  for (let i = 0; i < doubleLines.length; i++) {
    let simpleLines: string = '';
    for (let j: number = 0; j < doubleLines[i].length; j += 2) {
      simpleLines += (doubleLines[i][j]);
    }
    console.log(simpleLines);
  }
}
decrypt('./duplicated-chars.txt');