var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
]

for (var i =0; i < todos.length;i++) {
    console.log(todos[i] + "!");
}

var counterOne =0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}
function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);