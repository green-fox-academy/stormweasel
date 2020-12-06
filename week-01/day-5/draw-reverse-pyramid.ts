'use strict'
export { }
let lineCount: number = 4;

let bStar: string = '*';
let blank: string = ' ';
let loneStar: string = '*';
let loneBlank: string = ' ';

for (let k: number = 0; k < lineCount / 2; k++) {
  bStar += loneStar + loneStar;
}
console.log(blank + bStar);
bStar = '*';

for (let k: number = 0; k < lineCount / 2 - 1; k++) {
  bStar += loneStar + loneStar;
  blank += loneBlank;
}
console.log(blank + bStar);
bStar = '*';

for (let k: number = 0; k < lineCount / 2 - 2; k++) {
  bStar += loneStar + loneStar;
  blank += loneBlank;
}
console.log(blank + bStar);


/*
    for (let i: number = 0; i < lineCount; i++) {
        blank = blank + loneBlank;
    }

for (let f: number = 0; f = lineCount; f++)
    bStar += loneStar;
    console.log(blank + bStar);
   /// blank = ' ';

}*/