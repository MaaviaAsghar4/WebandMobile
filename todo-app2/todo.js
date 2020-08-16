firebase.database().ref("todo").on("child_added",function(data){
    var listed = document.getElementById("todoList");
    var todoList = document.createElement("div");
    todoList.classList.add("todoDiv");
    var list = document.createElement("li");
    list.innerHTML = data.val().value;
    // var liText = document.createTextNode(todo.value);
    // list.appendChild(liText);
    todoList.appendChild(list);

    //edit button
    var edit = document.createElement("button");
    edit.setAttribute("class", "todo-edit");
    edit.setAttribute("id", data.val().key);
    edit.setAttribute("onclick", "edit(this)");
    edit.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    todoList.appendChild(edit);

    //checked button
    var checked = document.createElement("button");
    checked.setAttribute("class", "todo-checked");
    checked.setAttribute("onclick", "checked(this)");
    checked.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    todoList.appendChild(checked);

    // delete button
    var deleted = document.createElement("button");
    deleted.setAttribute("class", "todo-delete");
    deleted.setAttribute("id", data.val().key);
    deleted.setAttribute("onclick", "deleted(this)");
    deleted.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    todoList.appendChild(deleted);

    listed.appendChild(todoList);
})

function addTodo() {
    //adding list
    var todo = document.getElementById("todo");

    var key = firebase.database().ref("todo").push().key;

    var todoItem = {
        value: todo.value,
        key: key
    }

    firebase.database().ref("todo").child(key).set(todoItem);

    todo.value = "";
}

function deleteAll() {
    firebase.database().ref("todo").remove();
    var todoList = document.getElementById("todoList")
    todoList.innerHTML = "";
}

function checked (e) {
    //completed
    e.parentNode.firstChild.classList.add("checked");

}

function edit (e) {
    //edit
    var val = prompt("Enter Value To Edit", e.parentNode.firstChild.innerText);
    var editValue = {
        value: val,
        key: e.id
    }
    
    firebase.database().ref("todo").child(e.id).set(editValue);

    e.parentNode.firstChild.innerText = val;
}

function deleted (e) {
    //delete
    firebase.database().ref("todo").child(e.id).remove();
    e.parentNode.remove();
}

