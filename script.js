// script.js
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to add a new task
addButton.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task === "") {
    alert("🚨 Oopsie! Please add a task first! 💖");
    return;
  }

  // Create the task item
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const taskText = document.createElement("span");
  taskText.textContent = `✨ ${task} ✨`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  // Add delete functionality
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = "";
});

// Allow "Enter" key to add tasks
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

