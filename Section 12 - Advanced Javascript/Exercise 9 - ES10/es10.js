let array = [1,2,3,4,5];
let array2 = [1,[2,3],[4,5]];
let array3 = [1,2, [3,4,[5]]];

array.flat();
array2.flat();
array3.flat();
array3.flat(2);

const entries = ['bob','sally',,,,,,'cindy'];
entries.flat();

const array4 = array3.flatMap(value => value+5);
const userEmail = '              eddytheeagle@gmail.com';
let userEmail2 = 'johnnydanger@gmail.com                    ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

userProfiles = [['commanderTom',23],['derekZlander',40],['hansel',20]];

let obj = Object.fromEntries(userProfiles);
Object.entries(obj);

//try catch

try {
    bob + 'hi'
} catch (error) {
    console.log("You messed up: "+Error)
}