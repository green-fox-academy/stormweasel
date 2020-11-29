'use strict';
export { };
/*
We are going to represent our contacts in a map where the keys are 
going to be strings and the values are going to be strings as well.

Create a map with the following key-value pairs.

Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
*/
let registerTel = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982'
}

/*
Create an application which solves the following problems.
    What is 's phone number?
    Whose phone number is 307-687-2982?
    Do we know Chris E. Myers' phone number?
*/
function AnswerMe(name1: string, phonenum: string, name2: string, object) {
  console.log(`The number of ${name1} is ${object[name1]}.`);

  function getKeyByValue(value: string, object): string {
    let found = Object.keys(object).find(function (key) { return object[key] === value });
    return found;
  }
  console.log(`The telephone number, ${phonenum} belongs to ${getKeyByValue(phonenum, object)}.` );
  
  if (object.hasOwnProperty(object[name2])) {
    console.log(`Yes, the person is in the book. His/her number is ${object.name2}.`);
  } else {
    console.log(`Sorry, the telephone register does not know this person.`);
  }
}
AnswerMe('John K. Miller','307-687-2982', 'Chris E. Myers', registerTel);