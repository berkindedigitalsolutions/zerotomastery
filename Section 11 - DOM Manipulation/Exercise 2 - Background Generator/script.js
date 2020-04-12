var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

console.log(button);

function setColor(color) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color.value = "#"+String(randomColor);
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    +")";

    css.textContent = body.style.background + ";";  
}
function setRandomGradient() {
    setColor(color1);
    setColor(color2);
    setGradient();
}


setRandomGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click",setRandomGradient);
