/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Step 1
class GameObject {
    //Step 2
    constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
    this.name = attributes.name; 
    }
  
    //Step 3
    destroy() {
    return `${this.name} was removed from the game.`;
    }
  };
                                      
  //Step 1
  class CharacterStats extends GameObject {
    //Step 2
    constructor(characterStatsAttributes) {
      super(characterStatsAttributes)
    this.healthPoints = characterStatsAttributes.healthPoints;
  }    
  
  //Step 3
  takeDamage() {
    return `${this.name} took damage.`; 
    }
  };
  
  //Step 1
    class Humanoid extends CharacterStats {
      constructor(humanoidAttributes) {
      super(humanoidAttributes)
      this.team = humanoidAttributes.team;
      this.weapons = humanoidAttributes.weapons;
      this.language = humanoidAttributes.language;
      this.laugh = humanoidAttributes.laugh;
      this.catchPhrase = humanoidAttributes.catchPhrase;
    }
  
  
  
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`;
    }
     laugh() {
       return `${this.laugh}`;
     }
     catchPhrase() {
       return `${this.catchPhrase}`;
     }
   };
  



   const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
  const villain = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 4,
      height: 7,
    },
    healthPoints: 15,
    name: ' Dr Evil ',
    team: 'Munchkins',
    weapons: [
      'Brain',
      'Mini Me',
    ],
    language: 'Olde English',
    laugh: 'MWAHAHAHAHAHA',
    });
  
  const hero = new Humanoid({
     createdAt: new Date(),
    dimensions: {
      length: 6,
      width: 8,
      height: 10,
    },
    healthPoints: 20,
    name: 'Shrek',
    team: 'Donkey',
    weapons: [
      'Stench',
      'Strength',
    ],
    language: 'Olde English',
    catchPhrase: 'Hear ye hear ye no need to fear,  stinky ogre tis here!',
    });
    
  
  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  console.log(villain.createdAt);
  console.log(hero.createdAt);
  console.log(villain.name);
  console.log(villain.healthPoints);
  console.log(hero.name);
  console.log(hero.healthPoints);
  console.log(villain.weapons);
  console.log(hero.takeDamage());
  console.log(villain.laugh);
  console.log(hero.weapons);
  console.log(villain.takeDamage());
  console.log(villain.destroy());
  console.log(hero.catchPhrase);
  

  //It works!!!!yesssss//