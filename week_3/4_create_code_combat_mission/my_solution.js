// I worked [by myself, with: Lienha Carleton, Joey Rosztoczy] on this challenge

// Your mission description:
// Mario Combat! 
// Objective: Navigate the obstacles to rescue the plumber's wife/princess. 
// Description: Watch out for the man-eating pipe-flower! Grab a mushroom
// too protect yourself from an enemy hit! Jump the gap and make it to the
// princess's castle. 

// Pseudocode
// 1. Create Mario!
// 2. Create the Castle (give it a location)
// 3. Create man-eating pipe-flower aka piranha plant
// 4. Create the hole in the ground??!!
// 5. Create a mushroom, we need to find one eventually!
// 6. Create a function so that our hero can move!
// 7. Watch out for the man-eating pipe-flower!
// 8. Grab the mushroom for extra health!
// 9. Jump over the hole in the ground so you don't die!
// 10. Arrive at the princesses castle to rescue her!

// Initial Code
var mario = {
    name: "Mario",
    location: (-100,-100),
    weight: 170,
    height: 5,
    health: 7
    }
    
var castle = {
    name: "Castle",
    location: (100,100),
    width: 1000,
    height: 500,
}

var piranhaPlant = {
    name: "Piranha Plant",
    location: (-100,-50),
    height: 10,
    width: 100,
    eatEnemies =  function() {
        if this.location === piranhaPlant.location {
            console.log("Woops, you got totally eaten :(");
        } else {
            console.log("Damnit get back here!");
        }; 
    }
}

var hole = {
  name: "hole",
  location: (-100,-25),
  height: -10,
  width: 200
  }

var mushroom = {
  name: "mushroom",
  location: (-100, -5),
  height: 0.2,
  weight: 1,
  health = function() {
      if this.location === mushroom.location {
          this.health += 4;
          } else {
            console.log("Sorry, you missed the extra benefit.")
            };
  };
 
 var movement = function(x,y) {
  this.location = (x, y)
  };

var gameOver = function() {
  if(this.location === castle.location) {
    console.log("You won!")
    };
    else if(this.health === 0) {
      console.log("You're dead!")
      };
    else {
      console.log("You lost! Try next time.")
      };
    };
  
  mario.location = (-100,-51);
  marion.location = (-99, -54);
  mario.location = (100,100);
  
  

// Refactored Code
//We are freaking awesome?





// Reflection
// This challenge was awesome because it started to demonstrate to me how vastly complex games can be.
// For the challenge we were supposed to keep things simple, and so I think we missed a lot of key functionality,
// But for instance we need to define at least a 3 dimensional grid or map for the objects to exist in, 
// and have visual attributes like colors and shapes that we are missing. We also need to define how time works
// within the game, and boundaries, walls, physics rules, etc. 
// 
// I can see how creating even a simple 8-bit indie style game could take months or years if one was by themselves
// and having to delve into each aspect. We haven't even touched on those concepts above, or sound, lighting, etc.
// 
// 
// 
// 
// 
// 
// 
