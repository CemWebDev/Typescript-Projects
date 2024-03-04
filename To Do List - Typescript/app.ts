const addTaskButton: HTMLButtonElement | null = document.querySelector(
  ".add-task-icon"
) as HTMLButtonElement;
const deleteTask: HTMLButtonElement | null = document.querySelector(
  ".todo-app__delete__task"
) as HTMLButtonElement;
const todoInputElement: HTMLInputElement | null = document.querySelector(
  ".todo-app-input-element"
) as HTMLInputElement;

const tasksWrapper: HTMLElement | null = document.querySelector(
  ".todo-app__tasks"
) as HTMLElement;
const alertMessage: HTMLElement | null = document.querySelector(".alert") as HTMLElement;
const closeAlertMessage: HTMLElement | null = document.querySelector(".close-alert") as HTMLElement;
let maxTasks: number = 2;
let counter: number = 0;

if (addTaskButton && deleteTask && todoInputElement && tasksWrapper && alertMessage && closeAlertMessage) {
  const addTask = (): void => {
    if (counter >= maxTasks) {
      alertMessage.style.right  = "4px";
      return;
    }
    const taskName: string = todoInputElement.value.trim();
    if (taskName) {
      const taskWrapper = document.createElement("div");
      taskWrapper.classList.add("todo-app__task__wrapper");
      const taskHeader = document.createElement("div");
      taskHeader.classList.add("todo-app__task__header");
      const headerText = document.createElement("h1");
      headerText.textContent = "Task";
      taskHeader.appendChild(headerText);
      const taskDate = document.createElement("div");
      taskDate.classList.add("todo-app__task__date");
      const dateSpan = document.createElement("span");
      dateSpan.textContent = "2024";
      taskDate.appendChild(dateSpan);
      const taskContent = document.createElement("div");
      taskContent.classList.add("todo-app__task__name");
      taskContent.textContent = ` ${taskName}`;
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("todo-app__delete__task");
      const icon = document.createElement("i");
      icon.classList.add("bi", "bi-trash3-fill");
      deleteButton.appendChild(icon);
      taskWrapper.appendChild(taskHeader);
      taskWrapper.appendChild(taskDate);
      taskWrapper.appendChild(taskContent);
      taskWrapper.appendChild(deleteButton);
      tasksWrapper.appendChild(taskWrapper);
      todoInputElement.value = "";
      deleteButton.addEventListener("click", () => {
        tasksWrapper.removeChild(taskWrapper);
      });
      counter++;
    }
  };
  addTaskButton.addEventListener("click", addTask);
  const throwAlertMessage = (): void => {
    alertMessage.style.right = "-600px";
  }
  closeAlertMessage.addEventListener("click", throwAlertMessage);
} else {
  throw new Error("Could not find relevant HTML elements");
}
