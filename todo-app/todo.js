var todoItem = document.getElementById("todo-item");
var todoButton = document.getElementById("todo-button");
var todoDelete = document.getElementById("todo-delete");

var list = document.getElementById("list");

function addTodo() {
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");
    var newTodo = document.createElement("li");
    newTodo.innerText = todoItem.value;
    newTodo.classList.add("listing");
    todoDiv.appendChild(newTodo);

    var completed = document.createElement("button");
    completed.setAttribute("onclick", "deleteCheck(this)");
    completed.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    completed.classList.add("completed-btn");
    todoDiv.appendChild(completed);

    var trash = document.createElement("button");
    trash.setAttribute("onclick", "deletetrash(this)");
    trash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trash.classList.add("trash-btn");
    todoDiv.appendChild(trash);

    list.appendChild(todoDiv);

    todoItem.value = ""
}

function deleteAll () {
    list.innerHTML = ""
}

function deletetrash(e) {
    e.parentNode.remove();
}

function deleteCheck(e) {
    var todo = e.parentNode;
    todo.classList.add("checked");
}