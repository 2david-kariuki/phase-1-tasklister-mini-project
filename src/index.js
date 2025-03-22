document.addEventListener("DOMContentLoaded", () => {
  // Select form and task list
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const taskText = taskInput.value.trim();
    if (taskText === "") return; 

    
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });

    
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

  
    taskInput.value = "";
  });
});
