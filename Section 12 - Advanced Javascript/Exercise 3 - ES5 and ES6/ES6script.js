let player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}

//Creating an object 
const obj ={
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//destructuring

const { player, experience } = obj;
let { wizardLevel } = obj;

// new ways of declaring object keys
const name = "john snow";

let obj = {
    [name]: "hello",
    ["ray"+ "smith"]: "hihi",
    [1 + 2]: "hi there"
};

// Example

const a = "Simon";
const b = true;
const c = {};

// old way
const obj = {
    a: a,
    b: b,
    c: c
}

//ES6 if property and value are the same
const obj = { a,b, c};

//Template strings
