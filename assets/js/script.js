var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");//replaces buttonE1
//var buttonE1 = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//This is an anonymous function
// buttonE1.addEventListener("click", function() {
//   var listItemE1 = document.createElement("li");
//   listItemE1.className = "task-item";
//   listItemE1.textContent = "This is a new task, soon there will be more";
//   tasksToDoEl.appendChild(listItemE1);
// });

//initial commit of function to dynamically create task
// var createTaskHandler = function() {
//   var listItemE1 = document.createElement("li");
//   listItemE1.className = "task-item";
//   listItemE1.textContent = "This is a new task";
//   tasksToDoEl.appendChild(listItemE1);
//};

//this is the event listener
//buttonE1.addEventListener("click", createTaskHandler);
//removed to add formE1EventListener


// Second iteration of createFormHandler function
var createFormHandler = function(event) {
  event.preventDefault();
  
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  listItemE1.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemE1);
};



var createTaskE1 = function(taskDataObj) {
    // create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

listItemEl.setAttribute("data-task-id", taskIdCounter);

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl);
// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
taskIdCounter++;
}

formEl.addEventListener("submit", createFormHandler);