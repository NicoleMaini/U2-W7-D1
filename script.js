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
const formNode = document.querySelector("form");

formNode.onsubmit = function (e) {
  e.preventDefault();

  const petName = document.getElementById("petName");
  console.log(petName);

  const onwerName = document.getElementById("onwerName");
  console.log(petName.item);
  const species = document.querySelectorAll("species");
  console.log(species.value);
  const breed = document.querySelectorAll("breed");
  console.log(breed);

  class Pet {
    constructor(petName, onwerName, species, breed) {}
  }
};
