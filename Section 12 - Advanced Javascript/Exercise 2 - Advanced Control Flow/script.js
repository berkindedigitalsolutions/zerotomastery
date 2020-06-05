function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(false) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your acccount # is " + ( isUserValid(false) ? "1234" : "Not Available")


function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You arrive home";
            break;       
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "You run into a troll";
            break;   
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}