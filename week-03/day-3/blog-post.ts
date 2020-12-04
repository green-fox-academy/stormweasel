'use strict';
/*
Create a BlogPost class that has
an authorName
a title
a text
a publicationDate

Create a few blog post objects:
  "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
  Lorem ipsum dolor sit amet.
  
  "Wait but why" titled by Tim Urban posted at "2010.10.10."
  A popular long-form, stick-figure-illustrated blog about almost everything.
  
  "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
  Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
  When I asked to take his picture outside one of IBM’s New York City offices, he told me that he 
  wasn’t really into the whole organizer profile thing.
*/

class BlogPost {
 private _authorName: string;
 private _title: string;
 private _text: string;
 private _publicationDate: string;

  constructor(name: string, title: string, date: string, text: string) {
    this._authorName = name;
    this._title = title;
    this._publicationDate = date;
    this._text = text;
  }

}

let text1: string = 'Lorem ipsum dolor sit amet.';
let blog1 = new BlogPost('John Doe', 'Lorem Ipsum', '2000.05.04.', text1);

let text2: string = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
let blog2 = new BlogPost('Tim Urban', 'Wait but why', '2010.10.10.', text2);

let text3: string = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
let title3: string = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
let blog3 = new BlogPost('William Turton', title3, '2017.03.28.', text3);

console.log(blog1);
console.log(blog2);
console.log(blog3);