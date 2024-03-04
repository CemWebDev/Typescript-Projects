var addTaskButton = document.querySelector(".add-task-icon");
var deleteTask = document.querySelector(".todo-app__delete__task");
var todoInputElement = document.querySelector(".todo-app-input-element");
var tasksWrapper = document.querySelector(".todo-app__tasks");
var alertMessage = document.querySelector(".alert");
var closeAlertMessage = document.querySelector(".close-alert");
var maxTasks = 2;
var counter = 0;
if (addTaskButton && deleteTask && todoInputElement && tasksWrapper && alertMessage && closeAlertMessage) {
    var addTask = function () {
        if (counter >= maxTasks) {
            alertMessage.style.right = "4px";
            return;
        }
        var taskName = todoInputElement.value.trim();
        if (taskName) {
            var taskWrapper_1 = document.createElement("div");
            taskWrapper_1.classList.add("todo-app__task__wrapper");
            var taskHeader = document.createElement("div");
            taskHeader.classList.add("todo-app__task__header");
            var headerText = document.createElement("h1");
            headerText.textContent = "Task";
            taskHeader.appendChild(headerText);
            var taskDate = document.createElement("div");
            taskDate.classList.add("todo-app__task__date");
            var dateSpan = document.createElement("span");
            dateSpan.textContent = "2024";
            taskDate.appendChild(dateSpan);
            var taskContent = document.createElement("div");
            taskContent.classList.add("todo-app__task__name");
            taskContent.textContent = " ".concat(taskName);
            var deleteButton = document.createElement("button");
            deleteButton.classList.add("todo-app__delete__task");
            var icon = document.createElement("i");
            icon.classList.add("bi", "bi-trash3-fill");
            deleteButton.appendChild(icon);
            taskWrapper_1.appendChild(taskHeader);
            taskWrapper_1.appendChild(taskDate);
            taskWrapper_1.appendChild(taskContent);
            taskWrapper_1.appendChild(deleteButton);
            tasksWrapper.appendChild(taskWrapper_1);
            todoInputElement.value = "";
            deleteButton.addEventListener("click", function () {
                tasksWrapper.removeChild(taskWrapper_1);
            });
            counter++;
        }
    };
    addTaskButton.addEventListener("click", addTask);
    var throwAlertMessage = function () {
        alertMessage.style.right = "-600px";
    };
    closeAlertMessage.addEventListener("click", throwAlertMessage);
}
else {
    throw new Error("Could not find relevant HTML elements");
}
