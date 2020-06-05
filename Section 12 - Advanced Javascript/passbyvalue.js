var a = 5;
var b = 10;
b = 10;

b++;

let obj1 = {
    name: 'Yao',
    password: '123'
}

let obj2 = obj1;

obj2.password = "easypeasy";

//objects in javascript are stored in memory and are passed by reference
//when we assign obj1 to obj2, it is saying, this is where the object is in memory

//cloning an array
var c = [1,2,3,4,5];
var d = [].concat(c);

d.push(13943);
console.log(d);
console.log(c);

//cloning an object

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};
//this is only shallow cloning which only copies the first level object
//the second object at element c still gets passes as a reference
let clone = Object.assign({},obj)
let clone2 = {...obj};

//deep cloning
let superClone = JSON.parse(JSON.stringify(obj));
//if this object is extremely deep, then doing a deep clone may take a lot of time
//and have an effect on performance




obj.c.deep = "hahaha";

console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);


