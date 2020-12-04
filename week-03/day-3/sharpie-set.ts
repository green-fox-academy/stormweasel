'use strict';
import { Sharpie } from './sharpie';
/*
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
    countUsable() -> sharpie is usable if it has ink in it
    removeTrash() -> removes all unusable sharpies
*/

class SharpieSet {
  private _listOfSharpies: Sharpie[];
  private _numberOfSharpies: number;
  private _blueSharpie = new Sharpie('blue', 10);
  private _greenShapie = new Sharpie('green', 10);
  private _redSharpie = new Sharpie('red', 10);
  private _blackSharpie = new Sharpie('black', 10);

  constructor(blue: number, green: number, red: number, black: number) {
    this._listOfSharpies = [];
    this._numberOfSharpies = blue + green + red + black;
    let set [] = [blue, green, red, black]

    for (let j: number = 0; j < this._numberOfSharpies; j++) {

      for (let i: number; i < set[j]; i++) {
        this._listOfSharpies.push()
      }

    }


  }



}