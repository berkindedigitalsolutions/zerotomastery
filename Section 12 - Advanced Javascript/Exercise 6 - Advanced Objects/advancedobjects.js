//REFERENCE TYPE
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//objects are reference types
//reference types are non-primitive types
//they are created by the programmer
//when we create object 1, we are storing an address of the variable inside it
//when we create object 3, it gets its own address, so object 1 doesn't equal object 3


//CONTEXT
//context tells you where we are within the object
//this refers to what object we are inside of
console.log(this);

const object4 = {
    a: function() {
        console.log(this);
    }
}

//INSTANTIATION
//instantiation is when you make a copy of an object and reuse the code
//you make multiple copies or instances of an object
//a class is something you want to make a copy of

class Player {
    constructor(name,type) {
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){

        super(name,type);
        console.log('wizard',this);

    }
    play() {
        console.log(`Weeeeeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic')
const player1 = new Player("Tom", 'Regular Guy');