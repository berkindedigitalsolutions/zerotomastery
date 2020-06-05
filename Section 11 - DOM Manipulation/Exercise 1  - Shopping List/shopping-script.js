var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.getElementById("todo-list");
var del = document.getElementsByClassName("delete");

function inputLength() {
    return input.value.length;
}

function addListItem() {
    var li = document.createElement("li");
    li.innerHTML = "<span>"+input.value+"</span><button class='delete'>Del</button>";
    list.appendChild(li);
    input.value = "";
}
function addListAfterClick() {
    if (inputLength() > 0) {
        addListItem();
    }
    deleteListItem();

}
function addListAfterReturn() {
    console.log(event)

    if (inputLength() >0 && event.keyCode === 13) {
        addListItem();
    }
    deleteListItem();
}
function deleteListItem() {
    for (var i = 0; i<del.length; i++) {
        del[i].onclick = function() {
            var div = this.parentElement;
            div.style.display= "none";
        }
    }
}
function checkListItem(event) {
    console.log(event);
    if (event.target.tagName ==="LI") {
        event.target.classList.toggle("li-done");
        event.target.children[0].classList.toggle("done");
        console.log(event.target.children[0].classList);

    }
}

deleteListItem();
button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterReturn);
list.addEventListener("click",checkListItem);