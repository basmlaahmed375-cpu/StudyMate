let subjectForm = document.getElementById("subjectForm");
subjectForm.addEventListener("submit",function(event) {
    event.preventDefault();
     let subjectName = document.getElementById("subjectName").value;
     let studyHours = document.getElementById("subjectHours").value;
     let subjectPriority = document.getElementById("subjectPriority").value;
     let subjectList = document.getElementById("subjectList");

    let subjectItem = document.createElement("div");
    subjectItem.style.border = "1px solid #ccc";
    subjectItem.style.padding = "10px";
    subjectItem.style.marginTop = "10px";

    subjectItem.innerHTML = `
<strong>Subject:</strong> ${subjectName} <br>
<strong>Hours:</strong> ${studyHours} <br>
<strong>Priority:</strong> ${subjectPriority} <br>
`;
subjectList.appendChild(subjectItem);
subjectForm.reset();
});