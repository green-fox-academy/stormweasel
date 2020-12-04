'use strict';
/*
Create a Counter class
which has an integer property
when creating an instance, it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value
use export Counter at the end of your file
Check if everything is working fine with the proper test
Download counter.test.js and place it next to your solution
Run npm install tape @types/tape --save-dev in the root of your repository folder (where you have a package-lock.json file already)
Run the test file with ts-node
*/

export class Counter {
  private _integer: number;
  private _intialValue: number;

  constructor(integer?: number) {
    if (Number.isInteger(integer)) {
      this._integer = integer;
    } else {
      this._integer = 0;
    }
    this._intialValue = this._integer;
  }

  public add(integer?: number) {
    if (Number.isInteger(integer)) {
      return this._integer += integer;
    } else {
      return this._integer += 1;
    }
  }

  public get() {
    return this._integer;
  }

  public reset() {
    this._integer = this._intialValue;
  }
}