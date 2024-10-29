function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    listItem.onclick = () => listItem.classList.toggle("completed");
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskList.removeChild(listItem);
  
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  
    taskInput.value = "";
  }
  