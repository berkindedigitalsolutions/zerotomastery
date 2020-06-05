const basket = ['apples','oranges','grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

basket = {
    0: 'apples',
    1: 'oranges',
    2: 'grapes'
};

for (let i =0; i < basket.length; i++) {
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item);
});


// for of loop
// this is iterating over the array
// we are able to go 1 by 1 through the array items
// Iterables: arrays, and strings
for (item of basket) {
    console.log(basket);
}

// for in loop
// for in works with objects
// for in allows us to loop through object properties
// this is called enumarting
// properties of an object are enumerable
// objects can't be used with the for of because objects are not iterable


for (item in detailedBasket) {
    console.log(item);
}

const flattened = [[0,1,],[2,3],[4,5]].reduce(
    (accumulator,array) => {
        debugger;
        return [].concat(array)
    }, []
);