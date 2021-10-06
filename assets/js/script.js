
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


// final? iteration of createFormHandler function
// var createFormHandler = function(event) {
//   event.preventDefault();
//   var taskNameInput = document.querySelector("input[name='task-name']").value; //here we make a variable for the input element with the name property. Then we call the 'value' property. this will give us what the user inputs
//   var taskTypeInput = document.querySelector("select[name='task-type']").value; //variable that gets the 'value' of the select task type field.
//   console.log(taskTypeInput)

//   //create list item
//   var listItemE1 = document.createElement("li");
//   listItemE1.className = "task-item";

//   //create div to hold task info and add to list item
//   var taskInfoE1 = document.createElement("div");
//   //give the div a class name
//   taskInfoE1.className = "task-info";
//   //add HTML content to div
//   taskInfoE1.innerHTML = "<h3 class='task-name'>" +taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + '</span>'

//   listItemE1.appendChild(taskInfoE1);

//   //add entire list item to list
//   tasksToDoEl.appendChild(listItemE1);
// };



//Create handler function
var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //check if input values are empty strings
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fiil out the task form!")
    return false;
  }

  formEl.requestFullscreen();
  // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);