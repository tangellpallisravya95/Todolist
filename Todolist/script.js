document.getElementById("add-task").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("task-list");

  // Create list item
  const li = document.createElement("li");
  li.className = "task-item";

  // Add text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Buttons container
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "task-buttons";

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.textContent = "✓";
  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Add buttons to div
  buttonDiv.appendChild(completeBtn);
  buttonDiv.appendChild(deleteBtn);

  // Add span and buttons to list item
  li.appendChild(span);
  li.appendChild(buttonDiv);

  // Add list item to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});