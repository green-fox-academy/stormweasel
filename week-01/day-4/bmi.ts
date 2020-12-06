'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values
// BMI-formula : (weight[kg]/height^2 [m])
//My solution  for rounding to two decimals
console.log(
  Math.round(massInKg / Math.pow(heightInM, 2) * 100) / 100
);

//  I found these on net for rounding to 2 decimals

//  .toPrecision() 
console.log(
  (massInKg / Math.pow(heightInM, 2)).toPrecision(4)
);

/*
Math.round() - - > elvileg kiküszöböli a kerekítési hibákat, ami a többinél előfordul
    function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
*/