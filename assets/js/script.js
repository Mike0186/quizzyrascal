document.onload = console.log("the document has loaded");
let quizQuestion = document.getElementById("quiz-question");
let answers = document.getElementsByClassName("btn-answer");

let score, currentQuestion, questionSet;

function startGame(questions) {
    score = 0;
    currentQuestion = 0;
    questionSet = questions;
    displayQuestion();

}

function displayQuestion() {
    if (currentQuestion + 1 > questionSet.length) {
        gameOver();

    } else {
        quizQuestion.innerHTML = questionSet[currentQuestion].question;
        for (let i = 0; i + 1 <= answers.length; i++) {
            answers[i].innerHTML = questionSet[currentQuestion].choices[i];
            answers[i].dataset.answer = questionSet[currentQuestion].choices[i];
        }

    }

}

function checkAnswer(clickedAnswer) {
    if (clickedAnswer.dataset.answer == questionSet[currentQuestion].correct) {
        score++;
        alert("You Are Correct!");
    } else {
        alert("Sorry Incorrect");
    }
    currentQuestion++;
    displayQuestion();
}

function gameOver() {
    alert("Game Over! You scored " + score + "points!");
    location.reload();
}
