const a = 1;
const b = 10;
const c = 100;

// Call stack example

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

//Recursion that causes call stack to overflow

function foo() {
    foo();
}

console.log('1');
setTimeout(()=>{
    console.log('2');
}, 2000);
console.log('3');