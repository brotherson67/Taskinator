// logs the object 
// console.log(window.document);

// shows the selected object as an object (or directory)
// console.dir(window.document);

// selects an element by its tag, class, id etc
// window.document.querySelector("button");

// button (DOM)Element 1
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() {
    var listItemEl = document.createElement("li");  // create element
    listItemEl.className = "task-item";             // style element (css styles the class)
    listItemEl.textContent = "This is a new task."; // add text to element
    tasksToDoEl.appendChild(listItemEl);            // Append this element to the task list.
}

buttonEl.addEventListener("click", createTaskHandler);