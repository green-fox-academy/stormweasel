'use strict';
export { };
// Create a method that decrypts reversed-lines.txt

function decrypt(source: string) {
  const fs = require('fs');
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(source, 'utf-8');
  }
  catch (e) { console.log('Read error'); }

  let reversedLines: string[] = fileContent.split('\n');
  for (let i = 0; i < reversedLines.length; i++) {  // a sorok száma
    let properLines: string = '';
    for (let j: number = reversedLines[i].length - 1; j >= 0; j--) { //a fordított sorok utolsó karakterének indexe
      properLines += reversedLines[i][j];
    }
    console.log(properLines);
  }
}

decrypt('./reversed-lines.txt');