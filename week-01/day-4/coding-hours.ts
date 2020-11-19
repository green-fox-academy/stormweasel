'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//      6*5*17=30*17=510
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
//     510/52*17=0.57....
// 6*5*17/52*17


let averageCodeHours:number = 6;
let workdaysPerWeek:number = 5;
let semesterWeekCount: number = 17;
let weeklyWorkhours:number = 52;

let question1:number = averageCodeHours*workdaysPerWeek*semesterWeekCount;
let question2:number = question1/(weeklyWorkhours*semesterWeekCount);
console.log(question1 + ' hours');
console.log('approx. '+ Math.round(question2*100) + ' %' + ' (precisely: '+ question2*100 + ' %)');


