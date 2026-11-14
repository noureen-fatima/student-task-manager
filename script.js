const taskForm = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");

titleInput.addEventListener("input", () => {
  titleInput.setCustomValidity("");
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  if (!title) {
    titleInput.setCustomValidity("Please enter a task title.");
    titleInput.reportValidity();
    return;
  }

  const task = document.createElement("li");
  const taskTitle = document.createElement("h3");
  taskTitle.textContent = title;
  task.append(taskTitle);

  const description = descriptionInput.value.trim();
  if (description) {
    const taskDescription = document.createElement("p");
    taskDescription.textContent = description;
    task.append(taskDescription);
  }

  taskList.append(task);
  emptyState.hidden = true;
  taskForm.reset();
  titleInput.focus();
});