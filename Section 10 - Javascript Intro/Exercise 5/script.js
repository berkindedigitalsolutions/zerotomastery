function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();

function sing() {
    console.log("AHHHHHH!");
    console.log("TEEEEEE");
}

sing();

function multiply(a,b) {
    console.log(a,b);
    return a*b;
}

answer = multiply(5,10);


//function declaration

function newFunction() {

}

//function expression
var newFunction = function() {

}

//calling or invoking a function
alert();
newFunction();

//assign a variable
var a = true

//function vs method
function thisIsAFunction() {

}

var obj = {
    thisIsAMethod: function() {

    }
}