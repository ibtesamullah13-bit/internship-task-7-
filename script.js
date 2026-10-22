const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");

function updateCount() {
    taskCount.innerText = "Total tasks: " + taskList.children.length;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        message.innerText = "Please enter a task!";
        return;
    }

    message.innerText = "";

    const li = document.createElement("li");
    const taskName = document.createElement("span");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    taskName.innerText = taskText;

    completeBtn.innerText = "Complete";
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completeBtn.innerText = "Undo";
        } else {
            completeBtn.innerText = "Complete";
        }
    });

    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    li.appendChild(taskName);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
