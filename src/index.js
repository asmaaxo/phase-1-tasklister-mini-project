document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.createElement("ul");
  taskList.id = "tasks";
  document.querySelector("#main-content").appendChild(taskList);
  
  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

  // Get input values
    const newTaskDescription = document.querySelector("#new-assignment-description").value;
    const priority = document.querySelector("#priority").value;
    const dueDate = document.querySelector("#due-date").value;

    //Incase task description is empty
    if (newTaskDescription.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    // Create new task item
    const taskItem = document.createElement("li");

    // Set task content with description and due date
    const taskContent = document.createElement("span");
    taskContent.textContent = `${newTaskDescription} (Due: ${formatDueDate(dueDate)})`;
    taskContent.style.color = getPriorityColor(priority);

    // Create and append delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => taskItem.remove());

    // Add content and button to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    // Add task item to the task list
    taskList.appendChild(taskItem);

    // Clear the form fields
    form.reset();
  });

  // Get color based on priority
  function getPriorityColor(priority) {
    switch (priority) {
      case "high": return "red";
      case "medium": return "orange";
      case "low": return "green";
      default: return "black";
    }
  }

  // Format date for display
  function formatDueDate(date) {
    if (!date) return "No due date";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
});

