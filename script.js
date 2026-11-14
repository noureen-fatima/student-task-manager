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
  task.classList.add("task-card");
  const taskDetails = document.createElement("div");
  taskDetails.classList.add("task-details");
  const taskTitle = document.createElement("h3");
  taskTitle.textContent = title;
  taskDetails.append(taskTitle);

  const status = document.createElement("span");
  status.classList.add("task-status");
  status.textContent = "Status: Incomplete";
  taskDetails.append(status);

  const description = descriptionInput.value.trim();
  if (description) {
    const taskDescription = document.createElement("p");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = description;
    taskDetails.append(taskDescription);
  }

  task.append(taskDetails);
  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.textContent = "Mark complete";
  completeButton.setAttribute("aria-pressed", "false");
  completeButton.addEventListener("click", () => {
    const isComplete = task.classList.toggle("completed");
    status.textContent = `Status: ${isComplete ? "Completed" : "Incomplete"}`;
    completeButton.textContent = isComplete ? "Undo completion" : "Mark complete";
    completeButton.setAttribute("aria-pressed", String(isComplete));
  });
  taskActions.append(completeButton);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.setAttribute("aria-label", `Remove ${title}`);
  removeButton.addEventListener("click", () => {
    task.remove();
    emptyState.hidden = taskList.children.length > 0;
  });
  taskActions.append(removeButton);
  task.append(taskActions);

  taskList.append(task);
  emptyState.hidden = true;
  taskForm.reset();
  titleInput.focus();
});