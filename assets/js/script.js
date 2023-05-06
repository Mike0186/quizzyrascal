document.onload = console.log("the document has loaded");
let quizQuestion = document.getElementById("quiz-question");
let answers = document.getElementsByClassName("btn-answer");


let score, incorrect, currentQuestion, questionSet;

/*This piece of code was sited w3schools*/
function hide() {
    if (document.getElementById('cats')) {

        if (document.getElementById('cats').style.display == 'none') {
            document.getElementById('cats').style.display = 'block';
            document.getElementById('game').style.display = 'none';
        } else {
            document.getElementById('cats').style.display = 'none';
            document.getElementById('game').style.display = 'block';
        }
    }
}


function startGame(questions) {
    score = 0;
    incorrect = 0;
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
        ++score; document.getElementById('score').innerHTML = score;

    } else {
        ++incorrect;
        document.getElementById('incorrect').innerHTML = incorrect;

    }
    currentQuestion++;
    displayQuestion();
}


function gameOver() {
    window.location.href = "gameover.html";

}


