
let questions = document.getElementById("questions");
let answers = document.getElementsByClassName("btn-answer")

Let score, currentQuestion, questionSet;

function startGame(questions) {
    score = 0;
    currentQuestion = 0;
    questionSet = questions;
    displayQuestion();

}

function displayQuestion(){ 
    if(currentQuestion + 1 > questionSet.lenght){
        gameOver()
    
     } else { 
        questions.innerHTML = questionSet[CurrentQuestion].questions;
     for(let i =0; i + 1 <= answers.length; i++) {
        answers[i].innerHTML = questionSet[currentQuestion].choices[i];
        answers[i].dataset.answer = questionSet[currentQuestion].choices[i];
     }

     }

}

function checkAnswer(){

}

Function gameOver(){

}
