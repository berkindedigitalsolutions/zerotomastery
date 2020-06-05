//scope

//root scope (window)

var fun = 5;

function funFunction() {
    var fun="hellooo";
    console.log(1,fun);
}

function funerFunction() {
    var fun="Byee";
    console.log(2, fun);
}

function funestFunction() {
    fun = "AHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
console.log("window", fun);
