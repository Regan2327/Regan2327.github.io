document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    // Add new task
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const li = document.createElement("li");
  
      // Toggle complete
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      // Task text
      li.textContent = taskText;
  
      // Remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent mark complete
        li.remove();
      });
  
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    });
  
    // Allow Enter key to add tasks
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTaskBtn.click();
      }
    });
  });
  