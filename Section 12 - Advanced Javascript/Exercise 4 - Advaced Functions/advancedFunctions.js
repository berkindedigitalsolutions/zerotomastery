const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closure - a function ran. The function executed. It's never going to execute again
//BUT it's going to remember that there are references to those variables so the child scope always has
//access to the parent scope

//Currying

//The process of taking a function that takes multiple arguments, 
//and getting them one at a time

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3);
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10); //returns 50

//Compose

//The act of putting 2 functions together, to form a 3rd function where
//the output of 1 function is the input of another

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;

compose(sum,sum)(5);

//Avoiding Side Effects, and Functional Purity

let a = 1;
function b() {
    a = 2; //this is a side effect, it affects the outside world
}
//console.log within a function is also a side effect

//functional purity avoids side-effects, and we always return something
//avoid scenarios where you return a value or undefined, just return value
//determinism is key to avoiding errors