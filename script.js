
let taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit",function(event) {
    event.preventDefault();
     let taskName = document.getElementById("taskName").value;
     let taskSubject = document.getElementById("taskSubject").value;
     let taskDate = document.getElementById("taskDate").value;
     let taskPriority = document.getElementById("taskPriority").value;

    let taskList = document.getElementById("taskList");
    let taskItem = document.createElement("div");
    taskItem.style.border = "1px solid #ccc";
    taskItem.style.padding = "10px";
    taskItem.style.marginTop = "10px";
    taskItem.innerHTML = `
<strong>Task:</strong> ${taskName} <br>
<strong>Subject:</strong> ${taskSubject} <br>
<strong>Due Date:</strong> ${taskDate} <br>
<strong>Priority:</strong> ${taskPriority} <br>
`;
taskList.appendChild(taskItem);
taskForm.reset();
});
