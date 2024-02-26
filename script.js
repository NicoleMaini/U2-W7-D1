// ESERCIZIO 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static olderAge(userAge1, userAge2) {
    if (userAge1.age > userAge2.age) {
      return userAge1.firstName + " è più vecchia di " + userAge2.firstName;
    } else {
      return userAge1.firstName + " è più giovane di " + userAge2.firstName;
    }
  }
}

const userX = new User("Linda", "Ranieri", 19, "Roma");
const userY = new User("Giulia", "Benevento", 28, "Torino");
const userJ = new User("Romina", "Turri", 56, "Savona");

console.log(User.olderAge(userX, userY));
console.log(User.olderAge(userY, userJ));

// ESERCIZIO 2

class Pet {
  constructor(petName, onwerName, species, breed) {
    this.petName = petName;
    this.onwerName = onwerName;
    this.species = species;
    this.breed = breed;
  }
  //   methodThis() {
  //     let pet = `Ciao mi chiamo ${this.petName} sono un ${this.species} di razza ${this.breed} e il mio padrone è ${this.onwerName}`;
  //     return console.log(pet);
  //   }

  static sameonwerName(onwerNameA, onwerNameB) {
    return onwerNameA.onwerName === onwerNameB.onwerName;
  }
}

const formNode = document.querySelector("form");
const ul = document.getElementById("text");

let animals = [];

formNode.onsubmit = function (e) {
  e.preventDefault();

  let petName = document.getElementById("petName").value;
  console.log(petName);

  let onwerName = document.getElementById("ownerName").value;
  console.log(onwerName);

  const allSpecies = document.getElementById("species");
  let selectedIndexSpecies = allSpecies.selectedIndex;
  let species = allSpecies.options[selectedIndexSpecies].text;
  console.log(species);

  const allBreed = document.getElementById("breed");
  let selectedIndexBreed = allBreed.selectedIndex;
  let breed = allBreed.options[selectedIndexBreed].text;
  console.dir(breed);

  let animal = new Pet(petName, onwerName, species, breed);
  console.log(animal);
  animals.push(animal);
  console.log(animals);

  const li = document.createElement("li");
  li.innerText = `Ciao mi chiamo ${animal.petName} sono un ${animal.species} di razza ${animal.breed} e il mio padrone è ${animal.onwerName}`;
  ul.appendChild(li);
};
