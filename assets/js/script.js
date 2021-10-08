// var taskIdCounter = 0;
// var formEl = document.querySelector("#task-form");//replaces buttonE1
// var buttonE1 = document.querySelector("#save-task");
// var tasksToDoEl = document.querySelector("#tasks-to-do");


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

var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");//replaces buttonE1
var tasksToDoEl = document.querySelector("#tasks-to-do");
var pageContentE1 = document.querySelector('#page-content');

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
  
  formEl.reset();  formEl.reset();
  
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

  //add task id as custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

 // add entire list item to list
  var taskActionsEl = createTaskActions(taskIdCounter);
  console.log(taskActionsEl);
  tasksToDoEl.appendChild(listItemEl);

  //increase task counter for next id
  taskIdCounter++;
};


//Function to create buttons with each task
var createTaskActions = function(taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";

  // create edit button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(editButtonEl);

  // create delete button
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(deleteButtonEl);
  return actionContainerE1;

  // var statusSelectE1 = document.createElement("select");
  // statusSelectE1.className = "select-status";
  // statusSelectE1.setAttribute("name", "status-change");
  // statusSelectE1.setAttribute("data-task-id", taskId);

  var statusChoices = ["To Do", "In Progress", "Completed"];
  for (let i =0; i < statusChoices.length; i++) {
     //create option element
     let statusOptionE1 = document.createElement("option");
     statusOptionE1.textContent = statusChoices[i];
     statusOptionE1.setAttribute("value", statusChoices[1]);

  //   //append to select
    statusSelectE1.appendChild(statusOptionE1);
  }

  // actionContainerE1.appendChild(statusSelectE1);
};

var taskButtonHandler = function(event) {
  //get target ekenebt frin event
  console.log(event.target);

  //delete button was clicked
  if (event.target.matches(".delete-btn")) {
    // get the element's task id
    var taskId = event.target.getAttribute("data-task-id");
    console.log(taskId);
  } else if (targetE1.mathces(".edit-btn")) {
    var taskId = targetE1.getAttribute("data-task-id");
    editTask(taskId)
  }
};

var editTask =function(taskId) {
  console.log("editing task #" + taskId);

  //get task list item element
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
}

var deleteTask = function(taskID) {
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  taskSelected.remove();

};

if (event.target.matches(".delete-btn")) {
  var taskId = event.target.getAttribute("data-task-id");
  deleteTask(taskId);
}

pageContentE1.addEventListener("click", taskButtonHandler);
formEl.addEventListener("submit", taskFormHandler);




// SOmething is broken, its not showing the buttons as ti should. module 4.3-6