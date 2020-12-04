'use strict';
/*
Create a Station and a Car classes
Station
gasAmount -> available gas amount of the gas station
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount -> gas amount of the car
capacity -> capacity of the fuel tank
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100
*/

class Station {
  private _gasAmount: number;

  constructor(gasAmount: number) {
    this._gasAmount = gasAmount;
  }

  public refill(car: Car, fuelAmount: number) {
    if ((car.gasAmount + fuelAmount) <= car.capacity) {
      console.log(`\nYou had ${car.gasAmount} fuel in your tank.`);
      console.log('gluggy-gluggy-glugyy');
      console.log(`Now you have ${car.gasAmount + fuelAmount}.`);
      return car.gasAmount += fuelAmount
    } else {
      console.log(`\nThat amount of gas would excess the car's fuel capacity.`);
      console.log(`Your fuel level is at the moment: ${car.gasAmount}.`);
      
    }
  }

  public get gasAmount(): number {
    return this._gasAmount;
  }
  public set gasAmount(gasAmount: number) {
    this._gasAmount = gasAmount;
  }
}

class Car {
  private _gasAmount: number;
  private _capacity: number;

  constructor() {
    this._gasAmount = 0;
    this._capacity = 100;
  }

  public get gasAmount(): number {
    return this._gasAmount;
  }
  public set gasAmount(gasAmount: number) {
    this._gasAmount = gasAmount;
  }
  public get capacity(): number {
    return this._capacity;
  }
}

let verda = new Car();
let shellStation = new Station(1000);

shellStation.refill(verda, 10);
shellStation.refill(verda, 110);