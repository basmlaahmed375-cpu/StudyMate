let subjects = ["Math", "English", "Programming"];
let subjectCount = document.getElementById("subjectCount");
subjectCount.textContent = subjects.length;
let tasks = ["Task 1", "Task 2", "Task 3" , "Task 4"];
let totalTaskCount = document.getElementById("totalTaskCount");
totalTaskCount.textContent = tasks.length;
let completedTasks = ["Task 1" , "Task 2"];
let completedTaskCount = document.getElementById("completedTaskCount");
completedTaskCount.textContent = completedTasks.length;
let pendingTasks = ["Task 3 ", "Task 4"];
let pendingTaskCount = document.getElementById("pendingTaskCount");
pendingTaskCount.textContent = pendingTasks.length;
let completionRate = document.getElementById("completionRate");
let rate = (completedTasks.length/tasks.length) * 100;
completionRate.textContent = rate + "%";




