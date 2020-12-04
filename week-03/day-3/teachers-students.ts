'use strict';
/*
Create Student and Teacher classes
Student
    learn() -> prints the student is learning something new
    question(teacher) -> calls the teachers answer method
Teacher
    teach(student) -> calls the students learn method
    answer() -> prints the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method
*/

class Teacher {
  _name: string;

  constructor(name) {
    this._name = name;
  }

  public teach(studentName: Student) {
    return studentName.learn();
  }

  public answer(): void {
    console.log(`${this._name} answers the question.`);
  }

}

class Student {
  _name: string;

  constructor(name) {
    this._name = name;
  }

  public learn(): void {
    console.log(`${this._name} is learning something.`);
  }

  public question(teacherName: Teacher) {
    return teacherName.answer();
  }

}

let pistike = new Student('Pistike');
let marikaNéni = new Teacher('Marika néni');

pistike.question(marikaNéni);
marikaNéni.teach(pistike);