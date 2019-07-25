/* The Four Principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - When this is in the global scope the value of this will be the window object.
* 2. Implicit binding - Just like any other time we use a method (ex: array.indexOf()) the context of that method is what's on the left side of the dot. So this takes on the place of the object context name.
* 3. New binding - This refers to the instance of the object created by the constructor function. Similar to implicit binding, except that it refers to the object created using the word New.
* 4. Explicit binding - This overrides any object the this keyword points to. You can give it another object using .bind(), .call(), or . apply().
*
* write out a code example of each explanation above
*/

// Principle 1
Window Binding
// code example for Window Binding
console.log(this.document);//returns the html for current webpage

// Principle 2
Implicit Binding
// code example for Implicit Binding
const scoobyDoo = {
    name: "Scooby Doo",
    favFood: "Scooby snacks",
    saying: "Scooby dooby doooooo!",
    bff: "Shaggy",
    species: "dog",
    speak: function(){
        console.log(`My name is ${this.name}, my best friend is ${this.bff} and I love ${this.favFood}. ${this.saying}`);
    }
}
scoobyDoo.speak();
// Principle 3
New Binding
// code example for New Binding
function Character(object){
    this.name = object.name,
    this.bff = object.bff,
    this.saying = object.saying,
    this.speak = function(){
        console.log(`My name is ${this.name} and my best friend is ${this.bff}. ${this.saying}`)
    }
}

const shaggy = new Character({name: 'Shaggy', bff: scoobyDoo.name, saying: 'Zoinks!'});
// shaggy.speak();
// Principle 4
Explicit binding
// code example for Explicit Binding
scoobyDoo.speak.call(shaggy);//returns Shaggy info
shaggy.speak.apply(scoobyDoo);//returns Scooby info