//type coercion example;
//when the operands are different types, i.e. number and string, then javascript
//automatically converts a certain type to another type

//in memory the number 5 is different than the string '5'
//javascript has a lot of type coercion

//type coercion occurs when you use ==

1 == '1'; //example of type coercion

1 === '1'; //this means be explicit, don't coerce the values

if (1) {
    console.log("this is coercion")
}

NaN === NaN; //returns false
Object.is(NaN, NaN); //returns true