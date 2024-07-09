const animalData = require("./animal-data.json");
class Animal {
  constructor(name, species, color, hunger) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }
  greet() {
    console.log(`Hi my name is ${this.name} the ${this.species}!`);
  }
  feed() {
    this.hunger -= 20;
    console.log("Yum, I love food!");
  }
}
