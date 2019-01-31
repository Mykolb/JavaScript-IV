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
       console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
   }
};
//end of class 



//start of Instructor
class Instructor extends Person {
    //declare class keyword
    constructor(instructorAttributes) { 
    super(instructorAttributes)
    this.speciality = instructorAttributes.name;  
    this.faveLangauge = instructorAttributes.speciality;
    this.catchPhrase = instructorAttributes.catchPhrase;
    }
//Methods
    demo() {
        console.log(`Today we are learning about ${subject}.`); //not connected to anything yet, may need to be just a regular word 
    }
    grade() {
        console.log(`{this.name} receives a perfect score on subject.`);
    }
};

//end of class



//start of Student 
class Student extends Instructor {
//Declare class keyword
constructor(studentAttributes) {
super(studentAttributes)
this.previousBackground = studentAttributes.previousBackground;
this.className = studentAttributes.className;
this.faveSubjects = studentAttributes.faveSubjects;
}
//Methods
    listsSubjects() {
        console.log();
    }
    prAssignment() {
        console.log(`${this.name} has submitted a PR for ${subject}`); //not connected to anything yet 
    }
    sprintChallenge() {
        console.log(`${this.name} has begin sprint challenge on {subject}.`);
    }
};
//end of class



//start of projectManager 
class ProjectManager extends Student {
//Declare class keyword
constructor(pMAttributes) {
super(pMAttributes)
    this.gradClassName = pMAttributes.gradClassName;
    this.favInstructor = pMAttributes.favInstructor;
}
    //Methods
    standUp() {
        console.log(`name announces to {channel}, @channel standy times!`);
    }
    debugsCode() {
        console.log(`name debugs ${this.name}'s code on {subject}.`);
    }
};


//Create a new constructor

//end of class 




//Objects//


