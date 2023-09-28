// for...in with an object

let petNames = {
    dog: "Chester",
    cat: "Timoti",
    fish: "Bubbles",
    octopus: "Shelby"
};

for(let i in petNames) {
    console.log(petNames[i] + " is a " + i)
};

// for...in with an array

let foodie = ["eggs", "smoothie", "bacon", "sandwich"];
for (let x in foodie) {
    console.log("index", x, "is", foodie[x]);
}


// for...of
let food = ["pizza", "steak", "pasta", "fruit salad", "stir fry"];
for (let i of food) {
    console.log(i);
};

// a different approach

let stuffAnimals = {
    cat: "Tigrou",
    chick: "Doudou",
};

let pairs = Object.entries(stuffAnimals);
console.log(pairs);

for (let pair of pairs) {
    console.log(pair[1], "is a", pair[0]);
}

let gamerScores = {
    john: 89,
    paul: 725,
    george: 553,
    robert: 9302,
    steve: 733,
};

for (let y in gamerScores) {
    console.log(y + " scored " + gamerScores[y]);
}