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
const name = "Sally";
const age = 34;
const pet = "horse";

const greeetingBest =  `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`

// Default arguments 

function greet(name ='',age=30, pet='dog') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`
}

// Symbol Variables

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3; //returns false

//arrow functions
function add(a,b) {
    return a+b;
}
const add2 = (a,b) => a + b;