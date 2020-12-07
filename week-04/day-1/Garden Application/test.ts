'use strict';
import {Garden} from './garden';
import { yellowFlower, blueFlower, purpleTree, orangeTree } from './plants';

let garden = new Garden();
garden.addPlants(yellowFlower);
garden.addPlants(blueFlower);
garden.addPlants(purpleTree);
garden.addPlants(orangeTree);

garden.viewPlants();
console.log();
// console.log(garden);	//for checking the water level
// console.log();
garden.water(40);
console.log();
// console.log(garden); //for checking the water level
// console.log();
garden.water(70);
// console.log();
// console.log(garden); //for checking the water level
// console.log();