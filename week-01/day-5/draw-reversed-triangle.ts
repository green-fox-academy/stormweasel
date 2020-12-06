'use strict'
export { }
let lineCount: number = 7;

let blank: any = '';

for (let j: number = 0; j < lineCount; j++) {
  let star: any = '*';
  let add: any = '*';
  for (let i: number = 1; i < lineCount - j; i++) {
    star = star + add;
  }
  console.log(blank + star);
  let addBlank: any = ' ';
  blank = blank + addBlank;
}