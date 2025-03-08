// script.js

// Select elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add task to the list
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Add task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    taskItem.appendChild(deleteBtn);

    // Add task to the list
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";

    // Mark task as completed
    taskSpan.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });
  }
});
