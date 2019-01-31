// CODE here for your Lambda Classes

//start of Person

//Declare class keyword
class Person {
// Create a new constructor
    constructor(attributes) {
     this.name = attributes.name;
     this.age = attributes.age;
     this.location = attributes.location;
     this.gender = attributes.gender;
      }
   //Methods   
   speak() {
       console.log(`Hello my name is ${this.name}, I am from ${location}`);
   }
}
//end of class 



//start of Instructor

//declare class keyword

   
//Methods

//end of class



//start of Student 

//Declare class keyword

//Create a new constructor

//end of class



//start of projectManager 

//Declare class keyword

//Create a new constructor

//end of class 




//Objects//


const Josh = new Instructor({
    name: 'Josh',
    location: 'California',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    Phrase: 'The big boss',
});

const Rose = new Instructor({
    name: 'Rose',
    location: 'DC',
    age: 28,
    gender: 'female',
    favLanguage: 'React',
    specialty: 'Back-end',
    Phrase: 'Just do it',
});

const Piper = new Student({
    name: 'Piper',
    location: 'Barcelona',
    age: 20,
    gender: 'female',
    previousBackground: 'Artist',
    className: 'Web17',
    favSubjects: ['science', 'art', 'health'],
});

const Seryy = new Student({
    name: 'Seryy',
    location: 'Paris',
    age: 30,
    gender: 'male',
    previousBackground: 'Accountant',
    className: 'DS5',
    favSubjects: ['Html', 'CSS', 'JS'],
});

const Caleb = new projectManager({
    name: 'Caleb',
    location: 'NY',
    age: 25,
    gender: 'male',
    gradClassName: 'CS8',
    favInstructor: 'Cam',
    });

const Oly = new projectManager({
    name: 'Oly',
    location: 'DR',
    age: 30,
    gender: 'female',
    gradClassName: 'CS2',
    favInstructor: 'Burt',
 });