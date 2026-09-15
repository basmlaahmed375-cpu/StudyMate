let score = 0;
let question1Answered = false;
let question2Answered = false;

let answer1 = document.getElementById("answer1");
answer1.addEventListener("click", function() {
    if (question1Answered == false) {
    alert("Correct Answer!");
    score++;
        question1Answered = true;
    }
});
let answer2 = document.getElementById("answer2");
answer2.addEventListener("click", function() {
    alert("Wrong Answer!");
});
let answer3 = document.getElementById("answer3");
answer3.addEventListener("click", function() {
    alert("Wrong Answer!");
});
let answer4 = document.getElementById("answer4");
answer4.addEventListener("click", function() {
    alert("Wrong Answer!");
});
    let answer5 = document.getElementById("answer5");
answer5.addEventListener("click", function() {
    if (question2Answered == false) {
    alert("Correct Answer!");
    score++;
    question2Answered = true;
    }
});
let answer6 = document.getElementById("answer6");
answer6.addEventListener("click", function() {
    alert("Wrong Answer!");
});

let showResult = document.getElementById("showResult");
showResult.addEventListener("click", function() {
    alert("Your Score: " + score + "/2");
});






