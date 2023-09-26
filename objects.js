let spaceship = {
  name: "Red Dwarf",
  type: "Mining vessel",
  owner: "Jupiter mining corporation",
  captain: "Frank Hollister",
};

console.log(spaceship);

let person = {};
person.name = "Gati";
console.log(person.name);

// Computed property names

let person1 = { name: "Gati" };
console.log(person1.name);

let prop = "name";
let person2 = {
  [prop]: "Gatita",
  lastName: "Whatever",
  ["full" + prop]: "Gatita Whatever",
};
console.log(person2[prop]);
console.log(person2.fullname);

// Getting and setting object properties

person2["bestfriend"] = "Tigrou"; // add property using square brackets notation
person2.spouse = "Gatito"; // add property using dot notation
person2["lastName"] = "Bojorge"; // change property using square brackets notation
person2.fullname = "Gatita Bojorge"; // change property using dot notation
delete person2["lastName"]; // delete property using square bracket
delete person2.bestfriend; // delete property using dot notation
console.log(person2);

// Challenge

let data = {
  firstName: "Arthur",
  lastName: "Dent",
  species: "Human",
};

let firstName = data["firstName"];
let species = data.species;
console.log(firstName);
console.log(species);
data.age = 42;
console.log(data);

// Object methods

let car = {
  location: "garage",
  ignition: "off",
  fueled: "true",
  start: function () {
    this.ignition = "on";
  },
  drive: function () {
    this.location = "street";
  },
  park: function () {
    this.location = "garage";
  },
  refuel: function () {
    this.location = "gas station";
    this.fueled = "true";
  },
  stop: function () {
    this.ignition = "off";
  }
};



console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
console.log(car.hasOwnProperty("firstName"));
console.log(car.hasOwnProperty("ignition"));
// console.log(car.toString());

console.log(car.ignition);
// Use the car
car.start();
console.log(car.ignition);
car.drive();
console.log(car);

// Ran out of gas
car.fueled = "false";
car.refuel();
console.log(car.location);
console.log(car.fueled);
console.log(car);

// Let's go home
car.drive();
console.log(car.location);
car.park();
car.stop();
console.log(car);

// The THIS challenge

let classroom = {
    numOfStudents: 0,
    schoolHours: false,
    playtime: false,
    openSchool: function () {
        this.schoolHours = true;
        this.numOfStudents = 20;
    },
    breakTime: function () {
        if (this.schoolHours) {
            this.playtime = true;
        }
    }
};

classroom.openSchool();
classroom.breakTime();
console.log(classroom);
console.log(classroom.numOfStudents);
console.log(classroom["playtime"]);