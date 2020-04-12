// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "John",
        password: "secret"
    },
    {
        username: "Sally",
        password: "supersecret"
    },
    {
        username: "Berkin",
        password: "berkincetin"
    },
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


var newsfeed = [
    {
        username: "John",
        timeline: "Learning javascript"
    },
    {
        username: "Sally",
        timeline: "Learning code"
    },
    {
        username: "Berkin",
        timeline: "Getting it"
    },
];

var userNamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password");

function isUserValid(username, password) {
    for (var i=0; i<database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}
function signIn(username, password) {
        isValid = isUserValid(username,password);
        if (isValid) {
            console.log(newsfeed);
        } else {
            alert("Sorry, wrong username and password");

        }

    }

signIn(userNamePrompt,passwordPrompt);