const array = [1,2,10,16];

const double = []
const newArray = array.forEach((num)=>{
    double.push(num*2);
});

//forEach iterates over the array, with forEach there can be of side-effects

console.log(newArray);


//map, filter, reduce 

//map
//map always has a return element, map iterates over the array, and stores
//the value into another variable

const mapArray = array.map((num)=>{ 
    return num*2; 
});

//shorter version of map
const mapArray = array.map(num => num * 2);

//filter
const filterArray = array.filter(num => {
    return num > 5;
});

const filterArray = array.filter(num => num >5);

//reduce
//reduce allows you to filter and map

const reduceArray = array.reduce((accumulator,num) => {
    return accumulator + num;
}, 0);

console.log('reduce',reduceArray);