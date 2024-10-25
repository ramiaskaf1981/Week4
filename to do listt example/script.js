// Function to add a new task
function addTask() {
    // Get the task input field and its value
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    
    }

    // Create a new list item (li) element
    let li = document.createElement("li");

    // Create a text node with the task text and append to the li
    li.appendChild(document.createTextNode(taskText));

    // Create a delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.onclick = function () {
        // Remove the task from the list
        this.parentElement.remove();
        
    
    };

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Add the new task to the task list (ul)
    document.getElementById("taskList").appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
    
}
